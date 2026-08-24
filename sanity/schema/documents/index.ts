import { relation } from "./relation";
import { source } from "./source";
import { imageAssetRecord } from "./imageAssetRecord";
import { entry } from "./entry";
import { technique } from "./technique";
import { artwork } from "./artwork";
import { story } from "./story";
import { bridge, bridgeTimelineItem, bridgeComparisonRow, bridgeKeyDifference } from "./bridge";
import { term } from "./term";
import { scienceConcept } from "./scienceConcept";
import { material, person, place, period } from "./entities";

export const schemaTypes = [
  // page documents
  entry,
  technique,
  artwork,
  story,
  bridge,
  term,
  scienceConcept,
  // non-page entities
  material,
  person,
  place,
  period,
  source,
  relation,
  imageAssetRecord,
  // bridge sub-objects (documented here for discoverability)
  bridgeTimelineItem,
  bridgeComparisonRow,
  bridgeKeyDifference,
];
