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
