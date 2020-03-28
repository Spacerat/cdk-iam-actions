/** Condition keys for AWS Cloud9
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html
  */
export enum Cloud9 {
    EnvironmentId = "cloud9:EnvironmentId",
    EnvironmentName = "cloud9:EnvironmentName",
    InstanceType = "cloud9:InstanceType",
    Permissions = "cloud9:Permissions",
    SubnetId = "cloud9:SubnetId",
    UserArn = "cloud9:UserArn"
}

/** Condition keys for AWS CloudFormation
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudformation.html
  */
export enum CloudFormation {
    ChangeSetName = "cloudformation:ChangeSetName",
    ResourceTypes = "cloudformation:ResourceTypes",
    RoleArn = "cloudformation:RoleArn",
    StackPolicyUrl = "cloudformation:StackPolicyUrl",
    TemplateUrl = "cloudformation:TemplateUrl"
}

/** Condition keys for AWS Elastic Beanstalk
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselasticbeanstalk.html
  */
export enum ElasticBeanstalk {
    FromApplication = "elasticbeanstalk:FromApplication",
    FromApplicationVersion = "elasticbeanstalk:FromApplicationVersion",
    FromConfigurationTemplate = "elasticbeanstalk:FromConfigurationTemplate",
    FromEnvironment = "elasticbeanstalk:FromEnvironment",
    FromSolutionStack = "elasticbeanstalk:FromSolutionStack",
    InApplication = "elasticbeanstalk:InApplication"
}

/** Condition keys for AWS Security Token Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecuritytokenservice.html
  */
export enum STS {
    FederatedProvider = "aws:FederatedProvider",
    Aud = "saml:aud",
    Doc = "saml:doc",
    Iss = "saml:iss",
    Namequalifier = "saml:namequalifier",
    Sub = "saml:sub",
    SubType = "saml:sub_type"
}

/** Condition keys for AWS Service Catalog
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsservicecatalog.html
  */
export enum ServiceCatalog {
    AccountLevel = "servicecatalog:accountLevel",
    RoleLevel = "servicecatalog:roleLevel",
    UserLevel = "servicecatalog:userLevel"
}

/** Condition keys for Amazon AppStream
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappstream.html
  */
export enum AppStream {
    UserId = "appstream:userId"
}

/** Condition keys for Amazon CloudWatch Events
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchevents.html
  */
export enum Events {
    TargetArn = "events:TargetArn",
    DetailType = "events:detail-type",
    DetailUserIdentityPrincipalId = "events:detail.userIdentity.principalId",
    Source = "events:source"
}

/** Condition keys for Amazon DynamoDB
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodb.html
  */
export enum DynamoDB {
    Attributes = "dynamodb:Attributes",
    LeadingKeys = "dynamodb:LeadingKeys",
    ReturnConsumedCapacity = "dynamodb:ReturnConsumedCapacity",
    ReturnValues = "dynamodb:ReturnValues",
    Select = "dynamodb:Select"
}

/** Condition keys for Amazon EC2
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html
  */
export enum EC2 {
    TagKeys = "aws:TagKeys",
    AccepterVpc = "ec2:AccepterVpc",
    AuthorizedService = "ec2:AuthorizedService",
    AuthorizedUser = "ec2:AuthorizedUser",
    AvailabilityZone = "ec2:AvailabilityZone",
    CreateAction = "ec2:CreateAction",
    EbsOptimized = "ec2:EbsOptimized",
    Encrypted = "ec2:Encrypted",
    ImageType = "ec2:ImageType",
    InstanceProfile = "ec2:InstanceProfile",
    InstanceType = "ec2:InstanceType",
    IsLaunchTemplateResource = "ec2:IsLaunchTemplateResource",
    LaunchTemplate = "ec2:LaunchTemplate",
    Owner = "ec2:Owner",
    ParentSnapshot = "ec2:ParentSnapshot",
    ParentVolume = "ec2:ParentVolume",
    Permission = "ec2:Permission",
    PlacementGroup = "ec2:PlacementGroup",
    PlacementGroupStrategy = "ec2:PlacementGroupStrategy",
    Public = "ec2:Public",
    Region = "ec2:Region",
    RequesterVpc = "ec2:RequesterVpc",
    ReservedInstancesOfferingType = "ec2:ReservedInstancesOfferingType",
    RootDeviceType = "ec2:RootDeviceType",
    SnapshotTime = "ec2:SnapshotTime",
    Subnet = "ec2:Subnet",
    Tenancy = "ec2:Tenancy",
    VolumeIops = "ec2:VolumeIops",
    VolumeSize = "ec2:VolumeSize",
    VolumeType = "ec2:VolumeType",
    Vpc = "ec2:Vpc"
}

/** Condition keys for Amazon EC2 Container Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2containerservice.html
  */
export enum ECS {
    Cluster = "ecs:cluster",
    ContainerInstances = "ecs:container-instances"
}

/** Condition keys for Amazon Glacier
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonglacier.html
  */
export enum Glacier {
    ArchiveAgeInDays = "glacier:ArchiveAgeInDays"
}

/** Condition keys for Amazon Lex
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlex.html
  */
export enum Lex {
    AssociatedIntents = "lex:associatedIntents",
    AssociatedSlotTypes = "lex:associatedSlotTypes",
    ChannelType = "lex:channelType"
}

/** Condition keys for Amazon RDS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrds.html
  */
