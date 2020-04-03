# CDK IAM Actions

A generated library of constants for IAM policy actions and condition keys.

## Usage

Install with NPM

```
npm install cdk-iam-actions
```

Then import and use whenever you need to build a `PolicyStatement`:

```typescript
import { Policy, Effect } from "@aws-cdk/aws-iam";

import { actions, conditions } from "cdk-iam-actions"; // Import them all
import { S3 } from "cdk-iam-actions/lib/actions"; // Or just the one you need

new PolicyStatement({
  effect: Effect.ALLOW,
  actions: [actions.S3.PUT_OBJECT, S3.LIST_BUCKET],
  conditions: {
    [conditions.S3.PREFIX]: "my-prefix"
  },
  resources: ["*"]
});
```

## Infrequently asked questions

### Why are the enum members `CAPITAL_SNAKE_CASE`? TitleCase would've been prettier _and_ closer to the actual action names!

JSII (Amazon's thing which lets you write Typescript and convert to C# / Java / Python) requires that enums are CAPITAL_SNAKE_CASE.

### Why must `import {S3} from cdk-iam-actions/lib/actions` include 'lib'?

Because I didn't understand npm packaging until it was too late. Stay tuned for a 2.0 where you don't need to `/lib`.

### Make??

`¯\_(ツ)_/¯`

### Why is X missing?

Submit an issue!
