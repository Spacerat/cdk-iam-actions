/** Actions for AWS AppSync
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappsync.html
  */
export enum AppSync {
    CreateApiKey = "appsync:CreateApiKey",
    CreateDataSource = "appsync:CreateDataSource",
    CreateGraphqlApi = "appsync:CreateGraphqlApi",
    CreateResolver = "appsync:CreateResolver",
    CreateType = "appsync:CreateType",
    DeleteApiKey = "appsync:DeleteApiKey",
    DeleteDataSource = "appsync:DeleteDataSource",
    DeleteGraphqlApi = "appsync:DeleteGraphqlApi",
    DeleteResolver = "appsync:DeleteResolver",
    DeleteType = "appsync:DeleteType",
    GetDataSource = "appsync:GetDataSource",
    GetGraphqlApi = "appsync:GetGraphqlApi",
    GetIntrospectionSchema = "appsync:GetIntrospectionSchema",
    GetResolver = "appsync:GetResolver",
    GetSchemaCreationStatus = "appsync:GetSchemaCreationStatus",
    GetType = "appsync:GetType",
    GraphQL = "appsync:GraphQL",
    ListApiKeys = "appsync:ListApiKeys",
    ListDataSources = "appsync:ListDataSources",
    ListGraphqlApis = "appsync:ListGraphqlApis",
    ListResolvers = "appsync:ListResolvers",
    ListTypes = "appsync:ListTypes",
    StartSchemaCreation = "appsync:StartSchemaCreation",
    UpdateApiKey = "appsync:UpdateApiKey",
    UpdateDataSource = "appsync:UpdateDataSource",
    UpdateGraphqlApi = "appsync:UpdateGraphqlApi",
    UpdateResolver = "appsync:UpdateResolver",
    UpdateType = "appsync:UpdateType"
}

/** Actions for AWS Artifact
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsartifact.html
  */
export enum Artifact {
    AcceptAgreement = "artifact:AcceptAgreement",
    DownloadAgreement = "artifact:DownloadAgreement",
    Get = "artifact:Get",
    TerminateAgreement = "artifact:TerminateAgreement"
}

/** Actions for AWS Batch
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html
  */
export enum Batch {
    CancelJob = "batch:CancelJob",
    CreateComputeEnvironment = "batch:CreateComputeEnvironment",
    CreateJobQueue = "batch:CreateJobQueue",
    DeleteComputeEnvironment = "batch:DeleteComputeEnvironment",
    DeleteJobQueue = "batch:DeleteJobQueue",
    DeregisterJobDefinition = "batch:DeregisterJobDefinition",
    DescribeComputeEnvironments = "batch:DescribeComputeEnvironments",
    DescribeJobDefinitions = "batch:DescribeJobDefinitions",
    DescribeJobQueues = "batch:DescribeJobQueues",
    DescribeJobs = "batch:DescribeJobs",
    ListJobs = "batch:ListJobs",
    RegisterJobDefinition = "batch:RegisterJobDefinition",
    SubmitJob = "batch:SubmitJob",
    TerminateJob = "batch:TerminateJob",
    UpdateComputeEnvironment = "batch:UpdateComputeEnvironment",
    UpdateJobQueue = "batch:UpdateJobQueue"
}

/** Actions for AWS Billing
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbilling.html
  */
export enum AWSPortal {
    ModifyAccount = "aws-portal:ModifyAccount",
    ModifyBilling = "aws-portal:ModifyBilling",
    ModifyPaymentMethods = "aws-portal:ModifyPaymentMethods",
    ViewAccount = "aws-portal:ViewAccount",
    ViewBilling = "aws-portal:ViewBilling",
    ViewPaymentMethods = "aws-portal:ViewPaymentMethods",
    ViewUsage = "aws-portal:ViewUsage"
}

/** Actions for AWS Budget Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbudgetservice.html
  */
export enum BudgetS {
    ModifyBudget = "budgets:ModifyBudget",
    ViewBudget = "budgets:ViewBudget"
}

/** Actions for AWS Certificate Manager
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscertificatemanager.html
  */
export enum ACM {
    AddTagsToCertificate = "acm:AddTagsToCertificate",
    DeleteCertificate = "acm:DeleteCertificate",
    DescribeCertificate = "acm:DescribeCertificate",
    GetCertificate = "acm:GetCertificate",
    ImportCertificate = "acm:ImportCertificate",
    ListCertificates = "acm:ListCertificates",
    ListTagsForCertificate = "acm:ListTagsForCertificate",
    RemoveTagsFromCertificate = "acm:RemoveTagsFromCertificate",
    RequestCertificate = "acm:RequestCertificate",
    ResendValidationEmail = "acm:ResendValidationEmail"
}

/** Actions for AWS Cloud9
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html
  */
export enum Cloud9 {
    CreateEnvironmentEC2 = "cloud9:CreateEnvironmentEC2",
    CreateEnvironmentMembership = "cloud9:CreateEnvironmentMembership",
    CreateEnvironmentSSH = "cloud9:CreateEnvironmentSSH",
    DeleteEnvironment = "cloud9:DeleteEnvironment",
    DeleteEnvironmentMembership = "cloud9:DeleteEnvironmentMembership",
    DescribeEnvironmentMemberships = "cloud9:DescribeEnvironmentMemberships",
    DescribeEnvironmentStatus = "cloud9:DescribeEnvironmentStatus",
    DescribeEnvironments = "cloud9:DescribeEnvironments",
    GetUserPublicKey = "cloud9:GetUserPublicKey",
    ListEnvironments = "cloud9:ListEnvironments",
    UpdateEnvironment = "cloud9:UpdateEnvironment",
    UpdateEnvironmentMembership = "cloud9:UpdateEnvironmentMembership",
    ValidateEnvironmentName = "cloud9:ValidateEnvironmentName"
}

/** Actions for AWS CloudFormation
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudformation.html
  */
export enum CloudFormation {
    CancelUpdateStack = "cloudformation:CancelUpdateStack",
    ContinueUpdateRollback = "cloudformation:ContinueUpdateRollback",
    CreateChangeSet = "cloudformation:CreateChangeSet",
    CreateStack = "cloudformation:CreateStack",
    CreateUploadBucket = "cloudformation:CreateUploadBucket",
    DeleteChangeSet = "cloudformation:DeleteChangeSet",
    DeleteStack = "cloudformation:DeleteStack",
    DescribeAccountLimits = "cloudformation:DescribeAccountLimits",
    DescribeChangeSet = "cloudformation:DescribeChangeSet",
    DescribeStackEvents = "cloudformation:DescribeStackEvents",
    DescribeStackResource = "cloudformation:DescribeStackResource",
    DescribeStackResources = "cloudformation:DescribeStackResources",
    DescribeStacks = "cloudformation:DescribeStacks",
    EstimateTemplateCost = "cloudformation:EstimateTemplateCost",
    ExecuteChangeSet = "cloudformation:ExecuteChangeSet",
    GetStackPolicy = "cloudformation:GetStackPolicy",
    GetTemplate = "cloudformation:GetTemplate",
    GetTemplateSummary = "cloudformation:GetTemplateSummary",
    ListChangeSets = "cloudformation:ListChangeSets",
    ListExports = "cloudformation:ListExports",
    ListImports = "cloudformation:ListImports",
    ListStackResources = "cloudformation:ListStackResources",
    ListStacks = "cloudformation:ListStacks",
    PreviewStackUpdate = "cloudformation:PreviewStackUpdate",
    SetStackPolicy = "cloudformation:SetStackPolicy",
    SignalResource = "cloudformation:SignalResource",
    UpdateStack = "cloudformation:UpdateStack",
    UpdateTerminationProtection = "cloudformation:UpdateTerminationProtection",
    ValidateTemplate = "cloudformation:ValidateTemplate"
}

/** Actions for AWS CloudHSM
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudhsm.html
  */
export enum CloudHSM {
    AddTagsToResource = "cloudhsm:AddTagsToResource",
    CreateHapg = "cloudhsm:CreateHapg",
    CreateHsm = "cloudhsm:CreateHsm",
    CreateLunaClient = "cloudhsm:CreateLunaClient",
    DeleteHapg = "cloudhsm:DeleteHapg",
    DeleteHsm = "cloudhsm:DeleteHsm",
    DeleteLunaClient = "cloudhsm:DeleteLunaClient",
    DescribeHapg = "cloudhsm:DescribeHapg",
    DescribeHsm = "cloudhsm:DescribeHsm",
    DescribeLunaClient = "cloudhsm:DescribeLunaClient",
    GetConfig = "cloudhsm:GetConfig",
    ListAvailableZones = "cloudhsm:ListAvailableZones",
    ListHapgs = "cloudhsm:ListHapgs",
    ListHsms = "cloudhsm:ListHsms",
    ListLunaClients = "cloudhsm:ListLunaClients",
    ListTagsForResource = "cloudhsm:ListTagsForResource",
    ModifyHapg = "cloudhsm:ModifyHapg",
    ModifyHsm = "cloudhsm:ModifyHsm",
    ModifyLunaClient = "cloudhsm:ModifyLunaClient",
    RemoveTagsFromResource = "cloudhsm:RemoveTagsFromResource"
}

/** Actions for AWS CloudTrail
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudtrail.html
  */
export enum CloudTrail {
    AddTags = "cloudtrail:AddTags",
    CreateTrail = "cloudtrail:CreateTrail",
    DeleteTrail = "cloudtrail:DeleteTrail",
    DescribeTrails = "cloudtrail:DescribeTrails",
    GetEventSelectors = "cloudtrail:GetEventSelectors",
    GetTrailStatus = "cloudtrail:GetTrailStatus",
    ListPublicKeys = "cloudtrail:ListPublicKeys",
    ListTags = "cloudtrail:ListTags",
    LookupEvents = "cloudtrail:LookupEvents",
    PutEventSelectors = "cloudtrail:PutEventSelectors",
    RemoveTags = "cloudtrail:RemoveTags",
    StartLogging = "cloudtrail:StartLogging",
    StopLogging = "cloudtrail:StopLogging",
    UpdateTrail = "cloudtrail:UpdateTrail"
}

/** Actions for AWS Code Signing for Amazon FreeRTOS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodesigningforamazonfreertos.html
  */
export enum Signer {
    DescribeSigningJob = "signer:DescribeSigningJob",
    ListSigningJobs = "signer:ListSigningJobs",
    StartSigningJob = "signer:StartSigningJob"
}

/** Actions for AWS CodeBuild
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodebuild.html
  */
export enum CodeBuild {
    BatchDeleteBuilds = "codebuild:BatchDeleteBuilds",
    BatchGetBuilds = "codebuild:BatchGetBuilds",
    BatchGetProjects = "codebuild:BatchGetProjects",
    CreateProject = "codebuild:CreateProject",
    DeleteProject = "codebuild:DeleteProject",
    ListBuilds = "codebuild:ListBuilds",
    ListBuildsForProject = "codebuild:ListBuildsForProject",
    ListConnectedOAuthAccounts = "codebuild:ListConnectedOAuthAccounts",
    ListCuratedEnvironmentImages = "codebuild:ListCuratedEnvironmentImages",
    ListProjects = "codebuild:ListProjects",
    ListRepositories = "codebuild:ListRepositories",
    PersistOAuthToken = "codebuild:PersistOAuthToken",
    StartBuild = "codebuild:StartBuild",
    StopBuild = "codebuild:StopBuild",
    UpdateProject = "codebuild:UpdateProject"
}

/** Actions for AWS CodeCommit
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodecommit.html
  */
export enum CodeCommit {
    BatchGetPullRequests = "codecommit:BatchGetPullRequests",
    BatchGetRepositories = "codecommit:BatchGetRepositories",
    CancelUploadArchive = "codecommit:CancelUploadArchive",
    CreateBranch = "codecommit:CreateBranch",
    CreatePullRequest = "codecommit:CreatePullRequest",
    CreateRepository = "codecommit:CreateRepository",
    DeleteBranch = "codecommit:DeleteBranch",
    DeleteCommentContent = "codecommit:DeleteCommentContent",
    DeleteRepository = "codecommit:DeleteRepository",
    DescribePullRequestEvents = "codecommit:DescribePullRequestEvents",
    GetBlob = "codecommit:GetBlob",
    GetBranch = "codecommit:GetBranch",
    GetComment = "codecommit:GetComment",
    GetCommentsForComparedCommit = "codecommit:GetCommentsForComparedCommit",
    GetCommentsForPullRequest = "codecommit:GetCommentsForPullRequest",
    GetCommit = "codecommit:GetCommit",
    GetCommitHistory = "codecommit:GetCommitHistory",
    GetCommitsFromMergeBase = "codecommit:GetCommitsFromMergeBase",
    GetDifferences = "codecommit:GetDifferences",
    GetMergeConflicts = "codecommit:GetMergeConflicts",
    GetObjectIdentifier = "codecommit:GetObjectIdentifier",
    GetPullRequest = "codecommit:GetPullRequest",
    GetReferences = "codecommit:GetReferences",
    GetRepository = "codecommit:GetRepository",
    GetRepositoryTriggers = "codecommit:GetRepositoryTriggers",
    GetTree = "codecommit:GetTree",
    GetUploadArchiveStatus = "codecommit:GetUploadArchiveStatus",
    GitPull = "codecommit:GitPull",
    GitPush = "codecommit:GitPush",
    ListBranches = "codecommit:ListBranches",
    ListPullRequests = "codecommit:ListPullRequests",
    ListRepositories = "codecommit:ListRepositories",
    MergePullRequestByFastForward = "codecommit:MergePullRequestByFastForward",
    PostCommentForComparedCommit = "codecommit:PostCommentForComparedCommit",
    PostCommentForPullRequest = "codecommit:PostCommentForPullRequest",
    PostCommentReply = "codecommit:PostCommentReply",
    PutFile = "codecommit:PutFile",
    PutRepositoryTriggers = "codecommit:PutRepositoryTriggers",
    TestRepositoryTriggers = "codecommit:TestRepositoryTriggers",
    UpdateComment = "codecommit:UpdateComment",
    UpdateDefaultBranch = "codecommit:UpdateDefaultBranch",
    UpdatePullRequestDescription = "codecommit:UpdatePullRequestDescription",
    UpdatePullRequestStatus = "codecommit:UpdatePullRequestStatus",
    UpdatePullRequestTitle = "codecommit:UpdatePullRequestTitle",
    UpdateRepositoryDescription = "codecommit:UpdateRepositoryDescription",
    UpdateRepositoryName = "codecommit:UpdateRepositoryName",
    UploadArchive = "codecommit:UploadArchive"
}

/** Actions for AWS CodeDeploy
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodedeploy.html
  */
export enum CodeDeploy {
    AddTagsToOnPremisesInstances = "codedeploy:AddTagsToOnPremisesInstances",
    BatchGetApplicationRevisions = "codedeploy:BatchGetApplicationRevisions",
    BatchGetApplications = "codedeploy:BatchGetApplications",
    BatchGetDeploymentGroups = "codedeploy:BatchGetDeploymentGroups",
    BatchGetDeploymentInstances = "codedeploy:BatchGetDeploymentInstances",
    BatchGetDeployments = "codedeploy:BatchGetDeployments",
    BatchGetOnPremisesInstances = "codedeploy:BatchGetOnPremisesInstances",
    ContinueDeployment = "codedeploy:ContinueDeployment",
    CreateApplication = "codedeploy:CreateApplication",
    CreateDeployment = "codedeploy:CreateDeployment",
    CreateDeploymentConfig = "codedeploy:CreateDeploymentConfig",
    CreateDeploymentGroup = "codedeploy:CreateDeploymentGroup",
    DeleteApplication = "codedeploy:DeleteApplication",
    DeleteDeploymentConfig = "codedeploy:DeleteDeploymentConfig",
    DeleteDeploymentGroup = "codedeploy:DeleteDeploymentGroup",
    DeregisterOnPremisesInstance = "codedeploy:DeregisterOnPremisesInstance",
    GetApplication = "codedeploy:GetApplication",
    GetApplicationRevision = "codedeploy:GetApplicationRevision",
    GetDeployment = "codedeploy:GetDeployment",
    GetDeploymentConfig = "codedeploy:GetDeploymentConfig",
    GetDeploymentGroup = "codedeploy:GetDeploymentGroup",
    GetDeploymentInstance = "codedeploy:GetDeploymentInstance",
    GetOnPremisesInstance = "codedeploy:GetOnPremisesInstance",
    ListApplicationRevisions = "codedeploy:ListApplicationRevisions",
    ListApplications = "codedeploy:ListApplications",
    ListDeploymentConfigs = "codedeploy:ListDeploymentConfigs",
    ListDeploymentGroups = "codedeploy:ListDeploymentGroups",
    ListDeploymentInstances = "codedeploy:ListDeploymentInstances",
    ListDeployments = "codedeploy:ListDeployments",
    ListOnPremisesInstances = "codedeploy:ListOnPremisesInstances",
    RegisterApplicationRevision = "codedeploy:RegisterApplicationRevision",
    RegisterOnPremisesInstance = "codedeploy:RegisterOnPremisesInstance",
    RemoveTagsFromOnPremisesInstances = "codedeploy:RemoveTagsFromOnPremisesInstances",
    StopDeployment = "codedeploy:StopDeployment",
    UpdateApplication = "codedeploy:UpdateApplication",
    UpdateDeploymentGroup = "codedeploy:UpdateDeploymentGroup"
}

/** Actions for AWS CodePipeline
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodepipeline.html
  */
export enum CodePipeline {
    AcknowledgeJob = "codepipeline:AcknowledgeJob",
    AcknowledgeThirdPartyJob = "codepipeline:AcknowledgeThirdPartyJob",
    CreateCustomActionType = "codepipeline:CreateCustomActionType",
    CreatePipeline = "codepipeline:CreatePipeline",
    DeleteCustomActionType = "codepipeline:DeleteCustomActionType",
    DeletePipeline = "codepipeline:DeletePipeline",
    DisableStageTransition = "codepipeline:DisableStageTransition",
    EnableStageTransition = "codepipeline:EnableStageTransition",
    GetJobDetails = "codepipeline:GetJobDetails",
    GetPipeline = "codepipeline:GetPipeline",
    GetPipelineExecution = "codepipeline:GetPipelineExecution",
    GetPipelineState = "codepipeline:GetPipelineState",
    GetThirdPartyJobDetails = "codepipeline:GetThirdPartyJobDetails",
    ListActionTypes = "codepipeline:ListActionTypes",
    ListPipelineExecutions = "codepipeline:ListPipelineExecutions",
    ListPipelines = "codepipeline:ListPipelines",
    PollForJobs = "codepipeline:PollForJobs",
    PollForThirdPartyJobs = "codepipeline:PollForThirdPartyJobs",
    PutActionRevision = "codepipeline:PutActionRevision",
    PutApprovalResult = "codepipeline:PutApprovalResult",
    PutJobFailureResult = "codepipeline:PutJobFailureResult",
    PutJobSuccessResult = "codepipeline:PutJobSuccessResult",
    PutThirdPartyJobFailureResult = "codepipeline:PutThirdPartyJobFailureResult",
    PutThirdPartyJobSuccessResult = "codepipeline:PutThirdPartyJobSuccessResult",
    RetryStageExecution = "codepipeline:RetryStageExecution",
    StartPipelineExecution = "codepipeline:StartPipelineExecution",
    UpdatePipeline = "codepipeline:UpdatePipeline"
}

/** Actions for AWS CodeStar
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestar.html
  */
export enum CodeStar {
    AssociateTeamMember = "codestar:AssociateTeamMember",
    CreateProject = "codestar:CreateProject",
    CreateUserProfile = "codestar:CreateUserProfile",
    DeleteExtendedAccess = "codestar:DeleteExtendedAccess",
    DeleteProject = "codestar:DeleteProject",
    DeleteUserProfile = "codestar:DeleteUserProfile",
    DescribeProject = "codestar:DescribeProject",
    DescribeUserProfile = "codestar:DescribeUserProfile",
    DisassociateTeamMember = "codestar:DisassociateTeamMember",
    GetExtendedAccess = "codestar:GetExtendedAccess",
    ListProjects = "codestar:ListProjects",
    ListResources = "codestar:ListResources",
    ListTeamMembers = "codestar:ListTeamMembers",
    ListUserProfiles = "codestar:ListUserProfiles",
    PutExtendedAccess = "codestar:PutExtendedAccess",
    UpdateProject = "codestar:UpdateProject",
    UpdateTeamMember = "codestar:UpdateTeamMember",
    UpdateUserProfile = "codestar:UpdateUserProfile",
    VerifyServiceRole = "codestar:VerifyServiceRole"
}

/** Actions for AWS Config
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsconfig.html
  */
export enum Config {
    DeleteConfigRule = "config:DeleteConfigRule",
    DeleteConfigurationRecorder = "config:DeleteConfigurationRecorder",
    DeleteDeliveryChannel = "config:DeleteDeliveryChannel",
    DeleteEvaluationResults = "config:DeleteEvaluationResults",
    DeliverConfigSnapshot = "config:DeliverConfigSnapshot",
    DescribeComplianceByConfigRule = "config:DescribeComplianceByConfigRule",
    DescribeComplianceByResource = "config:DescribeComplianceByResource",
    DescribeConfigRuleEvaluationStatus = "config:DescribeConfigRuleEvaluationStatus",
    DescribeConfigRules = "config:DescribeConfigRules",
    DescribeConfigurationRecorderStatus = "config:DescribeConfigurationRecorderStatus",
    DescribeConfigurationRecorders = "config:DescribeConfigurationRecorders",
    DescribeDeliveryChannelStatus = "config:DescribeDeliveryChannelStatus",
    DescribeDeliveryChannels = "config:DescribeDeliveryChannels",
    GetComplianceDetailsByConfigRule = "config:GetComplianceDetailsByConfigRule",
    GetComplianceDetailsByResource = "config:GetComplianceDetailsByResource",
    GetComplianceSummaryByConfigRule = "config:GetComplianceSummaryByConfigRule",
    GetComplianceSummaryByResourceType = "config:GetComplianceSummaryByResourceType",
    GetResourceConfigHistory = "config:GetResourceConfigHistory",
    GetResources = "config:GetResources",
    GetTagKeys = "config:GetTagKeys",
    ListDiscoveredResources = "config:ListDiscoveredResources",
    PutConfigRule = "config:PutConfigRule",
    PutConfigurationRecorder = "config:PutConfigurationRecorder",
    PutDeliveryChannel = "config:PutDeliveryChannel",
    PutEvaluations = "config:PutEvaluations",
    StartConfigRulesEvaluation = "config:StartConfigRulesEvaluation",
    StartConfigurationRecorder = "config:StartConfigurationRecorder",
    StopConfigurationRecorder = "config:StopConfigurationRecorder"
}

/** Actions for AWS Cost Explorer Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscostexplorerservice.html
  */
export enum ce {
    GetCostAndUsage = "ce:GetCostAndUsage",
    GetDimensionValues = "ce:GetDimensionValues",
    GetReservationUtilization = "ce:GetReservationUtilization",
    GetTags = "ce:GetTags"
}

/** Actions for AWS Cost and Usage Report
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscostandusagereport.html
  */
export enum CUR {
    DeleteReportDefinition = "cur:DeleteReportDefinition",
    DescribeReportDefinitions = "cur:DescribeReportDefinitions",
    PutReportDefinition = "cur:PutReportDefinition"
}

/** Actions for AWS Database Migration Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdatabasemigrationservice.html
  */
export enum DMS {
    AddTagsToResource = "dms:AddTagsToResource",
    CreateEndpoint = "dms:CreateEndpoint",
    CreateReplicationInstance = "dms:CreateReplicationInstance",
    CreateReplicationSubnetGroup = "dms:CreateReplicationSubnetGroup",
    CreateReplicationTask = "dms:CreateReplicationTask",
    DeleteEndpoint = "dms:DeleteEndpoint",
    DeleteEventSubscription = "dms:DeleteEventSubscription",
    DeleteReplicationInstance = "dms:DeleteReplicationInstance",
    DeleteReplicationSubnetGroup = "dms:DeleteReplicationSubnetGroup",
    DeleteReplicationTask = "dms:DeleteReplicationTask",
    DescribeAccountAttributes = "dms:DescribeAccountAttributes",
    DescribeCertificates = "dms:DescribeCertificates",
    DescribeConnections = "dms:DescribeConnections",
    DescribeEndpointTypes = "dms:DescribeEndpointTypes",
    DescribeEndpoints = "dms:DescribeEndpoints",
    DescribeEventCategories = "dms:DescribeEventCategories",
    DescribeEventSubscriptions = "dms:DescribeEventSubscriptions",
    DescribeEvents = "dms:DescribeEvents",
    DescribeOrderableReplicationInstances = "dms:DescribeOrderableReplicationInstances",
    DescribeRefreshSchemasStatus = "dms:DescribeRefreshSchemasStatus",
    DescribeReplicationInstances = "dms:DescribeReplicationInstances",
    DescribeReplicationSubnetGroups = "dms:DescribeReplicationSubnetGroups",
    DescribeReplicationTasks = "dms:DescribeReplicationTasks",
    DescribeSchemas = "dms:DescribeSchemas",
    DescribeTableStatistics = "dms:DescribeTableStatistics",
    ListTagsForResource = "dms:ListTagsForResource",
    ModifyEndpoint = "dms:ModifyEndpoint",
    ModifyEventSubscription = "dms:ModifyEventSubscription",
    ModifyReplicationInstance = "dms:ModifyReplicationInstance",
    ModifyReplicationSubnetGroup = "dms:ModifyReplicationSubnetGroup",
    ModifyReplicationTask = "dms:ModifyReplicationTask",
    RefreshSchemas = "dms:RefreshSchemas",
    RemoveTagsFromResource = "dms:RemoveTagsFromResource",
    StartReplicationTask = "dms:StartReplicationTask",
    StopReplicationTask = "dms:StopReplicationTask",
    TestConnection = "dms:TestConnection"
}

/** Actions for AWS Device Farm
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdevicefarm.html
  */
export enum DeviceFarm {
    CreateDevicePool = "devicefarm:CreateDevicePool",
    CreateNetworkProfile = "devicefarm:CreateNetworkProfile",
    CreateProject = "devicefarm:CreateProject",
    CreateRemoteAccessSession = "devicefarm:CreateRemoteAccessSession",
    CreateUpload = "devicefarm:CreateUpload",
    DeleteDevicePool = "devicefarm:DeleteDevicePool",
    DeleteNetworkProfile = "devicefarm:DeleteNetworkProfile",
    DeleteProject = "devicefarm:DeleteProject",
    DeleteRemoteAccessSession = "devicefarm:DeleteRemoteAccessSession",
    DeleteRun = "devicefarm:DeleteRun",
    DeleteUpload = "devicefarm:DeleteUpload",
    GetAccountSettings = "devicefarm:GetAccountSettings",
    GetDevice = "devicefarm:GetDevice",
    GetDevicePool = "devicefarm:GetDevicePool",
    GetDevicePoolCompatibility = "devicefarm:GetDevicePoolCompatibility",
    GetJob = "devicefarm:GetJob",
    GetNetworkProfile = "devicefarm:GetNetworkProfile",
    GetOfferingStatus = "devicefarm:GetOfferingStatus",
    GetProject = "devicefarm:GetProject",
    GetRemoteAccessSession = "devicefarm:GetRemoteAccessSession",
    GetRun = "devicefarm:GetRun",
    GetSuite = "devicefarm:GetSuite",
    GetTest = "devicefarm:GetTest",
    GetUpload = "devicefarm:GetUpload",
    InstallToRemoteAccessSession = "devicefarm:InstallToRemoteAccessSession",
    ListArtifacts = "devicefarm:ListArtifacts",
    ListDevicePools = "devicefarm:ListDevicePools",
    ListDevices = "devicefarm:ListDevices",
    ListJobs = "devicefarm:ListJobs",
    ListNetworkProfiles = "devicefarm:ListNetworkProfiles",
    ListOfferingTransactions = "devicefarm:ListOfferingTransactions",
    ListOfferings = "devicefarm:ListOfferings",
    ListProjects = "devicefarm:ListProjects",
    ListRemoteAccessSessions = "devicefarm:ListRemoteAccessSessions",
    ListRuns = "devicefarm:ListRuns",
    ListSamples = "devicefarm:ListSamples",
    ListSuites = "devicefarm:ListSuites",
    ListTests = "devicefarm:ListTests",
    ListUniqueProblems = "devicefarm:ListUniqueProblems",
    ListUploads = "devicefarm:ListUploads",
    PurchaseOffering = "devicefarm:PurchaseOffering",
    RenewOffering = "devicefarm:RenewOffering",
    ScheduleRun = "devicefarm:ScheduleRun",
    StopRemoteAccessSession = "devicefarm:StopRemoteAccessSession",
    StopRun = "devicefarm:StopRun",
    UpdateDevicePool = "devicefarm:UpdateDevicePool",
    UpdateNetworkProfile = "devicefarm:UpdateNetworkProfile",
    UpdateProject = "devicefarm:UpdateProject"
}

/** Actions for AWS Direct Connect
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdirectconnect.html
  */
export enum DirectConnect {
    AllocateConnectionOnInterconnect = "directconnect:AllocateConnectionOnInterconnect",
    AllocatePrivateVirtualInterface = "directconnect:AllocatePrivateVirtualInterface",
    AllocatePublicVirtualInterface = "directconnect:AllocatePublicVirtualInterface",
    ConfirmConnection = "directconnect:ConfirmConnection",
    ConfirmPrivateVirtualInterface = "directconnect:ConfirmPrivateVirtualInterface",
    ConfirmPublicVirtualInterface = "directconnect:ConfirmPublicVirtualInterface",
    CreateConnection = "directconnect:CreateConnection",
    CreateInterconnect = "directconnect:CreateInterconnect",
    CreatePrivateVirtualInterface = "directconnect:CreatePrivateVirtualInterface",
    CreatePublicVirtualInterface = "directconnect:CreatePublicVirtualInterface",
    DeleteConnection = "directconnect:DeleteConnection",
    DeleteInterconnect = "directconnect:DeleteInterconnect",
    DeleteVirtualInterface = "directconnect:DeleteVirtualInterface",
    DescribeConnectionLoa = "directconnect:DescribeConnectionLoa",
    DescribeConnections = "directconnect:DescribeConnections",
    DescribeConnectionsOnInterconnect = "directconnect:DescribeConnectionsOnInterconnect",
    DescribeInterconnectLoa = "directconnect:DescribeInterconnectLoa",
    DescribeInterconnects = "directconnect:DescribeInterconnects",
    DescribeLocations = "directconnect:DescribeLocations",
    DescribeVirtualGateways = "directconnect:DescribeVirtualGateways",
    DescribeVirtualInterfaces = "directconnect:DescribeVirtualInterfaces"
}

/** Actions for AWS Directory Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdirectoryservice.html
  */
export enum DS {
    AddIpRoutes = "ds:AddIpRoutes",
    AddTagsToResource = "ds:AddTagsToResource",
    AuthorizeApplication = "ds:AuthorizeApplication",
    CancelSchemaExtension = "ds:CancelSchemaExtension",
    ConnectDirectory = "ds:ConnectDirectory",
    CreateAlias = "ds:CreateAlias",
    CreateComputer = "ds:CreateComputer",
    CreateConditionalForwarder = "ds:CreateConditionalForwarder",
    CreateDirectory = "ds:CreateDirectory",
    CreateMicrosoftAD = "ds:CreateMicrosoftAD",
    CreateSnapshot = "ds:CreateSnapshot",
    CreateTrust = "ds:CreateTrust",
    DeleteConditionalForwarder = "ds:DeleteConditionalForwarder",
    DeleteDirectory = "ds:DeleteDirectory",
    DeleteSnapshot = "ds:DeleteSnapshot",
    DeleteTrust = "ds:DeleteTrust",
    DeregisterEventTopic = "ds:DeregisterEventTopic",
    DescribeConditionalForwarders = "ds:DescribeConditionalForwarders",
    DescribeDirectories = "ds:DescribeDirectories",
    DescribeEventTopics = "ds:DescribeEventTopics",
    DescribeSnapshots = "ds:DescribeSnapshots",
    DescribeTrusts = "ds:DescribeTrusts",
    DisableRadius = "ds:DisableRadius",
    DisableSso = "ds:DisableSso",
    EnableRadius = "ds:EnableRadius",
    EnableSso = "ds:EnableSso",
    GetDirectoryLimits = "ds:GetDirectoryLimits",
    GetSnapshotLimits = "ds:GetSnapshotLimits",
    ListAuthorizedApplications = "ds:ListAuthorizedApplications",
    ListIpRoutes = "ds:ListIpRoutes",
    ListSchemaExtensions = "ds:ListSchemaExtensions",
    ListTagsForResource = "ds:ListTagsForResource",
    RegisterEventTopic = "ds:RegisterEventTopic",
    RemoveIpRoutes = "ds:RemoveIpRoutes",
    RemoveTagsFromResource = "ds:RemoveTagsFromResource",
    RestoreFromSnapshot = "ds:RestoreFromSnapshot",
    StartSchemaExtension = "ds:StartSchemaExtension",
    UnauthorizeApplication = "ds:UnauthorizeApplication",
    UpdateConditionalForwarder = "ds:UpdateConditionalForwarder",
    UpdateRadius = "ds:UpdateRadius",
    VerifyTrust = "ds:VerifyTrust"
}

/** Actions for AWS Elastic Beanstalk
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselasticbeanstalk.html
  */
