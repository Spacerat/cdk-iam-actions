"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Condition keys for AWS Cloud9
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html
  */
var Cloud9;
(function (Cloud9) {
    Cloud9["EnvironmentId"] = "cloud9:EnvironmentId";
    Cloud9["EnvironmentName"] = "cloud9:EnvironmentName";
    Cloud9["InstanceType"] = "cloud9:InstanceType";
    Cloud9["Permissions"] = "cloud9:Permissions";
    Cloud9["SubnetId"] = "cloud9:SubnetId";
    Cloud9["UserArn"] = "cloud9:UserArn";
})(Cloud9 = exports.Cloud9 || (exports.Cloud9 = {}));
/** Condition keys for AWS CloudFormation
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudformation.html
  */
var CloudFormation;
(function (CloudFormation) {
    CloudFormation["ChangeSetName"] = "cloudformation:ChangeSetName";
    CloudFormation["ResourceTypes"] = "cloudformation:ResourceTypes";
    CloudFormation["RoleArn"] = "cloudformation:RoleArn";
    CloudFormation["StackPolicyUrl"] = "cloudformation:StackPolicyUrl";
    CloudFormation["TemplateUrl"] = "cloudformation:TemplateUrl";
})(CloudFormation = exports.CloudFormation || (exports.CloudFormation = {}));
/** Condition keys for AWS Elastic Beanstalk
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselasticbeanstalk.html
  */
var ElasticBeanstalk;
(function (ElasticBeanstalk) {
    ElasticBeanstalk["FromApplication"] = "elasticbeanstalk:FromApplication";
    ElasticBeanstalk["FromApplicationVersion"] = "elasticbeanstalk:FromApplicationVersion";
    ElasticBeanstalk["FromConfigurationTemplate"] = "elasticbeanstalk:FromConfigurationTemplate";
    ElasticBeanstalk["FromEnvironment"] = "elasticbeanstalk:FromEnvironment";
    ElasticBeanstalk["FromSolutionStack"] = "elasticbeanstalk:FromSolutionStack";
    ElasticBeanstalk["InApplication"] = "elasticbeanstalk:InApplication";
})(ElasticBeanstalk = exports.ElasticBeanstalk || (exports.ElasticBeanstalk = {}));
/** Condition keys for AWS Security Token Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecuritytokenservice.html
  */
var STS;
(function (STS) {
    STS["FederatedProvider"] = "aws:FederatedProvider";
    STS["Aud"] = "saml:aud";
    STS["Doc"] = "saml:doc";
    STS["Iss"] = "saml:iss";
    STS["Namequalifier"] = "saml:namequalifier";
    STS["Sub"] = "saml:sub";
    STS["SubType"] = "saml:sub_type";
})(STS = exports.STS || (exports.STS = {}));
/** Condition keys for AWS Service Catalog
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsservicecatalog.html
  */
var ServiceCatalog;
(function (ServiceCatalog) {
    ServiceCatalog["AccountLevel"] = "servicecatalog:accountLevel";
    ServiceCatalog["RoleLevel"] = "servicecatalog:roleLevel";
    ServiceCatalog["UserLevel"] = "servicecatalog:userLevel";
})(ServiceCatalog = exports.ServiceCatalog || (exports.ServiceCatalog = {}));
/** Condition keys for Amazon AppStream
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappstream.html
  */
var AppStream;
(function (AppStream) {
    AppStream["UserId"] = "appstream:userId";
})(AppStream = exports.AppStream || (exports.AppStream = {}));
/** Condition keys for Amazon CloudWatch Events
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchevents.html
  */
var Events;
(function (Events) {
    Events["TargetArn"] = "events:TargetArn";
    Events["DetailType"] = "events:detail-type";
    Events["DetailUserIdentityPrincipalId"] = "events:detail.userIdentity.principalId";
    Events["Source"] = "events:source";
})(Events = exports.Events || (exports.Events = {}));
/** Condition keys for Amazon DynamoDB
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodb.html
  */
var DynamoDB;
(function (DynamoDB) {
    DynamoDB["Attributes"] = "dynamodb:Attributes";
    DynamoDB["LeadingKeys"] = "dynamodb:LeadingKeys";
    DynamoDB["ReturnConsumedCapacity"] = "dynamodb:ReturnConsumedCapacity";
    DynamoDB["ReturnValues"] = "dynamodb:ReturnValues";
    DynamoDB["Select"] = "dynamodb:Select";
})(DynamoDB = exports.DynamoDB || (exports.DynamoDB = {}));
/** Condition keys for Amazon EC2
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html
  */
var EC2;
(function (EC2) {
    EC2["TagKeys"] = "aws:TagKeys";
    EC2["AccepterVpc"] = "ec2:AccepterVpc";
    EC2["AuthorizedService"] = "ec2:AuthorizedService";
    EC2["AuthorizedUser"] = "ec2:AuthorizedUser";
    EC2["AvailabilityZone"] = "ec2:AvailabilityZone";
    EC2["CreateAction"] = "ec2:CreateAction";
    EC2["EbsOptimized"] = "ec2:EbsOptimized";
    EC2["Encrypted"] = "ec2:Encrypted";
    EC2["ImageType"] = "ec2:ImageType";
    EC2["InstanceProfile"] = "ec2:InstanceProfile";
    EC2["InstanceType"] = "ec2:InstanceType";
    EC2["IsLaunchTemplateResource"] = "ec2:IsLaunchTemplateResource";
    EC2["LaunchTemplate"] = "ec2:LaunchTemplate";
    EC2["Owner"] = "ec2:Owner";
    EC2["ParentSnapshot"] = "ec2:ParentSnapshot";
    EC2["ParentVolume"] = "ec2:ParentVolume";
    EC2["Permission"] = "ec2:Permission";
    EC2["PlacementGroup"] = "ec2:PlacementGroup";
    EC2["PlacementGroupStrategy"] = "ec2:PlacementGroupStrategy";
    EC2["Public"] = "ec2:Public";
    EC2["Region"] = "ec2:Region";
    EC2["RequesterVpc"] = "ec2:RequesterVpc";
    EC2["ReservedInstancesOfferingType"] = "ec2:ReservedInstancesOfferingType";
    EC2["RootDeviceType"] = "ec2:RootDeviceType";
    EC2["SnapshotTime"] = "ec2:SnapshotTime";
    EC2["Subnet"] = "ec2:Subnet";
    EC2["Tenancy"] = "ec2:Tenancy";
    EC2["VolumeIops"] = "ec2:VolumeIops";
    EC2["VolumeSize"] = "ec2:VolumeSize";
    EC2["VolumeType"] = "ec2:VolumeType";
    EC2["Vpc"] = "ec2:Vpc";
})(EC2 = exports.EC2 || (exports.EC2 = {}));
/** Condition keys for Amazon EC2 Container Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2containerservice.html
  */
var ECS;
(function (ECS) {
    ECS["Cluster"] = "ecs:cluster";
    ECS["ContainerInstances"] = "ecs:container-instances";
})(ECS = exports.ECS || (exports.ECS = {}));