export enum RDS {
    DatabaseClass = "rds:DatabaseClass",
    DatabaseEngine = "rds:DatabaseEngine",
    DatabaseName = "rds:DatabaseName",
    MultiAz = "rds:MultiAz",
    Piops = "rds:Piops",
    StorageSize = "rds:StorageSize",
    Vpc = "rds:Vpc",
    ClusterPgTag = "rds:cluster-pg-tag",
    ClusterSnapshotTag = "rds:cluster-snapshot-tag",
    ClusterTag = "rds:cluster-tag",
    DbTag = "rds:db-tag",
    EsTag = "rds:es-tag",
    OgTag = "rds:og-tag",
    PgTag = "rds:pg-tag",
    RiTag = "rds:ri-tag",
    SecgrpTag = "rds:secgrp-tag",
    SnapshotTag = "rds:snapshot-tag",
    SubgrpTag = "rds:subgrp-tag"
}

/** Condition keys for Amazon Redshift
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonredshift.html
  */
export enum Redshift {
    DbName = "redshift:DbName",
    DbUser = "redshift:DbUser",
    DurationSeconds = "redshift:DurationSeconds"
}

/** Condition keys for Amazon S3
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html
  */
export enum S3 {
    LocationConstraint = "s3:LocationConstraint",
    RequestObjectTagKeys = "s3:RequestObjectTagKeys",
    VersionId = "s3:VersionId",
    Authtype = "s3:authtype",
    Delimiter = "s3:delimiter",
    Locationconstraint = "s3:locationconstraint",
    MaxKeys = "s3:max-keys",
    Prefix = "s3:prefix",
    Signatureage = "s3:signatureage",
    Signatureversion = "s3:signatureversion",
    Versionid = "s3:versionid",
    XAmzAcl = "s3:x-amz-acl",
    XAmzContentSha256 = "s3:x-amz-content-sha256",
    XAmzCopySource = "s3:x-amz-copy-source",
    XAmzGrantFullControl = "s3:x-amz-grant-full-control",
    XAmzGrantRead = "s3:x-amz-grant-read",
    XAmzGrantReadAcp = "s3:x-amz-grant-read-acp",
    XAmzGrantWrite = "s3:x-amz-grant-write",
    XAmzGrantWriteAcp = "s3:x-amz-grant-write-acp",
    XAmzMetadataDirective = "s3:x-amz-metadata-directive",
    XAmzServerSideEncryption = "s3:x-amz-server-side-encryption",
    XAmzServerSideEncryptionAwsKmsKeyId = "s3:x-amz-server-side-encryption-aws-kms-key-id",
    XAmzStorageClass = "s3:x-amz-storage-class",
    XAmzWebsiteRedirectLocation = "s3:x-amz-website-redirect-location"
}

/** Condition keys for Amazon SES
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html
  */
export enum SES {
    FeedbackAddress = "ses:FeedbackAddress",
    FromAddress = "ses:FromAddress",
    FromDisplayName = "ses:FromDisplayName",
    Recipients = "ses:Recipients"
}

/** Condition keys for Amazon SNS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsns.html
  */
export enum SNS {
    Endpoint = "sns:Endpoint",
    Protocol = "sns:Protocol"
}

/** Condition keys for Amazon Simple Workflow Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpleworkflowservice.html
  */
export enum SWF {
    ActivityTypeName = "swf:activityType.name",
    ActivityTypeVersion = "swf:activityType.version",
    DefaultTaskListName = "swf:defaultTaskList.name",
    Name = "swf:name",
    TagFilterTag = "swf:tagFilter.tag",
    TagListMember0 = "swf:tagList.member.0",
    TagListMember1 = "swf:tagList.member.1",
    TagListMember2 = "swf:tagList.member.2",
    TagListMember3 = "swf:tagList.member.3",
    TagListMember4 = "swf:tagList.member.4",
    TaskListName = "swf:taskList.name",
    TypeFilterName = "swf:typeFilter.name",
    TypeFilterVersion = "swf:typeFilter.version",
    Version = "swf:version",
    WorkflowTypeName = "swf:workflowType.name",
    WorkflowTypeVersion = "swf:workflowType.version"
}

/** Condition keys for Auto Scaling
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_autoscaling.html
  */
export enum AutoScaling {
    ImageId = "autoscaling:ImageId",
    InstanceType = "autoscaling:InstanceType",
    LaunchConfigurationName = "autoscaling:LaunchConfigurationName",
    LoadBalancerNames = "autoscaling:LoadBalancerNames",
    MaxSize = "autoscaling:MaxSize",
    MinSize = "autoscaling:MinSize",
    SpotPrice = "autoscaling:SpotPrice",
    TargetGroupARNs = "autoscaling:TargetGroupARNs",
    VPCZoneIdentifiers = "autoscaling:VPCZoneIdentifiers"
}

/** Condition keys for Data Pipeline
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_datapipeline.html
  */
export enum DataPipeline {
    PipelineCreator = "datapipeline:PipelineCreator",
    Tag = "datapipeline:Tag",
    WorkerGroup = "datapipeline:workerGroup"
}

/** Condition keys for Identity And Access Management
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_identityandaccessmanagement.html
  */
export enum IAM {
    AWSServiceName = "iam:AWSServiceName",
    PassedToService = "iam:PassedToService",
    PolicyARN = "iam:PolicyARN"
}