export enum ElasticBeanstalk {
    AbortEnvironmentUpdate = "elasticbeanstalk:AbortEnvironmentUpdate",
    ApplyEnvironmentManagedAction = "elasticbeanstalk:ApplyEnvironmentManagedAction",
    CheckDNSAvailability = "elasticbeanstalk:CheckDNSAvailability",
    ComposeEnvironments = "elasticbeanstalk:ComposeEnvironments",
    CreateApplication = "elasticbeanstalk:CreateApplication",
    CreateApplicationVersion = "elasticbeanstalk:CreateApplicationVersion",
    CreateConfigurationTemplate = "elasticbeanstalk:CreateConfigurationTemplate",
    CreateEnvironment = "elasticbeanstalk:CreateEnvironment",
    CreatePlatformVersion = "elasticbeanstalk:CreatePlatformVersion",
    CreateStorageLocation = "elasticbeanstalk:CreateStorageLocation",
    DeleteApplication = "elasticbeanstalk:DeleteApplication",
    DeleteApplicationVersion = "elasticbeanstalk:DeleteApplicationVersion",
    DeleteConfigurationTemplate = "elasticbeanstalk:DeleteConfigurationTemplate",
    DeleteEnvironmentConfiguration = "elasticbeanstalk:DeleteEnvironmentConfiguration",
    DeletePlatformVersion = "elasticbeanstalk:DeletePlatformVersion",
    DescribeApplicationVersions = "elasticbeanstalk:DescribeApplicationVersions",
    DescribeApplications = "elasticbeanstalk:DescribeApplications",
    DescribeConfigurationOptions = "elasticbeanstalk:DescribeConfigurationOptions",
    DescribeConfigurationSettings = "elasticbeanstalk:DescribeConfigurationSettings",
    DescribeEnvironmentHealth = "elasticbeanstalk:DescribeEnvironmentHealth",
    DescribeEnvironmentManagedActionHistory = "elasticbeanstalk:DescribeEnvironmentManagedActionHistory",
    DescribeEnvironmentManagedActions = "elasticbeanstalk:DescribeEnvironmentManagedActions",
    DescribeEnvironmentResources = "elasticbeanstalk:DescribeEnvironmentResources",
    DescribeEnvironments = "elasticbeanstalk:DescribeEnvironments",
    DescribeEvents = "elasticbeanstalk:DescribeEvents",
    DescribeInstancesHealth = "elasticbeanstalk:DescribeInstancesHealth",
    DescribePlatformVersion = "elasticbeanstalk:DescribePlatformVersion",
    ListAvailableSolutionStacks = "elasticbeanstalk:ListAvailableSolutionStacks",
    ListPlatformVersions = "elasticbeanstalk:ListPlatformVersions",
    RebuildEnvironment = "elasticbeanstalk:RebuildEnvironment",
    RequestEnvironmentInfo = "elasticbeanstalk:RequestEnvironmentInfo",
    RestartAppServer = "elasticbeanstalk:RestartAppServer",
    RetrieveEnvironmentInfo = "elasticbeanstalk:RetrieveEnvironmentInfo",
    SwapEnvironmentCNAMEs = "elasticbeanstalk:SwapEnvironmentCNAMEs",
    TerminateEnvironment = "elasticbeanstalk:TerminateEnvironment",
    UpdateApplication = "elasticbeanstalk:UpdateApplication",
    UpdateApplicationResourceLifecycle = "elasticbeanstalk:UpdateApplicationResourceLifecycle",
    UpdateApplicationVersion = "elasticbeanstalk:UpdateApplicationVersion",
    UpdateConfigurationTemplate = "elasticbeanstalk:UpdateConfigurationTemplate",
    UpdateEnvironment = "elasticbeanstalk:UpdateEnvironment",
    ValidateConfigurationSettings = "elasticbeanstalk:ValidateConfigurationSettings"
}

/** Actions for AWS Elemental MediaConvert
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediaconvert.html
  */
export enum MediaConvert {
    CancelJob = "mediaconvert:CancelJob",
    CreateJob = "mediaconvert:CreateJob",
    CreateJobTemplate = "mediaconvert:CreateJobTemplate",
    CreatePreset = "mediaconvert:CreatePreset",
    CreateQueue = "mediaconvert:CreateQueue",
    DeleteJobTemplate = "mediaconvert:DeleteJobTemplate",
    DeletePreset = "mediaconvert:DeletePreset",
    DeleteQueue = "mediaconvert:DeleteQueue",
    DescribeEndpoint = "mediaconvert:DescribeEndpoint",
    GetJob = "mediaconvert:GetJob",
    GetJobTemplate = "mediaconvert:GetJobTemplate",
    GetPreset = "mediaconvert:GetPreset",
    GetQueue = "mediaconvert:GetQueue",
    ListJobTemplates = "mediaconvert:ListJobTemplates",
    ListJobs = "mediaconvert:ListJobs",
    ListPresets = "mediaconvert:ListPresets",
    ListQueues = "mediaconvert:ListQueues",
    UpdateJobTemplate = "mediaconvert:UpdateJobTemplate",
    UpdatePreset = "mediaconvert:UpdatePreset",
    UpdateQueue = "mediaconvert:UpdateQueue"
}

/** Actions for AWS Elemental MediaLive
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmedialive.html
  */
export enum MediaLive {
    CreateChannel = "medialive:CreateChannel",
    CreateInput = "medialive:CreateInput",
    CreateInputSecurityGroup = "medialive:CreateInputSecurityGroup",
    DeleteChannel = "medialive:DeleteChannel",
    DeleteInput = "medialive:DeleteInput",
    DeleteInputSecurityGroup = "medialive:DeleteInputSecurityGroup",
    DescribeChannel = "medialive:DescribeChannel",
    DescribeInput = "medialive:DescribeInput",
    DescribeInputSecurityGroup = "medialive:DescribeInputSecurityGroup",
    ListChannels = "medialive:ListChannels",
    ListInputSecurityGroups = "medialive:ListInputSecurityGroups",
    ListInputs = "medialive:ListInputs",
    StartChannel = "medialive:StartChannel",
    StopChannel = "medialive:StopChannel"
}

/** Actions for AWS Elemental MediaPackage
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediapackage.html
  */
export enum MediaPackage {
    CreateChannel = "mediapackage:CreateChannel",
    CreateOriginEndpoint = "mediapackage:CreateOriginEndpoint",
    DeleteChannel = "mediapackage:DeleteChannel",
    DeleteOriginEndpoint = "mediapackage:DeleteOriginEndpoint",
    DescribeChannel = "mediapackage:DescribeChannel",
    DescribeOriginEndpoint = "mediapackage:DescribeOriginEndpoint",
    ListChannels = "mediapackage:ListChannels",
    ListOriginEndpoints = "mediapackage:ListOriginEndpoints",
    UpdateChannel = "mediapackage:UpdateChannel",
    UpdateOriginEndpoint = "mediapackage:UpdateOriginEndpoint"
}

/** Actions for AWS Elemental MediaStore
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediastore.html
  */
export enum MediaStore {
    CreateContainer = "mediastore:CreateContainer",
    DeleteContainer = "mediastore:DeleteContainer",
    DeleteContainerPolicy = "mediastore:DeleteContainerPolicy",
    DeleteObject = "mediastore:DeleteObject",
    DescribeContainer = "mediastore:DescribeContainer",
    DescribeObject = "mediastore:DescribeObject",
    GetContainerPolicy = "mediastore:GetContainerPolicy",
    GetObject = "mediastore:GetObject",
    ListContainers = "mediastore:ListContainers",
    ListItems = "mediastore:ListItems",
    PutContainerPolicy = "mediastore:PutContainerPolicy",
    PutObject = "mediastore:PutObject"
}

/** Actions for AWS Glue
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsglue.html
  */
export enum Glue {
    BatchCreatePartition = "glue:BatchCreatePartition",
    BatchDeleteConnection = "glue:BatchDeleteConnection",
    BatchDeletePartition = "glue:BatchDeletePartition",
    BatchDeleteTable = "glue:BatchDeleteTable",
    BatchGetPartition = "glue:BatchGetPartition",
    CreateClassifier = "glue:CreateClassifier",
    CreateConnection = "glue:CreateConnection",
    CreateCrawler = "glue:CreateCrawler",
    CreateDatabase = "glue:CreateDatabase",
    CreateDevEndpoint = "glue:CreateDevEndpoint",
    CreateJob = "glue:CreateJob",
    CreatePartition = "glue:CreatePartition",
    CreateScript = "glue:CreateScript",
    CreateTable = "glue:CreateTable",
    CreateTrigger = "glue:CreateTrigger",
    CreateUserDefinedFunction = "glue:CreateUserDefinedFunction",
    DeleteClassifier = "glue:DeleteClassifier",
    DeleteConnection = "glue:DeleteConnection",
    DeleteCrawler = "glue:DeleteCrawler",
    DeleteDatabase = "glue:DeleteDatabase",
    DeleteDevEndpoint = "glue:DeleteDevEndpoint",
    DeleteJob = "glue:DeleteJob",
    DeletePartition = "glue:DeletePartition",
    DeleteTable = "glue:DeleteTable",
    DeleteTrigger = "glue:DeleteTrigger",
    DeleteUserDefinedFunction = "glue:DeleteUserDefinedFunction",
    GetCatalogImportStatus = "glue:GetCatalogImportStatus",
    GetClassifier = "glue:GetClassifier",
    GetClassifiers = "glue:GetClassifiers",
    GetConnection = "glue:GetConnection",
    GetConnections = "glue:GetConnections",
    GetCrawler = "glue:GetCrawler",
    GetCrawlerMetrics = "glue:GetCrawlerMetrics",
    GetCrawlers = "glue:GetCrawlers",
    GetDatabase = "glue:GetDatabase",
    GetDatabases = "glue:GetDatabases",
    GetDataflowGraph = "glue:GetDataflowGraph",
    GetDevEndpoint = "glue:GetDevEndpoint",
    GetDevEndpoints = "glue:GetDevEndpoints",
    GetJob = "glue:GetJob",
    GetJobRun = "glue:GetJobRun",
    GetJobRuns = "glue:GetJobRuns",
    GetJobs = "glue:GetJobs",
    GetMapping = "glue:GetMapping",
    GetPartition = "glue:GetPartition",
    GetPartitions = "glue:GetPartitions",
    GetPlan = "glue:GetPlan",
    GetTable = "glue:GetTable",
    GetTableVersions = "glue:GetTableVersions",
    GetTables = "glue:GetTables",
    GetTrigger = "glue:GetTrigger",
    GetTriggers = "glue:GetTriggers",
    GetUserDefinedFunction = "glue:GetUserDefinedFunction",
    GetUserDefinedFunctions = "glue:GetUserDefinedFunctions",
    ImportCatalogToGlue = "glue:ImportCatalogToGlue",
    ResetJobBookmark = "glue:ResetJobBookmark",
    StartCrawler = "glue:StartCrawler",
    StartCrawlerSchedule = "glue:StartCrawlerSchedule",
    StartJobRun = "glue:StartJobRun",
    StartTrigger = "glue:StartTrigger",
    StopCrawler = "glue:StopCrawler",
    StopCrawlerSchedule = "glue:StopCrawlerSchedule",
    StopTrigger = "glue:StopTrigger",
    UpdateClassifier = "glue:UpdateClassifier",
    UpdateConnection = "glue:UpdateConnection",
    UpdateCrawler = "glue:UpdateCrawler",
    UpdateDatabase = "glue:UpdateDatabase",
    UpdateDevEndpoint = "glue:UpdateDevEndpoint",
    UpdateJob = "glue:UpdateJob",
    UpdatePartition = "glue:UpdatePartition",
    UpdateTable = "glue:UpdateTable",
    UpdateTrigger = "glue:UpdateTrigger",
    UpdateUserDefinedFunction = "glue:UpdateUserDefinedFunction"
}

/** Actions for AWS Greengrass
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsgreengrass.html
  */
export enum Greengrass {
    AssociateRoleToGroup = "greengrass:AssociateRoleToGroup",
    AssociateServiceRoleToAccount = "greengrass:AssociateServiceRoleToAccount",
    CreateCoreDefinition = "greengrass:CreateCoreDefinition",
    CreateCoreDefinitionVersion = "greengrass:CreateCoreDefinitionVersion",
    CreateDeployment = "greengrass:CreateDeployment",
    CreateDeviceDefinition = "greengrass:CreateDeviceDefinition",
    CreateDeviceDefinitionVersion = "greengrass:CreateDeviceDefinitionVersion",
    CreateFunctionDefinition = "greengrass:CreateFunctionDefinition",
    CreateFunctionDefinitionVersion = "greengrass:CreateFunctionDefinitionVersion",
    CreateGroup = "greengrass:CreateGroup",
    CreateGroupCertificateAuthority = "greengrass:CreateGroupCertificateAuthority",
    CreateGroupVersion = "greengrass:CreateGroupVersion",
    CreateLoggerDefinition = "greengrass:CreateLoggerDefinition",
    CreateLoggerDefinitionVersion = "greengrass:CreateLoggerDefinitionVersion",
    CreateResourceDefinition = "greengrass:CreateResourceDefinition",
    CreateResourceDefinitionVersion = "greengrass:CreateResourceDefinitionVersion",
    CreateSoftwareUpdateJob = "greengrass:CreateSoftwareUpdateJob",
    CreateSubscriptionDefinition = "greengrass:CreateSubscriptionDefinition",
    CreateSubscriptionDefinitionVersion = "greengrass:CreateSubscriptionDefinitionVersion",
    DeleteCoreDefinition = "greengrass:DeleteCoreDefinition",
    DeleteDeviceDefinition = "greengrass:DeleteDeviceDefinition",
    DeleteFunctionDefinition = "greengrass:DeleteFunctionDefinition",
    DeleteGroup = "greengrass:DeleteGroup",
    DeleteLoggerDefinition = "greengrass:DeleteLoggerDefinition",
    DeleteResourceDefinition = "greengrass:DeleteResourceDefinition",
    DeleteSubscriptionDefinition = "greengrass:DeleteSubscriptionDefinition",
    DisassociateRoleFromGroup = "greengrass:DisassociateRoleFromGroup",
    DisassociateServiceRoleFromAccount = "greengrass:DisassociateServiceRoleFromAccount",
    GetAssociatedRole = "greengrass:GetAssociatedRole",
    GetConnectivityInfo = "greengrass:GetConnectivityInfo",
    GetCoreDefinition = "greengrass:GetCoreDefinition",
    GetCoreDefinitionVersion = "greengrass:GetCoreDefinitionVersion",
    GetDeploymentStatus = "greengrass:GetDeploymentStatus",
    GetDeviceDefinition = "greengrass:GetDeviceDefinition",
    GetDeviceDefinitionVersion = "greengrass:GetDeviceDefinitionVersion",
    GetFunctionDefinition = "greengrass:GetFunctionDefinition",
    GetFunctionDefinitionVersion = "greengrass:GetFunctionDefinitionVersion",
    GetGroup = "greengrass:GetGroup",
    GetGroupCertificateAuthority = "greengrass:GetGroupCertificateAuthority",
    GetGroupCertificateConfiguration = "greengrass:GetGroupCertificateConfiguration",
    GetGroupVersion = "greengrass:GetGroupVersion",
    GetLoggerDefinition = "greengrass:GetLoggerDefinition",
    GetLoggerDefinitionVersion = "greengrass:GetLoggerDefinitionVersion",
    GetResourceDefinition = "greengrass:GetResourceDefinition",
    GetResourceDefinitionVersion = "greengrass:GetResourceDefinitionVersion",
    GetServiceRoleForAccount = "greengrass:GetServiceRoleForAccount",
    GetSubscriptionDefinition = "greengrass:GetSubscriptionDefinition",
    GetSubscriptionDefinitionVersion = "greengrass:GetSubscriptionDefinitionVersion",
    ListCoreDefinitionVersions = "greengrass:ListCoreDefinitionVersions",
    ListCoreDefinitions = "greengrass:ListCoreDefinitions",
    ListDeployments = "greengrass:ListDeployments",
    ListDeviceDefinitionVersions = "greengrass:ListDeviceDefinitionVersions",
    ListDeviceDefinitions = "greengrass:ListDeviceDefinitions",
    ListFunctionDefinitionVersions = "greengrass:ListFunctionDefinitionVersions",
    ListFunctionDefinitions = "greengrass:ListFunctionDefinitions",
    ListGroupCertificateAuthorities = "greengrass:ListGroupCertificateAuthorities",
    ListGroupVersions = "greengrass:ListGroupVersions",
    ListGroups = "greengrass:ListGroups",
    ListLoggerDefinitionVersions = "greengrass:ListLoggerDefinitionVersions",
    ListLoggerDefinitions = "greengrass:ListLoggerDefinitions",
    ListResourceDefinitionVersions = "greengrass:ListResourceDefinitionVersions",
    ListResourceDefinitions = "greengrass:ListResourceDefinitions",
    ListSubscriptionDefinitionVersions = "greengrass:ListSubscriptionDefinitionVersions",
    ListSubscriptionDefinitions = "greengrass:ListSubscriptionDefinitions",
    ResetDeployments = "greengrass:ResetDeployments",
    UpdateConnectivityInfo = "greengrass:UpdateConnectivityInfo",
    UpdateCoreDefinition = "greengrass:UpdateCoreDefinition",
    UpdateDeviceDefinition = "greengrass:UpdateDeviceDefinition",
    UpdateFunctionDefinition = "greengrass:UpdateFunctionDefinition",
    UpdateGroup = "greengrass:UpdateGroup",
    UpdateGroupCertificateConfiguration = "greengrass:UpdateGroupCertificateConfiguration",
    UpdateLoggerDefinition = "greengrass:UpdateLoggerDefinition",
    UpdateResourceDefinition = "greengrass:UpdateResourceDefinition",
    UpdateSubscriptionDefinition = "greengrass:UpdateSubscriptionDefinition"
}

/** Actions for AWS Health APIs and Notifications
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awshealthapisandnotifications.html
  */
export enum Health {
    DescribeAffectedEntities = "health:DescribeAffectedEntities",
    DescribeEntityAggregates = "health:DescribeEntityAggregates",
    DescribeEventAggregates = "health:DescribeEventAggregates",
    DescribeEventDetails = "health:DescribeEventDetails",
    DescribeEventTypes = "health:DescribeEventTypes",
    DescribeEvents = "health:DescribeEvents"
}

/** Actions for AWS Import Export Disk Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsimportexportdiskservice.html
  */
export enum ImportExport {
    CancelJob = "importexport:CancelJob",
    CreateJob = "importexport:CreateJob",
    GetShippingLabel = "importexport:GetShippingLabel",
    GetStatus = "importexport:GetStatus",
    ListJobs = "importexport:ListJobs",
    UpdateJob = "importexport:UpdateJob"
}

/** Actions for AWS IoT
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiot.html
  */
export enum IoT {
    AcceptCertificateTransfer = "iot:AcceptCertificateTransfer",
    AssociateTargetsWithJob = "iot:AssociateTargetsWithJob",
    AttachPolicy = "iot:AttachPolicy",
    AttachPrincipalPolicy = "iot:AttachPrincipalPolicy",
    AttachThingPrincipal = "iot:AttachThingPrincipal",
    CancelCertificateTransfer = "iot:CancelCertificateTransfer",
    CancelJob = "iot:CancelJob",
    ClearDefaultAuthorizer = "iot:ClearDefaultAuthorizer",
    Connect = "iot:Connect",
    CreateAuthorizer = "iot:CreateAuthorizer",
    CreateCertificateFromCsr = "iot:CreateCertificateFromCsr",
    CreateJob = "iot:CreateJob",
    CreateKeysAndCertificate = "iot:CreateKeysAndCertificate",
    CreateOTAUpdateJob = "iot:CreateOTAUpdateJob",
    CreatePolicy = "iot:CreatePolicy",
    CreatePolicyVersion = "iot:CreatePolicyVersion",
    CreateRoleAlias = "iot:CreateRoleAlias",
    CreateStream = "iot:CreateStream",
    CreateThing = "iot:CreateThing",
    CreateThingType = "iot:CreateThingType",
    CreateTopicRule = "iot:CreateTopicRule",
    DeleteAuthorizer = "iot:DeleteAuthorizer",
    DeleteCACertificate = "iot:DeleteCACertificate",
    DeleteCertificate = "iot:DeleteCertificate",
    DeleteOTAUpdateJob = "iot:DeleteOTAUpdateJob",
    DeletePolicy = "iot:DeletePolicy",
    DeletePolicyVersion = "iot:DeletePolicyVersion",
    DeleteRegistrationCode = "iot:DeleteRegistrationCode",
    DeleteRoleAlias = "iot:DeleteRoleAlias",
    DeleteStream = "iot:DeleteStream",
    DeleteThing = "iot:DeleteThing",
    DeleteThingShadow = "iot:DeleteThingShadow",
    DeleteThingType = "iot:DeleteThingType",
    DeleteTopicRule = "iot:DeleteTopicRule",
    DeprecateThingType = "iot:DeprecateThingType",
    DescribeAuthorizer = "iot:DescribeAuthorizer",
    DescribeCACertificate = "iot:DescribeCACertificate",
    DescribeCertificate = "iot:DescribeCertificate",
    DescribeDefaultAuthorizer = "iot:DescribeDefaultAuthorizer",
    DescribeEndpoint = "iot:DescribeEndpoint",
    DescribeIndex = "iot:DescribeIndex",
    DescribeJob = "iot:DescribeJob",
    DescribeJobExecution = "iot:DescribeJobExecution",
    DescribeRoleAlias = "iot:DescribeRoleAlias",
    DescribeStream = "iot:DescribeStream",
    DescribeThing = "iot:DescribeThing",
    DescribeThingType = "iot:DescribeThingType",
    DetachPolicy = "iot:DetachPolicy",
    DetachPrincipalPolicy = "iot:DetachPrincipalPolicy",
    DetachThingPrincipal = "iot:DetachThingPrincipal",
    DisableTopicRule = "iot:DisableTopicRule",
    EnableTopicRule = "iot:EnableTopicRule",
    GetEffectivePolicies = "iot:GetEffectivePolicies",
    GetIndexingConfiguration = "iot:GetIndexingConfiguration",
    GetJobDocument = "iot:GetJobDocument",
    GetLoggingOptions = "iot:GetLoggingOptions",
    GetOTAUpdateJob = "iot:GetOTAUpdateJob",
    GetPolicy = "iot:GetPolicy",
    GetPolicyVersion = "iot:GetPolicyVersion",
    GetRegistrationCode = "iot:GetRegistrationCode",
    GetThingShadow = "iot:GetThingShadow",
    GetTopicRule = "iot:GetTopicRule",
    ListAttachedPolicies = "iot:ListAttachedPolicies",
    ListAuthorizers = "iot:ListAuthorizers",
    ListCACertificates = "iot:ListCACertificates",
    ListCertificates = "iot:ListCertificates",
    ListCertificatesByCA = "iot:ListCertificatesByCA",
    ListIndices = "iot:ListIndices",
    ListJobExecutionsForJob = "iot:ListJobExecutionsForJob",
    ListJobExecutionsForThing = "iot:ListJobExecutionsForThing",
    ListJobs = "iot:ListJobs",
    ListOTAUpdateJobs = "iot:ListOTAUpdateJobs",
    ListOutgoingCertificates = "iot:ListOutgoingCertificates",
    ListPolicies = "iot:ListPolicies",
    ListPolicyPrincipals = "iot:ListPolicyPrincipals",
    ListPolicyVersions = "iot:ListPolicyVersions",
    ListPrincipalPolicies = "iot:ListPrincipalPolicies",
    ListPrincipalThings = "iot:ListPrincipalThings",
    ListRoleAliases = "iot:ListRoleAliases",
    ListStreams = "iot:ListStreams",
    ListTargetsForPolicy = "iot:ListTargetsForPolicy",
    ListThingPrincipals = "iot:ListThingPrincipals",
    ListThingTypes = "iot:ListThingTypes",
    ListThings = "iot:ListThings",
    ListTopicRules = "iot:ListTopicRules",
    Publish = "iot:Publish",
    Receive = "iot:Receive",
    RegisterCACertificate = "iot:RegisterCACertificate",
    RegisterCertificate = "iot:RegisterCertificate",
    RejectCertificateTransfer = "iot:RejectCertificateTransfer",
    ReplaceTopicRule = "iot:ReplaceTopicRule",
    SearchIndex = "iot:SearchIndex",
    SetDefaultAuthorizer = "iot:SetDefaultAuthorizer",
    SetDefaultPolicyVersion = "iot:SetDefaultPolicyVersion",
    SetLoggingOptions = "iot:SetLoggingOptions",
    Subscribe = "iot:Subscribe",
    TestAuthorization = "iot:TestAuthorization",
    TestInvokeAuthorizer = "iot:TestInvokeAuthorizer",
    TransferCertificate = "iot:TransferCertificate",
    UpdateAuthorizer = "iot:UpdateAuthorizer",
    UpdateCACertificate = "iot:UpdateCACertificate",
    UpdateCertificate = "iot:UpdateCertificate",
    UpdateIndexingConfiguration = "iot:UpdateIndexingConfiguration",
    UpdateRoleAlias = "iot:UpdateRoleAlias",
    UpdateStream = "iot:UpdateStream",
    UpdateThing = "iot:UpdateThing",
    UpdateThingShadow = "iot:UpdateThingShadow"
}

/** Actions for AWS IoT Analytics
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotanalytics.html
  */
export enum IoTAnalytics {
    CreateChannel = "iotanalytics:CreateChannel",
    CreateDataset = "iotanalytics:CreateDataset",
    CreateDatasetContent = "iotanalytics:CreateDatasetContent",
    CreateDatastore = "iotanalytics:CreateDatastore",
    CreatePipeline = "iotanalytics:CreatePipeline",
    DeleteChannel = "iotanalytics:DeleteChannel",
    DeleteDataset = "iotanalytics:DeleteDataset",
    DeleteDatasetContent = "iotanalytics:DeleteDatasetContent",
    DeleteDatastore = "iotanalytics:DeleteDatastore",
    DeletePipeline = "iotanalytics:DeletePipeline",
    DescribeChannel = "iotanalytics:DescribeChannel",
    DescribeDataset = "iotanalytics:DescribeDataset",
    DescribeDatastore = "iotanalytics:DescribeDatastore",
    DescribePipeline = "iotanalytics:DescribePipeline",
    GetDatasetContent = "iotanalytics:GetDatasetContent",
    ListChannels = "iotanalytics:ListChannels",
    ListDatasets = "iotanalytics:ListDatasets",
    ListDatastores = "iotanalytics:ListDatastores",
    ListPipelines = "iotanalytics:ListPipelines",
    UpdateDataset = "iotanalytics:UpdateDataset",
    UpdatePipeline = "iotanalytics:UpdatePipeline"
}

/** Actions for AWS Key Management Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awskeymanagementservice.html
  */
export enum KMS {
    CancelKeyDeletion = "kms:CancelKeyDeletion",
    CreateAlias = "kms:CreateAlias",
    CreateGrant = "kms:CreateGrant",
    CreateKey = "kms:CreateKey",
    Decrypt = "kms:Decrypt",
    DeleteAlias = "kms:DeleteAlias",
    DeleteImportedKeyMaterial = "kms:DeleteImportedKeyMaterial",
    DescribeKey = "kms:DescribeKey",
    DisableKey = "kms:DisableKey",
    DisableKeyRotation = "kms:DisableKeyRotation",
    EnableKey = "kms:EnableKey",
    EnableKeyRotation = "kms:EnableKeyRotation",
    Encrypt = "kms:Encrypt",
    GenerateDataKey = "kms:GenerateDataKey",
    GenerateDataKeyWithoutPlaintext = "kms:GenerateDataKeyWithoutPlaintext",
    GenerateRandom = "kms:GenerateRandom",
    GetKeyPolicy = "kms:GetKeyPolicy",
    GetKeyRotationStatus = "kms:GetKeyRotationStatus",
    GetParametersForImport = "kms:GetParametersForImport",
    ImportKeyMaterial = "kms:ImportKeyMaterial",
    ListAliases = "kms:ListAliases",
    ListGrants = "kms:ListGrants",
    ListKeyPolicies = "kms:ListKeyPolicies",
    ListKeys = "kms:ListKeys",
    ListResourceTags = "kms:ListResourceTags",
    ListRetirableGrants = "kms:ListRetirableGrants",
    PutKeyPolicy = "kms:PutKeyPolicy",
    ReEncryptFrom = "kms:ReEncryptFrom",
    ReEncryptTo = "kms:ReEncryptTo",
    RetireGrant = "kms:RetireGrant",
    RevokeGrant = "kms:RevokeGrant",
    ScheduleKeyDeletion = "kms:ScheduleKeyDeletion",
    TagResource = "kms:TagResource",
    UntagResource = "kms:UntagResource",
    UpdateAlias = "kms:UpdateAlias",
    UpdateKeyDescription = "kms:UpdateKeyDescription"
}

/** Actions for AWS Lambda
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html
  */
export enum Lambda {
    AddPermission = "lambda:AddPermission",
    CreateAlias = "lambda:CreateAlias",
    CreateEventSourceMapping = "lambda:CreateEventSourceMapping",
    CreateFunction = "lambda:CreateFunction",
    DeleteAlias = "lambda:DeleteAlias",
    DeleteEventSourceMapping = "lambda:DeleteEventSourceMapping",
    DeleteFunction = "lambda:DeleteFunction",
    DeleteFunctionConcurrency = "lambda:DeleteFunctionConcurrency",
    EnableReplication = "lambda:EnableReplication",
    GetAccountSettings = "lambda:GetAccountSettings",
    GetAlias = "lambda:GetAlias",
    GetEventSourceMapping = "lambda:GetEventSourceMapping",
    GetFunction = "lambda:GetFunction",
    GetFunctionConfiguration = "lambda:GetFunctionConfiguration",
    GetPolicy = "lambda:GetPolicy",
    InvokeAsync = "lambda:InvokeAsync",
    InvokeFunction = "lambda:InvokeFunction",
    ListAliases = "lambda:ListAliases",
    ListEventSourceMappings = "lambda:ListEventSourceMappings",
    ListFunctions = "lambda:ListFunctions",
    ListTags = "lambda:ListTags",
    ListVersionsByFunction = "lambda:ListVersionsByFunction",
    PublishVersion = "lambda:PublishVersion",
    PutFunctionConcurrency = "lambda:PutFunctionConcurrency",
    RemovePermission = "lambda:RemovePermission",
    TagResource = "lambda:TagResource",
    UntagResource = "lambda:UntagResource",
    UpdateAlias = "lambda:UpdateAlias",
    UpdateEventSourceMapping = "lambda:UpdateEventSourceMapping",
    UpdateFunctionCode = "lambda:UpdateFunctionCode",
    UpdateFunctionConfiguration = "lambda:UpdateFunctionConfiguration"
}

/** Actions for AWS Marketplace
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplace.html
  */
export enum AWSMarketplace {
    Subscribe = "aws-marketplace:Subscribe",
    Unsubscribe = "aws-marketplace:Unsubscribe",
    ViewSubscriptions = "aws-marketplace:ViewSubscriptions"
}

/** Actions for AWS Marketplace Management Portal
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacemanagementportal.html
  */
export enum AWSMarketplaceManagement {
    uploadFiles = "aws-marketplace-management:uploadFiles",
    viewMarketing = "aws-marketplace-management:viewMarketing",
    viewReports = "aws-marketplace-management:viewReports",
    viewSupport = "aws-marketplace-management:viewSupport"
}

/** Actions for AWS Marketplace Metering Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacemeteringservice.html
  */
export enum AWSMarketplace {
    BatchMeterUsage = "aws-marketplace:BatchMeterUsage",
    MeterUsage = "aws-marketplace:MeterUsage",
    ResolveCustomer = "aws-marketplace:ResolveCustomer"
}

/** Actions for AWS Migration Hub
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmigrationhub.html
  */
export enum MGH {
    AssociateCreatedArtifact = "mgh:AssociateCreatedArtifact",
    AssociateDiscoveredResource = "mgh:AssociateDiscoveredResource",
    CreateProgressUpdateStream = "mgh:CreateProgressUpdateStream",
    DeleteProgressUpdateStream = "mgh:DeleteProgressUpdateStream",
    DescribeApplicationState = "mgh:DescribeApplicationState",
    DescribeMigrationTask = "mgh:DescribeMigrationTask",
    DisassociateCreatedArtifact = "mgh:DisassociateCreatedArtifact",
    DisassociateDiscoveredResource = "mgh:DisassociateDiscoveredResource",
    ImportMigrationTask = "mgh:ImportMigrationTask",
    ListCreatedArtifacts = "mgh:ListCreatedArtifacts",
    ListDiscoveredResources = "mgh:ListDiscoveredResources",
    ListMigrationTasks = "mgh:ListMigrationTasks",
    ListProgressUpdateStreams = "mgh:ListProgressUpdateStreams",
    NotifyApplicationState = "mgh:NotifyApplicationState",
    NotifyMigrationTaskState = "mgh:NotifyMigrationTaskState",
    PutResourceAttributes = "mgh:PutResourceAttributes"
}

/** Actions for AWS Mobile Hub
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmobilehub.html
  */
export enum MobileHub {
    CreateProject = "mobilehub:CreateProject",
    CreateServiceRole = "mobilehub:CreateServiceRole",
    DeleteProject = "mobilehub:DeleteProject",
    DeployToStage = "mobilehub:DeployToStage",
    DescribeBundle = "mobilehub:DescribeBundle",
    ExportBundle = "mobilehub:ExportBundle",
    ExportProject = "mobilehub:ExportProject",
    GenerateProjectParameters = "mobilehub:GenerateProjectParameters",
    GetProject = "mobilehub:GetProject",
    GetProjectSnapshot = "mobilehub:GetProjectSnapshot",
    ImportProject = "mobilehub:ImportProject",
    ListAvailableConnectors = "mobilehub:ListAvailableConnectors",
    ListAvailableFeatures = "mobilehub:ListAvailableFeatures",
    ListAvailableRegions = "mobilehub:ListAvailableRegions",
    ListBundles = "mobilehub:ListBundles",
    ListProjects = "mobilehub:ListProjects",
    SynchronizeProject = "mobilehub:SynchronizeProject",
    UpdateProject = "mobilehub:UpdateProject",
    VerifyServiceRole = "mobilehub:VerifyServiceRole"
}

/** Actions for AWS OpsWorks
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsopsworks.html
  */
