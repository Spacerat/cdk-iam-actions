/** Actions for AWS AppSync
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappsync.html
  */
export enum AppSync {
    CREATE_API_KEY = "appsync:CreateApiKey",
    CREATE_DATA_SOURCE = "appsync:CreateDataSource",
    CREATE_GRAPHQL_API = "appsync:CreateGraphqlApi",
    CREATE_RESOLVER = "appsync:CreateResolver",
    CREATE_TYPE = "appsync:CreateType",
    DELETE_API_KEY = "appsync:DeleteApiKey",
    DELETE_DATA_SOURCE = "appsync:DeleteDataSource",
    DELETE_GRAPHQL_API = "appsync:DeleteGraphqlApi",
    DELETE_RESOLVER = "appsync:DeleteResolver",
    DELETE_TYPE = "appsync:DeleteType",
    GET_DATA_SOURCE = "appsync:GetDataSource",
    GET_GRAPHQL_API = "appsync:GetGraphqlApi",
    GET_INTROSPECTION_SCHEMA = "appsync:GetIntrospectionSchema",
    GET_RESOLVER = "appsync:GetResolver",
    GET_SCHEMA_CREATION_STATUS = "appsync:GetSchemaCreationStatus",
    GET_TYPE = "appsync:GetType",
    GRAPH_QL = "appsync:GraphQL",
    LIST_API_KEYS = "appsync:ListApiKeys",
    LIST_DATA_SOURCES = "appsync:ListDataSources",
    LIST_GRAPHQL_APIS = "appsync:ListGraphqlApis",
    LIST_RESOLVERS = "appsync:ListResolvers",
    LIST_TYPES = "appsync:ListTypes",
    START_SCHEMA_CREATION = "appsync:StartSchemaCreation",
    UPDATE_API_KEY = "appsync:UpdateApiKey",
    UPDATE_DATA_SOURCE = "appsync:UpdateDataSource",
    UPDATE_GRAPHQL_API = "appsync:UpdateGraphqlApi",
    UPDATE_RESOLVER = "appsync:UpdateResolver",
    UPDATE_TYPE = "appsync:UpdateType"
}

/** Actions for AWS Artifact
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsartifact.html
  */
export enum Artifact {
    ACCEPT_AGREEMENT = "artifact:AcceptAgreement",
    DOWNLOAD_AGREEMENT = "artifact:DownloadAgreement",
    GET = "artifact:Get",
    TERMINATE_AGREEMENT = "artifact:TerminateAgreement"
}

/** Actions for AWS Batch
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html
  */
export enum Batch {
    CANCEL_JOB = "batch:CancelJob",
    CREATE_COMPUTE_ENVIRONMENT = "batch:CreateComputeEnvironment",
    CREATE_JOB_QUEUE = "batch:CreateJobQueue",
    DELETE_COMPUTE_ENVIRONMENT = "batch:DeleteComputeEnvironment",
    DELETE_JOB_QUEUE = "batch:DeleteJobQueue",
    DEREGISTER_JOB_DEFINITION = "batch:DeregisterJobDefinition",
    DESCRIBE_COMPUTE_ENVIRONMENTS = "batch:DescribeComputeEnvironments",
    DESCRIBE_JOB_DEFINITIONS = "batch:DescribeJobDefinitions",
    DESCRIBE_JOB_QUEUES = "batch:DescribeJobQueues",
    DESCRIBE_JOBS = "batch:DescribeJobs",
    LIST_JOBS = "batch:ListJobs",
    REGISTER_JOB_DEFINITION = "batch:RegisterJobDefinition",
    SUBMIT_JOB = "batch:SubmitJob",
    TERMINATE_JOB = "batch:TerminateJob",
    UPDATE_COMPUTE_ENVIRONMENT = "batch:UpdateComputeEnvironment",
    UPDATE_JOB_QUEUE = "batch:UpdateJobQueue"
}

/** Actions for AWS Billing
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbilling.html
  */
export enum AWSPortal {
    MODIFY_ACCOUNT = "aws-portal:ModifyAccount",
    MODIFY_BILLING = "aws-portal:ModifyBilling",
    MODIFY_PAYMENT_METHODS = "aws-portal:ModifyPaymentMethods",
    VIEW_ACCOUNT = "aws-portal:ViewAccount",
    VIEW_BILLING = "aws-portal:ViewBilling",
    VIEW_PAYMENT_METHODS = "aws-portal:ViewPaymentMethods",
    VIEW_USAGE = "aws-portal:ViewUsage"
}

/** Actions for AWS Budget Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbudgetservice.html
  */
export enum BudgetS {
    MODIFY_BUDGET = "budgets:ModifyBudget",
    VIEW_BUDGET = "budgets:ViewBudget"
}

/** Actions for AWS Certificate Manager
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscertificatemanager.html
  */
export enum ACM {
    ADD_TAGS_TO_CERTIFICATE = "acm:AddTagsToCertificate",
    DELETE_CERTIFICATE = "acm:DeleteCertificate",
    DESCRIBE_CERTIFICATE = "acm:DescribeCertificate",
    GET_CERTIFICATE = "acm:GetCertificate",
    IMPORT_CERTIFICATE = "acm:ImportCertificate",
    LIST_CERTIFICATES = "acm:ListCertificates",
    LIST_TAGS_FOR_CERTIFICATE = "acm:ListTagsForCertificate",
    REMOVE_TAGS_FROM_CERTIFICATE = "acm:RemoveTagsFromCertificate",
    REQUEST_CERTIFICATE = "acm:RequestCertificate",
    RESEND_VALIDATION_EMAIL = "acm:ResendValidationEmail"
}

/** Actions for AWS Cloud9
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html
  */
export enum Cloud9 {
    CREATE_ENVIRONMENT = "cloud9:CreateEnvironmentEC2",
    CREATE_ENVIRONMENT_MEMBERSHIP = "cloud9:CreateEnvironmentMembership",
    CREATE_ENVIRONMENT_SSH = "cloud9:CreateEnvironmentSSH",
    DELETE_ENVIRONMENT = "cloud9:DeleteEnvironment",
    DELETE_ENVIRONMENT_MEMBERSHIP = "cloud9:DeleteEnvironmentMembership",
    DESCRIBE_ENVIRONMENT_MEMBERSHIPS = "cloud9:DescribeEnvironmentMemberships",
    DESCRIBE_ENVIRONMENT_STATUS = "cloud9:DescribeEnvironmentStatus",
    DESCRIBE_ENVIRONMENTS = "cloud9:DescribeEnvironments",
    GET_USER_PUBLIC_KEY = "cloud9:GetUserPublicKey",
    LIST_ENVIRONMENTS = "cloud9:ListEnvironments",
    UPDATE_ENVIRONMENT = "cloud9:UpdateEnvironment",
    UPDATE_ENVIRONMENT_MEMBERSHIP = "cloud9:UpdateEnvironmentMembership",
    VALIDATE_ENVIRONMENT_NAME = "cloud9:ValidateEnvironmentName"
}

/** Actions for AWS CloudFormation
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudformation.html
  */
export enum CloudFormation {
    CANCEL_UPDATE_STACK = "cloudformation:CancelUpdateStack",
    CONTINUE_UPDATE_ROLLBACK = "cloudformation:ContinueUpdateRollback",
    CREATE_CHANGE_SET = "cloudformation:CreateChangeSet",
    CREATE_STACK = "cloudformation:CreateStack",
    CREATE_UPLOAD_BUCKET = "cloudformation:CreateUploadBucket",
    DELETE_CHANGE_SET = "cloudformation:DeleteChangeSet",
    DELETE_STACK = "cloudformation:DeleteStack",
    DESCRIBE_ACCOUNT_LIMITS = "cloudformation:DescribeAccountLimits",
    DESCRIBE_CHANGE_SET = "cloudformation:DescribeChangeSet",
    DESCRIBE_STACK_EVENTS = "cloudformation:DescribeStackEvents",
    DESCRIBE_STACK_RESOURCE = "cloudformation:DescribeStackResource",
    DESCRIBE_STACK_RESOURCES = "cloudformation:DescribeStackResources",
    DESCRIBE_STACKS = "cloudformation:DescribeStacks",
    ESTIMATE_TEMPLATE_COST = "cloudformation:EstimateTemplateCost",
    EXECUTE_CHANGE_SET = "cloudformation:ExecuteChangeSet",
    GET_STACK_POLICY = "cloudformation:GetStackPolicy",
    GET_TEMPLATE = "cloudformation:GetTemplate",
    GET_TEMPLATE_SUMMARY = "cloudformation:GetTemplateSummary",
    LIST_CHANGE_SETS = "cloudformation:ListChangeSets",
    LIST_EXPORTS = "cloudformation:ListExports",
    LIST_IMPORTS = "cloudformation:ListImports",
    LIST_STACK_RESOURCES = "cloudformation:ListStackResources",
    LIST_STACKS = "cloudformation:ListStacks",
    PREVIEW_STACK_UPDATE = "cloudformation:PreviewStackUpdate",
    SET_STACK_POLICY = "cloudformation:SetStackPolicy",
    SIGNAL_RESOURCE = "cloudformation:SignalResource",
    UPDATE_STACK = "cloudformation:UpdateStack",
    UPDATE_TERMINATION_PROTECTION = "cloudformation:UpdateTerminationProtection",
    VALIDATE_TEMPLATE = "cloudformation:ValidateTemplate"
}

/** Actions for AWS CloudHSM
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudhsm.html
  */
export enum CloudHSM {
    ADD_TAGS_TO_RESOURCE = "cloudhsm:AddTagsToResource",
    CREATE_HAPG = "cloudhsm:CreateHapg",
    CREATE_HSM = "cloudhsm:CreateHsm",
    CREATE_LUNA_CLIENT = "cloudhsm:CreateLunaClient",
    DELETE_HAPG = "cloudhsm:DeleteHapg",
    DELETE_HSM = "cloudhsm:DeleteHsm",
    DELETE_LUNA_CLIENT = "cloudhsm:DeleteLunaClient",
    DESCRIBE_HAPG = "cloudhsm:DescribeHapg",
    DESCRIBE_HSM = "cloudhsm:DescribeHsm",
    DESCRIBE_LUNA_CLIENT = "cloudhsm:DescribeLunaClient",
    GET_CONFIG = "cloudhsm:GetConfig",
    LIST_AVAILABLE_ZONES = "cloudhsm:ListAvailableZones",
    LIST_HAPGS = "cloudhsm:ListHapgs",
    LIST_HSMS = "cloudhsm:ListHsms",
    LIST_LUNA_CLIENTS = "cloudhsm:ListLunaClients",
    LIST_TAGS_FOR_RESOURCE = "cloudhsm:ListTagsForResource",
    MODIFY_HAPG = "cloudhsm:ModifyHapg",
    MODIFY_HSM = "cloudhsm:ModifyHsm",
    MODIFY_LUNA_CLIENT = "cloudhsm:ModifyLunaClient",
    REMOVE_TAGS_FROM_RESOURCE = "cloudhsm:RemoveTagsFromResource"
}

/** Actions for AWS CloudTrail
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudtrail.html
  */
export enum CloudTrail {
    ADD_TAGS = "cloudtrail:AddTags",
    CREATE_TRAIL = "cloudtrail:CreateTrail",
    DELETE_TRAIL = "cloudtrail:DeleteTrail",
    DESCRIBE_TRAILS = "cloudtrail:DescribeTrails",
    GET_EVENT_SELECTORS = "cloudtrail:GetEventSelectors",
    GET_TRAIL_STATUS = "cloudtrail:GetTrailStatus",
    LIST_PUBLIC_KEYS = "cloudtrail:ListPublicKeys",
    LIST_TAGS = "cloudtrail:ListTags",
    LOOKUP_EVENTS = "cloudtrail:LookupEvents",
    PUT_EVENT_SELECTORS = "cloudtrail:PutEventSelectors",
    REMOVE_TAGS = "cloudtrail:RemoveTags",
    START_LOGGING = "cloudtrail:StartLogging",
    STOP_LOGGING = "cloudtrail:StopLogging",
    UPDATE_TRAIL = "cloudtrail:UpdateTrail"
}

/** Actions for AWS Code Signing for Amazon FreeRTOS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodesigningforamazonfreertos.html
  */
export enum Signer {
    DESCRIBE_SIGNING_JOB = "signer:DescribeSigningJob",
    LIST_SIGNING_JOBS = "signer:ListSigningJobs",
    START_SIGNING_JOB = "signer:StartSigningJob"
}

/** Actions for AWS CodeBuild
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodebuild.html
  */
export enum CodeBuild {
    BATCH_DELETE_BUILDS = "codebuild:BatchDeleteBuilds",
    BATCH_GET_BUILDS = "codebuild:BatchGetBuilds",
    BATCH_GET_PROJECTS = "codebuild:BatchGetProjects",
    CREATE_PROJECT = "codebuild:CreateProject",
    DELETE_PROJECT = "codebuild:DeleteProject",
    LIST_BUILDS = "codebuild:ListBuilds",
    LIST_BUILDS_FOR_PROJECT = "codebuild:ListBuildsForProject",
    LIST_CONNECTED_AUTH_ACCOUNTS = "codebuild:ListConnectedOAuthAccounts",
    LIST_CURATED_ENVIRONMENT_IMAGES = "codebuild:ListCuratedEnvironmentImages",
    LIST_PROJECTS = "codebuild:ListProjects",
    LIST_REPOSITORIES = "codebuild:ListRepositories",
    PERSIST_AUTH_TOKEN = "codebuild:PersistOAuthToken",
    START_BUILD = "codebuild:StartBuild",
    STOP_BUILD = "codebuild:StopBuild",
    UPDATE_PROJECT = "codebuild:UpdateProject"
}

/** Actions for AWS CodeCommit
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodecommit.html
  */
export enum CodeCommit {
    BATCH_GET_PULL_REQUESTS = "codecommit:BatchGetPullRequests",
    BATCH_GET_REPOSITORIES = "codecommit:BatchGetRepositories",
    CANCEL_UPLOAD_ARCHIVE = "codecommit:CancelUploadArchive",
    CREATE_BRANCH = "codecommit:CreateBranch",
    CREATE_PULL_REQUEST = "codecommit:CreatePullRequest",
    CREATE_REPOSITORY = "codecommit:CreateRepository",
    DELETE_BRANCH = "codecommit:DeleteBranch",
    DELETE_COMMENT_CONTENT = "codecommit:DeleteCommentContent",
    DELETE_REPOSITORY = "codecommit:DeleteRepository",
    DESCRIBE_PULL_REQUEST_EVENTS = "codecommit:DescribePullRequestEvents",
    GET_BLOB = "codecommit:GetBlob",
    GET_BRANCH = "codecommit:GetBranch",
    GET_COMMENT = "codecommit:GetComment",
    GET_COMMENTS_FOR_COMPARED_COMMIT = "codecommit:GetCommentsForComparedCommit",
    GET_COMMENTS_FOR_PULL_REQUEST = "codecommit:GetCommentsForPullRequest",
    GET_COMMIT = "codecommit:GetCommit",
    GET_COMMIT_HISTORY = "codecommit:GetCommitHistory",
    GET_COMMITS_FROM_MERGE_BASE = "codecommit:GetCommitsFromMergeBase",
    GET_DIFFERENCES = "codecommit:GetDifferences",
    GET_MERGE_CONFLICTS = "codecommit:GetMergeConflicts",
    GET_OBJECT_IDENTIFIER = "codecommit:GetObjectIdentifier",
    GET_PULL_REQUEST = "codecommit:GetPullRequest",
    GET_REFERENCES = "codecommit:GetReferences",
    GET_REPOSITORY = "codecommit:GetRepository",
    GET_REPOSITORY_TRIGGERS = "codecommit:GetRepositoryTriggers",
    GET_TREE = "codecommit:GetTree",
    GET_UPLOAD_ARCHIVE_STATUS = "codecommit:GetUploadArchiveStatus",
    GIT_PULL = "codecommit:GitPull",
    GIT_PUSH = "codecommit:GitPush",
    LIST_BRANCHES = "codecommit:ListBranches",
    LIST_PULL_REQUESTS = "codecommit:ListPullRequests",
    LIST_REPOSITORIES = "codecommit:ListRepositories",
    MERGE_PULL_REQUEST_BY_FAST_FORWARD = "codecommit:MergePullRequestByFastForward",
    POST_COMMENT_FOR_COMPARED_COMMIT = "codecommit:PostCommentForComparedCommit",
    POST_COMMENT_FOR_PULL_REQUEST = "codecommit:PostCommentForPullRequest",
    POST_COMMENT_REPLY = "codecommit:PostCommentReply",
    PUT_FILE = "codecommit:PutFile",
    PUT_REPOSITORY_TRIGGERS = "codecommit:PutRepositoryTriggers",
    TEST_REPOSITORY_TRIGGERS = "codecommit:TestRepositoryTriggers",
    UPDATE_COMMENT = "codecommit:UpdateComment",
    UPDATE_DEFAULT_BRANCH = "codecommit:UpdateDefaultBranch",
    UPDATE_PULL_REQUEST_DESCRIPTION = "codecommit:UpdatePullRequestDescription",
    UPDATE_PULL_REQUEST_STATUS = "codecommit:UpdatePullRequestStatus",
    UPDATE_PULL_REQUEST_TITLE = "codecommit:UpdatePullRequestTitle",
    UPDATE_REPOSITORY_DESCRIPTION = "codecommit:UpdateRepositoryDescription",
    UPDATE_REPOSITORY_NAME = "codecommit:UpdateRepositoryName",
    UPLOAD_ARCHIVE = "codecommit:UploadArchive"
}

/** Actions for AWS CodeDeploy
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodedeploy.html
  */
export enum CodeDeploy {
    ADD_TAGS_TO_ON_PREMISES_INSTANCES = "codedeploy:AddTagsToOnPremisesInstances",
    BATCH_GET_APPLICATION_REVISIONS = "codedeploy:BatchGetApplicationRevisions",
    BATCH_GET_APPLICATIONS = "codedeploy:BatchGetApplications",
    BATCH_GET_DEPLOYMENT_GROUPS = "codedeploy:BatchGetDeploymentGroups",
    BATCH_GET_DEPLOYMENT_INSTANCES = "codedeploy:BatchGetDeploymentInstances",
    BATCH_GET_DEPLOYMENTS = "codedeploy:BatchGetDeployments",
    BATCH_GET_ON_PREMISES_INSTANCES = "codedeploy:BatchGetOnPremisesInstances",
    CONTINUE_DEPLOYMENT = "codedeploy:ContinueDeployment",
    CREATE_APPLICATION = "codedeploy:CreateApplication",
    CREATE_DEPLOYMENT = "codedeploy:CreateDeployment",
    CREATE_DEPLOYMENT_CONFIG = "codedeploy:CreateDeploymentConfig",
    CREATE_DEPLOYMENT_GROUP = "codedeploy:CreateDeploymentGroup",
    DELETE_APPLICATION = "codedeploy:DeleteApplication",
    DELETE_DEPLOYMENT_CONFIG = "codedeploy:DeleteDeploymentConfig",
    DELETE_DEPLOYMENT_GROUP = "codedeploy:DeleteDeploymentGroup",
    DEREGISTER_ON_PREMISES_INSTANCE = "codedeploy:DeregisterOnPremisesInstance",
    GET_APPLICATION = "codedeploy:GetApplication",
    GET_APPLICATION_REVISION = "codedeploy:GetApplicationRevision",
    GET_DEPLOYMENT = "codedeploy:GetDeployment",
    GET_DEPLOYMENT_CONFIG = "codedeploy:GetDeploymentConfig",
    GET_DEPLOYMENT_GROUP = "codedeploy:GetDeploymentGroup",
    GET_DEPLOYMENT_INSTANCE = "codedeploy:GetDeploymentInstance",
    GET_ON_PREMISES_INSTANCE = "codedeploy:GetOnPremisesInstance",
    LIST_APPLICATION_REVISIONS = "codedeploy:ListApplicationRevisions",
    LIST_APPLICATIONS = "codedeploy:ListApplications",
    LIST_DEPLOYMENT_CONFIGS = "codedeploy:ListDeploymentConfigs",
    LIST_DEPLOYMENT_GROUPS = "codedeploy:ListDeploymentGroups",
    LIST_DEPLOYMENT_INSTANCES = "codedeploy:ListDeploymentInstances",
    LIST_DEPLOYMENTS = "codedeploy:ListDeployments",
    LIST_ON_PREMISES_INSTANCES = "codedeploy:ListOnPremisesInstances",
    REGISTER_APPLICATION_REVISION = "codedeploy:RegisterApplicationRevision",
    REGISTER_ON_PREMISES_INSTANCE = "codedeploy:RegisterOnPremisesInstance",
    REMOVE_TAGS_FROM_ON_PREMISES_INSTANCES = "codedeploy:RemoveTagsFromOnPremisesInstances",
    STOP_DEPLOYMENT = "codedeploy:StopDeployment",
    UPDATE_APPLICATION = "codedeploy:UpdateApplication",
    UPDATE_DEPLOYMENT_GROUP = "codedeploy:UpdateDeploymentGroup"
}

/** Actions for AWS CodePipeline
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodepipeline.html
  */
export enum CodePipeline {
    ACKNOWLEDGE_JOB = "codepipeline:AcknowledgeJob",
    ACKNOWLEDGE_THIRD_PARTY_JOB = "codepipeline:AcknowledgeThirdPartyJob",
    CREATE_CUSTOM_ACTION_TYPE = "codepipeline:CreateCustomActionType",
    CREATE_PIPELINE = "codepipeline:CreatePipeline",
    DELETE_CUSTOM_ACTION_TYPE = "codepipeline:DeleteCustomActionType",
    DELETE_PIPELINE = "codepipeline:DeletePipeline",
    DISABLE_STAGE_TRANSITION = "codepipeline:DisableStageTransition",
    ENABLE_STAGE_TRANSITION = "codepipeline:EnableStageTransition",
    GET_JOB_DETAILS = "codepipeline:GetJobDetails",
    GET_PIPELINE = "codepipeline:GetPipeline",
    GET_PIPELINE_EXECUTION = "codepipeline:GetPipelineExecution",
    GET_PIPELINE_STATE = "codepipeline:GetPipelineState",
    GET_THIRD_PARTY_JOB_DETAILS = "codepipeline:GetThirdPartyJobDetails",
    LIST_ACTION_TYPES = "codepipeline:ListActionTypes",
    LIST_PIPELINE_EXECUTIONS = "codepipeline:ListPipelineExecutions",
    LIST_PIPELINES = "codepipeline:ListPipelines",
    POLL_FOR_JOBS = "codepipeline:PollForJobs",
    POLL_FOR_THIRD_PARTY_JOBS = "codepipeline:PollForThirdPartyJobs",
    PUT_ACTION_REVISION = "codepipeline:PutActionRevision",
    PUT_APPROVAL_RESULT = "codepipeline:PutApprovalResult",
    PUT_JOB_FAILURE_RESULT = "codepipeline:PutJobFailureResult",
    PUT_JOB_SUCCESS_RESULT = "codepipeline:PutJobSuccessResult",
    PUT_THIRD_PARTY_JOB_FAILURE_RESULT = "codepipeline:PutThirdPartyJobFailureResult",
    PUT_THIRD_PARTY_JOB_SUCCESS_RESULT = "codepipeline:PutThirdPartyJobSuccessResult",
    RETRY_STAGE_EXECUTION = "codepipeline:RetryStageExecution",
    START_PIPELINE_EXECUTION = "codepipeline:StartPipelineExecution",
    UPDATE_PIPELINE = "codepipeline:UpdatePipeline"
}

/** Actions for AWS CodeStar
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestar.html
  */
export enum CodeStar {
    ASSOCIATE_TEAM_MEMBER = "codestar:AssociateTeamMember",
    CREATE_PROJECT = "codestar:CreateProject",
    CREATE_USER_PROFILE = "codestar:CreateUserProfile",
    DELETE_EXTENDED_ACCESS = "codestar:DeleteExtendedAccess",
    DELETE_PROJECT = "codestar:DeleteProject",
    DELETE_USER_PROFILE = "codestar:DeleteUserProfile",
    DESCRIBE_PROJECT = "codestar:DescribeProject",
    DESCRIBE_USER_PROFILE = "codestar:DescribeUserProfile",
    DISASSOCIATE_TEAM_MEMBER = "codestar:DisassociateTeamMember",
    GET_EXTENDED_ACCESS = "codestar:GetExtendedAccess",
    LIST_PROJECTS = "codestar:ListProjects",
    LIST_RESOURCES = "codestar:ListResources",
    LIST_TEAM_MEMBERS = "codestar:ListTeamMembers",
    LIST_USER_PROFILES = "codestar:ListUserProfiles",
    PUT_EXTENDED_ACCESS = "codestar:PutExtendedAccess",
    UPDATE_PROJECT = "codestar:UpdateProject",
    UPDATE_TEAM_MEMBER = "codestar:UpdateTeamMember",
    UPDATE_USER_PROFILE = "codestar:UpdateUserProfile",
    VERIFY_SERVICE_ROLE = "codestar:VerifyServiceRole"
}

/** Actions for AWS Config
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsconfig.html
  */
export enum Config {
    DELETE_CONFIG_RULE = "config:DeleteConfigRule",
    DELETE_CONFIGURATION_RECORDER = "config:DeleteConfigurationRecorder",
    DELETE_DELIVERY_CHANNEL = "config:DeleteDeliveryChannel",
    DELETE_EVALUATION_RESULTS = "config:DeleteEvaluationResults",
    DELIVER_CONFIG_SNAPSHOT = "config:DeliverConfigSnapshot",
    DESCRIBE_COMPLIANCE_BY_CONFIG_RULE = "config:DescribeComplianceByConfigRule",
    DESCRIBE_COMPLIANCE_BY_RESOURCE = "config:DescribeComplianceByResource",
    DESCRIBE_CONFIG_RULE_EVALUATION_STATUS = "config:DescribeConfigRuleEvaluationStatus",
    DESCRIBE_CONFIG_RULES = "config:DescribeConfigRules",
    DESCRIBE_CONFIGURATION_RECORDER_STATUS = "config:DescribeConfigurationRecorderStatus",
    DESCRIBE_CONFIGURATION_RECORDERS = "config:DescribeConfigurationRecorders",
    DESCRIBE_DELIVERY_CHANNEL_STATUS = "config:DescribeDeliveryChannelStatus",
    DESCRIBE_DELIVERY_CHANNELS = "config:DescribeDeliveryChannels",
    GET_COMPLIANCE_DETAILS_BY_CONFIG_RULE = "config:GetComplianceDetailsByConfigRule",
    GET_COMPLIANCE_DETAILS_BY_RESOURCE = "config:GetComplianceDetailsByResource",
    GET_COMPLIANCE_SUMMARY_BY_CONFIG_RULE = "config:GetComplianceSummaryByConfigRule",
    GET_COMPLIANCE_SUMMARY_BY_RESOURCE_TYPE = "config:GetComplianceSummaryByResourceType",
    GET_RESOURCE_CONFIG_HISTORY = "config:GetResourceConfigHistory",
    GET_RESOURCES = "config:GetResources",
    GET_TAG_KEYS = "config:GetTagKeys",
    LIST_DISCOVERED_RESOURCES = "config:ListDiscoveredResources",
    PUT_CONFIG_RULE = "config:PutConfigRule",
    PUT_CONFIGURATION_RECORDER = "config:PutConfigurationRecorder",
    PUT_DELIVERY_CHANNEL = "config:PutDeliveryChannel",
    PUT_EVALUATIONS = "config:PutEvaluations",
    START_CONFIG_RULES_EVALUATION = "config:StartConfigRulesEvaluation",
    START_CONFIGURATION_RECORDER = "config:StartConfigurationRecorder",
    STOP_CONFIGURATION_RECORDER = "config:StopConfigurationRecorder"
}

/** Actions for AWS Cost Explorer Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscostexplorerservice.html
  */
export enum ce {
    GET_COST_AND_USAGE = "ce:GetCostAndUsage",
    GET_DIMENSION_VALUES = "ce:GetDimensionValues",
    GET_RESERVATION_UTILIZATION = "ce:GetReservationUtilization",
    GET_TAGS = "ce:GetTags"
}

/** Actions for AWS Cost and Usage Report
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscostandusagereport.html
  */
export enum CUR {
    DELETE_REPORT_DEFINITION = "cur:DeleteReportDefinition",
    DESCRIBE_REPORT_DEFINITIONS = "cur:DescribeReportDefinitions",
    PUT_REPORT_DEFINITION = "cur:PutReportDefinition"
}

/** Actions for AWS Database Migration Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdatabasemigrationservice.html
  */
export enum DMS {
    ADD_TAGS_TO_RESOURCE = "dms:AddTagsToResource",
    CREATE_ENDPOINT = "dms:CreateEndpoint",
    CREATE_REPLICATION_INSTANCE = "dms:CreateReplicationInstance",
    CREATE_REPLICATION_SUBNET_GROUP = "dms:CreateReplicationSubnetGroup",
    CREATE_REPLICATION_TASK = "dms:CreateReplicationTask",
    DELETE_ENDPOINT = "dms:DeleteEndpoint",
    DELETE_EVENT_SUBSCRIPTION = "dms:DeleteEventSubscription",
    DELETE_REPLICATION_INSTANCE = "dms:DeleteReplicationInstance",
    DELETE_REPLICATION_SUBNET_GROUP = "dms:DeleteReplicationSubnetGroup",
    DELETE_REPLICATION_TASK = "dms:DeleteReplicationTask",
    DESCRIBE_ACCOUNT_ATTRIBUTES = "dms:DescribeAccountAttributes",
    DESCRIBE_CERTIFICATES = "dms:DescribeCertificates",
    DESCRIBE_CONNECTIONS = "dms:DescribeConnections",
    DESCRIBE_ENDPOINT_TYPES = "dms:DescribeEndpointTypes",
    DESCRIBE_ENDPOINTS = "dms:DescribeEndpoints",
    DESCRIBE_EVENT_CATEGORIES = "dms:DescribeEventCategories",
    DESCRIBE_EVENT_SUBSCRIPTIONS = "dms:DescribeEventSubscriptions",
    DESCRIBE_EVENTS = "dms:DescribeEvents",
    DESCRIBE_ORDERABLE_REPLICATION_INSTANCES = "dms:DescribeOrderableReplicationInstances",
    DESCRIBE_REFRESH_SCHEMAS_STATUS = "dms:DescribeRefreshSchemasStatus",
    DESCRIBE_REPLICATION_INSTANCES = "dms:DescribeReplicationInstances",
    DESCRIBE_REPLICATION_SUBNET_GROUPS = "dms:DescribeReplicationSubnetGroups",
    DESCRIBE_REPLICATION_TASKS = "dms:DescribeReplicationTasks",
    DESCRIBE_SCHEMAS = "dms:DescribeSchemas",
    DESCRIBE_TABLE_STATISTICS = "dms:DescribeTableStatistics",
    LIST_TAGS_FOR_RESOURCE = "dms:ListTagsForResource",
    MODIFY_ENDPOINT = "dms:ModifyEndpoint",
    MODIFY_EVENT_SUBSCRIPTION = "dms:ModifyEventSubscription",
    MODIFY_REPLICATION_INSTANCE = "dms:ModifyReplicationInstance",
    MODIFY_REPLICATION_SUBNET_GROUP = "dms:ModifyReplicationSubnetGroup",
    MODIFY_REPLICATION_TASK = "dms:ModifyReplicationTask",
    REFRESH_SCHEMAS = "dms:RefreshSchemas",
    REMOVE_TAGS_FROM_RESOURCE = "dms:RemoveTagsFromResource",
    START_REPLICATION_TASK = "dms:StartReplicationTask",
    STOP_REPLICATION_TASK = "dms:StopReplicationTask",
    TEST_CONNECTION = "dms:TestConnection"
}

/** Actions for AWS Device Farm
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdevicefarm.html
  */
export enum DeviceFarm {
    CREATE_DEVICE_POOL = "devicefarm:CreateDevicePool",
    CREATE_NETWORK_PROFILE = "devicefarm:CreateNetworkProfile",
    CREATE_PROJECT = "devicefarm:CreateProject",
    CREATE_REMOTE_ACCESS_SESSION = "devicefarm:CreateRemoteAccessSession",
    CREATE_UPLOAD = "devicefarm:CreateUpload",
    DELETE_DEVICE_POOL = "devicefarm:DeleteDevicePool",
    DELETE_NETWORK_PROFILE = "devicefarm:DeleteNetworkProfile",
    DELETE_PROJECT = "devicefarm:DeleteProject",
    DELETE_REMOTE_ACCESS_SESSION = "devicefarm:DeleteRemoteAccessSession",
    DELETE_RUN = "devicefarm:DeleteRun",
    DELETE_UPLOAD = "devicefarm:DeleteUpload",
    GET_ACCOUNT_SETTINGS = "devicefarm:GetAccountSettings",
    GET_DEVICE = "devicefarm:GetDevice",
    GET_DEVICE_POOL = "devicefarm:GetDevicePool",
    GET_DEVICE_POOL_COMPATIBILITY = "devicefarm:GetDevicePoolCompatibility",
    GET_JOB = "devicefarm:GetJob",
    GET_NETWORK_PROFILE = "devicefarm:GetNetworkProfile",
    GET_OFFERING_STATUS = "devicefarm:GetOfferingStatus",
    GET_PROJECT = "devicefarm:GetProject",
    GET_REMOTE_ACCESS_SESSION = "devicefarm:GetRemoteAccessSession",
    GET_RUN = "devicefarm:GetRun",
    GET_SUITE = "devicefarm:GetSuite",
    GET_TEST = "devicefarm:GetTest",
    GET_UPLOAD = "devicefarm:GetUpload",
    INSTALL_TO_REMOTE_ACCESS_SESSION = "devicefarm:InstallToRemoteAccessSession",
    LIST_ARTIFACTS = "devicefarm:ListArtifacts",
    LIST_DEVICE_POOLS = "devicefarm:ListDevicePools",
    LIST_DEVICES = "devicefarm:ListDevices",
    LIST_JOBS = "devicefarm:ListJobs",
    LIST_NETWORK_PROFILES = "devicefarm:ListNetworkProfiles",
    LIST_OFFERING_TRANSACTIONS = "devicefarm:ListOfferingTransactions",
    LIST_OFFERINGS = "devicefarm:ListOfferings",
    LIST_PROJECTS = "devicefarm:ListProjects",
    LIST_REMOTE_ACCESS_SESSIONS = "devicefarm:ListRemoteAccessSessions",
    LIST_RUNS = "devicefarm:ListRuns",
    LIST_SAMPLES = "devicefarm:ListSamples",
    LIST_SUITES = "devicefarm:ListSuites",
    LIST_TESTS = "devicefarm:ListTests",
    LIST_UNIQUE_PROBLEMS = "devicefarm:ListUniqueProblems",
    LIST_UPLOADS = "devicefarm:ListUploads",
    PURCHASE_OFFERING = "devicefarm:PurchaseOffering",
    RENEW_OFFERING = "devicefarm:RenewOffering",
    SCHEDULE_RUN = "devicefarm:ScheduleRun",
    STOP_REMOTE_ACCESS_SESSION = "devicefarm:StopRemoteAccessSession",
    STOP_RUN = "devicefarm:StopRun",
    UPDATE_DEVICE_POOL = "devicefarm:UpdateDevicePool",
    UPDATE_NETWORK_PROFILE = "devicefarm:UpdateNetworkProfile",
    UPDATE_PROJECT = "devicefarm:UpdateProject"
}

/** Actions for AWS Direct Connect
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdirectconnect.html
  */
export enum DirectConnect {
    ALLOCATE_CONNECTION_ON_INTERCONNECT = "directconnect:AllocateConnectionOnInterconnect",
    ALLOCATE_PRIVATE_VIRTUAL_INTERFACE = "directconnect:AllocatePrivateVirtualInterface",
    ALLOCATE_PUBLIC_VIRTUAL_INTERFACE = "directconnect:AllocatePublicVirtualInterface",
    CONFIRM_CONNECTION = "directconnect:ConfirmConnection",
    CONFIRM_PRIVATE_VIRTUAL_INTERFACE = "directconnect:ConfirmPrivateVirtualInterface",
    CONFIRM_PUBLIC_VIRTUAL_INTERFACE = "directconnect:ConfirmPublicVirtualInterface",
    CREATE_CONNECTION = "directconnect:CreateConnection",
    CREATE_INTERCONNECT = "directconnect:CreateInterconnect",
    CREATE_PRIVATE_VIRTUAL_INTERFACE = "directconnect:CreatePrivateVirtualInterface",
    CREATE_PUBLIC_VIRTUAL_INTERFACE = "directconnect:CreatePublicVirtualInterface",
    DELETE_CONNECTION = "directconnect:DeleteConnection",
    DELETE_INTERCONNECT = "directconnect:DeleteInterconnect",
    DELETE_VIRTUAL_INTERFACE = "directconnect:DeleteVirtualInterface",
    DESCRIBE_CONNECTION_LOA = "directconnect:DescribeConnectionLoa",
    DESCRIBE_CONNECTIONS = "directconnect:DescribeConnections",
    DESCRIBE_CONNECTIONS_ON_INTERCONNECT = "directconnect:DescribeConnectionsOnInterconnect",
    DESCRIBE_INTERCONNECT_LOA = "directconnect:DescribeInterconnectLoa",
    DESCRIBE_INTERCONNECTS = "directconnect:DescribeInterconnects",
    DESCRIBE_LOCATIONS = "directconnect:DescribeLocations",
    DESCRIBE_VIRTUAL_GATEWAYS = "directconnect:DescribeVirtualGateways",
    DESCRIBE_VIRTUAL_INTERFACES = "directconnect:DescribeVirtualInterfaces"
}

/** Actions for AWS Directory Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdirectoryservice.html
  */
export enum DS {
    ADD_IP_ROUTES = "ds:AddIpRoutes",
    ADD_TAGS_TO_RESOURCE = "ds:AddTagsToResource",
    AUTHORIZE_APPLICATION = "ds:AuthorizeApplication",
    CANCEL_SCHEMA_EXTENSION = "ds:CancelSchemaExtension",
    CONNECT_DIRECTORY = "ds:ConnectDirectory",
    CREATE_ALIAS = "ds:CreateAlias",
    CREATE_COMPUTER = "ds:CreateComputer",
    CREATE_CONDITIONAL_FORWARDER = "ds:CreateConditionalForwarder",
    CREATE_DIRECTORY = "ds:CreateDirectory",
    CREATE_MICROSOFT_AD = "ds:CreateMicrosoftAD",
    CREATE_SNAPSHOT = "ds:CreateSnapshot",
    CREATE_TRUST = "ds:CreateTrust",
    DELETE_CONDITIONAL_FORWARDER = "ds:DeleteConditionalForwarder",
    DELETE_DIRECTORY = "ds:DeleteDirectory",
    DELETE_SNAPSHOT = "ds:DeleteSnapshot",
    DELETE_TRUST = "ds:DeleteTrust",
    DEREGISTER_EVENT_TOPIC = "ds:DeregisterEventTopic",
    DESCRIBE_CONDITIONAL_FORWARDERS = "ds:DescribeConditionalForwarders",
    DESCRIBE_DIRECTORIES = "ds:DescribeDirectories",
    DESCRIBE_EVENT_TOPICS = "ds:DescribeEventTopics",
    DESCRIBE_SNAPSHOTS = "ds:DescribeSnapshots",
    DESCRIBE_TRUSTS = "ds:DescribeTrusts",
    DISABLE_RADIUS = "ds:DisableRadius",
    DISABLE_SSO = "ds:DisableSso",
    ENABLE_RADIUS = "ds:EnableRadius",
    ENABLE_SSO = "ds:EnableSso",
    GET_DIRECTORY_LIMITS = "ds:GetDirectoryLimits",
    GET_SNAPSHOT_LIMITS = "ds:GetSnapshotLimits",
    LIST_AUTHORIZED_APPLICATIONS = "ds:ListAuthorizedApplications",
    LIST_IP_ROUTES = "ds:ListIpRoutes",
    LIST_SCHEMA_EXTENSIONS = "ds:ListSchemaExtensions",
    LIST_TAGS_FOR_RESOURCE = "ds:ListTagsForResource",
    REGISTER_EVENT_TOPIC = "ds:RegisterEventTopic",
    REMOVE_IP_ROUTES = "ds:RemoveIpRoutes",
    REMOVE_TAGS_FROM_RESOURCE = "ds:RemoveTagsFromResource",
    RESTORE_FROM_SNAPSHOT = "ds:RestoreFromSnapshot",
    START_SCHEMA_EXTENSION = "ds:StartSchemaExtension",
    UNAUTHORIZE_APPLICATION = "ds:UnauthorizeApplication",
    UPDATE_CONDITIONAL_FORWARDER = "ds:UpdateConditionalForwarder",
    UPDATE_RADIUS = "ds:UpdateRadius",
    VERIFY_TRUST = "ds:VerifyTrust"
}

/** Actions for AWS Elastic Beanstalk
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselasticbeanstalk.html
  */
export enum ElasticBeanstalk {
    ABORT_ENVIRONMENT_UPDATE = "elasticbeanstalk:AbortEnvironmentUpdate",
    APPLY_ENVIRONMENT_MANAGED_ACTION = "elasticbeanstalk:ApplyEnvironmentManagedAction",
    CHECK_DNS_AVAILABILITY = "elasticbeanstalk:CheckDNSAvailability",
    COMPOSE_ENVIRONMENTS = "elasticbeanstalk:ComposeEnvironments",
    CREATE_APPLICATION = "elasticbeanstalk:CreateApplication",
    CREATE_APPLICATION_VERSION = "elasticbeanstalk:CreateApplicationVersion",
    CREATE_CONFIGURATION_TEMPLATE = "elasticbeanstalk:CreateConfigurationTemplate",
    CREATE_ENVIRONMENT = "elasticbeanstalk:CreateEnvironment",
    CREATE_PLATFORM_VERSION = "elasticbeanstalk:CreatePlatformVersion",
    CREATE_STORAGE_LOCATION = "elasticbeanstalk:CreateStorageLocation",
    DELETE_APPLICATION = "elasticbeanstalk:DeleteApplication",
    DELETE_APPLICATION_VERSION = "elasticbeanstalk:DeleteApplicationVersion",
    DELETE_CONFIGURATION_TEMPLATE = "elasticbeanstalk:DeleteConfigurationTemplate",
    DELETE_ENVIRONMENT_CONFIGURATION = "elasticbeanstalk:DeleteEnvironmentConfiguration",
    DELETE_PLATFORM_VERSION = "elasticbeanstalk:DeletePlatformVersion",
    DESCRIBE_APPLICATION_VERSIONS = "elasticbeanstalk:DescribeApplicationVersions",
    DESCRIBE_APPLICATIONS = "elasticbeanstalk:DescribeApplications",
    DESCRIBE_CONFIGURATION_OPTIONS = "elasticbeanstalk:DescribeConfigurationOptions",
    DESCRIBE_CONFIGURATION_SETTINGS = "elasticbeanstalk:DescribeConfigurationSettings",
    DESCRIBE_ENVIRONMENT_HEALTH = "elasticbeanstalk:DescribeEnvironmentHealth",
    DESCRIBE_ENVIRONMENT_MANAGED_ACTION_HISTORY = "elasticbeanstalk:DescribeEnvironmentManagedActionHistory",
    DESCRIBE_ENVIRONMENT_MANAGED_ACTIONS = "elasticbeanstalk:DescribeEnvironmentManagedActions",
    DESCRIBE_ENVIRONMENT_RESOURCES = "elasticbeanstalk:DescribeEnvironmentResources",
    DESCRIBE_ENVIRONMENTS = "elasticbeanstalk:DescribeEnvironments",
    DESCRIBE_EVENTS = "elasticbeanstalk:DescribeEvents",
    DESCRIBE_INSTANCES_HEALTH = "elasticbeanstalk:DescribeInstancesHealth",
    DESCRIBE_PLATFORM_VERSION = "elasticbeanstalk:DescribePlatformVersion",
    LIST_AVAILABLE_SOLUTION_STACKS = "elasticbeanstalk:ListAvailableSolutionStacks",
    LIST_PLATFORM_VERSIONS = "elasticbeanstalk:ListPlatformVersions",
    REBUILD_ENVIRONMENT = "elasticbeanstalk:RebuildEnvironment",
    REQUEST_ENVIRONMENT_INFO = "elasticbeanstalk:RequestEnvironmentInfo",
    RESTART_APP_SERVER = "elasticbeanstalk:RestartAppServer",
    RETRIEVE_ENVIRONMENT_INFO = "elasticbeanstalk:RetrieveEnvironmentInfo",
    SWAP_ENVIRONMENT_CNAM_ES = "elasticbeanstalk:SwapEnvironmentCNAMEs",
    TERMINATE_ENVIRONMENT = "elasticbeanstalk:TerminateEnvironment",
    UPDATE_APPLICATION = "elasticbeanstalk:UpdateApplication",
    UPDATE_APPLICATION_RESOURCE_LIFECYCLE = "elasticbeanstalk:UpdateApplicationResourceLifecycle",
    UPDATE_APPLICATION_VERSION = "elasticbeanstalk:UpdateApplicationVersion",
    UPDATE_CONFIGURATION_TEMPLATE = "elasticbeanstalk:UpdateConfigurationTemplate",
    UPDATE_ENVIRONMENT = "elasticbeanstalk:UpdateEnvironment",
    VALIDATE_CONFIGURATION_SETTINGS = "elasticbeanstalk:ValidateConfigurationSettings"
}

/** Actions for AWS Elemental MediaConvert
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediaconvert.html
  */
export enum MediaConvert {
    CANCEL_JOB = "mediaconvert:CancelJob",
    CREATE_JOB = "mediaconvert:CreateJob",
    CREATE_JOB_TEMPLATE = "mediaconvert:CreateJobTemplate",
    CREATE_PRESET = "mediaconvert:CreatePreset",
    CREATE_QUEUE = "mediaconvert:CreateQueue",
    DELETE_JOB_TEMPLATE = "mediaconvert:DeleteJobTemplate",
    DELETE_PRESET = "mediaconvert:DeletePreset",
    DELETE_QUEUE = "mediaconvert:DeleteQueue",
    DESCRIBE_ENDPOINT = "mediaconvert:DescribeEndpoint",
    GET_JOB = "mediaconvert:GetJob",
    GET_JOB_TEMPLATE = "mediaconvert:GetJobTemplate",
    GET_PRESET = "mediaconvert:GetPreset",
    GET_QUEUE = "mediaconvert:GetQueue",
    LIST_JOB_TEMPLATES = "mediaconvert:ListJobTemplates",
    LIST_JOBS = "mediaconvert:ListJobs",
    LIST_PRESETS = "mediaconvert:ListPresets",
    LIST_QUEUES = "mediaconvert:ListQueues",
    UPDATE_JOB_TEMPLATE = "mediaconvert:UpdateJobTemplate",
    UPDATE_PRESET = "mediaconvert:UpdatePreset",
    UPDATE_QUEUE = "mediaconvert:UpdateQueue"
}

/** Actions for AWS Elemental MediaLive
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmedialive.html
  */
export enum MediaLive {
    CREATE_CHANNEL = "medialive:CreateChannel",
    CREATE_INPUT = "medialive:CreateInput",
    CREATE_INPUT_SECURITY_GROUP = "medialive:CreateInputSecurityGroup",
    DELETE_CHANNEL = "medialive:DeleteChannel",
    DELETE_INPUT = "medialive:DeleteInput",
    DELETE_INPUT_SECURITY_GROUP = "medialive:DeleteInputSecurityGroup",
    DESCRIBE_CHANNEL = "medialive:DescribeChannel",
    DESCRIBE_INPUT = "medialive:DescribeInput",
    DESCRIBE_INPUT_SECURITY_GROUP = "medialive:DescribeInputSecurityGroup",
    LIST_CHANNELS = "medialive:ListChannels",
    LIST_INPUT_SECURITY_GROUPS = "medialive:ListInputSecurityGroups",
    LIST_INPUTS = "medialive:ListInputs",
    START_CHANNEL = "medialive:StartChannel",
    STOP_CHANNEL = "medialive:StopChannel"
}

/** Actions for AWS Elemental MediaPackage
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediapackage.html
  */
export enum MediaPackage {
    CREATE_CHANNEL = "mediapackage:CreateChannel",
    CREATE_ORIGIN_ENDPOINT = "mediapackage:CreateOriginEndpoint",
    DELETE_CHANNEL = "mediapackage:DeleteChannel",
    DELETE_ORIGIN_ENDPOINT = "mediapackage:DeleteOriginEndpoint",
    DESCRIBE_CHANNEL = "mediapackage:DescribeChannel",
    DESCRIBE_ORIGIN_ENDPOINT = "mediapackage:DescribeOriginEndpoint",
    LIST_CHANNELS = "mediapackage:ListChannels",
    LIST_ORIGIN_ENDPOINTS = "mediapackage:ListOriginEndpoints",
    UPDATE_CHANNEL = "mediapackage:UpdateChannel",
    UPDATE_ORIGIN_ENDPOINT = "mediapackage:UpdateOriginEndpoint"
}

/** Actions for AWS Elemental MediaStore
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediastore.html
  */
export enum MediaStore {
    CREATE_CONTAINER = "mediastore:CreateContainer",
    DELETE_CONTAINER = "mediastore:DeleteContainer",
    DELETE_CONTAINER_POLICY = "mediastore:DeleteContainerPolicy",
    DELETE_OBJECT = "mediastore:DeleteObject",
    DESCRIBE_CONTAINER = "mediastore:DescribeContainer",
    DESCRIBE_OBJECT = "mediastore:DescribeObject",
    GET_CONTAINER_POLICY = "mediastore:GetContainerPolicy",
    GET_OBJECT = "mediastore:GetObject",
    LIST_CONTAINERS = "mediastore:ListContainers",
    LIST_ITEMS = "mediastore:ListItems",
    PUT_CONTAINER_POLICY = "mediastore:PutContainerPolicy",
    PUT_OBJECT = "mediastore:PutObject"
}

/** Actions for AWS Glue
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsglue.html
  */
export enum Glue {
    BATCH_CREATE_PARTITION = "glue:BatchCreatePartition",
    BATCH_DELETE_CONNECTION = "glue:BatchDeleteConnection",
    BATCH_DELETE_PARTITION = "glue:BatchDeletePartition",
    BATCH_DELETE_TABLE = "glue:BatchDeleteTable",
    BATCH_GET_PARTITION = "glue:BatchGetPartition",
    CREATE_CLASSIFIER = "glue:CreateClassifier",
    CREATE_CONNECTION = "glue:CreateConnection",
    CREATE_CRAWLER = "glue:CreateCrawler",
    CREATE_DATABASE = "glue:CreateDatabase",
    CREATE_DEV_ENDPOINT = "glue:CreateDevEndpoint",
    CREATE_JOB = "glue:CreateJob",
    CREATE_PARTITION = "glue:CreatePartition",
    CREATE_SCRIPT = "glue:CreateScript",
    CREATE_TABLE = "glue:CreateTable",
    CREATE_TRIGGER = "glue:CreateTrigger",
    CREATE_USER_DEFINED_FUNCTION = "glue:CreateUserDefinedFunction",
    DELETE_CLASSIFIER = "glue:DeleteClassifier",
    DELETE_CONNECTION = "glue:DeleteConnection",
    DELETE_CRAWLER = "glue:DeleteCrawler",
    DELETE_DATABASE = "glue:DeleteDatabase",
    DELETE_DEV_ENDPOINT = "glue:DeleteDevEndpoint",
    DELETE_JOB = "glue:DeleteJob",
    DELETE_PARTITION = "glue:DeletePartition",
    DELETE_TABLE = "glue:DeleteTable",
    DELETE_TRIGGER = "glue:DeleteTrigger",
    DELETE_USER_DEFINED_FUNCTION = "glue:DeleteUserDefinedFunction",
    GET_CATALOG_IMPORT_STATUS = "glue:GetCatalogImportStatus",
    GET_CLASSIFIER = "glue:GetClassifier",
    GET_CLASSIFIERS = "glue:GetClassifiers",
    GET_CONNECTION = "glue:GetConnection",
    GET_CONNECTIONS = "glue:GetConnections",
    GET_CRAWLER = "glue:GetCrawler",
    GET_CRAWLER_METRICS = "glue:GetCrawlerMetrics",
    GET_CRAWLERS = "glue:GetCrawlers",
    GET_DATABASE = "glue:GetDatabase",
    GET_DATABASES = "glue:GetDatabases",
    GET_DATAFLOW_GRAPH = "glue:GetDataflowGraph",
    GET_DEV_ENDPOINT = "glue:GetDevEndpoint",
    GET_DEV_ENDPOINTS = "glue:GetDevEndpoints",
    GET_JOB = "glue:GetJob",
    GET_JOB_RUN = "glue:GetJobRun",
    GET_JOB_RUNS = "glue:GetJobRuns",
    GET_JOBS = "glue:GetJobs",
    GET_MAPPING = "glue:GetMapping",
    GET_PARTITION = "glue:GetPartition",
    GET_PARTITIONS = "glue:GetPartitions",
    GET_PLAN = "glue:GetPlan",
    GET_TABLE = "glue:GetTable",
    GET_TABLE_VERSIONS = "glue:GetTableVersions",
    GET_TABLES = "glue:GetTables",
    GET_TRIGGER = "glue:GetTrigger",
    GET_TRIGGERS = "glue:GetTriggers",
    GET_USER_DEFINED_FUNCTION = "glue:GetUserDefinedFunction",
    GET_USER_DEFINED_FUNCTIONS = "glue:GetUserDefinedFunctions",
    IMPORT_CATALOG_TO_GLUE = "glue:ImportCatalogToGlue",
    RESET_JOB_BOOKMARK = "glue:ResetJobBookmark",
    START_CRAWLER = "glue:StartCrawler",
    START_CRAWLER_SCHEDULE = "glue:StartCrawlerSchedule",
    START_JOB_RUN = "glue:StartJobRun",
    START_TRIGGER = "glue:StartTrigger",
    STOP_CRAWLER = "glue:StopCrawler",
    STOP_CRAWLER_SCHEDULE = "glue:StopCrawlerSchedule",
    STOP_TRIGGER = "glue:StopTrigger",
    UPDATE_CLASSIFIER = "glue:UpdateClassifier",
    UPDATE_CONNECTION = "glue:UpdateConnection",
    UPDATE_CRAWLER = "glue:UpdateCrawler",
    UPDATE_DATABASE = "glue:UpdateDatabase",
    UPDATE_DEV_ENDPOINT = "glue:UpdateDevEndpoint",
    UPDATE_JOB = "glue:UpdateJob",
    UPDATE_PARTITION = "glue:UpdatePartition",
    UPDATE_TABLE = "glue:UpdateTable",
    UPDATE_TRIGGER = "glue:UpdateTrigger",
    UPDATE_USER_DEFINED_FUNCTION = "glue:UpdateUserDefinedFunction"
}

/** Actions for AWS Greengrass
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsgreengrass.html
  */
export enum Greengrass {
    ASSOCIATE_ROLE_TO_GROUP = "greengrass:AssociateRoleToGroup",
    ASSOCIATE_SERVICE_ROLE_TO_ACCOUNT = "greengrass:AssociateServiceRoleToAccount",
    CREATE_CORE_DEFINITION = "greengrass:CreateCoreDefinition",
    CREATE_CORE_DEFINITION_VERSION = "greengrass:CreateCoreDefinitionVersion",
    CREATE_DEPLOYMENT = "greengrass:CreateDeployment",
    CREATE_DEVICE_DEFINITION = "greengrass:CreateDeviceDefinition",
    CREATE_DEVICE_DEFINITION_VERSION = "greengrass:CreateDeviceDefinitionVersion",
    CREATE_FUNCTION_DEFINITION = "greengrass:CreateFunctionDefinition",
    CREATE_FUNCTION_DEFINITION_VERSION = "greengrass:CreateFunctionDefinitionVersion",
    CREATE_GROUP = "greengrass:CreateGroup",
    CREATE_GROUP_CERTIFICATE_AUTHORITY = "greengrass:CreateGroupCertificateAuthority",
    CREATE_GROUP_VERSION = "greengrass:CreateGroupVersion",
    CREATE_LOGGER_DEFINITION = "greengrass:CreateLoggerDefinition",
    CREATE_LOGGER_DEFINITION_VERSION = "greengrass:CreateLoggerDefinitionVersion",
    CREATE_RESOURCE_DEFINITION = "greengrass:CreateResourceDefinition",
    CREATE_RESOURCE_DEFINITION_VERSION = "greengrass:CreateResourceDefinitionVersion",
    CREATE_SOFTWARE_UPDATE_JOB = "greengrass:CreateSoftwareUpdateJob",
    CREATE_SUBSCRIPTION_DEFINITION = "greengrass:CreateSubscriptionDefinition",
    CREATE_SUBSCRIPTION_DEFINITION_VERSION = "greengrass:CreateSubscriptionDefinitionVersion",
    DELETE_CORE_DEFINITION = "greengrass:DeleteCoreDefinition",
    DELETE_DEVICE_DEFINITION = "greengrass:DeleteDeviceDefinition",
    DELETE_FUNCTION_DEFINITION = "greengrass:DeleteFunctionDefinition",
    DELETE_GROUP = "greengrass:DeleteGroup",
    DELETE_LOGGER_DEFINITION = "greengrass:DeleteLoggerDefinition",
    DELETE_RESOURCE_DEFINITION = "greengrass:DeleteResourceDefinition",
    DELETE_SUBSCRIPTION_DEFINITION = "greengrass:DeleteSubscriptionDefinition",
    DISASSOCIATE_ROLE_FROM_GROUP = "greengrass:DisassociateRoleFromGroup",
    DISASSOCIATE_SERVICE_ROLE_FROM_ACCOUNT = "greengrass:DisassociateServiceRoleFromAccount",
    GET_ASSOCIATED_ROLE = "greengrass:GetAssociatedRole",
    GET_CONNECTIVITY_INFO = "greengrass:GetConnectivityInfo",
    GET_CORE_DEFINITION = "greengrass:GetCoreDefinition",
    GET_CORE_DEFINITION_VERSION = "greengrass:GetCoreDefinitionVersion",
    GET_DEPLOYMENT_STATUS = "greengrass:GetDeploymentStatus",
    GET_DEVICE_DEFINITION = "greengrass:GetDeviceDefinition",
    GET_DEVICE_DEFINITION_VERSION = "greengrass:GetDeviceDefinitionVersion",
    GET_FUNCTION_DEFINITION = "greengrass:GetFunctionDefinition",
    GET_FUNCTION_DEFINITION_VERSION = "greengrass:GetFunctionDefinitionVersion",
    GET_GROUP = "greengrass:GetGroup",
    GET_GROUP_CERTIFICATE_AUTHORITY = "greengrass:GetGroupCertificateAuthority",
    GET_GROUP_CERTIFICATE_CONFIGURATION = "greengrass:GetGroupCertificateConfiguration",
    GET_GROUP_VERSION = "greengrass:GetGroupVersion",
    GET_LOGGER_DEFINITION = "greengrass:GetLoggerDefinition",
    GET_LOGGER_DEFINITION_VERSION = "greengrass:GetLoggerDefinitionVersion",
    GET_RESOURCE_DEFINITION = "greengrass:GetResourceDefinition",
    GET_RESOURCE_DEFINITION_VERSION = "greengrass:GetResourceDefinitionVersion",
    GET_SERVICE_ROLE_FOR_ACCOUNT = "greengrass:GetServiceRoleForAccount",
    GET_SUBSCRIPTION_DEFINITION = "greengrass:GetSubscriptionDefinition",
    GET_SUBSCRIPTION_DEFINITION_VERSION = "greengrass:GetSubscriptionDefinitionVersion",
    LIST_CORE_DEFINITION_VERSIONS = "greengrass:ListCoreDefinitionVersions",
    LIST_CORE_DEFINITIONS = "greengrass:ListCoreDefinitions",
    LIST_DEPLOYMENTS = "greengrass:ListDeployments",
    LIST_DEVICE_DEFINITION_VERSIONS = "greengrass:ListDeviceDefinitionVersions",
    LIST_DEVICE_DEFINITIONS = "greengrass:ListDeviceDefinitions",
    LIST_FUNCTION_DEFINITION_VERSIONS = "greengrass:ListFunctionDefinitionVersions",
    LIST_FUNCTION_DEFINITIONS = "greengrass:ListFunctionDefinitions",
    LIST_GROUP_CERTIFICATE_AUTHORITIES = "greengrass:ListGroupCertificateAuthorities",
    LIST_GROUP_VERSIONS = "greengrass:ListGroupVersions",
    LIST_GROUPS = "greengrass:ListGroups",
    LIST_LOGGER_DEFINITION_VERSIONS = "greengrass:ListLoggerDefinitionVersions",
    LIST_LOGGER_DEFINITIONS = "greengrass:ListLoggerDefinitions",
    LIST_RESOURCE_DEFINITION_VERSIONS = "greengrass:ListResourceDefinitionVersions",
    LIST_RESOURCE_DEFINITIONS = "greengrass:ListResourceDefinitions",
    LIST_SUBSCRIPTION_DEFINITION_VERSIONS = "greengrass:ListSubscriptionDefinitionVersions",
    LIST_SUBSCRIPTION_DEFINITIONS = "greengrass:ListSubscriptionDefinitions",
    RESET_DEPLOYMENTS = "greengrass:ResetDeployments",
    UPDATE_CONNECTIVITY_INFO = "greengrass:UpdateConnectivityInfo",
    UPDATE_CORE_DEFINITION = "greengrass:UpdateCoreDefinition",
    UPDATE_DEVICE_DEFINITION = "greengrass:UpdateDeviceDefinition",
    UPDATE_FUNCTION_DEFINITION = "greengrass:UpdateFunctionDefinition",
    UPDATE_GROUP = "greengrass:UpdateGroup",
    UPDATE_GROUP_CERTIFICATE_CONFIGURATION = "greengrass:UpdateGroupCertificateConfiguration",
    UPDATE_LOGGER_DEFINITION = "greengrass:UpdateLoggerDefinition",
    UPDATE_RESOURCE_DEFINITION = "greengrass:UpdateResourceDefinition",
    UPDATE_SUBSCRIPTION_DEFINITION = "greengrass:UpdateSubscriptionDefinition"
}

/** Actions for AWS Health APIs and Notifications
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awshealthapisandnotifications.html
  */
export enum Health {
    DESCRIBE_AFFECTED_ENTITIES = "health:DescribeAffectedEntities",
    DESCRIBE_ENTITY_AGGREGATES = "health:DescribeEntityAggregates",
    DESCRIBE_EVENT_AGGREGATES = "health:DescribeEventAggregates",
    DESCRIBE_EVENT_DETAILS = "health:DescribeEventDetails",
    DESCRIBE_EVENT_TYPES = "health:DescribeEventTypes",
    DESCRIBE_EVENTS = "health:DescribeEvents"
}

/** Actions for AWS Import Export Disk Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsimportexportdiskservice.html
  */
export enum ImportExport {
    CANCEL_JOB = "importexport:CancelJob",
    CREATE_JOB = "importexport:CreateJob",
    GET_SHIPPING_LABEL = "importexport:GetShippingLabel",
    GET_STATUS = "importexport:GetStatus",
    LIST_JOBS = "importexport:ListJobs",
    UPDATE_JOB = "importexport:UpdateJob"
}

/** Actions for AWS IoT
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiot.html
  */
export enum IoT {
    ACCEPT_CERTIFICATE_TRANSFER = "iot:AcceptCertificateTransfer",
    ASSOCIATE_TARGETS_WITH_JOB = "iot:AssociateTargetsWithJob",
    ATTACH_POLICY = "iot:AttachPolicy",
    ATTACH_PRINCIPAL_POLICY = "iot:AttachPrincipalPolicy",
    ATTACH_THING_PRINCIPAL = "iot:AttachThingPrincipal",
    CANCEL_CERTIFICATE_TRANSFER = "iot:CancelCertificateTransfer",
    CANCEL_JOB = "iot:CancelJob",
    CLEAR_DEFAULT_AUTHORIZER = "iot:ClearDefaultAuthorizer",
    CONNECT = "iot:Connect",
    CREATE_AUTHORIZER = "iot:CreateAuthorizer",
    CREATE_CERTIFICATE_FROM_CSR = "iot:CreateCertificateFromCsr",
    CREATE_JOB = "iot:CreateJob",
    CREATE_KEYS_AND_CERTIFICATE = "iot:CreateKeysAndCertificate",
    CREATE_OTA_UPDATE_JOB = "iot:CreateOTAUpdateJob",
    CREATE_POLICY = "iot:CreatePolicy",
    CREATE_POLICY_VERSION = "iot:CreatePolicyVersion",
    CREATE_ROLE_ALIAS = "iot:CreateRoleAlias",
    CREATE_STREAM = "iot:CreateStream",
    CREATE_THING = "iot:CreateThing",
    CREATE_THING_TYPE = "iot:CreateThingType",
    CREATE_TOPIC_RULE = "iot:CreateTopicRule",
    DELETE_AUTHORIZER = "iot:DeleteAuthorizer",
    DELETE_CA_CERTIFICATE = "iot:DeleteCACertificate",
    DELETE_CERTIFICATE = "iot:DeleteCertificate",
    DELETE_OTA_UPDATE_JOB = "iot:DeleteOTAUpdateJob",
    DELETE_POLICY = "iot:DeletePolicy",
    DELETE_POLICY_VERSION = "iot:DeletePolicyVersion",
    DELETE_REGISTRATION_CODE = "iot:DeleteRegistrationCode",
    DELETE_ROLE_ALIAS = "iot:DeleteRoleAlias",
    DELETE_STREAM = "iot:DeleteStream",
    DELETE_THING = "iot:DeleteThing",
    DELETE_THING_SHADOW = "iot:DeleteThingShadow",
    DELETE_THING_TYPE = "iot:DeleteThingType",
    DELETE_TOPIC_RULE = "iot:DeleteTopicRule",
    DEPRECATE_THING_TYPE = "iot:DeprecateThingType",
    DESCRIBE_AUTHORIZER = "iot:DescribeAuthorizer",
    DESCRIBE_CA_CERTIFICATE = "iot:DescribeCACertificate",
    DESCRIBE_CERTIFICATE = "iot:DescribeCertificate",
    DESCRIBE_DEFAULT_AUTHORIZER = "iot:DescribeDefaultAuthorizer",
    DESCRIBE_ENDPOINT = "iot:DescribeEndpoint",
    DESCRIBE_INDEX = "iot:DescribeIndex",
    DESCRIBE_JOB = "iot:DescribeJob",
    DESCRIBE_JOB_EXECUTION = "iot:DescribeJobExecution",
    DESCRIBE_ROLE_ALIAS = "iot:DescribeRoleAlias",
    DESCRIBE_STREAM = "iot:DescribeStream",
    DESCRIBE_THING = "iot:DescribeThing",
    DESCRIBE_THING_TYPE = "iot:DescribeThingType",
    DETACH_POLICY = "iot:DetachPolicy",
    DETACH_PRINCIPAL_POLICY = "iot:DetachPrincipalPolicy",
    DETACH_THING_PRINCIPAL = "iot:DetachThingPrincipal",
    DISABLE_TOPIC_RULE = "iot:DisableTopicRule",
    ENABLE_TOPIC_RULE = "iot:EnableTopicRule",
    GET_EFFECTIVE_POLICIES = "iot:GetEffectivePolicies",
    GET_INDEXING_CONFIGURATION = "iot:GetIndexingConfiguration",
    GET_JOB_DOCUMENT = "iot:GetJobDocument",
    GET_LOGGING_OPTIONS = "iot:GetLoggingOptions",
    GET_OTA_UPDATE_JOB = "iot:GetOTAUpdateJob",
    GET_POLICY = "iot:GetPolicy",
    GET_POLICY_VERSION = "iot:GetPolicyVersion",
    GET_REGISTRATION_CODE = "iot:GetRegistrationCode",
    GET_THING_SHADOW = "iot:GetThingShadow",
    GET_TOPIC_RULE = "iot:GetTopicRule",
    LIST_ATTACHED_POLICIES = "iot:ListAttachedPolicies",
    LIST_AUTHORIZERS = "iot:ListAuthorizers",
    LIST_CA_CERTIFICATES = "iot:ListCACertificates",
    LIST_CERTIFICATES = "iot:ListCertificates",
    LIST_CERTIFICATES_BY_CA = "iot:ListCertificatesByCA",
    LIST_INDICES = "iot:ListIndices",
    LIST_JOB_EXECUTIONS_FOR_JOB = "iot:ListJobExecutionsForJob",
    LIST_JOB_EXECUTIONS_FOR_THING = "iot:ListJobExecutionsForThing",
    LIST_JOBS = "iot:ListJobs",
    LIST_OTA_UPDATE_JOBS = "iot:ListOTAUpdateJobs",
    LIST_OUTGOING_CERTIFICATES = "iot:ListOutgoingCertificates",
    LIST_POLICIES = "iot:ListPolicies",
    LIST_POLICY_PRINCIPALS = "iot:ListPolicyPrincipals",
    LIST_POLICY_VERSIONS = "iot:ListPolicyVersions",
    LIST_PRINCIPAL_POLICIES = "iot:ListPrincipalPolicies",
    LIST_PRINCIPAL_THINGS = "iot:ListPrincipalThings",
    LIST_ROLE_ALIASES = "iot:ListRoleAliases",
    LIST_STREAMS = "iot:ListStreams",
    LIST_TARGETS_FOR_POLICY = "iot:ListTargetsForPolicy",
    LIST_THING_PRINCIPALS = "iot:ListThingPrincipals",
    LIST_THING_TYPES = "iot:ListThingTypes",
    LIST_THINGS = "iot:ListThings",
    LIST_TOPIC_RULES = "iot:ListTopicRules",
    PUBLISH = "iot:Publish",
    RECEIVE = "iot:Receive",
    REGISTER_CA_CERTIFICATE = "iot:RegisterCACertificate",
    REGISTER_CERTIFICATE = "iot:RegisterCertificate",
    REJECT_CERTIFICATE_TRANSFER = "iot:RejectCertificateTransfer",
    REPLACE_TOPIC_RULE = "iot:ReplaceTopicRule",
    SEARCH_INDEX = "iot:SearchIndex",
    SET_DEFAULT_AUTHORIZER = "iot:SetDefaultAuthorizer",
    SET_DEFAULT_POLICY_VERSION = "iot:SetDefaultPolicyVersion",
    SET_LOGGING_OPTIONS = "iot:SetLoggingOptions",
    SUBSCRIBE = "iot:Subscribe",
    TEST_AUTHORIZATION = "iot:TestAuthorization",
    TEST_INVOKE_AUTHORIZER = "iot:TestInvokeAuthorizer",
    TRANSFER_CERTIFICATE = "iot:TransferCertificate",
    UPDATE_AUTHORIZER = "iot:UpdateAuthorizer",
    UPDATE_CA_CERTIFICATE = "iot:UpdateCACertificate",
    UPDATE_CERTIFICATE = "iot:UpdateCertificate",
    UPDATE_INDEXING_CONFIGURATION = "iot:UpdateIndexingConfiguration",
    UPDATE_ROLE_ALIAS = "iot:UpdateRoleAlias",
    UPDATE_STREAM = "iot:UpdateStream",
    UPDATE_THING = "iot:UpdateThing",
    UPDATE_THING_SHADOW = "iot:UpdateThingShadow"
}

/** Actions for AWS IoT Analytics
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotanalytics.html
  */
export enum IoTAnalytics {
    CREATE_CHANNEL = "iotanalytics:CreateChannel",
    CREATE_DATASET = "iotanalytics:CreateDataset",
    CREATE_DATASET_CONTENT = "iotanalytics:CreateDatasetContent",
    CREATE_DATASTORE = "iotanalytics:CreateDatastore",
    CREATE_PIPELINE = "iotanalytics:CreatePipeline",
    DELETE_CHANNEL = "iotanalytics:DeleteChannel",
    DELETE_DATASET = "iotanalytics:DeleteDataset",
    DELETE_DATASET_CONTENT = "iotanalytics:DeleteDatasetContent",
    DELETE_DATASTORE = "iotanalytics:DeleteDatastore",
    DELETE_PIPELINE = "iotanalytics:DeletePipeline",
    DESCRIBE_CHANNEL = "iotanalytics:DescribeChannel",
    DESCRIBE_DATASET = "iotanalytics:DescribeDataset",
    DESCRIBE_DATASTORE = "iotanalytics:DescribeDatastore",
    DESCRIBE_PIPELINE = "iotanalytics:DescribePipeline",
    GET_DATASET_CONTENT = "iotanalytics:GetDatasetContent",
    LIST_CHANNELS = "iotanalytics:ListChannels",
    LIST_DATASETS = "iotanalytics:ListDatasets",
    LIST_DATASTORES = "iotanalytics:ListDatastores",
    LIST_PIPELINES = "iotanalytics:ListPipelines",
    UPDATE_DATASET = "iotanalytics:UpdateDataset",
    UPDATE_PIPELINE = "iotanalytics:UpdatePipeline"
}

/** Actions for AWS Key Management Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awskeymanagementservice.html
  */
export enum KMS {
    CANCEL_KEY_DELETION = "kms:CancelKeyDeletion",
    CREATE_ALIAS = "kms:CreateAlias",
    CREATE_GRANT = "kms:CreateGrant",
    CREATE_KEY = "kms:CreateKey",
    DECRYPT = "kms:Decrypt",
    DELETE_ALIAS = "kms:DeleteAlias",
    DELETE_IMPORTED_KEY_MATERIAL = "kms:DeleteImportedKeyMaterial",
    DESCRIBE_KEY = "kms:DescribeKey",
    DISABLE_KEY = "kms:DisableKey",
    DISABLE_KEY_ROTATION = "kms:DisableKeyRotation",
    ENABLE_KEY = "kms:EnableKey",
    ENABLE_KEY_ROTATION = "kms:EnableKeyRotation",
    ENCRYPT = "kms:Encrypt",
    GENERATE_DATA_KEY = "kms:GenerateDataKey",
    GENERATE_DATA_KEY_WITHOUT_PLAINTEXT = "kms:GenerateDataKeyWithoutPlaintext",
    GENERATE_RANDOM = "kms:GenerateRandom",
    GET_KEY_POLICY = "kms:GetKeyPolicy",
    GET_KEY_ROTATION_STATUS = "kms:GetKeyRotationStatus",
    GET_PARAMETERS_FOR_IMPORT = "kms:GetParametersForImport",
    IMPORT_KEY_MATERIAL = "kms:ImportKeyMaterial",
    LIST_ALIASES = "kms:ListAliases",
    LIST_GRANTS = "kms:ListGrants",
    LIST_KEY_POLICIES = "kms:ListKeyPolicies",
    LIST_KEYS = "kms:ListKeys",
    LIST_RESOURCE_TAGS = "kms:ListResourceTags",
    LIST_RETIRABLE_GRANTS = "kms:ListRetirableGrants",
    PUT_KEY_POLICY = "kms:PutKeyPolicy",
    RE_ENCRYPT_FROM = "kms:ReEncryptFrom",
    RE_ENCRYPT_TO = "kms:ReEncryptTo",
    RETIRE_GRANT = "kms:RetireGrant",
    REVOKE_GRANT = "kms:RevokeGrant",
    SCHEDULE_KEY_DELETION = "kms:ScheduleKeyDeletion",
    TAG_RESOURCE = "kms:TagResource",
    UNTAG_RESOURCE = "kms:UntagResource",
    UPDATE_ALIAS = "kms:UpdateAlias",
    UPDATE_KEY_DESCRIPTION = "kms:UpdateKeyDescription"
}

/** Actions for AWS Lambda
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html
  */
export enum Lambda {
    ADD_PERMISSION = "lambda:AddPermission",
    CREATE_ALIAS = "lambda:CreateAlias",
    CREATE_EVENT_SOURCE_MAPPING = "lambda:CreateEventSourceMapping",
    CREATE_FUNCTION = "lambda:CreateFunction",
    DELETE_ALIAS = "lambda:DeleteAlias",
    DELETE_EVENT_SOURCE_MAPPING = "lambda:DeleteEventSourceMapping",
    DELETE_FUNCTION = "lambda:DeleteFunction",
    DELETE_FUNCTION_CONCURRENCY = "lambda:DeleteFunctionConcurrency",
    ENABLE_REPLICATION = "lambda:EnableReplication",
    GET_ACCOUNT_SETTINGS = "lambda:GetAccountSettings",
    GET_ALIAS = "lambda:GetAlias",
    GET_EVENT_SOURCE_MAPPING = "lambda:GetEventSourceMapping",
    GET_FUNCTION = "lambda:GetFunction",
    GET_FUNCTION_CONFIGURATION = "lambda:GetFunctionConfiguration",
    GET_POLICY = "lambda:GetPolicy",
    INVOKE_ASYNC = "lambda:InvokeAsync",
    INVOKE_FUNCTION = "lambda:InvokeFunction",
    LIST_ALIASES = "lambda:ListAliases",
    LIST_EVENT_SOURCE_MAPPINGS = "lambda:ListEventSourceMappings",
    LIST_FUNCTIONS = "lambda:ListFunctions",
    LIST_TAGS = "lambda:ListTags",
    LIST_VERSIONS_BY_FUNCTION = "lambda:ListVersionsByFunction",
    PUBLISH_VERSION = "lambda:PublishVersion",
    PUT_FUNCTION_CONCURRENCY = "lambda:PutFunctionConcurrency",
    REMOVE_PERMISSION = "lambda:RemovePermission",
    TAG_RESOURCE = "lambda:TagResource",
    UNTAG_RESOURCE = "lambda:UntagResource",
    UPDATE_ALIAS = "lambda:UpdateAlias",
    UPDATE_EVENT_SOURCE_MAPPING = "lambda:UpdateEventSourceMapping",
    UPDATE_FUNCTION_CODE = "lambda:UpdateFunctionCode",
    UPDATE_FUNCTION_CONFIGURATION = "lambda:UpdateFunctionConfiguration"
}

/** Actions for AWS Marketplace
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplace.html
  */
export enum AWSMarketplace {
    SUBSCRIBE = "aws-marketplace:Subscribe",
    UNSUBSCRIBE = "aws-marketplace:Unsubscribe",
    VIEW_SUBSCRIPTIONS = "aws-marketplace:ViewSubscriptions"
}

/** Actions for AWS Marketplace Management Portal
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacemanagementportal.html
  */
export enum AWSMarketplaceManagement {
    UPLOAD_FILES = "aws-marketplace-management:uploadFiles",
    VIEW_MARKETING = "aws-marketplace-management:viewMarketing",
    VIEW_REPORTS = "aws-marketplace-management:viewReports",
    VIEW_SUPPORT = "aws-marketplace-management:viewSupport"
}

/** Actions for AWS Marketplace Metering Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacemeteringservice.html
  */
export enum AWSMarketplace {
    BATCH_METER_USAGE = "aws-marketplace:BatchMeterUsage",
    METER_USAGE = "aws-marketplace:MeterUsage",
    RESOLVE_CUSTOMER = "aws-marketplace:ResolveCustomer"
}

/** Actions for AWS Migration Hub
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmigrationhub.html
  */
export enum MGH {
    ASSOCIATE_CREATED_ARTIFACT = "mgh:AssociateCreatedArtifact",
    ASSOCIATE_DISCOVERED_RESOURCE = "mgh:AssociateDiscoveredResource",
    CREATE_PROGRESS_UPDATE_STREAM = "mgh:CreateProgressUpdateStream",
    DELETE_PROGRESS_UPDATE_STREAM = "mgh:DeleteProgressUpdateStream",
    DESCRIBE_APPLICATION_STATE = "mgh:DescribeApplicationState",
    DESCRIBE_MIGRATION_TASK = "mgh:DescribeMigrationTask",
    DISASSOCIATE_CREATED_ARTIFACT = "mgh:DisassociateCreatedArtifact",
    DISASSOCIATE_DISCOVERED_RESOURCE = "mgh:DisassociateDiscoveredResource",
    IMPORT_MIGRATION_TASK = "mgh:ImportMigrationTask",
    LIST_CREATED_ARTIFACTS = "mgh:ListCreatedArtifacts",
    LIST_DISCOVERED_RESOURCES = "mgh:ListDiscoveredResources",
    LIST_MIGRATION_TASKS = "mgh:ListMigrationTasks",
    LIST_PROGRESS_UPDATE_STREAMS = "mgh:ListProgressUpdateStreams",
    NOTIFY_APPLICATION_STATE = "mgh:NotifyApplicationState",
    NOTIFY_MIGRATION_TASK_STATE = "mgh:NotifyMigrationTaskState",
    PUT_RESOURCE_ATTRIBUTES = "mgh:PutResourceAttributes"
}

/** Actions for AWS Mobile Hub
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmobilehub.html
  */
export enum MobileHub {
    CREATE_PROJECT = "mobilehub:CreateProject",
    CREATE_SERVICE_ROLE = "mobilehub:CreateServiceRole",
    DELETE_PROJECT = "mobilehub:DeleteProject",
    DEPLOY_TO_STAGE = "mobilehub:DeployToStage",
    DESCRIBE_BUNDLE = "mobilehub:DescribeBundle",
    EXPORT_BUNDLE = "mobilehub:ExportBundle",
    EXPORT_PROJECT = "mobilehub:ExportProject",
    GENERATE_PROJECT_PARAMETERS = "mobilehub:GenerateProjectParameters",
    GET_PROJECT = "mobilehub:GetProject",
    GET_PROJECT_SNAPSHOT = "mobilehub:GetProjectSnapshot",
    IMPORT_PROJECT = "mobilehub:ImportProject",
    LIST_AVAILABLE_CONNECTORS = "mobilehub:ListAvailableConnectors",
    LIST_AVAILABLE_FEATURES = "mobilehub:ListAvailableFeatures",
    LIST_AVAILABLE_REGIONS = "mobilehub:ListAvailableRegions",
    LIST_BUNDLES = "mobilehub:ListBundles",
    LIST_PROJECTS = "mobilehub:ListProjects",
    SYNCHRONIZE_PROJECT = "mobilehub:SynchronizeProject",
    UPDATE_PROJECT = "mobilehub:UpdateProject",
    VERIFY_SERVICE_ROLE = "mobilehub:VerifyServiceRole"
}

/** Actions for AWS OpsWorks
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsopsworks.html
  */
export enum OpsWorks {
    ASSIGN_INSTANCE = "opsworks:AssignInstance",
    ASSIGN_VOLUME = "opsworks:AssignVolume",
    ASSOCIATE_ELASTIC_IP = "opsworks:AssociateElasticIp",
    ATTACH_ELASTIC_LOAD_BALANCER = "opsworks:AttachElasticLoadBalancer",
    CLONE_STACK = "opsworks:CloneStack",
    CREATE_APP = "opsworks:CreateApp",
    CREATE_DEPLOYMENT = "opsworks:CreateDeployment",
    CREATE_INSTANCE = "opsworks:CreateInstance",
    CREATE_LAYER = "opsworks:CreateLayer",
    CREATE_STACK = "opsworks:CreateStack",
    CREATE_USER_PROFILE = "opsworks:CreateUserProfile",
    DELETE_APP = "opsworks:DeleteApp",
    DELETE_INSTANCE = "opsworks:DeleteInstance",
    DELETE_LAYER = "opsworks:DeleteLayer",
    DELETE_STACK = "opsworks:DeleteStack",
    DELETE_USER_PROFILE = "opsworks:DeleteUserProfile",
    DEREGISTER_ECS_CLUSTER = "opsworks:DeregisterEcsCluster",
    DEREGISTER_ELASTIC_IP = "opsworks:DeregisterElasticIp",
    DEREGISTER_INSTANCE = "opsworks:DeregisterInstance",
    DEREGISTER_RDS_DB_INSTANCE = "opsworks:DeregisterRdsDbInstance",
    DEREGISTER_VOLUME = "opsworks:DeregisterVolume",
    DESCRIBE_AGENT_VERSIONS = "opsworks:DescribeAgentVersions",
    DESCRIBE_APPS = "opsworks:DescribeApps",
    DESCRIBE_COMMANDS = "opsworks:DescribeCommands",
    DESCRIBE_DEPLOYMENTS = "opsworks:DescribeDeployments",
    DESCRIBE_ECS_CLUSTERS = "opsworks:DescribeEcsClusters",
    DESCRIBE_ELASTIC_IPS = "opsworks:DescribeElasticIps",
    DESCRIBE_ELASTIC_LOAD_BALANCERS = "opsworks:DescribeElasticLoadBalancers",
    DESCRIBE_INSTANCES = "opsworks:DescribeInstances",
    DESCRIBE_LAYERS = "opsworks:DescribeLayers",
    DESCRIBE_LOAD_BASED_AUTO_SCALING = "opsworks:DescribeLoadBasedAutoScaling",
    DESCRIBE_MY_USER_PROFILE = "opsworks:DescribeMyUserProfile",
    DESCRIBE_PERMISSIONS = "opsworks:DescribePermissions",
    DESCRIBE_RAID_ARRAYS = "opsworks:DescribeRaidArrays",
    DESCRIBE_RDS_DB_INSTANCES = "opsworks:DescribeRdsDbInstances",
    DESCRIBE_SERVICE_ERRORS = "opsworks:DescribeServiceErrors",
    DESCRIBE_STACK_PROVISIONING_PARAMETERS = "opsworks:DescribeStackProvisioningParameters",
    DESCRIBE_STACK_SUMMARY = "opsworks:DescribeStackSummary",
    DESCRIBE_STACKS = "opsworks:DescribeStacks",
    DESCRIBE_TIME_BASED_AUTO_SCALING = "opsworks:DescribeTimeBasedAutoScaling",
    DESCRIBE_USER_PROFILES = "opsworks:DescribeUserProfiles",
    DESCRIBE_VOLUMES = "opsworks:DescribeVolumes",
    DETACH_ELASTIC_LOAD_BALANCER = "opsworks:DetachElasticLoadBalancer",
    DISASSOCIATE_ELASTIC_IP = "opsworks:DisassociateElasticIp",
    GET_HOSTNAME_SUGGESTION = "opsworks:GetHostnameSuggestion",
    GRANT_ACCESS = "opsworks:GrantAccess",
    LIST_TAGS = "opsworks:ListTags",
    REBOOT_INSTANCE = "opsworks:RebootInstance",
    REGISTER_ECS_CLUSTER = "opsworks:RegisterEcsCluster",
    REGISTER_ELASTIC_IP = "opsworks:RegisterElasticIp",
    REGISTER_INSTANCE = "opsworks:RegisterInstance",
    REGISTER_RDS_DB_INSTANCE = "opsworks:RegisterRdsDbInstance",
    REGISTER_VOLUME = "opsworks:RegisterVolume",
    SET_LOAD_BASED_AUTO_SCALING = "opsworks:SetLoadBasedAutoScaling",
    SET_PERMISSION = "opsworks:SetPermission",
    SET_TIME_BASED_AUTO_SCALING = "opsworks:SetTimeBasedAutoScaling",
    START_INSTANCE = "opsworks:StartInstance",
    START_STACK = "opsworks:StartStack",
    STOP_INSTANCE = "opsworks:StopInstance",
    STOP_STACK = "opsworks:StopStack",
    TAG_RESOURCE = "opsworks:TagResource",
    UNASSIGN_INSTANCE = "opsworks:UnassignInstance",
    UNASSIGN_VOLUME = "opsworks:UnassignVolume",
    UNTAG_RESOURCE = "opsworks:UntagResource",
    UPDATE_APP = "opsworks:UpdateApp",
    UPDATE_ELASTIC_IP = "opsworks:UpdateElasticIp",
    UPDATE_INSTANCE = "opsworks:UpdateInstance",
    UPDATE_LAYER = "opsworks:UpdateLayer",
    UPDATE_MY_USER_PROFILE = "opsworks:UpdateMyUserProfile",
    UPDATE_RDS_DB_INSTANCE = "opsworks:UpdateRdsDbInstance",
    UPDATE_STACK = "opsworks:UpdateStack",
    UPDATE_USER_PROFILE = "opsworks:UpdateUserProfile",
    UPDATE_VOLUME = "opsworks:UpdateVolume"
}

/** Actions for AWS OpsWorks Configuration Management
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsopsworksconfigurationmanagement.html
  */
export enum OpsworksCM {
    ASSOCIATE_NODE = "opsworks-cm:AssociateNode",
    CREATE_BACKUP = "opsworks-cm:CreateBackup",
    CREATE_SERVER = "opsworks-cm:CreateServer",
    DELETE_BACKUP = "opsworks-cm:DeleteBackup",
    DELETE_SERVER = "opsworks-cm:DeleteServer",
    DESCRIBE_ACCOUNT_ATTRIBUTES = "opsworks-cm:DescribeAccountAttributes",
    DESCRIBE_BACKUPS = "opsworks-cm:DescribeBackups",
    DESCRIBE_EVENTS = "opsworks-cm:DescribeEvents",
    DESCRIBE_NODE_ASSOCIATION_STATUS = "opsworks-cm:DescribeNodeAssociationStatus",
    DESCRIBE_SERVERS = "opsworks-cm:DescribeServers",
    DISASSOCIATE_NODE = "opsworks-cm:DisassociateNode",
    RESTORE_SERVER = "opsworks-cm:RestoreServer",
    START_MAINTENANCE = "opsworks-cm:StartMaintenance",
    UPDATE_SERVER = "opsworks-cm:UpdateServer",
    UPDATE_SERVER_ENGINE_ATTRIBUTES = "opsworks-cm:UpdateServerEngineAttributes"
}

/** Actions for AWS Organizations
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsorganizations.html
  */
export enum Organizations {
    ACCEPT_HANDSHAKE = "organizations:AcceptHandshake",
    ATTACH_POLICY = "organizations:AttachPolicy",
    CANCEL_HANDSHAKE = "organizations:CancelHandshake",
    CREATE_ACCOUNT = "organizations:CreateAccount",
    CREATE_ORGANIZATION = "organizations:CreateOrganization",
    CREATE_ORGANIZATIONAL_UNIT = "organizations:CreateOrganizationalUnit",
    CREATE_POLICY = "organizations:CreatePolicy",
    DECLINE_HANDSHAKE = "organizations:DeclineHandshake",
    DELETE_ORGANIZATION = "organizations:DeleteOrganization",
    DELETE_ORGANIZATIONAL_UNIT = "organizations:DeleteOrganizationalUnit",
    DELETE_POLICY = "organizations:DeletePolicy",
    DESCRIBE_ACCOUNT = "organizations:DescribeAccount",
    DESCRIBE_CREATE_ACCOUNT_STATUS = "organizations:DescribeCreateAccountStatus",
    DESCRIBE_HANDSHAKE = "organizations:DescribeHandshake",
    DESCRIBE_ORGANIZATION = "organizations:DescribeOrganization",
    DESCRIBE_ORGANIZATIONAL_UNIT = "organizations:DescribeOrganizationalUnit",
    DESCRIBE_POLICY = "organizations:DescribePolicy",
    DETACH_POLICY = "organizations:DetachPolicy",
    DISABLE_POLICY_TYPE = "organizations:DisablePolicyType",
    ENABLE_ALL_FEATURES = "organizations:EnableAllFeatures",
    ENABLE_POLICY_TYPE = "organizations:EnablePolicyType",
    INVITE_ACCOUNT_TO_ORGANIZATION = "organizations:InviteAccountToOrganization",
    LEAVE_ORGANIZATION = "organizations:LeaveOrganization",
    LIST_ACCOUNTS = "organizations:ListAccounts",
    LIST_ACCOUNTS_FOR_PARENT = "organizations:ListAccountsForParent",
    LIST_CHILDREN = "organizations:ListChildren",
    LIST_CREATE_ACCOUNT_STATUS = "organizations:ListCreateAccountStatus",
    LIST_HANDSHAKES_FOR_ACCOUNT = "organizations:ListHandshakesForAccount",
    LIST_HANDSHAKES_FOR_ORGANIZATION = "organizations:ListHandshakesForOrganization",
    LIST_ORGANIZATIONAL_UNITS_FOR_PARENT = "organizations:ListOrganizationalUnitsForParent",
    LIST_PARENTS = "organizations:ListParents",
    LIST_POLICIES = "organizations:ListPolicies",
    LIST_POLICIES_FOR_TARGET = "organizations:ListPoliciesForTarget",
    LIST_ROOTS = "organizations:ListRoots",
    LIST_TARGETS_FOR_POLICY = "organizations:ListTargetsForPolicy",
    MOVE_ACCOUNT = "organizations:MoveAccount",
    REMOVE_ACCOUNT_FROM_ORGANIZATION = "organizations:RemoveAccountFromOrganization",
    UPDATE_ORGANIZATIONAL_UNIT = "organizations:UpdateOrganizationalUnit",
    UPDATE_POLICY = "organizations:UpdatePolicy"
}

/** Actions for AWS Price List
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awspricelist.html
  */
export enum Pricing {
    DESCRIBE_SERVICES = "pricing:DescribeServices",
    GET_ATTRIBUTE_VALUES = "pricing:GetAttributeValues",
    GET_PRODUCTS = "pricing:GetProducts"
}

/** Actions for AWS Resource Groups
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsresourcegroups.html
  */
export enum ResourceGroups {
    CREATE_GROUP = "resource-groups:CreateGroup",
    DELETE_GROUP = "resource-groups:DeleteGroup",
    GET_GROUP = "resource-groups:GetGroup",
    GET_GROUP_QUERY = "resource-groups:GetGroupQuery",
    GET_TAGS = "resource-groups:GetTags",
    LIST_GROUP_RESOURCES = "resource-groups:ListGroupResources",
    LIST_GROUPS = "resource-groups:ListGroups",
    SEARCH_RESOURCES = "resource-groups:SearchResources",
    TAG = "resource-groups:Tag",
    UNTAG = "resource-groups:Untag",
    UPDATE_GROUP = "resource-groups:UpdateGroup",
    UPDATE_GROUP_QUERY = "resource-groups:UpdateGroupQuery"
}

/** Actions for AWS Security Token Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecuritytokenservice.html
  */
export enum STS {
    ASSUME_ROLE = "sts:AssumeRole",
    ASSUME_ROLE_WITH_SAML = "sts:AssumeRoleWithSAML",
    ASSUME_ROLE_WITH_WEB_IDENTITY = "sts:AssumeRoleWithWebIdentity",
    DECODE_AUTHORIZATION_MESSAGE = "sts:DecodeAuthorizationMessage",
    GET_CALLER_IDENTITY = "sts:GetCallerIdentity",
    GET_FEDERATION_TOKEN = "sts:GetFederationToken",
    GET_SESSION_TOKEN = "sts:GetSessionToken"
}

/** Actions for AWS Serverless Application Repository
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsserverlessapplicationrepository.html
  */
export enum Serverlessrepo {
    CREATE_APPLICATION = "serverlessrepo:CreateApplication",
    CREATE_APPLICATION_VERSION = "serverlessrepo:CreateApplicationVersion",
    CREATE_CLOUD_FORMATION_CHANGE_SET = "serverlessrepo:CreateCloudFormationChangeSet",
    DELETE_APPLICATION = "serverlessrepo:DeleteApplication",
    GET_APPLICATION = "serverlessrepo:GetApplication",
    GET_APPLICATION_POLICY = "serverlessrepo:GetApplicationPolicy",
    LIST_APPLICATION_VERSIONS = "serverlessrepo:ListApplicationVersions",
    LIST_APPLICATIONS = "serverlessrepo:ListApplications",
    PUT_APPLICATION_POLICY = "serverlessrepo:PutApplicationPolicy",
    SEARCH_APPLICATIONS = "serverlessrepo:SearchApplications",
    UPDATE_APPLICATION = "serverlessrepo:UpdateApplication"
}

/** Actions for AWS Service Catalog
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsservicecatalog.html
  */
export enum ServiceCatalog {
    ACCEPT_PORTFOLIO_SHARE = "servicecatalog:AcceptPortfolioShare",
    ASSOCIATE_PRINCIPAL_WITH_PORTFOLIO = "servicecatalog:AssociatePrincipalWithPortfolio",
    ASSOCIATE_PRODUCT_WITH_PORTFOLIO = "servicecatalog:AssociateProductWithPortfolio",
    CREATE_CONSTRAINT = "servicecatalog:CreateConstraint",
    CREATE_PORTFOLIO = "servicecatalog:CreatePortfolio",
    CREATE_PORTFOLIO_SHARE = "servicecatalog:CreatePortfolioShare",
    CREATE_PRODUCT = "servicecatalog:CreateProduct",
    CREATE_PROVISIONING_ARTIFACT = "servicecatalog:CreateProvisioningArtifact",
    DELETE_CONSTRAINT = "servicecatalog:DeleteConstraint",
    DELETE_PORTFOLIO = "servicecatalog:DeletePortfolio",
    DELETE_PORTFOLIO_SHARE = "servicecatalog:DeletePortfolioShare",
    DELETE_PRODUCT = "servicecatalog:DeleteProduct",
    DELETE_PROVISIONING_ARTIFACT = "servicecatalog:DeleteProvisioningArtifact",
    DESCRIBE_CONSTRAINT = "servicecatalog:DescribeConstraint",
    DESCRIBE_PORTFOLIO = "servicecatalog:DescribePortfolio",
    DESCRIBE_PRODUCT = "servicecatalog:DescribeProduct",
    DESCRIBE_PRODUCT_AS_ADMIN = "servicecatalog:DescribeProductAsAdmin",
    DESCRIBE_PRODUCT_VIEW = "servicecatalog:DescribeProductView",
    DESCRIBE_PROVISIONING_ARTIFACT = "servicecatalog:DescribeProvisioningArtifact",
    DESCRIBE_PROVISIONING_PARAMETERS = "servicecatalog:DescribeProvisioningParameters",
    DESCRIBE_RECORD = "servicecatalog:DescribeRecord",
    DISASSOCIATE_PRINCIPAL_FROM_PORTFOLIO = "servicecatalog:DisassociatePrincipalFromPortfolio",
    DISASSOCIATE_PRODUCT_FROM_PORTFOLIO = "servicecatalog:DisassociateProductFromPortfolio",
    LIST_ACCEPTED_PORTFOLIO_SHARES = "servicecatalog:ListAcceptedPortfolioShares",
    LIST_CONSTRAINTS_FOR_PORTFOLIO = "servicecatalog:ListConstraintsForPortfolio",
    LIST_LAUNCH_PATHS = "servicecatalog:ListLaunchPaths",
    LIST_PORTFOLIO_ACCESS = "servicecatalog:ListPortfolioAccess",
    LIST_PORTFOLIOS = "servicecatalog:ListPortfolios",
    LIST_PORTFOLIOS_FOR_PRODUCT = "servicecatalog:ListPortfoliosForProduct",
    LIST_PRINCIPALS_FOR_PORTFOLIO = "servicecatalog:ListPrincipalsForPortfolio",
    LIST_PROVISIONING_ARTIFACTS = "servicecatalog:ListProvisioningArtifacts",
    LIST_RECORD_HISTORY = "servicecatalog:ListRecordHistory",
    PROVISION_PRODUCT = "servicecatalog:ProvisionProduct",
    REJECT_PORTFOLIO_SHARE = "servicecatalog:RejectPortfolioShare",
    SCAN_PROVISIONED_PRODUCTS = "servicecatalog:ScanProvisionedProducts",
    SEARCH_PRODUCTS = "servicecatalog:SearchProducts",
    SEARCH_PRODUCTS_AS_ADMIN = "servicecatalog:SearchProductsAsAdmin",
    TERMINATE_PROVISIONED_PRODUCT = "servicecatalog:TerminateProvisionedProduct",
    UPDATE_CONSTRAINT = "servicecatalog:UpdateConstraint",
    UPDATE_PORTFOLIO = "servicecatalog:UpdatePortfolio",
    UPDATE_PRODUCT = "servicecatalog:UpdateProduct",
    UPDATE_PROVISIONED_PRODUCT = "servicecatalog:UpdateProvisionedProduct",
    UPDATE_PROVISIONING_ARTIFACT = "servicecatalog:UpdateProvisioningArtifact"
}

/** Actions for AWS Shield
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsshield.html
  */
export enum Shield {
    CREATE_PROTECTION = "shield:CreateProtection",
    CREATE_SUBSCRIPTION = "shield:CreateSubscription",
    DELETE_PROTECTION = "shield:DeleteProtection",
    DELETE_SUBSCRIPTION = "shield:DeleteSubscription",
    DESCRIBE_ATTACK = "shield:DescribeAttack",
    DESCRIBE_PROTECTION = "shield:DescribeProtection",
    DESCRIBE_SUBSCRIPTION = "shield:DescribeSubscription",
    LIST_ATTACKS = "shield:ListAttacks",
    LIST_PROTECTIONS = "shield:ListProtections"
}

/** Actions for AWS Snowball
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssnowball.html
  */
export enum Snowball {
    CANCEL_CLUSTER = "snowball:CancelCluster",
    CANCEL_JOB = "snowball:CancelJob",
    CREATE_ADDRESS = "snowball:CreateAddress",
    CREATE_CLUSTER = "snowball:CreateCluster",
    CREATE_JOB = "snowball:CreateJob",
    DESCRIBE_ADDRESS = "snowball:DescribeAddress",
    DESCRIBE_ADDRESSES = "snowball:DescribeAddresses",
    DESCRIBE_CLUSTER = "snowball:DescribeCluster",
    DESCRIBE_JOB = "snowball:DescribeJob",
    GET_JOB_MANIFEST = "snowball:GetJobManifest",
    GET_JOB_UNLOCK_CODE = "snowball:GetJobUnlockCode",
    GET_SNOWBALL_USAGE = "snowball:GetSnowballUsage",
    LIST_CLUSTER_JOBS = "snowball:ListClusterJobs",
    LIST_CLUSTERS = "snowball:ListClusters",
    LIST_JOBS = "snowball:ListJobs",
    UPDATE_CLUSTER = "snowball:UpdateCluster",
    UPDATE_JOB = "snowball:UpdateJob"
}

/** Actions for AWS Step Functions
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsstepfunctions.html
  */
export enum States {
    CREATE_ACTIVITY = "states:CreateActivity",
    CREATE_STATE_MACHINE = "states:CreateStateMachine",
    DELETE_ACTIVITY = "states:DeleteActivity",
    DELETE_STATE_MACHINE = "states:DeleteStateMachine",
    DESCRIBE_ACTIVITY = "states:DescribeActivity",
    DESCRIBE_EXECUTION = "states:DescribeExecution",
    DESCRIBE_STATE_MACHINE = "states:DescribeStateMachine",
    DESCRIBE_STATE_MACHINE_FOR_EXECUTION = "states:DescribeStateMachineForExecution",
    GET_ACTIVITY_TASK = "states:GetActivityTask",
    GET_EXECUTION_HISTORY = "states:GetExecutionHistory",
    LIST_ACTIVITIES = "states:ListActivities",
    LIST_EXECUTIONS = "states:ListExecutions",
    LIST_STATE_MACHINES = "states:ListStateMachines",
    SEND_TASK_FAILURE = "states:SendTaskFailure",
    SEND_TASK_HEARTBEAT = "states:SendTaskHeartbeat",
    SEND_TASK_SUCCESS = "states:SendTaskSuccess",
    START_EXECUTION = "states:StartExecution",
    STOP_EXECUTION = "states:StopExecution",
    UPDATE_STATE_MACHINE = "states:UpdateStateMachine"
}

/** Actions for AWS Support
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssupport.html
  */
export enum Support {
    ADD_ATTACHMENTS_TO_SET = "support:AddAttachmentsToSet",
    ADD_COMMUNICATION_TO_CASE = "support:AddCommunicationToCase",
    CREATE_CASE = "support:CreateCase",
    DESCRIBE_ATTACHMENT = "support:DescribeAttachment",
    DESCRIBE_CASES = "support:DescribeCases",
    DESCRIBE_COMMUNICATIONS = "support:DescribeCommunications",
    DESCRIBE_SERVICES = "support:DescribeServices",
    DESCRIBE_SEVERITY_LEVELS = "support:DescribeSeverityLevels",
    DESCRIBE_TRUSTED_ADVISOR_CHECK_REFRESH_STATUSES = "support:DescribeTrustedAdvisorCheckRefreshStatuses",
    DESCRIBE_TRUSTED_ADVISOR_CHECK_RESULT = "support:DescribeTrustedAdvisorCheckResult",
    DESCRIBE_TRUSTED_ADVISOR_CHECK_SUMMARIES = "support:DescribeTrustedAdvisorCheckSummaries",
    DESCRIBE_TRUSTED_ADVISOR_CHECKS = "support:DescribeTrustedAdvisorChecks",
    REFRESH_TRUSTED_ADVISOR_CHECK = "support:RefreshTrustedAdvisorCheck",
    RESOLVE_CASE = "support:ResolveCase"
}

/** Actions for AWS Trusted Advisor
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstrustedadvisor.html
  */
export enum TrustedAdvisor {
    DESCRIBE_CHECK_ITEMS = "trustedadvisor:DescribeCheckItems",
    DESCRIBE_CHECK_REFRESH_STATUSES = "trustedadvisor:DescribeCheckRefreshStatuses",
    DESCRIBE_CHECK_SUMMARIES = "trustedadvisor:DescribeCheckSummaries",
    DESCRIBE_NOTIFICATION_PREFERENCES = "trustedadvisor:DescribeNotificationPreferences",
    EXCLUDE_CHECK_ITEMS = "trustedadvisor:ExcludeCheckItems",
    INCLUDE_CHECK_ITEMS = "trustedadvisor:IncludeCheckItems",
    REFRESH_CHECK = "trustedadvisor:RefreshCheck",
    UPDATE_NOTIFICATION_PREFERENCES = "trustedadvisor:UpdateNotificationPreferences"
}

/** Actions for AWS WAF
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswaf.html
  */
export enum WAF {
    CREATE_BYTE_MATCH_SET = "waf:CreateByteMatchSet",
    CREATE_GEO_MATCH_SET = "waf:CreateGeoMatchSet",
    CREATE_IP_SET = "waf:CreateIPSet",
    CREATE_RATE_BASED_RULE = "waf:CreateRateBasedRule",
    CREATE_REGEX_MATCH_SET = "waf:CreateRegexMatchSet",
    CREATE_REGEX_PATTERN_SET = "waf:CreateRegexPatternSet",
    CREATE_RULE = "waf:CreateRule",
    CREATE_SIZE_CONSTRAINT_SET = "waf:CreateSizeConstraintSet",
    CREATE_SQL_INJECTION_MATCH_SET = "waf:CreateSqlInjectionMatchSet",
    CREATE_WEB_ACL = "waf:CreateWebACL",
    CREATE_XSS_MATCH_SET = "waf:CreateXssMatchSet",
    DELETE_BYTE_MATCH_SET = "waf:DeleteByteMatchSet",
    DELETE_GEO_MATCH_SET = "waf:DeleteGeoMatchSet",
    DELETE_IP_SET = "waf:DeleteIPSet",
    DELETE_RATE_BASED_RULE = "waf:DeleteRateBasedRule",
    DELETE_REGEX_MATCH_SET = "waf:DeleteRegexMatchSet",
    DELETE_REGEX_PATTERN_SET = "waf:DeleteRegexPatternSet",
    DELETE_RULE = "waf:DeleteRule",
    DELETE_SIZE_CONSTRAINT_SET = "waf:DeleteSizeConstraintSet",
    DELETE_SQL_INJECTION_MATCH_SET = "waf:DeleteSqlInjectionMatchSet",
    DELETE_WEB_ACL = "waf:DeleteWebACL",
    DELETE_XSS_MATCH_SET = "waf:DeleteXssMatchSet",
    GET_BYTE_MATCH_SET = "waf:GetByteMatchSet",
    GET_CHANGE_TOKEN = "waf:GetChangeToken",
    GET_CHANGE_TOKEN_STATUS = "waf:GetChangeTokenStatus",
    GET_GEO_MATCH_SET = "waf:GetGeoMatchSet",
    GET_IP_SET = "waf:GetIPSet",
    GET_RATE_BASED_RULE = "waf:GetRateBasedRule",
    GET_RATE_BASED_RULE_MANAGED_KEYS = "waf:GetRateBasedRuleManagedKeys",
    GET_REGEX_MATCH_SET = "waf:GetRegexMatchSet",
    GET_REGEX_PATTERN_SET = "waf:GetRegexPatternSet",
    GET_RULE = "waf:GetRule",
    GET_SAMPLED_REQUESTS = "waf:GetSampledRequests",
    GET_SIZE_CONSTRAINT_SET = "waf:GetSizeConstraintSet",
    GET_SQL_INJECTION_MATCH_SET = "waf:GetSqlInjectionMatchSet",
    GET_WEB_ACL = "waf:GetWebACL",
    GET_XSS_MATCH_SET = "waf:GetXssMatchSet",
    LIST_BYTE_MATCH_SETS = "waf:ListByteMatchSets",
    LIST_GEO_MATCH_SETS = "waf:ListGeoMatchSets",
    LIST_IP_SETS = "waf:ListIPSets",
    LIST_RATE_BASED_RULES = "waf:ListRateBasedRules",
    LIST_REGEX_MATCH_SETS = "waf:ListRegexMatchSets",
    LIST_REGEX_PATTERN_SETS = "waf:ListRegexPatternSets",
    LIST_RULES = "waf:ListRules",
    LIST_SIZE_CONSTRAINT_SETS = "waf:ListSizeConstraintSets",
    LIST_SQL_INJECTION_MATCH_SETS = "waf:ListSqlInjectionMatchSets",
    LIST_WEB_AC_LS = "waf:ListWebACLs",
    LIST_XSS_MATCH_SETS = "waf:ListXssMatchSets",
    UPDATE_BYTE_MATCH_SET = "waf:UpdateByteMatchSet",
    UPDATE_GEO_MATCH_SET = "waf:UpdateGeoMatchSet",
    UPDATE_IP_SET = "waf:UpdateIPSet",
    UPDATE_RATE_BASED_RULE = "waf:UpdateRateBasedRule",
    UPDATE_REGEX_MATCH_SET = "waf:UpdateRegexMatchSet",
    UPDATE_REGEX_PATTERN_SET = "waf:UpdateRegexPatternSet",
    UPDATE_RULE = "waf:UpdateRule",
    UPDATE_SIZE_CONSTRAINT_SET = "waf:UpdateSizeConstraintSet",
    UPDATE_SQL_INJECTION_MATCH_SET = "waf:UpdateSqlInjectionMatchSet",
    UPDATE_WEB_ACL = "waf:UpdateWebACL",
    UPDATE_XSS_MATCH_SET = "waf:UpdateXssMatchSet"
}

/** Actions for AWS WAF Regional
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswafregional.html
  */
export enum WAFRegional {
    ASSOCIATE_WEB_ACL = "waf-regional:AssociateWebACL",
    CREATE_BYTE_MATCH_SET = "waf-regional:CreateByteMatchSet",
    CREATE_GEO_MATCH_SET = "waf-regional:CreateGeoMatchSet",
    CREATE_IP_SET = "waf-regional:CreateIPSet",
    CREATE_RATE_BASED_RULE = "waf-regional:CreateRateBasedRule",
    CREATE_REGEX_MATCH_SET = "waf-regional:CreateRegexMatchSet",
    CREATE_REGEX_PATTERN_SET = "waf-regional:CreateRegexPatternSet",
    CREATE_RULE = "waf-regional:CreateRule",
    CREATE_SIZE_CONSTRAINT_SET = "waf-regional:CreateSizeConstraintSet",
    CREATE_SQL_INJECTION_MATCH_SET = "waf-regional:CreateSqlInjectionMatchSet",
    CREATE_WEB_ACL = "waf-regional:CreateWebACL",
    CREATE_XSS_MATCH_SET = "waf-regional:CreateXssMatchSet",
    DELETE_BYTE_MATCH_SET = "waf-regional:DeleteByteMatchSet",
    DELETE_GEO_MATCH_SET = "waf-regional:DeleteGeoMatchSet",
    DELETE_IP_SET = "waf-regional:DeleteIPSet",
    DELETE_RATE_BASED_RULE = "waf-regional:DeleteRateBasedRule",
    DELETE_REGEX_MATCH_SET = "waf-regional:DeleteRegexMatchSet",
    DELETE_REGEX_PATTERN_SET = "waf-regional:DeleteRegexPatternSet",
    DELETE_RULE = "waf-regional:DeleteRule",
    DELETE_SIZE_CONSTRAINT_SET = "waf-regional:DeleteSizeConstraintSet",
    DELETE_SQL_INJECTION_MATCH_SET = "waf-regional:DeleteSqlInjectionMatchSet",
    DELETE_WEB_ACL = "waf-regional:DeleteWebACL",
    DELETE_XSS_MATCH_SET = "waf-regional:DeleteXssMatchSet",
    DISASSOCIATE_WEB_ACL = "waf-regional:DisassociateWebACL",
    GET_BYTE_MATCH_SET = "waf-regional:GetByteMatchSet",
    GET_CHANGE_TOKEN = "waf-regional:GetChangeToken",
    GET_CHANGE_TOKEN_STATUS = "waf-regional:GetChangeTokenStatus",
    GET_GEO_MATCH_SET = "waf-regional:GetGeoMatchSet",
    GET_IP_SET = "waf-regional:GetIPSet",
    GET_RATE_BASED_RULE = "waf-regional:GetRateBasedRule",
    GET_RATE_BASED_RULE_MANAGED_KEYS = "waf-regional:GetRateBasedRuleManagedKeys",
    GET_REGEX_MATCH_SET = "waf-regional:GetRegexMatchSet",
    GET_REGEX_PATTERN_SET = "waf-regional:GetRegexPatternSet",
    GET_RULE = "waf-regional:GetRule",
    GET_SAMPLED_REQUESTS = "waf-regional:GetSampledRequests",
    GET_SIZE_CONSTRAINT_SET = "waf-regional:GetSizeConstraintSet",
    GET_SQL_INJECTION_MATCH_SET = "waf-regional:GetSqlInjectionMatchSet",
    GET_WEB_ACL = "waf-regional:GetWebACL",
    GET_WEB_ACL_FOR_RESOURCE = "waf-regional:GetWebACLForResource",
    GET_XSS_MATCH_SET = "waf-regional:GetXssMatchSet",
    LIST_BYTE_MATCH_SETS = "waf-regional:ListByteMatchSets",
    LIST_GEO_MATCH_SETS = "waf-regional:ListGeoMatchSets",
    LIST_IP_SETS = "waf-regional:ListIPSets",
    LIST_RATE_BASED_RULES = "waf-regional:ListRateBasedRules",
    LIST_REGEX_MATCH_SETS = "waf-regional:ListRegexMatchSets",
    LIST_REGEX_PATTERN_SETS = "waf-regional:ListRegexPatternSets",
    LIST_RESOURCES_FOR_WEB_ACL = "waf-regional:ListResourcesForWebACL",
    LIST_RULES = "waf-regional:ListRules",
    LIST_SIZE_CONSTRAINT_SETS = "waf-regional:ListSizeConstraintSets",
    LIST_SQL_INJECTION_MATCH_SETS = "waf-regional:ListSqlInjectionMatchSets",
    LIST_WEB_AC_LS = "waf-regional:ListWebACLs",
    LIST_XSS_MATCH_SETS = "waf-regional:ListXssMatchSets",
    UPDATE_BYTE_MATCH_SET = "waf-regional:UpdateByteMatchSet",
    UPDATE_GEO_MATCH_SET = "waf-regional:UpdateGeoMatchSet",
    UPDATE_IP_SET = "waf-regional:UpdateIPSet",
    UPDATE_RATE_BASED_RULE = "waf-regional:UpdateRateBasedRule",
    UPDATE_REGEX_MATCH_SET = "waf-regional:UpdateRegexMatchSet",
    UPDATE_REGEX_PATTERN_SET = "waf-regional:UpdateRegexPatternSet",
    UPDATE_RULE = "waf-regional:UpdateRule",
    UPDATE_SIZE_CONSTRAINT_SET = "waf-regional:UpdateSizeConstraintSet",
    UPDATE_SQL_INJECTION_MATCH_SET = "waf-regional:UpdateSqlInjectionMatchSet",
    UPDATE_WEB_ACL = "waf-regional:UpdateWebACL",
    UPDATE_XSS_MATCH_SET = "waf-regional:UpdateXssMatchSet"
}

/** Actions for AWS XRay
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsxray.html
  */
export enum XRay {
    BATCH_GET_TRACES = "xray:BatchGetTraces",
    GET_SERVICE_GRAPH = "xray:GetServiceGraph",
    GET_TRACE_GRAPH = "xray:GetTraceGraph",
    GET_TRACE_SUMMARIES = "xray:GetTraceSummaries",
    PUT_TELEMETRY_RECORDS = "xray:PutTelemetryRecords",
    PUT_TRACE_SEGMENTS = "xray:PutTraceSegments"
}

/** Actions for Alexa for Business
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_alexaforbusiness.html
  */
export enum A4B {
    ASSOCIATE_DEVICE_WITH_ROOM = "a4b:AssociateDeviceWithRoom",
    ASSOCIATE_SKILL_GROUP_WITH_ROOM = "a4b:AssociateSkillGroupWithRoom",
    CREATE_PROFILE = "a4b:CreateProfile",
    CREATE_ROOM = "a4b:CreateRoom",
    CREATE_SKILL_GROUP = "a4b:CreateSkillGroup",
    CREATE_USER = "a4b:CreateUser",
    DELETE_PROFILE = "a4b:DeleteProfile",
    DELETE_ROOM = "a4b:DeleteRoom",
    DELETE_ROOM_SKILL_PARAMETER = "a4b:DeleteRoomSkillParameter",
    DELETE_SKILL_GROUP = "a4b:DeleteSkillGroup",
    DELETE_USER = "a4b:DeleteUser",
    DISASSOCIATE_DEVICE_FROM_ROOM = "a4b:DisassociateDeviceFromRoom",
    DISASSOCIATE_SKILL_GROUP_FROM_ROOM = "a4b:DisassociateSkillGroupFromRoom",
    GET_DEVICE = "a4b:GetDevice",
    GET_PROFILE = "a4b:GetProfile",
    GET_ROOM = "a4b:GetRoom",
    GET_ROOM_SKILL_PARAMETER = "a4b:GetRoomSkillParameter",
    GET_SKILL_GROUP = "a4b:GetSkillGroup",
    LIST_SKILLS = "a4b:ListSkills",
    LIST_TAGS = "a4b:ListTags",
    PUT_ROOM_SKILL_PARAMETER = "a4b:PutRoomSkillParameter",
    RESOLVE_ROOM = "a4b:ResolveRoom",
    REVOKE_INVITATION = "a4b:RevokeInvitation",
    SEARCH_DEVICES = "a4b:SearchDevices",
    SEARCH_PROFILES = "a4b:SearchProfiles",
    SEARCH_ROOMS = "a4b:SearchRooms",
    SEARCH_SKILL_GROUPS = "a4b:SearchSkillGroups",
    SEARCH_USERS = "a4b:SearchUsers",
    SEND_INVITATION = "a4b:SendInvitation",
    START_DEVICE_SYNC = "a4b:StartDeviceSync",
    TAG_RESOURCE = "a4b:TagResource",
    UNTAG_RESOURCE = "a4b:UntagResource",
    UPDATE_DEVICE = "a4b:UpdateDevice",
    UPDATE_PROFILE = "a4b:UpdateProfile",
    UPDATE_ROOM = "a4b:UpdateRoom",
    UPDATE_SKILL_GROUP = "a4b:UpdateSkillGroup"
}

/** Actions for Amazon API Gateway
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonapigateway.html
  */
export enum ExecuteAPI {
    INVALIDATE_CACHE = "execute-api:InvalidateCache",
    INVOKE = "execute-api:Invoke"
}

/** Actions for Amazon AWS Cloud Contact Center
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonawscloudcontactcenter.html
  */
export enum Connect {
    CREATE_INSTANCE = "connect:CreateInstance",
    DESCRIBE_INSTANCE = "connect:DescribeInstance",
    DESTROY_INSTANCE = "connect:DestroyInstance",
    GET_FEDERATION_TOKEN = "connect:GetFederationToken",
    GET_FEDERATION_TOKENS = "connect:GetFederationTokens",
    LIST_INSTANCES = "connect:ListInstances",
    MODIFY_INSTANCE = "connect:ModifyInstance"
}

/** Actions for Amazon AppStream
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappstream.html
  */
export enum AppStream {
    ASSOCIATE_FLEET = "appstream:AssociateFleet",
    CREATE_DIRECTORY_CONFIG = "appstream:CreateDirectoryConfig",
    CREATE_FLEET = "appstream:CreateFleet",
    CREATE_IMAGE_BUILDER = "appstream:CreateImageBuilder",
    CREATE_IMAGE_BUILDER_STREAMING_URL = "appstream:CreateImageBuilderStreamingURL",
    CREATE_STACK = "appstream:CreateStack",
    CREATE_STREAMING_URL = "appstream:CreateStreamingURL",
    DELETE_DIRECTORY_CONFIG = "appstream:DeleteDirectoryConfig",
    DELETE_FLEET = "appstream:DeleteFleet",
    DELETE_IMAGE = "appstream:DeleteImage",
    DELETE_IMAGE_BUILDER = "appstream:DeleteImageBuilder",
    DELETE_STACK = "appstream:DeleteStack",
    DESCRIBE_DIRECTORY_CONFIGS = "appstream:DescribeDirectoryConfigs",
    DESCRIBE_FLEETS = "appstream:DescribeFleets",
    DESCRIBE_IMAGE_BUILDERS = "appstream:DescribeImageBuilders",
    DESCRIBE_IMAGES = "appstream:DescribeImages",
    DESCRIBE_SESSIONS = "appstream:DescribeSessions",
    DESCRIBE_STACKS = "appstream:DescribeStacks",
    DISASSOCIATE_FLEET = "appstream:DisassociateFleet",
    EXPIRE_SESSION = "appstream:ExpireSession",
    LIST_ASSOCIATED_FLEETS = "appstream:ListAssociatedFleets",
    LIST_ASSOCIATED_STACKS = "appstream:ListAssociatedStacks",
    LIST_TAGS_FOR_RESOURCE = "appstream:ListTagsForResource",
    START_FLEET = "appstream:StartFleet",
    START_IMAGE_BUILDER = "appstream:StartImageBuilder",
    STOP_FLEET = "appstream:StopFleet",
    STOP_IMAGE_BUILDER = "appstream:StopImageBuilder",
    STREAM = "appstream:Stream",
    TAG_RESOURCE = "appstream:TagResource",
    UNTAG_RESOURCE = "appstream:UntagResource",
    UPDATE_DIRECTORY_CONFIG = "appstream:UpdateDirectoryConfig",
    UPDATE_FLEET = "appstream:UpdateFleet",
    UPDATE_STACK = "appstream:UpdateStack"
}

/** Actions for Amazon Athena
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonathena.html
  */
export enum Athena {
    BATCH_GET_NAMED_QUERY = "athena:BatchGetNamedQuery",
    BATCH_GET_QUERY_EXECUTION = "athena:BatchGetQueryExecution",
    CANCEL_QUERY_EXECUTION = "athena:CancelQueryExecution",
    CREATE_NAMED_QUERY = "athena:CreateNamedQuery",
    DELETE_NAMED_QUERY = "athena:DeleteNamedQuery",
    GET_CATALOGS = "athena:GetCatalogs",
    GET_EXECUTION_ENGINE = "athena:GetExecutionEngine",
    GET_EXECUTION_ENGINES = "athena:GetExecutionEngines",
    GET_NAMED_QUERY = "athena:GetNamedQuery",
    GET_NAMESPACE = "athena:GetNamespace",
    GET_NAMESPACES = "athena:GetNamespaces",
    GET_QUERY_EXECUTION = "athena:GetQueryExecution",
    GET_QUERY_EXECUTIONS = "athena:GetQueryExecutions",
    GET_QUERY_RESULTS = "athena:GetQueryResults",
    GET_TABLE = "athena:GetTable",
    GET_TABLES = "athena:GetTables",
    LIST_NAMED_QUERIES = "athena:ListNamedQueries",
    LIST_QUERY_EXECUTIONS = "athena:ListQueryExecutions",
    RUN_QUERY = "athena:RunQuery",
    START_QUERY_EXECUTION = "athena:StartQueryExecution",
    STOP_QUERY_EXECUTION = "athena:StopQueryExecution"
}

/** Actions for Amazon Chime
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonchime.html
  */
export enum Chime {
    ACCEPT_DELEGATE = "chime:AcceptDelegate",
    ACTIVATE_USERS = "chime:ActivateUsers",
    ADD_DOMAIN = "chime:AddDomain",
    ADD_OR_UPDATE_GROUPS = "chime:AddOrUpdateGroups",
    AUTHORIZE_DIRECTORY = "chime:AuthorizeDirectory",
    CONNECT_DIRECTORY = "chime:ConnectDirectory",
    CREATE_ACCOUNT = "chime:CreateAccount",
    CREATE_CDR_BUCKET = "chime:CreateCDRBucket",
    DELETE_ACCOUNT = "chime:DeleteAccount",
    DELETE_CDR_BUCKET = "chime:DeleteCDRBucket",
    DELETE_DELEGATE = "chime:DeleteDelegate",
    DELETE_DOMAIN = "chime:DeleteDomain",
    DELETE_GROUPS = "chime:DeleteGroups",
    DISCONNECT_DIRECTORY = "chime:DisconnectDirectory",
    GET_ACCOUNT = "chime:GetAccount",
    GET_ACCOUNT_RESOURCE = "chime:GetAccountResource",
    GET_ACCOUNT_SETTINGS = "chime:GetAccountSettings",
    GET_CDR_BUCKET = "chime:GetCDRBucket",
    GET_DOMAIN = "chime:GetDomain",
    GET_USER = "chime:GetUser",
    GET_USER_BY_EMAIL = "chime:GetUserByEmail",
    INVITE_DELEGATE = "chime:InviteDelegate",
    INVITE_USERS = "chime:InviteUsers",
    LIST_ACCOUNTS = "chime:ListAccounts",
    LIST_CDR_BUCKET = "chime:ListCDRBucket",
    LIST_DELEGATES = "chime:ListDelegates",
    LIST_DIRECTORIES = "chime:ListDirectories",
    LIST_DOMAINS = "chime:ListDomains",
    LIST_GROUPS = "chime:ListGroups",
    LIST_USERS = "chime:ListUsers",
    LOGOUT_USER = "chime:LogoutUser",
    RENAME_ACCOUNT = "chime:RenameAccount",
    RENEW_DELEGATE = "chime:RenewDelegate",
    RESET_ACCOUNT_RESOURCE = "chime:ResetAccountResource",
    RESET_PERSONAL_PIN = "chime:ResetPersonalPin",
    SUBMIT_SUPPORT_REQUEST = "chime:SubmitSupportRequest",
    SUSPEND_USERS = "chime:SuspendUsers",
    UNAUTHORIZE_DIRECTORY = "chime:UnauthorizeDirectory",
    UPDATE_ACCOUNT_RESOURCE = "chime:UpdateAccountResource",
    UPDATE_ACCOUNT_SETTINGS = "chime:UpdateAccountSettings",
    UPDATE_CDR_BUCKET = "chime:UpdateCDRBucket",
    UPDATE_SUPPORTED_LICENSES = "chime:UpdateSupportedLicenses",
    UPDATE_USER_LICENSES = "chime:UpdateUserLicenses",
    VALIDATE_ACCOUNT_RESOURCE = "chime:ValidateAccountResource",
    VALIDATE_DELEGATE = "chime:ValidateDelegate"
}

/** Actions for Amazon Cloud Directory
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonclouddirectory.html
  */
export enum CloudDirectory {
    ADD_FACET_TO_OBJECT = "clouddirectory:AddFacetToObject",
    APPLY_SCHEMA = "clouddirectory:ApplySchema",
    ATTACH_OBJECT = "clouddirectory:AttachObject",
    ATTACH_POLICY = "clouddirectory:AttachPolicy",
    ATTACH_TO_INDEX = "clouddirectory:AttachToIndex",
    ATTACH_TYPED_LINK = "clouddirectory:AttachTypedLink",
    BATCH_READ = "clouddirectory:BatchRead",
    BATCH_WRITE = "clouddirectory:BatchWrite",
    CREATE_DIRECTORY = "clouddirectory:CreateDirectory",
    CREATE_FACET = "clouddirectory:CreateFacet",
    CREATE_INDEX = "clouddirectory:CreateIndex",
    CREATE_OBJECT = "clouddirectory:CreateObject",
    CREATE_SCHEMA = "clouddirectory:CreateSchema",
    CREATE_TYPED_LINK_FACET = "clouddirectory:CreateTypedLinkFacet",
    DELETE_DIRECTORY = "clouddirectory:DeleteDirectory",
    DELETE_FACET = "clouddirectory:DeleteFacet",
    DELETE_OBJECT = "clouddirectory:DeleteObject",
    DELETE_SCHEMA = "clouddirectory:DeleteSchema",
    DELETE_TYPED_LINK_FACET = "clouddirectory:DeleteTypedLinkFacet",
    DETACH_FROM_INDEX = "clouddirectory:DetachFromIndex",
    DETACH_OBJECT = "clouddirectory:DetachObject",
    DETACH_POLICY = "clouddirectory:DetachPolicy",
    DETACH_TYPED_LINK = "clouddirectory:DetachTypedLink",
    DISABLE_DIRECTORY = "clouddirectory:DisableDirectory",
    ENABLE_DIRECTORY = "clouddirectory:EnableDirectory",
    GET_DIRECTORY = "clouddirectory:GetDirectory",
    GET_FACET = "clouddirectory:GetFacet",
    GET_OBJECT_INFORMATION = "clouddirectory:GetObjectInformation",
    GET_SCHEMA_AS_JSON = "clouddirectory:GetSchemaAsJson",
    GET_TYPED_LINK_FACET_INFORMATION = "clouddirectory:GetTypedLinkFacetInformation",
    LIST_APPLIED_SCHEMA_ARNS = "clouddirectory:ListAppliedSchemaArns",
    LIST_ATTACHED_INDICES = "clouddirectory:ListAttachedIndices",
    LIST_DEVELOPMENT_SCHEMA_ARNS = "clouddirectory:ListDevelopmentSchemaArns",
    LIST_DIRECTORIES = "clouddirectory:ListDirectories",
    LIST_FACET_ATTRIBUTES = "clouddirectory:ListFacetAttributes",
    LIST_FACET_NAMES = "clouddirectory:ListFacetNames",
    LIST_INCOMING_TYPED_LINKS = "clouddirectory:ListIncomingTypedLinks",
    LIST_INDEX = "clouddirectory:ListIndex",
    LIST_OBJECT_ATTRIBUTES = "clouddirectory:ListObjectAttributes",
    LIST_OBJECT_CHILDREN = "clouddirectory:ListObjectChildren",
    LIST_OBJECT_PARENT_PATHS = "clouddirectory:ListObjectParentPaths",
    LIST_OBJECT_PARENTS = "clouddirectory:ListObjectParents",
    LIST_OBJECT_POLICIES = "clouddirectory:ListObjectPolicies",
    LIST_OUTGOING_TYPED_LINKS = "clouddirectory:ListOutgoingTypedLinks",
    LIST_POLICY_ATTACHMENTS = "clouddirectory:ListPolicyAttachments",
    LIST_PUBLISHED_SCHEMA_ARNS = "clouddirectory:ListPublishedSchemaArns",
    LIST_TAGS_FOR_RESOURCE = "clouddirectory:ListTagsForResource",
    LIST_TYPED_LINK_FACET_ATTRIBUTES = "clouddirectory:ListTypedLinkFacetAttributes",
    LIST_TYPED_LINK_FACET_NAMES = "clouddirectory:ListTypedLinkFacetNames",
    LOOKUP_POLICY = "clouddirectory:LookupPolicy",
    PUBLISH_SCHEMA = "clouddirectory:PublishSchema",
    PUT_SCHEMA_FROM_JSON = "clouddirectory:PutSchemaFromJson",
    REMOVE_FACET_FROM_OBJECT = "clouddirectory:RemoveFacetFromObject",
    TAG_RESOURCE = "clouddirectory:TagResource",
    UNTAG_RESOURCE = "clouddirectory:UntagResource",
    UPDATE_FACET = "clouddirectory:UpdateFacet",
    UPDATE_OBJECT_ATTRIBUTES = "clouddirectory:UpdateObjectAttributes",
    UPDATE_SCHEMA = "clouddirectory:UpdateSchema",
    UPDATE_TYPED_LINK_FACET = "clouddirectory:UpdateTypedLinkFacet"
}

/** Actions for Amazon CloudFront
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudfront.html
  */
export enum CloudFront {
    CREATE_CLOUD_FRONT_ORIGIN_ACCESS_IDENTITY = "cloudfront:CreateCloudFrontOriginAccessIdentity",
    CREATE_DISTRIBUTION = "cloudfront:CreateDistribution",
    CREATE_DISTRIBUTION_WITH_TAGS = "cloudfront:CreateDistributionWithTags",
    CREATE_INVALIDATION = "cloudfront:CreateInvalidation",
    CREATE_STREAMING_DISTRIBUTION = "cloudfront:CreateStreamingDistribution",
    CREATE_STREAMING_DISTRIBUTION_WITH_TAGS = "cloudfront:CreateStreamingDistributionWithTags",
    DELETE_CLOUD_FRONT_ORIGIN_ACCESS_IDENTITY = "cloudfront:DeleteCloudFrontOriginAccessIdentity",
    DELETE_DISTRIBUTION = "cloudfront:DeleteDistribution",
    DELETE_STREAMING_DISTRIBUTION = "cloudfront:DeleteStreamingDistribution",
    GET_CLOUD_FRONT_ORIGIN_ACCESS_IDENTITY = "cloudfront:GetCloudFrontOriginAccessIdentity",
    GET_CLOUD_FRONT_ORIGIN_ACCESS_IDENTITY_CONFIG = "cloudfront:GetCloudFrontOriginAccessIdentityConfig",
    GET_DISTRIBUTION = "cloudfront:GetDistribution",
    GET_DISTRIBUTION_CONFIG = "cloudfront:GetDistributionConfig",
    GET_INVALIDATION = "cloudfront:GetInvalidation",
    GET_STREAMING_DISTRIBUTION = "cloudfront:GetStreamingDistribution",
    GET_STREAMING_DISTRIBUTION_CONFIG = "cloudfront:GetStreamingDistributionConfig",
    LIST_CLOUD_FRONT_ORIGIN_ACCESS_IDENTITIES = "cloudfront:ListCloudFrontOriginAccessIdentities",
    LIST_DISTRIBUTIONS = "cloudfront:ListDistributions",
    LIST_DISTRIBUTIONS_BY_WEB_ACL_ID = "cloudfront:ListDistributionsByWebACLId",
    LIST_INVALIDATIONS = "cloudfront:ListInvalidations",
    LIST_STREAMING_DISTRIBUTIONS = "cloudfront:ListStreamingDistributions",
    LIST_TAGS_FOR_RESOURCE = "cloudfront:ListTagsForResource",
    TAG_RESOURCE = "cloudfront:TagResource",
    UNTAG_RESOURCE = "cloudfront:UntagResource",
    UPDATE_CLOUD_FRONT_ORIGIN_ACCESS_IDENTITY = "cloudfront:UpdateCloudFrontOriginAccessIdentity",
    UPDATE_DISTRIBUTION = "cloudfront:UpdateDistribution",
    UPDATE_STREAMING_DISTRIBUTION = "cloudfront:UpdateStreamingDistribution"
}

/** Actions for Amazon CloudSearch
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudsearch.html
  */
export enum CloudSearch {
    ADD_TAGS = "cloudsearch:AddTags",
    BUILD_SUGGESTERS = "cloudsearch:BuildSuggesters",
    CREATE_DOMAIN = "cloudsearch:CreateDomain",
    DEFINE_ANALYSIS_SCHEME = "cloudsearch:DefineAnalysisScheme",
    DEFINE_EXPRESSION = "cloudsearch:DefineExpression",
    DEFINE_INDEX_FIELD = "cloudsearch:DefineIndexField",
    DEFINE_SUGGESTER = "cloudsearch:DefineSuggester",
    DELETE_ANALYSIS_SCHEME = "cloudsearch:DeleteAnalysisScheme",
    DELETE_DOMAIN = "cloudsearch:DeleteDomain",
    DELETE_EXPRESSION = "cloudsearch:DeleteExpression",
    DELETE_INDEX_FIELD = "cloudsearch:DeleteIndexField",
    DELETE_SUGGESTER = "cloudsearch:DeleteSuggester",
    DESCRIBE_ANALYSIS_SCHEMES = "cloudsearch:DescribeAnalysisSchemes",
    DESCRIBE_AVAILABILITY_OPTIONS = "cloudsearch:DescribeAvailabilityOptions",
    DESCRIBE_DOMAINS = "cloudsearch:DescribeDomains",
    DESCRIBE_EXPRESSIONS = "cloudsearch:DescribeExpressions",
    DESCRIBE_INDEX_FIELDS = "cloudsearch:DescribeIndexFields",
    DESCRIBE_SCALING_PARAMETERS = "cloudsearch:DescribeScalingParameters",
    DESCRIBE_SERVICE_ACCESS_POLICIES = "cloudsearch:DescribeServiceAccessPolicies",
    DESCRIBE_SUGGESTERS = "cloudsearch:DescribeSuggesters",
    INDEX_DOCUMENTS = "cloudsearch:IndexDocuments",
    LIST_DOMAIN_NAMES = "cloudsearch:ListDomainNames",
    LIST_TAGS = "cloudsearch:ListTags",
    REMOVE_TAGS = "cloudsearch:RemoveTags",
    UPDATE_AVAILABILITY_OPTIONS = "cloudsearch:UpdateAvailabilityOptions",
    UPDATE_SCALING_PARAMETERS = "cloudsearch:UpdateScalingParameters",
    UPDATE_SERVICE_ACCESS_POLICIES = "cloudsearch:UpdateServiceAccessPolicies",
    DOCUMENT = "cloudsearch:document",
    SEARCH = "cloudsearch:search",
    SUGGEST = "cloudsearch:suggest"
}

/** Actions for Amazon CloudWatch
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html
  */
export enum CloudWatch {
    DELETE_ALARMS = "cloudwatch:DeleteAlarms",
    DELETE_DASHBOARDS = "cloudwatch:DeleteDashboards",
    DESCRIBE_ALARM_HISTORY = "cloudwatch:DescribeAlarmHistory",
    DESCRIBE_ALARMS = "cloudwatch:DescribeAlarms",
    DESCRIBE_ALARMS_FOR_METRIC = "cloudwatch:DescribeAlarmsForMetric",
    DISABLE_ALARM_ACTIONS = "cloudwatch:DisableAlarmActions",
    ENABLE_ALARM_ACTIONS = "cloudwatch:EnableAlarmActions",
    GET_DASHBOARD = "cloudwatch:GetDashboard",
    GET_METRIC_DATA = "cloudwatch:GetMetricData",
    GET_METRIC_STATISTICS = "cloudwatch:GetMetricStatistics",
    LIST_DASHBOARDS = "cloudwatch:ListDashboards",
    LIST_METRICS = "cloudwatch:ListMetrics",
    PUT_DASHBOARD = "cloudwatch:PutDashboard",
    PUT_METRIC_ALARM = "cloudwatch:PutMetricAlarm",
    PUT_METRIC_DATA = "cloudwatch:PutMetricData",
    SET_ALARM_STATE = "cloudwatch:SetAlarmState"
}

/** Actions for Amazon CloudWatch Events
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchevents.html
  */
export enum Events {
    DELETE_RULE = "events:DeleteRule",
    DESCRIBE_RULE = "events:DescribeRule",
    DISABLE_RULE = "events:DisableRule",
    ENABLE_RULE = "events:EnableRule",
    LIST_RULE_NAMES_BY_TARGET = "events:ListRuleNamesByTarget",
    LIST_RULES = "events:ListRules",
    LIST_TARGETS_BY_RULE = "events:ListTargetsByRule",
    PUT_EVENTS = "events:PutEvents",
    PUT_RULE = "events:PutRule",
    PUT_TARGETS = "events:PutTargets",
    REMOVE_TARGETS = "events:RemoveTargets",
    TEST_EVENT_PATTERN = "events:TestEventPattern"
}

/** Actions for Amazon CloudWatch Logs
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchlogs.html
  */
export enum Logs {
    ASSOCIATE_KMS_KEY = "logs:AssociateKmsKey",
    CANCEL_EXPORT_TASK = "logs:CancelExportTask",
    CREATE_EXPORT_TASK = "logs:CreateExportTask",
    CREATE_LOG_GROUP = "logs:CreateLogGroup",
    CREATE_LOG_STREAM = "logs:CreateLogStream",
    DELETE_DESTINATION = "logs:DeleteDestination",
    DELETE_LOG_GROUP = "logs:DeleteLogGroup",
    DELETE_LOG_STREAM = "logs:DeleteLogStream",
    DELETE_METRIC_FILTER = "logs:DeleteMetricFilter",
    DELETE_RESOURCE_POLICY = "logs:DeleteResourcePolicy",
    DELETE_RETENTION_POLICY = "logs:DeleteRetentionPolicy",
    DELETE_SUBSCRIPTION_FILTER = "logs:DeleteSubscriptionFilter",
    DESCRIBE_DESTINATIONS = "logs:DescribeDestinations",
    DESCRIBE_EXPORT_TASKS = "logs:DescribeExportTasks",
    DESCRIBE_LOG_GROUPS = "logs:DescribeLogGroups",
    DESCRIBE_LOG_STREAMS = "logs:DescribeLogStreams",
    DESCRIBE_METRIC_FILTERS = "logs:DescribeMetricFilters",
    DESCRIBE_RESOURCE_POLICIES = "logs:DescribeResourcePolicies",
    DESCRIBE_SUBSCRIPTION_FILTERS = "logs:DescribeSubscriptionFilters",
    DISASSOCIATE_KMS_KEY = "logs:DisassociateKmsKey",
    FILTER_LOG_EVENTS = "logs:FilterLogEvents",
    GET_LOG_EVENTS = "logs:GetLogEvents",
    LIST_TAGS_LOG_GROUP = "logs:ListTagsLogGroup",
    PUT_DESTINATION = "logs:PutDestination",
    PUT_DESTINATION_POLICY = "logs:PutDestinationPolicy",
    PUT_LOG_EVENTS = "logs:PutLogEvents",
    PUT_METRIC_FILTER = "logs:PutMetricFilter",
    PUT_RESOURCE_POLICY = "logs:PutResourcePolicy",
    PUT_RETENTION_POLICY = "logs:PutRetentionPolicy",
    PUT_SUBSCRIPTION_FILTER = "logs:PutSubscriptionFilter",
    TAG_LOG_GROUP = "logs:TagLogGroup",
    TEST_METRIC_FILTER = "logs:TestMetricFilter",
    UNTAG_LOG_GROUP = "logs:UntagLogGroup"
}

/** Actions for Amazon Cognito Identity
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitoidentity.html
  */
export enum CognitoIdentity {
    CREATE_IDENTITY_POOL = "cognito-identity:CreateIdentityPool",
    DELETE_IDENTITIES = "cognito-identity:DeleteIdentities",
    DELETE_IDENTITY_POOL = "cognito-identity:DeleteIdentityPool",
    DESCRIBE_IDENTITY = "cognito-identity:DescribeIdentity",
    DESCRIBE_IDENTITY_POOL = "cognito-identity:DescribeIdentityPool",
    GET_CREDENTIALS_FOR_IDENTITY = "cognito-identity:GetCredentialsForIdentity",
    GET_ID = "cognito-identity:GetId",
    GET_IDENTITY_POOL_ROLES = "cognito-identity:GetIdentityPoolRoles",
    GET_OPEN_ID_TOKEN = "cognito-identity:GetOpenIdToken",
    GET_OPEN_ID_TOKEN_FOR_DEVELOPER_IDENTITY = "cognito-identity:GetOpenIdTokenForDeveloperIdentity",
    LIST_IDENTITIES = "cognito-identity:ListIdentities",
    LIST_IDENTITY_POOLS = "cognito-identity:ListIdentityPools",
    LOOKUP_DEVELOPER_IDENTITY = "cognito-identity:LookupDeveloperIdentity",
    MERGE_DEVELOPER_IDENTITIES = "cognito-identity:MergeDeveloperIdentities",
    SET_IDENTITY_POOL_ROLES = "cognito-identity:SetIdentityPoolRoles",
    UNLINK_DEVELOPER_IDENTITY = "cognito-identity:UnlinkDeveloperIdentity",
    UNLINK_IDENTITY = "cognito-identity:UnlinkIdentity",
    UPDATE_IDENTITY_POOL = "cognito-identity:UpdateIdentityPool"
}

/** Actions for Amazon Cognito Sync
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitosync.html
  */
export enum CognitoSync {
    BULK_PUBLISH = "cognito-sync:BulkPublish",
    DELETE_DATASET = "cognito-sync:DeleteDataset",
    DESCRIBE_DATASET = "cognito-sync:DescribeDataset",
    DESCRIBE_IDENTITY_POOL_USAGE = "cognito-sync:DescribeIdentityPoolUsage",
    DESCRIBE_IDENTITY_USAGE = "cognito-sync:DescribeIdentityUsage",
    GET_BULK_PUBLISH_DETAILS = "cognito-sync:GetBulkPublishDetails",
    GET_COGNITO_EVENTS = "cognito-sync:GetCognitoEvents",
    GET_IDENTITY_POOL_CONFIGURATION = "cognito-sync:GetIdentityPoolConfiguration",
    LIST_DATASETS = "cognito-sync:ListDatasets",
    LIST_IDENTITY_POOL_USAGE = "cognito-sync:ListIdentityPoolUsage",
    LIST_RECORDS = "cognito-sync:ListRecords",
    QUERY_RECORDS = "cognito-sync:QueryRecords",
    REGISTER_DEVICE = "cognito-sync:RegisterDevice",
    SET_COGNITO_EVENTS = "cognito-sync:SetCognitoEvents",
    SET_DATASET_CONFIGURATION = "cognito-sync:SetDatasetConfiguration",
    SET_IDENTITY_POOL_CONFIGURATION = "cognito-sync:SetIdentityPoolConfiguration",
    SUBSCRIBE_TO_DATASET = "cognito-sync:SubscribeToDataset",
    UNSUBSCRIBE_FROM_DATASET = "cognito-sync:UnsubscribeFromDataset",
    UPDATE_RECORDS = "cognito-sync:UpdateRecords"
}

/** Actions for Amazon Cognito User Pools
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitouserpools.html
  */
export enum CognitoIDP {
    ADD_CUSTOM_ATTRIBUTES = "cognito-idp:AddCustomAttributes",
    ADMIN_ADD_USER_TO_GROUP = "cognito-idp:AdminAddUserToGroup",
    ADMIN_CONFIRM_SIGN_UP = "cognito-idp:AdminConfirmSignUp",
    ADMIN_CREATE_USER = "cognito-idp:AdminCreateUser",
    ADMIN_DELETE_USER = "cognito-idp:AdminDeleteUser",
    ADMIN_DELETE_USER_ATTRIBUTES = "cognito-idp:AdminDeleteUserAttributes",
    ADMIN_DISABLE_USER = "cognito-idp:AdminDisableUser",
    ADMIN_ENABLE_USER = "cognito-idp:AdminEnableUser",
    ADMIN_FORGET_DEVICE = "cognito-idp:AdminForgetDevice",
    ADMIN_GET_DEVICE = "cognito-idp:AdminGetDevice",
    ADMIN_GET_USER = "cognito-idp:AdminGetUser",
    ADMIN_INITIATE_AUTH = "cognito-idp:AdminInitiateAuth",
    ADMIN_LIST_DEVICES = "cognito-idp:AdminListDevices",
    ADMIN_LIST_GROUPS_FOR_USER = "cognito-idp:AdminListGroupsForUser",
    ADMIN_LIST_USER_AUTH_EVENTS = "cognito-idp:AdminListUserAuthEvents",
    ADMIN_REMOVE_USER_FROM_GROUP = "cognito-idp:AdminRemoveUserFromGroup",
    ADMIN_RESET_USER_PASSWORD = "cognito-idp:AdminResetUserPassword",
    ADMIN_RESPOND_TO_AUTH_CHALLENGE = "cognito-idp:AdminRespondToAuthChallenge",
    ADMIN_SET_USER_MFA_PREFERENCE = "cognito-idp:AdminSetUserMFAPreference",
    ADMIN_SET_USER_SETTINGS = "cognito-idp:AdminSetUserSettings",
    ADMIN_UPDATE_AUTH_EVENT_FEEDBACK = "cognito-idp:AdminUpdateAuthEventFeedback",
    ADMIN_UPDATE_DEVICE_STATUS = "cognito-idp:AdminUpdateDeviceStatus",
    ADMIN_UPDATE_USER_ATTRIBUTES = "cognito-idp:AdminUpdateUserAttributes",
    ADMIN_USER_GLOBAL_SIGN_OUT = "cognito-idp:AdminUserGlobalSignOut",
    CHANGE_PASSWORD = "cognito-idp:ChangePassword",
    CONFIRM_DEVICE = "cognito-idp:ConfirmDevice",
    CONFIRM_FORGOT_PASSWORD = "cognito-idp:ConfirmForgotPassword",
    CONFIRM_SIGN_UP = "cognito-idp:ConfirmSignUp",
    CREATE_GROUP = "cognito-idp:CreateGroup",
    CREATE_USER_IMPORT_JOB = "cognito-idp:CreateUserImportJob",
    CREATE_USER_POOL = "cognito-idp:CreateUserPool",
    CREATE_USER_POOL_CLIENT = "cognito-idp:CreateUserPoolClient",
    DELETE_GROUP = "cognito-idp:DeleteGroup",
    DELETE_USER = "cognito-idp:DeleteUser",
    DELETE_USER_ATTRIBUTES = "cognito-idp:DeleteUserAttributes",
    DELETE_USER_POOL = "cognito-idp:DeleteUserPool",
    DELETE_USER_POOL_CLIENT = "cognito-idp:DeleteUserPoolClient",
    DESCRIBE_RISK_CONFIGURATION = "cognito-idp:DescribeRiskConfiguration",
    DESCRIBE_USER_IMPORT_JOB = "cognito-idp:DescribeUserImportJob",
    DESCRIBE_USER_POOL = "cognito-idp:DescribeUserPool",
    DESCRIBE_USER_POOL_CLIENT = "cognito-idp:DescribeUserPoolClient",
    FORGET_DEVICE = "cognito-idp:ForgetDevice",
    FORGOT_PASSWORD = "cognito-idp:ForgotPassword",
    GET_CSV_HEADER = "cognito-idp:GetCSVHeader",
    GET_DEVICE = "cognito-idp:GetDevice",
    GET_GROUP = "cognito-idp:GetGroup",
    GET_USER = "cognito-idp:GetUser",
    GET_USER_ATTRIBUTE_VERIFICATION_CODE = "cognito-idp:GetUserAttributeVerificationCode",
    GET_USER_POOL_MFA_CONFIG = "cognito-idp:GetUserPoolMfaConfig",
    GLOBAL_SIGN_OUT = "cognito-idp:GlobalSignOut",
    INITIATE_AUTH = "cognito-idp:InitiateAuth",
    LIST_DEVICES = "cognito-idp:ListDevices",
    LIST_GROUPS = "cognito-idp:ListGroups",
    LIST_USER_IMPORT_JOBS = "cognito-idp:ListUserImportJobs",
    LIST_USER_POOL_CLIENTS = "cognito-idp:ListUserPoolClients",
    LIST_USERS_IN_GROUP = "cognito-idp:ListUsersInGroup",
    RESEND_CONFIRMATION_CODE = "cognito-idp:ResendConfirmationCode",
    RESPOND_TO_AUTH_CHALLENGE = "cognito-idp:RespondToAuthChallenge",
    SET_RISK_CONFIGURATION = "cognito-idp:SetRiskConfiguration",
    SET_USER_MFA_PREFERENCE = "cognito-idp:SetUserMFAPreference",
    SET_USER_POOL_MFA_CONFIG = "cognito-idp:SetUserPoolMfaConfig",
    SET_USER_SETTINGS = "cognito-idp:SetUserSettings",
    SIGN_UP = "cognito-idp:SignUp",
    START_USER_IMPORT_JOB = "cognito-idp:StartUserImportJob",
    STOP_USER_IMPORT_JOB = "cognito-idp:StopUserImportJob",
    UPDATE_AUTH_EVENT_FEEDBACK = "cognito-idp:UpdateAuthEventFeedback",
    UPDATE_DEVICE_STATUS = "cognito-idp:UpdateDeviceStatus",
    UPDATE_GROUP = "cognito-idp:UpdateGroup",
    UPDATE_USER_ATTRIBUTES = "cognito-idp:UpdateUserAttributes",
    UPDATE_USER_POOL = "cognito-idp:UpdateUserPool",
    UPDATE_USER_POOL_CLIENT = "cognito-idp:UpdateUserPoolClient",
    VERIFY_USER_ATTRIBUTE = "cognito-idp:VerifyUserAttribute"
}

/** Actions for Amazon Comprehend
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html
  */
export enum Comprehend {
    BATCH_DETECT_DOMINANT_LANGUAGE = "comprehend:BatchDetectDominantLanguage",
    BATCH_DETECT_ENTITIES = "comprehend:BatchDetectEntities",
    BATCH_DETECT_KEY_PHRASES = "comprehend:BatchDetectKeyPhrases",
    BATCH_DETECT_SENTIMENT = "comprehend:BatchDetectSentiment",
    DESCRIBE_TOPICS_DETECTION_JOB = "comprehend:DescribeTopicsDetectionJob",
    DETECT_DOMINANT_LANGUAGE = "comprehend:DetectDominantLanguage",
    DETECT_ENTITIES = "comprehend:DetectEntities",
    DETECT_KEY_PHRASES = "comprehend:DetectKeyPhrases",
    DETECT_SENTIMENT = "comprehend:DetectSentiment",
    LIST_TOPICS_DETECTION_JOBS = "comprehend:ListTopicsDetectionJobs",
    START_TOPICS_DETECTION_JOB = "comprehend:StartTopicsDetectionJob"
}

/** Actions for Amazon DynamoDB
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodb.html
  */
export enum DynamoDB {
    BATCH_GET_ITEM = "dynamodb:BatchGetItem",
    BATCH_WRITE_ITEM = "dynamodb:BatchWriteItem",
    CREATE_BACKUP = "dynamodb:CreateBackup",
    CREATE_TABLE = "dynamodb:CreateTable",
    DELETE_BACKUP = "dynamodb:DeleteBackup",
    DELETE_ITEM = "dynamodb:DeleteItem",
    DELETE_TABLE = "dynamodb:DeleteTable",
    DESCRIBE_BACKUP = "dynamodb:DescribeBackup",
    DESCRIBE_CONTINUOUS_BACKUPS = "dynamodb:DescribeContinuousBackups",
    DESCRIBE_LIMITS = "dynamodb:DescribeLimits",
    DESCRIBE_RESERVED_CAPACITY = "dynamodb:DescribeReservedCapacity",
    DESCRIBE_RESERVED_CAPACITY_OFFERINGS = "dynamodb:DescribeReservedCapacityOfferings",
    DESCRIBE_STREAM = "dynamodb:DescribeStream",
    DESCRIBE_TABLE = "dynamodb:DescribeTable",
    DESCRIBE_TIME_TO_LIVE = "dynamodb:DescribeTimeToLive",
    GET_ITEM = "dynamodb:GetItem",
    GET_RECORDS = "dynamodb:GetRecords",
    GET_SHARD_ITERATOR = "dynamodb:GetShardIterator",
    LIST_BACKUPS = "dynamodb:ListBackups",
    LIST_STREAMS = "dynamodb:ListStreams",
    LIST_TABLES = "dynamodb:ListTables",
    LIST_TAGS_OF_RESOURCE = "dynamodb:ListTagsOfResource",
    PURCHASE_RESERVED_CAPACITY_OFFERINGS = "dynamodb:PurchaseReservedCapacityOfferings",
    PUT_ITEM = "dynamodb:PutItem",
    QUERY = "dynamodb:Query",
    RESTORE_TABLE_FROM_BACKUP = "dynamodb:RestoreTableFromBackup",
    RESTORE_TABLE_TO_POINT_IN_TIME = "dynamodb:RestoreTableToPointInTime",
    SCAN = "dynamodb:Scan",
    TAG_RESOURCE = "dynamodb:TagResource",
    UNTAG_RESOURCE = "dynamodb:UntagResource",
    UPDATE_CONTINUOUS_BACKUPS = "dynamodb:UpdateContinuousBackups",
    UPDATE_ITEM = "dynamodb:UpdateItem",
    UPDATE_TABLE = "dynamodb:UpdateTable",
    UPDATE_TIME_TO_LIVE = "dynamodb:UpdateTimeToLive"
}

/** Actions for Amazon DynamoDB Accelerator (DAX)
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodbaccelerator(dax).html
  */
export enum DAX {
    BATCH_GET_ITEM = "dax:BatchGetItem",
    BATCH_WRITE_ITEM = "dax:BatchWriteItem",
    CREATE_CLUSTER = "dax:CreateCluster",
    CREATE_PARAMETER_GROUP = "dax:CreateParameterGroup",
    CREATE_SUBNET_GROUP = "dax:CreateSubnetGroup",
    DECREASE_REPLICATION_FACTOR = "dax:DecreaseReplicationFactor",
    DELETE_CLUSTER = "dax:DeleteCluster",
    DELETE_ITEM = "dax:DeleteItem",
    DELETE_PARAMETER_GROUP = "dax:DeleteParameterGroup",
    DELETE_SUBNET_GROUP = "dax:DeleteSubnetGroup",
    DESCRIBE_CLUSTERS = "dax:DescribeClusters",
    DESCRIBE_DEFAULT_PARAMETERS = "dax:DescribeDefaultParameters",
    DESCRIBE_EVENTS = "dax:DescribeEvents",
    DESCRIBE_PARAMETER_GROUPS = "dax:DescribeParameterGroups",
    DESCRIBE_PARAMETERS = "dax:DescribeParameters",
    DESCRIBE_SUBNET_GROUPS = "dax:DescribeSubnetGroups",
    DESCRIBE_TABLE = "dax:DescribeTable",
    GET_ITEM = "dax:GetItem",
    INCREASE_REPLICATION_FACTOR = "dax:IncreaseReplicationFactor",
    LIST_TABLES = "dax:ListTables",
    LIST_TAGS = "dax:ListTags",
    PUT_ITEM = "dax:PutItem",
    QUERY = "dax:Query",
    REBOOT_NODE = "dax:RebootNode",
    SCAN = "dax:Scan",
    TAG_RESOURCE = "dax:TagResource",
    UNTAG_RESOURCE = "dax:UntagResource",
    UPDATE_CLUSTER = "dax:UpdateCluster",
    UPDATE_ITEM = "dax:UpdateItem",
    UPDATE_PARAMETER_GROUP = "dax:UpdateParameterGroup",
    UPDATE_SUBNET_GROUP = "dax:UpdateSubnetGroup"
}

/** Actions for Amazon EC2
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html
  */
export enum EC2 {
    ACCEPT_RESERVED_INSTANCES_EXCHANGE_QUOTE = "ec2:AcceptReservedInstancesExchangeQuote",
    ACCEPT_VPC_ENDPOINT_CONNECTIONS = "ec2:AcceptVpcEndpointConnections",
    ACCEPT_VPC_PEERING_CONNECTION = "ec2:AcceptVpcPeeringConnection",
    ALLOCATE_ADDRESS = "ec2:AllocateAddress",
    ALLOCATE_HOSTS = "ec2:AllocateHosts",
    ASSIGN_ADDRESSES = "ec2:AssignIpv6Addresses",
    ASSIGN_PRIVATE_IP_ADDRESSES = "ec2:AssignPrivateIpAddresses",
    ASSOCIATE_ADDRESS = "ec2:AssociateAddress",
    ASSOCIATE_DHCP_OPTIONS = "ec2:AssociateDhcpOptions",
    ASSOCIATE_IAM_INSTANCE_PROFILE = "ec2:AssociateIamInstanceProfile",
    ASSOCIATE_ROUTE_TABLE = "ec2:AssociateRouteTable",
    ASSOCIATE_SUBNET_CIDR_BLOCK = "ec2:AssociateSubnetCidrBlock",
    ASSOCIATE_VPC_CIDR_BLOCK = "ec2:AssociateVpcCidrBlock",
    ATTACH_CLASSIC_LINK_VPC = "ec2:AttachClassicLinkVpc",
    ATTACH_INTERNET_GATEWAY = "ec2:AttachInternetGateway",
    ATTACH_NETWORK_INTERFACE = "ec2:AttachNetworkInterface",
    ATTACH_VOLUME = "ec2:AttachVolume",
    ATTACH_VPN_GATEWAY = "ec2:AttachVpnGateway",
    AUTHORIZE_SECURITY_GROUP_EGRESS = "ec2:AuthorizeSecurityGroupEgress",
    AUTHORIZE_SECURITY_GROUP_INGRESS = "ec2:AuthorizeSecurityGroupIngress",
    BUNDLE_INSTANCE = "ec2:BundleInstance",
    CANCEL_BUNDLE_TASK = "ec2:CancelBundleTask",
    CANCEL_CONVERSION_TASK = "ec2:CancelConversionTask",
    CANCEL_EXPORT_TASK = "ec2:CancelExportTask",
    CANCEL_IMPORT_TASK = "ec2:CancelImportTask",
    CANCEL_RESERVED_INSTANCES_LISTING = "ec2:CancelReservedInstancesListing",
    CANCEL_SPOT_FLEET_REQUESTS = "ec2:CancelSpotFleetRequests",
    CANCEL_SPOT_INSTANCE_REQUESTS = "ec2:CancelSpotInstanceRequests",
    CONFIRM_PRODUCT_INSTANCE = "ec2:ConfirmProductInstance",
    COPY_FPGA_IMAGE = "ec2:CopyFpgaImage",
    COPY_IMAGE = "ec2:CopyImage",
    COPY_SNAPSHOT = "ec2:CopySnapshot",
    CREATE_CUSTOMER_GATEWAY = "ec2:CreateCustomerGateway",
    CREATE_DEFAULT_SUBNET = "ec2:CreateDefaultSubnet",
    CREATE_DEFAULT_VPC = "ec2:CreateDefaultVpc",
    CREATE_DHCP_OPTIONS = "ec2:CreateDhcpOptions",
    CREATE_EGRESS_ONLY_INTERNET_GATEWAY = "ec2:CreateEgressOnlyInternetGateway",
    CREATE_FLOW_LOGS = "ec2:CreateFlowLogs",
    CREATE_FPGA_IMAGE = "ec2:CreateFpgaImage",
    CREATE_IMAGE = "ec2:CreateImage",
    CREATE_INSTANCE_EXPORT_TASK = "ec2:CreateInstanceExportTask",
    CREATE_INTERNET_GATEWAY = "ec2:CreateInternetGateway",
    CREATE_KEY_PAIR = "ec2:CreateKeyPair",
    CREATE_LAUNCH_TEMPLATE = "ec2:CreateLaunchTemplate",
    CREATE_LAUNCH_TEMPLATE_VERSION = "ec2:CreateLaunchTemplateVersion",
    CREATE_NAT_GATEWAY = "ec2:CreateNatGateway",
    CREATE_NETWORK_ACL = "ec2:CreateNetworkAcl",
    CREATE_NETWORK_ACL_ENTRY = "ec2:CreateNetworkAclEntry",
    CREATE_NETWORK_INTERFACE = "ec2:CreateNetworkInterface",
    CREATE_NETWORK_INTERFACE_PERMISSION = "ec2:CreateNetworkInterfacePermission",
    CREATE_PLACEMENT_GROUP = "ec2:CreatePlacementGroup",
    CREATE_RESERVED_INSTANCES_LISTING = "ec2:CreateReservedInstancesListing",
    CREATE_ROUTE = "ec2:CreateRoute",
    CREATE_ROUTE_TABLE = "ec2:CreateRouteTable",
    CREATE_SECURITY_GROUP = "ec2:CreateSecurityGroup",
    CREATE_SNAPSHOT = "ec2:CreateSnapshot",
    CREATE_SPOT_DATAFEED_SUBSCRIPTION = "ec2:CreateSpotDatafeedSubscription",
    CREATE_SUBNET = "ec2:CreateSubnet",
    CREATE_TAGS = "ec2:CreateTags",
    CREATE_VOLUME = "ec2:CreateVolume",
    CREATE_VPC = "ec2:CreateVpc",
    CREATE_VPC_ENDPOINT = "ec2:CreateVpcEndpoint",
    CREATE_VPC_ENDPOINT_CONNECTION_NOTIFICATION = "ec2:CreateVpcEndpointConnectionNotification",
    CREATE_VPC_ENDPOINT_SERVICE_CONFIGURATION = "ec2:CreateVpcEndpointServiceConfiguration",
    CREATE_VPC_PEERING_CONNECTION = "ec2:CreateVpcPeeringConnection",
    CREATE_VPN_CONNECTION = "ec2:CreateVpnConnection",
    CREATE_VPN_CONNECTION_ROUTE = "ec2:CreateVpnConnectionRoute",
    CREATE_VPN_GATEWAY = "ec2:CreateVpnGateway",
    DELETE_CUSTOMER_GATEWAY = "ec2:DeleteCustomerGateway",
    DELETE_DHCP_OPTIONS = "ec2:DeleteDhcpOptions",
    DELETE_EGRESS_ONLY_INTERNET_GATEWAY = "ec2:DeleteEgressOnlyInternetGateway",
    DELETE_FLOW_LOGS = "ec2:DeleteFlowLogs",
    DELETE_FPGA_IMAGE = "ec2:DeleteFpgaImage",
    DELETE_INTERNET_GATEWAY = "ec2:DeleteInternetGateway",
    DELETE_KEY_PAIR = "ec2:DeleteKeyPair",
    DELETE_LAUNCH_TEMPLATE = "ec2:DeleteLaunchTemplate",
    DELETE_LAUNCH_TEMPLATE_VERSIONS = "ec2:DeleteLaunchTemplateVersions",
    DELETE_NAT_GATEWAY = "ec2:DeleteNatGateway",
    DELETE_NETWORK_ACL = "ec2:DeleteNetworkAcl",
    DELETE_NETWORK_ACL_ENTRY = "ec2:DeleteNetworkAclEntry",
    DELETE_NETWORK_INTERFACE = "ec2:DeleteNetworkInterface",
    DELETE_NETWORK_INTERFACE_PERMISSION = "ec2:DeleteNetworkInterfacePermission",
    DELETE_PLACEMENT_GROUP = "ec2:DeletePlacementGroup",
    DELETE_ROUTE = "ec2:DeleteRoute",
    DELETE_ROUTE_TABLE = "ec2:DeleteRouteTable",
    DELETE_SECURITY_GROUP = "ec2:DeleteSecurityGroup",
    DELETE_SNAPSHOT = "ec2:DeleteSnapshot",
    DELETE_SPOT_DATAFEED_SUBSCRIPTION = "ec2:DeleteSpotDatafeedSubscription",
    DELETE_SUBNET = "ec2:DeleteSubnet",
    DELETE_TAGS = "ec2:DeleteTags",
    DELETE_VOLUME = "ec2:DeleteVolume",
    DELETE_VPC = "ec2:DeleteVpc",
    DELETE_VPC_ENDPOINT_CONNECTION_NOTIFICATIONS = "ec2:DeleteVpcEndpointConnectionNotifications",
    DELETE_VPC_ENDPOINT_SERVICE_CONFIGURATIONS = "ec2:DeleteVpcEndpointServiceConfigurations",
    DELETE_VPC_ENDPOINTS = "ec2:DeleteVpcEndpoints",
    DELETE_VPC_PEERING_CONNECTION = "ec2:DeleteVpcPeeringConnection",
    DELETE_VPN_CONNECTION = "ec2:DeleteVpnConnection",
    DELETE_VPN_CONNECTION_ROUTE = "ec2:DeleteVpnConnectionRoute",
    DELETE_VPN_GATEWAY = "ec2:DeleteVpnGateway",
    DEREGISTER_IMAGE = "ec2:DeregisterImage",
    DESCRIBE_ACCOUNT_ATTRIBUTES = "ec2:DescribeAccountAttributes",
    DESCRIBE_ADDRESSES = "ec2:DescribeAddresses",
    DESCRIBE_AVAILABILITY_ZONES = "ec2:DescribeAvailabilityZones",
    DESCRIBE_BUNDLE_TASKS = "ec2:DescribeBundleTasks",
    DESCRIBE_CLASSIC_LINK_INSTANCES = "ec2:DescribeClassicLinkInstances",
    DESCRIBE_CONVERSION_TASKS = "ec2:DescribeConversionTasks",
    DESCRIBE_CUSTOMER_GATEWAYS = "ec2:DescribeCustomerGateways",
    DESCRIBE_DHCP_OPTIONS = "ec2:DescribeDhcpOptions",
    DESCRIBE_EGRESS_ONLY_INTERNET_GATEWAYS = "ec2:DescribeEgressOnlyInternetGateways",
    DESCRIBE_ELASTIC_GPUS = "ec2:DescribeElasticGpus",
    DESCRIBE_EXPORT_TASKS = "ec2:DescribeExportTasks",
    DESCRIBE_FLOW_LOGS = "ec2:DescribeFlowLogs",
    DESCRIBE_FPGA_IMAGE_ATTRIBUTE = "ec2:DescribeFpgaImageAttribute",
    DESCRIBE_FPGA_IMAGES = "ec2:DescribeFpgaImages",
    DESCRIBE_HOST_RESERVATION_OFFERINGS = "ec2:DescribeHostReservationOfferings",
    DESCRIBE_HOST_RESERVATIONS = "ec2:DescribeHostReservations",
    DESCRIBE_HOSTS = "ec2:DescribeHosts",
    DESCRIBE_IAM_INSTANCE_PROFILE_ASSOCIATIONS = "ec2:DescribeIamInstanceProfileAssociations",
    DESCRIBE_ID_FORMAT = "ec2:DescribeIdFormat",
    DESCRIBE_IDENTITY_ID_FORMAT = "ec2:DescribeIdentityIdFormat",
    DESCRIBE_IMAGE_ATTRIBUTE = "ec2:DescribeImageAttribute",
    DESCRIBE_IMAGES = "ec2:DescribeImages",
    DESCRIBE_IMPORT_IMAGE_TASKS = "ec2:DescribeImportImageTasks",
    DESCRIBE_IMPORT_SNAPSHOT_TASKS = "ec2:DescribeImportSnapshotTasks",
    DESCRIBE_INSTANCE_ATTRIBUTE = "ec2:DescribeInstanceAttribute",
    DESCRIBE_INSTANCE_CREDIT_SPECIFICATIONS = "ec2:DescribeInstanceCreditSpecifications",
    DESCRIBE_INSTANCE_STATUS = "ec2:DescribeInstanceStatus",
    DESCRIBE_INSTANCES = "ec2:DescribeInstances",
    DESCRIBE_INTERNET_GATEWAYS = "ec2:DescribeInternetGateways",
    DESCRIBE_KEY_PAIRS = "ec2:DescribeKeyPairs",
    DESCRIBE_LAUNCH_TEMPLATE_VERSIONS = "ec2:DescribeLaunchTemplateVersions",
    DESCRIBE_LAUNCH_TEMPLATES = "ec2:DescribeLaunchTemplates",
    DESCRIBE_MOVING_ADDRESSES = "ec2:DescribeMovingAddresses",
    DESCRIBE_NAT_GATEWAYS = "ec2:DescribeNatGateways",
    DESCRIBE_NETWORK_ACLS = "ec2:DescribeNetworkAcls",
    DESCRIBE_NETWORK_INTERFACE_ATTRIBUTE = "ec2:DescribeNetworkInterfaceAttribute",
    DESCRIBE_NETWORK_INTERFACE_PERMISSIONS = "ec2:DescribeNetworkInterfacePermissions",
    DESCRIBE_NETWORK_INTERFACES = "ec2:DescribeNetworkInterfaces",
    DESCRIBE_PLACEMENT_GROUPS = "ec2:DescribePlacementGroups",
    DESCRIBE_PREFIX_LISTS = "ec2:DescribePrefixLists",
    DESCRIBE_REGIONS = "ec2:DescribeRegions",
    DESCRIBE_RESERVED_INSTANCES = "ec2:DescribeReservedInstances",
    DESCRIBE_RESERVED_INSTANCES_LISTINGS = "ec2:DescribeReservedInstancesListings",
    DESCRIBE_RESERVED_INSTANCES_MODIFICATIONS = "ec2:DescribeReservedInstancesModifications",
    DESCRIBE_RESERVED_INSTANCES_OFFERINGS = "ec2:DescribeReservedInstancesOfferings",
    DESCRIBE_ROUTE_TABLES = "ec2:DescribeRouteTables",
    DESCRIBE_SCHEDULED_INSTANCE_AVAILABILITY = "ec2:DescribeScheduledInstanceAvailability",
    DESCRIBE_SCHEDULED_INSTANCES = "ec2:DescribeScheduledInstances",
    DESCRIBE_SECURITY_GROUP_REFERENCES = "ec2:DescribeSecurityGroupReferences",
    DESCRIBE_SECURITY_GROUPS = "ec2:DescribeSecurityGroups",
    DESCRIBE_SNAPSHOT_ATTRIBUTE = "ec2:DescribeSnapshotAttribute",
    DESCRIBE_SNAPSHOTS = "ec2:DescribeSnapshots",
    DESCRIBE_SPOT_DATAFEED_SUBSCRIPTION = "ec2:DescribeSpotDatafeedSubscription",
    DESCRIBE_SPOT_FLEET_INSTANCES = "ec2:DescribeSpotFleetInstances",
    DESCRIBE_SPOT_FLEET_REQUEST_HISTORY = "ec2:DescribeSpotFleetRequestHistory",
    DESCRIBE_SPOT_FLEET_REQUESTS = "ec2:DescribeSpotFleetRequests",
    DESCRIBE_SPOT_INSTANCE_REQUESTS = "ec2:DescribeSpotInstanceRequests",
    DESCRIBE_SPOT_PRICE_HISTORY = "ec2:DescribeSpotPriceHistory",
    DESCRIBE_STALE_SECURITY_GROUPS = "ec2:DescribeStaleSecurityGroups",
    DESCRIBE_SUBNETS = "ec2:DescribeSubnets",
    DESCRIBE_TAGS = "ec2:DescribeTags",
    DESCRIBE_VOLUME_ATTRIBUTE = "ec2:DescribeVolumeAttribute",
    DESCRIBE_VOLUME_STATUS = "ec2:DescribeVolumeStatus",
    DESCRIBE_VOLUMES = "ec2:DescribeVolumes",
    DESCRIBE_VOLUMES_MODIFICATIONS = "ec2:DescribeVolumesModifications",
    DESCRIBE_VPC_ATTRIBUTE = "ec2:DescribeVpcAttribute",
    DESCRIBE_VPC_CLASSIC_LINK = "ec2:DescribeVpcClassicLink",
    DESCRIBE_VPC_CLASSIC_LINK_DNS_SUPPORT = "ec2:DescribeVpcClassicLinkDnsSupport",
    DESCRIBE_VPC_ENDPOINT_CONNECTION_NOTIFICATIONS = "ec2:DescribeVpcEndpointConnectionNotifications",
    DESCRIBE_VPC_ENDPOINT_CONNECTIONS = "ec2:DescribeVpcEndpointConnections",
    DESCRIBE_VPC_ENDPOINT_SERVICE_CONFIGURATIONS = "ec2:DescribeVpcEndpointServiceConfigurations",
    DESCRIBE_VPC_ENDPOINT_SERVICE_PERMISSIONS = "ec2:DescribeVpcEndpointServicePermissions",
    DESCRIBE_VPC_ENDPOINT_SERVICES = "ec2:DescribeVpcEndpointServices",
    DESCRIBE_VPC_ENDPOINTS = "ec2:DescribeVpcEndpoints",
    DESCRIBE_VPC_PEERING_CONNECTIONS = "ec2:DescribeVpcPeeringConnections",
    DESCRIBE_VPCS = "ec2:DescribeVpcs",
    DESCRIBE_VPN_CONNECTIONS = "ec2:DescribeVpnConnections",
    DESCRIBE_VPN_GATEWAYS = "ec2:DescribeVpnGateways",
    DETACH_CLASSIC_LINK_VPC = "ec2:DetachClassicLinkVpc",
    DETACH_INTERNET_GATEWAY = "ec2:DetachInternetGateway",
    DETACH_NETWORK_INTERFACE = "ec2:DetachNetworkInterface",
    DETACH_VOLUME = "ec2:DetachVolume",
    DETACH_VPN_GATEWAY = "ec2:DetachVpnGateway",
    DISABLE_VGW_ROUTE_PROPAGATION = "ec2:DisableVgwRoutePropagation",
    DISABLE_VPC_CLASSIC_LINK = "ec2:DisableVpcClassicLink",
    DISABLE_VPC_CLASSIC_LINK_DNS_SUPPORT = "ec2:DisableVpcClassicLinkDnsSupport",
    DISASSOCIATE_ADDRESS = "ec2:DisassociateAddress",
    DISASSOCIATE_IAM_INSTANCE_PROFILE = "ec2:DisassociateIamInstanceProfile",
    DISASSOCIATE_ROUTE_TABLE = "ec2:DisassociateRouteTable",
    DISASSOCIATE_SUBNET_CIDR_BLOCK = "ec2:DisassociateSubnetCidrBlock",
    DISASSOCIATE_VPC_CIDR_BLOCK = "ec2:DisassociateVpcCidrBlock",
    ENABLE_VGW_ROUTE_PROPAGATION = "ec2:EnableVgwRoutePropagation",
    ENABLE_VOLUME_IO = "ec2:EnableVolumeIO",
    ENABLE_VPC_CLASSIC_LINK = "ec2:EnableVpcClassicLink",
    ENABLE_VPC_CLASSIC_LINK_DNS_SUPPORT = "ec2:EnableVpcClassicLinkDnsSupport",
    GET_CONSOLE_OUTPUT = "ec2:GetConsoleOutput",
    GET_CONSOLE_SCREENSHOT = "ec2:GetConsoleScreenshot",
    GET_HOST_RESERVATION_PURCHASE_PREVIEW = "ec2:GetHostReservationPurchasePreview",
    GET_LAUNCH_TEMPLATE_DATA = "ec2:GetLaunchTemplateData",
    GET_PASSWORD_DATA = "ec2:GetPasswordData",
    GET_RESERVED_INSTANCES_EXCHANGE_QUOTE = "ec2:GetReservedInstancesExchangeQuote",
    IMPORT_IMAGE = "ec2:ImportImage",
    IMPORT_INSTANCE = "ec2:ImportInstance",
    IMPORT_KEY_PAIR = "ec2:ImportKeyPair",
    IMPORT_SNAPSHOT = "ec2:ImportSnapshot",
    IMPORT_VOLUME = "ec2:ImportVolume",
    MODIFY_FPGA_IMAGE_ATTRIBUTE = "ec2:ModifyFpgaImageAttribute",
    MODIFY_HOSTS = "ec2:ModifyHosts",
    MODIFY_ID_FORMAT = "ec2:ModifyIdFormat",
    MODIFY_IDENTITY_ID_FORMAT = "ec2:ModifyIdentityIdFormat",
    MODIFY_IMAGE_ATTRIBUTE = "ec2:ModifyImageAttribute",
    MODIFY_INSTANCE_ATTRIBUTE = "ec2:ModifyInstanceAttribute",
    MODIFY_INSTANCE_CREDIT_SPECIFICATION = "ec2:ModifyInstanceCreditSpecification",
    MODIFY_INSTANCE_PLACEMENT = "ec2:ModifyInstancePlacement",
    MODIFY_LAUNCH_TEMPLATE = "ec2:ModifyLaunchTemplate",
    MODIFY_NETWORK_INTERFACE_ATTRIBUTE = "ec2:ModifyNetworkInterfaceAttribute",
    MODIFY_RESERVED_INSTANCES = "ec2:ModifyReservedInstances",
    MODIFY_SNAPSHOT_ATTRIBUTE = "ec2:ModifySnapshotAttribute",
    MODIFY_SPOT_FLEET_REQUEST = "ec2:ModifySpotFleetRequest",
    MODIFY_SUBNET_ATTRIBUTE = "ec2:ModifySubnetAttribute",
    MODIFY_VOLUME = "ec2:ModifyVolume",
    MODIFY_VOLUME_ATTRIBUTE = "ec2:ModifyVolumeAttribute",
    MODIFY_VPC_ATTRIBUTE = "ec2:ModifyVpcAttribute",
    MODIFY_VPC_ENDPOINT = "ec2:ModifyVpcEndpoint",
    MODIFY_VPC_ENDPOINT_CONNECTION_NOTIFICATION = "ec2:ModifyVpcEndpointConnectionNotification",
    MODIFY_VPC_ENDPOINT_SERVICE_CONFIGURATION = "ec2:ModifyVpcEndpointServiceConfiguration",
    MODIFY_VPC_ENDPOINT_SERVICE_PERMISSIONS = "ec2:ModifyVpcEndpointServicePermissions",
    MODIFY_VPC_PEERING_CONNECTION_OPTIONS = "ec2:ModifyVpcPeeringConnectionOptions",
    MODIFY_VPC_TENANCY = "ec2:ModifyVpcTenancy",
    MONITOR_INSTANCES = "ec2:MonitorInstances",
    MOVE_ADDRESS_TO_VPC = "ec2:MoveAddressToVpc",
    PURCHASE_HOST_RESERVATION = "ec2:PurchaseHostReservation",
    PURCHASE_RESERVED_INSTANCES_OFFERING = "ec2:PurchaseReservedInstancesOffering",
    PURCHASE_SCHEDULED_INSTANCES = "ec2:PurchaseScheduledInstances",
    REBOOT_INSTANCES = "ec2:RebootInstances",
    REGISTER_IMAGE = "ec2:RegisterImage",
    REJECT_VPC_ENDPOINT_CONNECTIONS = "ec2:RejectVpcEndpointConnections",
    REJECT_VPC_PEERING_CONNECTION = "ec2:RejectVpcPeeringConnection",
    RELEASE_ADDRESS = "ec2:ReleaseAddress",
    RELEASE_HOSTS = "ec2:ReleaseHosts",
    REPLACE_IAM_INSTANCE_PROFILE_ASSOCIATION = "ec2:ReplaceIamInstanceProfileAssociation",
    REPLACE_NETWORK_ACL_ASSOCIATION = "ec2:ReplaceNetworkAclAssociation",
    REPLACE_NETWORK_ACL_ENTRY = "ec2:ReplaceNetworkAclEntry",
    REPLACE_ROUTE = "ec2:ReplaceRoute",
    REPLACE_ROUTE_TABLE_ASSOCIATION = "ec2:ReplaceRouteTableAssociation",
    REPORT_INSTANCE_STATUS = "ec2:ReportInstanceStatus",
    REQUEST_SPOT_FLEET = "ec2:RequestSpotFleet",
    REQUEST_SPOT_INSTANCES = "ec2:RequestSpotInstances",
    RESET_FPGA_IMAGE_ATTRIBUTE = "ec2:ResetFpgaImageAttribute",
    RESET_IMAGE_ATTRIBUTE = "ec2:ResetImageAttribute",
    RESET_INSTANCE_ATTRIBUTE = "ec2:ResetInstanceAttribute",
    RESET_NETWORK_INTERFACE_ATTRIBUTE = "ec2:ResetNetworkInterfaceAttribute",
    RESET_SNAPSHOT_ATTRIBUTE = "ec2:ResetSnapshotAttribute",
    RESTORE_ADDRESS_TO_CLASSIC = "ec2:RestoreAddressToClassic",
    REVOKE_SECURITY_GROUP_EGRESS = "ec2:RevokeSecurityGroupEgress",
    REVOKE_SECURITY_GROUP_INGRESS = "ec2:RevokeSecurityGroupIngress",
    RUN_INSTANCES = "ec2:RunInstances",
    RUN_SCHEDULED_INSTANCES = "ec2:RunScheduledInstances",
    START_INSTANCES = "ec2:StartInstances",
    STOP_INSTANCES = "ec2:StopInstances",
    TERMINATE_INSTANCES = "ec2:TerminateInstances",
    UNASSIGN_ADDRESSES = "ec2:UnassignIpv6Addresses",
    UNASSIGN_PRIVATE_IP_ADDRESSES = "ec2:UnassignPrivateIpAddresses",
    UNMONITOR_INSTANCES = "ec2:UnmonitorInstances",
    UPDATE_SECURITY_GROUP_RULE_DESCRIPTIONS_EGRESS = "ec2:UpdateSecurityGroupRuleDescriptionsEgress",
    UPDATE_SECURITY_GROUP_RULE_DESCRIPTIONS_INGRESS = "ec2:UpdateSecurityGroupRuleDescriptionsIngress"
}

/** Actions for Amazon EC2 Container Registry
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2containerregistry.html
  */
export enum ECR {
    BATCH_CHECK_LAYER_AVAILABILITY = "ecr:BatchCheckLayerAvailability",
    BATCH_DELETE_IMAGE = "ecr:BatchDeleteImage",
    BATCH_GET_IMAGE = "ecr:BatchGetImage",
    COMPLETE_LAYER_UPLOAD = "ecr:CompleteLayerUpload",
    CREATE_REPOSITORY = "ecr:CreateRepository",
    DELETE_REPOSITORY = "ecr:DeleteRepository",
    DELETE_REPOSITORY_POLICY = "ecr:DeleteRepositoryPolicy",
    DESCRIBE_IMAGES = "ecr:DescribeImages",
    DESCRIBE_REPOSITORIES = "ecr:DescribeRepositories",
    GET_AUTHORIZATION_TOKEN = "ecr:GetAuthorizationToken",
    GET_DOWNLOAD_URL_FOR_LAYER = "ecr:GetDownloadUrlForLayer",
    GET_REPOSITORY_POLICY = "ecr:GetRepositoryPolicy",
    INITIATE_LAYER_UPLOAD = "ecr:InitiateLayerUpload",
    LIST_IMAGES = "ecr:ListImages",
    PUT_IMAGE = "ecr:PutImage",
    SET_REPOSITORY_POLICY = "ecr:SetRepositoryPolicy",
    UPLOAD_LAYER_PART = "ecr:UploadLayerPart"
}

/** Actions for Amazon EC2 Container Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2containerservice.html
  */
export enum ECS {
    CREATE_CLUSTER = "ecs:CreateCluster",
    CREATE_SERVICE = "ecs:CreateService",
    DELETE_CLUSTER = "ecs:DeleteCluster",
    DELETE_SERVICE = "ecs:DeleteService",
    DEREGISTER_CONTAINER_INSTANCE = "ecs:DeregisterContainerInstance",
    DEREGISTER_TASK_DEFINITION = "ecs:DeregisterTaskDefinition",
    DESCRIBE_CLUSTERS = "ecs:DescribeClusters",
    DESCRIBE_CONTAINER_INSTANCES = "ecs:DescribeContainerInstances",
    DESCRIBE_SERVICES = "ecs:DescribeServices",
    DESCRIBE_TASK_DEFINITION = "ecs:DescribeTaskDefinition",
    DESCRIBE_TASKS = "ecs:DescribeTasks",
    DISCOVER_POLL_ENDPOINT = "ecs:DiscoverPollEndpoint",
    LIST_CLUSTERS = "ecs:ListClusters",
    LIST_CONTAINER_INSTANCES = "ecs:ListContainerInstances",
    LIST_SERVICES = "ecs:ListServices",
    LIST_TASK_DEFINITION_FAMILIES = "ecs:ListTaskDefinitionFamilies",
    LIST_TASK_DEFINITIONS = "ecs:ListTaskDefinitions",
    LIST_TASKS = "ecs:ListTasks",
    POLL = "ecs:Poll",
    REGISTER_CONTAINER_INSTANCE = "ecs:RegisterContainerInstance",
    REGISTER_TASK_DEFINITION = "ecs:RegisterTaskDefinition",
    RUN_TASK = "ecs:RunTask",
    START_TASK = "ecs:StartTask",
    START_TELEMETRY_SESSION = "ecs:StartTelemetrySession",
    STOP_TASK = "ecs:StopTask",
    SUBMIT_CONTAINER_STATE_CHANGE = "ecs:SubmitContainerStateChange",
    SUBMIT_TASK_STATE_CHANGE = "ecs:SubmitTaskStateChange",
    UPDATE_CONTAINER_AGENT = "ecs:UpdateContainerAgent",
    UPDATE_CONTAINER_INSTANCES_STATE = "ecs:UpdateContainerInstancesState",
    UPDATE_SERVICE = "ecs:UpdateService"
}

/** Actions for Amazon ElastiCache
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticache.html
  */
export enum ElastiCache {
    ADD_TAGS_TO_RESOURCE = "elasticache:AddTagsToResource",
    AUTHORIZE_CACHE_SECURITY_GROUP_INGRESS = "elasticache:AuthorizeCacheSecurityGroupIngress",
    COPY_SNAPSHOT = "elasticache:CopySnapshot",
    CREATE_CACHE_CLUSTER = "elasticache:CreateCacheCluster",
    CREATE_CACHE_PARAMETER_GROUP = "elasticache:CreateCacheParameterGroup",
    CREATE_CACHE_SECURITY_GROUP = "elasticache:CreateCacheSecurityGroup",
    CREATE_CACHE_SUBNET_GROUP = "elasticache:CreateCacheSubnetGroup",
    CREATE_REPLICATION_GROUP = "elasticache:CreateReplicationGroup",
    CREATE_SNAPSHOT = "elasticache:CreateSnapshot",
    DELETE_CACHE_CLUSTER = "elasticache:DeleteCacheCluster",
    DELETE_CACHE_PARAMETER_GROUP = "elasticache:DeleteCacheParameterGroup",
    DELETE_CACHE_SECURITY_GROUP = "elasticache:DeleteCacheSecurityGroup",
    DELETE_CACHE_SUBNET_GROUP = "elasticache:DeleteCacheSubnetGroup",
    DELETE_REPLICATION_GROUP = "elasticache:DeleteReplicationGroup",
    DELETE_SNAPSHOT = "elasticache:DeleteSnapshot",
    DESCRIBE_CACHE_CLUSTERS = "elasticache:DescribeCacheClusters",
    DESCRIBE_CACHE_ENGINE_VERSIONS = "elasticache:DescribeCacheEngineVersions",
    DESCRIBE_CACHE_PARAMETER_GROUPS = "elasticache:DescribeCacheParameterGroups",
    DESCRIBE_CACHE_PARAMETERS = "elasticache:DescribeCacheParameters",
    DESCRIBE_CACHE_SECURITY_GROUPS = "elasticache:DescribeCacheSecurityGroups",
    DESCRIBE_CACHE_SUBNET_GROUPS = "elasticache:DescribeCacheSubnetGroups",
    DESCRIBE_ENGINE_DEFAULT_PARAMETERS = "elasticache:DescribeEngineDefaultParameters",
    DESCRIBE_EVENTS = "elasticache:DescribeEvents",
    DESCRIBE_REPLICATION_GROUPS = "elasticache:DescribeReplicationGroups",
    DESCRIBE_RESERVED_CACHE_NODES = "elasticache:DescribeReservedCacheNodes",
    DESCRIBE_RESERVED_CACHE_NODES_OFFERINGS = "elasticache:DescribeReservedCacheNodesOfferings",
    DESCRIBE_SNAPSHOTS = "elasticache:DescribeSnapshots",
    LIST_ALLOWED_NODE_TYPE_MODIFICATIONS = "elasticache:ListAllowedNodeTypeModifications",
    LIST_TAGS_FOR_RESOURCE = "elasticache:ListTagsForResource",
    MODIFY_CACHE_CLUSTER = "elasticache:ModifyCacheCluster",
    MODIFY_CACHE_PARAMETER_GROUP = "elasticache:ModifyCacheParameterGroup",
    MODIFY_CACHE_SUBNET_GROUP = "elasticache:ModifyCacheSubnetGroup",
    MODIFY_REPLICATION_GROUP = "elasticache:ModifyReplicationGroup",
    PURCHASE_RESERVED_CACHE_NODES_OFFERING = "elasticache:PurchaseReservedCacheNodesOffering",
    REBOOT_CACHE_CLUSTER = "elasticache:RebootCacheCluster",
    REMOVE_TAGS_FROM_RESOURCE = "elasticache:RemoveTagsFromResource",
    RESET_CACHE_PARAMETER_GROUP = "elasticache:ResetCacheParameterGroup",
    REVOKE_CACHE_SECURITY_GROUP_INGRESS = "elasticache:RevokeCacheSecurityGroupIngress"
}

/** Actions for Amazon Elastic File System
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticfilesystem.html
  */
export enum ElasticFileSystem {
    CREATE_FILE_SYSTEM = "elasticfilesystem:CreateFileSystem",
    CREATE_MOUNT_TARGET = "elasticfilesystem:CreateMountTarget",
    CREATE_TAGS = "elasticfilesystem:CreateTags",
    DELETE_FILE_SYSTEM = "elasticfilesystem:DeleteFileSystem",
    DELETE_MOUNT_TARGET = "elasticfilesystem:DeleteMountTarget",
    DELETE_TAGS = "elasticfilesystem:DeleteTags",
    DESCRIBE_FILE_SYSTEMS = "elasticfilesystem:DescribeFileSystems",
    DESCRIBE_MOUNT_TARGET_SECURITY_GROUPS = "elasticfilesystem:DescribeMountTargetSecurityGroups",
    DESCRIBE_MOUNT_TARGETS = "elasticfilesystem:DescribeMountTargets",
    DESCRIBE_TAGS = "elasticfilesystem:DescribeTags",
    MODIFY_MOUNT_TARGET_SECURITY_GROUPS = "elasticfilesystem:ModifyMountTargetSecurityGroups"
}

/** Actions for Amazon Elastic MapReduce
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticmapreduce.html
  */
export enum ElasticMapReduce {
    ADD_INSTANCE_GROUPS = "elasticmapreduce:AddInstanceGroups",
    ADD_JOB_FLOW_STEPS = "elasticmapreduce:AddJobFlowSteps",
    ADD_TAGS = "elasticmapreduce:AddTags",
    CANCEL_STEPS = "elasticmapreduce:CancelSteps",
    CREATE_SECURITY_CONFIGURATION = "elasticmapreduce:CreateSecurityConfiguration",
    DELETE_SECURITY_CONFIGURATION = "elasticmapreduce:DeleteSecurityConfiguration",
    DESCRIBE_CLUSTER = "elasticmapreduce:DescribeCluster",
    DESCRIBE_JOB_FLOWS = "elasticmapreduce:DescribeJobFlows",
    DESCRIBE_SECURITY_CONFIGURATION = "elasticmapreduce:DescribeSecurityConfiguration",
    DESCRIBE_STEP = "elasticmapreduce:DescribeStep",
    LIST_BOOTSTRAP_ACTIONS = "elasticmapreduce:ListBootstrapActions",
    LIST_CLUSTERS = "elasticmapreduce:ListClusters",
    LIST_INSTANCE_GROUPS = "elasticmapreduce:ListInstanceGroups",
    LIST_INSTANCES = "elasticmapreduce:ListInstances",
    LIST_SECURITY_CONFIGURATIONS = "elasticmapreduce:ListSecurityConfigurations",
    LIST_STEPS = "elasticmapreduce:ListSteps",
    MODIFY_INSTANCE_GROUPS = "elasticmapreduce:ModifyInstanceGroups",
    PUT_AUTO_SCALING_POLICY = "elasticmapreduce:PutAutoScalingPolicy",
    REMOVE_AUTO_SCALING_POLICY = "elasticmapreduce:RemoveAutoScalingPolicy",
    REMOVE_TAGS = "elasticmapreduce:RemoveTags",
    RUN_JOB_FLOW = "elasticmapreduce:RunJobFlow",
    SET_TERMINATION_PROTECTION = "elasticmapreduce:SetTerminationProtection",
    SET_VISIBLE_TO_ALL_USERS = "elasticmapreduce:SetVisibleToAllUsers",
    TERMINATE_JOB_FLOWS = "elasticmapreduce:TerminateJobFlows",
    VIEW_EVENTS_FROM_ALL_CLUSTERS_IN_CONSOLE = "elasticmapreduce:ViewEventsFromAllClustersInConsole"
}

/** Actions for Amazon Elastic Transcoder
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelastictranscoder.html
  */
export enum ElasticTranscoder {
    CANCEL_JOB = "elastictranscoder:CancelJob",
    CREATE_JOB = "elastictranscoder:CreateJob",
    CREATE_PIPELINE = "elastictranscoder:CreatePipeline",
    CREATE_PRESET = "elastictranscoder:CreatePreset",
    DELETE_PIPELINE = "elastictranscoder:DeletePipeline",
    DELETE_PRESET = "elastictranscoder:DeletePreset",
    LIST_JOBS_BY_PIPELINE = "elastictranscoder:ListJobsByPipeline",
    LIST_JOBS_BY_STATUS = "elastictranscoder:ListJobsByStatus",
    LIST_PIPELINES = "elastictranscoder:ListPipelines",
    LIST_PRESETS = "elastictranscoder:ListPresets",
    READ_JOB = "elastictranscoder:ReadJob",
    READ_PIPELINE = "elastictranscoder:ReadPipeline",
    READ_PRESET = "elastictranscoder:ReadPreset",
    TEST_ROLE = "elastictranscoder:TestRole",
    UPDATE_PIPELINE = "elastictranscoder:UpdatePipeline",
    UPDATE_PIPELINE_NOTIFICATIONS = "elastictranscoder:UpdatePipelineNotifications",
    UPDATE_PIPELINE_STATUS = "elastictranscoder:UpdatePipelineStatus"
}

/** Actions for Amazon Elasticsearch Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticsearchservice.html
  */
export enum ES {
    ADD_TAGS = "es:AddTags",
    CREATE_ELASTICSEARCH_DOMAIN = "es:CreateElasticsearchDomain",
    DELETE_ELASTICSEARCH_DOMAIN = "es:DeleteElasticsearchDomain",
    DESCRIBE_ELASTICSEARCH_DOMAIN = "es:DescribeElasticsearchDomain",
    DESCRIBE_ELASTICSEARCH_DOMAIN_CONFIG = "es:DescribeElasticsearchDomainConfig",
    DESCRIBE_ELASTICSEARCH_DOMAINS = "es:DescribeElasticsearchDomains",
    ES_HTTP_DELETE = "es:ESHttpDelete",
    ES_HTTP_GET = "es:ESHttpGet",
    ES_HTTP_HEAD = "es:ESHttpHead",
    ES_HTTP_POST = "es:ESHttpPost",
    ES_HTTP_PUT = "es:ESHttpPut",
    LIST_DOMAIN_NAMES = "es:ListDomainNames",
    LIST_TAGS = "es:ListTags",
    REMOVE_TAGS = "es:RemoveTags",
    UPDATE_ELASTICSEARCH_DOMAIN_CONFIG = "es:UpdateElasticsearchDomainConfig"
}

/** Actions for Amazon FreeRTOS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfreertos.html
  */
export enum FreeRTOS {
    CREATE_SOFTWARE_CONFIGURATION = "freertos:CreateSoftwareConfiguration",
    DELETE_SOFTWARE_CONFIGURATION = "freertos:DeleteSoftwareConfiguration",
    DESCRIBE_HARDWARE_PLATFORM = "freertos:DescribeHardwarePlatform",
    DESCRIBE_SOFTWARE_CONFIGURATION = "freertos:DescribeSoftwareConfiguration",
    GET_SOFTWARE_URL = "freertos:GetSoftwareURL",
    GET_SOFTWARE_URL_FOR_CONFIGURATION = "freertos:GetSoftwareURLForConfiguration",
    LIST_FREE_RTOS_VERSIONS = "freertos:ListFreeRTOSVersions",
    LIST_HARDWARE_PLATFORMS = "freertos:ListHardwarePlatforms",
    LIST_HARDWARE_VENDORS = "freertos:ListHardwareVendors",
    LIST_SOFTWARE_CONFIGURATIONS = "freertos:ListSoftwareConfigurations",
    UPDATE_SOFTWARE_CONFIGURATION = "freertos:UpdateSoftwareConfiguration"
}

/** Actions for Amazon GameLift
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazongamelift.html
  */
export enum GameLift {
    CREATE_ALIAS = "gamelift:CreateAlias",
    CREATE_BUILD = "gamelift:CreateBuild",
    CREATE_FLEET = "gamelift:CreateFleet",
    CREATE_GAME_SESSION = "gamelift:CreateGameSession",
    CREATE_PLAYER_SESSION = "gamelift:CreatePlayerSession",
    CREATE_PLAYER_SESSIONS = "gamelift:CreatePlayerSessions",
    DELETE_ALIAS = "gamelift:DeleteAlias",
    DELETE_BUILD = "gamelift:DeleteBuild",
    DELETE_FLEET = "gamelift:DeleteFleet",
    DELETE_SCALING_POLICY = "gamelift:DeleteScalingPolicy",
    DESCRIBE_ALIAS = "gamelift:DescribeAlias",
    DESCRIBE_BUILD = "gamelift:DescribeBuild",
    DESCRIBE_INSTANCE_LIMITS = "gamelift:DescribeEC2InstanceLimits",
    DESCRIBE_FLEET_ATTRIBUTES = "gamelift:DescribeFleetAttributes",
    DESCRIBE_FLEET_CAPACITY = "gamelift:DescribeFleetCapacity",
    DESCRIBE_FLEET_EVENTS = "gamelift:DescribeFleetEvents",
    DESCRIBE_FLEET_PORT_SETTINGS = "gamelift:DescribeFleetPortSettings",
    DESCRIBE_FLEET_UTILIZATION = "gamelift:DescribeFleetUtilization",
    DESCRIBE_GAME_SESSION_DETAILS = "gamelift:DescribeGameSessionDetails",
    DESCRIBE_GAME_SESSIONS = "gamelift:DescribeGameSessions",
    DESCRIBE_INSTANCES = "gamelift:DescribeInstances",
    DESCRIBE_PLAYER_SESSIONS = "gamelift:DescribePlayerSessions",
    DESCRIBE_RUNTIME_CONFIGURATION = "gamelift:DescribeRuntimeConfiguration",
    DESCRIBE_SCALING_POLICIES = "gamelift:DescribeScalingPolicies",
    GET_GAME_SESSION_LOG_URL = "gamelift:GetGameSessionLogUrl",
    GET_INSTANCE_ACCESS = "gamelift:GetInstanceAccess",
    LIST_ALIASES = "gamelift:ListAliases",
    LIST_BUILDS = "gamelift:ListBuilds",
    LIST_FLEETS = "gamelift:ListFleets",
    PUT_SCALING_POLICY = "gamelift:PutScalingPolicy",
    REQUEST_UPLOAD_CREDENTIALS = "gamelift:RequestUploadCredentials",
    RESOLVE_ALIAS = "gamelift:ResolveAlias",
    SEARCH_GAME_SESSIONS = "gamelift:SearchGameSessions",
    UPDATE_ALIAS = "gamelift:UpdateAlias",
    UPDATE_BUILD = "gamelift:UpdateBuild",
    UPDATE_FLEET_ATTRIBUTES = "gamelift:UpdateFleetAttributes",
    UPDATE_FLEET_CAPACITY = "gamelift:UpdateFleetCapacity",
    UPDATE_FLEET_PORT_SETTINGS = "gamelift:UpdateFleetPortSettings",
    UPDATE_GAME_SESSION = "gamelift:UpdateGameSession",
    UPDATE_RUNTIME_CONFIGURATION = "gamelift:UpdateRuntimeConfiguration"
}

/** Actions for Amazon Glacier
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonglacier.html
  */
export enum Glacier {
    ABORT_MULTIPART_UPLOAD = "glacier:AbortMultipartUpload",
    ABORT_VAULT_LOCK = "glacier:AbortVaultLock",
    ADD_TAGS_TO_VAULT = "glacier:AddTagsToVault",
    COMPLETE_MULTIPART_UPLOAD = "glacier:CompleteMultipartUpload",
    COMPLETE_VAULT_LOCK = "glacier:CompleteVaultLock",
    CREATE_VAULT = "glacier:CreateVault",
    DELETE_ARCHIVE = "glacier:DeleteArchive",
    DELETE_VAULT = "glacier:DeleteVault",
    DELETE_VAULT_ACCESS_POLICY = "glacier:DeleteVaultAccessPolicy",
    DELETE_VAULT_NOTIFICATIONS = "glacier:DeleteVaultNotifications",
    DESCRIBE_JOB = "glacier:DescribeJob",
    DESCRIBE_VAULT = "glacier:DescribeVault",
    GET_DATA_RETRIEVAL_POLICY = "glacier:GetDataRetrievalPolicy",
    GET_JOB_OUTPUT = "glacier:GetJobOutput",
    GET_VAULT_ACCESS_POLICY = "glacier:GetVaultAccessPolicy",
    GET_VAULT_LOCK = "glacier:GetVaultLock",
    GET_VAULT_NOTIFICATIONS = "glacier:GetVaultNotifications",
    INITIATE_JOB = "glacier:InitiateJob",
    INITIATE_MULTIPART_UPLOAD = "glacier:InitiateMultipartUpload",
    INITIATE_VAULT_LOCK = "glacier:InitiateVaultLock",
    LIST_JOBS = "glacier:ListJobs",
    LIST_MULTIPART_UPLOADS = "glacier:ListMultipartUploads",
    LIST_PARTS = "glacier:ListParts",
    LIST_PROVISIONED_CAPACITY = "glacier:ListProvisionedCapacity",
    LIST_TAGS_FOR_VAULT = "glacier:ListTagsForVault",
    LIST_VAULTS = "glacier:ListVaults",
    PURCHASE_PROVISIONED_CAPACITY = "glacier:PurchaseProvisionedCapacity",
    REMOVE_TAGS_FROM_VAULT = "glacier:RemoveTagsFromVault",
    SET_DATA_RETRIEVAL_POLICY = "glacier:SetDataRetrievalPolicy",
    SET_VAULT_ACCESS_POLICY = "glacier:SetVaultAccessPolicy",
    SET_VAULT_NOTIFICATIONS = "glacier:SetVaultNotifications",
    UPLOAD_ARCHIVE = "glacier:UploadArchive",
    UPLOAD_MULTIPART_PART = "glacier:UploadMultipartPart"
}

/** Actions for Amazon GuardDuty
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonguardduty.html
  */
export enum GuardDuty {
    ACCEPT_INVITATION = "guardduty:AcceptInvitation",
    ARCHIVE_FINDINGS = "guardduty:ArchiveFindings",
    CREATE_DETECTOR = "guardduty:CreateDetector",
    CREATE_IP_SET = "guardduty:CreateIPSet",
    CREATE_MEMBERS = "guardduty:CreateMembers",
    CREATE_SAMPLE_FINDINGS = "guardduty:CreateSampleFindings",
    CREATE_THREAT_INTEL_SET = "guardduty:CreateThreatIntelSet",
    DECLINE_INVITATIONS = "guardduty:DeclineInvitations",
    DELETE_DETECTOR = "guardduty:DeleteDetector",
    DELETE_IP_SET = "guardduty:DeleteIPSet",
    DELETE_INVITATIONS = "guardduty:DeleteInvitations",
    DELETE_MEMBERS = "guardduty:DeleteMembers",
    DELETE_THREAT_INTEL_SET = "guardduty:DeleteThreatIntelSet",
    DISASSOCIATE_FROM_MASTER_ACCOUNT = "guardduty:DisassociateFromMasterAccount",
    DISASSOCIATE_MEMBERS = "guardduty:DisassociateMembers",
    GET_DETECTOR = "guardduty:GetDetector",
    GET_FINDINGS = "guardduty:GetFindings",
    GET_FINDINGS_STATISTICS = "guardduty:GetFindingsStatistics",
    GET_IP_SET = "guardduty:GetIPSet",
    GET_INVITATIONS_COUNT = "guardduty:GetInvitationsCount",
    GET_MASTER_ACCOUNT = "guardduty:GetMasterAccount",
    GET_MEMBERS = "guardduty:GetMembers",
    GET_THREAT_INTEL_SET = "guardduty:GetThreatIntelSet",
    INVITE_MEMBERS = "guardduty:InviteMembers",
    LIST_DETECTORS = "guardduty:ListDetectors",
    LIST_FINDINGS = "guardduty:ListFindings",
    LIST_IP_SETS = "guardduty:ListIPSets",
    LIST_INVITATIONS = "guardduty:ListInvitations",
    LIST_MEMBERS = "guardduty:ListMembers",
    LIST_THREAT_INTEL_SETS = "guardduty:ListThreatIntelSets",
    START_MONITORING_MEMBERS = "guardduty:StartMonitoringMembers",
    STOP_MONITORING_MEMBERS = "guardduty:StopMonitoringMembers",
    UNARCHIVE_FINDINGS = "guardduty:UnarchiveFindings",
    UPDATE_DETECTOR = "guardduty:UpdateDetector",
    UPDATE_FINDINGS_FEEDBACK = "guardduty:UpdateFindingsFeedback",
    UPDATE_IP_SET = "guardduty:UpdateIPSet",
    UPDATE_THREAT_INTEL_SET = "guardduty:UpdateThreatIntelSet"
}

/** Actions for Amazon Inspector
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoninspector.html
  */
export enum Inspector {
    ADD_ATTRIBUTES_TO_FINDINGS = "inspector:AddAttributesToFindings",
    CREATE_ASSESSMENT_TARGET = "inspector:CreateAssessmentTarget",
    CREATE_ASSESSMENT_TEMPLATE = "inspector:CreateAssessmentTemplate",
    CREATE_RESOURCE_GROUP = "inspector:CreateResourceGroup",
    DELETE_ASSESSMENT_RUN = "inspector:DeleteAssessmentRun",
    DELETE_ASSESSMENT_TARGET = "inspector:DeleteAssessmentTarget",
    DELETE_ASSESSMENT_TEMPLATE = "inspector:DeleteAssessmentTemplate",
    DESCRIBE_ASSESSMENT_RUNS = "inspector:DescribeAssessmentRuns",
    DESCRIBE_ASSESSMENT_TARGETS = "inspector:DescribeAssessmentTargets",
    DESCRIBE_ASSESSMENT_TEMPLATES = "inspector:DescribeAssessmentTemplates",
    DESCRIBE_CROSS_ACCOUNT_ACCESS_ROLE = "inspector:DescribeCrossAccountAccessRole",
    DESCRIBE_FINDINGS = "inspector:DescribeFindings",
    DESCRIBE_RESOURCE_GROUPS = "inspector:DescribeResourceGroups",
    DESCRIBE_RULES_PACKAGES = "inspector:DescribeRulesPackages",
    GET_TELEMETRY_METADATA = "inspector:GetTelemetryMetadata",
    LIST_ASSESSMENT_RUN_AGENTS = "inspector:ListAssessmentRunAgents",
    LIST_ASSESSMENT_RUNS = "inspector:ListAssessmentRuns",
    LIST_ASSESSMENT_TARGETS = "inspector:ListAssessmentTargets",
    LIST_ASSESSMENT_TEMPLATES = "inspector:ListAssessmentTemplates",
    LIST_EVENT_SUBSCRIPTIONS = "inspector:ListEventSubscriptions",
    LIST_FINDINGS = "inspector:ListFindings",
    LIST_RULES_PACKAGES = "inspector:ListRulesPackages",
    LIST_TAGS_FOR_RESOURCE = "inspector:ListTagsForResource",
    PREVIEW_AGENTS = "inspector:PreviewAgents",
    REGISTER_CROSS_ACCOUNT_ACCESS_ROLE = "inspector:RegisterCrossAccountAccessRole",
    REMOVE_ATTRIBUTES_FROM_FINDINGS = "inspector:RemoveAttributesFromFindings",
    SET_TAGS_FOR_RESOURCE = "inspector:SetTagsForResource",
    START_ASSESSMENT_RUN = "inspector:StartAssessmentRun",
    STOP_ASSESSMENT_RUN = "inspector:StopAssessmentRun",
    SUBSCRIBE_TO_EVENT = "inspector:SubscribeToEvent",
    UNSUBSCRIBE_FROM_EVENT = "inspector:UnsubscribeFromEvent",
    UPDATE_ASSESSMENT_TARGET = "inspector:UpdateAssessmentTarget"
}

/** Actions for Amazon Kinesis
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesis.html
  */
export enum Kinesis {
    ADD_TAGS_TO_STREAM = "kinesis:AddTagsToStream",
    CREATE_STREAM = "kinesis:CreateStream",
    DECREASE_STREAM_RETENTION_PERIOD = "kinesis:DecreaseStreamRetentionPeriod",
    DELETE_STREAM = "kinesis:DeleteStream",
    DESCRIBE_LIMITS = "kinesis:DescribeLimits",
    DESCRIBE_STREAM = "kinesis:DescribeStream",
    DISABLE_ENHANCED_MONITORING = "kinesis:DisableEnhancedMonitoring",
    ENABLE_ENHANCED_MONITORING = "kinesis:EnableEnhancedMonitoring",
    GET_RECORDS = "kinesis:GetRecords",
    GET_SHARD_ITERATOR = "kinesis:GetShardIterator",
    INCREASE_STREAM_RETENTION_PERIOD = "kinesis:IncreaseStreamRetentionPeriod",
    LIST_STREAMS = "kinesis:ListStreams",
    LIST_TAGS_FOR_STREAM = "kinesis:ListTagsForStream",
    MERGE_SHARDS = "kinesis:MergeShards",
    PUT_RECORD = "kinesis:PutRecord",
    PUT_RECORDS = "kinesis:PutRecords",
    REMOVE_TAGS_FROM_STREAM = "kinesis:RemoveTagsFromStream",
    SPLIT_SHARD = "kinesis:SplitShard",
    UPDATE_SHARD_COUNT = "kinesis:UpdateShardCount"
}

/** Actions for Amazon Kinesis Analytics
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisanalytics.html
  */
export enum KinesisAnalytics {
    ADD_APPLICATION_INPUT = "kinesisanalytics:AddApplicationInput",
    ADD_APPLICATION_OUTPUT = "kinesisanalytics:AddApplicationOutput",
    ADD_APPLICATION_REFERENCE_DATA_SOURCE = "kinesisanalytics:AddApplicationReferenceDataSource",
    CREATE_APPLICATION = "kinesisanalytics:CreateApplication",
    DELETE_APPLICATION = "kinesisanalytics:DeleteApplication",
    DELETE_APPLICATION_OUTPUT = "kinesisanalytics:DeleteApplicationOutput",
    DELETE_APPLICATION_REFERENCE_DATA_SOURCE = "kinesisanalytics:DeleteApplicationReferenceDataSource",
    DESCRIBE_APPLICATION = "kinesisanalytics:DescribeApplication",
    DISCOVER_INPUT_SCHEMA = "kinesisanalytics:DiscoverInputSchema",
    LIST_APPLICATIONS = "kinesisanalytics:ListApplications",
    START_APPLICATION = "kinesisanalytics:StartApplication",
    STOP_APPLICATION = "kinesisanalytics:StopApplication",
    UPDATE_APPLICATION = "kinesisanalytics:UpdateApplication"
}

/** Actions for Amazon Kinesis Firehose
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisfirehose.html
  */
export enum Firehose {
    CREATE_DELIVERY_STREAM = "firehose:CreateDeliveryStream",
    DELETE_DELIVERY_STREAM = "firehose:DeleteDeliveryStream",
    DESCRIBE_DELIVERY_STREAM = "firehose:DescribeDeliveryStream",
    LIST_DELIVERY_STREAMS = "firehose:ListDeliveryStreams",
    PUT_RECORD = "firehose:PutRecord",
    PUT_RECORD_BATCH = "firehose:PutRecordBatch",
    UPDATE_DESTINATION = "firehose:UpdateDestination"
}

/** Actions for Amazon Kinesis Video Streams
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisvideostreams.html
  */
export enum KinesisVideo {
    CREATE_STREAM = "kinesisvideo:CreateStream",
    DELETE_STREAM = "kinesisvideo:DeleteStream",
    DESCRIBE_STREAM = "kinesisvideo:DescribeStream",
    GET_DATA_ENDPOINT = "kinesisvideo:GetDataEndpoint",
    GET_MEDIA = "kinesisvideo:GetMedia",
    GET_MEDIA_FOR_FRAGMENT_LIST = "kinesisvideo:GetMediaForFragmentList",
    LIST_FRAGMENTS = "kinesisvideo:ListFragments",
    LIST_STREAMS = "kinesisvideo:ListStreams",
    LIST_TAGS_FOR_STREAM = "kinesisvideo:ListTagsForStream",
    PUT_MEDIA = "kinesisvideo:PutMedia",
    TAG_STREAM = "kinesisvideo:TagStream",
    UNTAG_STREAM = "kinesisvideo:UntagStream",
    UPDATE_DATA_RETENTION = "kinesisvideo:UpdateDataRetention",
    UPDATE_STREAM = "kinesisvideo:UpdateStream"
}

/** Actions for Amazon Lex
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlex.html
  */
export enum Lex {
    CREATE_BOT_VERSION = "lex:CreateBotVersion",
    CREATE_INTENT_VERSION = "lex:CreateIntentVersion",
    CREATE_SLOT_TYPE_VERSION = "lex:CreateSlotTypeVersion",
    DELETE_BOT = "lex:DeleteBot",
    DELETE_BOT_ALIAS = "lex:DeleteBotAlias",
    DELETE_BOT_CHANNEL_ASSOCIATION = "lex:DeleteBotChannelAssociation",
    DELETE_BOT_VERSION = "lex:DeleteBotVersion",
    DELETE_INTENT = "lex:DeleteIntent",
    DELETE_INTENT_VERSION = "lex:DeleteIntentVersion",
    DELETE_SLOT_TYPE = "lex:DeleteSlotType",
    DELETE_SLOT_TYPE_VERSION = "lex:DeleteSlotTypeVersion",
    DELETE_UTTERANCES = "lex:DeleteUtterances",
    GET_BOT = "lex:GetBot",
    GET_BOT_ALIAS = "lex:GetBotAlias",
    GET_BOT_ALIASES = "lex:GetBotAliases",
    GET_BOT_CHANNEL_ASSOCIATION = "lex:GetBotChannelAssociation",
    GET_BOT_CHANNEL_ASSOCIATIONS = "lex:GetBotChannelAssociations",
    GET_BOT_VERSIONS = "lex:GetBotVersions",
    GET_BOTS = "lex:GetBots",
    GET_BUILTIN_INTENT = "lex:GetBuiltinIntent",
    GET_BUILTIN_INTENTS = "lex:GetBuiltinIntents",
    GET_BUILTIN_SLOT_TYPES = "lex:GetBuiltinSlotTypes",
    GET_INTENT = "lex:GetIntent",
    GET_INTENT_VERSIONS = "lex:GetIntentVersions",
    GET_INTENTS = "lex:GetIntents",
    GET_SLOT_TYPE = "lex:GetSlotType",
    GET_SLOT_TYPE_VERSIONS = "lex:GetSlotTypeVersions",
    GET_SLOT_TYPES = "lex:GetSlotTypes",
    GET_UTTERANCES_VIEW = "lex:GetUtterancesView",
    POST_CONTENT = "lex:PostContent",
    POST_TEXT = "lex:PostText",
    PUT_BOT = "lex:PutBot",
    PUT_BOT_ALIAS = "lex:PutBotAlias",
    PUT_INTENT = "lex:PutIntent",
    PUT_SLOT_TYPE = "lex:PutSlotType"
}

/** Actions for Amazon Lightsail
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlightsail.html
  */
export enum Lightsail {
    ALLOCATE_STATIC_IP = "lightsail:AllocateStaticIp",
    ATTACH_STATIC_IP = "lightsail:AttachStaticIp",
    CLOSE_INSTANCE_PUBLIC_PORTS = "lightsail:CloseInstancePublicPorts",
    CREATE_DOMAIN = "lightsail:CreateDomain",
    CREATE_DOMAIN_ENTRY = "lightsail:CreateDomainEntry",
    CREATE_INSTANCE_SNAPSHOT = "lightsail:CreateInstanceSnapshot",
    CREATE_INSTANCES = "lightsail:CreateInstances",
    CREATE_INSTANCES_FROM_SNAPSHOT = "lightsail:CreateInstancesFromSnapshot",
    CREATE_KEY_PAIR = "lightsail:CreateKeyPair",
    DELETE_DOMAIN = "lightsail:DeleteDomain",
    DELETE_DOMAIN_ENTRY = "lightsail:DeleteDomainEntry",
    DELETE_INSTANCE = "lightsail:DeleteInstance",
    DELETE_INSTANCE_SNAPSHOT = "lightsail:DeleteInstanceSnapshot",
    DELETE_KEY_PAIR = "lightsail:DeleteKeyPair",
    DETACH_STATIC_IP = "lightsail:DetachStaticIp",
    DOWNLOAD_DEFAULT_KEY_PAIR = "lightsail:DownloadDefaultKeyPair",
    GET_ACTIVE_NAMES = "lightsail:GetActiveNames",
    GET_BLUEPRINTS = "lightsail:GetBlueprints",
    GET_BUNDLES = "lightsail:GetBundles",
    GET_DOMAIN = "lightsail:GetDomain",
    GET_DOMAINS = "lightsail:GetDomains",
    GET_INSTANCE = "lightsail:GetInstance",
    GET_INSTANCE_ACCESS_DETAILS = "lightsail:GetInstanceAccessDetails",
    GET_INSTANCE_METRIC_DATA = "lightsail:GetInstanceMetricData",
    GET_INSTANCE_PORT_STATES = "lightsail:GetInstancePortStates",
    GET_INSTANCE_SNAPSHOT = "lightsail:GetInstanceSnapshot",
    GET_INSTANCE_SNAPSHOTS = "lightsail:GetInstanceSnapshots",
    GET_INSTANCE_STATE = "lightsail:GetInstanceState",
    GET_INSTANCES = "lightsail:GetInstances",
    GET_KEY_PAIR = "lightsail:GetKeyPair",
    GET_KEY_PAIRS = "lightsail:GetKeyPairs",
    GET_OPERATION = "lightsail:GetOperation",
    GET_OPERATIONS = "lightsail:GetOperations",
    GET_OPERATIONS_FOR_RESOURCE = "lightsail:GetOperationsForResource",
    GET_REGIONS = "lightsail:GetRegions",
    GET_STATIC_IP = "lightsail:GetStaticIp",
    GET_STATIC_IPS = "lightsail:GetStaticIps",
    IMPORT_KEY_PAIR = "lightsail:ImportKeyPair",
    IS_VPC_PEERED = "lightsail:IsVpcPeered",
    OPEN_INSTANCE_PUBLIC_PORTS = "lightsail:OpenInstancePublicPorts",
    PEER_VPC = "lightsail:PeerVpc",
    REBOOT_INSTANCE = "lightsail:RebootInstance",
    RELEASE_STATIC_IP = "lightsail:ReleaseStaticIp",
    START_INSTANCE = "lightsail:StartInstance",
    STOP_INSTANCE = "lightsail:StopInstance",
    UNPEER_VPC = "lightsail:UnpeerVpc",
    UPDATE_DOMAIN_ENTRY = "lightsail:UpdateDomainEntry"
}

/** Actions for Amazon MQ
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmq.html
  */
export enum MQ {
    CREATE_BROKER = "mq:CreateBroker",
    CREATE_CONFIGURATION = "mq:CreateConfiguration",
    CREATE_USER = "mq:CreateUser",
    DELETE_BROKER = "mq:DeleteBroker",
    DELETE_USER = "mq:DeleteUser",
    DESCRIBE_BROKER = "mq:DescribeBroker",
    DESCRIBE_CONFIGURATION = "mq:DescribeConfiguration",
    DESCRIBE_CONFIGURATION_REVISION = "mq:DescribeConfigurationRevision",
    DESCRIBE_USER = "mq:DescribeUser",
    LIST_BROKERS = "mq:ListBrokers",
    LIST_CONFIGURATION_REVISIONS = "mq:ListConfigurationRevisions",
    LIST_CONFIGURATIONS = "mq:ListConfigurations",
    LIST_USERS = "mq:ListUsers",
    REBOOT_BROKER = "mq:RebootBroker",
    UPDATE_BROKER = "mq:UpdateBroker",
    UPDATE_CONFIGURATION = "mq:UpdateConfiguration",
    UPDATE_USER = "mq:UpdateUser"
}

/** Actions for Amazon Machine Learning
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmachinelearning.html
  */
export enum MachineLearning {
    ADD_TAGS = "machinelearning:AddTags",
    CREATE_BATCH_PREDICTION = "machinelearning:CreateBatchPrediction",
    CREATE_DATA_SOURCE_FROM_RDS = "machinelearning:CreateDataSourceFromRDS",
    CREATE_DATA_SOURCE_FROM_REDSHIFT = "machinelearning:CreateDataSourceFromRedshift",
    CREATE_DATA_SOURCE_FROM = "machinelearning:CreateDataSourceFromS3",
    CREATE_EVALUATION = "machinelearning:CreateEvaluation",
    CREATE_ML_MODEL = "machinelearning:CreateMLModel",
    CREATE_REALTIME_ENDPOINT = "machinelearning:CreateRealtimeEndpoint",
    DELETE_BATCH_PREDICTION = "machinelearning:DeleteBatchPrediction",
    DELETE_DATA_SOURCE = "machinelearning:DeleteDataSource",
    DELETE_EVALUATION = "machinelearning:DeleteEvaluation",
    DELETE_ML_MODEL = "machinelearning:DeleteMLModel",
    DELETE_REALTIME_ENDPOINT = "machinelearning:DeleteRealtimeEndpoint",
    DELETE_TAGS = "machinelearning:DeleteTags",
    DESCRIBE_BATCH_PREDICTIONS = "machinelearning:DescribeBatchPredictions",
    DESCRIBE_DATA_SOURCES = "machinelearning:DescribeDataSources",
    DESCRIBE_EVALUATIONS = "machinelearning:DescribeEvaluations",
    DESCRIBE_ML_MODELS = "machinelearning:DescribeMLModels",
    DESCRIBE_TAGS = "machinelearning:DescribeTags",
    GET_BATCH_PREDICTION = "machinelearning:GetBatchPrediction",
    GET_DATA_SOURCE = "machinelearning:GetDataSource",
    GET_EVALUATION = "machinelearning:GetEvaluation",
    GET_ML_MODEL = "machinelearning:GetMLModel",
    PREDICT = "machinelearning:Predict",
    UPDATE_BATCH_PREDICTION = "machinelearning:UpdateBatchPrediction",
    UPDATE_DATA_SOURCE = "machinelearning:UpdateDataSource",
    UPDATE_EVALUATION = "machinelearning:UpdateEvaluation",
    UPDATE_ML_MODEL = "machinelearning:UpdateMLModel"
}

/** Actions for Amazon Mechanical Turk
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmechanicalturk.html
  */
export enum MechanicalTurk {
    APPROVE_ASSIGNMENT = "mechanicalturk:ApproveAssignment",
    APPROVE_REJECTED_ASSIGNMENT = "mechanicalturk:ApproveRejectedAssignment",
    ASSIGN_QUALIFICATION = "mechanicalturk:AssignQualification",
    BLOCK_WORKER = "mechanicalturk:BlockWorker",
    CHANGE_HIT_TYPE_OF_HIT = "mechanicalturk:ChangeHITTypeOfHIT",
    CREATE_HIT = "mechanicalturk:CreateHIT",
    CREATE_QUALIFICATION_TYPE = "mechanicalturk:CreateQualificationType",
    DISABLE_HIT = "mechanicalturk:DisableHIT",
    DISPOSE_HIT = "mechanicalturk:DisposeHIT",
    DISPOSE_QUALIFICATION_TYPE = "mechanicalturk:DisposeQualificationType",
    EXTEND_HIT = "mechanicalturk:ExtendHIT",
    FORCE_EXPIRE_HIT = "mechanicalturk:ForceExpireHIT",
    GET_ACCOUNT_BALANCE = "mechanicalturk:GetAccountBalance",
    GET_ASSIGNMENT = "mechanicalturk:GetAssignment",
    GET_ASSIGNMENTS_FOR_HIT = "mechanicalturk:GetAssignmentsForHIT",
    GET_BLOCKED_WORKERS = "mechanicalturk:GetBlockedWorkers",
    GET_BONUS_PAYMENTS = "mechanicalturk:GetBonusPayments",
    GET_FILE_UPLOAD_URL = "mechanicalturk:GetFileUploadURL",
    GET_HIT = "mechanicalturk:GetHIT",
    GET_HI_TS_FOR_QUALIFICATION_TYPE = "mechanicalturk:GetHITsForQualificationType",
    GET_QUALIFICATION_REQUESTS = "mechanicalturk:GetQualificationRequests",
    GET_QUALIFICATION_SCORE = "mechanicalturk:GetQualificationScore",
    GET_QUALIFICATION_TYPE = "mechanicalturk:GetQualificationType",
    GET_QUALIFICATIONS_FOR_QUALIFICATION_TYPE = "mechanicalturk:GetQualificationsForQualificationType",
    GET_REQUESTER_STATISTIC = "mechanicalturk:GetRequesterStatistic",
    GET_REQUESTER_WORKER_STATISTIC = "mechanicalturk:GetRequesterWorkerStatistic",
    GET_REVIEW_RESULTS_FOR_HIT = "mechanicalturk:GetReviewResultsForHIT",
    GET_REVIEWABLE_HI_TS = "mechanicalturk:GetReviewableHITs",
    GRANT_BONUS = "mechanicalturk:GrantBonus",
    GRANT_QUALIFICATION = "mechanicalturk:GrantQualification",
    NOTIFY_WORKERS = "mechanicalturk:NotifyWorkers",
    REGISTER_HIT_TYPE = "mechanicalturk:RegisterHITType",
    REJECT_ASSIGNMENT = "mechanicalturk:RejectAssignment",
    REJECT_QUALIFICATION_REQUEST = "mechanicalturk:RejectQualificationRequest",
    REVOKE_QUALIFICATION = "mechanicalturk:RevokeQualification",
    SEARCH_HI_TS = "mechanicalturk:SearchHITs",
    SEARCH_QUALIFICATION_TYPES = "mechanicalturk:SearchQualificationTypes",
    SEND_TEST_EVENT_NOTIFICATION = "mechanicalturk:SendTestEventNotification",
    SET_HIT_AS_REVIEWING = "mechanicalturk:SetHITAsReviewing",
    SET_HIT_TYPE_NOTIFICATION = "mechanicalturk:SetHITTypeNotification",
    UNBLOCK_WORKER = "mechanicalturk:UnblockWorker",
    UPDATE_QUALIFICATION_SCORE = "mechanicalturk:UpdateQualificationScore",
    UPDATE_QUALIFICATION_TYPE = "mechanicalturk:UpdateQualificationType"
}

/** Actions for Amazon Mechanical Turk Crowd
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmechanicalturkcrowd.html
  */
export enum Crowd {
    GET_TASK = "crowd:GetTask",
    PUT_TASK = "crowd:PutTask"
}

/** Actions for Amazon Message Delivery Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmessagedeliveryservice.html
  */
export enum Ec2messages {
    ACKNOWLEDGE_MESSAGE = "ec2messages:AcknowledgeMessage",
    DELETE_MESSAGE = "ec2messages:DeleteMessage",
    FAIL_MESSAGE = "ec2messages:FailMessage",
    GET_ENDPOINT = "ec2messages:GetEndpoint",
    GET_MESSAGES = "ec2messages:GetMessages",
    SEND_REPLY = "ec2messages:SendReply"
}

/** Actions for Amazon Mobile Analytics
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmobileanalytics.html
  */
export enum MobileAnalytics {
    GET_FINANCIAL_REPORTS = "mobileanalytics:GetFinancialReports",
    GET_REPORTS = "mobileanalytics:GetReports",
    PUT_EVENTS = "mobileanalytics:PutEvents"
}

/** Actions for Amazon Pinpoint
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpoint.html
  */
export enum Mobiletargeting {
    CREATE_CAMPAIGN = "mobiletargeting:CreateCampaign",
    CREATE_IMPORT_JOB = "mobiletargeting:CreateImportJob",
    CREATE_SEGMENT = "mobiletargeting:CreateSegment",
    DELETE_APNS_CHANNEL = "mobiletargeting:DeleteApnsChannel",
    DELETE_CAMPAIGN = "mobiletargeting:DeleteCampaign",
    DELETE_GCM_CHANNEL = "mobiletargeting:DeleteGcmChannel",
    DELETE_SEGMENT = "mobiletargeting:DeleteSegment",
    GET_APNS_CHANNEL = "mobiletargeting:GetApnsChannel",
    GET_APPLICATION_SETTINGS = "mobiletargeting:GetApplicationSettings",
    GET_CAMPAIGN = "mobiletargeting:GetCampaign",
    GET_CAMPAIGN_ACTIVITIES = "mobiletargeting:GetCampaignActivities",
    GET_CAMPAIGN_VERSION = "mobiletargeting:GetCampaignVersion",
    GET_CAMPAIGN_VERSIONS = "mobiletargeting:GetCampaignVersions",
    GET_CAMPAIGNS = "mobiletargeting:GetCampaigns",
    GET_ENDPOINT = "mobiletargeting:GetEndpoint",
    GET_GCM_CHANNEL = "mobiletargeting:GetGcmChannel",
    GET_IMPORT_JOB = "mobiletargeting:GetImportJob",
    GET_IMPORT_JOBS = "mobiletargeting:GetImportJobs",
    GET_REPORTS = "mobiletargeting:GetReports",
    GET_SEGMENT = "mobiletargeting:GetSegment",
    GET_SEGMENT_IMPORT_JOBS = "mobiletargeting:GetSegmentImportJobs",
    GET_SEGMENT_VERSION = "mobiletargeting:GetSegmentVersion",
    GET_SEGMENT_VERSIONS = "mobiletargeting:GetSegmentVersions",
    GET_SEGMENTS = "mobiletargeting:GetSegments",
    UPDATE_APNS_CHANNEL = "mobiletargeting:UpdateApnsChannel",
    UPDATE_APPLICATION_SETTINGS = "mobiletargeting:UpdateApplicationSettings",
    UPDATE_CAMPAIGN = "mobiletargeting:UpdateCampaign",
    UPDATE_ENDPOINT = "mobiletargeting:UpdateEndpoint",
    UPDATE_ENDPOINTS_BATCH = "mobiletargeting:UpdateEndpointsBatch",
    UPDATE_GCM_CHANNEL = "mobiletargeting:UpdateGcmChannel",
    UPDATE_SEGMENT = "mobiletargeting:UpdateSegment"
}

/** Actions for Amazon Polly
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpolly.html
  */
export enum Polly {
    DELETE_LEXICON = "polly:DeleteLexicon",
    DESCRIBE_VOICES = "polly:DescribeVoices",
    GET_LEXICON = "polly:GetLexicon",
    LIST_LEXICONS = "polly:ListLexicons",
    PUT_LEXICON = "polly:PutLexicon",
    SYNTHESIZE_SPEECH = "polly:SynthesizeSpeech"
}

/** Actions for Amazon RDS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrds.html
  */
export enum RDS {
    ADD_ROLE_TO_DB_CLUSTER = "rds:AddRoleToDBCluster",
    ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION = "rds:AddSourceIdentifierToSubscription",
    ADD_TAGS_TO_RESOURCE = "rds:AddTagsToResource",
    APPLY_PENDING_MAINTENANCE_ACTION = "rds:ApplyPendingMaintenanceAction",
    AUTHORIZE_DB_SECURITY_GROUP_INGRESS = "rds:AuthorizeDBSecurityGroupIngress",
    COPY_DB_CLUSTER_SNAPSHOT = "rds:CopyDBClusterSnapshot",
    COPY_DB_PARAMETER_GROUP = "rds:CopyDBParameterGroup",
    COPY_DB_SNAPSHOT = "rds:CopyDBSnapshot",
    COPY_OPTION_GROUP = "rds:CopyOptionGroup",
    CREATE_DB_CLUSTER = "rds:CreateDBCluster",
    CREATE_DB_CLUSTER_PARAMETER_GROUP = "rds:CreateDBClusterParameterGroup",
    CREATE_DB_CLUSTER_SNAPSHOT = "rds:CreateDBClusterSnapshot",
    CREATE_DB_INSTANCE = "rds:CreateDBInstance",
    CREATE_DB_INSTANCE_READ_REPLICA = "rds:CreateDBInstanceReadReplica",
    CREATE_DB_PARAMETER_GROUP = "rds:CreateDBParameterGroup",
    CREATE_DB_SECURITY_GROUP = "rds:CreateDBSecurityGroup",
    CREATE_DB_SNAPSHOT = "rds:CreateDBSnapshot",
    CREATE_DB_SUBNET_GROUP = "rds:CreateDBSubnetGroup",
    CREATE_EVENT_SUBSCRIPTION = "rds:CreateEventSubscription",
    CREATE_OPTION_GROUP = "rds:CreateOptionGroup",
    DELETE_DB_CLUSTER = "rds:DeleteDBCluster",
    DELETE_DB_CLUSTER_PARAMETER_GROUP = "rds:DeleteDBClusterParameterGroup",
    DELETE_DB_CLUSTER_SNAPSHOT = "rds:DeleteDBClusterSnapshot",
    DELETE_DB_INSTANCE = "rds:DeleteDBInstance",
    DELETE_DB_PARAMETER_GROUP = "rds:DeleteDBParameterGroup",
    DELETE_DB_SECURITY_GROUP = "rds:DeleteDBSecurityGroup",
    DELETE_DB_SNAPSHOT = "rds:DeleteDBSnapshot",
    DELETE_DB_SUBNET_GROUP = "rds:DeleteDBSubnetGroup",
    DELETE_EVENT_SUBSCRIPTION = "rds:DeleteEventSubscription",
    DELETE_OPTION_GROUP = "rds:DeleteOptionGroup",
    DESCRIBE_ACCOUNT_ATTRIBUTES = "rds:DescribeAccountAttributes",
    DESCRIBE_CERTIFICATES = "rds:DescribeCertificates",
    DESCRIBE_DB_CLUSTER_PARAMETER_GROUPS = "rds:DescribeDBClusterParameterGroups",
    DESCRIBE_DB_CLUSTER_PARAMETERS = "rds:DescribeDBClusterParameters",
    DESCRIBE_DB_CLUSTER_SNAPSHOT_ATTRIBUTES = "rds:DescribeDBClusterSnapshotAttributes",
    DESCRIBE_DB_CLUSTER_SNAPSHOTS = "rds:DescribeDBClusterSnapshots",
    DESCRIBE_DB_CLUSTERS = "rds:DescribeDBClusters",
    DESCRIBE_DB_ENGINE_VERSIONS = "rds:DescribeDBEngineVersions",
    DESCRIBE_DB_INSTANCES = "rds:DescribeDBInstances",
    DESCRIBE_DB_LOG_FILES = "rds:DescribeDBLogFiles",
    DESCRIBE_DB_PARAMETER_GROUPS = "rds:DescribeDBParameterGroups",
    DESCRIBE_DB_PARAMETERS = "rds:DescribeDBParameters",
    DESCRIBE_DB_SECURITY_GROUPS = "rds:DescribeDBSecurityGroups",
    DESCRIBE_DB_SNAPSHOT_ATTRIBUTES = "rds:DescribeDBSnapshotAttributes",
    DESCRIBE_DB_SNAPSHOTS = "rds:DescribeDBSnapshots",
    DESCRIBE_DB_SUBNET_GROUPS = "rds:DescribeDBSubnetGroups",
    DESCRIBE_ENGINE_DEFAULT_CLUSTER_PARAMETERS = "rds:DescribeEngineDefaultClusterParameters",
    DESCRIBE_ENGINE_DEFAULT_PARAMETERS = "rds:DescribeEngineDefaultParameters",
    DESCRIBE_EVENT_CATEGORIES = "rds:DescribeEventCategories",
    DESCRIBE_EVENT_SUBSCRIPTIONS = "rds:DescribeEventSubscriptions",
    DESCRIBE_EVENTS = "rds:DescribeEvents",
    DESCRIBE_OPTION_GROUP_OPTIONS = "rds:DescribeOptionGroupOptions",
    DESCRIBE_OPTION_GROUPS = "rds:DescribeOptionGroups",
    DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS = "rds:DescribeOrderableDBInstanceOptions",
    DESCRIBE_PENDING_MAINTENANCE_ACTIONS = "rds:DescribePendingMaintenanceActions",
    DESCRIBE_RESERVED_DB_INSTANCES = "rds:DescribeReservedDBInstances",
    DESCRIBE_RESERVED_DB_INSTANCES_OFFERINGS = "rds:DescribeReservedDBInstancesOfferings",
    DOWNLOAD_COMPLETE_DB_LOG_FILE = "rds:DownloadCompleteDBLogFile",
    DOWNLOAD_DB_LOG_FILE_PORTION = "rds:DownloadDBLogFilePortion",
    FAILOVER_DB_CLUSTER = "rds:FailoverDBCluster",
    LIST_TAGS_FOR_RESOURCE = "rds:ListTagsForResource",
    MODIFY_DB_CLUSTER = "rds:ModifyDBCluster",
    MODIFY_DB_CLUSTER_PARAMETER_GROUP = "rds:ModifyDBClusterParameterGroup",
    MODIFY_DB_CLUSTER_SNAPSHOT_ATTRIBUTE = "rds:ModifyDBClusterSnapshotAttribute",
    MODIFY_DB_INSTANCE = "rds:ModifyDBInstance",
    MODIFY_DB_PARAMETER_GROUP = "rds:ModifyDBParameterGroup",
    MODIFY_DB_SNAPSHOT_ATTRIBUTE = "rds:ModifyDBSnapshotAttribute",
    MODIFY_DB_SUBNET_GROUP = "rds:ModifyDBSubnetGroup",
    MODIFY_EVENT_SUBSCRIPTION = "rds:ModifyEventSubscription",
    MODIFY_OPTION_GROUP = "rds:ModifyOptionGroup",
    PROMOTE_READ_REPLICA = "rds:PromoteReadReplica",
    PURCHASE_RESERVED_DB_INSTANCES_OFFERING = "rds:PurchaseReservedDBInstancesOffering",
    REBOOT_DB_INSTANCE = "rds:RebootDBInstance",
    REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION = "rds:RemoveSourceIdentifierFromSubscription",
    REMOVE_TAGS_FROM_RESOURCE = "rds:RemoveTagsFromResource",
    RESET_DB_CLUSTER_PARAMETER_GROUP = "rds:ResetDBClusterParameterGroup",
    RESET_DB_PARAMETER_GROUP = "rds:ResetDBParameterGroup",
    RESTORE_DB_CLUSTER_FROM_SNAPSHOT = "rds:RestoreDBClusterFromSnapshot",
    RESTORE_DB_CLUSTER_TO_POINT_IN_TIME = "rds:RestoreDBClusterToPointInTime",
    RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT = "rds:RestoreDBInstanceFromDBSnapshot",
    RESTORE_DB_INSTANCE_TO_POINT_IN_TIME = "rds:RestoreDBInstanceToPointInTime",
    REVOKE_DB_SECURITY_GROUP_INGRESS = "rds:RevokeDBSecurityGroupIngress",
    START_DB_INSTANCE = "rds:StartDBInstance",
    STOP_DB_INSTANCE = "rds:StopDBInstance"
}

/** Actions for Amazon Redshift
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonredshift.html
  */
export enum Redshift {
    AUTHORIZE_CLUSTER_SECURITY_GROUP_INGRESS = "redshift:AuthorizeClusterSecurityGroupIngress",
    AUTHORIZE_SNAPSHOT_ACCESS = "redshift:AuthorizeSnapshotAccess",
    CANCEL_QUERY_SESSION = "redshift:CancelQuerySession",
    COPY_CLUSTER_SNAPSHOT = "redshift:CopyClusterSnapshot",
    CREATE_CLUSTER = "redshift:CreateCluster",
    CREATE_CLUSTER_PARAMETER_GROUP = "redshift:CreateClusterParameterGroup",
    CREATE_CLUSTER_SECURITY_GROUP = "redshift:CreateClusterSecurityGroup",
    CREATE_CLUSTER_SNAPSHOT = "redshift:CreateClusterSnapshot",
    CREATE_CLUSTER_SUBNET_GROUP = "redshift:CreateClusterSubnetGroup",
    CREATE_CLUSTER_USER = "redshift:CreateClusterUser",
    CREATE_EVENT_SUBSCRIPTION = "redshift:CreateEventSubscription",
    CREATE_HSM_CLIENT_CERTIFICATE = "redshift:CreateHsmClientCertificate",
    CREATE_HSM_CONFIGURATION = "redshift:CreateHsmConfiguration",
    CREATE_SNAPSHOT_COPY_GRANT = "redshift:CreateSnapshotCopyGrant",
    CREATE_TAGS = "redshift:CreateTags",
    DELETE_CLUSTER = "redshift:DeleteCluster",
    DELETE_CLUSTER_PARAMETER_GROUP = "redshift:DeleteClusterParameterGroup",
    DELETE_CLUSTER_SECURITY_GROUP = "redshift:DeleteClusterSecurityGroup",
    DELETE_CLUSTER_SNAPSHOT = "redshift:DeleteClusterSnapshot",
    DELETE_CLUSTER_SUBNET_GROUP = "redshift:DeleteClusterSubnetGroup",
    DELETE_EVENT_SUBSCRIPTION = "redshift:DeleteEventSubscription",
    DELETE_HSM_CLIENT_CERTIFICATE = "redshift:DeleteHsmClientCertificate",
    DELETE_HSM_CONFIGURATION = "redshift:DeleteHsmConfiguration",
    DELETE_SNAPSHOT_COPY_GRANT = "redshift:DeleteSnapshotCopyGrant",
    DELETE_TAGS = "redshift:DeleteTags",
    DESCRIBE_CLUSTER_PARAMETER_GROUPS = "redshift:DescribeClusterParameterGroups",
    DESCRIBE_CLUSTER_PARAMETERS = "redshift:DescribeClusterParameters",
    DESCRIBE_CLUSTER_SECURITY_GROUPS = "redshift:DescribeClusterSecurityGroups",
    DESCRIBE_CLUSTER_SNAPSHOTS = "redshift:DescribeClusterSnapshots",
    DESCRIBE_CLUSTER_SUBNET_GROUPS = "redshift:DescribeClusterSubnetGroups",
    DESCRIBE_CLUSTER_VERSIONS = "redshift:DescribeClusterVersions",
    DESCRIBE_CLUSTERS = "redshift:DescribeClusters",
    DESCRIBE_DEFAULT_CLUSTER_PARAMETERS = "redshift:DescribeDefaultClusterParameters",
    DESCRIBE_EVENT_CATEGORIES = "redshift:DescribeEventCategories",
    DESCRIBE_EVENT_SUBSCRIPTIONS = "redshift:DescribeEventSubscriptions",
    DESCRIBE_EVENTS = "redshift:DescribeEvents",
    DESCRIBE_HSM_CLIENT_CERTIFICATES = "redshift:DescribeHsmClientCertificates",
    DESCRIBE_HSM_CONFIGURATIONS = "redshift:DescribeHsmConfigurations",
    DESCRIBE_LOGGING_STATUS = "redshift:DescribeLoggingStatus",
    DESCRIBE_ORDERABLE_CLUSTER_OPTIONS = "redshift:DescribeOrderableClusterOptions",
    DESCRIBE_RESERVED_NODE_OFFERINGS = "redshift:DescribeReservedNodeOfferings",
    DESCRIBE_RESERVED_NODES = "redshift:DescribeReservedNodes",
    DESCRIBE_RESIZE = "redshift:DescribeResize",
    DESCRIBE_SNAPSHOT_COPY_GRANTS = "redshift:DescribeSnapshotCopyGrants",
    DESCRIBE_TABLE_RESTORE_STATUS = "redshift:DescribeTableRestoreStatus",
    DESCRIBE_TAGS = "redshift:DescribeTags",
    DISABLE_LOGGING = "redshift:DisableLogging",
    DISABLE_SNAPSHOT_COPY = "redshift:DisableSnapshotCopy",
    ENABLE_LOGGING = "redshift:EnableLogging",
    ENABLE_SNAPSHOT_COPY = "redshift:EnableSnapshotCopy",
    GET_CLUSTER_CREDENTIALS = "redshift:GetClusterCredentials",
    JOIN_GROUP = "redshift:JoinGroup",
    MODIFY_CLUSTER = "redshift:ModifyCluster",
    MODIFY_CLUSTER_IAM_ROLES = "redshift:ModifyClusterIamRoles",
    MODIFY_CLUSTER_PARAMETER_GROUP = "redshift:ModifyClusterParameterGroup",
    MODIFY_CLUSTER_SUBNET_GROUP = "redshift:ModifyClusterSubnetGroup",
    MODIFY_EVENT_SUBSCRIPTION = "redshift:ModifyEventSubscription",
    MODIFY_SNAPSHOT_COPY_RETENTION_PERIOD = "redshift:ModifySnapshotCopyRetentionPeriod",
    PURCHASE_RESERVED_NODE_OFFERING = "redshift:PurchaseReservedNodeOffering",
    REBOOT_CLUSTER = "redshift:RebootCluster",
    RESET_CLUSTER_PARAMETER_GROUP = "redshift:ResetClusterParameterGroup",
    RESTORE_FROM_CLUSTER_SNAPSHOT = "redshift:RestoreFromClusterSnapshot",
    RESTORE_TABLE_FROM_CLUSTER_SNAPSHOT = "redshift:RestoreTableFromClusterSnapshot",
    REVOKE_CLUSTER_SECURITY_GROUP_INGRESS = "redshift:RevokeClusterSecurityGroupIngress",
    REVOKE_SNAPSHOT_ACCESS = "redshift:RevokeSnapshotAccess",
    ROTATE_ENCRYPTION_KEY = "redshift:RotateEncryptionKey",
    VIEW_QUERIES_IN_CONSOLE = "redshift:ViewQueriesInConsole"
}

/** Actions for Amazon Rekognition
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrekognition.html
  */
export enum Rekognition {
    COMPARE_FACES = "rekognition:CompareFaces",
    CREATE_COLLECTION = "rekognition:CreateCollection",
    CREATE_STREAM_PROCESSOR = "rekognition:CreateStreamProcessor",
    DELETE_COLLECTION = "rekognition:DeleteCollection",
    DELETE_FACES = "rekognition:DeleteFaces",
    DELETE_STREAM_PROCESSOR = "rekognition:DeleteStreamProcessor",
    DESCRIBE_STREAM_PROCESSOR = "rekognition:DescribeStreamProcessor",
    DETECT_FACES = "rekognition:DetectFaces",
    DETECT_LABELS = "rekognition:DetectLabels",
    DETECT_MODERATION_LABELS = "rekognition:DetectModerationLabels",
    DETECT_TEXT = "rekognition:DetectText",
    GET_CELEBRITY_INFO = "rekognition:GetCelebrityInfo",
    GET_CELEBRITY_RECOGNITION = "rekognition:GetCelebrityRecognition",
    GET_CONTENT_MODERATION = "rekognition:GetContentModeration",
    GET_FACE_DETECTION = "rekognition:GetFaceDetection",
    GET_FACE_SEARCH = "rekognition:GetFaceSearch",
    GET_LABEL_DETECTION = "rekognition:GetLabelDetection",
    GET_PERSON_TRACKING = "rekognition:GetPersonTracking",
    INDEX_FACES = "rekognition:IndexFaces",
    LIST_COLLECTIONS = "rekognition:ListCollections",
    LIST_FACES = "rekognition:ListFaces",
    LIST_STREAM_PROCESSORS = "rekognition:ListStreamProcessors",
    RECOGNIZE_CELEBRITIES = "rekognition:RecognizeCelebrities",
    SEARCH_FACES = "rekognition:SearchFaces",
    SEARCH_FACES_BY_IMAGE = "rekognition:SearchFacesByImage",
    START_CELEBRITY_RECOGNITION = "rekognition:StartCelebrityRecognition",
    START_CONTENT_MODERATION = "rekognition:StartContentModeration",
    START_FACE_DETECTION = "rekognition:StartFaceDetection",
    START_FACE_SEARCH = "rekognition:StartFaceSearch",
    START_LABEL_DETECTION = "rekognition:StartLabelDetection",
    START_PERSON_TRACKING = "rekognition:StartPersonTracking",
    START_STREAM_PROCESSOR = "rekognition:StartStreamProcessor",
    STOP_STREAM_PROCESSOR = "rekognition:StopStreamProcessor"
}

/** Actions for Amazon Resource Group Tagging API
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonresourcegrouptaggingapi.html
  */
export enum Tag {
    GET_RESOURCES = "tag:GetResources",
    GET_TAG_KEYS = "tag:GetTagKeys",
    GET_TAG_VALUES = "tag:GetTagValues",
    TAG_RESOURCES = "tag:TagResources",
    UNTAG_RESOURCES = "tag:UntagResources"
}

/** Actions for Amazon Route 53
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53.html
  */
export enum Route53 {
    ASSOCIATE_VPC_WITH_HOSTED_ZONE = "route53:AssociateVPCWithHostedZone",
    CHANGE_RESOURCE_RECORD_SETS = "route53:ChangeResourceRecordSets",
    CHANGE_TAGS_FOR_RESOURCE = "route53:ChangeTagsForResource",
    CREATE_HEALTH_CHECK = "route53:CreateHealthCheck",
    CREATE_HOSTED_ZONE = "route53:CreateHostedZone",
    CREATE_REUSABLE_DELEGATION_SET = "route53:CreateReusableDelegationSet",
    CREATE_TRAFFIC_POLICY = "route53:CreateTrafficPolicy",
    CREATE_TRAFFIC_POLICY_INSTANCE = "route53:CreateTrafficPolicyInstance",
    CREATE_TRAFFIC_POLICY_VERSION = "route53:CreateTrafficPolicyVersion",
    DELETE_HEALTH_CHECK = "route53:DeleteHealthCheck",
    DELETE_HOSTED_ZONE = "route53:DeleteHostedZone",
    DELETE_REUSABLE_DELEGATION_SET = "route53:DeleteReusableDelegationSet",
    DELETE_TRAFFIC_POLICY = "route53:DeleteTrafficPolicy",
    DELETE_TRAFFIC_POLICY_INSTANCE = "route53:DeleteTrafficPolicyInstance",
    DISABLE_DOMAIN_AUTO_RENEW = "route53:DisableDomainAutoRenew",
    DISASSOCIATE_VPC_FROM_HOSTED_ZONE = "route53:DisassociateVPCFromHostedZone",
    ENABLE_DOMAIN_AUTO_RENEW = "route53:EnableDomainAutoRenew",
    GET_CHANGE = "route53:GetChange",
    GET_CHECKER_IP_RANGES = "route53:GetCheckerIpRanges",
    GET_GEO_LOCATION = "route53:GetGeoLocation",
    GET_HEALTH_CHECK = "route53:GetHealthCheck",
    GET_HEALTH_CHECK_COUNT = "route53:GetHealthCheckCount",
    GET_HEALTH_CHECK_LAST_FAILURE_REASON = "route53:GetHealthCheckLastFailureReason",
    GET_HEALTH_CHECK_STATUS = "route53:GetHealthCheckStatus",
    GET_HOSTED_ZONE = "route53:GetHostedZone",
    GET_HOSTED_ZONE_COUNT = "route53:GetHostedZoneCount",
    GET_REUSABLE_DELEGATION_SET = "route53:GetReusableDelegationSet",
    GET_TRAFFIC_POLICY = "route53:GetTrafficPolicy",
    GET_TRAFFIC_POLICY_INSTANCE = "route53:GetTrafficPolicyInstance",
    GET_TRAFFIC_POLICY_INSTANCE_COUNT = "route53:GetTrafficPolicyInstanceCount",
    LIST_GEO_LOCATIONS = "route53:ListGeoLocations",
    LIST_HEALTH_CHECKS = "route53:ListHealthChecks",
    LIST_HOSTED_ZONES = "route53:ListHostedZones",
    LIST_HOSTED_ZONES_BY_NAME = "route53:ListHostedZonesByName",
    LIST_RESOURCE_RECORD_SETS = "route53:ListResourceRecordSets",
    LIST_REUSABLE_DELEGATION_SETS = "route53:ListReusableDelegationSets",
    LIST_TAGS_FOR_RESOURCE = "route53:ListTagsForResource",
    LIST_TAGS_FOR_RESOURCES = "route53:ListTagsForResources",
    LIST_TRAFFIC_POLICIES = "route53:ListTrafficPolicies",
    LIST_TRAFFIC_POLICY_INSTANCES = "route53:ListTrafficPolicyInstances",
    LIST_TRAFFIC_POLICY_INSTANCES_BY_HOSTED_ZONE = "route53:ListTrafficPolicyInstancesByHostedZone",
    LIST_TRAFFIC_POLICY_INSTANCES_BY_POLICY = "route53:ListTrafficPolicyInstancesByPolicy",
    LIST_TRAFFIC_POLICY_VERSIONS = "route53:ListTrafficPolicyVersions",
    TEST_DNS_ANSWER = "route53:TestDNSAnswer",
    UPDATE_HEALTH_CHECK = "route53:UpdateHealthCheck",
    UPDATE_HOSTED_ZONE_COMMENT = "route53:UpdateHostedZoneComment",
    UPDATE_TRAFFIC_POLICY_COMMENT = "route53:UpdateTrafficPolicyComment",
    UPDATE_TRAFFIC_POLICY_INSTANCE = "route53:UpdateTrafficPolicyInstance"
}

/** Actions for Amazon Route 53 Auto Naming
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53autonaming.html
  */
export enum Servicediscovery {
    CREATE_PRIVATE_DNS_NAMESPACE = "servicediscovery:CreatePrivateDnsNamespace",
    CREATE_PUBLIC_DNS_NAMESPACE = "servicediscovery:CreatePublicDnsNamespace",
    CREATE_SERVICE = "servicediscovery:CreateService",
    DELETE_NAMESPACE = "servicediscovery:DeleteNamespace",
    DELETE_SERVICE = "servicediscovery:DeleteService",
    DEREGISTER_INSTANCE = "servicediscovery:DeregisterInstance",
    GET_INSTANCE = "servicediscovery:GetInstance",
    GET_INSTANCES_HEALTH_STATUS = "servicediscovery:GetInstancesHealthStatus",
    GET_NAMESPACE = "servicediscovery:GetNamespace",
    GET_OPERATION = "servicediscovery:GetOperation",
    GET_SERVICE = "servicediscovery:GetService",
    LIST_INSTANCES = "servicediscovery:ListInstances",
    LIST_NAMESPACES = "servicediscovery:ListNamespaces",
    LIST_OPERATIONS = "servicediscovery:ListOperations",
    LIST_SERVICES = "servicediscovery:ListServices",
    REGISTER_INSTANCE = "servicediscovery:RegisterInstance",
    UPDATE_INSTANCE_HEARTBEAT_STATUS = "servicediscovery:UpdateInstanceHeartbeatStatus",
    UPDATE_SERVICE = "servicediscovery:UpdateService"
}

/** Actions for Amazon Route53 Domains
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53domains.html
  */
export enum Route53Domains {
    CHECK_DOMAIN_AVAILABILITY = "route53domains:CheckDomainAvailability",
    DELETE_TAGS_FOR_DOMAIN = "route53domains:DeleteTagsForDomain",
    DISABLE_DOMAIN_AUTO_RENEW = "route53domains:DisableDomainAutoRenew",
    DISABLE_DOMAIN_TRANSFER_LOCK = "route53domains:DisableDomainTransferLock",
    ENABLE_DOMAIN_AUTO_RENEW = "route53domains:EnableDomainAutoRenew",
    ENABLE_DOMAIN_TRANSFER_LOCK = "route53domains:EnableDomainTransferLock",
    GET_CONTACT_REACHABILITY_STATUS = "route53domains:GetContactReachabilityStatus",
    GET_DOMAIN_DETAIL = "route53domains:GetDomainDetail",
    GET_DOMAIN_SUGGESTIONS = "route53domains:GetDomainSuggestions",
    GET_OPERATION_DETAIL = "route53domains:GetOperationDetail",
    LIST_DOMAINS = "route53domains:ListDomains",
    LIST_OPERATIONS = "route53domains:ListOperations",
    LIST_TAGS_FOR_DOMAIN = "route53domains:ListTagsForDomain",
    REGISTER_DOMAIN = "route53domains:RegisterDomain",
    RENEW_DOMAIN = "route53domains:RenewDomain",
    RESEND_CONTACT_REACHABILITY_EMAIL = "route53domains:ResendContactReachabilityEmail",
    RETRIEVE_DOMAIN_AUTH_CODE = "route53domains:RetrieveDomainAuthCode",
    TRANSFER_DOMAIN = "route53domains:TransferDomain",
    UPDATE_DOMAIN_CONTACT = "route53domains:UpdateDomainContact",
    UPDATE_DOMAIN_CONTACT_PRIVACY = "route53domains:UpdateDomainContactPrivacy",
    UPDATE_DOMAIN_NAMESERVERS = "route53domains:UpdateDomainNameservers",
    UPDATE_TAGS_FOR_DOMAIN = "route53domains:UpdateTagsForDomain",
    VIEW_BILLING = "route53domains:ViewBilling"
}

/** Actions for Amazon S3
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html
  */
export enum S3 {
    ABORT_MULTIPART_UPLOAD = "s3:AbortMultipartUpload",
    CREATE_BUCKET = "s3:CreateBucket",
    DELETE_BUCKET = "s3:DeleteBucket",
    DELETE_BUCKET_POLICY = "s3:DeleteBucketPolicy",
    DELETE_BUCKET_WEBSITE = "s3:DeleteBucketWebsite",
    DELETE_OBJECT = "s3:DeleteObject",
    DELETE_OBJECT_TAGGING = "s3:DeleteObjectTagging",
    DELETE_OBJECT_VERSION = "s3:DeleteObjectVersion",
    DELETE_OBJECT_VERSION_TAGGING = "s3:DeleteObjectVersionTagging",
    GET_ACCELERATE_CONFIGURATION = "s3:GetAccelerateConfiguration",
    GET_ANALYTICS_CONFIGURATION = "s3:GetAnalyticsConfiguration",
    GET_BUCKET_ACL = "s3:GetBucketAcl",
    GET_BUCKET_CORS = "s3:GetBucketCORS",
    GET_BUCKET_LOCATION = "s3:GetBucketLocation",
    GET_BUCKET_LOGGING = "s3:GetBucketLogging",
    GET_BUCKET_NOTIFICATION = "s3:GetBucketNotification",
    GET_BUCKET_POLICY = "s3:GetBucketPolicy",
    GET_BUCKET_REQUEST_PAYMENT = "s3:GetBucketRequestPayment",
    GET_BUCKET_TAGGING = "s3:GetBucketTagging",
    GET_BUCKET_VERSIONING = "s3:GetBucketVersioning",
    GET_BUCKET_WEBSITE = "s3:GetBucketWebsite",
    GET_INVENTORY_CONFIGURATION = "s3:GetInventoryConfiguration",
    GET_IP_CONFIGURATION = "s3:GetIpConfiguration",
    GET_LIFECYCLE_CONFIGURATION = "s3:GetLifecycleConfiguration",
    GET_METRICS_CONFIGURATION = "s3:GetMetricsConfiguration",
    GET_OBJECT = "s3:GetObject",
    GET_OBJECT_ACL = "s3:GetObjectAcl",
    GET_OBJECT_TAGGING = "s3:GetObjectTagging",
    GET_OBJECT_TORRENT = "s3:GetObjectTorrent",
    GET_OBJECT_VERSION = "s3:GetObjectVersion",
    GET_OBJECT_VERSION_ACL = "s3:GetObjectVersionAcl",
    GET_OBJECT_VERSION_FOR_REPLICATION = "s3:GetObjectVersionForReplication",
    GET_OBJECT_VERSION_TAGGING = "s3:GetObjectVersionTagging",
    GET_OBJECT_VERSION_TORRENT = "s3:GetObjectVersionTorrent",
    GET_REPLICATION_CONFIGURATION = "s3:GetReplicationConfiguration",
    HEAD_BUCKET = "s3:HeadBucket",
    LIST_ALL_MY_BUCKETS = "s3:ListAllMyBuckets",
    LIST_BUCKET = "s3:ListBucket",
    LIST_BUCKET_BY_TAGS = "s3:ListBucketByTags",
    LIST_BUCKET_MULTIPART_UPLOADS = "s3:ListBucketMultipartUploads",
    LIST_BUCKET_VERSIONS = "s3:ListBucketVersions",
    LIST_MULTIPART_UPLOAD_PARTS = "s3:ListMultipartUploadParts",
    LIST_OBJECTS = "s3:ListObjects",
    OBJECT_OWNER_OVERRIDE_TO_BUCKET_OWNER = "s3:ObjectOwnerOverrideToBucketOwner",
    PUT_ACCELERATE_CONFIGURATION = "s3:PutAccelerateConfiguration",
    PUT_ANALYTICS_CONFIGURATION = "s3:PutAnalyticsConfiguration",
    PUT_BUCKET_ACL = "s3:PutBucketAcl",
    PUT_BUCKET_CORS = "s3:PutBucketCORS",
    PUT_BUCKET_LOGGING = "s3:PutBucketLogging",
    PUT_BUCKET_NOTIFICATION = "s3:PutBucketNotification",
    PUT_BUCKET_POLICY = "s3:PutBucketPolicy",
    PUT_BUCKET_REQUEST_PAYMENT = "s3:PutBucketRequestPayment",
    PUT_BUCKET_TAGGING = "s3:PutBucketTagging",
    PUT_BUCKET_VERSIONING = "s3:PutBucketVersioning",
    PUT_BUCKET_WEBSITE = "s3:PutBucketWebsite",
    PUT_INVENTORY_CONFIGURATION = "s3:PutInventoryConfiguration",
    PUT_IP_CONFIGURATION = "s3:PutIpConfiguration",
    PUT_LIFECYCLE_CONFIGURATION = "s3:PutLifecycleConfiguration",
    PUT_METRICS_CONFIGURATION = "s3:PutMetricsConfiguration",
    PUT_OBJECT = "s3:PutObject",
    PUT_OBJECT_ACL = "s3:PutObjectAcl",
    PUT_OBJECT_TAGGING = "s3:PutObjectTagging",
    PUT_OBJECT_VERSION_ACL = "s3:PutObjectVersionAcl",
    PUT_OBJECT_VERSION_TAGGING = "s3:PutObjectVersionTagging",
    PUT_REPLICATION_CONFIGURATION = "s3:PutReplicationConfiguration",
    REPLICATE_DELETE = "s3:ReplicateDelete",
    REPLICATE_OBJECT = "s3:ReplicateObject",
    REPLICATE_TAGS = "s3:ReplicateTags",
    RESTORE_OBJECT = "s3:RestoreObject"
}

/** Actions for Amazon SES
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html
  */
export enum SES {
    CLONE_RECEIPT_RULE_SET = "ses:CloneReceiptRuleSet",
    CREATE_CONFIGURATION_SET = "ses:CreateConfigurationSet",
    CREATE_CONFIGURATION_SET_EVENT_DESTINATION = "ses:CreateConfigurationSetEventDestination",
    CREATE_CONFIGURATION_SET_TRACKING_OPTIONS = "ses:CreateConfigurationSetTrackingOptions",
    CREATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE = "ses:CreateCustomVerificationEmailTemplate",
    CREATE_RECEIPT_FILTER = "ses:CreateReceiptFilter",
    CREATE_RECEIPT_RULE = "ses:CreateReceiptRule",
    CREATE_RECEIPT_RULE_SET = "ses:CreateReceiptRuleSet",
    CREATE_TEMPLATE = "ses:CreateTemplate",
    DELETE_CONFIGURATION_SET = "ses:DeleteConfigurationSet",
    DELETE_CONFIGURATION_SET_EVENT_DESTINATION = "ses:DeleteConfigurationSetEventDestination",
    DELETE_CONFIGURATION_SET_TRACKING_OPTIONS = "ses:DeleteConfigurationSetTrackingOptions",
    DELETE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE = "ses:DeleteCustomVerificationEmailTemplate",
    DELETE_IDENTITY = "ses:DeleteIdentity",
    DELETE_IDENTITY_POLICY = "ses:DeleteIdentityPolicy",
    DELETE_RECEIPT_FILTER = "ses:DeleteReceiptFilter",
    DELETE_RECEIPT_RULE = "ses:DeleteReceiptRule",
    DELETE_RECEIPT_RULE_SET = "ses:DeleteReceiptRuleSet",
    DELETE_TEMPLATE = "ses:DeleteTemplate",
    DELETE_VERIFIED_EMAIL_ADDRESS = "ses:DeleteVerifiedEmailAddress",
    DESCRIBE_ACTIVE_RECEIPT_RULE_SET = "ses:DescribeActiveReceiptRuleSet",
    DESCRIBE_CONFIGURATION_SET = "ses:DescribeConfigurationSet",
    DESCRIBE_RECEIPT_RULE = "ses:DescribeReceiptRule",
    DESCRIBE_RECEIPT_RULE_SET = "ses:DescribeReceiptRuleSet",
    GET_ACCOUNT_SENDING_ENABLED = "ses:GetAccountSendingEnabled",
    GET_CUSTOM_VERIFICATION_EMAIL_TEMPLATE = "ses:GetCustomVerificationEmailTemplate",
    GET_IDENTITY_DKIM_ATTRIBUTES = "ses:GetIdentityDkimAttributes",
    GET_IDENTITY_MAIL_FROM_DOMAIN_ATTRIBUTES = "ses:GetIdentityMailFromDomainAttributes",
    GET_IDENTITY_NOTIFICATION_ATTRIBUTES = "ses:GetIdentityNotificationAttributes",
    GET_IDENTITY_POLICIES = "ses:GetIdentityPolicies",
    GET_IDENTITY_VERIFICATION_ATTRIBUTES = "ses:GetIdentityVerificationAttributes",
    GET_SEND_QUOTA = "ses:GetSendQuota",
    GET_SEND_STATISTICS = "ses:GetSendStatistics",
    GET_TEMPLATE = "ses:GetTemplate",
    LIST_CONFIGURATION_SETS = "ses:ListConfigurationSets",
    LIST_CUSTOM_VERIFICATION_EMAIL_TEMPLATES = "ses:ListCustomVerificationEmailTemplates",
    LIST_IDENTITIES = "ses:ListIdentities",
    LIST_IDENTITY_POLICIES = "ses:ListIdentityPolicies",
    LIST_RECEIPT_FILTERS = "ses:ListReceiptFilters",
    LIST_RECEIPT_RULE_SETS = "ses:ListReceiptRuleSets",
    LIST_TEMPLATES = "ses:ListTemplates",
    LIST_VERIFIED_EMAIL_ADDRESSES = "ses:ListVerifiedEmailAddresses",
    PUT_IDENTITY_POLICY = "ses:PutIdentityPolicy",
    REORDER_RECEIPT_RULE_SET = "ses:ReorderReceiptRuleSet",
    SEND_BOUNCE = "ses:SendBounce",
    SEND_BULK_TEMPLATED_EMAIL = "ses:SendBulkTemplatedEmail",
    SEND_CUSTOM_VERIFICATION_EMAIL = "ses:SendCustomVerificationEmail",
    SEND_EMAIL = "ses:SendEmail",
    SEND_RAW_EMAIL = "ses:SendRawEmail",
    SEND_TEMPLATED_EMAIL = "ses:SendTemplatedEmail",
    SET_ACTIVE_RECEIPT_RULE_SET = "ses:SetActiveReceiptRuleSet",
    SET_IDENTITY_DKIM_ENABLED = "ses:SetIdentityDkimEnabled",
    SET_IDENTITY_FEEDBACK_FORWARDING_ENABLED = "ses:SetIdentityFeedbackForwardingEnabled",
    SET_IDENTITY_HEADERS_IN_NOTIFICATIONS_ENABLED = "ses:SetIdentityHeadersInNotificationsEnabled",
    SET_IDENTITY_MAIL_FROM_DOMAIN = "ses:SetIdentityMailFromDomain",
    SET_IDENTITY_NOTIFICATION_TOPIC = "ses:SetIdentityNotificationTopic",
    SET_RECEIPT_RULE_POSITION = "ses:SetReceiptRulePosition",
    TEST_RENDER_TEMPLATE = "ses:TestRenderTemplate",
    UPDATE_ACCOUNT_SENDING_ENABLED = "ses:UpdateAccountSendingEnabled",
    UPDATE_CONFIGURATION_SET_EVENT_DESTINATION = "ses:UpdateConfigurationSetEventDestination",
    UPDATE_CONFIGURATION_SET_REPUTATION_METRICS_ENABLED = "ses:UpdateConfigurationSetReputationMetricsEnabled",
    UPDATE_CONFIGURATION_SET_SENDING_ENABLED = "ses:UpdateConfigurationSetSendingEnabled",
    UPDATE_CONFIGURATION_SET_TRACKING_OPTIONS = "ses:UpdateConfigurationSetTrackingOptions",
    UPDATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE = "ses:UpdateCustomVerificationEmailTemplate",
    UPDATE_RECEIPT_RULE = "ses:UpdateReceiptRule",
    UPDATE_TEMPLATE = "ses:UpdateTemplate",
    VERIFY_DOMAIN_DKIM = "ses:VerifyDomainDkim",
    VERIFY_DOMAIN_IDENTITY = "ses:VerifyDomainIdentity",
    VERIFY_EMAIL_ADDRESS = "ses:VerifyEmailAddress",
    VERIFY_EMAIL_IDENTITY = "ses:VerifyEmailIdentity"
}

/** Actions for Amazon SNS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsns.html
  */
export enum SNS {
    ADD_PERMISSION = "sns:AddPermission",
    CHECK_IF_PHONE_NUMBER_IS_OPTED_OUT = "sns:CheckIfPhoneNumberIsOptedOut",
    CONFIRM_SUBSCRIPTION = "sns:ConfirmSubscription",
    CREATE_PLATFORM_APPLICATION = "sns:CreatePlatformApplication",
    CREATE_PLATFORM_ENDPOINT = "sns:CreatePlatformEndpoint",
    CREATE_TOPIC = "sns:CreateTopic",
    DELETE_ENDPOINT = "sns:DeleteEndpoint",
    DELETE_PLATFORM_APPLICATION = "sns:DeletePlatformApplication",
    DELETE_TOPIC = "sns:DeleteTopic",
    GET_ENDPOINT_ATTRIBUTES = "sns:GetEndpointAttributes",
    GET_PLATFORM_APPLICATION_ATTRIBUTES = "sns:GetPlatformApplicationAttributes",
    GET_SMS_ATTRIBUTES = "sns:GetSMSAttributes",
    GET_SUBSCRIPTION_ATTRIBUTES = "sns:GetSubscriptionAttributes",
    GET_TOPIC_ATTRIBUTES = "sns:GetTopicAttributes",
    LIST_ENDPOINTS_BY_PLATFORM_APPLICATION = "sns:ListEndpointsByPlatformApplication",
    LIST_PHONE_NUMBERS_OPTED_OUT = "sns:ListPhoneNumbersOptedOut",
    LIST_PLATFORM_APPLICATIONS = "sns:ListPlatformApplications",
    LIST_SUBSCRIPTIONS = "sns:ListSubscriptions",
    LIST_SUBSCRIPTIONS_BY_TOPIC = "sns:ListSubscriptionsByTopic",
    LIST_TOPICS = "sns:ListTopics",
    OPT_IN_PHONE_NUMBER = "sns:OptInPhoneNumber",
    PUBLISH = "sns:Publish",
    REMOVE_PERMISSION = "sns:RemovePermission",
    SET_ENDPOINT_ATTRIBUTES = "sns:SetEndpointAttributes",
    SET_PLATFORM_APPLICATION_ATTRIBUTES = "sns:SetPlatformApplicationAttributes",
    SET_SMS_ATTRIBUTES = "sns:SetSMSAttributes",
    SET_SUBSCRIPTION_ATTRIBUTES = "sns:SetSubscriptionAttributes",
    SET_TOPIC_ATTRIBUTES = "sns:SetTopicAttributes",
    SUBSCRIBE = "sns:Subscribe",
    UNSUBSCRIBE = "sns:Unsubscribe"
}

/** Actions for Amazon SQS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsqs.html
  */
export enum SQS {
    ADD_PERMISSION = "sqs:AddPermission",
    CHANGE_MESSAGE_VISIBILITY = "sqs:ChangeMessageVisibility",
    CHANGE_MESSAGE_VISIBILITY_BATCH = "sqs:ChangeMessageVisibilityBatch",
    CREATE_QUEUE = "sqs:CreateQueue",
    DELETE_MESSAGE = "sqs:DeleteMessage",
    DELETE_MESSAGE_BATCH = "sqs:DeleteMessageBatch",
    DELETE_QUEUE = "sqs:DeleteQueue",
    GET_QUEUE_ATTRIBUTES = "sqs:GetQueueAttributes",
    GET_QUEUE_URL = "sqs:GetQueueUrl",
    LIST_DEAD_LETTER_SOURCE_QUEUES = "sqs:ListDeadLetterSourceQueues",
    LIST_QUEUE_TAGS = "sqs:ListQueueTags",
    LIST_QUEUES = "sqs:ListQueues",
    PURGE_QUEUE = "sqs:PurgeQueue",
    RECEIVE_MESSAGE = "sqs:ReceiveMessage",
    REMOVE_PERMISSION = "sqs:RemovePermission",
    SEND_MESSAGE = "sqs:SendMessage",
    SEND_MESSAGE_BATCH = "sqs:SendMessageBatch",
    SET_QUEUE_ATTRIBUTES = "sqs:SetQueueAttributes",
    TAG_QUEUE = "sqs:TagQueue",
    UNTAG_QUEUE = "sqs:UntagQueue"
}

/** Actions for Amazon SageMaker
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html
  */
export enum SageMaker {
    ADD_TAGS = "sagemaker:AddTags",
    CREATE_ENDPOINT = "sagemaker:CreateEndpoint",
    CREATE_ENDPOINT_CONFIG = "sagemaker:CreateEndpointConfig",
    CREATE_MODEL = "sagemaker:CreateModel",
    CREATE_NOTEBOOK_INSTANCE = "sagemaker:CreateNotebookInstance",
    CREATE_PRESIGNED_NOTEBOOK_INSTANCE_URL = "sagemaker:CreatePresignedNotebookInstanceUrl",
    CREATE_TRAINING_JOB = "sagemaker:CreateTrainingJob",
    DELETE_ENDPOINT = "sagemaker:DeleteEndpoint",
    DELETE_ENDPOINT_CONFIG = "sagemaker:DeleteEndpointConfig",
    DELETE_MODEL = "sagemaker:DeleteModel",
    DELETE_NOTEBOOK_INSTANCE = "sagemaker:DeleteNotebookInstance",
    DELETE_TAGS = "sagemaker:DeleteTags",
    DESCRIBE_ENDPOINT = "sagemaker:DescribeEndpoint",
    DESCRIBE_ENDPOINT_CONFIG = "sagemaker:DescribeEndpointConfig",
    DESCRIBE_MODEL = "sagemaker:DescribeModel",
    DESCRIBE_NOTEBOOK_INSTANCE = "sagemaker:DescribeNotebookInstance",
    DESCRIBE_TRAINING_JOB = "sagemaker:DescribeTrainingJob",
    INVOKE_ENDPOINT = "sagemaker:InvokeEndpoint",
    LIST_ENDPOINT_CONFIGS = "sagemaker:ListEndpointConfigs",
    LIST_ENDPOINTS = "sagemaker:ListEndpoints",
    LIST_MODELS = "sagemaker:ListModels",
    LIST_NOTEBOOK_INSTANCES = "sagemaker:ListNotebookInstances",
    LIST_TAGS = "sagemaker:ListTags",
    LIST_TRAINING_JOBS = "sagemaker:ListTrainingJobs",
    START_NOTEBOOK_INSTANCE = "sagemaker:StartNotebookInstance",
    STOP_NOTEBOOK_INSTANCE = "sagemaker:StopNotebookInstance",
    STOP_TRAINING_JOB = "sagemaker:StopTrainingJob",
    UPDATE_ENDPOINT = "sagemaker:UpdateEndpoint",
    UPDATE_ENDPOINT_WEIGHTS_AND_CAPACITIES = "sagemaker:UpdateEndpointWeightsAndCapacities",
    UPDATE_NOTEBOOK_INSTANCE = "sagemaker:UpdateNotebookInstance"
}

/** Actions for Amazon Simple Systems Manager
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimplesystemsmanager.html
  */
export enum SSM {
    ADD_TAGS_TO_RESOURCE = "ssm:AddTagsToResource",
    CANCEL_COMMAND = "ssm:CancelCommand",
    CREATE_ACTIVATION = "ssm:CreateActivation",
    CREATE_ASSOCIATION = "ssm:CreateAssociation",
    CREATE_ASSOCIATION_BATCH = "ssm:CreateAssociationBatch",
    CREATE_DOCUMENT = "ssm:CreateDocument",
    CREATE_MAINTENANCE_WINDOW = "ssm:CreateMaintenanceWindow",
    CREATE_PATCH_BASELINE = "ssm:CreatePatchBaseline",
    CREATE_RESOURCE_DATA_SYNC = "ssm:CreateResourceDataSync",
    DELETE_ACTIVATION = "ssm:DeleteActivation",
    DELETE_ASSOCIATION = "ssm:DeleteAssociation",
    DELETE_DOCUMENT = "ssm:DeleteDocument",
    DELETE_MAINTENANCE_WINDOW = "ssm:DeleteMaintenanceWindow",
    DELETE_PARAMETER = "ssm:DeleteParameter",
    DELETE_PARAMETERS = "ssm:DeleteParameters",
    DELETE_PATCH_BASELINE = "ssm:DeletePatchBaseline",
    DELETE_RESOURCE_DATA_SYNC = "ssm:DeleteResourceDataSync",
    DEREGISTER_MANAGED_INSTANCE = "ssm:DeregisterManagedInstance",
    DEREGISTER_PATCH_BASELINE_FOR_PATCH_GROUP = "ssm:DeregisterPatchBaselineForPatchGroup",
    DEREGISTER_TARGET_FROM_MAINTENANCE_WINDOW = "ssm:DeregisterTargetFromMaintenanceWindow",
    DEREGISTER_TASK_FROM_MAINTENANCE_WINDOW = "ssm:DeregisterTaskFromMaintenanceWindow",
    DESCRIBE_ACTIVATIONS = "ssm:DescribeActivations",
    DESCRIBE_ASSOCIATION = "ssm:DescribeAssociation",
    DESCRIBE_AUTOMATION_EXECUTIONS = "ssm:DescribeAutomationExecutions",
    DESCRIBE_AUTOMATION_STEP_EXECUTIONS = "ssm:DescribeAutomationStepExecutions",
    DESCRIBE_AVAILABLE_PATCHES = "ssm:DescribeAvailablePatches",
    DESCRIBE_DOCUMENT = "ssm:DescribeDocument",
    DESCRIBE_DOCUMENT_PARAMETERS = "ssm:DescribeDocumentParameters",
    DESCRIBE_DOCUMENT_PERMISSION = "ssm:DescribeDocumentPermission",
    DESCRIBE_EFFECTIVE_INSTANCE_ASSOCIATIONS = "ssm:DescribeEffectiveInstanceAssociations",
    DESCRIBE_EFFECTIVE_PATCHES_FOR_PATCH_BASELINE = "ssm:DescribeEffectivePatchesForPatchBaseline",
    DESCRIBE_INSTANCE_ASSOCIATIONS_STATUS = "ssm:DescribeInstanceAssociationsStatus",
    DESCRIBE_INSTANCE_INFORMATION = "ssm:DescribeInstanceInformation",
    DESCRIBE_INSTANCE_PATCH_STATES = "ssm:DescribeInstancePatchStates",
    DESCRIBE_INSTANCE_PATCH_STATES_FOR_PATCH_GROUP = "ssm:DescribeInstancePatchStatesForPatchGroup",
    DESCRIBE_INSTANCE_PATCHES = "ssm:DescribeInstancePatches",
    DESCRIBE_INSTANCE_PROPERTIES = "ssm:DescribeInstanceProperties",
    DESCRIBE_MAINTENANCE_WINDOW_EXECUTION_TASK_INVOCATIONS = "ssm:DescribeMaintenanceWindowExecutionTaskInvocations",
    DESCRIBE_MAINTENANCE_WINDOW_EXECUTION_TASKS = "ssm:DescribeMaintenanceWindowExecutionTasks",
    DESCRIBE_MAINTENANCE_WINDOW_EXECUTIONS = "ssm:DescribeMaintenanceWindowExecutions",
    DESCRIBE_MAINTENANCE_WINDOW_TARGETS = "ssm:DescribeMaintenanceWindowTargets",
    DESCRIBE_MAINTENANCE_WINDOW_TASKS = "ssm:DescribeMaintenanceWindowTasks",
    DESCRIBE_MAINTENANCE_WINDOWS = "ssm:DescribeMaintenanceWindows",
    DESCRIBE_PARAMETERS = "ssm:DescribeParameters",
    DESCRIBE_PATCH_BASELINES = "ssm:DescribePatchBaselines",
    DESCRIBE_PATCH_GROUP_STATE = "ssm:DescribePatchGroupState",
    DESCRIBE_PATCH_GROUPS = "ssm:DescribePatchGroups",
    GET_AUTOMATION_EXECUTION = "ssm:GetAutomationExecution",
    GET_COMMAND_INVOCATION = "ssm:GetCommandInvocation",
    GET_DEFAULT_PATCH_BASELINE = "ssm:GetDefaultPatchBaseline",
    GET_DEPLOYABLE_PATCH_SNAPSHOT_FOR_INSTANCE = "ssm:GetDeployablePatchSnapshotForInstance",
    GET_DOCUMENT = "ssm:GetDocument",
    GET_INVENTORY = "ssm:GetInventory",
    GET_INVENTORY_SCHEMA = "ssm:GetInventorySchema",
    GET_MAINTENANCE_WINDOW = "ssm:GetMaintenanceWindow",
    GET_MAINTENANCE_WINDOW_EXECUTION = "ssm:GetMaintenanceWindowExecution",
    GET_MAINTENANCE_WINDOW_EXECUTION_TASK = "ssm:GetMaintenanceWindowExecutionTask",
    GET_MAINTENANCE_WINDOW_EXECUTION_TASK_INVOCATION = "ssm:GetMaintenanceWindowExecutionTaskInvocation",
    GET_MAINTENANCE_WINDOW_TASK = "ssm:GetMaintenanceWindowTask",
    GET_MANIFEST = "ssm:GetManifest",
    GET_PARAMETER = "ssm:GetParameter",
    GET_PARAMETER_HISTORY = "ssm:GetParameterHistory",
    GET_PARAMETERS = "ssm:GetParameters",
    GET_PARAMETERS_BY_PATH = "ssm:GetParametersByPath",
    GET_PATCH_BASELINE = "ssm:GetPatchBaseline",
    GET_PATCH_BASELINE_FOR_PATCH_GROUP = "ssm:GetPatchBaselineForPatchGroup",
    LIST_ASSOCIATION_VERSIONS = "ssm:ListAssociationVersions",
    LIST_ASSOCIATIONS = "ssm:ListAssociations",
    LIST_COMMAND_INVOCATIONS = "ssm:ListCommandInvocations",
    LIST_COMMANDS = "ssm:ListCommands",
    LIST_DOCUMENT_VERSIONS = "ssm:ListDocumentVersions",
    LIST_DOCUMENTS = "ssm:ListDocuments",
    LIST_INSTANCE_ASSOCIATIONS = "ssm:ListInstanceAssociations",
    LIST_INVENTORY_ENTRIES = "ssm:ListInventoryEntries",
    LIST_RESOURCE_DATA_SYNC = "ssm:ListResourceDataSync",
    LIST_TAGS_FOR_RESOURCE = "ssm:ListTagsForResource",
    MODIFY_DOCUMENT_PERMISSION = "ssm:ModifyDocumentPermission",
    PUT_COMPLIANCE_ITEMS = "ssm:PutComplianceItems",
    PUT_CONFIGURE_PACKAGE_RESULT = "ssm:PutConfigurePackageResult",
    PUT_INVENTORY = "ssm:PutInventory",
    PUT_PARAMETER = "ssm:PutParameter",
    REGISTER_DEFAULT_PATCH_BASELINE = "ssm:RegisterDefaultPatchBaseline",
    REGISTER_PATCH_BASELINE_FOR_PATCH_GROUP = "ssm:RegisterPatchBaselineForPatchGroup",
    REGISTER_TARGET_WITH_MAINTENANCE_WINDOW = "ssm:RegisterTargetWithMaintenanceWindow",
    REGISTER_TASK_WITH_MAINTENANCE_WINDOW = "ssm:RegisterTaskWithMaintenanceWindow",
    REMOVE_TAGS_FROM_RESOURCE = "ssm:RemoveTagsFromResource",
    SEND_AUTOMATION_SIGNAL = "ssm:SendAutomationSignal",
    SEND_COMMAND = "ssm:SendCommand",
    START_ASSOCIATIONS_ONCE = "ssm:StartAssociationsOnce",
    START_AUTOMATION_EXECUTION = "ssm:StartAutomationExecution",
    STOP_AUTOMATION_EXECUTION = "ssm:StopAutomationExecution",
    UPDATE_ASSOCIATION = "ssm:UpdateAssociation",
    UPDATE_ASSOCIATION_STATUS = "ssm:UpdateAssociationStatus",
    UPDATE_DOCUMENT = "ssm:UpdateDocument",
    UPDATE_DOCUMENT_DEFAULT_VERSION = "ssm:UpdateDocumentDefaultVersion",
    UPDATE_INSTANCE_ASSOCIATION_STATUS = "ssm:UpdateInstanceAssociationStatus",
    UPDATE_INSTANCE_INFORMATION = "ssm:UpdateInstanceInformation",
    UPDATE_MAINTENANCE_WINDOW = "ssm:UpdateMaintenanceWindow",
    UPDATE_MAINTENANCE_WINDOW_TARGET = "ssm:UpdateMaintenanceWindowTarget",
    UPDATE_MAINTENANCE_WINDOW_TASK = "ssm:UpdateMaintenanceWindowTask",
    UPDATE_MANAGED_INSTANCE_ROLE = "ssm:UpdateManagedInstanceRole",
    UPDATE_PATCH_BASELINE = "ssm:UpdatePatchBaseline"
}

/** Actions for Amazon Simple Workflow Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpleworkflowservice.html
  */
export enum SWF {
    CANCEL_TIMER = "swf:CancelTimer",
    CANCEL_WORKFLOW_EXECUTION = "swf:CancelWorkflowExecution",
    COMPLETE_WORKFLOW_EXECUTION = "swf:CompleteWorkflowExecution",
    CONTINUE_AS_NEW_WORKFLOW_EXECUTION = "swf:ContinueAsNewWorkflowExecution",
    COUNT_CLOSED_WORKFLOW_EXECUTIONS = "swf:CountClosedWorkflowExecutions",
    COUNT_OPEN_WORKFLOW_EXECUTIONS = "swf:CountOpenWorkflowExecutions",
    COUNT_PENDING_ACTIVITY_TASKS = "swf:CountPendingActivityTasks",
    COUNT_PENDING_DECISION_TASKS = "swf:CountPendingDecisionTasks",
    DEPRECATE_ACTIVITY_TYPE = "swf:DeprecateActivityType",
    DEPRECATE_DOMAIN = "swf:DeprecateDomain",
    DEPRECATE_WORKFLOW_TYPE = "swf:DeprecateWorkflowType",
    DESCRIBE_ACTIVITY_TYPE = "swf:DescribeActivityType",
    DESCRIBE_DOMAIN = "swf:DescribeDomain",
    DESCRIBE_WORKFLOW_EXECUTION = "swf:DescribeWorkflowExecution",
    DESCRIBE_WORKFLOW_TYPE = "swf:DescribeWorkflowType",
    FAIL_WORKFLOW_EXECUTION = "swf:FailWorkflowExecution",
    GET_WORKFLOW_EXECUTION_HISTORY = "swf:GetWorkflowExecutionHistory",
    LIST_ACTIVITY_TYPES = "swf:ListActivityTypes",
    LIST_CLOSED_WORKFLOW_EXECUTIONS = "swf:ListClosedWorkflowExecutions",
    LIST_DOMAINS = "swf:ListDomains",
    LIST_OPEN_WORKFLOW_EXECUTIONS = "swf:ListOpenWorkflowExecutions",
    LIST_WORKFLOW_TYPES = "swf:ListWorkflowTypes",
    POLL_FOR_ACTIVITY_TASK = "swf:PollForActivityTask",
    POLL_FOR_DECISION_TASK = "swf:PollForDecisionTask",
    RECORD_ACTIVITY_TASK_HEARTBEAT = "swf:RecordActivityTaskHeartbeat",
    RECORD_MARKER = "swf:RecordMarker",
    REGISTER_ACTIVITY_TYPE = "swf:RegisterActivityType",
    REGISTER_DOMAIN = "swf:RegisterDomain",
    REGISTER_WORKFLOW_TYPE = "swf:RegisterWorkflowType",
    REQUEST_CANCEL_ACTIVITY_TASK = "swf:RequestCancelActivityTask",
    REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION = "swf:RequestCancelExternalWorkflowExecution",
    REQUEST_CANCEL_WORKFLOW_EXECUTION = "swf:RequestCancelWorkflowExecution",
    RESPOND_ACTIVITY_TASK_CANCELED = "swf:RespondActivityTaskCanceled",
    RESPOND_ACTIVITY_TASK_COMPLETED = "swf:RespondActivityTaskCompleted",
    RESPOND_ACTIVITY_TASK_FAILED = "swf:RespondActivityTaskFailed",
    RESPOND_DECISION_TASK_COMPLETED = "swf:RespondDecisionTaskCompleted",
    SCHEDULE_ACTIVITY_TASK = "swf:ScheduleActivityTask",
    SIGNAL_EXTERNAL_WORKFLOW_EXECUTION = "swf:SignalExternalWorkflowExecution",
    SIGNAL_WORKFLOW_EXECUTION = "swf:SignalWorkflowExecution",
    START_CHILD_WORKFLOW_EXECUTION = "swf:StartChildWorkflowExecution",
    START_TIMER = "swf:StartTimer",
    START_WORKFLOW_EXECUTION = "swf:StartWorkflowExecution",
    TERMINATE_WORKFLOW_EXECUTION = "swf:TerminateWorkflowExecution"
}

/** Actions for Amazon SimpleDB
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpledb.html
  */
export enum SDB {
    BATCH_DELETE_ATTRIBUTES = "sdb:BatchDeleteAttributes",
    BATCH_PUT_ATTRIBUTES = "sdb:BatchPutAttributes",
    CREATE_DOMAIN = "sdb:CreateDomain",
    DELETE_ATTRIBUTES = "sdb:DeleteAttributes",
    DELETE_DOMAIN = "sdb:DeleteDomain",
    DOMAIN_METADATA = "sdb:DomainMetadata",
    GET_ATTRIBUTES = "sdb:GetAttributes",
    LIST_DOMAINS = "sdb:ListDomains",
    PUT_ATTRIBUTES = "sdb:PutAttributes",
    SELECT = "sdb:Select"
}

/** Actions for Amazon Storage Gateway
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonstoragegateway.html
  */
export enum StorageGateway {
    ACTIVATE_GATEWAY = "storagegateway:ActivateGateway",
    ADD_CACHE = "storagegateway:AddCache",
    ADD_TAGS_TO_RESOURCE = "storagegateway:AddTagsToResource",
    ADD_UPLOAD_BUFFER = "storagegateway:AddUploadBuffer",
    ADD_WORKING_STORAGE = "storagegateway:AddWorkingStorage",
    CANCEL_ARCHIVAL = "storagegateway:CancelArchival",
    CANCEL_RETRIEVAL = "storagegateway:CancelRetrieval",
    CREATE_CACHEDI_SCSI_VOLUME = "storagegateway:CreateCachediSCSIVolume",
    CREATE_NFS_FILE_SHARE = "storagegateway:CreateNFSFileShare",
    CREATE_SNAPSHOT = "storagegateway:CreateSnapshot",
    CREATE_SNAPSHOT_FROM_VOLUME_RECOVERY_POINT = "storagegateway:CreateSnapshotFromVolumeRecoveryPoint",
    CREATE_STOREDI_SCSI_VOLUME = "storagegateway:CreateStorediSCSIVolume",
    CREATE_TAPE_WITH_BARCODE = "storagegateway:CreateTapeWithBarcode",
    CREATE_TAPES = "storagegateway:CreateTapes",
    DELETE_BANDWIDTH_RATE_LIMIT = "storagegateway:DeleteBandwidthRateLimit",
    DELETE_CHAP_CREDENTIALS = "storagegateway:DeleteChapCredentials",
    DELETE_FILE_SHARE = "storagegateway:DeleteFileShare",
    DELETE_GATEWAY = "storagegateway:DeleteGateway",
    DELETE_SNAPSHOT_SCHEDULE = "storagegateway:DeleteSnapshotSchedule",
    DELETE_TAPE = "storagegateway:DeleteTape",
    DELETE_TAPE_ARCHIVE = "storagegateway:DeleteTapeArchive",
    DELETE_VOLUME = "storagegateway:DeleteVolume",
    DESCRIBE_BANDWIDTH_RATE_LIMIT = "storagegateway:DescribeBandwidthRateLimit",
    DESCRIBE_CACHE = "storagegateway:DescribeCache",
    DESCRIBE_CACHEDI_SCSI_VOLUMES = "storagegateway:DescribeCachediSCSIVolumes",
    DESCRIBE_CHAP_CREDENTIALS = "storagegateway:DescribeChapCredentials",
    DESCRIBE_GATEWAY_INFORMATION = "storagegateway:DescribeGatewayInformation",
    DESCRIBE_MAINTENANCE_START_TIME = "storagegateway:DescribeMaintenanceStartTime",
    DESCRIBE_NFS_FILE_SHARES = "storagegateway:DescribeNFSFileShares",
    DESCRIBE_SNAPSHOT_SCHEDULE = "storagegateway:DescribeSnapshotSchedule",
    DESCRIBE_STOREDI_SCSI_VOLUMES = "storagegateway:DescribeStorediSCSIVolumes",
    DESCRIBE_TAPE_ARCHIVES = "storagegateway:DescribeTapeArchives",
    DESCRIBE_TAPE_RECOVERY_POINTS = "storagegateway:DescribeTapeRecoveryPoints",
    DESCRIBE_TAPES = "storagegateway:DescribeTapes",
    DESCRIBE_UPLOAD_BUFFER = "storagegateway:DescribeUploadBuffer",
    DESCRIBE_VTL_DEVICES = "storagegateway:DescribeVTLDevices",
    DESCRIBE_WORKING_STORAGE = "storagegateway:DescribeWorkingStorage",
    DISABLE_GATEWAY = "storagegateway:DisableGateway",
    LIST_FILE_SHARES = "storagegateway:ListFileShares",
    LIST_GATEWAYS = "storagegateway:ListGateways",
    LIST_LOCAL_DISKS = "storagegateway:ListLocalDisks",
    LIST_TAGS_FOR_RESOURCE = "storagegateway:ListTagsForResource",
    LIST_TAPES = "storagegateway:ListTapes",
    LIST_VOLUME_INITIATORS = "storagegateway:ListVolumeInitiators",
    LIST_VOLUME_RECOVERY_POINTS = "storagegateway:ListVolumeRecoveryPoints",
    LIST_VOLUMES = "storagegateway:ListVolumes",
    REFRESH_CACHE = "storagegateway:RefreshCache",
    REMOVE_TAGS_FROM_RESOURCE = "storagegateway:RemoveTagsFromResource",
    RESET_CACHE = "storagegateway:ResetCache",
    RETRIEVE_TAPE_ARCHIVE = "storagegateway:RetrieveTapeArchive",
    RETRIEVE_TAPE_RECOVERY_POINT = "storagegateway:RetrieveTapeRecoveryPoint",
    SET_LOCAL_CONSOLE_PASSWORD = "storagegateway:SetLocalConsolePassword",
    SHUTDOWN_GATEWAY = "storagegateway:ShutdownGateway",
    START_GATEWAY = "storagegateway:StartGateway",
    UPDATE_BANDWIDTH_RATE_LIMIT = "storagegateway:UpdateBandwidthRateLimit",
    UPDATE_CHAP_CREDENTIALS = "storagegateway:UpdateChapCredentials",
    UPDATE_GATEWAY_INFORMATION = "storagegateway:UpdateGatewayInformation",
    UPDATE_GATEWAY_SOFTWARE_NOW = "storagegateway:UpdateGatewaySoftwareNow",
    UPDATE_MAINTENANCE_START_TIME = "storagegateway:UpdateMaintenanceStartTime",
    UPDATE_NFS_FILE_SHARE = "storagegateway:UpdateNFSFileShare",
    UPDATE_SNAPSHOT_SCHEDULE = "storagegateway:UpdateSnapshotSchedule",
    UPDATE_VTL_DEVICE_TYPE = "storagegateway:UpdateVTLDeviceType"
}

/** Actions for Amazon Transcribe
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranscribe.html
  */
export enum Transcribe {
    GET_TRANSCRIPTION_JOB = "transcribe:GetTranscriptionJob",
    LIST_TRANSCRIPTION_JOBS = "transcribe:ListTranscriptionJobs",
    START_TRANSCRIPTION_JOB = "transcribe:StartTranscriptionJob"
}

/** Actions for Amazon Translate
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranslate.html
  */
export enum Translate {
    TRANSLATE_TEXT = "translate:TranslateText"
}

/** Actions for Amazon WorkDocs
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkdocs.html
  */
export enum WorkDocs {
    ABORT_DOCUMENT_VERSION_UPLOAD = "workdocs:AbortDocumentVersionUpload",
    ACTIVATE_USER = "workdocs:ActivateUser",
    ADD_RESOURCE_PERMISSIONS = "workdocs:AddResourcePermissions",
    ADD_USER_TO_GROUP = "workdocs:AddUserToGroup",
    CHECK_ALIAS = "workdocs:CheckAlias",
    CREATE_FOLDER = "workdocs:CreateFolder",
    CREATE_INSTANCE = "workdocs:CreateInstance",
    CREATE_NOTIFICATION_SUBSCRIPTION = "workdocs:CreateNotificationSubscription",
    CREATE_USER = "workdocs:CreateUser",
    DEACTIVATE_USER = "workdocs:DeactivateUser",
    DELETE_DOCUMENT = "workdocs:DeleteDocument",
    DELETE_FOLDER = "workdocs:DeleteFolder",
    DELETE_FOLDER_CONTENTS = "workdocs:DeleteFolderContents",
    DELETE_INSTANCE = "workdocs:DeleteInstance",
    DELETE_NOTIFICATION_SUBSCRIPTION = "workdocs:DeleteNotificationSubscription",
    DELETE_USER = "workdocs:DeleteUser",
    DEREGISTER_DIRECTORY = "workdocs:DeregisterDirectory",
    DESCRIBE_AVAILABLE_DIRECTORIES = "workdocs:DescribeAvailableDirectories",
    DESCRIBE_DOCUMENT_VERSIONS = "workdocs:DescribeDocumentVersions",
    DESCRIBE_FOLDER_CONTENTS = "workdocs:DescribeFolderContents",
    DESCRIBE_INSTANCES = "workdocs:DescribeInstances",
    DESCRIBE_NOTIFICATION_SUBSCRIPTIONS = "workdocs:DescribeNotificationSubscriptions",
    DESCRIBE_RESOURCE_PERMISSIONS = "workdocs:DescribeResourcePermissions",
    DESCRIBE_USERS = "workdocs:DescribeUsers",
    GET_DOCUMENT = "workdocs:GetDocument",
    GET_DOCUMENT_PATH = "workdocs:GetDocumentPath",
    GET_DOCUMENT_VERSION = "workdocs:GetDocumentVersion",
    GET_FOLDER = "workdocs:GetFolder",
    GET_FOLDER_PATH = "workdocs:GetFolderPath",
    INITIATE_DOCUMENT_VERSION_UPLOAD = "workdocs:InitiateDocumentVersionUpload",
    REGISTER_DIRECTORY = "workdocs:RegisterDirectory",
    REMOVE_ALL_RESOURCE_PERMISSIONS = "workdocs:RemoveAllResourcePermissions",
    REMOVE_RESOURCE_PERMISSION = "workdocs:RemoveResourcePermission",
    REMOVE_USER_FROM_GROUP = "workdocs:RemoveUserFromGroup",
    UPDATE_DOCUMENT = "workdocs:UpdateDocument",
    UPDATE_DOCUMENT_VERSION = "workdocs:UpdateDocumentVersion",
    UPDATE_FOLDER = "workdocs:UpdateFolder",
    UPDATE_INSTANCE_ALIAS = "workdocs:UpdateInstanceAlias",
    UPDATE_USER = "workdocs:UpdateUser"
}

/** Actions for Amazon WorkMail
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkmail.html
  */
export enum WorkMail {
    ADD_MEMBERS_TO_GROUP = "workmail:AddMembersToGroup",
    CREATE_GROUP = "workmail:CreateGroup",
    CREATE_MAIL_DOMAIN = "workmail:CreateMailDomain",
    CREATE_MAIL_USER = "workmail:CreateMailUser",
    CREATE_ORGANIZATION = "workmail:CreateOrganization",
    CREATE_RESOURCE = "workmail:CreateResource",
    DELETE_MAIL_DOMAIN = "workmail:DeleteMailDomain",
    DELETE_MOBILE_DEVICE = "workmail:DeleteMobileDevice",
    DELETE_ORGANIZATION = "workmail:DeleteOrganization",
    DESCRIBE_DIRECTORIES = "workmail:DescribeDirectories",
    DESCRIBE_KMS_KEYS = "workmail:DescribeKmsKeys",
    DESCRIBE_MAIL_DOMAINS = "workmail:DescribeMailDomains",
    DESCRIBE_MAIL_GROUPS = "workmail:DescribeMailGroups",
    DESCRIBE_MAIL_USERS = "workmail:DescribeMailUsers",
    DESCRIBE_ORGANIZATIONS = "workmail:DescribeOrganizations",
    DISABLE_MAIL_GROUPS = "workmail:DisableMailGroups",
    DISABLE_MAIL_USERS = "workmail:DisableMailUsers",
    ENABLE_MAIL_DOMAIN = "workmail:EnableMailDomain",
    ENABLE_MAIL_GROUPS = "workmail:EnableMailGroups",
    ENABLE_MAIL_USERS = "workmail:EnableMailUsers",
    GET_MAIL_DOMAIN_DETAILS = "workmail:GetMailDomainDetails",
    GET_MAIL_GROUP_DETAILS = "workmail:GetMailGroupDetails",
    GET_MAIL_USER_DETAILS = "workmail:GetMailUserDetails",
    GET_MOBILE_DEVICE_DETAILS = "workmail:GetMobileDeviceDetails",
    GET_MOBILE_DEVICES_FOR_USER = "workmail:GetMobileDevicesForUser",
    GET_MOBILE_POLICY_DETAILS = "workmail:GetMobilePolicyDetails",
    LIST_MEMBERS_IN_MAIL_GROUP = "workmail:ListMembersInMailGroup",
    REMOVE_MEMBERS_FROM_GROUP = "workmail:RemoveMembersFromGroup",
    RESET_USER_PASSWORD = "workmail:ResetUserPassword",
    SEARCH_MEMBERS = "workmail:SearchMembers",
    SET_ADMIN = "workmail:SetAdmin",
    SET_DEFAULT_MAIL_DOMAIN = "workmail:SetDefaultMailDomain",
    SET_MAIL_GROUP_DETAILS = "workmail:SetMailGroupDetails",
    SET_MAIL_USER_DETAILS = "workmail:SetMailUserDetails",
    SET_MOBILE_POLICY_DETAILS = "workmail:SetMobilePolicyDetails",
    WIPE_MOBILE_DEVICE = "workmail:WipeMobileDevice"
}

/** Actions for Amazon WorkSpaces
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspaces.html
  */
export enum WorkSpaces {
    CREATE_TAGS = "workspaces:CreateTags",
    CREATE_WORKSPACES = "workspaces:CreateWorkspaces",
    DELETE_TAGS = "workspaces:DeleteTags",
    DESCRIBE_TAGS = "workspaces:DescribeTags",
    DESCRIBE_WORKSPACE_BUNDLES = "workspaces:DescribeWorkspaceBundles",
    DESCRIBE_WORKSPACE_DIRECTORIES = "workspaces:DescribeWorkspaceDirectories",
    DESCRIBE_WORKSPACES = "workspaces:DescribeWorkspaces",
    DESCRIBE_WORKSPACES_CONNECTION_STATUS = "workspaces:DescribeWorkspacesConnectionStatus",
    MODIFY_WORKSPACE_PROPERTIES = "workspaces:ModifyWorkspaceProperties",
    REBOOT_WORKSPACES = "workspaces:RebootWorkspaces",
    REBUILD_WORKSPACES = "workspaces:RebuildWorkspaces",
    START_WORKSPACES = "workspaces:StartWorkspaces",
    STOP_WORKSPACES = "workspaces:StopWorkspaces",
    TERMINATE_WORKSPACES = "workspaces:TerminateWorkspaces"
}

/** Actions for Amazon WorkSpaces Application Manager
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspacesapplicationmanager.html
  */
export enum WAM {
    AUTHENTICATE_PACKAGER = "wam:AuthenticatePackager"
}

/** Actions for Application Auto Scaling
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationautoscaling.html
  */
export enum ApplicationAutoScaling {
    DELETE_SCALING_POLICY = "application-autoscaling:DeleteScalingPolicy",
    DELETE_SCHEDULED_ACTION = "application-autoscaling:DeleteScheduledAction",
    DEREGISTER_SCALABLE_TARGET = "application-autoscaling:DeregisterScalableTarget",
    DESCRIBE_SCALABLE_TARGETS = "application-autoscaling:DescribeScalableTargets",
    DESCRIBE_SCALING_ACTIVITIES = "application-autoscaling:DescribeScalingActivities",
    DESCRIBE_SCALING_POLICIES = "application-autoscaling:DescribeScalingPolicies",
    DESCRIBE_SCHEDULED_ACTIONS = "application-autoscaling:DescribeScheduledActions",
    PUT_SCALING_POLICY = "application-autoscaling:PutScalingPolicy",
    PUT_SCHEDULED_ACTION = "application-autoscaling:PutScheduledAction",
    REGISTER_SCALABLE_TARGET = "application-autoscaling:RegisterScalableTarget"
}

/** Actions for Application Discovery
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationdiscovery.html
  */
export enum Discovery {
    ASSOCIATE_CONFIGURATION_ITEMS_TO_APPLICATION = "discovery:AssociateConfigurationItemsToApplication",
    CREATE_APPLICATION = "discovery:CreateApplication",
    CREATE_TAGS = "discovery:CreateTags",
    DELETE_APPLICATIONS = "discovery:DeleteApplications",
    DELETE_TAGS = "discovery:DeleteTags",
    DESCRIBE_AGENTS = "discovery:DescribeAgents",
    DESCRIBE_CONFIGURATIONS = "discovery:DescribeConfigurations",
    DESCRIBE_EXPORT_CONFIGURATIONS = "discovery:DescribeExportConfigurations",
    DESCRIBE_TAGS = "discovery:DescribeTags",
    DISASSOCIATE_CONFIGURATION_ITEMS_FROM_APPLICATION = "discovery:DisassociateConfigurationItemsFromApplication",
    EXPORT_CONFIGURATIONS = "discovery:ExportConfigurations",
    GET_DISCOVERY_SUMMARY = "discovery:GetDiscoverySummary",
    LIST_CONFIGURATIONS = "discovery:ListConfigurations",
    LIST_SERVER_NEIGHBORS = "discovery:ListServerNeighbors",
    START_DATA_COLLECTION_BY_AGENT_IDS = "discovery:StartDataCollectionByAgentIds",
    START_EXPORT_TASK = "discovery:StartExportTask",
    STOP_DATA_COLLECTION_BY_AGENT_IDS = "discovery:StopDataCollectionByAgentIds",
    UPDATE_APPLICATION = "discovery:UpdateApplication"
}

/** Actions for Auto Scaling
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_autoscaling.html
  */
export enum AutoScaling {
    ATTACH_INSTANCES = "autoscaling:AttachInstances",
    ATTACH_LOAD_BALANCER_TARGET_GROUPS = "autoscaling:AttachLoadBalancerTargetGroups",
    ATTACH_LOAD_BALANCERS = "autoscaling:AttachLoadBalancers",
    COMPLETE_LIFECYCLE_ACTION = "autoscaling:CompleteLifecycleAction",
    CREATE_AUTO_SCALING_GROUP = "autoscaling:CreateAutoScalingGroup",
    CREATE_LAUNCH_CONFIGURATION = "autoscaling:CreateLaunchConfiguration",
    CREATE_OR_UPDATE_TAGS = "autoscaling:CreateOrUpdateTags",
    DELETE_AUTO_SCALING_GROUP = "autoscaling:DeleteAutoScalingGroup",
    DELETE_LAUNCH_CONFIGURATION = "autoscaling:DeleteLaunchConfiguration",
    DELETE_LIFECYCLE_HOOK = "autoscaling:DeleteLifecycleHook",
    DELETE_NOTIFICATION_CONFIGURATION = "autoscaling:DeleteNotificationConfiguration",
    DELETE_POLICY = "autoscaling:DeletePolicy",
    DELETE_SCHEDULED_ACTION = "autoscaling:DeleteScheduledAction",
    DELETE_TAGS = "autoscaling:DeleteTags",
    DESCRIBE_ACCOUNT_LIMITS = "autoscaling:DescribeAccountLimits",
    DESCRIBE_ADJUSTMENT_TYPES = "autoscaling:DescribeAdjustmentTypes",
    DESCRIBE_AUTO_SCALING_GROUPS = "autoscaling:DescribeAutoScalingGroups",
    DESCRIBE_AUTO_SCALING_INSTANCES = "autoscaling:DescribeAutoScalingInstances",
    DESCRIBE_AUTO_SCALING_NOTIFICATION_TYPES = "autoscaling:DescribeAutoScalingNotificationTypes",
    DESCRIBE_LAUNCH_CONFIGURATIONS = "autoscaling:DescribeLaunchConfigurations",
    DESCRIBE_LIFECYCLE_HOOK_TYPES = "autoscaling:DescribeLifecycleHookTypes",
    DESCRIBE_LIFECYCLE_HOOKS = "autoscaling:DescribeLifecycleHooks",
    DESCRIBE_LOAD_BALANCER_TARGET_GROUPS = "autoscaling:DescribeLoadBalancerTargetGroups",
    DESCRIBE_LOAD_BALANCERS = "autoscaling:DescribeLoadBalancers",
    DESCRIBE_METRIC_COLLECTION_TYPES = "autoscaling:DescribeMetricCollectionTypes",
    DESCRIBE_NOTIFICATION_CONFIGURATIONS = "autoscaling:DescribeNotificationConfigurations",
    DESCRIBE_POLICIES = "autoscaling:DescribePolicies",
    DESCRIBE_SCALING_ACTIVITIES = "autoscaling:DescribeScalingActivities",
    DESCRIBE_SCALING_PROCESS_TYPES = "autoscaling:DescribeScalingProcessTypes",
    DESCRIBE_SCHEDULED_ACTIONS = "autoscaling:DescribeScheduledActions",
    DESCRIBE_TAGS = "autoscaling:DescribeTags",
    DESCRIBE_TERMINATION_POLICY_TYPES = "autoscaling:DescribeTerminationPolicyTypes",
    DETACH_INSTANCES = "autoscaling:DetachInstances",
    DETACH_LOAD_BALANCER_TARGET_GROUPS = "autoscaling:DetachLoadBalancerTargetGroups",
    DETACH_LOAD_BALANCERS = "autoscaling:DetachLoadBalancers",
    DISABLE_METRICS_COLLECTION = "autoscaling:DisableMetricsCollection",
    ENABLE_METRICS_COLLECTION = "autoscaling:EnableMetricsCollection",
    ENTER_STANDBY = "autoscaling:EnterStandby",
    EXECUTE_POLICY = "autoscaling:ExecutePolicy",
    EXIT_STANDBY = "autoscaling:ExitStandby",
    PUT_LIFECYCLE_HOOK = "autoscaling:PutLifecycleHook",
    PUT_NOTIFICATION_CONFIGURATION = "autoscaling:PutNotificationConfiguration",
    PUT_SCALING_POLICY = "autoscaling:PutScalingPolicy",
    PUT_SCHEDULED_UPDATE_GROUP_ACTION = "autoscaling:PutScheduledUpdateGroupAction",
    RECORD_LIFECYCLE_ACTION_HEARTBEAT = "autoscaling:RecordLifecycleActionHeartbeat",
    RESUME_PROCESSES = "autoscaling:ResumeProcesses",
    SET_DESIRED_CAPACITY = "autoscaling:SetDesiredCapacity",
    SET_INSTANCE_HEALTH = "autoscaling:SetInstanceHealth",
    SET_INSTANCE_PROTECTION = "autoscaling:SetInstanceProtection",
    SUSPEND_PROCESSES = "autoscaling:SuspendProcesses",
    TERMINATE_INSTANCE_IN_AUTO_SCALING_GROUP = "autoscaling:TerminateInstanceInAutoScalingGroup",
    UPDATE_AUTO_SCALING_GROUP = "autoscaling:UpdateAutoScalingGroup"
}

/** Actions for Auto Scaling Plans
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_autoscalingplans.html
  */
export enum AutoScalingPlans {
    CREATE_SCALING_PLAN = "autoscaling-plans:CreateScalingPlan",
    DELETE_SCALING_PLAN = "autoscaling-plans:DeleteScalingPlan",
    DESCRIBE_SCALING_PLAN_RESOURCES = "autoscaling-plans:DescribeScalingPlanResources",
    DESCRIBE_SCALING_PLANS = "autoscaling-plans:DescribeScalingPlans"
}

/** Actions for Data Pipeline
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_datapipeline.html
  */
export enum DataPipeline {
    ACTIVATE_PIPELINE = "datapipeline:ActivatePipeline",
    ADD_TAGS = "datapipeline:AddTags",
    CREATE_PIPELINE = "datapipeline:CreatePipeline",
    DEACTIVATE_PIPELINE = "datapipeline:DeactivatePipeline",
    DELETE_PIPELINE = "datapipeline:DeletePipeline",
    DESCRIBE_OBJECTS = "datapipeline:DescribeObjects",
    DESCRIBE_PIPELINES = "datapipeline:DescribePipelines",
    EVALUATE_EXPRESSION = "datapipeline:EvaluateExpression",
    GET_ACCOUNT_LIMITS = "datapipeline:GetAccountLimits",
    GET_PIPELINE_DEFINITION = "datapipeline:GetPipelineDefinition",
    LIST_PIPELINES = "datapipeline:ListPipelines",
    POLL_FOR_TASK = "datapipeline:PollForTask",
    PUT_ACCOUNT_LIMITS = "datapipeline:PutAccountLimits",
    PUT_PIPELINE_DEFINITION = "datapipeline:PutPipelineDefinition",
    QUERY_OBJECTS = "datapipeline:QueryObjects",
    REMOVE_TAGS = "datapipeline:RemoveTags",
    REPORT_TASK_PROGRESS = "datapipeline:ReportTaskProgress",
    REPORT_TASK_RUNNER_HEARTBEAT = "datapipeline:ReportTaskRunnerHeartbeat",
    SET_STATUS = "datapipeline:SetStatus",
    SET_TASK_STATUS = "datapipeline:SetTaskStatus",
    VALIDATE_PIPELINE_DEFINITION = "datapipeline:ValidatePipelineDefinition"
}

/** Actions for Elastic Load Balancing
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancing.html
  */
export enum ElasticLoadBalancing {
    ADD_TAGS = "elasticloadbalancing:AddTags",
    APPLY_SECURITY_GROUPS_TO_LOAD_BALANCER = "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",
    ATTACH_LOAD_BALANCER_TO_SUBNETS = "elasticloadbalancing:AttachLoadBalancerToSubnets",
    CONFIGURE_HEALTH_CHECK = "elasticloadbalancing:ConfigureHealthCheck",
    CREATE_APP_COOKIE_STICKINESS_POLICY = "elasticloadbalancing:CreateAppCookieStickinessPolicy",
    CREATE_LB_COOKIE_STICKINESS_POLICY = "elasticloadbalancing:CreateLBCookieStickinessPolicy",
    CREATE_LOAD_BALANCER = "elasticloadbalancing:CreateLoadBalancer",
    CREATE_LOAD_BALANCER_LISTENERS = "elasticloadbalancing:CreateLoadBalancerListeners",
    CREATE_LOAD_BALANCER_POLICY = "elasticloadbalancing:CreateLoadBalancerPolicy",
    DELETE_LOAD_BALANCER = "elasticloadbalancing:DeleteLoadBalancer",
    DELETE_LOAD_BALANCER_LISTENERS = "elasticloadbalancing:DeleteLoadBalancerListeners",
    DELETE_LOAD_BALANCER_POLICY = "elasticloadbalancing:DeleteLoadBalancerPolicy",
    DEREGISTER_INSTANCES_FROM_LOAD_BALANCER = "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",
    DESCRIBE_INSTANCE_HEALTH = "elasticloadbalancing:DescribeInstanceHealth",
    DESCRIBE_LOAD_BALANCER_ATTRIBUTES = "elasticloadbalancing:DescribeLoadBalancerAttributes",
    DESCRIBE_LOAD_BALANCER_POLICIES = "elasticloadbalancing:DescribeLoadBalancerPolicies",
    DESCRIBE_LOAD_BALANCER_POLICY_TYPES = "elasticloadbalancing:DescribeLoadBalancerPolicyTypes",
    DESCRIBE_LOAD_BALANCERS = "elasticloadbalancing:DescribeLoadBalancers",
    DESCRIBE_TAGS = "elasticloadbalancing:DescribeTags",
    DETACH_LOAD_BALANCER_FROM_SUBNETS = "elasticloadbalancing:DetachLoadBalancerFromSubnets",
    DISABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER = "elasticloadbalancing:DisableAvailabilityZonesForLoadBalancer",
    ENABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER = "elasticloadbalancing:EnableAvailabilityZonesForLoadBalancer",
    MODIFY_LOAD_BALANCER_ATTRIBUTES = "elasticloadbalancing:ModifyLoadBalancerAttributes",
    REGISTER_INSTANCES_WITH_LOAD_BALANCER = "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
    REMOVE_TAGS = "elasticloadbalancing:RemoveTags",
    SET_LOAD_BALANCER_LISTENER_SSL_CERTIFICATE = "elasticloadbalancing:SetLoadBalancerListenerSSLCertificate",
    SET_LOAD_BALANCER_POLICIES_FOR_BACKEND_SERVER = "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer",
    SET_LOAD_BALANCER_POLICIES_OF_LISTENER = "elasticloadbalancing:SetLoadBalancerPoliciesOfListener"
}

/** Actions for Elastic Load Balancing V2
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancingv2.html
  */
export enum ElasticLoadBalancingV2 {
    ADD_TAGS = "elasticloadbalancing:AddTags",
    CREATE_LISTENER = "elasticloadbalancing:CreateListener",
    CREATE_LOAD_BALANCER = "elasticloadbalancing:CreateLoadBalancer",
    CREATE_RULE = "elasticloadbalancing:CreateRule",
    CREATE_TARGET_GROUP = "elasticloadbalancing:CreateTargetGroup",
    DELETE_LISTENER = "elasticloadbalancing:DeleteListener",
    DELETE_LOAD_BALANCER = "elasticloadbalancing:DeleteLoadBalancer",
    DELETE_RULE = "elasticloadbalancing:DeleteRule",
    DELETE_TARGET_GROUP = "elasticloadbalancing:DeleteTargetGroup",
    DEREGISTER_TARGETS = "elasticloadbalancing:DeregisterTargets",
    DESCRIBE_LISTENERS = "elasticloadbalancing:DescribeListeners",
    DESCRIBE_LOAD_BALANCER_ATTRIBUTES = "elasticloadbalancing:DescribeLoadBalancerAttributes",
    DESCRIBE_LOAD_BALANCERS = "elasticloadbalancing:DescribeLoadBalancers",
    DESCRIBE_RULES = "elasticloadbalancing:DescribeRules",
    DESCRIBE_SSL_POLICIES = "elasticloadbalancing:DescribeSSLPolicies",
    DESCRIBE_TAGS = "elasticloadbalancing:DescribeTags",
    DESCRIBE_TARGET_GROUP_ATTRIBUTES = "elasticloadbalancing:DescribeTargetGroupAttributes",
    DESCRIBE_TARGET_GROUPS = "elasticloadbalancing:DescribeTargetGroups",
    DESCRIBE_TARGET_HEALTH = "elasticloadbalancing:DescribeTargetHealth",
    MODIFY_LISTENER = "elasticloadbalancing:ModifyListener",
    MODIFY_LOAD_BALANCER_ATTRIBUTES = "elasticloadbalancing:ModifyLoadBalancerAttributes",
    MODIFY_RULE = "elasticloadbalancing:ModifyRule",
    MODIFY_TARGET_GROUP = "elasticloadbalancing:ModifyTargetGroup",
    MODIFY_TARGET_GROUP_ATTRIBUTES = "elasticloadbalancing:ModifyTargetGroupAttributes",
    REGISTER_TARGETS = "elasticloadbalancing:RegisterTargets",
    REMOVE_TAGS = "elasticloadbalancing:RemoveTags",
    SET_IP_ADDRESS_TYPE = "elasticloadbalancing:SetIpAddressType",
    SET_RULE_PRIORITIES = "elasticloadbalancing:SetRulePriorities",
    SET_SECURITY_GROUPS = "elasticloadbalancing:SetSecurityGroups",
    SET_SUBNETS = "elasticloadbalancing:SetSubnets"
}

/** Actions for Identity And Access Management
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_identityandaccessmanagement.html
  */
export enum IAM {
    ADD_CLIENT_ID_TO_OPEN_ID_CONNECT_PROVIDER = "iam:AddClientIDToOpenIDConnectProvider",
    ADD_ROLE_TO_INSTANCE_PROFILE = "iam:AddRoleToInstanceProfile",
    ADD_USER_TO_GROUP = "iam:AddUserToGroup",
    ATTACH_GROUP_POLICY = "iam:AttachGroupPolicy",
    ATTACH_ROLE_POLICY = "iam:AttachRolePolicy",
    ATTACH_USER_POLICY = "iam:AttachUserPolicy",
    CHANGE_PASSWORD = "iam:ChangePassword",
    CREATE_ACCESS_KEY = "iam:CreateAccessKey",
    CREATE_ACCOUNT_ALIAS = "iam:CreateAccountAlias",
    CREATE_GROUP = "iam:CreateGroup",
    CREATE_INSTANCE_PROFILE = "iam:CreateInstanceProfile",
    CREATE_LOGIN_PROFILE = "iam:CreateLoginProfile",
    CREATE_OPEN_ID_CONNECT_PROVIDER = "iam:CreateOpenIDConnectProvider",
    CREATE_POLICY = "iam:CreatePolicy",
    CREATE_POLICY_VERSION = "iam:CreatePolicyVersion",
    CREATE_ROLE = "iam:CreateRole",
    CREATE_SAML_PROVIDER = "iam:CreateSAMLProvider",
    CREATE_SERVICE_LINKED_ROLE = "iam:CreateServiceLinkedRole",
    CREATE_SERVICE_SPECIFIC_CREDENTIAL = "iam:CreateServiceSpecificCredential",
    CREATE_USER = "iam:CreateUser",
    CREATE_VIRTUAL_MFA_DEVICE = "iam:CreateVirtualMFADevice",
    DEACTIVATE_MFA_DEVICE = "iam:DeactivateMFADevice",
    DELETE_ACCESS_KEY = "iam:DeleteAccessKey",
    DELETE_ACCOUNT_ALIAS = "iam:DeleteAccountAlias",
    DELETE_ACCOUNT_PASSWORD_POLICY = "iam:DeleteAccountPasswordPolicy",
    DELETE_GROUP = "iam:DeleteGroup",
    DELETE_GROUP_POLICY = "iam:DeleteGroupPolicy",
    DELETE_INSTANCE_PROFILE = "iam:DeleteInstanceProfile",
    DELETE_LOGIN_PROFILE = "iam:DeleteLoginProfile",
    DELETE_OPEN_ID_CONNECT_PROVIDER = "iam:DeleteOpenIDConnectProvider",
    DELETE_POLICY = "iam:DeletePolicy",
    DELETE_POLICY_VERSION = "iam:DeletePolicyVersion",
    DELETE_ROLE = "iam:DeleteRole",
    DELETE_ROLE_POLICY = "iam:DeleteRolePolicy",
    DELETE_SAML_PROVIDER = "iam:DeleteSAMLProvider",
    DELETE_SSH_PUBLIC_KEY = "iam:DeleteSSHPublicKey",
    DELETE_SERVER_CERTIFICATE = "iam:DeleteServerCertificate",
    DELETE_SERVICE_LINKED_ROLE = "iam:DeleteServiceLinkedRole",
    DELETE_SERVICE_SPECIFIC_CREDENTIAL = "iam:DeleteServiceSpecificCredential",
    DELETE_SIGNING_CERTIFICATE = "iam:DeleteSigningCertificate",
    DELETE_USER = "iam:DeleteUser",
    DELETE_USER_POLICY = "iam:DeleteUserPolicy",
    DELETE_VIRTUAL_MFA_DEVICE = "iam:DeleteVirtualMFADevice",
    DETACH_GROUP_POLICY = "iam:DetachGroupPolicy",
    DETACH_ROLE_POLICY = "iam:DetachRolePolicy",
    DETACH_USER_POLICY = "iam:DetachUserPolicy",
    ENABLE_MFA_DEVICE = "iam:EnableMFADevice",
    GENERATE_CREDENTIAL_REPORT = "iam:GenerateCredentialReport",
    GENERATE_SERVICE_LAST_ACCESSED_DETAILS = "iam:GenerateServiceLastAccessedDetails",
    GET_ACCESS_KEY_LAST_USED = "iam:GetAccessKeyLastUsed",
    GET_ACCOUNT_AUTHORIZATION_DETAILS = "iam:GetAccountAuthorizationDetails",
    GET_ACCOUNT_PASSWORD_POLICY = "iam:GetAccountPasswordPolicy",
    GET_ACCOUNT_SUMMARY = "iam:GetAccountSummary",
    GET_CONTEXT_KEYS_FOR_CUSTOM_POLICY = "iam:GetContextKeysForCustomPolicy",
    GET_CONTEXT_KEYS_FOR_PRINCIPAL_POLICY = "iam:GetContextKeysForPrincipalPolicy",
    GET_CREDENTIAL_REPORT = "iam:GetCredentialReport",
    GET_GROUP = "iam:GetGroup",
    GET_GROUP_POLICY = "iam:GetGroupPolicy",
    GET_INSTANCE_PROFILE = "iam:GetInstanceProfile",
    GET_LOGIN_PROFILE = "iam:GetLoginProfile",
    GET_OPEN_ID_CONNECT_PROVIDER = "iam:GetOpenIDConnectProvider",
    GET_POLICY = "iam:GetPolicy",
    GET_POLICY_VERSION = "iam:GetPolicyVersion",
    GET_ROLE = "iam:GetRole",
    GET_ROLE_POLICY = "iam:GetRolePolicy",
    GET_SAML_PROVIDER = "iam:GetSAMLProvider",
    GET_SSH_PUBLIC_KEY = "iam:GetSSHPublicKey",
    GET_SERVER_CERTIFICATE = "iam:GetServerCertificate",
    GET_SERVICE_LAST_ACCESSED_DETAILS = "iam:GetServiceLastAccessedDetails",
    GET_SERVICE_LAST_ACCESSED_DETAILS_WITH_ENTITIES = "iam:GetServiceLastAccessedDetailsWithEntities",
    GET_SERVICE_LINKED_ROLE_DELETION_STATUS = "iam:GetServiceLinkedRoleDeletionStatus",
    GET_USER = "iam:GetUser",
    GET_USER_POLICY = "iam:GetUserPolicy",
    LIST_ACCESS_KEYS = "iam:ListAccessKeys",
    LIST_ACCOUNT_ALIASES = "iam:ListAccountAliases",
    LIST_ATTACHED_GROUP_POLICIES = "iam:ListAttachedGroupPolicies",
    LIST_ATTACHED_ROLE_POLICIES = "iam:ListAttachedRolePolicies",
    LIST_ATTACHED_USER_POLICIES = "iam:ListAttachedUserPolicies",
    LIST_ENTITIES_FOR_POLICY = "iam:ListEntitiesForPolicy",
    LIST_GROUP_POLICIES = "iam:ListGroupPolicies",
    LIST_GROUPS = "iam:ListGroups",
    LIST_GROUPS_FOR_USER = "iam:ListGroupsForUser",
    LIST_INSTANCE_PROFILES = "iam:ListInstanceProfiles",
    LIST_INSTANCE_PROFILES_FOR_ROLE = "iam:ListInstanceProfilesForRole",
    LIST_MFA_DEVICES = "iam:ListMFADevices",
    LIST_OPEN_ID_CONNECT_PROVIDERS = "iam:ListOpenIDConnectProviders",
    LIST_POLICIES = "iam:ListPolicies",
    LIST_POLICIES_GRANTING_SERVICE_ACCESS = "iam:ListPoliciesGrantingServiceAccess",
    LIST_POLICY_VERSIONS = "iam:ListPolicyVersions",
    LIST_ROLE_POLICIES = "iam:ListRolePolicies",
    LIST_ROLES = "iam:ListRoles",
    LIST_SAML_PROVIDERS = "iam:ListSAMLProviders",
    LIST_SSH_PUBLIC_KEYS = "iam:ListSSHPublicKeys",
    LIST_SERVER_CERTIFICATES = "iam:ListServerCertificates",
    LIST_SERVICE_SPECIFIC_CREDENTIALS = "iam:ListServiceSpecificCredentials",
    LIST_SIGNING_CERTIFICATES = "iam:ListSigningCertificates",
    LIST_USER_POLICIES = "iam:ListUserPolicies",
    LIST_USERS = "iam:ListUsers",
    LIST_VIRTUAL_MFA_DEVICES = "iam:ListVirtualMFADevices",
    PASS_ROLE = "iam:PassRole",
    PUT_GROUP_POLICY = "iam:PutGroupPolicy",
    PUT_ROLE_POLICY = "iam:PutRolePolicy",
    PUT_USER_POLICY = "iam:PutUserPolicy",
    REMOVE_CLIENT_ID_FROM_OPEN_ID_CONNECT_PROVIDER = "iam:RemoveClientIDFromOpenIDConnectProvider",
    REMOVE_ROLE_FROM_INSTANCE_PROFILE = "iam:RemoveRoleFromInstanceProfile",
    REMOVE_USER_FROM_GROUP = "iam:RemoveUserFromGroup",
    RESET_SERVICE_SPECIFIC_CREDENTIAL = "iam:ResetServiceSpecificCredential",
    RESYNC_MFA_DEVICE = "iam:ResyncMFADevice",
    SET_DEFAULT_POLICY_VERSION = "iam:SetDefaultPolicyVersion",
    SIMULATE_CUSTOM_POLICY = "iam:SimulateCustomPolicy",
    SIMULATE_PRINCIPAL_POLICY = "iam:SimulatePrincipalPolicy",
    UPDATE_ACCESS_KEY = "iam:UpdateAccessKey",
    UPDATE_ACCOUNT_PASSWORD_POLICY = "iam:UpdateAccountPasswordPolicy",
    UPDATE_ASSUME_ROLE_POLICY = "iam:UpdateAssumeRolePolicy",
    UPDATE_GROUP = "iam:UpdateGroup",
    UPDATE_LOGIN_PROFILE = "iam:UpdateLoginProfile",
    UPDATE_OPEN_ID_CONNECT_PROVIDER_THUMBPRINT = "iam:UpdateOpenIDConnectProviderThumbprint",
    UPDATE_ROLE_DESCRIPTION = "iam:UpdateRoleDescription",
    UPDATE_SAML_PROVIDER = "iam:UpdateSAMLProvider",
    UPDATE_SSH_PUBLIC_KEY = "iam:UpdateSSHPublicKey",
    UPDATE_SERVER_CERTIFICATE = "iam:UpdateServerCertificate",
    UPDATE_SERVICE_SPECIFIC_CREDENTIAL = "iam:UpdateServiceSpecificCredential",
    UPDATE_SIGNING_CERTIFICATE = "iam:UpdateSigningCertificate",
    UPDATE_USER = "iam:UpdateUser",
    UPLOAD_SSH_PUBLIC_KEY = "iam:UploadSSHPublicKey",
    UPLOAD_SERVER_CERTIFICATE = "iam:UploadServerCertificate",
    UPLOAD_SIGNING_CERTIFICATE = "iam:UploadSigningCertificate"
}

/** Actions for Manage Amazon API Gateway
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_manageamazonapigateway.html
  */
export enum APIGateway {
    DELETE = "apigateway:DELETE",
    GET = "apigateway:GET",
    HEAD = "apigateway:HEAD",
    OPTIONS = "apigateway:OPTIONS",
    PATCH = "apigateway:PATCH",
    POST = "apigateway:POST",
    PUT = "apigateway:PUT"
}

/** Actions for Single Sign-On
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_singlesignon.html
  */
export enum SSO {
    ASSOCIATE_DIRECTORY = "sso:AssociateDirectory",
    ASSOCIATE_PROFILE = "sso:AssociateProfile",
    CREATE_APPLICATION_INSTANCE = "sso:CreateApplicationInstance",
    CREATE_APPLICATION_INSTANCE_CERTIFICATE = "sso:CreateApplicationInstanceCertificate",
    CREATE_PERMISSION_SET = "sso:CreatePermissionSet",
    CREATE_PROFILE = "sso:CreateProfile",
    CREATE_TRUST = "sso:CreateTrust",
    DELETE_APPLICATION_INSTANCE = "sso:DeleteApplicationInstance",
    DELETE_APPLICATION_INSTANCE_CERTIFICATE = "sso:DeleteApplicationInstanceCertificate",
    DELETE_PERMISSION_SET = "sso:DeletePermissionSet",
    DELETE_PERMISSIONS_POLICY = "sso:DeletePermissionsPolicy",
    DELETE_PROFILE = "sso:DeleteProfile",
    DESCRIBE_PERMISSIONS_POLICIES = "sso:DescribePermissionsPolicies",
    DISASSOCIATE_DIRECTORY = "sso:DisassociateDirectory",
    DISASSOCIATE_PROFILE = "sso:DisassociateProfile",
    GET_APPLICATION_INSTANCE = "sso:GetApplicationInstance",
    GET_APPLICATION_TEMPLATE = "sso:GetApplicationTemplate",
    GET_PERMISSION_SET = "sso:GetPermissionSet",
    GET_PROFILE = "sso:GetProfile",
    GET_SSO_STATUS = "sso:GetSSOStatus",
    GET_TRUST = "sso:GetTrust",
    IMPORT_APPLICATION_INSTANCE_SERVICE_PROVIDER_METADATA = "sso:ImportApplicationInstanceServiceProviderMetadata",
    LIST_APPLICATION_INSTANCE_CERTIFICATES = "sso:ListApplicationInstanceCertificates",
    LIST_APPLICATION_INSTANCES = "sso:ListApplicationInstances",
    LIST_APPLICATION_TEMPLATES = "sso:ListApplicationTemplates",
    LIST_DIRECTORY_ASSOCIATIONS = "sso:ListDirectoryAssociations",
    LIST_PERMISSION_SETS = "sso:ListPermissionSets",
    LIST_PROFILE_ASSOCIATIONS = "sso:ListProfileAssociations",
    LIST_PROFILES = "sso:ListProfiles",
    PUT_PERMISSIONS_POLICY = "sso:PutPermissionsPolicy",
    START_SSO = "sso:StartSSO",
    UPDATE_APPLICATION_INSTANCE_ACTIVE_CERTIFICATE = "sso:UpdateApplicationInstanceActiveCertificate",
    UPDATE_APPLICATION_INSTANCE_DISPLAY_DATA = "sso:UpdateApplicationInstanceDisplayData",
    UPDATE_APPLICATION_INSTANCE_RESPONSE_CONFIGURATION = "sso:UpdateApplicationInstanceResponseConfiguration",
    UPDATE_APPLICATION_INSTANCE_RESPONSE_SCHEMA_CONFIGURATION = "sso:UpdateApplicationInstanceResponseSchemaConfiguration",
    UPDATE_APPLICATION_INSTANCE_SECURITY_CONFIGURATION = "sso:UpdateApplicationInstanceSecurityConfiguration",
    UPDATE_APPLICATION_INSTANCE_SERVICE_PROVIDER_CONFIGURATION = "sso:UpdateApplicationInstanceServiceProviderConfiguration",
    UPDATE_APPLICATION_INSTANCE_STATUS = "sso:UpdateApplicationInstanceStatus",
    UPDATE_DIRECTORY_ASSOCIATION = "sso:UpdateDirectoryAssociation",
    UPDATE_PROFILE = "sso:UpdateProfile",
    UPDATE_TRUST = "sso:UpdateTrust"
}
