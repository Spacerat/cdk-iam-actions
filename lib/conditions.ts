/** Condition keys for AWS Cloud9
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html
  */
export enum Cloud9 {
    ENVIRONMENT_ID = "cloud9:EnvironmentId",
    ENVIRONMENT_NAME = "cloud9:EnvironmentName",
    INSTANCE_TYPE = "cloud9:InstanceType",
    PERMISSIONS = "cloud9:Permissions",
    SUBNET_ID = "cloud9:SubnetId",
    USER_ARN = "cloud9:UserArn"
}

/** Condition keys for AWS CloudFormation
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudformation.html
  */
export enum CloudFormation {
    CHANGE_SET_NAME = "cloudformation:ChangeSetName",
    RESOURCE_TYPES = "cloudformation:ResourceTypes",
    ROLE_ARN = "cloudformation:RoleArn",
    STACK_POLICY_URL = "cloudformation:StackPolicyUrl",
    TEMPLATE_URL = "cloudformation:TemplateUrl"
}

/** Condition keys for AWS Elastic Beanstalk
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselasticbeanstalk.html
  */
export enum ElasticBeanstalk {
    FROM_APPLICATION = "elasticbeanstalk:FromApplication",
    FROM_APPLICATION_VERSION = "elasticbeanstalk:FromApplicationVersion",
    FROM_CONFIGURATION_TEMPLATE = "elasticbeanstalk:FromConfigurationTemplate",
    FROM_ENVIRONMENT = "elasticbeanstalk:FromEnvironment",
    FROM_SOLUTION_STACK = "elasticbeanstalk:FromSolutionStack",
    IN_APPLICATION = "elasticbeanstalk:InApplication"
}

/** Condition keys for AWS Security Token Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecuritytokenservice.html
  */
export enum STS {
    FEDERATED_PROVIDER = "aws:FederatedProvider",
    AUD = "saml:aud",
    DOC = "saml:doc",
    ISS = "saml:iss",
    NAMEQUALIFIER = "saml:namequalifier",
    SUB = "saml:sub",
    SUB_TYPE = "saml:sub_type"
}

/** Condition keys for AWS Service Catalog
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsservicecatalog.html
  */
export enum ServiceCatalog {
    ACCOUNT_LEVEL = "servicecatalog:accountLevel",
    ROLE_LEVEL = "servicecatalog:roleLevel",
    USER_LEVEL = "servicecatalog:userLevel"
}

/** Condition keys for Amazon AppStream
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappstream.html
  */
export enum AppStream {
    USER_ID = "appstream:userId"
}

/** Condition keys for Amazon CloudWatch Events
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchevents.html
  */
export enum Events {
    TARGET_ARN = "events:TargetArn",
    DETAIL_TYPE = "events:detail-type",
    DETAIL_USER_IDENTITY_PRINCIPAL_ID = "events:detail.userIdentity.principalId",
    SOURCE = "events:source"
}

/** Condition keys for Amazon DynamoDB
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodb.html
  */
export enum DynamoDB {
    ATTRIBUTES = "dynamodb:Attributes",
    LEADING_KEYS = "dynamodb:LeadingKeys",
    RETURN_CONSUMED_CAPACITY = "dynamodb:ReturnConsumedCapacity",
    RETURN_VALUES = "dynamodb:ReturnValues",
    SELECT = "dynamodb:Select"
}

/** Condition keys for Amazon EC2
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html
  */