export enum OpsWorks {
    AssignInstance = "opsworks:AssignInstance",
    AssignVolume = "opsworks:AssignVolume",
    AssociateElasticIp = "opsworks:AssociateElasticIp",
    AttachElasticLoadBalancer = "opsworks:AttachElasticLoadBalancer",
    CloneStack = "opsworks:CloneStack",
    CreateApp = "opsworks:CreateApp",
    CreateDeployment = "opsworks:CreateDeployment",
    CreateInstance = "opsworks:CreateInstance",
    CreateLayer = "opsworks:CreateLayer",
    CreateStack = "opsworks:CreateStack",
    CreateUserProfile = "opsworks:CreateUserProfile",
    DeleteApp = "opsworks:DeleteApp",
    DeleteInstance = "opsworks:DeleteInstance",
    DeleteLayer = "opsworks:DeleteLayer",
    DeleteStack = "opsworks:DeleteStack",
    DeleteUserProfile = "opsworks:DeleteUserProfile",
    DeregisterEcsCluster = "opsworks:DeregisterEcsCluster",
    DeregisterElasticIp = "opsworks:DeregisterElasticIp",
    DeregisterInstance = "opsworks:DeregisterInstance",
    DeregisterRdsDbInstance = "opsworks:DeregisterRdsDbInstance",
    DeregisterVolume = "opsworks:DeregisterVolume",
    DescribeAgentVersions = "opsworks:DescribeAgentVersions",
    DescribeApps = "opsworks:DescribeApps",
    DescribeCommands = "opsworks:DescribeCommands",
    DescribeDeployments = "opsworks:DescribeDeployments",
    DescribeEcsClusters = "opsworks:DescribeEcsClusters",
    DescribeElasticIps = "opsworks:DescribeElasticIps",
    DescribeElasticLoadBalancers = "opsworks:DescribeElasticLoadBalancers",
    DescribeInstances = "opsworks:DescribeInstances",
    DescribeLayers = "opsworks:DescribeLayers",
    DescribeLoadBasedAutoScaling = "opsworks:DescribeLoadBasedAutoScaling",
    DescribeMyUserProfile = "opsworks:DescribeMyUserProfile",
    DescribePermissions = "opsworks:DescribePermissions",
    DescribeRaidArrays = "opsworks:DescribeRaidArrays",
    DescribeRdsDbInstances = "opsworks:DescribeRdsDbInstances",
    DescribeServiceErrors = "opsworks:DescribeServiceErrors",
    DescribeStackProvisioningParameters = "opsworks:DescribeStackProvisioningParameters",
    DescribeStackSummary = "opsworks:DescribeStackSummary",
    DescribeStacks = "opsworks:DescribeStacks",
    DescribeTimeBasedAutoScaling = "opsworks:DescribeTimeBasedAutoScaling",
    DescribeUserProfiles = "opsworks:DescribeUserProfiles",
    DescribeVolumes = "opsworks:DescribeVolumes",
    DetachElasticLoadBalancer = "opsworks:DetachElasticLoadBalancer",
    DisassociateElasticIp = "opsworks:DisassociateElasticIp",
    GetHostnameSuggestion = "opsworks:GetHostnameSuggestion",
    GrantAccess = "opsworks:GrantAccess",
    ListTags = "opsworks:ListTags",
    RebootInstance = "opsworks:RebootInstance",
    RegisterEcsCluster = "opsworks:RegisterEcsCluster",
    RegisterElasticIp = "opsworks:RegisterElasticIp",
    RegisterInstance = "opsworks:RegisterInstance",
    RegisterRdsDbInstance = "opsworks:RegisterRdsDbInstance",
    RegisterVolume = "opsworks:RegisterVolume",
    SetLoadBasedAutoScaling = "opsworks:SetLoadBasedAutoScaling",
    SetPermission = "opsworks:SetPermission",
    SetTimeBasedAutoScaling = "opsworks:SetTimeBasedAutoScaling",
    StartInstance = "opsworks:StartInstance",
    StartStack = "opsworks:StartStack",
    StopInstance = "opsworks:StopInstance",
    StopStack = "opsworks:StopStack",
    TagResource = "opsworks:TagResource",
    UnassignInstance = "opsworks:UnassignInstance",
    UnassignVolume = "opsworks:UnassignVolume",
    UntagResource = "opsworks:UntagResource",
    UpdateApp = "opsworks:UpdateApp",
    UpdateElasticIp = "opsworks:UpdateElasticIp",
    UpdateInstance = "opsworks:UpdateInstance",
    UpdateLayer = "opsworks:UpdateLayer",
    UpdateMyUserProfile = "opsworks:UpdateMyUserProfile",
    UpdateRdsDbInstance = "opsworks:UpdateRdsDbInstance",
    UpdateStack = "opsworks:UpdateStack",
    UpdateUserProfile = "opsworks:UpdateUserProfile",
    UpdateVolume = "opsworks:UpdateVolume"
}

/** Actions for AWS OpsWorks Configuration Management
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsopsworksconfigurationmanagement.html
  */
export enum OpsworksCM {
    AssociateNode = "opsworks-cm:AssociateNode",
    CreateBackup = "opsworks-cm:CreateBackup",
    CreateServer = "opsworks-cm:CreateServer",
    DeleteBackup = "opsworks-cm:DeleteBackup",
    DeleteServer = "opsworks-cm:DeleteServer",
    DescribeAccountAttributes = "opsworks-cm:DescribeAccountAttributes",
    DescribeBackups = "opsworks-cm:DescribeBackups",
    DescribeEvents = "opsworks-cm:DescribeEvents",
    DescribeNodeAssociationStatus = "opsworks-cm:DescribeNodeAssociationStatus",
    DescribeServers = "opsworks-cm:DescribeServers",
    DisassociateNode = "opsworks-cm:DisassociateNode",
    RestoreServer = "opsworks-cm:RestoreServer",
    StartMaintenance = "opsworks-cm:StartMaintenance",
    UpdateServer = "opsworks-cm:UpdateServer",
    UpdateServerEngineAttributes = "opsworks-cm:UpdateServerEngineAttributes"
}

/** Actions for AWS Organizations
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsorganizations.html
  */
export enum Organizations {
    AcceptHandshake = "organizations:AcceptHandshake",
    AttachPolicy = "organizations:AttachPolicy",
    CancelHandshake = "organizations:CancelHandshake",
    CreateAccount = "organizations:CreateAccount",
    CreateOrganization = "organizations:CreateOrganization",
    CreateOrganizationalUnit = "organizations:CreateOrganizationalUnit",
    CreatePolicy = "organizations:CreatePolicy",
    DeclineHandshake = "organizations:DeclineHandshake",
    DeleteOrganization = "organizations:DeleteOrganization",
    DeleteOrganizationalUnit = "organizations:DeleteOrganizationalUnit",
    DeletePolicy = "organizations:DeletePolicy",
    DescribeAccount = "organizations:DescribeAccount",
    DescribeCreateAccountStatus = "organizations:DescribeCreateAccountStatus",
    DescribeHandshake = "organizations:DescribeHandshake",
    DescribeOrganization = "organizations:DescribeOrganization",
    DescribeOrganizationalUnit = "organizations:DescribeOrganizationalUnit",
    DescribePolicy = "organizations:DescribePolicy",
    DetachPolicy = "organizations:DetachPolicy",
    DisablePolicyType = "organizations:DisablePolicyType",
    EnableAllFeatures = "organizations:EnableAllFeatures",
    EnablePolicyType = "organizations:EnablePolicyType",
    InviteAccountToOrganization = "organizations:InviteAccountToOrganization",
    LeaveOrganization = "organizations:LeaveOrganization",
    ListAccounts = "organizations:ListAccounts",
    ListAccountsForParent = "organizations:ListAccountsForParent",
    ListChildren = "organizations:ListChildren",
    ListCreateAccountStatus = "organizations:ListCreateAccountStatus",
    ListHandshakesForAccount = "organizations:ListHandshakesForAccount",
    ListHandshakesForOrganization = "organizations:ListHandshakesForOrganization",
    ListOrganizationalUnitsForParent = "organizations:ListOrganizationalUnitsForParent",
    ListParents = "organizations:ListParents",
    ListPolicies = "organizations:ListPolicies",
    ListPoliciesForTarget = "organizations:ListPoliciesForTarget",
    ListRoots = "organizations:ListRoots",
    ListTargetsForPolicy = "organizations:ListTargetsForPolicy",
    MoveAccount = "organizations:MoveAccount",
    RemoveAccountFromOrganization = "organizations:RemoveAccountFromOrganization",
    UpdateOrganizationalUnit = "organizations:UpdateOrganizationalUnit",
    UpdatePolicy = "organizations:UpdatePolicy"
}

/** Actions for AWS Price List
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awspricelist.html
  */
export enum Pricing {
    DescribeServices = "pricing:DescribeServices",
    GetAttributeValues = "pricing:GetAttributeValues",
    GetProducts = "pricing:GetProducts"
}

/** Actions for AWS Resource Groups
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsresourcegroups.html
  */
export enum ResourceGroups {
    CreateGroup = "resource-groups:CreateGroup",
    DeleteGroup = "resource-groups:DeleteGroup",
    GetGroup = "resource-groups:GetGroup",
    GetGroupQuery = "resource-groups:GetGroupQuery",
    GetTags = "resource-groups:GetTags",
    ListGroupResources = "resource-groups:ListGroupResources",
    ListGroups = "resource-groups:ListGroups",
    SearchResources = "resource-groups:SearchResources",
    Tag = "resource-groups:Tag",
    Untag = "resource-groups:Untag",
    UpdateGroup = "resource-groups:UpdateGroup",
    UpdateGroupQuery = "resource-groups:UpdateGroupQuery"
}

/** Actions for AWS Security Token Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecuritytokenservice.html
  */
export enum STS {
    AssumeRole = "sts:AssumeRole",
    AssumeRoleWithSAML = "sts:AssumeRoleWithSAML",
    AssumeRoleWithWebIdentity = "sts:AssumeRoleWithWebIdentity",
    DecodeAuthorizationMessage = "sts:DecodeAuthorizationMessage",
    GetCallerIdentity = "sts:GetCallerIdentity",
    GetFederationToken = "sts:GetFederationToken",
    GetSessionToken = "sts:GetSessionToken"
}

/** Actions for AWS Serverless Application Repository
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsserverlessapplicationrepository.html
  */
export enum Serverlessrepo {
    CreateApplication = "serverlessrepo:CreateApplication",
    CreateApplicationVersion = "serverlessrepo:CreateApplicationVersion",
    CreateCloudFormationChangeSet = "serverlessrepo:CreateCloudFormationChangeSet",
    DeleteApplication = "serverlessrepo:DeleteApplication",
    GetApplication = "serverlessrepo:GetApplication",
    GetApplicationPolicy = "serverlessrepo:GetApplicationPolicy",
    ListApplicationVersions = "serverlessrepo:ListApplicationVersions",
    ListApplications = "serverlessrepo:ListApplications",
    PutApplicationPolicy = "serverlessrepo:PutApplicationPolicy",
    SearchApplications = "serverlessrepo:SearchApplications",
    UpdateApplication = "serverlessrepo:UpdateApplication"
}

/** Actions for AWS Service Catalog
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsservicecatalog.html
  */
export enum ServiceCatalog {
    AcceptPortfolioShare = "servicecatalog:AcceptPortfolioShare",
    AssociatePrincipalWithPortfolio = "servicecatalog:AssociatePrincipalWithPortfolio",
    AssociateProductWithPortfolio = "servicecatalog:AssociateProductWithPortfolio",
    CreateConstraint = "servicecatalog:CreateConstraint",
    CreatePortfolio = "servicecatalog:CreatePortfolio",
    CreatePortfolioShare = "servicecatalog:CreatePortfolioShare",
    CreateProduct = "servicecatalog:CreateProduct",
    CreateProvisioningArtifact = "servicecatalog:CreateProvisioningArtifact",
    DeleteConstraint = "servicecatalog:DeleteConstraint",
    DeletePortfolio = "servicecatalog:DeletePortfolio",
    DeletePortfolioShare = "servicecatalog:DeletePortfolioShare",
    DeleteProduct = "servicecatalog:DeleteProduct",
    DeleteProvisioningArtifact = "servicecatalog:DeleteProvisioningArtifact",
    DescribeConstraint = "servicecatalog:DescribeConstraint",
    DescribePortfolio = "servicecatalog:DescribePortfolio",
    DescribeProduct = "servicecatalog:DescribeProduct",
    DescribeProductAsAdmin = "servicecatalog:DescribeProductAsAdmin",
    DescribeProductView = "servicecatalog:DescribeProductView",
    DescribeProvisioningArtifact = "servicecatalog:DescribeProvisioningArtifact",
    DescribeProvisioningParameters = "servicecatalog:DescribeProvisioningParameters",
    DescribeRecord = "servicecatalog:DescribeRecord",
    DisassociatePrincipalFromPortfolio = "servicecatalog:DisassociatePrincipalFromPortfolio",
    DisassociateProductFromPortfolio = "servicecatalog:DisassociateProductFromPortfolio",
    ListAcceptedPortfolioShares = "servicecatalog:ListAcceptedPortfolioShares",
    ListConstraintsForPortfolio = "servicecatalog:ListConstraintsForPortfolio",
    ListLaunchPaths = "servicecatalog:ListLaunchPaths",
    ListPortfolioAccess = "servicecatalog:ListPortfolioAccess",
    ListPortfolios = "servicecatalog:ListPortfolios",
    ListPortfoliosForProduct = "servicecatalog:ListPortfoliosForProduct",
    ListPrincipalsForPortfolio = "servicecatalog:ListPrincipalsForPortfolio",
    ListProvisioningArtifacts = "servicecatalog:ListProvisioningArtifacts",
    ListRecordHistory = "servicecatalog:ListRecordHistory",
    ProvisionProduct = "servicecatalog:ProvisionProduct",
    RejectPortfolioShare = "servicecatalog:RejectPortfolioShare",
    ScanProvisionedProducts = "servicecatalog:ScanProvisionedProducts",
    SearchProducts = "servicecatalog:SearchProducts",
    SearchProductsAsAdmin = "servicecatalog:SearchProductsAsAdmin",
    TerminateProvisionedProduct = "servicecatalog:TerminateProvisionedProduct",
    UpdateConstraint = "servicecatalog:UpdateConstraint",
    UpdatePortfolio = "servicecatalog:UpdatePortfolio",
    UpdateProduct = "servicecatalog:UpdateProduct",
    UpdateProvisionedProduct = "servicecatalog:UpdateProvisionedProduct",
    UpdateProvisioningArtifact = "servicecatalog:UpdateProvisioningArtifact"
}

/** Actions for AWS Shield
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsshield.html
  */
export enum Shield {
    CreateProtection = "shield:CreateProtection",
    CreateSubscription = "shield:CreateSubscription",
    DeleteProtection = "shield:DeleteProtection",
    DeleteSubscription = "shield:DeleteSubscription",
    DescribeAttack = "shield:DescribeAttack",
    DescribeProtection = "shield:DescribeProtection",
    DescribeSubscription = "shield:DescribeSubscription",
    ListAttacks = "shield:ListAttacks",
    ListProtections = "shield:ListProtections"
}

/** Actions for AWS Snowball
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssnowball.html
  */
export enum Snowball {
    CancelCluster = "snowball:CancelCluster",
    CancelJob = "snowball:CancelJob",
    CreateAddress = "snowball:CreateAddress",
    CreateCluster = "snowball:CreateCluster",
    CreateJob = "snowball:CreateJob",
    DescribeAddress = "snowball:DescribeAddress",
    DescribeAddresses = "snowball:DescribeAddresses",
    DescribeCluster = "snowball:DescribeCluster",
    DescribeJob = "snowball:DescribeJob",
    GetJobManifest = "snowball:GetJobManifest",
    GetJobUnlockCode = "snowball:GetJobUnlockCode",
    GetSnowballUsage = "snowball:GetSnowballUsage",
    ListClusterJobs = "snowball:ListClusterJobs",
    ListClusters = "snowball:ListClusters",
    ListJobs = "snowball:ListJobs",
    UpdateCluster = "snowball:UpdateCluster",
    UpdateJob = "snowball:UpdateJob"
}

/** Actions for AWS Step Functions
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsstepfunctions.html
  */
export enum States {
    CreateActivity = "states:CreateActivity",
    CreateStateMachine = "states:CreateStateMachine",
    DeleteActivity = "states:DeleteActivity",
    DeleteStateMachine = "states:DeleteStateMachine",
    DescribeActivity = "states:DescribeActivity",
    DescribeExecution = "states:DescribeExecution",
    DescribeStateMachine = "states:DescribeStateMachine",
    DescribeStateMachineForExecution = "states:DescribeStateMachineForExecution",
    GetActivityTask = "states:GetActivityTask",
    GetExecutionHistory = "states:GetExecutionHistory",
    ListActivities = "states:ListActivities",
    ListExecutions = "states:ListExecutions",
    ListStateMachines = "states:ListStateMachines",
    SendTaskFailure = "states:SendTaskFailure",
    SendTaskHeartbeat = "states:SendTaskHeartbeat",
    SendTaskSuccess = "states:SendTaskSuccess",
    StartExecution = "states:StartExecution",
    StopExecution = "states:StopExecution",
    UpdateStateMachine = "states:UpdateStateMachine"
}

/** Actions for AWS Support
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssupport.html
  */
export enum Support {
    AddAttachmentsToSet = "support:AddAttachmentsToSet",
    AddCommunicationToCase = "support:AddCommunicationToCase",
    CreateCase = "support:CreateCase",
    DescribeAttachment = "support:DescribeAttachment",
    DescribeCases = "support:DescribeCases",
    DescribeCommunications = "support:DescribeCommunications",
    DescribeServices = "support:DescribeServices",
    DescribeSeverityLevels = "support:DescribeSeverityLevels",
    DescribeTrustedAdvisorCheckRefreshStatuses = "support:DescribeTrustedAdvisorCheckRefreshStatuses",
    DescribeTrustedAdvisorCheckResult = "support:DescribeTrustedAdvisorCheckResult",
    DescribeTrustedAdvisorCheckSummaries = "support:DescribeTrustedAdvisorCheckSummaries",
    DescribeTrustedAdvisorChecks = "support:DescribeTrustedAdvisorChecks",
    RefreshTrustedAdvisorCheck = "support:RefreshTrustedAdvisorCheck",
    ResolveCase = "support:ResolveCase"
}

/** Actions for AWS Trusted Advisor
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstrustedadvisor.html
  */
export enum TrustedAdvisor {
    DescribeCheckItems = "trustedadvisor:DescribeCheckItems",
    DescribeCheckRefreshStatuses = "trustedadvisor:DescribeCheckRefreshStatuses",
    DescribeCheckSummaries = "trustedadvisor:DescribeCheckSummaries",
    DescribeNotificationPreferences = "trustedadvisor:DescribeNotificationPreferences",
    ExcludeCheckItems = "trustedadvisor:ExcludeCheckItems",
    IncludeCheckItems = "trustedadvisor:IncludeCheckItems",
    RefreshCheck = "trustedadvisor:RefreshCheck",
    UpdateNotificationPreferences = "trustedadvisor:UpdateNotificationPreferences"
}

/** Actions for AWS WAF
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswaf.html
  */
export enum WAF {
    CreateByteMatchSet = "waf:CreateByteMatchSet",
    CreateGeoMatchSet = "waf:CreateGeoMatchSet",
    CreateIPSet = "waf:CreateIPSet",
    CreateRateBasedRule = "waf:CreateRateBasedRule",
    CreateRegexMatchSet = "waf:CreateRegexMatchSet",
    CreateRegexPatternSet = "waf:CreateRegexPatternSet",
    CreateRule = "waf:CreateRule",
    CreateSizeConstraintSet = "waf:CreateSizeConstraintSet",
    CreateSqlInjectionMatchSet = "waf:CreateSqlInjectionMatchSet",
    CreateWebACL = "waf:CreateWebACL",
    CreateXssMatchSet = "waf:CreateXssMatchSet",
    DeleteByteMatchSet = "waf:DeleteByteMatchSet",
    DeleteGeoMatchSet = "waf:DeleteGeoMatchSet",
    DeleteIPSet = "waf:DeleteIPSet",
    DeleteRateBasedRule = "waf:DeleteRateBasedRule",
    DeleteRegexMatchSet = "waf:DeleteRegexMatchSet",
    DeleteRegexPatternSet = "waf:DeleteRegexPatternSet",
    DeleteRule = "waf:DeleteRule",
    DeleteSizeConstraintSet = "waf:DeleteSizeConstraintSet",
    DeleteSqlInjectionMatchSet = "waf:DeleteSqlInjectionMatchSet",
    DeleteWebACL = "waf:DeleteWebACL",
    DeleteXssMatchSet = "waf:DeleteXssMatchSet",
    GetByteMatchSet = "waf:GetByteMatchSet",
    GetChangeToken = "waf:GetChangeToken",
    GetChangeTokenStatus = "waf:GetChangeTokenStatus",
    GetGeoMatchSet = "waf:GetGeoMatchSet",
    GetIPSet = "waf:GetIPSet",
    GetRateBasedRule = "waf:GetRateBasedRule",
    GetRateBasedRuleManagedKeys = "waf:GetRateBasedRuleManagedKeys",
    GetRegexMatchSet = "waf:GetRegexMatchSet",
    GetRegexPatternSet = "waf:GetRegexPatternSet",
    GetRule = "waf:GetRule",
    GetSampledRequests = "waf:GetSampledRequests",
    GetSizeConstraintSet = "waf:GetSizeConstraintSet",
    GetSqlInjectionMatchSet = "waf:GetSqlInjectionMatchSet",
    GetWebACL = "waf:GetWebACL",
    GetXssMatchSet = "waf:GetXssMatchSet",
    ListByteMatchSets = "waf:ListByteMatchSets",
    ListGeoMatchSets = "waf:ListGeoMatchSets",
    ListIPSets = "waf:ListIPSets",
    ListRateBasedRules = "waf:ListRateBasedRules",
    ListRegexMatchSets = "waf:ListRegexMatchSets",
    ListRegexPatternSets = "waf:ListRegexPatternSets",
    ListRules = "waf:ListRules",
    ListSizeConstraintSets = "waf:ListSizeConstraintSets",
    ListSqlInjectionMatchSets = "waf:ListSqlInjectionMatchSets",
    ListWebACLs = "waf:ListWebACLs",
    ListXssMatchSets = "waf:ListXssMatchSets",
    UpdateByteMatchSet = "waf:UpdateByteMatchSet",
    UpdateGeoMatchSet = "waf:UpdateGeoMatchSet",
    UpdateIPSet = "waf:UpdateIPSet",
    UpdateRateBasedRule = "waf:UpdateRateBasedRule",
    UpdateRegexMatchSet = "waf:UpdateRegexMatchSet",
    UpdateRegexPatternSet = "waf:UpdateRegexPatternSet",
    UpdateRule = "waf:UpdateRule",
    UpdateSizeConstraintSet = "waf:UpdateSizeConstraintSet",
    UpdateSqlInjectionMatchSet = "waf:UpdateSqlInjectionMatchSet",
    UpdateWebACL = "waf:UpdateWebACL",
    UpdateXssMatchSet = "waf:UpdateXssMatchSet"
}

/** Actions for AWS WAF Regional
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswafregional.html
  */
export enum WAFRegional {
    AssociateWebACL = "waf-regional:AssociateWebACL",
    CreateByteMatchSet = "waf-regional:CreateByteMatchSet",
    CreateGeoMatchSet = "waf-regional:CreateGeoMatchSet",
    CreateIPSet = "waf-regional:CreateIPSet",
    CreateRateBasedRule = "waf-regional:CreateRateBasedRule",
    CreateRegexMatchSet = "waf-regional:CreateRegexMatchSet",
    CreateRegexPatternSet = "waf-regional:CreateRegexPatternSet",
    CreateRule = "waf-regional:CreateRule",
    CreateSizeConstraintSet = "waf-regional:CreateSizeConstraintSet",
    CreateSqlInjectionMatchSet = "waf-regional:CreateSqlInjectionMatchSet",
    CreateWebACL = "waf-regional:CreateWebACL",
    CreateXssMatchSet = "waf-regional:CreateXssMatchSet",
    DeleteByteMatchSet = "waf-regional:DeleteByteMatchSet",
    DeleteGeoMatchSet = "waf-regional:DeleteGeoMatchSet",
    DeleteIPSet = "waf-regional:DeleteIPSet",
    DeleteRateBasedRule = "waf-regional:DeleteRateBasedRule",
    DeleteRegexMatchSet = "waf-regional:DeleteRegexMatchSet",
    DeleteRegexPatternSet = "waf-regional:DeleteRegexPatternSet",
    DeleteRule = "waf-regional:DeleteRule",
    DeleteSizeConstraintSet = "waf-regional:DeleteSizeConstraintSet",
    DeleteSqlInjectionMatchSet = "waf-regional:DeleteSqlInjectionMatchSet",
    DeleteWebACL = "waf-regional:DeleteWebACL",
    DeleteXssMatchSet = "waf-regional:DeleteXssMatchSet",
    DisassociateWebACL = "waf-regional:DisassociateWebACL",
    GetByteMatchSet = "waf-regional:GetByteMatchSet",
    GetChangeToken = "waf-regional:GetChangeToken",
    GetChangeTokenStatus = "waf-regional:GetChangeTokenStatus",
    GetGeoMatchSet = "waf-regional:GetGeoMatchSet",
    GetIPSet = "waf-regional:GetIPSet",
    GetRateBasedRule = "waf-regional:GetRateBasedRule",
    GetRateBasedRuleManagedKeys = "waf-regional:GetRateBasedRuleManagedKeys",
    GetRegexMatchSet = "waf-regional:GetRegexMatchSet",
    GetRegexPatternSet = "waf-regional:GetRegexPatternSet",
    GetRule = "waf-regional:GetRule",
    GetSampledRequests = "waf-regional:GetSampledRequests",
    GetSizeConstraintSet = "waf-regional:GetSizeConstraintSet",
    GetSqlInjectionMatchSet = "waf-regional:GetSqlInjectionMatchSet",
    GetWebACL = "waf-regional:GetWebACL",
    GetWebACLForResource = "waf-regional:GetWebACLForResource",
    GetXssMatchSet = "waf-regional:GetXssMatchSet",
    ListByteMatchSets = "waf-regional:ListByteMatchSets",
    ListGeoMatchSets = "waf-regional:ListGeoMatchSets",
    ListIPSets = "waf-regional:ListIPSets",
    ListRateBasedRules = "waf-regional:ListRateBasedRules",
    ListRegexMatchSets = "waf-regional:ListRegexMatchSets",
    ListRegexPatternSets = "waf-regional:ListRegexPatternSets",
    ListResourcesForWebACL = "waf-regional:ListResourcesForWebACL",
    ListRules = "waf-regional:ListRules",
    ListSizeConstraintSets = "waf-regional:ListSizeConstraintSets",
    ListSqlInjectionMatchSets = "waf-regional:ListSqlInjectionMatchSets",
    ListWebACLs = "waf-regional:ListWebACLs",
    ListXssMatchSets = "waf-regional:ListXssMatchSets",
    UpdateByteMatchSet = "waf-regional:UpdateByteMatchSet",
    UpdateGeoMatchSet = "waf-regional:UpdateGeoMatchSet",
    UpdateIPSet = "waf-regional:UpdateIPSet",
    UpdateRateBasedRule = "waf-regional:UpdateRateBasedRule",
    UpdateRegexMatchSet = "waf-regional:UpdateRegexMatchSet",
    UpdateRegexPatternSet = "waf-regional:UpdateRegexPatternSet",
    UpdateRule = "waf-regional:UpdateRule",
    UpdateSizeConstraintSet = "waf-regional:UpdateSizeConstraintSet",
    UpdateSqlInjectionMatchSet = "waf-regional:UpdateSqlInjectionMatchSet",
    UpdateWebACL = "waf-regional:UpdateWebACL",
    UpdateXssMatchSet = "waf-regional:UpdateXssMatchSet"
}

/** Actions for AWS XRay
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsxray.html
  */
export enum XRay {
    BatchGetTraces = "xray:BatchGetTraces",
    GetServiceGraph = "xray:GetServiceGraph",
    GetTraceGraph = "xray:GetTraceGraph",
    GetTraceSummaries = "xray:GetTraceSummaries",
    PutTelemetryRecords = "xray:PutTelemetryRecords",
    PutTraceSegments = "xray:PutTraceSegments"
}

/** Actions for Alexa for Business
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_alexaforbusiness.html
  */
export enum A4B {
    AssociateDeviceWithRoom = "a4b:AssociateDeviceWithRoom",
    AssociateSkillGroupWithRoom = "a4b:AssociateSkillGroupWithRoom",
    CreateProfile = "a4b:CreateProfile",
    CreateRoom = "a4b:CreateRoom",
    CreateSkillGroup = "a4b:CreateSkillGroup",
    CreateUser = "a4b:CreateUser",
    DeleteProfile = "a4b:DeleteProfile",
    DeleteRoom = "a4b:DeleteRoom",
    DeleteRoomSkillParameter = "a4b:DeleteRoomSkillParameter",
    DeleteSkillGroup = "a4b:DeleteSkillGroup",
    DeleteUser = "a4b:DeleteUser",
    DisassociateDeviceFromRoom = "a4b:DisassociateDeviceFromRoom",
    DisassociateSkillGroupFromRoom = "a4b:DisassociateSkillGroupFromRoom",
    GetDevice = "a4b:GetDevice",
    GetProfile = "a4b:GetProfile",
    GetRoom = "a4b:GetRoom",
    GetRoomSkillParameter = "a4b:GetRoomSkillParameter",
    GetSkillGroup = "a4b:GetSkillGroup",
    ListSkills = "a4b:ListSkills",
    ListTags = "a4b:ListTags",
    PutRoomSkillParameter = "a4b:PutRoomSkillParameter",
    ResolveRoom = "a4b:ResolveRoom",
    RevokeInvitation = "a4b:RevokeInvitation",
    SearchDevices = "a4b:SearchDevices",
    SearchProfiles = "a4b:SearchProfiles",
    SearchRooms = "a4b:SearchRooms",
    SearchSkillGroups = "a4b:SearchSkillGroups",
    SearchUsers = "a4b:SearchUsers",
    SendInvitation = "a4b:SendInvitation",
    StartDeviceSync = "a4b:StartDeviceSync",
    TagResource = "a4b:TagResource",
    UntagResource = "a4b:UntagResource",
    UpdateDevice = "a4b:UpdateDevice",
    UpdateProfile = "a4b:UpdateProfile",
    UpdateRoom = "a4b:UpdateRoom",
    UpdateSkillGroup = "a4b:UpdateSkillGroup"
}

/** Actions for Amazon API Gateway
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonapigateway.html
  */
export enum ExecuteAPI {
    InvalidateCache = "execute-api:InvalidateCache",
    Invoke = "execute-api:Invoke"
}

/** Actions for Amazon AWS Cloud Contact Center
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonawscloudcontactcenter.html
  */
export enum Connect {
    CreateInstance = "connect:CreateInstance",
    DescribeInstance = "connect:DescribeInstance",
    DestroyInstance = "connect:DestroyInstance",
    GetFederationToken = "connect:GetFederationToken",
    GetFederationTokens = "connect:GetFederationTokens",
    ListInstances = "connect:ListInstances",
    ModifyInstance = "connect:ModifyInstance"
}

/** Actions for Amazon AppStream
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappstream.html
  */
export enum AppStream {
    AssociateFleet = "appstream:AssociateFleet",
    CreateDirectoryConfig = "appstream:CreateDirectoryConfig",
    CreateFleet = "appstream:CreateFleet",
    CreateImageBuilder = "appstream:CreateImageBuilder",
    CreateImageBuilderStreamingURL = "appstream:CreateImageBuilderStreamingURL",
    CreateStack = "appstream:CreateStack",
    CreateStreamingURL = "appstream:CreateStreamingURL",
    DeleteDirectoryConfig = "appstream:DeleteDirectoryConfig",
    DeleteFleet = "appstream:DeleteFleet",
    DeleteImage = "appstream:DeleteImage",
    DeleteImageBuilder = "appstream:DeleteImageBuilder",
    DeleteStack = "appstream:DeleteStack",
    DescribeDirectoryConfigs = "appstream:DescribeDirectoryConfigs",
    DescribeFleets = "appstream:DescribeFleets",
    DescribeImageBuilders = "appstream:DescribeImageBuilders",
    DescribeImages = "appstream:DescribeImages",
    DescribeSessions = "appstream:DescribeSessions",
    DescribeStacks = "appstream:DescribeStacks",
    DisassociateFleet = "appstream:DisassociateFleet",
    ExpireSession = "appstream:ExpireSession",
    ListAssociatedFleets = "appstream:ListAssociatedFleets",
    ListAssociatedStacks = "appstream:ListAssociatedStacks",
    ListTagsForResource = "appstream:ListTagsForResource",
    StartFleet = "appstream:StartFleet",
    StartImageBuilder = "appstream:StartImageBuilder",
    StopFleet = "appstream:StopFleet",
    StopImageBuilder = "appstream:StopImageBuilder",
    Stream = "appstream:Stream",
    TagResource = "appstream:TagResource",
    UntagResource = "appstream:UntagResource",
    UpdateDirectoryConfig = "appstream:UpdateDirectoryConfig",
    UpdateFleet = "appstream:UpdateFleet",
    UpdateStack = "appstream:UpdateStack"
}

/** Actions for Amazon Athena
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonathena.html
  */
export enum Athena {
    BatchGetNamedQuery = "athena:BatchGetNamedQuery",
    BatchGetQueryExecution = "athena:BatchGetQueryExecution",
    CancelQueryExecution = "athena:CancelQueryExecution",
    CreateNamedQuery = "athena:CreateNamedQuery",
    DeleteNamedQuery = "athena:DeleteNamedQuery",
    GetCatalogs = "athena:GetCatalogs",
    GetExecutionEngine = "athena:GetExecutionEngine",
    GetExecutionEngines = "athena:GetExecutionEngines",
    GetNamedQuery = "athena:GetNamedQuery",
    GetNamespace = "athena:GetNamespace",
    GetNamespaces = "athena:GetNamespaces",
    GetQueryExecution = "athena:GetQueryExecution",
    GetQueryExecutions = "athena:GetQueryExecutions",
    GetQueryResults = "athena:GetQueryResults",
    GetTable = "athena:GetTable",
    GetTables = "athena:GetTables",
    ListNamedQueries = "athena:ListNamedQueries",
    ListQueryExecutions = "athena:ListQueryExecutions",
    RunQuery = "athena:RunQuery",
    StartQueryExecution = "athena:StartQueryExecution",
    StopQueryExecution = "athena:StopQueryExecution"
}

/** Actions for Amazon Chime
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonchime.html
  */
export enum Chime {
    AcceptDelegate = "chime:AcceptDelegate",
    ActivateUsers = "chime:ActivateUsers",
    AddDomain = "chime:AddDomain",
    AddOrUpdateGroups = "chime:AddOrUpdateGroups",
    AuthorizeDirectory = "chime:AuthorizeDirectory",
    ConnectDirectory = "chime:ConnectDirectory",
    CreateAccount = "chime:CreateAccount",
    CreateCDRBucket = "chime:CreateCDRBucket",
    DeleteAccount = "chime:DeleteAccount",
    DeleteCDRBucket = "chime:DeleteCDRBucket",
    DeleteDelegate = "chime:DeleteDelegate",
    DeleteDomain = "chime:DeleteDomain",
    DeleteGroups = "chime:DeleteGroups",
    DisconnectDirectory = "chime:DisconnectDirectory",
    GetAccount = "chime:GetAccount",
    GetAccountResource = "chime:GetAccountResource",
    GetAccountSettings = "chime:GetAccountSettings",
    GetCDRBucket = "chime:GetCDRBucket",
    GetDomain = "chime:GetDomain",
    GetUser = "chime:GetUser",
    GetUserByEmail = "chime:GetUserByEmail",
    InviteDelegate = "chime:InviteDelegate",
    InviteUsers = "chime:InviteUsers",
    ListAccounts = "chime:ListAccounts",
    ListCDRBucket = "chime:ListCDRBucket",
    ListDelegates = "chime:ListDelegates",
    ListDirectories = "chime:ListDirectories",
    ListDomains = "chime:ListDomains",
    ListGroups = "chime:ListGroups",
    ListUsers = "chime:ListUsers",
    LogoutUser = "chime:LogoutUser",
    RenameAccount = "chime:RenameAccount",
    RenewDelegate = "chime:RenewDelegate",
    ResetAccountResource = "chime:ResetAccountResource",
    ResetPersonalPin = "chime:ResetPersonalPin",
    SubmitSupportRequest = "chime:SubmitSupportRequest",
    SuspendUsers = "chime:SuspendUsers",
    UnauthorizeDirectory = "chime:UnauthorizeDirectory",
    UpdateAccountResource = "chime:UpdateAccountResource",
    UpdateAccountSettings = "chime:UpdateAccountSettings",
    UpdateCDRBucket = "chime:UpdateCDRBucket",
    UpdateSupportedLicenses = "chime:UpdateSupportedLicenses",
    UpdateUserLicenses = "chime:UpdateUserLicenses",
    ValidateAccountResource = "chime:ValidateAccountResource",
    ValidateDelegate = "chime:ValidateDelegate"
}

