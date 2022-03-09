import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SnsAppJsiiComponent } from '@stackspot/cdk-env-sns';

class {{ computed_inputs.app_class_name }}Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    SnsAppJsiiComponent.addSubscription(
      this,
      '{{ inputs.topic_arn }}',
      destinatedLambda
    );
  }
}
