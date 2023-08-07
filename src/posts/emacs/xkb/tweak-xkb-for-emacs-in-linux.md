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
series: emacs
section: Technology
tags:
  - Emacs
  - Linux
  - Geek
uuid: ccff7f23-096e-406c-afd2-8287711e5404
---

<script>
    import imageLink from './keyboard.jpg';
</script>

<Head {title} {description} {author} {publishedTime} {modifiedTime} {tags} {section} type={"article"} {imageLink}/>

![Make Alt, Super, Ctrl, and Shift behave in Linux](./keyboard.jpg)

# {title}

## Intro

I'm a long term Linux enthusiast but I've never tinkered much with keyboard settings.
Everything mostly worked for me using standard configuration tools like `System Settings` for KDE Plasma or whatever else being a replacement for Gnome and other desktop environments.

Then I turned to Emacs as my text editor and learned that [XKB](https://en.wikipedia.org/wiki/X_keyboard_extension) configuration in Linux is no joke.
Standard keyboard setting tools can do as much if you need anything beyond the most widespread key assignment. Emacs on the other hand could clearly benefit from recognizing most of so called Meta keys scattered around almost every keyboard.
For that reason, I had to dive into the guts of XKB to make my desired setup work.
This helped me better understand how X server manages keyboard configuration.
As a side effect of this, I also solved other keyboard related annoyances like:

- repurposing of <kbd>Caps Lock</kbd>
- enhancing language switching
- and most importantly - reproducible configuration as code for my keyboard setup that works on my private and work laptops out of the box.

This guide is a quick reminder to myself because I usually lose memory about all the gears involved when configuring and in some cases debugging my keyboard settings.

## What are you going to take home?

A bit more understanding about remapping of your meta keys also known as modifier keys. This will make them distinguishable for your desktop environment and applications.

:::warning{.warning.admonition title="Do it on your own risk"}

X server is very easy to break with wrong configuration.
It might require skills and time to recover your system back to operational state.
Do backups, go in small increments and be warned of potential implications.

:::

## What's our starting point?

:::info{.info.admonition title="Default XKB configuration" #default-xkb-configuration}

Most of the Linux distributions ship a default XKB configuration that leaves you with only the most popular modifiers like <kbd>Alt</kbd>, <kbd>Enter</kbd>, <kbd>Super</kbd>, <kbd>Ctrl</kbd>, and <kbd>Shift</kbd>. They are usually mapped to respective keys on your keyboard. <kbd>Super</kbd> is most frequently mapped to <kbd>Win</kbd> key on the most laptops I've used.

:::

Although some tweaks are still possible via your desktop environment, as of July 2023 it never lets you configure keys granular enough and most importantly fine-tune the modifier bits.
If you're using Emacs or need more functional keys for a different reason you have no other choice but preparation you XKB configuration yourself.

## The Configuration I Want to Achieve

I use <kbd>Ctrl</kbd>, <kbd>Alt</kbd>, <kbd>Meta</kbd>, <kbd>Super</kbd>, and <kbd>Hyper</kbd> modifiers in my key combinations. To achieve this somewhat extravagant setup, I needed all the modifiers to be assigned to different physical keys on my laptop's keyboard. Luckily we have plenty of keys to remap. My desired setup looks like the following:

| Modifier           | Physical key                                | Modifier level | Comment                                                               |
| :----------------- | :------------------------------------------ | :------------- | :-------------------------------------------------------------------- |
| <kbd>Shift</kbd>   | <kbd>Shift</kbd>                            | shift          | Not changed                                                           |
| None               | None                                        | lock           | I do not use Scrol Lock and unassigned it.                            |
| <kbd>Control</kbd> | <kbd>Left Control</kbd>                     | control        | Assign it to left Control                                             |
| <kbd>Alt</kbd>     | <kbd>Left Alt</kbd>                         | mod1           | Assign it to left Alt                                                 |
| <kbd>Meta</kbd>    | <kbd>Left Win</kbd>                         | mod2           | Meta is Left Win key. Emacs is famous for loving Meta.                |
| <kbd>Hyper</kbd>   | <kbd>Caps Lock</kbd>                        | mod3           | Assign Hyper to Caps Lock                                             |
| <kbd>Super</kbd>   | <kbd>Right Alt</kbd>                        | mod4           | Assign Super to Right Alt                                             |
| <kbd>Compose</kbd> | <kbd>Right Control</kbd>                    | mod4           | Assign Compose to Right Control. Useful for producing special symbols |
| Level 3            | <kbd>Shift</kbd> + <kbd>Right Control</kbd> | mod5           | Useful with national keyboards with 3rd level keys engraved           |

## Let's See How Modifiers are Assigned by Default

It's time to open terminal and run `xmodmap`.
The output below is my starting point.
I want to convert into the configuration shared above.

```bash
○ → xmodmap
// highlight-start
xmodmap:  up to 4 keys per modifier, (keycodes in parentheses):

shift       Shift_L (0x32),  Shift_R (0x3e)
lock        Caps_Lock (0x42)
// highlight-end
control     Control_L (0x25),  Control_R (0x69)
// highlight-next-line
mod1        Alt_L (0x40),  Alt_R (0x6c),  Alt_L (0xcc),  Meta_L (0xcd)
mod2        Num_Lock (0x4d)
mod3
mod4        Super_L (0x85),  Super_R (0x86),  Super_L (0xce),  Hyper_L (0xcf)
mod5        ISO_Level3_Shift (0x5c)
```

These initial keyboard settings are rather terrible and mix multiple modifier levels together.

- <kbd>Alt</kbd> and <kbd>Meta</kbd> both share `mod1` which means my system can't tell difference between this modifiers. In such situation Emacs will simply fall back to treating <kbd>Alt</kbd> as <kbd>Meta</kbd>.
- `mod2` is taken by <kbd>Num Lock</kbd> which means I need to free it up if I want ot use it.
- `mod3` is empty which is such a waste in my case
- <kbd>Super</kbd> and <kbd>Hyper</kbd> both squeezed into `mod4` while `mod3` is so lonely

For comparison, here's how `xmodmap` output looks after I apply my successful configuration described in this article:

```bash

○ → xmodmap
xmodmap:  up to 2 keys per modifier, (keycodes in parentheses):

shift       Shift_L (0x32),  Shift_R (0x3e)
lock
control     Control_L (0x25)
mod1        Alt_L (0x40)
mod2        Meta_L (0x85)
mod3        Hyper_L (0x42),  ISO_Level5_Shift (0xcb)
mod4        Super_R (0x6c)
mod5        ISO_Level3_Shift (0x5c)
```

## Step by Step Guide to Achieve Desired Key Mapping

In my opinion `XKB` has the most intricate and tangled API I have ever worked with.
The Arch Linux guide about [X keyboard extensions](https://wiki.archlinux.org/title/X_keyboard_extension#top-page) mostly agrees with me, especially so when it comes to modifiers and [virtual modifiers](https://wiki.archlinux.org/title/X_keyboard_extension#Virtual_Modifiers).

:::note{.note.admonition title="My take on XKB complexity" id="reason-for-complexity"}

In my opinion, it is caused by an intrinsic complexity of handling so many keyboard devices our there in the wild.
Let's not forget about huge heritage of early days of computer era causing lots of legacy that still has to be supported for compatibility.
However, my personal believe is - setting up your keyboard should not be a rocket science. Sadly, it still is and I hope it's going to change soon.

:::

Time to get to work instead of complaining.

### Step 1: Check out existing XKB configuration

In Linux it lives in `/usr/share/X11/xkb/`

```
/usr/share/X11/xkb/
├── compat
├── geometry
├── keycodes
├── rules
├── symbols
└── types
```

The directories that interest us are `symbols`, and `rules`.
The `symbols` directory contains all the shipped layout configurations together with modular configuration snippets for the most frequently used key mappings.
You can study configuration files found in a `symbols` folder to get an inspiration and an intuition about ways to write your own configuration. The `rules` directory lists sets of rules which can be used to obtain an exact XKB configuration.

Run `setxkbmap -print -verbose 10` to check what rules apply in your current session setup.

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
layout:     us,ua
options:    pc
Trying to build keymap using the following components:
keycodes:   evdev+aliases(qwerty)
types:      complete
compat:     complete
symbols:    pc+us+ua:3+inet(evdev)
geometry:   pc(pc101)
xkb_keymap {
xkb_keycodes  { include "evdev+aliases(qwerty)" };
xkb_types     { include "complete"      };
xkb_compat    { include "complete"      };
xkb_symbols   { include "pc+us+ua:3+inet(evdev)"   };
xkb_geometry  { include "pc(pc101)"     };
};
```

The `evdev` aka [event device](https://en.wikipedia.org/wiki/Evdev) rules are most commonly used on Linux. You can see that my `symbols` configuration contains `pc+us+ua:3+inet(evdev)`.
This means that my base configuration is `pc` with two layouts `us` and `ua` refined by `inet(evdev)` option.
This option makes all those so called vendor keys and multimedia buttons work.

:::note{.note.admonition title="What are vendor keys"}

Vendor keys are usually located on the top bar of your keyboard together with `F-keys`.
They help you invoke special functions like:

- manage multiple displays
- control volume and brightness -
- switch on and off your networks devices
- send your PC to sleep mode
- control you media player
- yada, yada, yada

:::

### Step 2: Adjust The Configuration To Make Emacs and Linux Happy

To start with your own configuration we can take `pc` or any other most similar to your desired variant.
Below I will guide you over my configuration, which I "creatively" named [art-mods](https://github.com/artemkovalyov/.dot/blob/main/xkb/symbols/art-mods).

```bash
○ → cat ~/.dot/xkb/symbols/art-mods
default partial modifier_keys
xkb_symbols "art-mods" {

// clean all the modifiers
modifier_map none {Num_Lock, Meta_L, Meta_R, Alt_L, Alt_R, Super_L, Super_R, Hyper_L, Hyper_R };

// make desired key assignment, the second variant is when we press shift
key <CAPS> { [ Hyper_L, ISO_Next_Group ] };
key <RCTL> { [ Multi_key, ISO_Level3_Shift ] };
key <LWIN> { [ Meta_L ] };
key <LALT> { [ Alt_L, Alt_L ] };
key <RALT> { [ Super_R ] };

// remap modifiers
modifier_map Mod1   { <ALT>,  <LALT> };
modifier_map Mod2   { <META>, <LWIN> };
modifier_map Mod3   { <HYPR>, <CAPS> };
modifier_map Mod4   { <SUPR> };
};
```

Initially I clean all the modifier levels to release them and let us remap them to desired keys.
The modifiers are simply bits raised when the key assigned to that modifier is pressed.
You can see those bits in action by running `xkbwatch` and pressing modifier buttons like <kbd>Alt</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd>.

Then we assign virtual keys to desired physical buttons on the keyboard.
You can learn the names of keys and buttons from the existing configuration file like `/usr/share/X11/xkb/symbols/pc` or if it is not there look it up in `/usr/share/X11/xkb/keycodes/evdev` file. Here are relevant chunks from my `keycodes/evdev` file.

```bash

// Physical keys found on the keyboard
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

// Fake keycodes for virtual modifiers
<LVL3> =   92;
<MDSW> =   203;
<ALT>  =   204;
<META> =   205;
<SUPR> =   206;
<HYPR> =   207;
```

I found it useful to leverage virtual `keycodes` when setting modifier levels because they are deeply integrated into standard XKB configuration.
I have not exactly figured out why it worked better than listing all physical button names.
Allegedly it is because virtual modifiers override my settings by simply being defined.
Because as long as Virtual modifier `V` is defined and share at least one `keysym` with a real modifier bit `M` it gets associated with the modifier level in question.

:::note{.note.admonition title="Compatibility with you Desktop Environment" #altwin}

You might have noticed that for <kbd>Alt</kbd> I set a modifier using both virtual `<ALT>` and physical `<LALT>`. In my KDE desktop environment cycling over open windows with the default <kbd>Alt</kbd> + <kbd>Tab</kbd> shortcut did not work correctly by latching on the last window chosen.
This probably relates to the [fact](https://wiki.archlinux.org/title/X_keyboard_extension#Virtual_Modifiers) that some applications rely not only on the modifier bits but also on eventual **keysym** that would be different for the virtual <kbd>Alt</kbd> and physical <kbd>Alt</kbd> button representing it.
A formula to identify a **keysym** is `(keycode, group, state) → keysym`.
Find more details [here](https://wiki.archlinux.org/title/X_keyboard_extension#Keycode_translation).
Eventually adding both virtual modifiers and physical key to the same modifier level did the trick.

:::

You can easily see this by applying this configuration with and without specifying the physical <kbd>Alt</kbd> key and checking the `xmodmap` output.

With only virtual `<Alt>` specified in the configuration like this `modifier_map Mod1   { <ALT> };` the `xmodmap` output looks like:

```
mod1        Alt_L (0xcc)
```

When adding `<LALT>` to the configuration as shown above, I get one more keycode for <kbd>Alt</kbd> to show up on my `xmodmap` output.
If we translate `Alt_L (0x40)` from `#hex` it is equal to `keycode` **64** corresponding in our configuration to `<LALT>` = 64;

```
mod1        Alt_L (0x40),  Alt_L (0xcc)
```

By adding `<LALT>` to the configuration I fixed my window switching in KDE and made my <kbd>Alt</kbd> key behave as expected.
That does not end our surprises though.

### Step 3: Make Emacs Distinguish Alt from Meta

The <kbd>Meta</kbd> key has a very special meaning in Emacs but it is often missing on modern keyboards.
That is why, by default Emacs matches <kbd>Meta</kbd> to <kbd>Alt</kbd> for compatibility.
I was not happy with this and remapped my <kbd>Win</kbd> key to <kbd>Meta</kbd> so that I can use an <kbd>Alt</kbd> key in Emacs as well.
After doing the mapping, Emacs kept recognizing my left <kbd>Alt</kbd> as <kbd>Meta</kbd>.
I was puzzled and kept hanging on this issue for quite a while before running `xmodmap -pke` and seeing that <kbd>Alt</kbd> and <kbd>Meta</kbd> share the same `keycode`.
Check codes **64** and **108** below.

```bash
○ → xmodmap -pke | grep Alt
keycode  64 = Alt_L Meta_L Alt_L Meta_L Alt_L Meta_L
keycode 108 = Alt_R Meta_R Alt_R Meta_R ISO_Level3_Shift
keycode 204 = NoSymbol Alt_L NoSymbol Alt_L NoSymbol Alt_L
```

Because of this overlap Emacs was still seeing <kbd>Alt</kbd> and <kbd>Meta</kbd> sharing the same `keycode` and fell back to using <kbd>Alt</kbd> as <kbd>Meta</kbd>.

I dug everywhere to check for aliases or explicit assignments that would cause <kbd>Alt</kbd> and <kbd>Meta</kbd> share the same `keycode`.
Eventually discovered that somewhere in default configuration of XKB the `<LALT>` was defined like:

```bash
key <LALT> { [ Alt_L, Meta_L ] };
```

This means that pressing <kbd>Shift</kbd> and <kbd>Left Alt</kbd> together will produce `Meta_L` in a similar fashion <kbd>Shift</kbd> + <kbd>a</kbd> producing `A`.
In both of those cases `keycode` stays **64** because it is the value passed by keyboard to the Linux kernel and apparently recognized by Emacs.
The `keysym` will be different of course because it depends on the combination of modifier keys pressed together with the original key.
In case of Emacs, both <kbd>Shift</kbd>, <kbd>Meta</kbd>, and <kbd>Alt</kbd> are modifiers and `keycode` to `keysym` translation simply doesn't do it because Emacs looks for real modifier bits being set.
Sadly [xmodmap](https://wiki.archlinux.org/title/xmodmap#Keymap_table) without parameters will not reveal this `keycode` being shared, which makes things even more intricate.

This mishap happened because I was trying to keep my configuration clean and minimal.
I tried to do least possible changes to the configuration files and initially defined `<LALT>` as `key <LALT> { [ Alt_L ] };`.
By doing this I skipped `level2` state configuration for <kbd>Left Alt</kbd> or in other words how <kbd>Left Alt</kbd> behave when <kbd>Shift</kbd> is pressed. This allowed default configuration from `/usr/share/X11/xkb/symbols/altwin` file to take over and confuse my Emacs:

```bash
partial modifier_keys
xkb_symbols "meta_alt" {
key <LALT> { [ Alt_L, Meta_L ] };
key <RALT> { type[Group1] = "TWO_LEVEL",
symbols[Group1] = [ Alt_R, Meta_R ] };
modifier_map Mod1 { Alt_L, Alt_R, Meta_L, Meta_R };
};
```

After changing definition of `<LALT>` to `key <LALT> { [ Alt_L, Alt_L ] };` things got back to normal.
The output of `xmodmap -pke | grep Alt` now looks unambiguous with only <kbd>Alt</kbd> on `keycode` **64**.

```bash
○ → xmodmap -pke | grep Alt
keycode  64 = Alt_L Alt_L Alt_L Alt_L Alt_L Alt_L
keycode 204 = NoSymbol Alt_L NoSymbol Alt_L NoSymbol Alt_L
```

After applying these change, Emacs started to successfully distinguish between <kbd>Meta</kbd> and <kbd>Alt</kbd>.
I could also use both of them for multiple bindings I set.
Are you wondering what is that `keycode 204`? Wonder no longer, it's a `keycode` for a virtual `<ALT>` modifier.
Check [Step 2](#step-2-adjust-the-configuration-to-make-emacs-and-linux-happy) to see how it's devined in `evdev`.

### Step 5: Adding Your Modifiers Configuration to XKB Rules

After you created and saved your configuration in the `/usr/share/X11/xkb/symbols` directory you have to make your environment aware of it.
In terms of XKB your configuration is called **options**.
To make those options available in my environment I had to modify the following files in `/usr/share/X11/xkb/rules`.

```bash

○ → /usr/share/X11/xkb/rules
.
├── evdev
├── evdev.lst
└── evdev.xml

```

I named my configuration `art-mods` and I will use it as an example in this step.
You can give your configuration any arbitrary name and use it instead.
In `evdev` file search for `options` and add yours on top so that list so that it looks like:

```properties

! option	=	symbols
  art-mods		=	+art-mods

```

The changes to `evdev.lst` are very similar:

```properties

! option
  art-mods	       Modifiers to update Super, Hyper and Meta to Artem's preferences

```

In the `evdev.xml` you have to search for `<optionList>` and add the following section to it alongside the other options in the first group:

```xml

<option>
  <configItem>
    <name>art-mods</name>
      <description>Set Super, Hyper and Meta to Artem's preferences</description>
  </configItem>
</option>

```

:::warning{.warning.admonition title="Mind X Server updates"}

When X Server updates it will usually overwrite your changes in `rules` directory.
You can either automate restoration of your configuration with a stream editor like `sed` or just keep the files with your configuration somewhere outside of `/usr/share/X11/xkb/rules` to make sure they are not overwritten.
You will have to copy them over manually or via a script after every X Server update.

:::

### Step 4: Test Your XKB Configuration

After you have edited the files in `rules` directory it is time to apply and test your configuration. I used `setxkbmap` to make a hot replacement of XKB options without need to re-login for X server settings to be applied.
You can apply desired configuration by running:

```bash

setxkbmap  -option art-mods

```

To see your configuration applied run `setxkbmap -print -verbose 10`and check for the options mentioned in the output.

```bash

○ → setxkbmap -print -verbose 10
Setting verbose level to 10
locale is C
Trying to load rules file ./rules/evdev...
Success.
Applied rules from evdev:
rules:      evdev
model:      pc104
layout:     us
options:    art-mods
Trying to build keymap using the following components:
keycodes:   evdev+aliases(qwerty)
types:      complete
compat:     complete
symbols:    pc+us+inet(evdev)+art-mods
geometry:   pc(pc104)
xkb_keymap {
xkb_keycodes  { include "evdev+aliases(qwerty)" };
xkb_types     { include "complete"      };
xkb_compat    { include "complete"      };
xkb_symbols   { include "pc+us+inet(evdev)+art-mods"    };
xkb_geometry  { include "pc(pc104)"     };
};

```

:::danger{.danger.admonition title="XKB is easy to break"}

Breaking XKB is notoriously simple.
It could render you keyboard useless.
Try to move in little steps and test your configuration continuously.
If things still went out of hand, try to clean up by loading a very generic configuration to make things working again.
Use something like: `setxkbmap -model pc104 -layout us -option ""`.
It will reset you keyboard to the rescue setup featuring `pc104` as a very common generic model with `us` layout and empty options to discard the changes you just did.

:::

Here is how the output will look on my machine after applying the "rescue" configuration:

```bash

Setting verbose level to 10
locale is C
Trying to load rules file ./rules/evdev...
Success.
Applied rules from evdev:
rules:      evdev
model:      pc104
layout:     us
Trying to build keymap using the following components:
keycodes:   evdev+aliases(qwerty)
types:      complete
compat:     complete
symbols:    pc+us+inet(evdev)
geometry:   pc(pc104)
xkb_keymap {
xkb_keycodes  { include "evdev+aliases(qwerty)" };
xkb_types     { include "complete"      };
xkb_compat    { include "complete"      };
xkb_symbols   { include "pc+us+inet(evdev)"     };
xkb_geometry  { include "pc(pc104)"     };
};

```

As you might guess, Emacs immediately stops recognizing my <kbd>Alt</kbd> key after applying this rescue configuration.

## Persist Your XKB Configuration Between Login Session

Different

## KDE

`kxkbrc`

Now when I have everything as desired it would be nice to avoid loosing this every time X server updates.
Well, you can not avoid it but minimizing the amount of steps needed to get your system back to your preferred setup is absolutely possible.
This can be easily scripted but I have never had time to commit to it and simply preserved the files with my configuration changes.
The file with options which is `/usr/share/X11/xkb/symbols/art-mods` in my case is usually kept after updates unless you completely reinstall the system.
On the other hand file in `/usr/share/X11/xkb/rules` are always overwritten which makes you system loose awareness of your options.
In my case I simply copy my variants back from my git versioned directory and it always worked well for me.
You can then run `setxkbmap -option <you-options>` to apply them in the current session or simply re-login to have them applied on X Server restart.

### Preserve configuration with `XKBCOMP`

---

Check XKB configuration: setxkbmap -print -verbose 10
https://wiki.archlinux.org/title/Xorg/Keyboard_configuration#Viewing_keyboard_settings
i

## XKBCOMP

xkbcomp $DISPLAY output.xkb
xkbcomp input.xkb $DISPLAY