/** Actions for Amazon Cloud Directory
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonclouddirectory.html
  */
export enum CloudDirectory {
    AddFacetToObject = "clouddirectory:AddFacetToObject",
    ApplySchema = "clouddirectory:ApplySchema",
    AttachObject = "clouddirectory:AttachObject",
    AttachPolicy = "clouddirectory:AttachPolicy",
    AttachToIndex = "clouddirectory:AttachToIndex",
    AttachTypedLink = "clouddirectory:AttachTypedLink",
    BatchRead = "clouddirectory:BatchRead",
    BatchWrite = "clouddirectory:BatchWrite",
    CreateDirectory = "clouddirectory:CreateDirectory",
    CreateFacet = "clouddirectory:CreateFacet",
    CreateIndex = "clouddirectory:CreateIndex",
    CreateObject = "clouddirectory:CreateObject",
    CreateSchema = "clouddirectory:CreateSchema",
    CreateTypedLinkFacet = "clouddirectory:CreateTypedLinkFacet",
    DeleteDirectory = "clouddirectory:DeleteDirectory",
    DeleteFacet = "clouddirectory:DeleteFacet",
    DeleteObject = "clouddirectory:DeleteObject",
    DeleteSchema = "clouddirectory:DeleteSchema",
    DeleteTypedLinkFacet = "clouddirectory:DeleteTypedLinkFacet",
    DetachFromIndex = "clouddirectory:DetachFromIndex",
    DetachObject = "clouddirectory:DetachObject",
    DetachPolicy = "clouddirectory:DetachPolicy",
    DetachTypedLink = "clouddirectory:DetachTypedLink",
    DisableDirectory = "clouddirectory:DisableDirectory",
    EnableDirectory = "clouddirectory:EnableDirectory",
    GetDirectory = "clouddirectory:GetDirectory",
    GetFacet = "clouddirectory:GetFacet",
    GetObjectInformation = "clouddirectory:GetObjectInformation",
    GetSchemaAsJson = "clouddirectory:GetSchemaAsJson",
    GetTypedLinkFacetInformation = "clouddirectory:GetTypedLinkFacetInformation",
    ListAppliedSchemaArns = "clouddirectory:ListAppliedSchemaArns",
    ListAttachedIndices = "clouddirectory:ListAttachedIndices",
    ListDevelopmentSchemaArns = "clouddirectory:ListDevelopmentSchemaArns",
    ListDirectories = "clouddirectory:ListDirectories",
    ListFacetAttributes = "clouddirectory:ListFacetAttributes",
    ListFacetNames = "clouddirectory:ListFacetNames",
    ListIncomingTypedLinks = "clouddirectory:ListIncomingTypedLinks",
    ListIndex = "clouddirectory:ListIndex",
    ListObjectAttributes = "clouddirectory:ListObjectAttributes",
    ListObjectChildren = "clouddirectory:ListObjectChildren",
    ListObjectParentPaths = "clouddirectory:ListObjectParentPaths",
    ListObjectParents = "clouddirectory:ListObjectParents",
    ListObjectPolicies = "clouddirectory:ListObjectPolicies",
    ListOutgoingTypedLinks = "clouddirectory:ListOutgoingTypedLinks",
    ListPolicyAttachments = "clouddirectory:ListPolicyAttachments",
    ListPublishedSchemaArns = "clouddirectory:ListPublishedSchemaArns",
    ListTagsForResource = "clouddirectory:ListTagsForResource",
    ListTypedLinkFacetAttributes = "clouddirectory:ListTypedLinkFacetAttributes",
    ListTypedLinkFacetNames = "clouddirectory:ListTypedLinkFacetNames",
    LookupPolicy = "clouddirectory:LookupPolicy",
    PublishSchema = "clouddirectory:PublishSchema",
    PutSchemaFromJson = "clouddirectory:PutSchemaFromJson",
    RemoveFacetFromObject = "clouddirectory:RemoveFacetFromObject",
    TagResource = "clouddirectory:TagResource",
    UntagResource = "clouddirectory:UntagResource",
    UpdateFacet = "clouddirectory:UpdateFacet",
    UpdateObjectAttributes = "clouddirectory:UpdateObjectAttributes",
    UpdateSchema = "clouddirectory:UpdateSchema",
    UpdateTypedLinkFacet = "clouddirectory:UpdateTypedLinkFacet"
}

/** Actions for Amazon CloudFront
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudfront.html
  */
export enum CloudFront {
    CreateCloudFrontOriginAccessIdentity = "cloudfront:CreateCloudFrontOriginAccessIdentity",
    CreateDistribution = "cloudfront:CreateDistribution",
    CreateDistributionWithTags = "cloudfront:CreateDistributionWithTags",
    CreateInvalidation = "cloudfront:CreateInvalidation",
    CreateStreamingDistribution = "cloudfront:CreateStreamingDistribution",
    CreateStreamingDistributionWithTags = "cloudfront:CreateStreamingDistributionWithTags",
    DeleteCloudFrontOriginAccessIdentity = "cloudfront:DeleteCloudFrontOriginAccessIdentity",
    DeleteDistribution = "cloudfront:DeleteDistribution",
    DeleteStreamingDistribution = "cloudfront:DeleteStreamingDistribution",
    GetCloudFrontOriginAccessIdentity = "cloudfront:GetCloudFrontOriginAccessIdentity",
    GetCloudFrontOriginAccessIdentityConfig = "cloudfront:GetCloudFrontOriginAccessIdentityConfig",
    GetDistribution = "cloudfront:GetDistribution",
    GetDistributionConfig = "cloudfront:GetDistributionConfig",
    GetInvalidation = "cloudfront:GetInvalidation",
    GetStreamingDistribution = "cloudfront:GetStreamingDistribution",
    GetStreamingDistributionConfig = "cloudfront:GetStreamingDistributionConfig",
    ListCloudFrontOriginAccessIdentities = "cloudfront:ListCloudFrontOriginAccessIdentities",
    ListDistributions = "cloudfront:ListDistributions",
    ListDistributionsByWebACLId = "cloudfront:ListDistributionsByWebACLId",
    ListInvalidations = "cloudfront:ListInvalidations",
    ListStreamingDistributions = "cloudfront:ListStreamingDistributions",
    ListTagsForResource = "cloudfront:ListTagsForResource",
    TagResource = "cloudfront:TagResource",
    UntagResource = "cloudfront:UntagResource",
    UpdateCloudFrontOriginAccessIdentity = "cloudfront:UpdateCloudFrontOriginAccessIdentity",
    UpdateDistribution = "cloudfront:UpdateDistribution",
    UpdateStreamingDistribution = "cloudfront:UpdateStreamingDistribution"
}

/** Actions for Amazon CloudSearch
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudsearch.html
  */
export enum CloudSearch {
    AddTags = "cloudsearch:AddTags",
    BuildSuggesters = "cloudsearch:BuildSuggesters",
    CreateDomain = "cloudsearch:CreateDomain",
    DefineAnalysisScheme = "cloudsearch:DefineAnalysisScheme",
    DefineExpression = "cloudsearch:DefineExpression",
    DefineIndexField = "cloudsearch:DefineIndexField",
    DefineSuggester = "cloudsearch:DefineSuggester",
    DeleteAnalysisScheme = "cloudsearch:DeleteAnalysisScheme",
    DeleteDomain = "cloudsearch:DeleteDomain",
    DeleteExpression = "cloudsearch:DeleteExpression",
    DeleteIndexField = "cloudsearch:DeleteIndexField",
    DeleteSuggester = "cloudsearch:DeleteSuggester",
    DescribeAnalysisSchemes = "cloudsearch:DescribeAnalysisSchemes",
    DescribeAvailabilityOptions = "cloudsearch:DescribeAvailabilityOptions",
    DescribeDomains = "cloudsearch:DescribeDomains",
    DescribeExpressions = "cloudsearch:DescribeExpressions",
    DescribeIndexFields = "cloudsearch:DescribeIndexFields",
    DescribeScalingParameters = "cloudsearch:DescribeScalingParameters",
    DescribeServiceAccessPolicies = "cloudsearch:DescribeServiceAccessPolicies",
    DescribeSuggesters = "cloudsearch:DescribeSuggesters",
    IndexDocuments = "cloudsearch:IndexDocuments",
    ListDomainNames = "cloudsearch:ListDomainNames",
    ListTags = "cloudsearch:ListTags",
    RemoveTags = "cloudsearch:RemoveTags",
    UpdateAvailabilityOptions = "cloudsearch:UpdateAvailabilityOptions",
    UpdateScalingParameters = "cloudsearch:UpdateScalingParameters",
    UpdateServiceAccessPolicies = "cloudsearch:UpdateServiceAccessPolicies",
    document = "cloudsearch:document",
    search = "cloudsearch:search",
    suggest = "cloudsearch:suggest"
}

/** Actions for Amazon CloudWatch
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html
  */
export enum CloudWatch {
    DeleteAlarms = "cloudwatch:DeleteAlarms",
    DeleteDashboards = "cloudwatch:DeleteDashboards",
    DescribeAlarmHistory = "cloudwatch:DescribeAlarmHistory",
    DescribeAlarms = "cloudwatch:DescribeAlarms",
    DescribeAlarmsForMetric = "cloudwatch:DescribeAlarmsForMetric",
    DisableAlarmActions = "cloudwatch:DisableAlarmActions",
    EnableAlarmActions = "cloudwatch:EnableAlarmActions",
    GetDashboard = "cloudwatch:GetDashboard",
    GetMetricData = "cloudwatch:GetMetricData",
    GetMetricStatistics = "cloudwatch:GetMetricStatistics",
    ListDashboards = "cloudwatch:ListDashboards",
    ListMetrics = "cloudwatch:ListMetrics",
    PutDashboard = "cloudwatch:PutDashboard",
    PutMetricAlarm = "cloudwatch:PutMetricAlarm",
    PutMetricData = "cloudwatch:PutMetricData",
    SetAlarmState = "cloudwatch:SetAlarmState"
}

/** Actions for Amazon CloudWatch Events
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchevents.html
  */
export enum Events {
    DeleteRule = "events:DeleteRule",
    DescribeRule = "events:DescribeRule",
    DisableRule = "events:DisableRule",
    EnableRule = "events:EnableRule",
    ListRuleNamesByTarget = "events:ListRuleNamesByTarget",
    ListRules = "events:ListRules",
    ListTargetsByRule = "events:ListTargetsByRule",
    PutEvents = "events:PutEvents",
    PutRule = "events:PutRule",
    PutTargets = "events:PutTargets",
    RemoveTargets = "events:RemoveTargets",
    TestEventPattern = "events:TestEventPattern"
}

/** Actions for Amazon CloudWatch Logs
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchlogs.html
  */
export enum Logs {
    AssociateKmsKey = "logs:AssociateKmsKey",
    CancelExportTask = "logs:CancelExportTask",
    CreateExportTask = "logs:CreateExportTask",
    CreateLogGroup = "logs:CreateLogGroup",
    CreateLogStream = "logs:CreateLogStream",
    DeleteDestination = "logs:DeleteDestination",
    DeleteLogGroup = "logs:DeleteLogGroup",
    DeleteLogStream = "logs:DeleteLogStream",
    DeleteMetricFilter = "logs:DeleteMetricFilter",
    DeleteResourcePolicy = "logs:DeleteResourcePolicy",
    DeleteRetentionPolicy = "logs:DeleteRetentionPolicy",
    DeleteSubscriptionFilter = "logs:DeleteSubscriptionFilter",
    DescribeDestinations = "logs:DescribeDestinations",
    DescribeExportTasks = "logs:DescribeExportTasks",
    DescribeLogGroups = "logs:DescribeLogGroups",
    DescribeLogStreams = "logs:DescribeLogStreams",
    DescribeMetricFilters = "logs:DescribeMetricFilters",
    DescribeResourcePolicies = "logs:DescribeResourcePolicies",
    DescribeSubscriptionFilters = "logs:DescribeSubscriptionFilters",
    DisassociateKmsKey = "logs:DisassociateKmsKey",
    FilterLogEvents = "logs:FilterLogEvents",
    GetLogEvents = "logs:GetLogEvents",
    ListTagsLogGroup = "logs:ListTagsLogGroup",
    PutDestination = "logs:PutDestination",
    PutDestinationPolicy = "logs:PutDestinationPolicy",
    PutLogEvents = "logs:PutLogEvents",
    PutMetricFilter = "logs:PutMetricFilter",
    PutResourcePolicy = "logs:PutResourcePolicy",
    PutRetentionPolicy = "logs:PutRetentionPolicy",
    PutSubscriptionFilter = "logs:PutSubscriptionFilter",
    TagLogGroup = "logs:TagLogGroup",
    TestMetricFilter = "logs:TestMetricFilter",
    UntagLogGroup = "logs:UntagLogGroup"
}

/** Actions for Amazon Cognito Identity
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitoidentity.html
  */
export enum CognitoIdentity {
    CreateIdentityPool = "cognito-identity:CreateIdentityPool",
    DeleteIdentities = "cognito-identity:DeleteIdentities",
    DeleteIdentityPool = "cognito-identity:DeleteIdentityPool",
    DescribeIdentity = "cognito-identity:DescribeIdentity",
    DescribeIdentityPool = "cognito-identity:DescribeIdentityPool",
    GetCredentialsForIdentity = "cognito-identity:GetCredentialsForIdentity",
    GetId = "cognito-identity:GetId",
    GetIdentityPoolRoles = "cognito-identity:GetIdentityPoolRoles",
    GetOpenIdToken = "cognito-identity:GetOpenIdToken",
    GetOpenIdTokenForDeveloperIdentity = "cognito-identity:GetOpenIdTokenForDeveloperIdentity",
    ListIdentities = "cognito-identity:ListIdentities",
    ListIdentityPools = "cognito-identity:ListIdentityPools",
    LookupDeveloperIdentity = "cognito-identity:LookupDeveloperIdentity",
    MergeDeveloperIdentities = "cognito-identity:MergeDeveloperIdentities",
    SetIdentityPoolRoles = "cognito-identity:SetIdentityPoolRoles",
    UnlinkDeveloperIdentity = "cognito-identity:UnlinkDeveloperIdentity",
    UnlinkIdentity = "cognito-identity:UnlinkIdentity",
    UpdateIdentityPool = "cognito-identity:UpdateIdentityPool"
}

/** Actions for Amazon Cognito Sync
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitosync.html
  */
export enum CognitoSync {
    BulkPublish = "cognito-sync:BulkPublish",
    DeleteDataset = "cognito-sync:DeleteDataset",
    DescribeDataset = "cognito-sync:DescribeDataset",
    DescribeIdentityPoolUsage = "cognito-sync:DescribeIdentityPoolUsage",
    DescribeIdentityUsage = "cognito-sync:DescribeIdentityUsage",
    GetBulkPublishDetails = "cognito-sync:GetBulkPublishDetails",
    GetCognitoEvents = "cognito-sync:GetCognitoEvents",
    GetIdentityPoolConfiguration = "cognito-sync:GetIdentityPoolConfiguration",
    ListDatasets = "cognito-sync:ListDatasets",
    ListIdentityPoolUsage = "cognito-sync:ListIdentityPoolUsage",
    ListRecords = "cognito-sync:ListRecords",
    QueryRecords = "cognito-sync:QueryRecords",
    RegisterDevice = "cognito-sync:RegisterDevice",
    SetCognitoEvents = "cognito-sync:SetCognitoEvents",
    SetDatasetConfiguration = "cognito-sync:SetDatasetConfiguration",
    SetIdentityPoolConfiguration = "cognito-sync:SetIdentityPoolConfiguration",
    SubscribeToDataset = "cognito-sync:SubscribeToDataset",
    UnsubscribeFromDataset = "cognito-sync:UnsubscribeFromDataset",
    UpdateRecords = "cognito-sync:UpdateRecords"
}

/** Actions for Amazon Cognito User Pools
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitouserpools.html
  */
export enum CognitoIDP {
    AddCustomAttributes = "cognito-idp:AddCustomAttributes",
    AdminAddUserToGroup = "cognito-idp:AdminAddUserToGroup",
    AdminConfirmSignUp = "cognito-idp:AdminConfirmSignUp",
    AdminCreateUser = "cognito-idp:AdminCreateUser",
    AdminDeleteUser = "cognito-idp:AdminDeleteUser",
    AdminDeleteUserAttributes = "cognito-idp:AdminDeleteUserAttributes",
    AdminDisableUser = "cognito-idp:AdminDisableUser",
    AdminEnableUser = "cognito-idp:AdminEnableUser",
    AdminForgetDevice = "cognito-idp:AdminForgetDevice",
    AdminGetDevice = "cognito-idp:AdminGetDevice",
    AdminGetUser = "cognito-idp:AdminGetUser",
    AdminInitiateAuth = "cognito-idp:AdminInitiateAuth",
    AdminListDevices = "cognito-idp:AdminListDevices",
    AdminListGroupsForUser = "cognito-idp:AdminListGroupsForUser",
    AdminListUserAuthEvents = "cognito-idp:AdminListUserAuthEvents",
    AdminRemoveUserFromGroup = "cognito-idp:AdminRemoveUserFromGroup",
    AdminResetUserPassword = "cognito-idp:AdminResetUserPassword",
    AdminRespondToAuthChallenge = "cognito-idp:AdminRespondToAuthChallenge",
    AdminSetUserMFAPreference = "cognito-idp:AdminSetUserMFAPreference",
    AdminSetUserSettings = "cognito-idp:AdminSetUserSettings",
    AdminUpdateAuthEventFeedback = "cognito-idp:AdminUpdateAuthEventFeedback",
    AdminUpdateDeviceStatus = "cognito-idp:AdminUpdateDeviceStatus",
    AdminUpdateUserAttributes = "cognito-idp:AdminUpdateUserAttributes",
    AdminUserGlobalSignOut = "cognito-idp:AdminUserGlobalSignOut",
    ChangePassword = "cognito-idp:ChangePassword",
    ConfirmDevice = "cognito-idp:ConfirmDevice",
    ConfirmForgotPassword = "cognito-idp:ConfirmForgotPassword",
    ConfirmSignUp = "cognito-idp:ConfirmSignUp",
    CreateGroup = "cognito-idp:CreateGroup",
    CreateUserImportJob = "cognito-idp:CreateUserImportJob",
    CreateUserPool = "cognito-idp:CreateUserPool",
    CreateUserPoolClient = "cognito-idp:CreateUserPoolClient",
    DeleteGroup = "cognito-idp:DeleteGroup",
    DeleteUser = "cognito-idp:DeleteUser",
    DeleteUserAttributes = "cognito-idp:DeleteUserAttributes",
    DeleteUserPool = "cognito-idp:DeleteUserPool",
    DeleteUserPoolClient = "cognito-idp:DeleteUserPoolClient",
    DescribeRiskConfiguration = "cognito-idp:DescribeRiskConfiguration",
    DescribeUserImportJob = "cognito-idp:DescribeUserImportJob",
    DescribeUserPool = "cognito-idp:DescribeUserPool",
    DescribeUserPoolClient = "cognito-idp:DescribeUserPoolClient",
    ForgetDevice = "cognito-idp:ForgetDevice",
    ForgotPassword = "cognito-idp:ForgotPassword",
    GetCSVHeader = "cognito-idp:GetCSVHeader",
    GetDevice = "cognito-idp:GetDevice",
    GetGroup = "cognito-idp:GetGroup",
    GetUser = "cognito-idp:GetUser",
    GetUserAttributeVerificationCode = "cognito-idp:GetUserAttributeVerificationCode",
    GetUserPoolMfaConfig = "cognito-idp:GetUserPoolMfaConfig",
    GlobalSignOut = "cognito-idp:GlobalSignOut",
    InitiateAuth = "cognito-idp:InitiateAuth",
    ListDevices = "cognito-idp:ListDevices",
    ListGroups = "cognito-idp:ListGroups",
    ListUserImportJobs = "cognito-idp:ListUserImportJobs",
    ListUserPoolClients = "cognito-idp:ListUserPoolClients",
    ListUsersInGroup = "cognito-idp:ListUsersInGroup",
    ResendConfirmationCode = "cognito-idp:ResendConfirmationCode",
    RespondToAuthChallenge = "cognito-idp:RespondToAuthChallenge",
    SetRiskConfiguration = "cognito-idp:SetRiskConfiguration",
    SetUserMFAPreference = "cognito-idp:SetUserMFAPreference",
    SetUserPoolMfaConfig = "cognito-idp:SetUserPoolMfaConfig",
    SetUserSettings = "cognito-idp:SetUserSettings",
    SignUp = "cognito-idp:SignUp",
    StartUserImportJob = "cognito-idp:StartUserImportJob",
    StopUserImportJob = "cognito-idp:StopUserImportJob",
    UpdateAuthEventFeedback = "cognito-idp:UpdateAuthEventFeedback",
    UpdateDeviceStatus = "cognito-idp:UpdateDeviceStatus",
    UpdateGroup = "cognito-idp:UpdateGroup",
    UpdateUserAttributes = "cognito-idp:UpdateUserAttributes",
    UpdateUserPool = "cognito-idp:UpdateUserPool",
    UpdateUserPoolClient = "cognito-idp:UpdateUserPoolClient",
    VerifyUserAttribute = "cognito-idp:VerifyUserAttribute"
}

/** Actions for Amazon Comprehend
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html
  */
export enum Comprehend {
    BatchDetectDominantLanguage = "comprehend:BatchDetectDominantLanguage",
    BatchDetectEntities = "comprehend:BatchDetectEntities",
    BatchDetectKeyPhrases = "comprehend:BatchDetectKeyPhrases",
    BatchDetectSentiment = "comprehend:BatchDetectSentiment",
    DescribeTopicsDetectionJob = "comprehend:DescribeTopicsDetectionJob",
    DetectDominantLanguage = "comprehend:DetectDominantLanguage",
    DetectEntities = "comprehend:DetectEntities",
    DetectKeyPhrases = "comprehend:DetectKeyPhrases",
    DetectSentiment = "comprehend:DetectSentiment",
    ListTopicsDetectionJobs = "comprehend:ListTopicsDetectionJobs",
    StartTopicsDetectionJob = "comprehend:StartTopicsDetectionJob"
}

/** Actions for Amazon DynamoDB
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodb.html
  */
export enum DynamoDB {
    BatchGetItem = "dynamodb:BatchGetItem",
    BatchWriteItem = "dynamodb:BatchWriteItem",
    CreateBackup = "dynamodb:CreateBackup",
    CreateTable = "dynamodb:CreateTable",
    DeleteBackup = "dynamodb:DeleteBackup",
    DeleteItem = "dynamodb:DeleteItem",
    DeleteTable = "dynamodb:DeleteTable",
    DescribeBackup = "dynamodb:DescribeBackup",
    DescribeContinuousBackups = "dynamodb:DescribeContinuousBackups",
    DescribeLimits = "dynamodb:DescribeLimits",
    DescribeReservedCapacity = "dynamodb:DescribeReservedCapacity",
    DescribeReservedCapacityOfferings = "dynamodb:DescribeReservedCapacityOfferings",
    DescribeStream = "dynamodb:DescribeStream",
    DescribeTable = "dynamodb:DescribeTable",
    DescribeTimeToLive = "dynamodb:DescribeTimeToLive",
    GetItem = "dynamodb:GetItem",
    GetRecords = "dynamodb:GetRecords",
    GetShardIterator = "dynamodb:GetShardIterator",
    ListBackups = "dynamodb:ListBackups",
    ListStreams = "dynamodb:ListStreams",
    ListTables = "dynamodb:ListTables",
    ListTagsOfResource = "dynamodb:ListTagsOfResource",
    PurchaseReservedCapacityOfferings = "dynamodb:PurchaseReservedCapacityOfferings",
    PutItem = "dynamodb:PutItem",
    Query = "dynamodb:Query",
    RestoreTableFromBackup = "dynamodb:RestoreTableFromBackup",
    RestoreTableToPointInTime = "dynamodb:RestoreTableToPointInTime",
    Scan = "dynamodb:Scan",
    TagResource = "dynamodb:TagResource",
    UntagResource = "dynamodb:UntagResource",
    UpdateContinuousBackups = "dynamodb:UpdateContinuousBackups",
    UpdateItem = "dynamodb:UpdateItem",
    UpdateTable = "dynamodb:UpdateTable",
    UpdateTimeToLive = "dynamodb:UpdateTimeToLive"
}

/** Actions for Amazon DynamoDB Accelerator (DAX)
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodbaccelerator(dax).html
  */
export enum DAX {
    BatchGetItem = "dax:BatchGetItem",
    BatchWriteItem = "dax:BatchWriteItem",
    CreateCluster = "dax:CreateCluster",
    CreateParameterGroup = "dax:CreateParameterGroup",
    CreateSubnetGroup = "dax:CreateSubnetGroup",
    DecreaseReplicationFactor = "dax:DecreaseReplicationFactor",
    DeleteCluster = "dax:DeleteCluster",
    DeleteItem = "dax:DeleteItem",
    DeleteParameterGroup = "dax:DeleteParameterGroup",
    DeleteSubnetGroup = "dax:DeleteSubnetGroup",
    DescribeClusters = "dax:DescribeClusters",
    DescribeDefaultParameters = "dax:DescribeDefaultParameters",
    DescribeEvents = "dax:DescribeEvents",
    DescribeParameterGroups = "dax:DescribeParameterGroups",
    DescribeParameters = "dax:DescribeParameters",
    DescribeSubnetGroups = "dax:DescribeSubnetGroups",
    DescribeTable = "dax:DescribeTable",
    GetItem = "dax:GetItem",
    IncreaseReplicationFactor = "dax:IncreaseReplicationFactor",
    ListTables = "dax:ListTables",
    ListTags = "dax:ListTags",
    PutItem = "dax:PutItem",
    Query = "dax:Query",
    RebootNode = "dax:RebootNode",
    Scan = "dax:Scan",
    TagResource = "dax:TagResource",
    UntagResource = "dax:UntagResource",
    UpdateCluster = "dax:UpdateCluster",
    UpdateItem = "dax:UpdateItem",
    UpdateParameterGroup = "dax:UpdateParameterGroup",
    UpdateSubnetGroup = "dax:UpdateSubnetGroup"
}

/** Actions for Amazon EC2
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html
  */
