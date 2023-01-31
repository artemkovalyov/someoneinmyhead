---
slug: tweak-xkb-for-emacs-in-linux-to-make-alt-meta-hyper-and-super-work
title: Tweak XKB to make Alt, Meta, Hyper & Super work in Emacs
description: Tweak XKB to make Alt, Meta, Hyper & Super modifiers available for Emacs in Linux
excerpt: |
  Default XKB configuration leaves you only with the most popular modifiers like Alt, Super, Ctrl, and Shift.
  To get Hyper and Meta in my Emacs, I mapped them to spare modifier keys.
  Along the way I repurposed Caps Lock, improved language switching and got more convenient Compose key for German letters.
image: ./keyboard.jpg
author: Artem Kovalov
published: true
publishedTime: 2022-10-26T16:00:30+02:00
modifiedTime: 2022-10-26T16:00:30+02:00
expirationTime: 2022-10-26T16:00:30+02:00
series: emacs
section: Technology
tags:
  - Emacs
  - Linux
  - Geek
uuid: ccff7f23-096e-406c-afd2-8287711e5404
---

<script>
    import Head from '$lib/components/Head.svelte';
</script>

<Head {title} {description} {author} {image} {published} {publishedTime} {modifiedTime} {expirationTime} {tags} {section} type={"article"} />

![Emacs KBD](./dots.jpg)
![woo hoo](../../../routes/about/flowers.jpg)

# {title}

