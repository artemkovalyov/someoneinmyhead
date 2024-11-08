---
slug: homeassistant-lg-tv-launch-a-source
title: HA Automation
description: Description will go to meta
excerpt: Very important except
image: https://picsum.photos/1280/720
alt: ''
author: Artem Kovalov
published: true
publishedTime: 2022-06-15T17:22:57+02:00
modifiedTime: 2022-06-15T17:22:57+02:00
expirationTime: 2022-06-15T17:22:57+02:00
series: Series name
seriesId: Series ID
section: section name for Open Graph
tags:
  - a
  - b
uuid: 5bf12ed8-4149-4b00-9c2d-175db01df93c
---

```yml
action: media_player.select_source
metadata: {}
data:
  source: YouTube
target:
  device_id: 696e272baf42ea7817138af76998a56f
```

```yml
alias: Switch to YT by Default
description: ''
triggers:
  - device_id: 696e272baf42ea7817138af76998a56f
    domain: media_player
    entity_id: 81518824b82c7f5c31e1a64be22b1d24
    type: turned_on
    trigger: device
conditions: []
actions:
  - action: media_player.select_source
    metadata: {}
    data:
      source: YouTube
    target:
      device_id: 696e272baf42ea7817138af76998a56f
mode: single
```