export enum EC2 {
    AcceptReservedInstancesExchangeQuote = "ec2:AcceptReservedInstancesExchangeQuote",
    AcceptVpcEndpointConnections = "ec2:AcceptVpcEndpointConnections",
    AcceptVpcPeeringConnection = "ec2:AcceptVpcPeeringConnection",
    AllocateAddress = "ec2:AllocateAddress",
    AllocateHosts = "ec2:AllocateHosts",
    AssignIpv6Addresses = "ec2:AssignIpv6Addresses",
    AssignPrivateIpAddresses = "ec2:AssignPrivateIpAddresses",
    AssociateAddress = "ec2:AssociateAddress",
    AssociateDhcpOptions = "ec2:AssociateDhcpOptions",
    AssociateIamInstanceProfile = "ec2:AssociateIamInstanceProfile",
    AssociateRouteTable = "ec2:AssociateRouteTable",
    AssociateSubnetCidrBlock = "ec2:AssociateSubnetCidrBlock",
    AssociateVpcCidrBlock = "ec2:AssociateVpcCidrBlock",
    AttachClassicLinkVpc = "ec2:AttachClassicLinkVpc",
    AttachInternetGateway = "ec2:AttachInternetGateway",
    AttachNetworkInterface = "ec2:AttachNetworkInterface",
    AttachVolume = "ec2:AttachVolume",
    AttachVpnGateway = "ec2:AttachVpnGateway",
    AuthorizeSecurityGroupEgress = "ec2:AuthorizeSecurityGroupEgress",
    AuthorizeSecurityGroupIngress = "ec2:AuthorizeSecurityGroupIngress",
    BundleInstance = "ec2:BundleInstance",
    CancelBundleTask = "ec2:CancelBundleTask",
    CancelConversionTask = "ec2:CancelConversionTask",
    CancelExportTask = "ec2:CancelExportTask",
    CancelImportTask = "ec2:CancelImportTask",
    CancelReservedInstancesListing = "ec2:CancelReservedInstancesListing",
    CancelSpotFleetRequests = "ec2:CancelSpotFleetRequests",
    CancelSpotInstanceRequests = "ec2:CancelSpotInstanceRequests",
    ConfirmProductInstance = "ec2:ConfirmProductInstance",
    CopyFpgaImage = "ec2:CopyFpgaImage",
    CopyImage = "ec2:CopyImage",
    CopySnapshot = "ec2:CopySnapshot",
    CreateCustomerGateway = "ec2:CreateCustomerGateway",
    CreateDefaultSubnet = "ec2:CreateDefaultSubnet",
    CreateDefaultVpc = "ec2:CreateDefaultVpc",
    CreateDhcpOptions = "ec2:CreateDhcpOptions",
    CreateEgressOnlyInternetGateway = "ec2:CreateEgressOnlyInternetGateway",
    CreateFlowLogs = "ec2:CreateFlowLogs",
    CreateFpgaImage = "ec2:CreateFpgaImage",
    CreateImage = "ec2:CreateImage",
    CreateInstanceExportTask = "ec2:CreateInstanceExportTask",
    CreateInternetGateway = "ec2:CreateInternetGateway",
    CreateKeyPair = "ec2:CreateKeyPair",
    CreateLaunchTemplate = "ec2:CreateLaunchTemplate",
    CreateLaunchTemplateVersion = "ec2:CreateLaunchTemplateVersion",
    CreateNatGateway = "ec2:CreateNatGateway",
    CreateNetworkAcl = "ec2:CreateNetworkAcl",
    CreateNetworkAclEntry = "ec2:CreateNetworkAclEntry",
    CreateNetworkInterface = "ec2:CreateNetworkInterface",
    CreateNetworkInterfacePermission = "ec2:CreateNetworkInterfacePermission",
    CreatePlacementGroup = "ec2:CreatePlacementGroup",
    CreateReservedInstancesListing = "ec2:CreateReservedInstancesListing",
    CreateRoute = "ec2:CreateRoute",
    CreateRouteTable = "ec2:CreateRouteTable",
    CreateSecurityGroup = "ec2:CreateSecurityGroup",
    CreateSnapshot = "ec2:CreateSnapshot",
    CreateSpotDatafeedSubscription = "ec2:CreateSpotDatafeedSubscription",
    CreateSubnet = "ec2:CreateSubnet",
    CreateTags = "ec2:CreateTags",
    CreateVolume = "ec2:CreateVolume",
    CreateVpc = "ec2:CreateVpc",
    CreateVpcEndpoint = "ec2:CreateVpcEndpoint",
    CreateVpcEndpointConnectionNotification = "ec2:CreateVpcEndpointConnectionNotification",
    CreateVpcEndpointServiceConfiguration = "ec2:CreateVpcEndpointServiceConfiguration",
    CreateVpcPeeringConnection = "ec2:CreateVpcPeeringConnection",
    CreateVpnConnection = "ec2:CreateVpnConnection",
    CreateVpnConnectionRoute = "ec2:CreateVpnConnectionRoute",
    CreateVpnGateway = "ec2:CreateVpnGateway",
    DeleteCustomerGateway = "ec2:DeleteCustomerGateway",
    DeleteDhcpOptions = "ec2:DeleteDhcpOptions",
    DeleteEgressOnlyInternetGateway = "ec2:DeleteEgressOnlyInternetGateway",
    DeleteFlowLogs = "ec2:DeleteFlowLogs",
    DeleteFpgaImage = "ec2:DeleteFpgaImage",
    DeleteInternetGateway = "ec2:DeleteInternetGateway",
    DeleteKeyPair = "ec2:DeleteKeyPair",
    DeleteLaunchTemplate = "ec2:DeleteLaunchTemplate",
    DeleteLaunchTemplateVersions = "ec2:DeleteLaunchTemplateVersions",
    DeleteNatGateway = "ec2:DeleteNatGateway",
    DeleteNetworkAcl = "ec2:DeleteNetworkAcl",
    DeleteNetworkAclEntry = "ec2:DeleteNetworkAclEntry",
    DeleteNetworkInterface = "ec2:DeleteNetworkInterface",
    DeleteNetworkInterfacePermission = "ec2:DeleteNetworkInterfacePermission",
    DeletePlacementGroup = "ec2:DeletePlacementGroup",
    DeleteRoute = "ec2:DeleteRoute",
    DeleteRouteTable = "ec2:DeleteRouteTable",
    DeleteSecurityGroup = "ec2:DeleteSecurityGroup",
    DeleteSnapshot = "ec2:DeleteSnapshot",
    DeleteSpotDatafeedSubscription = "ec2:DeleteSpotDatafeedSubscription",
    DeleteSubnet = "ec2:DeleteSubnet",
    DeleteTags = "ec2:DeleteTags",
    DeleteVolume = "ec2:DeleteVolume",
    DeleteVpc = "ec2:DeleteVpc",
    DeleteVpcEndpointConnectionNotifications = "ec2:DeleteVpcEndpointConnectionNotifications",
    DeleteVpcEndpointServiceConfigurations = "ec2:DeleteVpcEndpointServiceConfigurations",
    DeleteVpcEndpoints = "ec2:DeleteVpcEndpoints",
    DeleteVpcPeeringConnection = "ec2:DeleteVpcPeeringConnection",
    DeleteVpnConnection = "ec2:DeleteVpnConnection",
    DeleteVpnConnectionRoute = "ec2:DeleteVpnConnectionRoute",
    DeleteVpnGateway = "ec2:DeleteVpnGateway",
    DeregisterImage = "ec2:DeregisterImage",
    DescribeAccountAttributes = "ec2:DescribeAccountAttributes",
    DescribeAddresses = "ec2:DescribeAddresses",
    DescribeAvailabilityZones = "ec2:DescribeAvailabilityZones",
    DescribeBundleTasks = "ec2:DescribeBundleTasks",
    DescribeClassicLinkInstances = "ec2:DescribeClassicLinkInstances",
    DescribeConversionTasks = "ec2:DescribeConversionTasks",
    DescribeCustomerGateways = "ec2:DescribeCustomerGateways",
    DescribeDhcpOptions = "ec2:DescribeDhcpOptions",
    DescribeEgressOnlyInternetGateways = "ec2:DescribeEgressOnlyInternetGateways",
    DescribeElasticGpus = "ec2:DescribeElasticGpus",
    DescribeExportTasks = "ec2:DescribeExportTasks",
    DescribeFlowLogs = "ec2:DescribeFlowLogs",
    DescribeFpgaImageAttribute = "ec2:DescribeFpgaImageAttribute",
    DescribeFpgaImages = "ec2:DescribeFpgaImages",
    DescribeHostReservationOfferings = "ec2:DescribeHostReservationOfferings",
    DescribeHostReservations = "ec2:DescribeHostReservations",
    DescribeHosts = "ec2:DescribeHosts",
    DescribeIamInstanceProfileAssociations = "ec2:DescribeIamInstanceProfileAssociations",
    DescribeIdFormat = "ec2:DescribeIdFormat",
    DescribeIdentityIdFormat = "ec2:DescribeIdentityIdFormat",
    DescribeImageAttribute = "ec2:DescribeImageAttribute",
    DescribeImages = "ec2:DescribeImages",
    DescribeImportImageTasks = "ec2:DescribeImportImageTasks",
    DescribeImportSnapshotTasks = "ec2:DescribeImportSnapshotTasks",
    DescribeInstanceAttribute = "ec2:DescribeInstanceAttribute",
    DescribeInstanceCreditSpecifications = "ec2:DescribeInstanceCreditSpecifications",
    DescribeInstanceStatus = "ec2:DescribeInstanceStatus",
    DescribeInstances = "ec2:DescribeInstances",
    DescribeInternetGateways = "ec2:DescribeInternetGateways",
    DescribeKeyPairs = "ec2:DescribeKeyPairs",
    DescribeLaunchTemplateVersions = "ec2:DescribeLaunchTemplateVersions",
    DescribeLaunchTemplates = "ec2:DescribeLaunchTemplates",
    DescribeMovingAddresses = "ec2:DescribeMovingAddresses",
    DescribeNatGateways = "ec2:DescribeNatGateways",
    DescribeNetworkAcls = "ec2:DescribeNetworkAcls",
    DescribeNetworkInterfaceAttribute = "ec2:DescribeNetworkInterfaceAttribute",
    DescribeNetworkInterfacePermissions = "ec2:DescribeNetworkInterfacePermissions",
    DescribeNetworkInterfaces = "ec2:DescribeNetworkInterfaces",
    DescribePlacementGroups = "ec2:DescribePlacementGroups",
    DescribePrefixLists = "ec2:DescribePrefixLists",
    DescribeRegions = "ec2:DescribeRegions",
    DescribeReservedInstances = "ec2:DescribeReservedInstances",
    DescribeReservedInstancesListings = "ec2:DescribeReservedInstancesListings",
    DescribeReservedInstancesModifications = "ec2:DescribeReservedInstancesModifications",
    DescribeReservedInstancesOfferings = "ec2:DescribeReservedInstancesOfferings",
    DescribeRouteTables = "ec2:DescribeRouteTables",
    DescribeScheduledInstanceAvailability = "ec2:DescribeScheduledInstanceAvailability",
    DescribeScheduledInstances = "ec2:DescribeScheduledInstances",
    DescribeSecurityGroupReferences = "ec2:DescribeSecurityGroupReferences",
    DescribeSecurityGroups = "ec2:DescribeSecurityGroups",
    DescribeSnapshotAttribute = "ec2:DescribeSnapshotAttribute",
    DescribeSnapshots = "ec2:DescribeSnapshots",
    DescribeSpotDatafeedSubscription = "ec2:DescribeSpotDatafeedSubscription",
    DescribeSpotFleetInstances = "ec2:DescribeSpotFleetInstances",
    DescribeSpotFleetRequestHistory = "ec2:DescribeSpotFleetRequestHistory",
    DescribeSpotFleetRequests = "ec2:DescribeSpotFleetRequests",
    DescribeSpotInstanceRequests = "ec2:DescribeSpotInstanceRequests",
    DescribeSpotPriceHistory = "ec2:DescribeSpotPriceHistory",
    DescribeStaleSecurityGroups = "ec2:DescribeStaleSecurityGroups",
    DescribeSubnets = "ec2:DescribeSubnets",
    DescribeTags = "ec2:DescribeTags",
    DescribeVolumeAttribute = "ec2:DescribeVolumeAttribute",
    DescribeVolumeStatus = "ec2:DescribeVolumeStatus",
    DescribeVolumes = "ec2:DescribeVolumes",
    DescribeVolumesModifications = "ec2:DescribeVolumesModifications",
    DescribeVpcAttribute = "ec2:DescribeVpcAttribute",
    DescribeVpcClassicLink = "ec2:DescribeVpcClassicLink",
    DescribeVpcClassicLinkDnsSupport = "ec2:DescribeVpcClassicLinkDnsSupport",
    DescribeVpcEndpointConnectionNotifications = "ec2:DescribeVpcEndpointConnectionNotifications",
    DescribeVpcEndpointConnections = "ec2:DescribeVpcEndpointConnections",
    DescribeVpcEndpointServiceConfigurations = "ec2:DescribeVpcEndpointServiceConfigurations",
    DescribeVpcEndpointServicePermissions = "ec2:DescribeVpcEndpointServicePermissions",
    DescribeVpcEndpointServices = "ec2:DescribeVpcEndpointServices",
    DescribeVpcEndpoints = "ec2:DescribeVpcEndpoints",
    DescribeVpcPeeringConnections = "ec2:DescribeVpcPeeringConnections",
    DescribeVpcs = "ec2:DescribeVpcs",
    DescribeVpnConnections = "ec2:DescribeVpnConnections",
    DescribeVpnGateways = "ec2:DescribeVpnGateways",
    DetachClassicLinkVpc = "ec2:DetachClassicLinkVpc",
    DetachInternetGateway = "ec2:DetachInternetGateway",
    DetachNetworkInterface = "ec2:DetachNetworkInterface",
    DetachVolume = "ec2:DetachVolume",
    DetachVpnGateway = "ec2:DetachVpnGateway",
    DisableVgwRoutePropagation = "ec2:DisableVgwRoutePropagation",
    DisableVpcClassicLink = "ec2:DisableVpcClassicLink",
    DisableVpcClassicLinkDnsSupport = "ec2:DisableVpcClassicLinkDnsSupport",
    DisassociateAddress = "ec2:DisassociateAddress",
    DisassociateIamInstanceProfile = "ec2:DisassociateIamInstanceProfile",
    DisassociateRouteTable = "ec2:DisassociateRouteTable",
    DisassociateSubnetCidrBlock = "ec2:DisassociateSubnetCidrBlock",
    DisassociateVpcCidrBlock = "ec2:DisassociateVpcCidrBlock",
    EnableVgwRoutePropagation = "ec2:EnableVgwRoutePropagation",
    EnableVolumeIO = "ec2:EnableVolumeIO",
    EnableVpcClassicLink = "ec2:EnableVpcClassicLink",
    EnableVpcClassicLinkDnsSupport = "ec2:EnableVpcClassicLinkDnsSupport",
    GetConsoleOutput = "ec2:GetConsoleOutput",
    GetConsoleScreenshot = "ec2:GetConsoleScreenshot",
    GetHostReservationPurchasePreview = "ec2:GetHostReservationPurchasePreview",
    GetLaunchTemplateData = "ec2:GetLaunchTemplateData",
    GetPasswordData = "ec2:GetPasswordData",
    GetReservedInstancesExchangeQuote = "ec2:GetReservedInstancesExchangeQuote",
    ImportImage = "ec2:ImportImage",
    ImportInstance = "ec2:ImportInstance",
    ImportKeyPair = "ec2:ImportKeyPair",
    ImportSnapshot = "ec2:ImportSnapshot",
    ImportVolume = "ec2:ImportVolume",
    ModifyFpgaImageAttribute = "ec2:ModifyFpgaImageAttribute",
    ModifyHosts = "ec2:ModifyHosts",
    ModifyIdFormat = "ec2:ModifyIdFormat",
    ModifyIdentityIdFormat = "ec2:ModifyIdentityIdFormat",
    ModifyImageAttribute = "ec2:ModifyImageAttribute",
    ModifyInstanceAttribute = "ec2:ModifyInstanceAttribute",
    ModifyInstanceCreditSpecification = "ec2:ModifyInstanceCreditSpecification",
    ModifyInstancePlacement = "ec2:ModifyInstancePlacement",
    ModifyLaunchTemplate = "ec2:ModifyLaunchTemplate",
    ModifyNetworkInterfaceAttribute = "ec2:ModifyNetworkInterfaceAttribute",
    ModifyReservedInstances = "ec2:ModifyReservedInstances",
    ModifySnapshotAttribute = "ec2:ModifySnapshotAttribute",
    ModifySpotFleetRequest = "ec2:ModifySpotFleetRequest",
    ModifySubnetAttribute = "ec2:ModifySubnetAttribute",
    ModifyVolume = "ec2:ModifyVolume",
    ModifyVolumeAttribute = "ec2:ModifyVolumeAttribute",
    ModifyVpcAttribute = "ec2:ModifyVpcAttribute",
    ModifyVpcEndpoint = "ec2:ModifyVpcEndpoint",
    ModifyVpcEndpointConnectionNotification = "ec2:ModifyVpcEndpointConnectionNotification",
    ModifyVpcEndpointServiceConfiguration = "ec2:ModifyVpcEndpointServiceConfiguration",
    ModifyVpcEndpointServicePermissions = "ec2:ModifyVpcEndpointServicePermissions",
    ModifyVpcPeeringConnectionOptions = "ec2:ModifyVpcPeeringConnectionOptions",
    ModifyVpcTenancy = "ec2:ModifyVpcTenancy",
    MonitorInstances = "ec2:MonitorInstances",
    MoveAddressToVpc = "ec2:MoveAddressToVpc",
    PurchaseHostReservation = "ec2:PurchaseHostReservation",
    PurchaseReservedInstancesOffering = "ec2:PurchaseReservedInstancesOffering",
    PurchaseScheduledInstances = "ec2:PurchaseScheduledInstances",
    RebootInstances = "ec2:RebootInstances",
    RegisterImage = "ec2:RegisterImage",
    RejectVpcEndpointConnections = "ec2:RejectVpcEndpointConnections",
    RejectVpcPeeringConnection = "ec2:RejectVpcPeeringConnection",
    ReleaseAddress = "ec2:ReleaseAddress",
    ReleaseHosts = "ec2:ReleaseHosts",
    ReplaceIamInstanceProfileAssociation = "ec2:ReplaceIamInstanceProfileAssociation",
    ReplaceNetworkAclAssociation = "ec2:ReplaceNetworkAclAssociation",
    ReplaceNetworkAclEntry = "ec2:ReplaceNetworkAclEntry",
    ReplaceRoute = "ec2:ReplaceRoute",
    ReplaceRouteTableAssociation = "ec2:ReplaceRouteTableAssociation",
    ReportInstanceStatus = "ec2:ReportInstanceStatus",
    RequestSpotFleet = "ec2:RequestSpotFleet",
    RequestSpotInstances = "ec2:RequestSpotInstances",
    ResetFpgaImageAttribute = "ec2:ResetFpgaImageAttribute",
    ResetImageAttribute = "ec2:ResetImageAttribute",
    ResetInstanceAttribute = "ec2:ResetInstanceAttribute",
    ResetNetworkInterfaceAttribute = "ec2:ResetNetworkInterfaceAttribute",
    ResetSnapshotAttribute = "ec2:ResetSnapshotAttribute",
    RestoreAddressToClassic = "ec2:RestoreAddressToClassic",
    RevokeSecurityGroupEgress = "ec2:RevokeSecurityGroupEgress",
    RevokeSecurityGroupIngress = "ec2:RevokeSecurityGroupIngress",
    RunInstances = "ec2:RunInstances",
    RunScheduledInstances = "ec2:RunScheduledInstances",
    StartInstances = "ec2:StartInstances",
    StopInstances = "ec2:StopInstances",
    TerminateInstances = "ec2:TerminateInstances",
    UnassignIpv6Addresses = "ec2:UnassignIpv6Addresses",
    UnassignPrivateIpAddresses = "ec2:UnassignPrivateIpAddresses",
    UnmonitorInstances = "ec2:UnmonitorInstances",
    UpdateSecurityGroupRuleDescriptionsEgress = "ec2:UpdateSecurityGroupRuleDescriptionsEgress",
    UpdateSecurityGroupRuleDescriptionsIngress = "ec2:UpdateSecurityGroupRuleDescriptionsIngress"
}

/** Actions for Amazon EC2 Container Registry
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2containerregistry.html
  */
export enum ECR {
    BatchCheckLayerAvailability = "ecr:BatchCheckLayerAvailability",
    BatchDeleteImage = "ecr:BatchDeleteImage",
    BatchGetImage = "ecr:BatchGetImage",
    CompleteLayerUpload = "ecr:CompleteLayerUpload",
    CreateRepository = "ecr:CreateRepository",
    DeleteRepository = "ecr:DeleteRepository",
    DeleteRepositoryPolicy = "ecr:DeleteRepositoryPolicy",
    DescribeImages = "ecr:DescribeImages",
    DescribeRepositories = "ecr:DescribeRepositories",
    GetAuthorizationToken = "ecr:GetAuthorizationToken",
    GetDownloadUrlForLayer = "ecr:GetDownloadUrlForLayer",
    GetRepositoryPolicy = "ecr:GetRepositoryPolicy",
    InitiateLayerUpload = "ecr:InitiateLayerUpload",
    ListImages = "ecr:ListImages",
    PutImage = "ecr:PutImage",
    SetRepositoryPolicy = "ecr:SetRepositoryPolicy",
    UploadLayerPart = "ecr:UploadLayerPart"
}

/** Actions for Amazon EC2 Container Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2containerservice.html
  */
export enum ECS {
    CreateCluster = "ecs:CreateCluster",
    CreateService = "ecs:CreateService",
    DeleteCluster = "ecs:DeleteCluster",
    DeleteService = "ecs:DeleteService",
    DeregisterContainerInstance = "ecs:DeregisterContainerInstance",
    DeregisterTaskDefinition = "ecs:DeregisterTaskDefinition",
    DescribeClusters = "ecs:DescribeClusters",
    DescribeContainerInstances = "ecs:DescribeContainerInstances",
    DescribeServices = "ecs:DescribeServices",
    DescribeTaskDefinition = "ecs:DescribeTaskDefinition",
    DescribeTasks = "ecs:DescribeTasks",
    DiscoverPollEndpoint = "ecs:DiscoverPollEndpoint",
    ListClusters = "ecs:ListClusters",
    ListContainerInstances = "ecs:ListContainerInstances",
    ListServices = "ecs:ListServices",
    ListTaskDefinitionFamilies = "ecs:ListTaskDefinitionFamilies",
    ListTaskDefinitions = "ecs:ListTaskDefinitions",
    ListTasks = "ecs:ListTasks",
    Poll = "ecs:Poll",
    RegisterContainerInstance = "ecs:RegisterContainerInstance",
    RegisterTaskDefinition = "ecs:RegisterTaskDefinition",
    RunTask = "ecs:RunTask",
    StartTask = "ecs:StartTask",
    StartTelemetrySession = "ecs:StartTelemetrySession",
    StopTask = "ecs:StopTask",
    SubmitContainerStateChange = "ecs:SubmitContainerStateChange",
    SubmitTaskStateChange = "ecs:SubmitTaskStateChange",
    UpdateContainerAgent = "ecs:UpdateContainerAgent",
    UpdateContainerInstancesState = "ecs:UpdateContainerInstancesState",
    UpdateService = "ecs:UpdateService"
}

/** Actions for Amazon ElastiCache
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticache.html
  */
export enum ElastiCache {
    AddTagsToResource = "elasticache:AddTagsToResource",
    AuthorizeCacheSecurityGroupIngress = "elasticache:AuthorizeCacheSecurityGroupIngress",
    CopySnapshot = "elasticache:CopySnapshot",
    CreateCacheCluster = "elasticache:CreateCacheCluster",
    CreateCacheParameterGroup = "elasticache:CreateCacheParameterGroup",
    CreateCacheSecurityGroup = "elasticache:CreateCacheSecurityGroup",
    CreateCacheSubnetGroup = "elasticache:CreateCacheSubnetGroup",
    CreateReplicationGroup = "elasticache:CreateReplicationGroup",
    CreateSnapshot = "elasticache:CreateSnapshot",
    DeleteCacheCluster = "elasticache:DeleteCacheCluster",
    DeleteCacheParameterGroup = "elasticache:DeleteCacheParameterGroup",
    DeleteCacheSecurityGroup = "elasticache:DeleteCacheSecurityGroup",
    DeleteCacheSubnetGroup = "elasticache:DeleteCacheSubnetGroup",
    DeleteReplicationGroup = "elasticache:DeleteReplicationGroup",
    DeleteSnapshot = "elasticache:DeleteSnapshot",
    DescribeCacheClusters = "elasticache:DescribeCacheClusters",
    DescribeCacheEngineVersions = "elasticache:DescribeCacheEngineVersions",
    DescribeCacheParameterGroups = "elasticache:DescribeCacheParameterGroups",
    DescribeCacheParameters = "elasticache:DescribeCacheParameters",
    DescribeCacheSecurityGroups = "elasticache:DescribeCacheSecurityGroups",
    DescribeCacheSubnetGroups = "elasticache:DescribeCacheSubnetGroups",
    DescribeEngineDefaultParameters = "elasticache:DescribeEngineDefaultParameters",
    DescribeEvents = "elasticache:DescribeEvents",
    DescribeReplicationGroups = "elasticache:DescribeReplicationGroups",
    DescribeReservedCacheNodes = "elasticache:DescribeReservedCacheNodes",
    DescribeReservedCacheNodesOfferings = "elasticache:DescribeReservedCacheNodesOfferings",
    DescribeSnapshots = "elasticache:DescribeSnapshots",
    ListAllowedNodeTypeModifications = "elasticache:ListAllowedNodeTypeModifications",
    ListTagsForResource = "elasticache:ListTagsForResource",
    ModifyCacheCluster = "elasticache:ModifyCacheCluster",
    ModifyCacheParameterGroup = "elasticache:ModifyCacheParameterGroup",
    ModifyCacheSubnetGroup = "elasticache:ModifyCacheSubnetGroup",
    ModifyReplicationGroup = "elasticache:ModifyReplicationGroup",
    PurchaseReservedCacheNodesOffering = "elasticache:PurchaseReservedCacheNodesOffering",
    RebootCacheCluster = "elasticache:RebootCacheCluster",
    RemoveTagsFromResource = "elasticache:RemoveTagsFromResource",
    ResetCacheParameterGroup = "elasticache:ResetCacheParameterGroup",
    RevokeCacheSecurityGroupIngress = "elasticache:RevokeCacheSecurityGroupIngress"
}

/** Actions for Amazon Elastic File System
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticfilesystem.html
  */
export enum ElasticFileSystem {
    CreateFileSystem = "elasticfilesystem:CreateFileSystem",
    CreateMountTarget = "elasticfilesystem:CreateMountTarget",
    CreateTags = "elasticfilesystem:CreateTags",
    DeleteFileSystem = "elasticfilesystem:DeleteFileSystem",
    DeleteMountTarget = "elasticfilesystem:DeleteMountTarget",
    DeleteTags = "elasticfilesystem:DeleteTags",
    DescribeFileSystems = "elasticfilesystem:DescribeFileSystems",
    DescribeMountTargetSecurityGroups = "elasticfilesystem:DescribeMountTargetSecurityGroups",
    DescribeMountTargets = "elasticfilesystem:DescribeMountTargets",
    DescribeTags = "elasticfilesystem:DescribeTags",
    ModifyMountTargetSecurityGroups = "elasticfilesystem:ModifyMountTargetSecurityGroups"
}

/** Actions for Amazon Elastic MapReduce
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticmapreduce.html
  */
export enum ElasticMapReduce {
    AddInstanceGroups = "elasticmapreduce:AddInstanceGroups",
    AddJobFlowSteps = "elasticmapreduce:AddJobFlowSteps",
    AddTags = "elasticmapreduce:AddTags",
    CancelSteps = "elasticmapreduce:CancelSteps",
    CreateSecurityConfiguration = "elasticmapreduce:CreateSecurityConfiguration",
    DeleteSecurityConfiguration = "elasticmapreduce:DeleteSecurityConfiguration",
    DescribeCluster = "elasticmapreduce:DescribeCluster",
    DescribeJobFlows = "elasticmapreduce:DescribeJobFlows",
    DescribeSecurityConfiguration = "elasticmapreduce:DescribeSecurityConfiguration",
    DescribeStep = "elasticmapreduce:DescribeStep",
    ListBootstrapActions = "elasticmapreduce:ListBootstrapActions",
    ListClusters = "elasticmapreduce:ListClusters",
    ListInstanceGroups = "elasticmapreduce:ListInstanceGroups",
    ListInstances = "elasticmapreduce:ListInstances",
    ListSecurityConfigurations = "elasticmapreduce:ListSecurityConfigurations",
    ListSteps = "elasticmapreduce:ListSteps",
    ModifyInstanceGroups = "elasticmapreduce:ModifyInstanceGroups",
    PutAutoScalingPolicy = "elasticmapreduce:PutAutoScalingPolicy",
    RemoveAutoScalingPolicy = "elasticmapreduce:RemoveAutoScalingPolicy",
    RemoveTags = "elasticmapreduce:RemoveTags",
    RunJobFlow = "elasticmapreduce:RunJobFlow",
    SetTerminationProtection = "elasticmapreduce:SetTerminationProtection",
    SetVisibleToAllUsers = "elasticmapreduce:SetVisibleToAllUsers",
    TerminateJobFlows = "elasticmapreduce:TerminateJobFlows",
    ViewEventsFromAllClustersInConsole = "elasticmapreduce:ViewEventsFromAllClustersInConsole"
}

/** Actions for Amazon Elastic Transcoder
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelastictranscoder.html
  */
export enum ElasticTranscoder {
    CancelJob = "elastictranscoder:CancelJob",
    CreateJob = "elastictranscoder:CreateJob",
    CreatePipeline = "elastictranscoder:CreatePipeline",
    CreatePreset = "elastictranscoder:CreatePreset",
    DeletePipeline = "elastictranscoder:DeletePipeline",
    DeletePreset = "elastictranscoder:DeletePreset",
    ListJobsByPipeline = "elastictranscoder:ListJobsByPipeline",
    ListJobsByStatus = "elastictranscoder:ListJobsByStatus",
    ListPipelines = "elastictranscoder:ListPipelines",
    ListPresets = "elastictranscoder:ListPresets",
    ReadJob = "elastictranscoder:ReadJob",
    ReadPipeline = "elastictranscoder:ReadPipeline",
    ReadPreset = "elastictranscoder:ReadPreset",
    TestRole = "elastictranscoder:TestRole",
    UpdatePipeline = "elastictranscoder:UpdatePipeline",
    UpdatePipelineNotifications = "elastictranscoder:UpdatePipelineNotifications",
    UpdatePipelineStatus = "elastictranscoder:UpdatePipelineStatus"
}

/** Actions for Amazon Elasticsearch Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticsearchservice.html
  */
export enum ES {
    AddTags = "es:AddTags",
    CreateElasticsearchDomain = "es:CreateElasticsearchDomain",
    DeleteElasticsearchDomain = "es:DeleteElasticsearchDomain",
    DescribeElasticsearchDomain = "es:DescribeElasticsearchDomain",
    DescribeElasticsearchDomainConfig = "es:DescribeElasticsearchDomainConfig",
    DescribeElasticsearchDomains = "es:DescribeElasticsearchDomains",
    ESHttpDelete = "es:ESHttpDelete",
    ESHttpGet = "es:ESHttpGet",
    ESHttpHead = "es:ESHttpHead",
    ESHttpPost = "es:ESHttpPost",
    ESHttpPut = "es:ESHttpPut",
    ListDomainNames = "es:ListDomainNames",
    ListTags = "es:ListTags",
    RemoveTags = "es:RemoveTags",
    UpdateElasticsearchDomainConfig = "es:UpdateElasticsearchDomainConfig"
}

/** Actions for Amazon FreeRTOS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfreertos.html
  */
export enum FreeRTOS {
    CreateSoftwareConfiguration = "freertos:CreateSoftwareConfiguration",
    DeleteSoftwareConfiguration = "freertos:DeleteSoftwareConfiguration",
    DescribeHardwarePlatform = "freertos:DescribeHardwarePlatform",
    DescribeSoftwareConfiguration = "freertos:DescribeSoftwareConfiguration",
    GetSoftwareURL = "freertos:GetSoftwareURL",
    GetSoftwareURLForConfiguration = "freertos:GetSoftwareURLForConfiguration",
    ListFreeRTOSVersions = "freertos:ListFreeRTOSVersions",
    ListHardwarePlatforms = "freertos:ListHardwarePlatforms",
    ListHardwareVendors = "freertos:ListHardwareVendors",
    ListSoftwareConfigurations = "freertos:ListSoftwareConfigurations",
    UpdateSoftwareConfiguration = "freertos:UpdateSoftwareConfiguration"
}

/** Actions for Amazon GameLift
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazongamelift.html
  */
export enum GameLift {
    CreateAlias = "gamelift:CreateAlias",
    CreateBuild = "gamelift:CreateBuild",
    CreateFleet = "gamelift:CreateFleet",
    CreateGameSession = "gamelift:CreateGameSession",
    CreatePlayerSession = "gamelift:CreatePlayerSession",
    CreatePlayerSessions = "gamelift:CreatePlayerSessions",
    DeleteAlias = "gamelift:DeleteAlias",
    DeleteBuild = "gamelift:DeleteBuild",
    DeleteFleet = "gamelift:DeleteFleet",
    DeleteScalingPolicy = "gamelift:DeleteScalingPolicy",
    DescribeAlias = "gamelift:DescribeAlias",
    DescribeBuild = "gamelift:DescribeBuild",
    DescribeEC2InstanceLimits = "gamelift:DescribeEC2InstanceLimits",
    DescribeFleetAttributes = "gamelift:DescribeFleetAttributes",
    DescribeFleetCapacity = "gamelift:DescribeFleetCapacity",
    DescribeFleetEvents = "gamelift:DescribeFleetEvents",
    DescribeFleetPortSettings = "gamelift:DescribeFleetPortSettings",
    DescribeFleetUtilization = "gamelift:DescribeFleetUtilization",
    DescribeGameSessionDetails = "gamelift:DescribeGameSessionDetails",
    DescribeGameSessions = "gamelift:DescribeGameSessions",
    DescribeInstances = "gamelift:DescribeInstances",
    DescribePlayerSessions = "gamelift:DescribePlayerSessions",
    DescribeRuntimeConfiguration = "gamelift:DescribeRuntimeConfiguration",
    DescribeScalingPolicies = "gamelift:DescribeScalingPolicies",
    GetGameSessionLogUrl = "gamelift:GetGameSessionLogUrl",
    GetInstanceAccess = "gamelift:GetInstanceAccess",
    ListAliases = "gamelift:ListAliases",
    ListBuilds = "gamelift:ListBuilds",
    ListFleets = "gamelift:ListFleets",
    PutScalingPolicy = "gamelift:PutScalingPolicy",
    RequestUploadCredentials = "gamelift:RequestUploadCredentials",
    ResolveAlias = "gamelift:ResolveAlias",
    SearchGameSessions = "gamelift:SearchGameSessions",
    UpdateAlias = "gamelift:UpdateAlias",
    UpdateBuild = "gamelift:UpdateBuild",
    UpdateFleetAttributes = "gamelift:UpdateFleetAttributes",
    UpdateFleetCapacity = "gamelift:UpdateFleetCapacity",
    UpdateFleetPortSettings = "gamelift:UpdateFleetPortSettings",
    UpdateGameSession = "gamelift:UpdateGameSession",
    UpdateRuntimeConfiguration = "gamelift:UpdateRuntimeConfiguration"
}

/** Actions for Amazon Glacier
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonglacier.html
  */
export enum Glacier {
    AbortMultipartUpload = "glacier:AbortMultipartUpload",
    AbortVaultLock = "glacier:AbortVaultLock",
    AddTagsToVault = "glacier:AddTagsToVault",
    CompleteMultipartUpload = "glacier:CompleteMultipartUpload",
    CompleteVaultLock = "glacier:CompleteVaultLock",
    CreateVault = "glacier:CreateVault",
    DeleteArchive = "glacier:DeleteArchive",
    DeleteVault = "glacier:DeleteVault",
    DeleteVaultAccessPolicy = "glacier:DeleteVaultAccessPolicy",
    DeleteVaultNotifications = "glacier:DeleteVaultNotifications",
    DescribeJob = "glacier:DescribeJob",
    DescribeVault = "glacier:DescribeVault",
    GetDataRetrievalPolicy = "glacier:GetDataRetrievalPolicy",
    GetJobOutput = "glacier:GetJobOutput",
    GetVaultAccessPolicy = "glacier:GetVaultAccessPolicy",
    GetVaultLock = "glacier:GetVaultLock",
    GetVaultNotifications = "glacier:GetVaultNotifications",
    InitiateJob = "glacier:InitiateJob",
    InitiateMultipartUpload = "glacier:InitiateMultipartUpload",
    InitiateVaultLock = "glacier:InitiateVaultLock",
    ListJobs = "glacier:ListJobs",
    ListMultipartUploads = "glacier:ListMultipartUploads",
    ListParts = "glacier:ListParts",
    ListProvisionedCapacity = "glacier:ListProvisionedCapacity",
    ListTagsForVault = "glacier:ListTagsForVault",
    ListVaults = "glacier:ListVaults",
    PurchaseProvisionedCapacity = "glacier:PurchaseProvisionedCapacity",
    RemoveTagsFromVault = "glacier:RemoveTagsFromVault",
    SetDataRetrievalPolicy = "glacier:SetDataRetrievalPolicy",
    SetVaultAccessPolicy = "glacier:SetVaultAccessPolicy",
    SetVaultNotifications = "glacier:SetVaultNotifications",
    UploadArchive = "glacier:UploadArchive",
    UploadMultipartPart = "glacier:UploadMultipartPart"
}

/** Actions for Amazon GuardDuty
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonguardduty.html
  */
export enum GuardDuty {
    AcceptInvitation = "guardduty:AcceptInvitation",
    ArchiveFindings = "guardduty:ArchiveFindings",
    CreateDetector = "guardduty:CreateDetector",
    CreateIPSet = "guardduty:CreateIPSet",
    CreateMembers = "guardduty:CreateMembers",
    CreateSampleFindings = "guardduty:CreateSampleFindings",
    CreateThreatIntelSet = "guardduty:CreateThreatIntelSet",
    DeclineInvitations = "guardduty:DeclineInvitations",
    DeleteDetector = "guardduty:DeleteDetector",
    DeleteIPSet = "guardduty:DeleteIPSet",
    DeleteInvitations = "guardduty:DeleteInvitations",
    DeleteMembers = "guardduty:DeleteMembers",
    DeleteThreatIntelSet = "guardduty:DeleteThreatIntelSet",
    DisassociateFromMasterAccount = "guardduty:DisassociateFromMasterAccount",
    DisassociateMembers = "guardduty:DisassociateMembers",
    GetDetector = "guardduty:GetDetector",
    GetFindings = "guardduty:GetFindings",
    GetFindingsStatistics = "guardduty:GetFindingsStatistics",
    GetIPSet = "guardduty:GetIPSet",
    GetInvitationsCount = "guardduty:GetInvitationsCount",
    GetMasterAccount = "guardduty:GetMasterAccount",
    GetMembers = "guardduty:GetMembers",
    GetThreatIntelSet = "guardduty:GetThreatIntelSet",
    InviteMembers = "guardduty:InviteMembers",
    ListDetectors = "guardduty:ListDetectors",
    ListFindings = "guardduty:ListFindings",
    ListIPSets = "guardduty:ListIPSets",
    ListInvitations = "guardduty:ListInvitations",
    ListMembers = "guardduty:ListMembers",
    ListThreatIntelSets = "guardduty:ListThreatIntelSets",
    StartMonitoringMembers = "guardduty:StartMonitoringMembers",
    StopMonitoringMembers = "guardduty:StopMonitoringMembers",
    UnarchiveFindings = "guardduty:UnarchiveFindings",
    UpdateDetector = "guardduty:UpdateDetector",
    UpdateFindingsFeedback = "guardduty:UpdateFindingsFeedback",
    UpdateIPSet = "guardduty:UpdateIPSet",
    UpdateThreatIntelSet = "guardduty:UpdateThreatIntelSet"
}

/** Actions for Amazon Inspector
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoninspector.html
  */
export enum Inspector {
    AddAttributesToFindings = "inspector:AddAttributesToFindings",
    CreateAssessmentTarget = "inspector:CreateAssessmentTarget",
    CreateAssessmentTemplate = "inspector:CreateAssessmentTemplate",
    CreateResourceGroup = "inspector:CreateResourceGroup",
    DeleteAssessmentRun = "inspector:DeleteAssessmentRun",
    DeleteAssessmentTarget = "inspector:DeleteAssessmentTarget",
    DeleteAssessmentTemplate = "inspector:DeleteAssessmentTemplate",
    DescribeAssessmentRuns = "inspector:DescribeAssessmentRuns",
    DescribeAssessmentTargets = "inspector:DescribeAssessmentTargets",
    DescribeAssessmentTemplates = "inspector:DescribeAssessmentTemplates",
    DescribeCrossAccountAccessRole = "inspector:DescribeCrossAccountAccessRole",
    DescribeFindings = "inspector:DescribeFindings",
    DescribeResourceGroups = "inspector:DescribeResourceGroups",
    DescribeRulesPackages = "inspector:DescribeRulesPackages",
    GetTelemetryMetadata = "inspector:GetTelemetryMetadata",
    ListAssessmentRunAgents = "inspector:ListAssessmentRunAgents",
    ListAssessmentRuns = "inspector:ListAssessmentRuns",
    ListAssessmentTargets = "inspector:ListAssessmentTargets",
    ListAssessmentTemplates = "inspector:ListAssessmentTemplates",
    ListEventSubscriptions = "inspector:ListEventSubscriptions",
    ListFindings = "inspector:ListFindings",
    ListRulesPackages = "inspector:ListRulesPackages",
    ListTagsForResource = "inspector:ListTagsForResource",
    PreviewAgents = "inspector:PreviewAgents",
    RegisterCrossAccountAccessRole = "inspector:RegisterCrossAccountAccessRole",
    RemoveAttributesFromFindings = "inspector:RemoveAttributesFromFindings",
    SetTagsForResource = "inspector:SetTagsForResource",
    StartAssessmentRun = "inspector:StartAssessmentRun",
    StopAssessmentRun = "inspector:StopAssessmentRun",
    SubscribeToEvent = "inspector:SubscribeToEvent",
    UnsubscribeFromEvent = "inspector:UnsubscribeFromEvent",
    UpdateAssessmentTarget = "inspector:UpdateAssessmentTarget"
}

/** Actions for Amazon Kinesis
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesis.html
  */
