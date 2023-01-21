/**
 * @generated SignedSource<<463b939e23e2abfdd551f7338b24c2a2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type settingsRoutes_SavesRouteQuery$variables = {};
export type settingsRoutes_SavesRouteQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"SettingsSavesRoute_me">;
  } | null;
};
export type settingsRoutes_SavesRouteQuery = {
  response: settingsRoutes_SavesRouteQuery$data;
  variables: settingsRoutes_SavesRouteQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "settingsRoutes_SavesRouteQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SettingsSavesRoute_me"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "settingsRoutes_SavesRouteQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3bf41e1eaf9d4e1f72355be54129a890",
    "id": null,
    "metadata": {},
    "name": "settingsRoutes_SavesRouteQuery",
    "operationKind": "query",
    "text": "query settingsRoutes_SavesRouteQuery {\n  me {\n    ...SettingsSavesRoute_me\n    id\n  }\n}\n\nfragment SettingsSavesRoute_me on Me {\n  name\n}\n"
  }
};

(node as any).hash = "8a48749211445b923f4545dcf880f9f6";

export default node;
