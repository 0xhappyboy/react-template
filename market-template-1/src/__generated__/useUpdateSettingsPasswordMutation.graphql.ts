/**
 * @generated SignedSource<<6f4dd71020ee7e43c4b60c6fcd55759a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateMyPasswordMutationInput = {
  clientMutationId?: string | null;
  currentPassword: string;
  newPassword: string;
  passwordConfirmation: string;
};
export type useUpdateSettingsPasswordMutation$variables = {
  input: UpdateMyPasswordMutationInput;
};
export type useUpdateSettingsPasswordMutation$data = {
  readonly updateMyPassword: {
    readonly clientMutationId: string | null;
  } | null;
};
export type useUpdateSettingsPasswordMutation = {
  response: useUpdateSettingsPasswordMutation$data;
  variables: useUpdateSettingsPasswordMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateMyPasswordMutationPayload",
    "kind": "LinkedField",
    "name": "updateMyPassword",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useUpdateSettingsPasswordMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useUpdateSettingsPasswordMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "336ca1e7c22c431ed0bed53039b1d2a7",
    "id": null,
    "metadata": {},
    "name": "useUpdateSettingsPasswordMutation",
    "operationKind": "mutation",
    "text": "mutation useUpdateSettingsPasswordMutation(\n  $input: UpdateMyPasswordMutationInput!\n) {\n  updateMyPassword(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "c4f97277056e71aa318680868becb8dd";

export default node;