export enum Kinesis {
    AddTagsToStream = "kinesis:AddTagsToStream",
    CreateStream = "kinesis:CreateStream",
    DecreaseStreamRetentionPeriod = "kinesis:DecreaseStreamRetentionPeriod",
    DeleteStream = "kinesis:DeleteStream",
    DescribeLimits = "kinesis:DescribeLimits",
    DescribeStream = "kinesis:DescribeStream",
    DisableEnhancedMonitoring = "kinesis:DisableEnhancedMonitoring",
    EnableEnhancedMonitoring = "kinesis:EnableEnhancedMonitoring",
    GetRecords = "kinesis:GetRecords",
    GetShardIterator = "kinesis:GetShardIterator",
    IncreaseStreamRetentionPeriod = "kinesis:IncreaseStreamRetentionPeriod",
    ListStreams = "kinesis:ListStreams",
    ListTagsForStream = "kinesis:ListTagsForStream",
    MergeShards = "kinesis:MergeShards",
    PutRecord = "kinesis:PutRecord",
    PutRecords = "kinesis:PutRecords",
    RemoveTagsFromStream = "kinesis:RemoveTagsFromStream",
    SplitShard = "kinesis:SplitShard",
    UpdateShardCount = "kinesis:UpdateShardCount"
}

/** Actions for Amazon Kinesis Analytics
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisanalytics.html
  */
export enum KinesisAnalytics {
    AddApplicationInput = "kinesisanalytics:AddApplicationInput",
    AddApplicationOutput = "kinesisanalytics:AddApplicationOutput",
    AddApplicationReferenceDataSource = "kinesisanalytics:AddApplicationReferenceDataSource",
    CreateApplication = "kinesisanalytics:CreateApplication",
    DeleteApplication = "kinesisanalytics:DeleteApplication",
    DeleteApplicationOutput = "kinesisanalytics:DeleteApplicationOutput",
    DeleteApplicationReferenceDataSource = "kinesisanalytics:DeleteApplicationReferenceDataSource",
    DescribeApplication = "kinesisanalytics:DescribeApplication",
    DiscoverInputSchema = "kinesisanalytics:DiscoverInputSchema",
    ListApplications = "kinesisanalytics:ListApplications",
    StartApplication = "kinesisanalytics:StartApplication",
    StopApplication = "kinesisanalytics:StopApplication",
    UpdateApplication = "kinesisanalytics:UpdateApplication"
}

/** Actions for Amazon Kinesis Firehose
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisfirehose.html
  */
export enum Firehose {
    CreateDeliveryStream = "firehose:CreateDeliveryStream",
    DeleteDeliveryStream = "firehose:DeleteDeliveryStream",
    DescribeDeliveryStream = "firehose:DescribeDeliveryStream",
    ListDeliveryStreams = "firehose:ListDeliveryStreams",
    PutRecord = "firehose:PutRecord",
    PutRecordBatch = "firehose:PutRecordBatch",
    UpdateDestination = "firehose:UpdateDestination"
}

/** Actions for Amazon Kinesis Video Streams
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisvideostreams.html
  */
export enum KinesisVideo {
    CreateStream = "kinesisvideo:CreateStream",
    DeleteStream = "kinesisvideo:DeleteStream",
    DescribeStream = "kinesisvideo:DescribeStream",
    GetDataEndpoint = "kinesisvideo:GetDataEndpoint",
    GetMedia = "kinesisvideo:GetMedia",
    GetMediaForFragmentList = "kinesisvideo:GetMediaForFragmentList",
    ListFragments = "kinesisvideo:ListFragments",
    ListStreams = "kinesisvideo:ListStreams",
    ListTagsForStream = "kinesisvideo:ListTagsForStream",
    PutMedia = "kinesisvideo:PutMedia",
    TagStream = "kinesisvideo:TagStream",
    UntagStream = "kinesisvideo:UntagStream",
    UpdateDataRetention = "kinesisvideo:UpdateDataRetention",
    UpdateStream = "kinesisvideo:UpdateStream"
}

/** Actions for Amazon Lex
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlex.html
  */
export enum Lex {
    CreateBotVersion = "lex:CreateBotVersion",
    CreateIntentVersion = "lex:CreateIntentVersion",
    CreateSlotTypeVersion = "lex:CreateSlotTypeVersion",
    DeleteBot = "lex:DeleteBot",
    DeleteBotAlias = "lex:DeleteBotAlias",
    DeleteBotChannelAssociation = "lex:DeleteBotChannelAssociation",
    DeleteBotVersion = "lex:DeleteBotVersion",
    DeleteIntent = "lex:DeleteIntent",
    DeleteIntentVersion = "lex:DeleteIntentVersion",
    DeleteSlotType = "lex:DeleteSlotType",
    DeleteSlotTypeVersion = "lex:DeleteSlotTypeVersion",
    DeleteUtterances = "lex:DeleteUtterances",
    GetBot = "lex:GetBot",
    GetBotAlias = "lex:GetBotAlias",
    GetBotAliases = "lex:GetBotAliases",
    GetBotChannelAssociation = "lex:GetBotChannelAssociation",
    GetBotChannelAssociations = "lex:GetBotChannelAssociations",
    GetBotVersions = "lex:GetBotVersions",
    GetBots = "lex:GetBots",
    GetBuiltinIntent = "lex:GetBuiltinIntent",
    GetBuiltinIntents = "lex:GetBuiltinIntents",
    GetBuiltinSlotTypes = "lex:GetBuiltinSlotTypes",
    GetIntent = "lex:GetIntent",
    GetIntentVersions = "lex:GetIntentVersions",
    GetIntents = "lex:GetIntents",
    GetSlotType = "lex:GetSlotType",
    GetSlotTypeVersions = "lex:GetSlotTypeVersions",
    GetSlotTypes = "lex:GetSlotTypes",
    GetUtterancesView = "lex:GetUtterancesView",
    PostContent = "lex:PostContent",
    PostText = "lex:PostText",
    PutBot = "lex:PutBot",
    PutBotAlias = "lex:PutBotAlias",
    PutIntent = "lex:PutIntent",
    PutSlotType = "lex:PutSlotType"
}

/** Actions for Amazon Lightsail
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlightsail.html
  */
export enum Lightsail {
    AllocateStaticIp = "lightsail:AllocateStaticIp",
    AttachStaticIp = "lightsail:AttachStaticIp",
    CloseInstancePublicPorts = "lightsail:CloseInstancePublicPorts",
    CreateDomain = "lightsail:CreateDomain",
    CreateDomainEntry = "lightsail:CreateDomainEntry",
    CreateInstanceSnapshot = "lightsail:CreateInstanceSnapshot",
    CreateInstances = "lightsail:CreateInstances",
    CreateInstancesFromSnapshot = "lightsail:CreateInstancesFromSnapshot",
    CreateKeyPair = "lightsail:CreateKeyPair",
    DeleteDomain = "lightsail:DeleteDomain",
    DeleteDomainEntry = "lightsail:DeleteDomainEntry",
    DeleteInstance = "lightsail:DeleteInstance",
    DeleteInstanceSnapshot = "lightsail:DeleteInstanceSnapshot",
    DeleteKeyPair = "lightsail:DeleteKeyPair",
    DetachStaticIp = "lightsail:DetachStaticIp",
    DownloadDefaultKeyPair = "lightsail:DownloadDefaultKeyPair",
    GetActiveNames = "lightsail:GetActiveNames",
    GetBlueprints = "lightsail:GetBlueprints",
    GetBundles = "lightsail:GetBundles",
    GetDomain = "lightsail:GetDomain",
    GetDomains = "lightsail:GetDomains",
    GetInstance = "lightsail:GetInstance",
    GetInstanceAccessDetails = "lightsail:GetInstanceAccessDetails",
    GetInstanceMetricData = "lightsail:GetInstanceMetricData",
    GetInstancePortStates = "lightsail:GetInstancePortStates",
    GetInstanceSnapshot = "lightsail:GetInstanceSnapshot",
    GetInstanceSnapshots = "lightsail:GetInstanceSnapshots",
    GetInstanceState = "lightsail:GetInstanceState",
    GetInstances = "lightsail:GetInstances",
    GetKeyPair = "lightsail:GetKeyPair",
    GetKeyPairs = "lightsail:GetKeyPairs",
    GetOperation = "lightsail:GetOperation",
    GetOperations = "lightsail:GetOperations",
    GetOperationsForResource = "lightsail:GetOperationsForResource",
    GetRegions = "lightsail:GetRegions",
    GetStaticIp = "lightsail:GetStaticIp",
    GetStaticIps = "lightsail:GetStaticIps",
    ImportKeyPair = "lightsail:ImportKeyPair",
    IsVpcPeered = "lightsail:IsVpcPeered",
    OpenInstancePublicPorts = "lightsail:OpenInstancePublicPorts",
    PeerVpc = "lightsail:PeerVpc",
    RebootInstance = "lightsail:RebootInstance",
    ReleaseStaticIp = "lightsail:ReleaseStaticIp",
    StartInstance = "lightsail:StartInstance",
    StopInstance = "lightsail:StopInstance",
    UnpeerVpc = "lightsail:UnpeerVpc",
    UpdateDomainEntry = "lightsail:UpdateDomainEntry"
}

/** Actions for Amazon MQ
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmq.html
  */
export enum MQ {
    CreateBroker = "mq:CreateBroker",
    CreateConfiguration = "mq:CreateConfiguration",
    CreateUser = "mq:CreateUser",
    DeleteBroker = "mq:DeleteBroker",
    DeleteUser = "mq:DeleteUser",
    DescribeBroker = "mq:DescribeBroker",
    DescribeConfiguration = "mq:DescribeConfiguration",
    DescribeConfigurationRevision = "mq:DescribeConfigurationRevision",
    DescribeUser = "mq:DescribeUser",
    ListBrokers = "mq:ListBrokers",
    ListConfigurationRevisions = "mq:ListConfigurationRevisions",
    ListConfigurations = "mq:ListConfigurations",
    ListUsers = "mq:ListUsers",
    RebootBroker = "mq:RebootBroker",
    UpdateBroker = "mq:UpdateBroker",
    UpdateConfiguration = "mq:UpdateConfiguration",
    UpdateUser = "mq:UpdateUser"
}

/** Actions for Amazon Machine Learning
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmachinelearning.html
  */
export enum MachineLearning {
    AddTags = "machinelearning:AddTags",
    CreateBatchPrediction = "machinelearning:CreateBatchPrediction",
    CreateDataSourceFromRDS = "machinelearning:CreateDataSourceFromRDS",
    CreateDataSourceFromRedshift = "machinelearning:CreateDataSourceFromRedshift",
    CreateDataSourceFromS3 = "machinelearning:CreateDataSourceFromS3",
    CreateEvaluation = "machinelearning:CreateEvaluation",
    CreateMLModel = "machinelearning:CreateMLModel",
    CreateRealtimeEndpoint = "machinelearning:CreateRealtimeEndpoint",
    DeleteBatchPrediction = "machinelearning:DeleteBatchPrediction",
    DeleteDataSource = "machinelearning:DeleteDataSource",
    DeleteEvaluation = "machinelearning:DeleteEvaluation",
    DeleteMLModel = "machinelearning:DeleteMLModel",
    DeleteRealtimeEndpoint = "machinelearning:DeleteRealtimeEndpoint",
    DeleteTags = "machinelearning:DeleteTags",
    DescribeBatchPredictions = "machinelearning:DescribeBatchPredictions",
    DescribeDataSources = "machinelearning:DescribeDataSources",
    DescribeEvaluations = "machinelearning:DescribeEvaluations",
    DescribeMLModels = "machinelearning:DescribeMLModels",
    DescribeTags = "machinelearning:DescribeTags",
    GetBatchPrediction = "machinelearning:GetBatchPrediction",
    GetDataSource = "machinelearning:GetDataSource",
    GetEvaluation = "machinelearning:GetEvaluation",
    GetMLModel = "machinelearning:GetMLModel",
    Predict = "machinelearning:Predict",
    UpdateBatchPrediction = "machinelearning:UpdateBatchPrediction",
    UpdateDataSource = "machinelearning:UpdateDataSource",
    UpdateEvaluation = "machinelearning:UpdateEvaluation",
    UpdateMLModel = "machinelearning:UpdateMLModel"
}

/** Actions for Amazon Mechanical Turk
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmechanicalturk.html
  */
export enum MechanicalTurk {
    ApproveAssignment = "mechanicalturk:ApproveAssignment",
    ApproveRejectedAssignment = "mechanicalturk:ApproveRejectedAssignment",
    AssignQualification = "mechanicalturk:AssignQualification",
    BlockWorker = "mechanicalturk:BlockWorker",
    ChangeHITTypeOfHIT = "mechanicalturk:ChangeHITTypeOfHIT",
    CreateHIT = "mechanicalturk:CreateHIT",
    CreateQualificationType = "mechanicalturk:CreateQualificationType",
    DisableHIT = "mechanicalturk:DisableHIT",
    DisposeHIT = "mechanicalturk:DisposeHIT",
    DisposeQualificationType = "mechanicalturk:DisposeQualificationType",
    ExtendHIT = "mechanicalturk:ExtendHIT",
    ForceExpireHIT = "mechanicalturk:ForceExpireHIT",
    GetAccountBalance = "mechanicalturk:GetAccountBalance",
    GetAssignment = "mechanicalturk:GetAssignment",
    GetAssignmentsForHIT = "mechanicalturk:GetAssignmentsForHIT",
    GetBlockedWorkers = "mechanicalturk:GetBlockedWorkers",
    GetBonusPayments = "mechanicalturk:GetBonusPayments",
    GetFileUploadURL = "mechanicalturk:GetFileUploadURL",
    GetHIT = "mechanicalturk:GetHIT",
    GetHITsForQualificationType = "mechanicalturk:GetHITsForQualificationType",
    GetQualificationRequests = "mechanicalturk:GetQualificationRequests",
    GetQualificationScore = "mechanicalturk:GetQualificationScore",
    GetQualificationType = "mechanicalturk:GetQualificationType",
    GetQualificationsForQualificationType = "mechanicalturk:GetQualificationsForQualificationType",
    GetRequesterStatistic = "mechanicalturk:GetRequesterStatistic",
    GetRequesterWorkerStatistic = "mechanicalturk:GetRequesterWorkerStatistic",
    GetReviewResultsForHIT = "mechanicalturk:GetReviewResultsForHIT",
    GetReviewableHITs = "mechanicalturk:GetReviewableHITs",
    GrantBonus = "mechanicalturk:GrantBonus",
    GrantQualification = "mechanicalturk:GrantQualification",
    NotifyWorkers = "mechanicalturk:NotifyWorkers",
    RegisterHITType = "mechanicalturk:RegisterHITType",
    RejectAssignment = "mechanicalturk:RejectAssignment",
    RejectQualificationRequest = "mechanicalturk:RejectQualificationRequest",
    RevokeQualification = "mechanicalturk:RevokeQualification",
    SearchHITs = "mechanicalturk:SearchHITs",
    SearchQualificationTypes = "mechanicalturk:SearchQualificationTypes",
    SendTestEventNotification = "mechanicalturk:SendTestEventNotification",
    SetHITAsReviewing = "mechanicalturk:SetHITAsReviewing",
    SetHITTypeNotification = "mechanicalturk:SetHITTypeNotification",
    UnblockWorker = "mechanicalturk:UnblockWorker",
    UpdateQualificationScore = "mechanicalturk:UpdateQualificationScore",
    UpdateQualificationType = "mechanicalturk:UpdateQualificationType"
}

/** Actions for Amazon Mechanical Turk Crowd
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmechanicalturkcrowd.html
  */
export enum Crowd {
    GetTask = "crowd:GetTask",
    PutTask = "crowd:PutTask"
}

/** Actions for Amazon Message Delivery Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmessagedeliveryservice.html
  */
export enum Ec2messages {
    AcknowledgeMessage = "ec2messages:AcknowledgeMessage",
    DeleteMessage = "ec2messages:DeleteMessage",
    FailMessage = "ec2messages:FailMessage",
    GetEndpoint = "ec2messages:GetEndpoint",
    GetMessages = "ec2messages:GetMessages",
    SendReply = "ec2messages:SendReply"
}

/** Actions for Amazon Mobile Analytics
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmobileanalytics.html
  */
export enum MobileAnalytics {
    GetFinancialReports = "mobileanalytics:GetFinancialReports",
    GetReports = "mobileanalytics:GetReports",
    PutEvents = "mobileanalytics:PutEvents"
}

/** Actions for Amazon Pinpoint
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpoint.html
  */
export enum Mobiletargeting {
    CreateCampaign = "mobiletargeting:CreateCampaign",
    CreateImportJob = "mobiletargeting:CreateImportJob",
    CreateSegment = "mobiletargeting:CreateSegment",
    DeleteApnsChannel = "mobiletargeting:DeleteApnsChannel",
    DeleteCampaign = "mobiletargeting:DeleteCampaign",
    DeleteGcmChannel = "mobiletargeting:DeleteGcmChannel",
    DeleteSegment = "mobiletargeting:DeleteSegment",
    GetApnsChannel = "mobiletargeting:GetApnsChannel",
    GetApplicationSettings = "mobiletargeting:GetApplicationSettings",
    GetCampaign = "mobiletargeting:GetCampaign",
    GetCampaignActivities = "mobiletargeting:GetCampaignActivities",
    GetCampaignVersion = "mobiletargeting:GetCampaignVersion",
    GetCampaignVersions = "mobiletargeting:GetCampaignVersions",
    GetCampaigns = "mobiletargeting:GetCampaigns",
    GetEndpoint = "mobiletargeting:GetEndpoint",
    GetGcmChannel = "mobiletargeting:GetGcmChannel",
    GetImportJob = "mobiletargeting:GetImportJob",
    GetImportJobs = "mobiletargeting:GetImportJobs",
    GetReports = "mobiletargeting:GetReports",
    GetSegment = "mobiletargeting:GetSegment",
    GetSegmentImportJobs = "mobiletargeting:GetSegmentImportJobs",
    GetSegmentVersion = "mobiletargeting:GetSegmentVersion",
    GetSegmentVersions = "mobiletargeting:GetSegmentVersions",
    GetSegments = "mobiletargeting:GetSegments",
    UpdateApnsChannel = "mobiletargeting:UpdateApnsChannel",
    UpdateApplicationSettings = "mobiletargeting:UpdateApplicationSettings",
    UpdateCampaign = "mobiletargeting:UpdateCampaign",
    UpdateEndpoint = "mobiletargeting:UpdateEndpoint",
    UpdateEndpointsBatch = "mobiletargeting:UpdateEndpointsBatch",
    UpdateGcmChannel = "mobiletargeting:UpdateGcmChannel",
    UpdateSegment = "mobiletargeting:UpdateSegment"
}

/** Actions for Amazon Polly
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpolly.html
  */
export enum Polly {
    DeleteLexicon = "polly:DeleteLexicon",
    DescribeVoices = "polly:DescribeVoices",
    GetLexicon = "polly:GetLexicon",
    ListLexicons = "polly:ListLexicons",
    PutLexicon = "polly:PutLexicon",
    SynthesizeSpeech = "polly:SynthesizeSpeech"
}

/** Actions for Amazon RDS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrds.html
  */
export enum RDS {
    AddRoleToDBCluster = "rds:AddRoleToDBCluster",
    AddSourceIdentifierToSubscription = "rds:AddSourceIdentifierToSubscription",
    AddTagsToResource = "rds:AddTagsToResource",
    ApplyPendingMaintenanceAction = "rds:ApplyPendingMaintenanceAction",
    AuthorizeDBSecurityGroupIngress = "rds:AuthorizeDBSecurityGroupIngress",
    CopyDBClusterSnapshot = "rds:CopyDBClusterSnapshot",
    CopyDBParameterGroup = "rds:CopyDBParameterGroup",
    CopyDBSnapshot = "rds:CopyDBSnapshot",
    CopyOptionGroup = "rds:CopyOptionGroup",
    CreateDBCluster = "rds:CreateDBCluster",
    CreateDBClusterParameterGroup = "rds:CreateDBClusterParameterGroup",
    CreateDBClusterSnapshot = "rds:CreateDBClusterSnapshot",
    CreateDBInstance = "rds:CreateDBInstance",
    CreateDBInstanceReadReplica = "rds:CreateDBInstanceReadReplica",
    CreateDBParameterGroup = "rds:CreateDBParameterGroup",
    CreateDBSecurityGroup = "rds:CreateDBSecurityGroup",
    CreateDBSnapshot = "rds:CreateDBSnapshot",
    CreateDBSubnetGroup = "rds:CreateDBSubnetGroup",
    CreateEventSubscription = "rds:CreateEventSubscription",
    CreateOptionGroup = "rds:CreateOptionGroup",
    DeleteDBCluster = "rds:DeleteDBCluster",
    DeleteDBClusterParameterGroup = "rds:DeleteDBClusterParameterGroup",
    DeleteDBClusterSnapshot = "rds:DeleteDBClusterSnapshot",
    DeleteDBInstance = "rds:DeleteDBInstance",
    DeleteDBParameterGroup = "rds:DeleteDBParameterGroup",
    DeleteDBSecurityGroup = "rds:DeleteDBSecurityGroup",
    DeleteDBSnapshot = "rds:DeleteDBSnapshot",
    DeleteDBSubnetGroup = "rds:DeleteDBSubnetGroup",
    DeleteEventSubscription = "rds:DeleteEventSubscription",
    DeleteOptionGroup = "rds:DeleteOptionGroup",
    DescribeAccountAttributes = "rds:DescribeAccountAttributes",
    DescribeCertificates = "rds:DescribeCertificates",
    DescribeDBClusterParameterGroups = "rds:DescribeDBClusterParameterGroups",
    DescribeDBClusterParameters = "rds:DescribeDBClusterParameters",
    DescribeDBClusterSnapshotAttributes = "rds:DescribeDBClusterSnapshotAttributes",
    DescribeDBClusterSnapshots = "rds:DescribeDBClusterSnapshots",
    DescribeDBClusters = "rds:DescribeDBClusters",
    DescribeDBEngineVersions = "rds:DescribeDBEngineVersions",
    DescribeDBInstances = "rds:DescribeDBInstances",
    DescribeDBLogFiles = "rds:DescribeDBLogFiles",
    DescribeDBParameterGroups = "rds:DescribeDBParameterGroups",
    DescribeDBParameters = "rds:DescribeDBParameters",
    DescribeDBSecurityGroups = "rds:DescribeDBSecurityGroups",
    DescribeDBSnapshotAttributes = "rds:DescribeDBSnapshotAttributes",
    DescribeDBSnapshots = "rds:DescribeDBSnapshots",
    DescribeDBSubnetGroups = "rds:DescribeDBSubnetGroups",
    DescribeEngineDefaultClusterParameters = "rds:DescribeEngineDefaultClusterParameters",
    DescribeEngineDefaultParameters = "rds:DescribeEngineDefaultParameters",
    DescribeEventCategories = "rds:DescribeEventCategories",
    DescribeEventSubscriptions = "rds:DescribeEventSubscriptions",
    DescribeEvents = "rds:DescribeEvents",
    DescribeOptionGroupOptions = "rds:DescribeOptionGroupOptions",
    DescribeOptionGroups = "rds:DescribeOptionGroups",
    DescribeOrderableDBInstanceOptions = "rds:DescribeOrderableDBInstanceOptions",
    DescribePendingMaintenanceActions = "rds:DescribePendingMaintenanceActions",
    DescribeReservedDBInstances = "rds:DescribeReservedDBInstances",
    DescribeReservedDBInstancesOfferings = "rds:DescribeReservedDBInstancesOfferings",
    DownloadCompleteDBLogFile = "rds:DownloadCompleteDBLogFile",
    DownloadDBLogFilePortion = "rds:DownloadDBLogFilePortion",
    FailoverDBCluster = "rds:FailoverDBCluster",
    ListTagsForResource = "rds:ListTagsForResource",
    ModifyDBCluster = "rds:ModifyDBCluster",
    ModifyDBClusterParameterGroup = "rds:ModifyDBClusterParameterGroup",
    ModifyDBClusterSnapshotAttribute = "rds:ModifyDBClusterSnapshotAttribute",
    ModifyDBInstance = "rds:ModifyDBInstance",
    ModifyDBParameterGroup = "rds:ModifyDBParameterGroup",
    ModifyDBSnapshotAttribute = "rds:ModifyDBSnapshotAttribute",
    ModifyDBSubnetGroup = "rds:ModifyDBSubnetGroup",
    ModifyEventSubscription = "rds:ModifyEventSubscription",
    ModifyOptionGroup = "rds:ModifyOptionGroup",
    PromoteReadReplica = "rds:PromoteReadReplica",
    PurchaseReservedDBInstancesOffering = "rds:PurchaseReservedDBInstancesOffering",
    RebootDBInstance = "rds:RebootDBInstance",
    RemoveSourceIdentifierFromSubscription = "rds:RemoveSourceIdentifierFromSubscription",
    RemoveTagsFromResource = "rds:RemoveTagsFromResource",
    ResetDBClusterParameterGroup = "rds:ResetDBClusterParameterGroup",
    ResetDBParameterGroup = "rds:ResetDBParameterGroup",
    RestoreDBClusterFromSnapshot = "rds:RestoreDBClusterFromSnapshot",
    RestoreDBClusterToPointInTime = "rds:RestoreDBClusterToPointInTime",
    RestoreDBInstanceFromDBSnapshot = "rds:RestoreDBInstanceFromDBSnapshot",
    RestoreDBInstanceToPointInTime = "rds:RestoreDBInstanceToPointInTime",
    RevokeDBSecurityGroupIngress = "rds:RevokeDBSecurityGroupIngress",
    StartDBInstance = "rds:StartDBInstance",
    StopDBInstance = "rds:StopDBInstance"
}

/** Actions for Amazon Redshift
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonredshift.html
  */
export enum Redshift {
    AuthorizeClusterSecurityGroupIngress = "redshift:AuthorizeClusterSecurityGroupIngress",
    AuthorizeSnapshotAccess = "redshift:AuthorizeSnapshotAccess",
    CancelQuerySession = "redshift:CancelQuerySession",
    CopyClusterSnapshot = "redshift:CopyClusterSnapshot",
    CreateCluster = "redshift:CreateCluster",
    CreateClusterParameterGroup = "redshift:CreateClusterParameterGroup",
    CreateClusterSecurityGroup = "redshift:CreateClusterSecurityGroup",
    CreateClusterSnapshot = "redshift:CreateClusterSnapshot",
    CreateClusterSubnetGroup = "redshift:CreateClusterSubnetGroup",
    CreateClusterUser = "redshift:CreateClusterUser",
    CreateEventSubscription = "redshift:CreateEventSubscription",
    CreateHsmClientCertificate = "redshift:CreateHsmClientCertificate",
    CreateHsmConfiguration = "redshift:CreateHsmConfiguration",
    CreateSnapshotCopyGrant = "redshift:CreateSnapshotCopyGrant",
    CreateTags = "redshift:CreateTags",
    DeleteCluster = "redshift:DeleteCluster",
    DeleteClusterParameterGroup = "redshift:DeleteClusterParameterGroup",
    DeleteClusterSecurityGroup = "redshift:DeleteClusterSecurityGroup",
    DeleteClusterSnapshot = "redshift:DeleteClusterSnapshot",
    DeleteClusterSubnetGroup = "redshift:DeleteClusterSubnetGroup",
    DeleteEventSubscription = "redshift:DeleteEventSubscription",
    DeleteHsmClientCertificate = "redshift:DeleteHsmClientCertificate",
    DeleteHsmConfiguration = "redshift:DeleteHsmConfiguration",
    DeleteSnapshotCopyGrant = "redshift:DeleteSnapshotCopyGrant",
    DeleteTags = "redshift:DeleteTags",
    DescribeClusterParameterGroups = "redshift:DescribeClusterParameterGroups",
    DescribeClusterParameters = "redshift:DescribeClusterParameters",
    DescribeClusterSecurityGroups = "redshift:DescribeClusterSecurityGroups",
    DescribeClusterSnapshots = "redshift:DescribeClusterSnapshots",
    DescribeClusterSubnetGroups = "redshift:DescribeClusterSubnetGroups",
    DescribeClusterVersions = "redshift:DescribeClusterVersions",
    DescribeClusters = "redshift:DescribeClusters",
    DescribeDefaultClusterParameters = "redshift:DescribeDefaultClusterParameters",
    DescribeEventCategories = "redshift:DescribeEventCategories",
    DescribeEventSubscriptions = "redshift:DescribeEventSubscriptions",
    DescribeEvents = "redshift:DescribeEvents",
    DescribeHsmClientCertificates = "redshift:DescribeHsmClientCertificates",
    DescribeHsmConfigurations = "redshift:DescribeHsmConfigurations",
    DescribeLoggingStatus = "redshift:DescribeLoggingStatus",
    DescribeOrderableClusterOptions = "redshift:DescribeOrderableClusterOptions",
    DescribeReservedNodeOfferings = "redshift:DescribeReservedNodeOfferings",
    DescribeReservedNodes = "redshift:DescribeReservedNodes",
    DescribeResize = "redshift:DescribeResize",
    DescribeSnapshotCopyGrants = "redshift:DescribeSnapshotCopyGrants",
    DescribeTableRestoreStatus = "redshift:DescribeTableRestoreStatus",
    DescribeTags = "redshift:DescribeTags",
    DisableLogging = "redshift:DisableLogging",
    DisableSnapshotCopy = "redshift:DisableSnapshotCopy",
    EnableLogging = "redshift:EnableLogging",
    EnableSnapshotCopy = "redshift:EnableSnapshotCopy",
    GetClusterCredentials = "redshift:GetClusterCredentials",
    JoinGroup = "redshift:JoinGroup",
    ModifyCluster = "redshift:ModifyCluster",
    ModifyClusterIamRoles = "redshift:ModifyClusterIamRoles",
    ModifyClusterParameterGroup = "redshift:ModifyClusterParameterGroup",
    ModifyClusterSubnetGroup = "redshift:ModifyClusterSubnetGroup",
    ModifyEventSubscription = "redshift:ModifyEventSubscription",
    ModifySnapshotCopyRetentionPeriod = "redshift:ModifySnapshotCopyRetentionPeriod",
    PurchaseReservedNodeOffering = "redshift:PurchaseReservedNodeOffering",
    RebootCluster = "redshift:RebootCluster",
    ResetClusterParameterGroup = "redshift:ResetClusterParameterGroup",
    RestoreFromClusterSnapshot = "redshift:RestoreFromClusterSnapshot",
    RestoreTableFromClusterSnapshot = "redshift:RestoreTableFromClusterSnapshot",
    RevokeClusterSecurityGroupIngress = "redshift:RevokeClusterSecurityGroupIngress",
    RevokeSnapshotAccess = "redshift:RevokeSnapshotAccess",
    RotateEncryptionKey = "redshift:RotateEncryptionKey",
    ViewQueriesInConsole = "redshift:ViewQueriesInConsole"
}

/** Actions for Amazon Rekognition
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrekognition.html
  */
export enum Rekognition {
    CompareFaces = "rekognition:CompareFaces",
    CreateCollection = "rekognition:CreateCollection",
    CreateStreamProcessor = "rekognition:CreateStreamProcessor",
    DeleteCollection = "rekognition:DeleteCollection",
    DeleteFaces = "rekognition:DeleteFaces",
    DeleteStreamProcessor = "rekognition:DeleteStreamProcessor",
    DescribeStreamProcessor = "rekognition:DescribeStreamProcessor",
    DetectFaces = "rekognition:DetectFaces",
    DetectLabels = "rekognition:DetectLabels",
    DetectModerationLabels = "rekognition:DetectModerationLabels",
    DetectText = "rekognition:DetectText",
    GetCelebrityInfo = "rekognition:GetCelebrityInfo",
    GetCelebrityRecognition = "rekognition:GetCelebrityRecognition",
    GetContentModeration = "rekognition:GetContentModeration",
    GetFaceDetection = "rekognition:GetFaceDetection",
    GetFaceSearch = "rekognition:GetFaceSearch",
    GetLabelDetection = "rekognition:GetLabelDetection",
    GetPersonTracking = "rekognition:GetPersonTracking",
    IndexFaces = "rekognition:IndexFaces",
    ListCollections = "rekognition:ListCollections",
    ListFaces = "rekognition:ListFaces",
    ListStreamProcessors = "rekognition:ListStreamProcessors",
    RecognizeCelebrities = "rekognition:RecognizeCelebrities",
    SearchFaces = "rekognition:SearchFaces",
    SearchFacesByImage = "rekognition:SearchFacesByImage",
    StartCelebrityRecognition = "rekognition:StartCelebrityRecognition",
    StartContentModeration = "rekognition:StartContentModeration",
    StartFaceDetection = "rekognition:StartFaceDetection",
    StartFaceSearch = "rekognition:StartFaceSearch",
    StartLabelDetection = "rekognition:StartLabelDetection",
    StartPersonTracking = "rekognition:StartPersonTracking",
    StartStreamProcessor = "rekognition:StartStreamProcessor",
    StopStreamProcessor = "rekognition:StopStreamProcessor"
}

/** Actions for Amazon Resource Group Tagging API
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonresourcegrouptaggingapi.html
  */
export enum Tag {
    GetResources = "tag:GetResources",
    GetTagKeys = "tag:GetTagKeys",
    GetTagValues = "tag:GetTagValues",
    TagResources = "tag:TagResources",
    UntagResources = "tag:UntagResources"
}

/** Actions for Amazon Route 53
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53.html
  */
