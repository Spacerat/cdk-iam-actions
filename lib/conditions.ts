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