export enum EC2 {
    TAG_KEYS = "aws:TagKeys",
    ACCEPTER_VPC = "ec2:AccepterVpc",
    AUTHORIZED_SERVICE = "ec2:AuthorizedService",
    AUTHORIZED_USER = "ec2:AuthorizedUser",
    AVAILABILITY_ZONE = "ec2:AvailabilityZone",
    CREATE_ACTION = "ec2:CreateAction",
    EBS_OPTIMIZED = "ec2:EbsOptimized",
    ENCRYPTED = "ec2:Encrypted",
    IMAGE_TYPE = "ec2:ImageType",
    INSTANCE_PROFILE = "ec2:InstanceProfile",
    INSTANCE_TYPE = "ec2:InstanceType",
    IS_LAUNCH_TEMPLATE_RESOURCE = "ec2:IsLaunchTemplateResource",
    LAUNCH_TEMPLATE = "ec2:LaunchTemplate",
    OWNER = "ec2:Owner",
    PARENT_SNAPSHOT = "ec2:ParentSnapshot",
    PARENT_VOLUME = "ec2:ParentVolume",
    PERMISSION = "ec2:Permission",
    PLACEMENT_GROUP = "ec2:PlacementGroup",
    PLACEMENT_GROUP_STRATEGY = "ec2:PlacementGroupStrategy",
    PUBLIC = "ec2:Public",
    REGION = "ec2:Region",
    REQUESTER_VPC = "ec2:RequesterVpc",
    RESERVED_INSTANCES_OFFERING_TYPE = "ec2:ReservedInstancesOfferingType",
    ROOT_DEVICE_TYPE = "ec2:RootDeviceType",
    SNAPSHOT_TIME = "ec2:SnapshotTime",
    SUBNET = "ec2:Subnet",
    TENANCY = "ec2:Tenancy",
    VOLUME_IOPS = "ec2:VolumeIops",
    VOLUME_SIZE = "ec2:VolumeSize",
    VOLUME_TYPE = "ec2:VolumeType",
    VPC = "ec2:Vpc"
}

/** Condition keys for Amazon EC2 Container Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2containerservice.html
  */
export enum ECS {
    CLUSTER = "ecs:cluster",
    CONTAINER_INSTANCES = "ecs:container-instances"
}

/** Condition keys for Amazon Glacier
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonglacier.html
  */
export enum Glacier {
    ARCHIVE_AGE_IN_DAYS = "glacier:ArchiveAgeInDays"
}

/** Condition keys for Amazon Lex
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlex.html
  */
export enum Lex {
    ASSOCIATED_INTENTS = "lex:associatedIntents",
    ASSOCIATED_SLOT_TYPES = "lex:associatedSlotTypes",
    CHANNEL_TYPE = "lex:channelType"
}

/** Condition keys for Amazon RDS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrds.html
  */
export enum RDS {
    DATABASE_CLASS = "rds:DatabaseClass",
    DATABASE_ENGINE = "rds:DatabaseEngine",
    DATABASE_NAME = "rds:DatabaseName",
    MULTI_AZ = "rds:MultiAz",
    PIOPS = "rds:Piops",
    STORAGE_SIZE = "rds:StorageSize",
    VPC = "rds:Vpc",
    CLUSTER_PG_TAG = "rds:cluster-pg-tag",
    CLUSTER_SNAPSHOT_TAG = "rds:cluster-snapshot-tag",
    CLUSTER_TAG = "rds:cluster-tag",
    DB_TAG = "rds:db-tag",
    ES_TAG = "rds:es-tag",
    OG_TAG = "rds:og-tag",
    PG_TAG = "rds:pg-tag",
    RI_TAG = "rds:ri-tag",
    SECGRP_TAG = "rds:secgrp-tag",
    SNAPSHOT_TAG = "rds:snapshot-tag",
    SUBGRP_TAG = "rds:subgrp-tag"
}

/** Condition keys for Amazon Redshift
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonredshift.html
  */
export enum Redshift {
    DB_NAME = "redshift:DbName",
    DB_USER = "redshift:DbUser",
    DURATION_SECONDS = "redshift:DurationSeconds"
}

/** Condition keys for Amazon S3
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html
  */