export enum Route53 {
    AssociateVPCWithHostedZone = "route53:AssociateVPCWithHostedZone",
    ChangeResourceRecordSets = "route53:ChangeResourceRecordSets",
    ChangeTagsForResource = "route53:ChangeTagsForResource",
    CreateHealthCheck = "route53:CreateHealthCheck",
    CreateHostedZone = "route53:CreateHostedZone",
    CreateReusableDelegationSet = "route53:CreateReusableDelegationSet",
    CreateTrafficPolicy = "route53:CreateTrafficPolicy",
    CreateTrafficPolicyInstance = "route53:CreateTrafficPolicyInstance",
    CreateTrafficPolicyVersion = "route53:CreateTrafficPolicyVersion",
    DeleteHealthCheck = "route53:DeleteHealthCheck",
    DeleteHostedZone = "route53:DeleteHostedZone",
    DeleteReusableDelegationSet = "route53:DeleteReusableDelegationSet",
    DeleteTrafficPolicy = "route53:DeleteTrafficPolicy",
    DeleteTrafficPolicyInstance = "route53:DeleteTrafficPolicyInstance",
    DisableDomainAutoRenew = "route53:DisableDomainAutoRenew",
    DisassociateVPCFromHostedZone = "route53:DisassociateVPCFromHostedZone",
    EnableDomainAutoRenew = "route53:EnableDomainAutoRenew",
    GetChange = "route53:GetChange",
    GetCheckerIpRanges = "route53:GetCheckerIpRanges",
    GetGeoLocation = "route53:GetGeoLocation",
    GetHealthCheck = "route53:GetHealthCheck",
    GetHealthCheckCount = "route53:GetHealthCheckCount",
    GetHealthCheckLastFailureReason = "route53:GetHealthCheckLastFailureReason",
    GetHealthCheckStatus = "route53:GetHealthCheckStatus",
    GetHostedZone = "route53:GetHostedZone",
    GetHostedZoneCount = "route53:GetHostedZoneCount",
    GetReusableDelegationSet = "route53:GetReusableDelegationSet",
    GetTrafficPolicy = "route53:GetTrafficPolicy",
    GetTrafficPolicyInstance = "route53:GetTrafficPolicyInstance",
    GetTrafficPolicyInstanceCount = "route53:GetTrafficPolicyInstanceCount",
    ListGeoLocations = "route53:ListGeoLocations",
    ListHealthChecks = "route53:ListHealthChecks",
    ListHostedZones = "route53:ListHostedZones",
    ListHostedZonesByName = "route53:ListHostedZonesByName",
    ListResourceRecordSets = "route53:ListResourceRecordSets",
    ListReusableDelegationSets = "route53:ListReusableDelegationSets",
    ListTagsForResource = "route53:ListTagsForResource",
    ListTagsForResources = "route53:ListTagsForResources",
    ListTrafficPolicies = "route53:ListTrafficPolicies",
    ListTrafficPolicyInstances = "route53:ListTrafficPolicyInstances",
    ListTrafficPolicyInstancesByHostedZone = "route53:ListTrafficPolicyInstancesByHostedZone",
    ListTrafficPolicyInstancesByPolicy = "route53:ListTrafficPolicyInstancesByPolicy",
    ListTrafficPolicyVersions = "route53:ListTrafficPolicyVersions",
    TestDNSAnswer = "route53:TestDNSAnswer",
    UpdateHealthCheck = "route53:UpdateHealthCheck",
    UpdateHostedZoneComment = "route53:UpdateHostedZoneComment",
    UpdateTrafficPolicyComment = "route53:UpdateTrafficPolicyComment",
    UpdateTrafficPolicyInstance = "route53:UpdateTrafficPolicyInstance"
}

/** Actions for Amazon Route 53 Auto Naming
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53autonaming.html
  */
export enum Servicediscovery {
    CreatePrivateDnsNamespace = "servicediscovery:CreatePrivateDnsNamespace",
    CreatePublicDnsNamespace = "servicediscovery:CreatePublicDnsNamespace",
    CreateService = "servicediscovery:CreateService",
    DeleteNamespace = "servicediscovery:DeleteNamespace",
    DeleteService = "servicediscovery:DeleteService",
    DeregisterInstance = "servicediscovery:DeregisterInstance",
    GetInstance = "servicediscovery:GetInstance",
    GetInstancesHealthStatus = "servicediscovery:GetInstancesHealthStatus",
    GetNamespace = "servicediscovery:GetNamespace",
    GetOperation = "servicediscovery:GetOperation",
    GetService = "servicediscovery:GetService",
    ListInstances = "servicediscovery:ListInstances",
    ListNamespaces = "servicediscovery:ListNamespaces",
    ListOperations = "servicediscovery:ListOperations",
    ListServices = "servicediscovery:ListServices",
    RegisterInstance = "servicediscovery:RegisterInstance",
    UpdateInstanceHeartbeatStatus = "servicediscovery:UpdateInstanceHeartbeatStatus",
    UpdateService = "servicediscovery:UpdateService"
}

/** Actions for Amazon Route53 Domains
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53domains.html
  */
export enum Route53Domains {
    CheckDomainAvailability = "route53domains:CheckDomainAvailability",
    DeleteTagsForDomain = "route53domains:DeleteTagsForDomain",
    DisableDomainAutoRenew = "route53domains:DisableDomainAutoRenew",
    DisableDomainTransferLock = "route53domains:DisableDomainTransferLock",
    EnableDomainAutoRenew = "route53domains:EnableDomainAutoRenew",
    EnableDomainTransferLock = "route53domains:EnableDomainTransferLock",
    GetContactReachabilityStatus = "route53domains:GetContactReachabilityStatus",
    GetDomainDetail = "route53domains:GetDomainDetail",
    GetDomainSuggestions = "route53domains:GetDomainSuggestions",
    GetOperationDetail = "route53domains:GetOperationDetail",
    ListDomains = "route53domains:ListDomains",
    ListOperations = "route53domains:ListOperations",
    ListTagsForDomain = "route53domains:ListTagsForDomain",
    RegisterDomain = "route53domains:RegisterDomain",
    RenewDomain = "route53domains:RenewDomain",
    ResendContactReachabilityEmail = "route53domains:ResendContactReachabilityEmail",
    RetrieveDomainAuthCode = "route53domains:RetrieveDomainAuthCode",
    TransferDomain = "route53domains:TransferDomain",
    UpdateDomainContact = "route53domains:UpdateDomainContact",
    UpdateDomainContactPrivacy = "route53domains:UpdateDomainContactPrivacy",
    UpdateDomainNameservers = "route53domains:UpdateDomainNameservers",
    UpdateTagsForDomain = "route53domains:UpdateTagsForDomain",
    ViewBilling = "route53domains:ViewBilling"
}

/** Actions for Amazon S3
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html
  */
export enum S3 {
    AbortMultipartUpload = "s3:AbortMultipartUpload",
    CreateBucket = "s3:CreateBucket",
    DeleteBucket = "s3:DeleteBucket",
    DeleteBucketPolicy = "s3:DeleteBucketPolicy",
    DeleteBucketWebsite = "s3:DeleteBucketWebsite",
    DeleteObject = "s3:DeleteObject",
    DeleteObjectTagging = "s3:DeleteObjectTagging",
    DeleteObjectVersion = "s3:DeleteObjectVersion",
    DeleteObjectVersionTagging = "s3:DeleteObjectVersionTagging",
    GetAccelerateConfiguration = "s3:GetAccelerateConfiguration",
    GetAnalyticsConfiguration = "s3:GetAnalyticsConfiguration",
    GetBucketAcl = "s3:GetBucketAcl",
    GetBucketCORS = "s3:GetBucketCORS",
    GetBucketLocation = "s3:GetBucketLocation",
    GetBucketLogging = "s3:GetBucketLogging",
    GetBucketNotification = "s3:GetBucketNotification",
    GetBucketPolicy = "s3:GetBucketPolicy",
    GetBucketRequestPayment = "s3:GetBucketRequestPayment",
    GetBucketTagging = "s3:GetBucketTagging",
    GetBucketVersioning = "s3:GetBucketVersioning",
    GetBucketWebsite = "s3:GetBucketWebsite",
    GetInventoryConfiguration = "s3:GetInventoryConfiguration",
    GetIpConfiguration = "s3:GetIpConfiguration",
    GetLifecycleConfiguration = "s3:GetLifecycleConfiguration",
    GetMetricsConfiguration = "s3:GetMetricsConfiguration",
    GetObject = "s3:GetObject",
    GetObjectAcl = "s3:GetObjectAcl",
    GetObjectTagging = "s3:GetObjectTagging",
    GetObjectTorrent = "s3:GetObjectTorrent",
    GetObjectVersion = "s3:GetObjectVersion",
    GetObjectVersionAcl = "s3:GetObjectVersionAcl",
    GetObjectVersionForReplication = "s3:GetObjectVersionForReplication",
    GetObjectVersionTagging = "s3:GetObjectVersionTagging",
    GetObjectVersionTorrent = "s3:GetObjectVersionTorrent",
    GetReplicationConfiguration = "s3:GetReplicationConfiguration",
    HeadBucket = "s3:HeadBucket",
    ListAllMyBuckets = "s3:ListAllMyBuckets",
    ListBucket = "s3:ListBucket",
    ListBucketByTags = "s3:ListBucketByTags",
    ListBucketMultipartUploads = "s3:ListBucketMultipartUploads",
    ListBucketVersions = "s3:ListBucketVersions",
    ListMultipartUploadParts = "s3:ListMultipartUploadParts",
    ListObjects = "s3:ListObjects",
    ObjectOwnerOverrideToBucketOwner = "s3:ObjectOwnerOverrideToBucketOwner",
    PutAccelerateConfiguration = "s3:PutAccelerateConfiguration",
    PutAnalyticsConfiguration = "s3:PutAnalyticsConfiguration",
    PutBucketAcl = "s3:PutBucketAcl",
    PutBucketCORS = "s3:PutBucketCORS",
    PutBucketLogging = "s3:PutBucketLogging",
    PutBucketNotification = "s3:PutBucketNotification",
    PutBucketPolicy = "s3:PutBucketPolicy",
    PutBucketRequestPayment = "s3:PutBucketRequestPayment",
    PutBucketTagging = "s3:PutBucketTagging",
    PutBucketVersioning = "s3:PutBucketVersioning",
    PutBucketWebsite = "s3:PutBucketWebsite",
    PutInventoryConfiguration = "s3:PutInventoryConfiguration",
    PutIpConfiguration = "s3:PutIpConfiguration",
    PutLifecycleConfiguration = "s3:PutLifecycleConfiguration",
    PutMetricsConfiguration = "s3:PutMetricsConfiguration",
    PutObject = "s3:PutObject",
    PutObjectAcl = "s3:PutObjectAcl",
    PutObjectTagging = "s3:PutObjectTagging",
    PutObjectVersionAcl = "s3:PutObjectVersionAcl",
    PutObjectVersionTagging = "s3:PutObjectVersionTagging",
    PutReplicationConfiguration = "s3:PutReplicationConfiguration",
    ReplicateDelete = "s3:ReplicateDelete",
    ReplicateObject = "s3:ReplicateObject",
    ReplicateTags = "s3:ReplicateTags",
    RestoreObject = "s3:RestoreObject"
}

/** Actions for Amazon SES
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html
  */
export enum SES {
    CloneReceiptRuleSet = "ses:CloneReceiptRuleSet",
    CreateConfigurationSet = "ses:CreateConfigurationSet",
    CreateConfigurationSetEventDestination = "ses:CreateConfigurationSetEventDestination",
    CreateConfigurationSetTrackingOptions = "ses:CreateConfigurationSetTrackingOptions",
    CreateCustomVerificationEmailTemplate = "ses:CreateCustomVerificationEmailTemplate",
    CreateReceiptFilter = "ses:CreateReceiptFilter",
    CreateReceiptRule = "ses:CreateReceiptRule",
    CreateReceiptRuleSet = "ses:CreateReceiptRuleSet",
    CreateTemplate = "ses:CreateTemplate",
    DeleteConfigurationSet = "ses:DeleteConfigurationSet",
    DeleteConfigurationSetEventDestination = "ses:DeleteConfigurationSetEventDestination",
    DeleteConfigurationSetTrackingOptions = "ses:DeleteConfigurationSetTrackingOptions",
    DeleteCustomVerificationEmailTemplate = "ses:DeleteCustomVerificationEmailTemplate",
    DeleteIdentity = "ses:DeleteIdentity",
    DeleteIdentityPolicy = "ses:DeleteIdentityPolicy",
    DeleteReceiptFilter = "ses:DeleteReceiptFilter",
    DeleteReceiptRule = "ses:DeleteReceiptRule",
    DeleteReceiptRuleSet = "ses:DeleteReceiptRuleSet",
    DeleteTemplate = "ses:DeleteTemplate",
    DeleteVerifiedEmailAddress = "ses:DeleteVerifiedEmailAddress",
    DescribeActiveReceiptRuleSet = "ses:DescribeActiveReceiptRuleSet",
    DescribeConfigurationSet = "ses:DescribeConfigurationSet",
    DescribeReceiptRule = "ses:DescribeReceiptRule",
    DescribeReceiptRuleSet = "ses:DescribeReceiptRuleSet",
    GetAccountSendingEnabled = "ses:GetAccountSendingEnabled",
    GetCustomVerificationEmailTemplate = "ses:GetCustomVerificationEmailTemplate",
    GetIdentityDkimAttributes = "ses:GetIdentityDkimAttributes",
    GetIdentityMailFromDomainAttributes = "ses:GetIdentityMailFromDomainAttributes",
    GetIdentityNotificationAttributes = "ses:GetIdentityNotificationAttributes",
    GetIdentityPolicies = "ses:GetIdentityPolicies",
    GetIdentityVerificationAttributes = "ses:GetIdentityVerificationAttributes",
    GetSendQuota = "ses:GetSendQuota",
    GetSendStatistics = "ses:GetSendStatistics",
    GetTemplate = "ses:GetTemplate",
    ListConfigurationSets = "ses:ListConfigurationSets",
    ListCustomVerificationEmailTemplates = "ses:ListCustomVerificationEmailTemplates",
    ListIdentities = "ses:ListIdentities",
    ListIdentityPolicies = "ses:ListIdentityPolicies",
    ListReceiptFilters = "ses:ListReceiptFilters",
    ListReceiptRuleSets = "ses:ListReceiptRuleSets",
    ListTemplates = "ses:ListTemplates",
    ListVerifiedEmailAddresses = "ses:ListVerifiedEmailAddresses",
    PutIdentityPolicy = "ses:PutIdentityPolicy",
    ReorderReceiptRuleSet = "ses:ReorderReceiptRuleSet",
    SendBounce = "ses:SendBounce",
    SendBulkTemplatedEmail = "ses:SendBulkTemplatedEmail",
    SendCustomVerificationEmail = "ses:SendCustomVerificationEmail",
    SendEmail = "ses:SendEmail",
    SendRawEmail = "ses:SendRawEmail",
    SendTemplatedEmail = "ses:SendTemplatedEmail",
    SetActiveReceiptRuleSet = "ses:SetActiveReceiptRuleSet",
    SetIdentityDkimEnabled = "ses:SetIdentityDkimEnabled",
    SetIdentityFeedbackForwardingEnabled = "ses:SetIdentityFeedbackForwardingEnabled",
    SetIdentityHeadersInNotificationsEnabled = "ses:SetIdentityHeadersInNotificationsEnabled",
    SetIdentityMailFromDomain = "ses:SetIdentityMailFromDomain",
    SetIdentityNotificationTopic = "ses:SetIdentityNotificationTopic",
    SetReceiptRulePosition = "ses:SetReceiptRulePosition",
    TestRenderTemplate = "ses:TestRenderTemplate",
    UpdateAccountSendingEnabled = "ses:UpdateAccountSendingEnabled",
    UpdateConfigurationSetEventDestination = "ses:UpdateConfigurationSetEventDestination",
    UpdateConfigurationSetReputationMetricsEnabled = "ses:UpdateConfigurationSetReputationMetricsEnabled",
    UpdateConfigurationSetSendingEnabled = "ses:UpdateConfigurationSetSendingEnabled",
    UpdateConfigurationSetTrackingOptions = "ses:UpdateConfigurationSetTrackingOptions",
    UpdateCustomVerificationEmailTemplate = "ses:UpdateCustomVerificationEmailTemplate",
    UpdateReceiptRule = "ses:UpdateReceiptRule",
    UpdateTemplate = "ses:UpdateTemplate",
    VerifyDomainDkim = "ses:VerifyDomainDkim",
    VerifyDomainIdentity = "ses:VerifyDomainIdentity",
    VerifyEmailAddress = "ses:VerifyEmailAddress",
    VerifyEmailIdentity = "ses:VerifyEmailIdentity"
}

/** Actions for Amazon SNS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsns.html
  */
export enum SNS {
    AddPermission = "sns:AddPermission",
    CheckIfPhoneNumberIsOptedOut = "sns:CheckIfPhoneNumberIsOptedOut",
    ConfirmSubscription = "sns:ConfirmSubscription",
    CreatePlatformApplication = "sns:CreatePlatformApplication",
    CreatePlatformEndpoint = "sns:CreatePlatformEndpoint",
    CreateTopic = "sns:CreateTopic",
    DeleteEndpoint = "sns:DeleteEndpoint",
    DeletePlatformApplication = "sns:DeletePlatformApplication",
    DeleteTopic = "sns:DeleteTopic",
    GetEndpointAttributes = "sns:GetEndpointAttributes",
    GetPlatformApplicationAttributes = "sns:GetPlatformApplicationAttributes",
    GetSMSAttributes = "sns:GetSMSAttributes",
    GetSubscriptionAttributes = "sns:GetSubscriptionAttributes",
    GetTopicAttributes = "sns:GetTopicAttributes",
    ListEndpointsByPlatformApplication = "sns:ListEndpointsByPlatformApplication",
    ListPhoneNumbersOptedOut = "sns:ListPhoneNumbersOptedOut",
    ListPlatformApplications = "sns:ListPlatformApplications",
    ListSubscriptions = "sns:ListSubscriptions",
    ListSubscriptionsByTopic = "sns:ListSubscriptionsByTopic",
    ListTopics = "sns:ListTopics",
    OptInPhoneNumber = "sns:OptInPhoneNumber",
    Publish = "sns:Publish",
    RemovePermission = "sns:RemovePermission",
    SetEndpointAttributes = "sns:SetEndpointAttributes",
    SetPlatformApplicationAttributes = "sns:SetPlatformApplicationAttributes",
    SetSMSAttributes = "sns:SetSMSAttributes",
    SetSubscriptionAttributes = "sns:SetSubscriptionAttributes",
    SetTopicAttributes = "sns:SetTopicAttributes",
    Subscribe = "sns:Subscribe",
    Unsubscribe = "sns:Unsubscribe"
}

/** Actions for Amazon SQS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsqs.html
  */
export enum SQS {
    AddPermission = "sqs:AddPermission",
    ChangeMessageVisibility = "sqs:ChangeMessageVisibility",
    ChangeMessageVisibilityBatch = "sqs:ChangeMessageVisibilityBatch",
    CreateQueue = "sqs:CreateQueue",
    DeleteMessage = "sqs:DeleteMessage",
    DeleteMessageBatch = "sqs:DeleteMessageBatch",
    DeleteQueue = "sqs:DeleteQueue",
    GetQueueAttributes = "sqs:GetQueueAttributes",
    GetQueueUrl = "sqs:GetQueueUrl",
    ListDeadLetterSourceQueues = "sqs:ListDeadLetterSourceQueues",
    ListQueueTags = "sqs:ListQueueTags",
    ListQueues = "sqs:ListQueues",
    PurgeQueue = "sqs:PurgeQueue",
    ReceiveMessage = "sqs:ReceiveMessage",
    RemovePermission = "sqs:RemovePermission",
    SendMessage = "sqs:SendMessage",
    SendMessageBatch = "sqs:SendMessageBatch",
    SetQueueAttributes = "sqs:SetQueueAttributes",
    TagQueue = "sqs:TagQueue",
    UntagQueue = "sqs:UntagQueue"
}

/** Actions for Amazon SageMaker
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html
  */
export enum SageMaker {
    AddTags = "sagemaker:AddTags",
    CreateEndpoint = "sagemaker:CreateEndpoint",
    CreateEndpointConfig = "sagemaker:CreateEndpointConfig",
    CreateModel = "sagemaker:CreateModel",
    CreateNotebookInstance = "sagemaker:CreateNotebookInstance",
    CreatePresignedNotebookInstanceUrl = "sagemaker:CreatePresignedNotebookInstanceUrl",
    CreateTrainingJob = "sagemaker:CreateTrainingJob",
    DeleteEndpoint = "sagemaker:DeleteEndpoint",
    DeleteEndpointConfig = "sagemaker:DeleteEndpointConfig",
    DeleteModel = "sagemaker:DeleteModel",
    DeleteNotebookInstance = "sagemaker:DeleteNotebookInstance",
    DeleteTags = "sagemaker:DeleteTags",
    DescribeEndpoint = "sagemaker:DescribeEndpoint",
    DescribeEndpointConfig = "sagemaker:DescribeEndpointConfig",
    DescribeModel = "sagemaker:DescribeModel",
    DescribeNotebookInstance = "sagemaker:DescribeNotebookInstance",
    DescribeTrainingJob = "sagemaker:DescribeTrainingJob",
    InvokeEndpoint = "sagemaker:InvokeEndpoint",
    ListEndpointConfigs = "sagemaker:ListEndpointConfigs",
    ListEndpoints = "sagemaker:ListEndpoints",
    ListModels = "sagemaker:ListModels",
    ListNotebookInstances = "sagemaker:ListNotebookInstances",
    ListTags = "sagemaker:ListTags",
    ListTrainingJobs = "sagemaker:ListTrainingJobs",
    StartNotebookInstance = "sagemaker:StartNotebookInstance",
    StopNotebookInstance = "sagemaker:StopNotebookInstance",
    StopTrainingJob = "sagemaker:StopTrainingJob",
    UpdateEndpoint = "sagemaker:UpdateEndpoint",
    UpdateEndpointWeightsAndCapacities = "sagemaker:UpdateEndpointWeightsAndCapacities",
    UpdateNotebookInstance = "sagemaker:UpdateNotebookInstance"
}

/** Actions for Amazon Simple Systems Manager
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimplesystemsmanager.html
  */
export enum SSM {
    AddTagsToResource = "ssm:AddTagsToResource",
    CancelCommand = "ssm:CancelCommand",
    CreateActivation = "ssm:CreateActivation",
    CreateAssociation = "ssm:CreateAssociation",
    CreateAssociationBatch = "ssm:CreateAssociationBatch",
    CreateDocument = "ssm:CreateDocument",
    CreateMaintenanceWindow = "ssm:CreateMaintenanceWindow",
    CreatePatchBaseline = "ssm:CreatePatchBaseline",
    CreateResourceDataSync = "ssm:CreateResourceDataSync",
    DeleteActivation = "ssm:DeleteActivation",
    DeleteAssociation = "ssm:DeleteAssociation",
    DeleteDocument = "ssm:DeleteDocument",
    DeleteMaintenanceWindow = "ssm:DeleteMaintenanceWindow",
    DeleteParameter = "ssm:DeleteParameter",
    DeleteParameters = "ssm:DeleteParameters",
    DeletePatchBaseline = "ssm:DeletePatchBaseline",
    DeleteResourceDataSync = "ssm:DeleteResourceDataSync",
    DeregisterManagedInstance = "ssm:DeregisterManagedInstance",
    DeregisterPatchBaselineForPatchGroup = "ssm:DeregisterPatchBaselineForPatchGroup",
    DeregisterTargetFromMaintenanceWindow = "ssm:DeregisterTargetFromMaintenanceWindow",
    DeregisterTaskFromMaintenanceWindow = "ssm:DeregisterTaskFromMaintenanceWindow",
    DescribeActivations = "ssm:DescribeActivations",
    DescribeAssociation = "ssm:DescribeAssociation",
    DescribeAutomationExecutions = "ssm:DescribeAutomationExecutions",
    DescribeAutomationStepExecutions = "ssm:DescribeAutomationStepExecutions",
    DescribeAvailablePatches = "ssm:DescribeAvailablePatches",
    DescribeDocument = "ssm:DescribeDocument",
    DescribeDocumentParameters = "ssm:DescribeDocumentParameters",
    DescribeDocumentPermission = "ssm:DescribeDocumentPermission",
    DescribeEffectiveInstanceAssociations = "ssm:DescribeEffectiveInstanceAssociations",
    DescribeEffectivePatchesForPatchBaseline = "ssm:DescribeEffectivePatchesForPatchBaseline",
    DescribeInstanceAssociationsStatus = "ssm:DescribeInstanceAssociationsStatus",
    DescribeInstanceInformation = "ssm:DescribeInstanceInformation",
    DescribeInstancePatchStates = "ssm:DescribeInstancePatchStates",
    DescribeInstancePatchStatesForPatchGroup = "ssm:DescribeInstancePatchStatesForPatchGroup",
    DescribeInstancePatches = "ssm:DescribeInstancePatches",
    DescribeInstanceProperties = "ssm:DescribeInstanceProperties",
    DescribeMaintenanceWindowExecutionTaskInvocations = "ssm:DescribeMaintenanceWindowExecutionTaskInvocations",
    DescribeMaintenanceWindowExecutionTasks = "ssm:DescribeMaintenanceWindowExecutionTasks",
    DescribeMaintenanceWindowExecutions = "ssm:DescribeMaintenanceWindowExecutions",
    DescribeMaintenanceWindowTargets = "ssm:DescribeMaintenanceWindowTargets",
    DescribeMaintenanceWindowTasks = "ssm:DescribeMaintenanceWindowTasks",
    DescribeMaintenanceWindows = "ssm:DescribeMaintenanceWindows",
    DescribeParameters = "ssm:DescribeParameters",
    DescribePatchBaselines = "ssm:DescribePatchBaselines",
    DescribePatchGroupState = "ssm:DescribePatchGroupState",
    DescribePatchGroups = "ssm:DescribePatchGroups",
    GetAutomationExecution = "ssm:GetAutomationExecution",
    GetCommandInvocation = "ssm:GetCommandInvocation",
    GetDefaultPatchBaseline = "ssm:GetDefaultPatchBaseline",
    GetDeployablePatchSnapshotForInstance = "ssm:GetDeployablePatchSnapshotForInstance",
    GetDocument = "ssm:GetDocument",
    GetInventory = "ssm:GetInventory",
    GetInventorySchema = "ssm:GetInventorySchema",
    GetMaintenanceWindow = "ssm:GetMaintenanceWindow",
    GetMaintenanceWindowExecution = "ssm:GetMaintenanceWindowExecution",
    GetMaintenanceWindowExecutionTask = "ssm:GetMaintenanceWindowExecutionTask",
    GetMaintenanceWindowExecutionTaskInvocation = "ssm:GetMaintenanceWindowExecutionTaskInvocation",
    GetMaintenanceWindowTask = "ssm:GetMaintenanceWindowTask",
    GetManifest = "ssm:GetManifest",
    GetParameter = "ssm:GetParameter",
    GetParameterHistory = "ssm:GetParameterHistory",
    GetParameters = "ssm:GetParameters",
    GetParametersByPath = "ssm:GetParametersByPath",
    GetPatchBaseline = "ssm:GetPatchBaseline",
    GetPatchBaselineForPatchGroup = "ssm:GetPatchBaselineForPatchGroup",
    ListAssociationVersions = "ssm:ListAssociationVersions",
    ListAssociations = "ssm:ListAssociations",
    ListCommandInvocations = "ssm:ListCommandInvocations",
    ListCommands = "ssm:ListCommands",
    ListDocumentVersions = "ssm:ListDocumentVersions",
    ListDocuments = "ssm:ListDocuments",
    ListInstanceAssociations = "ssm:ListInstanceAssociations",
    ListInventoryEntries = "ssm:ListInventoryEntries",
    ListResourceDataSync = "ssm:ListResourceDataSync",
    ListTagsForResource = "ssm:ListTagsForResource",
    ModifyDocumentPermission = "ssm:ModifyDocumentPermission",
    PutComplianceItems = "ssm:PutComplianceItems",
    PutConfigurePackageResult = "ssm:PutConfigurePackageResult",
    PutInventory = "ssm:PutInventory",
    PutParameter = "ssm:PutParameter",
    RegisterDefaultPatchBaseline = "ssm:RegisterDefaultPatchBaseline",
    RegisterPatchBaselineForPatchGroup = "ssm:RegisterPatchBaselineForPatchGroup",
    RegisterTargetWithMaintenanceWindow = "ssm:RegisterTargetWithMaintenanceWindow",
    RegisterTaskWithMaintenanceWindow = "ssm:RegisterTaskWithMaintenanceWindow",
    RemoveTagsFromResource = "ssm:RemoveTagsFromResource",
    SendAutomationSignal = "ssm:SendAutomationSignal",
    SendCommand = "ssm:SendCommand",
    StartAssociationsOnce = "ssm:StartAssociationsOnce",
    StartAutomationExecution = "ssm:StartAutomationExecution",
    StopAutomationExecution = "ssm:StopAutomationExecution",
    UpdateAssociation = "ssm:UpdateAssociation",
    UpdateAssociationStatus = "ssm:UpdateAssociationStatus",
    UpdateDocument = "ssm:UpdateDocument",
    UpdateDocumentDefaultVersion = "ssm:UpdateDocumentDefaultVersion",
    UpdateInstanceAssociationStatus = "ssm:UpdateInstanceAssociationStatus",
    UpdateInstanceInformation = "ssm:UpdateInstanceInformation",
    UpdateMaintenanceWindow = "ssm:UpdateMaintenanceWindow",
    UpdateMaintenanceWindowTarget = "ssm:UpdateMaintenanceWindowTarget",
    UpdateMaintenanceWindowTask = "ssm:UpdateMaintenanceWindowTask",
    UpdateManagedInstanceRole = "ssm:UpdateManagedInstanceRole",
    UpdatePatchBaseline = "ssm:UpdatePatchBaseline"
}

/** Actions for Amazon Simple Workflow Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpleworkflowservice.html
  */
export enum SWF {
    CancelTimer = "swf:CancelTimer",
    CancelWorkflowExecution = "swf:CancelWorkflowExecution",
    CompleteWorkflowExecution = "swf:CompleteWorkflowExecution",
    ContinueAsNewWorkflowExecution = "swf:ContinueAsNewWorkflowExecution",
    CountClosedWorkflowExecutions = "swf:CountClosedWorkflowExecutions",
    CountOpenWorkflowExecutions = "swf:CountOpenWorkflowExecutions",
    CountPendingActivityTasks = "swf:CountPendingActivityTasks",
    CountPendingDecisionTasks = "swf:CountPendingDecisionTasks",
    DeprecateActivityType = "swf:DeprecateActivityType",
    DeprecateDomain = "swf:DeprecateDomain",
    DeprecateWorkflowType = "swf:DeprecateWorkflowType",
    DescribeActivityType = "swf:DescribeActivityType",
    DescribeDomain = "swf:DescribeDomain",
    DescribeWorkflowExecution = "swf:DescribeWorkflowExecution",
    DescribeWorkflowType = "swf:DescribeWorkflowType",
    FailWorkflowExecution = "swf:FailWorkflowExecution",
    GetWorkflowExecutionHistory = "swf:GetWorkflowExecutionHistory",
    ListActivityTypes = "swf:ListActivityTypes",
    ListClosedWorkflowExecutions = "swf:ListClosedWorkflowExecutions",
    ListDomains = "swf:ListDomains",
    ListOpenWorkflowExecutions = "swf:ListOpenWorkflowExecutions",
    ListWorkflowTypes = "swf:ListWorkflowTypes",
    PollForActivityTask = "swf:PollForActivityTask",
    PollForDecisionTask = "swf:PollForDecisionTask",
    RecordActivityTaskHeartbeat = "swf:RecordActivityTaskHeartbeat",
    RecordMarker = "swf:RecordMarker",
    RegisterActivityType = "swf:RegisterActivityType",
    RegisterDomain = "swf:RegisterDomain",
    RegisterWorkflowType = "swf:RegisterWorkflowType",
    RequestCancelActivityTask = "swf:RequestCancelActivityTask",
    RequestCancelExternalWorkflowExecution = "swf:RequestCancelExternalWorkflowExecution",
    RequestCancelWorkflowExecution = "swf:RequestCancelWorkflowExecution",
    RespondActivityTaskCanceled = "swf:RespondActivityTaskCanceled",
    RespondActivityTaskCompleted = "swf:RespondActivityTaskCompleted",
    RespondActivityTaskFailed = "swf:RespondActivityTaskFailed",
    RespondDecisionTaskCompleted = "swf:RespondDecisionTaskCompleted",
    ScheduleActivityTask = "swf:ScheduleActivityTask",
    SignalExternalWorkflowExecution = "swf:SignalExternalWorkflowExecution",
    SignalWorkflowExecution = "swf:SignalWorkflowExecution",
    StartChildWorkflowExecution = "swf:StartChildWorkflowExecution",
    StartTimer = "swf:StartTimer",
    StartWorkflowExecution = "swf:StartWorkflowExecution",
    TerminateWorkflowExecution = "swf:TerminateWorkflowExecution"
}

/** Actions for Amazon SimpleDB
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpledb.html
  */
export enum SDB {
    BatchDeleteAttributes = "sdb:BatchDeleteAttributes",
    BatchPutAttributes = "sdb:BatchPutAttributes",
    CreateDomain = "sdb:CreateDomain",
    DeleteAttributes = "sdb:DeleteAttributes",
    DeleteDomain = "sdb:DeleteDomain",
    DomainMetadata = "sdb:DomainMetadata",
    GetAttributes = "sdb:GetAttributes",
    ListDomains = "sdb:ListDomains",
    PutAttributes = "sdb:PutAttributes",
    Select = "sdb:Select"
}

/** Actions for Amazon Storage Gateway
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonstoragegateway.html
  */
export enum StorageGateway {
    ActivateGateway = "storagegateway:ActivateGateway",
    AddCache = "storagegateway:AddCache",
    AddTagsToResource = "storagegateway:AddTagsToResource",
    AddUploadBuffer = "storagegateway:AddUploadBuffer",
    AddWorkingStorage = "storagegateway:AddWorkingStorage",
    CancelArchival = "storagegateway:CancelArchival",
    CancelRetrieval = "storagegateway:CancelRetrieval",
    CreateCachediSCSIVolume = "storagegateway:CreateCachediSCSIVolume",
    CreateNFSFileShare = "storagegateway:CreateNFSFileShare",
    CreateSnapshot = "storagegateway:CreateSnapshot",
    CreateSnapshotFromVolumeRecoveryPoint = "storagegateway:CreateSnapshotFromVolumeRecoveryPoint",
    CreateStorediSCSIVolume = "storagegateway:CreateStorediSCSIVolume",
    CreateTapeWithBarcode = "storagegateway:CreateTapeWithBarcode",
    CreateTapes = "storagegateway:CreateTapes",
    DeleteBandwidthRateLimit = "storagegateway:DeleteBandwidthRateLimit",
    DeleteChapCredentials = "storagegateway:DeleteChapCredentials",
    DeleteFileShare = "storagegateway:DeleteFileShare",
    DeleteGateway = "storagegateway:DeleteGateway",
    DeleteSnapshotSchedule = "storagegateway:DeleteSnapshotSchedule",
    DeleteTape = "storagegateway:DeleteTape",
    DeleteTapeArchive = "storagegateway:DeleteTapeArchive",
    DeleteVolume = "storagegateway:DeleteVolume",
    DescribeBandwidthRateLimit = "storagegateway:DescribeBandwidthRateLimit",
    DescribeCache = "storagegateway:DescribeCache",
    DescribeCachediSCSIVolumes = "storagegateway:DescribeCachediSCSIVolumes",
    DescribeChapCredentials = "storagegateway:DescribeChapCredentials",
    DescribeGatewayInformation = "storagegateway:DescribeGatewayInformation",
    DescribeMaintenanceStartTime = "storagegateway:DescribeMaintenanceStartTime",
    DescribeNFSFileShares = "storagegateway:DescribeNFSFileShares",
    DescribeSnapshotSchedule = "storagegateway:DescribeSnapshotSchedule",
    DescribeStorediSCSIVolumes = "storagegateway:DescribeStorediSCSIVolumes",
    DescribeTapeArchives = "storagegateway:DescribeTapeArchives",
    DescribeTapeRecoveryPoints = "storagegateway:DescribeTapeRecoveryPoints",
    DescribeTapes = "storagegateway:DescribeTapes",
    DescribeUploadBuffer = "storagegateway:DescribeUploadBuffer",
    DescribeVTLDevices = "storagegateway:DescribeVTLDevices",
    DescribeWorkingStorage = "storagegateway:DescribeWorkingStorage",
    DisableGateway = "storagegateway:DisableGateway",
    ListFileShares = "storagegateway:ListFileShares",
    ListGateways = "storagegateway:ListGateways",
    ListLocalDisks = "storagegateway:ListLocalDisks",
    ListTagsForResource = "storagegateway:ListTagsForResource",
    ListTapes = "storagegateway:ListTapes",
    ListVolumeInitiators = "storagegateway:ListVolumeInitiators",
    ListVolumeRecoveryPoints = "storagegateway:ListVolumeRecoveryPoints",
    ListVolumes = "storagegateway:ListVolumes",
    RefreshCache = "storagegateway:RefreshCache",
    RemoveTagsFromResource = "storagegateway:RemoveTagsFromResource",
    ResetCache = "storagegateway:ResetCache",
    RetrieveTapeArchive = "storagegateway:RetrieveTapeArchive",
    RetrieveTapeRecoveryPoint = "storagegateway:RetrieveTapeRecoveryPoint",
    SetLocalConsolePassword = "storagegateway:SetLocalConsolePassword",
    ShutdownGateway = "storagegateway:ShutdownGateway",
    StartGateway = "storagegateway:StartGateway",
    UpdateBandwidthRateLimit = "storagegateway:UpdateBandwidthRateLimit",
    UpdateChapCredentials = "storagegateway:UpdateChapCredentials",
    UpdateGatewayInformation = "storagegateway:UpdateGatewayInformation",
    UpdateGatewaySoftwareNow = "storagegateway:UpdateGatewaySoftwareNow",
    UpdateMaintenanceStartTime = "storagegateway:UpdateMaintenanceStartTime",
    UpdateNFSFileShare = "storagegateway:UpdateNFSFileShare",
    UpdateSnapshotSchedule = "storagegateway:UpdateSnapshotSchedule",
    UpdateVTLDeviceType = "storagegateway:UpdateVTLDeviceType"
}

