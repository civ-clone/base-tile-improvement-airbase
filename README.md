# base-tile-improvement-airbase

The `Airbase` tile improvement: an airbase on a square.

A tile improvement where a game's rules may let aircraft refuel and land outside a city.

For example: Civ2: Airbase.

This package only declares the class: it has no `main` and registers nothing, so installing it changes no game.
A game's rules register it and give it its yields.

```ts
import Airbase from '@civ-clone/base-tile-improvement-airbase/Airbase';
import { instance as availableTileImprovementRegistryInstance } from '@civ-clone/core-tile-improvement/AvailableTileImprovementRegistry';

availableTileImprovementRegistryInstance.register(Airbase);
```

Part of the Civ2 work (civ-clone/web-renderer#1008).
