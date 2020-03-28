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
/** Condition keys for Amazon Glacier
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonglacier.html
  */
var Glacier;
(function (Glacier) {
    Glacier["ArchiveAgeInDays"] = "glacier:ArchiveAgeInDays";
})(Glacier = exports.Glacier || (exports.Glacier = {}));
/** Condition keys for Amazon Lex
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlex.html
  */
var Lex;
(function (Lex) {
    Lex["AssociatedIntents"] = "lex:associatedIntents";
    Lex["AssociatedSlotTypes"] = "lex:associatedSlotTypes";
    Lex["ChannelType"] = "lex:channelType";
})(Lex = exports.Lex || (exports.Lex = {}));
/** Condition keys for Amazon RDS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrds.html
  */
var RDS;
(function (RDS) {
    RDS["DatabaseClass"] = "rds:DatabaseClass";
    RDS["DatabaseEngine"] = "rds:DatabaseEngine";
    RDS["DatabaseName"] = "rds:DatabaseName";
    RDS["MultiAz"] = "rds:MultiAz";
    RDS["Piops"] = "rds:Piops";
    RDS["StorageSize"] = "rds:StorageSize";
    RDS["Vpc"] = "rds:Vpc";
    RDS["ClusterPgTag"] = "rds:cluster-pg-tag";
    RDS["ClusterSnapshotTag"] = "rds:cluster-snapshot-tag";
    RDS["ClusterTag"] = "rds:cluster-tag";
    RDS["DbTag"] = "rds:db-tag";
    RDS["EsTag"] = "rds:es-tag";
    RDS["OgTag"] = "rds:og-tag";
    RDS["PgTag"] = "rds:pg-tag";
    RDS["RiTag"] = "rds:ri-tag";
    RDS["SecgrpTag"] = "rds:secgrp-tag";
    RDS["SnapshotTag"] = "rds:snapshot-tag";
    RDS["SubgrpTag"] = "rds:subgrp-tag";
})(RDS = exports.RDS || (exports.RDS = {}));
/** Condition keys for Amazon Redshift
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonredshift.html
  */
var Redshift;
(function (Redshift) {
    Redshift["DbName"] = "redshift:DbName";
    Redshift["DbUser"] = "redshift:DbUser";
    Redshift["DurationSeconds"] = "redshift:DurationSeconds";
})(Redshift = exports.Redshift || (exports.Redshift = {}));
/** Condition keys for Amazon S3
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html
  */
var S3;
(function (S3) {
    S3["LocationConstraint"] = "s3:LocationConstraint";
    S3["RequestObjectTagKeys"] = "s3:RequestObjectTagKeys";
    S3["VersionId"] = "s3:VersionId";
    S3["Authtype"] = "s3:authtype";
    S3["Delimiter"] = "s3:delimiter";
    S3["Locationconstraint"] = "s3:locationconstraint";
    S3["MaxKeys"] = "s3:max-keys";
    S3["Prefix"] = "s3:prefix";
    S3["Signatureage"] = "s3:signatureage";
    S3["Signatureversion"] = "s3:signatureversion";
    S3["Versionid"] = "s3:versionid";
    S3["XAmzAcl"] = "s3:x-amz-acl";
    S3["XAmzContentSha256"] = "s3:x-amz-content-sha256";
    S3["XAmzCopySource"] = "s3:x-amz-copy-source";
    S3["XAmzGrantFullControl"] = "s3:x-amz-grant-full-control";
    S3["XAmzGrantRead"] = "s3:x-amz-grant-read";
    S3["XAmzGrantReadAcp"] = "s3:x-amz-grant-read-acp";
    S3["XAmzGrantWrite"] = "s3:x-amz-grant-write";
    S3["XAmzGrantWriteAcp"] = "s3:x-amz-grant-write-acp";
    S3["XAmzMetadataDirective"] = "s3:x-amz-metadata-directive";
    S3["XAmzServerSideEncryption"] = "s3:x-amz-server-side-encryption";
    S3["XAmzServerSideEncryptionAwsKmsKeyId"] = "s3:x-amz-server-side-encryption-aws-kms-key-id";
    S3["XAmzStorageClass"] = "s3:x-amz-storage-class";
    S3["XAmzWebsiteRedirectLocation"] = "s3:x-amz-website-redirect-location";
})(S3 = exports.S3 || (exports.S3 = {}));
/** Condition keys for Amazon SES
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html
  */