/** Actions for Amazon Transcribe
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranscribe.html
  */
export enum Transcribe {
    GetTranscriptionJob = "transcribe:GetTranscriptionJob",
    ListTranscriptionJobs = "transcribe:ListTranscriptionJobs",
    StartTranscriptionJob = "transcribe:StartTranscriptionJob"
}

/** Actions for Amazon Translate
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranslate.html
  */
export enum Translate {
    TranslateText = "translate:TranslateText"
}

/** Actions for Amazon WorkDocs
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkdocs.html
  */
export enum WorkDocs {
    AbortDocumentVersionUpload = "workdocs:AbortDocumentVersionUpload",
    ActivateUser = "workdocs:ActivateUser",
    AddResourcePermissions = "workdocs:AddResourcePermissions",
    AddUserToGroup = "workdocs:AddUserToGroup",
    CheckAlias = "workdocs:CheckAlias",
    CreateFolder = "workdocs:CreateFolder",
    CreateInstance = "workdocs:CreateInstance",
    CreateNotificationSubscription = "workdocs:CreateNotificationSubscription",
    CreateUser = "workdocs:CreateUser",
    DeactivateUser = "workdocs:DeactivateUser",
    DeleteDocument = "workdocs:DeleteDocument",
    DeleteFolder = "workdocs:DeleteFolder",
    DeleteFolderContents = "workdocs:DeleteFolderContents",
    DeleteInstance = "workdocs:DeleteInstance",
    DeleteNotificationSubscription = "workdocs:DeleteNotificationSubscription",
    DeleteUser = "workdocs:DeleteUser",
    DeregisterDirectory = "workdocs:DeregisterDirectory",
    DescribeAvailableDirectories = "workdocs:DescribeAvailableDirectories",
    DescribeDocumentVersions = "workdocs:DescribeDocumentVersions",
    DescribeFolderContents = "workdocs:DescribeFolderContents",
    DescribeInstances = "workdocs:DescribeInstances",
    DescribeNotificationSubscriptions = "workdocs:DescribeNotificationSubscriptions",
    DescribeResourcePermissions = "workdocs:DescribeResourcePermissions",
    DescribeUsers = "workdocs:DescribeUsers",
    GetDocument = "workdocs:GetDocument",
    GetDocumentPath = "workdocs:GetDocumentPath",
    GetDocumentVersion = "workdocs:GetDocumentVersion",
    GetFolder = "workdocs:GetFolder",
    GetFolderPath = "workdocs:GetFolderPath",
    InitiateDocumentVersionUpload = "workdocs:InitiateDocumentVersionUpload",
    RegisterDirectory = "workdocs:RegisterDirectory",
    RemoveAllResourcePermissions = "workdocs:RemoveAllResourcePermissions",
    RemoveResourcePermission = "workdocs:RemoveResourcePermission",
    RemoveUserFromGroup = "workdocs:RemoveUserFromGroup",
    UpdateDocument = "workdocs:UpdateDocument",
    UpdateDocumentVersion = "workdocs:UpdateDocumentVersion",
    UpdateFolder = "workdocs:UpdateFolder",
    UpdateInstanceAlias = "workdocs:UpdateInstanceAlias",
    UpdateUser = "workdocs:UpdateUser"
}

/** Actions for Amazon WorkMail
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkmail.html
  */
export enum WorkMail {
    AddMembersToGroup = "workmail:AddMembersToGroup",
    CreateGroup = "workmail:CreateGroup",
    CreateMailDomain = "workmail:CreateMailDomain",
    CreateMailUser = "workmail:CreateMailUser",
    CreateOrganization = "workmail:CreateOrganization",
    CreateResource = "workmail:CreateResource",
    DeleteMailDomain = "workmail:DeleteMailDomain",
    DeleteMobileDevice = "workmail:DeleteMobileDevice",
    DeleteOrganization = "workmail:DeleteOrganization",
    DescribeDirectories = "workmail:DescribeDirectories",
    DescribeKmsKeys = "workmail:DescribeKmsKeys",
    DescribeMailDomains = "workmail:DescribeMailDomains",
    DescribeMailGroups = "workmail:DescribeMailGroups",
    DescribeMailUsers = "workmail:DescribeMailUsers",
    DescribeOrganizations = "workmail:DescribeOrganizations",
    DisableMailGroups = "workmail:DisableMailGroups",
    DisableMailUsers = "workmail:DisableMailUsers",
    EnableMailDomain = "workmail:EnableMailDomain",
    EnableMailGroups = "workmail:EnableMailGroups",
    EnableMailUsers = "workmail:EnableMailUsers",
    GetMailDomainDetails = "workmail:GetMailDomainDetails",
    GetMailGroupDetails = "workmail:GetMailGroupDetails",
    GetMailUserDetails = "workmail:GetMailUserDetails",
    GetMobileDeviceDetails = "workmail:GetMobileDeviceDetails",
    GetMobileDevicesForUser = "workmail:GetMobileDevicesForUser",
    GetMobilePolicyDetails = "workmail:GetMobilePolicyDetails",
    ListMembersInMailGroup = "workmail:ListMembersInMailGroup",
    RemoveMembersFromGroup = "workmail:RemoveMembersFromGroup",
    ResetUserPassword = "workmail:ResetUserPassword",
    SearchMembers = "workmail:SearchMembers",
    SetAdmin = "workmail:SetAdmin",
    SetDefaultMailDomain = "workmail:SetDefaultMailDomain",
    SetMailGroupDetails = "workmail:SetMailGroupDetails",
    SetMailUserDetails = "workmail:SetMailUserDetails",
    SetMobilePolicyDetails = "workmail:SetMobilePolicyDetails",
    WipeMobileDevice = "workmail:WipeMobileDevice"
}

/** Actions for Amazon WorkSpaces
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspaces.html
  */
export enum WorkSpaces {
    CreateTags = "workspaces:CreateTags",
    CreateWorkspaces = "workspaces:CreateWorkspaces",
    DeleteTags = "workspaces:DeleteTags",
    DescribeTags = "workspaces:DescribeTags",
    DescribeWorkspaceBundles = "workspaces:DescribeWorkspaceBundles",
    DescribeWorkspaceDirectories = "workspaces:DescribeWorkspaceDirectories",
    DescribeWorkspaces = "workspaces:DescribeWorkspaces",
    DescribeWorkspacesConnectionStatus = "workspaces:DescribeWorkspacesConnectionStatus",
    ModifyWorkspaceProperties = "workspaces:ModifyWorkspaceProperties",
    RebootWorkspaces = "workspaces:RebootWorkspaces",
    RebuildWorkspaces = "workspaces:RebuildWorkspaces",
    StartWorkspaces = "workspaces:StartWorkspaces",
    StopWorkspaces = "workspaces:StopWorkspaces",
    TerminateWorkspaces = "workspaces:TerminateWorkspaces"
}

/** Actions for Amazon WorkSpaces Application Manager
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspacesapplicationmanager.html
  */
export enum WAM {
    AuthenticatePackager = "wam:AuthenticatePackager"
}

/** Actions for Application Auto Scaling
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationautoscaling.html
  */
export enum ApplicationAutoScaling {
    DeleteScalingPolicy = "application-autoscaling:DeleteScalingPolicy",
    DeleteScheduledAction = "application-autoscaling:DeleteScheduledAction",
    DeregisterScalableTarget = "application-autoscaling:DeregisterScalableTarget",
    DescribeScalableTargets = "application-autoscaling:DescribeScalableTargets",
    DescribeScalingActivities = "application-autoscaling:DescribeScalingActivities",
    DescribeScalingPolicies = "application-autoscaling:DescribeScalingPolicies",
    DescribeScheduledActions = "application-autoscaling:DescribeScheduledActions",
    PutScalingPolicy = "application-autoscaling:PutScalingPolicy",
    PutScheduledAction = "application-autoscaling:PutScheduledAction",
    RegisterScalableTarget = "application-autoscaling:RegisterScalableTarget"
}

/** Actions for Application Discovery
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationdiscovery.html
  */
export enum Discovery {
    AssociateConfigurationItemsToApplication = "discovery:AssociateConfigurationItemsToApplication",
    CreateApplication = "discovery:CreateApplication",
    CreateTags = "discovery:CreateTags",
    DeleteApplications = "discovery:DeleteApplications",
    DeleteTags = "discovery:DeleteTags",
    DescribeAgents = "discovery:DescribeAgents",
    DescribeConfigurations = "discovery:DescribeConfigurations",
    DescribeExportConfigurations = "discovery:DescribeExportConfigurations",
    DescribeTags = "discovery:DescribeTags",
    DisassociateConfigurationItemsFromApplication = "discovery:DisassociateConfigurationItemsFromApplication",
    ExportConfigurations = "discovery:ExportConfigurations",
    GetDiscoverySummary = "discovery:GetDiscoverySummary",
    ListConfigurations = "discovery:ListConfigurations",
    ListServerNeighbors = "discovery:ListServerNeighbors",
    StartDataCollectionByAgentIds = "discovery:StartDataCollectionByAgentIds",
    StartExportTask = "discovery:StartExportTask",
    StopDataCollectionByAgentIds = "discovery:StopDataCollectionByAgentIds",
    UpdateApplication = "discovery:UpdateApplication"
}

/** Actions for Auto Scaling
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_autoscaling.html
  */
export enum AutoScaling {
    AttachInstances = "autoscaling:AttachInstances",
    AttachLoadBalancerTargetGroups = "autoscaling:AttachLoadBalancerTargetGroups",
    AttachLoadBalancers = "autoscaling:AttachLoadBalancers",
    CompleteLifecycleAction = "autoscaling:CompleteLifecycleAction",
    CreateAutoScalingGroup = "autoscaling:CreateAutoScalingGroup",
    CreateLaunchConfiguration = "autoscaling:CreateLaunchConfiguration",
    CreateOrUpdateTags = "autoscaling:CreateOrUpdateTags",
    DeleteAutoScalingGroup = "autoscaling:DeleteAutoScalingGroup",
    DeleteLaunchConfiguration = "autoscaling:DeleteLaunchConfiguration",
    DeleteLifecycleHook = "autoscaling:DeleteLifecycleHook",
    DeleteNotificationConfiguration = "autoscaling:DeleteNotificationConfiguration",
    DeletePolicy = "autoscaling:DeletePolicy",
    DeleteScheduledAction = "autoscaling:DeleteScheduledAction",
    DeleteTags = "autoscaling:DeleteTags",
    DescribeAccountLimits = "autoscaling:DescribeAccountLimits",
    DescribeAdjustmentTypes = "autoscaling:DescribeAdjustmentTypes",
    DescribeAutoScalingGroups = "autoscaling:DescribeAutoScalingGroups",
    DescribeAutoScalingInstances = "autoscaling:DescribeAutoScalingInstances",
    DescribeAutoScalingNotificationTypes = "autoscaling:DescribeAutoScalingNotificationTypes",
    DescribeLaunchConfigurations = "autoscaling:DescribeLaunchConfigurations",
    DescribeLifecycleHookTypes = "autoscaling:DescribeLifecycleHookTypes",
    DescribeLifecycleHooks = "autoscaling:DescribeLifecycleHooks",
    DescribeLoadBalancerTargetGroups = "autoscaling:DescribeLoadBalancerTargetGroups",
    DescribeLoadBalancers = "autoscaling:DescribeLoadBalancers",
    DescribeMetricCollectionTypes = "autoscaling:DescribeMetricCollectionTypes",
    DescribeNotificationConfigurations = "autoscaling:DescribeNotificationConfigurations",
    DescribePolicies = "autoscaling:DescribePolicies",
    DescribeScalingActivities = "autoscaling:DescribeScalingActivities",
    DescribeScalingProcessTypes = "autoscaling:DescribeScalingProcessTypes",
    DescribeScheduledActions = "autoscaling:DescribeScheduledActions",
    DescribeTags = "autoscaling:DescribeTags",
    DescribeTerminationPolicyTypes = "autoscaling:DescribeTerminationPolicyTypes",
    DetachInstances = "autoscaling:DetachInstances",
    DetachLoadBalancerTargetGroups = "autoscaling:DetachLoadBalancerTargetGroups",
    DetachLoadBalancers = "autoscaling:DetachLoadBalancers",
    DisableMetricsCollection = "autoscaling:DisableMetricsCollection",
    EnableMetricsCollection = "autoscaling:EnableMetricsCollection",
    EnterStandby = "autoscaling:EnterStandby",
    ExecutePolicy = "autoscaling:ExecutePolicy",
    ExitStandby = "autoscaling:ExitStandby",
    PutLifecycleHook = "autoscaling:PutLifecycleHook",
    PutNotificationConfiguration = "autoscaling:PutNotificationConfiguration",
    PutScalingPolicy = "autoscaling:PutScalingPolicy",
    PutScheduledUpdateGroupAction = "autoscaling:PutScheduledUpdateGroupAction",
    RecordLifecycleActionHeartbeat = "autoscaling:RecordLifecycleActionHeartbeat",
    ResumeProcesses = "autoscaling:ResumeProcesses",
    SetDesiredCapacity = "autoscaling:SetDesiredCapacity",
    SetInstanceHealth = "autoscaling:SetInstanceHealth",
    SetInstanceProtection = "autoscaling:SetInstanceProtection",
    SuspendProcesses = "autoscaling:SuspendProcesses",
    TerminateInstanceInAutoScalingGroup = "autoscaling:TerminateInstanceInAutoScalingGroup",
    UpdateAutoScalingGroup = "autoscaling:UpdateAutoScalingGroup"
}

/** Actions for Auto Scaling Plans
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_autoscalingplans.html
  */
export enum AutoScalingPlans {
    CreateScalingPlan = "autoscaling-plans:CreateScalingPlan",
    DeleteScalingPlan = "autoscaling-plans:DeleteScalingPlan",
    DescribeScalingPlanResources = "autoscaling-plans:DescribeScalingPlanResources",
    DescribeScalingPlans = "autoscaling-plans:DescribeScalingPlans"
}

/** Actions for Data Pipeline
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_datapipeline.html
  */
export enum DataPipeline {
    ActivatePipeline = "datapipeline:ActivatePipeline",
    AddTags = "datapipeline:AddTags",
    CreatePipeline = "datapipeline:CreatePipeline",
    DeactivatePipeline = "datapipeline:DeactivatePipeline",
    DeletePipeline = "datapipeline:DeletePipeline",
    DescribeObjects = "datapipeline:DescribeObjects",
    DescribePipelines = "datapipeline:DescribePipelines",
    EvaluateExpression = "datapipeline:EvaluateExpression",
    GetAccountLimits = "datapipeline:GetAccountLimits",
    GetPipelineDefinition = "datapipeline:GetPipelineDefinition",
    ListPipelines = "datapipeline:ListPipelines",
    PollForTask = "datapipeline:PollForTask",
    PutAccountLimits = "datapipeline:PutAccountLimits",
    PutPipelineDefinition = "datapipeline:PutPipelineDefinition",
    QueryObjects = "datapipeline:QueryObjects",
    RemoveTags = "datapipeline:RemoveTags",
    ReportTaskProgress = "datapipeline:ReportTaskProgress",
    ReportTaskRunnerHeartbeat = "datapipeline:ReportTaskRunnerHeartbeat",
    SetStatus = "datapipeline:SetStatus",
    SetTaskStatus = "datapipeline:SetTaskStatus",
    ValidatePipelineDefinition = "datapipeline:ValidatePipelineDefinition"
}

/** Actions for Elastic Load Balancing
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancing.html
  */
export enum ElasticLoadBalancing {
    AddTags = "elasticloadbalancing:AddTags",
    ApplySecurityGroupsToLoadBalancer = "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",
    AttachLoadBalancerToSubnets = "elasticloadbalancing:AttachLoadBalancerToSubnets",
    ConfigureHealthCheck = "elasticloadbalancing:ConfigureHealthCheck",
    CreateAppCookieStickinessPolicy = "elasticloadbalancing:CreateAppCookieStickinessPolicy",
    CreateLBCookieStickinessPolicy = "elasticloadbalancing:CreateLBCookieStickinessPolicy",
    CreateLoadBalancer = "elasticloadbalancing:CreateLoadBalancer",
    CreateLoadBalancerListeners = "elasticloadbalancing:CreateLoadBalancerListeners",
    CreateLoadBalancerPolicy = "elasticloadbalancing:CreateLoadBalancerPolicy",
    DeleteLoadBalancer = "elasticloadbalancing:DeleteLoadBalancer",
    DeleteLoadBalancerListeners = "elasticloadbalancing:DeleteLoadBalancerListeners",
    DeleteLoadBalancerPolicy = "elasticloadbalancing:DeleteLoadBalancerPolicy",
    DeregisterInstancesFromLoadBalancer = "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",
    DescribeInstanceHealth = "elasticloadbalancing:DescribeInstanceHealth",
    DescribeLoadBalancerAttributes = "elasticloadbalancing:DescribeLoadBalancerAttributes",
    DescribeLoadBalancerPolicies = "elasticloadbalancing:DescribeLoadBalancerPolicies",
    DescribeLoadBalancerPolicyTypes = "elasticloadbalancing:DescribeLoadBalancerPolicyTypes",
    DescribeLoadBalancers = "elasticloadbalancing:DescribeLoadBalancers",
    DescribeTags = "elasticloadbalancing:DescribeTags",
    DetachLoadBalancerFromSubnets = "elasticloadbalancing:DetachLoadBalancerFromSubnets",
    DisableAvailabilityZonesForLoadBalancer = "elasticloadbalancing:DisableAvailabilityZonesForLoadBalancer",
    EnableAvailabilityZonesForLoadBalancer = "elasticloadbalancing:EnableAvailabilityZonesForLoadBalancer",
    ModifyLoadBalancerAttributes = "elasticloadbalancing:ModifyLoadBalancerAttributes",
    RegisterInstancesWithLoadBalancer = "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
    RemoveTags = "elasticloadbalancing:RemoveTags",
    SetLoadBalancerListenerSSLCertificate = "elasticloadbalancing:SetLoadBalancerListenerSSLCertificate",
    SetLoadBalancerPoliciesForBackendServer = "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer",
    SetLoadBalancerPoliciesOfListener = "elasticloadbalancing:SetLoadBalancerPoliciesOfListener"
}

/** Actions for Elastic Load Balancing V2
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancingv2.html
  */
export enum ElasticLoadBalancingV2 {
    AddTags = "elasticloadbalancing:AddTags",
    CreateListener = "elasticloadbalancing:CreateListener",
    CreateLoadBalancer = "elasticloadbalancing:CreateLoadBalancer",
    CreateRule = "elasticloadbalancing:CreateRule",
    CreateTargetGroup = "elasticloadbalancing:CreateTargetGroup",
    DeleteListener = "elasticloadbalancing:DeleteListener",
    DeleteLoadBalancer = "elasticloadbalancing:DeleteLoadBalancer",
    DeleteRule = "elasticloadbalancing:DeleteRule",
    DeleteTargetGroup = "elasticloadbalancing:DeleteTargetGroup",
    DeregisterTargets = "elasticloadbalancing:DeregisterTargets",
    DescribeListeners = "elasticloadbalancing:DescribeListeners",
    DescribeLoadBalancerAttributes = "elasticloadbalancing:DescribeLoadBalancerAttributes",
    DescribeLoadBalancers = "elasticloadbalancing:DescribeLoadBalancers",
    DescribeRules = "elasticloadbalancing:DescribeRules",
    DescribeSSLPolicies = "elasticloadbalancing:DescribeSSLPolicies",
    DescribeTags = "elasticloadbalancing:DescribeTags",
    DescribeTargetGroupAttributes = "elasticloadbalancing:DescribeTargetGroupAttributes",
    DescribeTargetGroups = "elasticloadbalancing:DescribeTargetGroups",
    DescribeTargetHealth = "elasticloadbalancing:DescribeTargetHealth",
    ModifyListener = "elasticloadbalancing:ModifyListener",
    ModifyLoadBalancerAttributes = "elasticloadbalancing:ModifyLoadBalancerAttributes",
    ModifyRule = "elasticloadbalancing:ModifyRule",
    ModifyTargetGroup = "elasticloadbalancing:ModifyTargetGroup",
    ModifyTargetGroupAttributes = "elasticloadbalancing:ModifyTargetGroupAttributes",
    RegisterTargets = "elasticloadbalancing:RegisterTargets",
    RemoveTags = "elasticloadbalancing:RemoveTags",
    SetIpAddressType = "elasticloadbalancing:SetIpAddressType",
    SetRulePriorities = "elasticloadbalancing:SetRulePriorities",
    SetSecurityGroups = "elasticloadbalancing:SetSecurityGroups",
    SetSubnets = "elasticloadbalancing:SetSubnets"
}

/** Actions for Identity And Access Management
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_identityandaccessmanagement.html
  */
export enum IAM {
    AddClientIDToOpenIDConnectProvider = "iam:AddClientIDToOpenIDConnectProvider",
    AddRoleToInstanceProfile = "iam:AddRoleToInstanceProfile",
    AddUserToGroup = "iam:AddUserToGroup",
    AttachGroupPolicy = "iam:AttachGroupPolicy",
    AttachRolePolicy = "iam:AttachRolePolicy",
    AttachUserPolicy = "iam:AttachUserPolicy",
    ChangePassword = "iam:ChangePassword",
    CreateAccessKey = "iam:CreateAccessKey",
    CreateAccountAlias = "iam:CreateAccountAlias",
    CreateGroup = "iam:CreateGroup",
    CreateInstanceProfile = "iam:CreateInstanceProfile",
    CreateLoginProfile = "iam:CreateLoginProfile",
    CreateOpenIDConnectProvider = "iam:CreateOpenIDConnectProvider",
    CreatePolicy = "iam:CreatePolicy",
    CreatePolicyVersion = "iam:CreatePolicyVersion",
    CreateRole = "iam:CreateRole",
    CreateSAMLProvider = "iam:CreateSAMLProvider",
    CreateServiceLinkedRole = "iam:CreateServiceLinkedRole",
    CreateServiceSpecificCredential = "iam:CreateServiceSpecificCredential",
    CreateUser = "iam:CreateUser",
    CreateVirtualMFADevice = "iam:CreateVirtualMFADevice",
    DeactivateMFADevice = "iam:DeactivateMFADevice",
    DeleteAccessKey = "iam:DeleteAccessKey",
    DeleteAccountAlias = "iam:DeleteAccountAlias",
    DeleteAccountPasswordPolicy = "iam:DeleteAccountPasswordPolicy",
    DeleteGroup = "iam:DeleteGroup",
    DeleteGroupPolicy = "iam:DeleteGroupPolicy",
    DeleteInstanceProfile = "iam:DeleteInstanceProfile",
    DeleteLoginProfile = "iam:DeleteLoginProfile",
    DeleteOpenIDConnectProvider = "iam:DeleteOpenIDConnectProvider",
    DeletePolicy = "iam:DeletePolicy",
    DeletePolicyVersion = "iam:DeletePolicyVersion",
    DeleteRole = "iam:DeleteRole",
    DeleteRolePolicy = "iam:DeleteRolePolicy",
    DeleteSAMLProvider = "iam:DeleteSAMLProvider",
    DeleteSSHPublicKey = "iam:DeleteSSHPublicKey",
    DeleteServerCertificate = "iam:DeleteServerCertificate",
    DeleteServiceLinkedRole = "iam:DeleteServiceLinkedRole",
    DeleteServiceSpecificCredential = "iam:DeleteServiceSpecificCredential",
    DeleteSigningCertificate = "iam:DeleteSigningCertificate",
    DeleteUser = "iam:DeleteUser",
    DeleteUserPolicy = "iam:DeleteUserPolicy",
    DeleteVirtualMFADevice = "iam:DeleteVirtualMFADevice",
    DetachGroupPolicy = "iam:DetachGroupPolicy",
    DetachRolePolicy = "iam:DetachRolePolicy",
    DetachUserPolicy = "iam:DetachUserPolicy",
    EnableMFADevice = "iam:EnableMFADevice",
    GenerateCredentialReport = "iam:GenerateCredentialReport",
    GenerateServiceLastAccessedDetails = "iam:GenerateServiceLastAccessedDetails",
    GetAccessKeyLastUsed = "iam:GetAccessKeyLastUsed",
    GetAccountAuthorizationDetails = "iam:GetAccountAuthorizationDetails",
    GetAccountPasswordPolicy = "iam:GetAccountPasswordPolicy",
    GetAccountSummary = "iam:GetAccountSummary",
    GetContextKeysForCustomPolicy = "iam:GetContextKeysForCustomPolicy",
    GetContextKeysForPrincipalPolicy = "iam:GetContextKeysForPrincipalPolicy",
    GetCredentialReport = "iam:GetCredentialReport",
    GetGroup = "iam:GetGroup",
    GetGroupPolicy = "iam:GetGroupPolicy",
    GetInstanceProfile = "iam:GetInstanceProfile",
    GetLoginProfile = "iam:GetLoginProfile",
    GetOpenIDConnectProvider = "iam:GetOpenIDConnectProvider",
    GetPolicy = "iam:GetPolicy",
    GetPolicyVersion = "iam:GetPolicyVersion",
    GetRole = "iam:GetRole",
    GetRolePolicy = "iam:GetRolePolicy",
    GetSAMLProvider = "iam:GetSAMLProvider",
    GetSSHPublicKey = "iam:GetSSHPublicKey",
    GetServerCertificate = "iam:GetServerCertificate",
    GetServiceLastAccessedDetails = "iam:GetServiceLastAccessedDetails",
    GetServiceLastAccessedDetailsWithEntities = "iam:GetServiceLastAccessedDetailsWithEntities",
    GetServiceLinkedRoleDeletionStatus = "iam:GetServiceLinkedRoleDeletionStatus",
    GetUser = "iam:GetUser",
    GetUserPolicy = "iam:GetUserPolicy",
    ListAccessKeys = "iam:ListAccessKeys",
    ListAccountAliases = "iam:ListAccountAliases",
    ListAttachedGroupPolicies = "iam:ListAttachedGroupPolicies",
    ListAttachedRolePolicies = "iam:ListAttachedRolePolicies",
    ListAttachedUserPolicies = "iam:ListAttachedUserPolicies",
    ListEntitiesForPolicy = "iam:ListEntitiesForPolicy",
    ListGroupPolicies = "iam:ListGroupPolicies",
    ListGroups = "iam:ListGroups",
    ListGroupsForUser = "iam:ListGroupsForUser",
    ListInstanceProfiles = "iam:ListInstanceProfiles",
    ListInstanceProfilesForRole = "iam:ListInstanceProfilesForRole",
    ListMFADevices = "iam:ListMFADevices",
    ListOpenIDConnectProviders = "iam:ListOpenIDConnectProviders",
    ListPolicies = "iam:ListPolicies",
    ListPoliciesGrantingServiceAccess = "iam:ListPoliciesGrantingServiceAccess",
    ListPolicyVersions = "iam:ListPolicyVersions",
    ListRolePolicies = "iam:ListRolePolicies",
    ListRoles = "iam:ListRoles",
    ListSAMLProviders = "iam:ListSAMLProviders",
    ListSSHPublicKeys = "iam:ListSSHPublicKeys",
    ListServerCertificates = "iam:ListServerCertificates",
    ListServiceSpecificCredentials = "iam:ListServiceSpecificCredentials",
    ListSigningCertificates = "iam:ListSigningCertificates",
    ListUserPolicies = "iam:ListUserPolicies",
    ListUsers = "iam:ListUsers",
    ListVirtualMFADevices = "iam:ListVirtualMFADevices",
    PassRole = "iam:PassRole",
    PutGroupPolicy = "iam:PutGroupPolicy",
    PutRolePolicy = "iam:PutRolePolicy",
    PutUserPolicy = "iam:PutUserPolicy",
    RemoveClientIDFromOpenIDConnectProvider = "iam:RemoveClientIDFromOpenIDConnectProvider",
    RemoveRoleFromInstanceProfile = "iam:RemoveRoleFromInstanceProfile",
    RemoveUserFromGroup = "iam:RemoveUserFromGroup",
    ResetServiceSpecificCredential = "iam:ResetServiceSpecificCredential",
    ResyncMFADevice = "iam:ResyncMFADevice",
    SetDefaultPolicyVersion = "iam:SetDefaultPolicyVersion",
    SimulateCustomPolicy = "iam:SimulateCustomPolicy",
    SimulatePrincipalPolicy = "iam:SimulatePrincipalPolicy",
    UpdateAccessKey = "iam:UpdateAccessKey",
    UpdateAccountPasswordPolicy = "iam:UpdateAccountPasswordPolicy",
    UpdateAssumeRolePolicy = "iam:UpdateAssumeRolePolicy",
    UpdateGroup = "iam:UpdateGroup",
    UpdateLoginProfile = "iam:UpdateLoginProfile",
    UpdateOpenIDConnectProviderThumbprint = "iam:UpdateOpenIDConnectProviderThumbprint",
    UpdateRoleDescription = "iam:UpdateRoleDescription",
    UpdateSAMLProvider = "iam:UpdateSAMLProvider",
    UpdateSSHPublicKey = "iam:UpdateSSHPublicKey",
    UpdateServerCertificate = "iam:UpdateServerCertificate",
    UpdateServiceSpecificCredential = "iam:UpdateServiceSpecificCredential",
    UpdateSigningCertificate = "iam:UpdateSigningCertificate",
    UpdateUser = "iam:UpdateUser",
    UploadSSHPublicKey = "iam:UploadSSHPublicKey",
    UploadServerCertificate = "iam:UploadServerCertificate",
    UploadSigningCertificate = "iam:UploadSigningCertificate"
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
    AssociateDirectory = "sso:AssociateDirectory",
    AssociateProfile = "sso:AssociateProfile",
    CreateApplicationInstance = "sso:CreateApplicationInstance",
    CreateApplicationInstanceCertificate = "sso:CreateApplicationInstanceCertificate",
    CreatePermissionSet = "sso:CreatePermissionSet",
    CreateProfile = "sso:CreateProfile",
    CreateTrust = "sso:CreateTrust",
    DeleteApplicationInstance = "sso:DeleteApplicationInstance",
    DeleteApplicationInstanceCertificate = "sso:DeleteApplicationInstanceCertificate",
    DeletePermissionSet = "sso:DeletePermissionSet",
    DeletePermissionsPolicy = "sso:DeletePermissionsPolicy",
    DeleteProfile = "sso:DeleteProfile",
    DescribePermissionsPolicies = "sso:DescribePermissionsPolicies",
    DisassociateDirectory = "sso:DisassociateDirectory",
    DisassociateProfile = "sso:DisassociateProfile",
    GetApplicationInstance = "sso:GetApplicationInstance",
    GetApplicationTemplate = "sso:GetApplicationTemplate",
    GetPermissionSet = "sso:GetPermissionSet",
    GetProfile = "sso:GetProfile",
    GetSSOStatus = "sso:GetSSOStatus",
    GetTrust = "sso:GetTrust",
    ImportApplicationInstanceServiceProviderMetadata = "sso:ImportApplicationInstanceServiceProviderMetadata",
    ListApplicationInstanceCertificates = "sso:ListApplicationInstanceCertificates",
    ListApplicationInstances = "sso:ListApplicationInstances",
    ListApplicationTemplates = "sso:ListApplicationTemplates",
    ListDirectoryAssociations = "sso:ListDirectoryAssociations",
    ListPermissionSets = "sso:ListPermissionSets",
    ListProfileAssociations = "sso:ListProfileAssociations",
    ListProfiles = "sso:ListProfiles",
    PutPermissionsPolicy = "sso:PutPermissionsPolicy",
    StartSSO = "sso:StartSSO",
    UpdateApplicationInstanceActiveCertificate = "sso:UpdateApplicationInstanceActiveCertificate",
    UpdateApplicationInstanceDisplayData = "sso:UpdateApplicationInstanceDisplayData",
    UpdateApplicationInstanceResponseConfiguration = "sso:UpdateApplicationInstanceResponseConfiguration",
    UpdateApplicationInstanceResponseSchemaConfiguration = "sso:UpdateApplicationInstanceResponseSchemaConfiguration",
    UpdateApplicationInstanceSecurityConfiguration = "sso:UpdateApplicationInstanceSecurityConfiguration",
    UpdateApplicationInstanceServiceProviderConfiguration = "sso:UpdateApplicationInstanceServiceProviderConfiguration",
    UpdateApplicationInstanceStatus = "sso:UpdateApplicationInstanceStatus",
    UpdateDirectoryAssociation = "sso:UpdateDirectoryAssociation",
    UpdateProfile = "sso:UpdateProfile",
    UpdateTrust = "sso:UpdateTrust"
}