After reading this article you should be able to remap your meta keys also known as modifier keys and make them distinguishable for your desktop environment and applications. Most of the Linux distributions ship a default [XKB](https://en.wikipedia.org/wiki/X_keyboard_extension) configuration that leaves you with only the most popular modifiers like <kbd>Alt</kbd> + <kbd>Enter</kbd>, <kbd>Super</kbd>, <kbd>Ctrl</kbd>, and <kbd>Shift</kbd>. They are usually mapped to respective keys on your keyboard. <kbd>Super</kbd> is most frequently mapped to <kbd>Win</kbd> for most laptops.

You can usually tweak your key configuration via the system settings of your desktop environment. Leave it as simple as that if it works for you. On the flip side, it never lets you configure keys granular enough and most importantly fine-tune the modifiers. To Emacs users like me, modifiers are of utmost importance.

## The Configuration I Want to Achieve

I use <kbd>Ctrl</kbd>, <kbd>Alt</kbd>, <kbd>Meta</kbd>, <kbd>Super</kbd>, and <kbd>Hyper</kbd> modifiers in my key combinations. Do you think that's nuts? Anyway, to achieve that setup, I needed all the modifiers to be assigned to different physical keys. Luckily we have plenty of keys to re-assign. My desired setup looks like the following:

| Modifier key       | Button                                      | Modifier level | Comment                                                     |
| :----------------- | :------------------------------------------ | :------------- | :---------------------------------------------------------- |
| <kbd>Shift</kbd>   | <kbd>Shift</kbd>                            | shift          | I keep it as is                                             |
| None               | None                                        | lock           | I don't use it                                              |
| <kbd>Control</kbd> | <kbd>Left Control</kbd>                     | control        | Keep it as is                                               |
| <kbd>Alt</kbd>     | <kbd>Left Alt</kbd>                         | mod1           | Better keep Alt as mod1                                     |
| <kbd>Meta</kbd>    | <kbd>Left Win</kbd>                         | mod2           | Emacs loves it. I want it on Win                            |
| <kbd>Hyper</kbd>   | <kbd>Caps Lock</kbd>                        | mod3           | I assigned it to Caps Lock                                  |
| <kbd>Super</kbd>   | <kbd>Right Alt</kbd>                        | mod4           | I want it on Left Alt                                       |
| Level 3            | <kbd>Shift</kbd> + <kbd>Right Control</kbd> | mod5           | Useful with national keyboards with 3rd level keys engraved |

## How My Starting Point Looks Like?

---

Check XKB configuration: setxkbmap -print -verbose 10
https://wiki.archlinux.org/title/Xorg/Keyboard_configuration#Viewing_keyboard_settings

---

For that let's run `xmodmap` in the terminal.

```bash
○ → xmodmap
xmodmap:  up to 4 keys per modifier, (keycodes in parentheses):

shift       Shift_L (0x32),  Shift_R (0x3e)
lock        Caps_Lock (0x42)
control     Control_L (0x25),  Control_R (0x69)
mod1        Alt_L (0x40),  Alt_R (0x6c),  Meta_L (0xcd)
mod2        Num_Lock (0x4d)
mod3
mod4        Super_L (0x85),  Super_R (0x86),  Super_L (0xce),  Hyper_L (0xcf)
mod5        ISO_Level3_Shift (0x5c),  Mode_switch (0xcb)
```

The results are rather terrible.

- <kbd>Alt</kbd> and <kbd>Meta</kbd> share `mod1`
- `mod2` is taken by <kbd>Num Lock</kbd>
- `mod3` is empty
- <kbd>Super</kbd> and <kbd>Hyper</kbd> shared `mod4`

## Let's See How We Can Fix It

To my opinion `XKB` has the most intricate and tangled API I've ever worked with. That's caused by an intrinsic complexity of the domain and lots of inherited legacy. However, my personal believe is - setting up your keyboard shouldn't be a rocket science. Sadly, it's even a bit worse than that but let's get to business instead of complaining.

### Step 1: figure out existing XKB configuration

In Linux it live in `/usr/share/X11/xkb/`

```treeview
/usr/share/X11/xkb/
├── compat
├── geometry
├── keycodes
├── rules
├── symbols
└── types
```

```treeview
static/
├── favicon.ico
├── favicon.png
└── me.jpg
```

We are mostly interested in `symbols`, and `rules` folders. The `symbols` folder contains all the layout configurations and modular configuration snippets for the most frequently used keys. You can study configuration files found in a `symbols` folder to get an inspiration and an intuition about ways to write your own configuration. The `rules` folder lists sets of rules which can be used to obtain an exact XKB configuration.

To check your specific configuration run `setxkbmap -print -verbose 10`

```bash
○ → setxkbmap -print -verbose 10
Setting verbose level to 10
locale is C
Trying to load rules file ./rules/evdev...
Trying to load rules file /usr/share/X11/xkb/rules/evdev...
Success.
Applied rules from evdev:
rules:      evdev
model:      pc101
layout:     us,ru,ua
options:    pc
Trying to build keymap using the following components:
keycodes:   evdev+aliases(qwerty)
types:      complete
compat:     complete
symbols:    pc+us+ru:2+ua:3+inet(evdev)
geometry:   pc(pc101)
xkb_keymap {
xkb_keycodes  { include "evdev+aliases(qwerty)" };
xkb_types     { include "complete"      };
xkb_compat    { include "complete"      };
xkb_symbols   { include "pc+us+ru:2+ua:3+inet(evdev)"   };
xkb_geometry  { include "pc(pc101)"     };
};
```

The `evdev` aka [event device](https://en.wikipedia.org/wiki/Evdev) rules are most commonly used on Linux. You can see that my `symbols` configuration contains `pc+us+ru:2+ua:3+inet(evdev)`. It means that my base configuration is `pc` with `us`, `ru`, and `ua` layouts and `inet(evdev)` option that makes all those vendor and multimedia buttons work on my laptop.

### Step 2: Adjust The Configuration To Make Emacs and Linux Happy

To start with your own configuration we can take `pc` or any other most close to your desired state. Below I will guide you over my configuration, which I creatively named it [art-mods](https://github.com/artemkovalyov/.dot/blob/main/xkb/symbols/art-mods).

```bash
○ → cat ~/.dot/xkb/symbols/art-mods
default partial modifier_keys
xkb_symbols "art-mods" {

modifier_map none {Num_Lock, Meta_L, Meta_R, Alt_L, Alt_R, Super_L, Super_R, Hyper_L, Hyper_R };

key <CAPS> { [ Hyper_L, ISO_Next_Group ] };
key <RCTL> { [ Multi_key, ISO_Level3_Shift ] };
key <LWIN> { [ Meta_L ] };
key <LALT> { [ Alt_L, Alt_L ] };
key <RALT> { [ Super_R ] };

// Beginning of modifier mappings.
modifier_map Mod1   { <ALT>,  <LALT> };
modifier_map Mod2   { <META>, <LWIN> };
modifier_map Mod3   { <HYPR>, <CAPS> };
modifier_map Mod4   { <SUPR> };
};
```

The first thing is cleaning up all the modifiers to release them and let us re-assign keys to desired modifiers. The modifiers are simply bits raised when the key assigned to that modifier is pressed. You can see those bits in action by running `xkbwatch` and pressing your modifier buttons.

Then we assign virtual keys to desired physical buttons on your keyboard. You can learn the names of keys and buttons the existing configuration file like `pc` in the symbols folder or if it is not there look it up in `/usr/share/X11/xkb/keycodes/evdev`. Here are relevant chunks from my `keycodes/evdev` file.

```bash
<LALT> = 64;
<LCTL> = 37;
<SPCE> = 65;
<RCTL> = 105;
<RALT> = 108;
// Microsoft keyboard extra keys
<LWIN> = 133;
<RWIN> = 134;
<COMP> = 135;
alias <MENU> = <COMP>;

// Fake keycodes for virtual keys
<LVL3> =   92;
<MDSW> =   203;
<ALT>  =   204;
<META> =   205;
<SUPR> =   206;
<HYPR> =   207;
```

You can see that I found it useful to leverage virtual `keycodes` when setting modifier levels. I haven't figured out why it worked better than listing all physical button names. By coincidence, it also looks much cleaner.

:::note{.note.admonition title="Alt key is twisted" #altwin}

You might have noticed that for <kbd>Alt</kbd> I set a modifier using both virtual `<ALT>` and physical `<LALT>` `keycodes`. I use KDE as my linux desktop and without this modification <kbd>Alt</kbd> + <kbd>Tab</kbd> combination to cycle through open windows didn't work correctly. This probably relates to the fact that some applications rely not only on the modifier bits but also on eventual **keysym** that would be different for the virtual <kbd>Alt</kbd> and physical <kbd>Alt</kbd> button representing it. A formula to identify a **keysym** is `(keycode, group, state) → keysym`. Find more details [here](https://wiki.archlinux.org/title/X_keyboard_extension#Keycode_translation).

:::

You can easily see this by applying your configuration with and without specifying the physical <kbd>Alt</kbd> and checking the `xmodmap` output.

With only virtual `<Alt>` specified in the configuration like this `modifier_map Mod1   { <ALT> };` the `xmodmap` output looks like:

```
mod1        Alt_L (0xcc)
```

When adding `<LALT>` to the configuration as shown above, it will also show up on you `xmodmap` output.
Now you also see Alt_L (0x40) which when converted from #hex is equal to keycode 64 corresponding in our configuration to `<LALT>` = 64;

```
mod1        Alt_L (0x40),  Alt_L (0xcc)
```

After adding `<LALT>` to the configuration it fixed my window switching in KDE and made my <kbd>Alt</kbd> key behave normally.
That doesn't end our surprises though.

### Step 3: Make Emacs Distinguish Alt from Meta (Win)

The <kbd>Meta</kbd> key has a very special meaning in Emacs but it is often missing on modern keylboards. By default Emacs matches <kbd>Meta</kbd> it to <kbd>Alt</kbd>. I remapped my <kbd>Win</kbd> to <kbd>Meta</kbd> and intend to have a good use of a separate <kbd>Alt</kbd> key. Defying all th mapping, Emacs still recognizes my left <kbd>Alt</kbd> as <kbd>Meta</kbd>. I was puzzled and kept hanging on this issue for quite a while before running `xmodmap -pke` and seeing that <kbd>Alt</kbd> and <kbd>Meta</kbd> share the same `keycode`. Check codes **64** and **108** below.

```bash
○ → xmodmap -pke | grep Alt
keycode  64 = Alt_L Meta_L Alt_L Meta_L Alt_L Meta_L
keycode 108 = Alt_R Meta_R Alt_R Meta_R ISO_Level3_Shift
keycode 204 = NoSymbol Alt_L NoSymbol Alt_L NoSymbol Alt_L
```

Because of that Emacs can't distinguish them and keeps using <kbd>Alt</kbd> as <kbd>Meta</kbd>.

I dug everywhere to check for aliases or explicit assignments that would cause <kbd>Alt</kbd> and <kbd>Meta</kbd> share the same `keycode`. The eventual discovered that so called `level2` of a key, which you achieve when pressing <kbd>Shift</kbd> before the key, makes it show up on the same `keycode` as the `level1` and pollute it in a way. It looks something like this in the configuration file `key <LALT> { [ Alt_L, Meta_L ] };`. This says that if you press <kbd>Shift</kbd> + <kbd>Left Alt</kbd> it will produce `Meta_L` but the `keycode` will stay **64** which matches `<LALT>`. Running `xmodmap` without parameters will not reveal that which makes things even more intricate.

What deceived me is trying to keep my configuration clean and minimal. I tried to make least possible intrusion into the configuration files and initially defined `<LALT>` as `<LALT> { [ Alt_L ] };`. By doing this I skipped `level2` state configuration for <kbd>Left Alt</kbd> or in other words the way <kbd>Left Alt</kbd> behave when <kbd>Shift</kbd> is pressed and allowed default configuration from `pc` to kick in. Here is the snipped from `/usr/share/X11/xkb/symbols/altwin` file that spoiled my configuration:

```bash
partial modifier_keys
xkb_symbols "meta_alt" {
key <LALT> { [ Alt_L, Meta_L ] };
key <RALT> { type[Group1] = "TWO_LEVEL",
symbols[Group1] = [ Alt_R, Meta_R ] };
modifier_map Mod1 { Alt_L, Alt_R, Meta_L, Meta_R };
};
```

After changing definition of `<LALT>` to `key <LALT> { [ Alt_L, Alt_L ] };` things got back to normal. The output of `xmodmap -pke | grep Alt` now looks unambiguous with only <kbd>Alt</kbd> on `keycode` 64. Don't ask me about that `keycode` 204 because it didn't any troubles.

```bash
○ → xmodmap -pke | grep Alt
keycode  64 = Alt_L Alt_L Alt_L Alt_L Alt_L Alt_L
keycode 204 = NoSymbol Alt_L NoSymbol Alt_L NoSymbol Alt_L
```

### Step 4: Test Your XKB Configuration

setxkbmap -print -verbose 10

`setxkbmap -option "terminate:ctrl_alt_bksp"`

setxkbmap -model pc104 -layout us -option ""

### Step 5: Adding Your Modifiers Configuration to XKB Rules

After getting your configuration tested

### Persist Your XKB Configuration

### Configure Your Desktop Environment with New XKB Configuration
