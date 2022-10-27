---
slug: tweak-xkb-for-emacs-in-linux-to-make-alt-meta-hyper-and-super-work
title: Tweak XKB to make Alt, Meta, Hyper & Super work in Emacs
description: Tweak XKB to make Alt, Meta, Hyper & Super modifiers available for Emacs in Linux
excerpt: |
    Default XKB configuration leaves you only with the most popular modifiers like Alt, Super, Ctrl, and Shift.
    To get Hyper and Meta in my Emacs, I mapped them to spare modifier keys.
    Along the way I repurposed Caps Lock, improved language switching and got more convenient Compose key for German letters.
image: keyboard.jpg
author:  Artem Kovalov
published:  true
publishedTime:  2022-10-26T16:00:30+02:00
modifiedTime:  2022-10-26T16:00:30+02:00
expirationTime:  2022-10-26T16:00:30+02:00
series: emacs
section: Technology
tags:
- Emacs
- Linux
- Geek
uuid: ccff7f23-096e-406c-afd2-8287711e5404
---

<script>
    import Pill from '$lib/components/Pill.svelte';
</script>


    After reading this article you should be able to remap your meta keys also known as modifier keys and make them distinguishable for your desktop environment and applications. Most of the Linux distributions ship a default [XKB](https://en.wikipedia.org/wiki/X_keyboard_extension) configuration that leaves you with only the most popular modifiers like <kbd class="key">Alt</kbd>, <Pill>Super</Pill>, Ctrl, and Shift. <kbd style="color:red;">They are usually mapped to respective keys on your keyboard. Super is most frequently mapped to Win for most</kbd> laptops.