var SES;
(function (SES) {
    SES["FeedbackAddress"] = "ses:FeedbackAddress";
    SES["FromAddress"] = "ses:FromAddress";
    SES["FromDisplayName"] = "ses:FromDisplayName";
    SES["Recipients"] = "ses:Recipients";
})(SES = exports.SES || (exports.SES = {}));
/** Condition keys for Amazon SNS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsns.html
  */
var SNS;
(function (SNS) {
    SNS["Endpoint"] = "sns:Endpoint";
    SNS["Protocol"] = "sns:Protocol";
})(SNS = exports.SNS || (exports.SNS = {}));
/** Condition keys for Amazon Simple Workflow Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpleworkflowservice.html
  */
var SWF;
(function (SWF) {
    SWF["ActivityTypeName"] = "swf:activityType.name";
    SWF["ActivityTypeVersion"] = "swf:activityType.version";
    SWF["DefaultTaskListName"] = "swf:defaultTaskList.name";
    SWF["Name"] = "swf:name";
    SWF["TagFilterTag"] = "swf:tagFilter.tag";
    SWF["TagListMember0"] = "swf:tagList.member.0";
    SWF["TagListMember1"] = "swf:tagList.member.1";
    SWF["TagListMember2"] = "swf:tagList.member.2";
    SWF["TagListMember3"] = "swf:tagList.member.3";
    SWF["TagListMember4"] = "swf:tagList.member.4";
    SWF["TaskListName"] = "swf:taskList.name";
    SWF["TypeFilterName"] = "swf:typeFilter.name";
    SWF["TypeFilterVersion"] = "swf:typeFilter.version";
    SWF["Version"] = "swf:version";
    SWF["WorkflowTypeName"] = "swf:workflowType.name";
    SWF["WorkflowTypeVersion"] = "swf:workflowType.version";
})(SWF = exports.SWF || (exports.SWF = {}));
/** Condition keys for Auto Scaling
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_autoscaling.html
  */
var AutoScaling;
(function (AutoScaling) {
    AutoScaling["ImageId"] = "autoscaling:ImageId";
    AutoScaling["InstanceType"] = "autoscaling:InstanceType";
    AutoScaling["LaunchConfigurationName"] = "autoscaling:LaunchConfigurationName";
    AutoScaling["LoadBalancerNames"] = "autoscaling:LoadBalancerNames";
    AutoScaling["MaxSize"] = "autoscaling:MaxSize";
    AutoScaling["MinSize"] = "autoscaling:MinSize";
    AutoScaling["SpotPrice"] = "autoscaling:SpotPrice";
    AutoScaling["TargetGroupARNs"] = "autoscaling:TargetGroupARNs";
    AutoScaling["VPCZoneIdentifiers"] = "autoscaling:VPCZoneIdentifiers";
})(AutoScaling = exports.AutoScaling || (exports.AutoScaling = {}));
/** Condition keys for Data Pipeline
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_datapipeline.html
  */
var DataPipeline;
(function (DataPipeline) {
    DataPipeline["PipelineCreator"] = "datapipeline:PipelineCreator";
    DataPipeline["Tag"] = "datapipeline:Tag";
    DataPipeline["WorkerGroup"] = "datapipeline:workerGroup";
})(DataPipeline = exports.DataPipeline || (exports.DataPipeline = {}));
/** Condition keys for Identity And Access Management
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_identityandaccessmanagement.html
  */
var IAM;
(function (IAM) {
    IAM["AWSServiceName"] = "iam:AWSServiceName";
    IAM["PassedToService"] = "iam:PassedToService";
    IAM["PolicyARN"] = "iam:PolicyARN";
})(IAM = exports.IAM || (exports.IAM = {}));