export enum S3 {
    LOCATION_CONSTRAINT = "s3:LocationConstraint",
    REQUEST_OBJECT_TAG_KEYS = "s3:RequestObjectTagKeys",
    VERSION_ID = "s3:VersionId",
    AUTHTYPE = "s3:authtype",
    DELIMITER = "s3:delimiter",
    LOCATIONCONSTRAINT = "s3:locationconstraint",
    MAX_KEYS = "s3:max-keys",
    PREFIX = "s3:prefix",
    SIGNATUREAGE = "s3:signatureage",
    SIGNATUREVERSION = "s3:signatureversion",
    VERSIONID = "s3:versionid",
    X_AMZ_ACL = "s3:x-amz-acl",
    X_AMZ_CONTENT_SHA256 = "s3:x-amz-content-sha256",
    X_AMZ_COPY_SOURCE = "s3:x-amz-copy-source",
    X_AMZ_GRANT_FULL_CONTROL = "s3:x-amz-grant-full-control",
    X_AMZ_GRANT_READ = "s3:x-amz-grant-read",
    X_AMZ_GRANT_READ_ACP = "s3:x-amz-grant-read-acp",
    X_AMZ_GRANT_WRITE = "s3:x-amz-grant-write",
    X_AMZ_GRANT_WRITE_ACP = "s3:x-amz-grant-write-acp",
    X_AMZ_METADATA_DIRECTIVE = "s3:x-amz-metadata-directive",
    X_AMZ_SERVER_SIDE_ENCRYPTION = "s3:x-amz-server-side-encryption",
    X_AMZ_SERVER_SIDE_ENCRYPTION_AWS_KMS_KEY_ID = "s3:x-amz-server-side-encryption-aws-kms-key-id",
    X_AMZ_STORAGE_CLASS = "s3:x-amz-storage-class",
    X_AMZ_WEBSITE_REDIRECT_LOCATION = "s3:x-amz-website-redirect-location"
}

/** Condition keys for Amazon SES
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html
  */
export enum SES {
    FEEDBACK_ADDRESS = "ses:FeedbackAddress",
    FROM_ADDRESS = "ses:FromAddress",
    FROM_DISPLAY_NAME = "ses:FromDisplayName",
    RECIPIENTS = "ses:Recipients"
}

/** Condition keys for Amazon SNS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsns.html
  */
export enum SNS {
    ENDPOINT = "sns:Endpoint",
    PROTOCOL = "sns:Protocol"
}

/** Condition keys for Amazon Simple Workflow Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpleworkflowservice.html
  */
export enum SWF {
    ACTIVITY_TYPE_NAME = "swf:activityType.name",
    ACTIVITY_TYPE_VERSION = "swf:activityType.version",
    DEFAULT_TASK_LIST_NAME = "swf:defaultTaskList.name",
    NAME = "swf:name",
    TAG_FILTER_TAG = "swf:tagFilter.tag",
    TAG_LIST_MEMBER_0 = "swf:tagList.member.0",
    TAG_LIST_MEMBER_1 = "swf:tagList.member.1",
    TAG_LIST_MEMBER_2 = "swf:tagList.member.2",
    TAG_LIST_MEMBER_3 = "swf:tagList.member.3",
    TAG_LIST_MEMBER_4 = "swf:tagList.member.4",
    TASK_LIST_NAME = "swf:taskList.name",
    TYPE_FILTER_NAME = "swf:typeFilter.name",
    TYPE_FILTER_VERSION = "swf:typeFilter.version",
    VERSION = "swf:version",
    WORKFLOW_TYPE_NAME = "swf:workflowType.name",
    WORKFLOW_TYPE_VERSION = "swf:workflowType.version"
}

/** Condition keys for Auto Scaling
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_autoscaling.html
  */
export enum AutoScaling {
    IMAGE_ID = "autoscaling:ImageId",
    INSTANCE_TYPE = "autoscaling:InstanceType",
    LAUNCH_CONFIGURATION_NAME = "autoscaling:LaunchConfigurationName",
    LOAD_BALANCER_NAMES = "autoscaling:LoadBalancerNames",
    MAX_SIZE = "autoscaling:MaxSize",
    MIN_SIZE = "autoscaling:MinSize",
    SPOT_PRICE = "autoscaling:SpotPrice",
    TARGET_GROUP_AR_NS = "autoscaling:TargetGroupARNs",
    VPC_ZONE_IDENTIFIERS = "autoscaling:VPCZoneIdentifiers"
}

/** Condition keys for Data Pipeline
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_datapipeline.html
  */
export enum DataPipeline {
    PIPELINE_CREATOR = "datapipeline:PipelineCreator",
    TAG = "datapipeline:Tag",
    WORKER_GROUP = "datapipeline:workerGroup"
}

/** Condition keys for Identity And Access Management
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_identityandaccessmanagement.html
  */
export enum IAM {
    AWS_SERVICE_NAME = "iam:AWSServiceName",
    PASSED_TO_SERVICE = "iam:PassedToService",
    POLICY_ARN = "iam:PolicyARN"
}
