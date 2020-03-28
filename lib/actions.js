"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Actions for AWS AppSync
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappsync.html
  */
var AppSync;
(function (AppSync) {
    AppSync["CreateApiKey"] = "appsync:CreateApiKey";
    AppSync["CreateDataSource"] = "appsync:CreateDataSource";
    AppSync["CreateGraphqlApi"] = "appsync:CreateGraphqlApi";
    AppSync["CreateResolver"] = "appsync:CreateResolver";
    AppSync["CreateType"] = "appsync:CreateType";
    AppSync["DeleteApiKey"] = "appsync:DeleteApiKey";
    AppSync["DeleteDataSource"] = "appsync:DeleteDataSource";
    AppSync["DeleteGraphqlApi"] = "appsync:DeleteGraphqlApi";
    AppSync["DeleteResolver"] = "appsync:DeleteResolver";
    AppSync["DeleteType"] = "appsync:DeleteType";
    AppSync["GetDataSource"] = "appsync:GetDataSource";
    AppSync["GetGraphqlApi"] = "appsync:GetGraphqlApi";
    AppSync["GetIntrospectionSchema"] = "appsync:GetIntrospectionSchema";
    AppSync["GetResolver"] = "appsync:GetResolver";
    AppSync["GetSchemaCreationStatus"] = "appsync:GetSchemaCreationStatus";
    AppSync["GetType"] = "appsync:GetType";
    AppSync["GraphQL"] = "appsync:GraphQL";
    AppSync["ListApiKeys"] = "appsync:ListApiKeys";
    AppSync["ListDataSources"] = "appsync:ListDataSources";
    AppSync["ListGraphqlApis"] = "appsync:ListGraphqlApis";
    AppSync["ListResolvers"] = "appsync:ListResolvers";
    AppSync["ListTypes"] = "appsync:ListTypes";
    AppSync["StartSchemaCreation"] = "appsync:StartSchemaCreation";
    AppSync["UpdateApiKey"] = "appsync:UpdateApiKey";
    AppSync["UpdateDataSource"] = "appsync:UpdateDataSource";
    AppSync["UpdateGraphqlApi"] = "appsync:UpdateGraphqlApi";
    AppSync["UpdateResolver"] = "appsync:UpdateResolver";
    AppSync["UpdateType"] = "appsync:UpdateType";
})(AppSync = exports.AppSync || (exports.AppSync = {}));
/** Actions for AWS Artifact
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsartifact.html
  */
var Artifact;
(function (Artifact) {
    Artifact["AcceptAgreement"] = "artifact:AcceptAgreement";
    Artifact["DownloadAgreement"] = "artifact:DownloadAgreement";
    Artifact["Get"] = "artifact:Get";
    Artifact["TerminateAgreement"] = "artifact:TerminateAgreement";
})(Artifact = exports.Artifact || (exports.Artifact = {}));
/** Actions for AWS Batch
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html
  */
var Batch;
(function (Batch) {
    Batch["CancelJob"] = "batch:CancelJob";
    Batch["CreateComputeEnvironment"] = "batch:CreateComputeEnvironment";
    Batch["CreateJobQueue"] = "batch:CreateJobQueue";
    Batch["DeleteComputeEnvironment"] = "batch:DeleteComputeEnvironment";
    Batch["DeleteJobQueue"] = "batch:DeleteJobQueue";
    Batch["DeregisterJobDefinition"] = "batch:DeregisterJobDefinition";
    Batch["DescribeComputeEnvironments"] = "batch:DescribeComputeEnvironments";
    Batch["DescribeJobDefinitions"] = "batch:DescribeJobDefinitions";
    Batch["DescribeJobQueues"] = "batch:DescribeJobQueues";
    Batch["DescribeJobs"] = "batch:DescribeJobs";
    Batch["ListJobs"] = "batch:ListJobs";
    Batch["RegisterJobDefinition"] = "batch:RegisterJobDefinition";
    Batch["SubmitJob"] = "batch:SubmitJob";
    Batch["TerminateJob"] = "batch:TerminateJob";
    Batch["UpdateComputeEnvironment"] = "batch:UpdateComputeEnvironment";
    Batch["UpdateJobQueue"] = "batch:UpdateJobQueue";
})(Batch = exports.Batch || (exports.Batch = {}));
/** Actions for AWS Billing
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbilling.html
  */
var AWSPortal;
(function (AWSPortal) {
    AWSPortal["ModifyAccount"] = "aws-portal:ModifyAccount";
    AWSPortal["ModifyBilling"] = "aws-portal:ModifyBilling";
    AWSPortal["ModifyPaymentMethods"] = "aws-portal:ModifyPaymentMethods";
    AWSPortal["ViewAccount"] = "aws-portal:ViewAccount";
    AWSPortal["ViewBilling"] = "aws-portal:ViewBilling";
    AWSPortal["ViewPaymentMethods"] = "aws-portal:ViewPaymentMethods";
    AWSPortal["ViewUsage"] = "aws-portal:ViewUsage";
})(AWSPortal = exports.AWSPortal || (exports.AWSPortal = {}));
/** Actions for AWS Budget Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbudgetservice.html
  */
var BudgetS;
(function (BudgetS) {
    BudgetS["ModifyBudget"] = "budgets:ModifyBudget";
    BudgetS["ViewBudget"] = "budgets:ViewBudget";
})(BudgetS = exports.BudgetS || (exports.BudgetS = {}));
/** Actions for AWS Certificate Manager
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscertificatemanager.html
  */
var ACM;
(function (ACM) {
    ACM["AddTagsToCertificate"] = "acm:AddTagsToCertificate";
    ACM["DeleteCertificate"] = "acm:DeleteCertificate";
    ACM["DescribeCertificate"] = "acm:DescribeCertificate";
    ACM["GetCertificate"] = "acm:GetCertificate";
    ACM["ImportCertificate"] = "acm:ImportCertificate";
    ACM["ListCertificates"] = "acm:ListCertificates";
    ACM["ListTagsForCertificate"] = "acm:ListTagsForCertificate";
    ACM["RemoveTagsFromCertificate"] = "acm:RemoveTagsFromCertificate";
    ACM["RequestCertificate"] = "acm:RequestCertificate";
    ACM["ResendValidationEmail"] = "acm:ResendValidationEmail";
})(ACM = exports.ACM || (exports.ACM = {}));
/** Actions for AWS Cloud9
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html
  */
var Cloud9;
(function (Cloud9) {
    Cloud9["CreateEnvironmentEC2"] = "cloud9:CreateEnvironmentEC2";
    Cloud9["CreateEnvironmentMembership"] = "cloud9:CreateEnvironmentMembership";
    Cloud9["CreateEnvironmentSSH"] = "cloud9:CreateEnvironmentSSH";
    Cloud9["DeleteEnvironment"] = "cloud9:DeleteEnvironment";
    Cloud9["DeleteEnvironmentMembership"] = "cloud9:DeleteEnvironmentMembership";
    Cloud9["DescribeEnvironmentMemberships"] = "cloud9:DescribeEnvironmentMemberships";
    Cloud9["DescribeEnvironmentStatus"] = "cloud9:DescribeEnvironmentStatus";
    Cloud9["DescribeEnvironments"] = "cloud9:DescribeEnvironments";
    Cloud9["GetUserPublicKey"] = "cloud9:GetUserPublicKey";
    Cloud9["ListEnvironments"] = "cloud9:ListEnvironments";
    Cloud9["UpdateEnvironment"] = "cloud9:UpdateEnvironment";
    Cloud9["UpdateEnvironmentMembership"] = "cloud9:UpdateEnvironmentMembership";
    Cloud9["ValidateEnvironmentName"] = "cloud9:ValidateEnvironmentName";
})(Cloud9 = exports.Cloud9 || (exports.Cloud9 = {}));
/** Actions for AWS CloudFormation
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudformation.html
  */
var CloudFormation;
(function (CloudFormation) {
    CloudFormation["CancelUpdateStack"] = "cloudformation:CancelUpdateStack";
    CloudFormation["ContinueUpdateRollback"] = "cloudformation:ContinueUpdateRollback";
    CloudFormation["CreateChangeSet"] = "cloudformation:CreateChangeSet";
    CloudFormation["CreateStack"] = "cloudformation:CreateStack";
    CloudFormation["CreateUploadBucket"] = "cloudformation:CreateUploadBucket";
    CloudFormation["DeleteChangeSet"] = "cloudformation:DeleteChangeSet";
    CloudFormation["DeleteStack"] = "cloudformation:DeleteStack";
    CloudFormation["DescribeAccountLimits"] = "cloudformation:DescribeAccountLimits";
    CloudFormation["DescribeChangeSet"] = "cloudformation:DescribeChangeSet";
    CloudFormation["DescribeStackEvents"] = "cloudformation:DescribeStackEvents";
    CloudFormation["DescribeStackResource"] = "cloudformation:DescribeStackResource";
    CloudFormation["DescribeStackResources"] = "cloudformation:DescribeStackResources";
    CloudFormation["DescribeStacks"] = "cloudformation:DescribeStacks";
    CloudFormation["EstimateTemplateCost"] = "cloudformation:EstimateTemplateCost";
    CloudFormation["ExecuteChangeSet"] = "cloudformation:ExecuteChangeSet";
    CloudFormation["GetStackPolicy"] = "cloudformation:GetStackPolicy";
    CloudFormation["GetTemplate"] = "cloudformation:GetTemplate";
    CloudFormation["GetTemplateSummary"] = "cloudformation:GetTemplateSummary";
    CloudFormation["ListChangeSets"] = "cloudformation:ListChangeSets";
    CloudFormation["ListExports"] = "cloudformation:ListExports";
    CloudFormation["ListImports"] = "cloudformation:ListImports";
    CloudFormation["ListStackResources"] = "cloudformation:ListStackResources";
    CloudFormation["ListStacks"] = "cloudformation:ListStacks";
    CloudFormation["PreviewStackUpdate"] = "cloudformation:PreviewStackUpdate";
    CloudFormation["SetStackPolicy"] = "cloudformation:SetStackPolicy";
    CloudFormation["SignalResource"] = "cloudformation:SignalResource";
    CloudFormation["UpdateStack"] = "cloudformation:UpdateStack";
    CloudFormation["UpdateTerminationProtection"] = "cloudformation:UpdateTerminationProtection";
    CloudFormation["ValidateTemplate"] = "cloudformation:ValidateTemplate";
})(CloudFormation = exports.CloudFormation || (exports.CloudFormation = {}));
/** Actions for AWS CloudHSM
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudhsm.html
  */
var CloudHSM;
(function (CloudHSM) {
    CloudHSM["AddTagsToResource"] = "cloudhsm:AddTagsToResource";
    CloudHSM["CreateHapg"] = "cloudhsm:CreateHapg";
    CloudHSM["CreateHsm"] = "cloudhsm:CreateHsm";
    CloudHSM["CreateLunaClient"] = "cloudhsm:CreateLunaClient";
    CloudHSM["DeleteHapg"] = "cloudhsm:DeleteHapg";
    CloudHSM["DeleteHsm"] = "cloudhsm:DeleteHsm";
    CloudHSM["DeleteLunaClient"] = "cloudhsm:DeleteLunaClient";
    CloudHSM["DescribeHapg"] = "cloudhsm:DescribeHapg";
    CloudHSM["DescribeHsm"] = "cloudhsm:DescribeHsm";
    CloudHSM["DescribeLunaClient"] = "cloudhsm:DescribeLunaClient";
    CloudHSM["GetConfig"] = "cloudhsm:GetConfig";
    CloudHSM["ListAvailableZones"] = "cloudhsm:ListAvailableZones";
    CloudHSM["ListHapgs"] = "cloudhsm:ListHapgs";
    CloudHSM["ListHsms"] = "cloudhsm:ListHsms";
    CloudHSM["ListLunaClients"] = "cloudhsm:ListLunaClients";
    CloudHSM["ListTagsForResource"] = "cloudhsm:ListTagsForResource";
    CloudHSM["ModifyHapg"] = "cloudhsm:ModifyHapg";
    CloudHSM["ModifyHsm"] = "cloudhsm:ModifyHsm";
    CloudHSM["ModifyLunaClient"] = "cloudhsm:ModifyLunaClient";
    CloudHSM["RemoveTagsFromResource"] = "cloudhsm:RemoveTagsFromResource";
})(CloudHSM = exports.CloudHSM || (exports.CloudHSM = {}));
/** Actions for AWS CloudTrail
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudtrail.html
  */
var CloudTrail;
(function (CloudTrail) {
    CloudTrail["AddTags"] = "cloudtrail:AddTags";
    CloudTrail["CreateTrail"] = "cloudtrail:CreateTrail";
    CloudTrail["DeleteTrail"] = "cloudtrail:DeleteTrail";
    CloudTrail["DescribeTrails"] = "cloudtrail:DescribeTrails";
    CloudTrail["GetEventSelectors"] = "cloudtrail:GetEventSelectors";
    CloudTrail["GetTrailStatus"] = "cloudtrail:GetTrailStatus";
    CloudTrail["ListPublicKeys"] = "cloudtrail:ListPublicKeys";
    CloudTrail["ListTags"] = "cloudtrail:ListTags";
    CloudTrail["LookupEvents"] = "cloudtrail:LookupEvents";
    CloudTrail["PutEventSelectors"] = "cloudtrail:PutEventSelectors";
    CloudTrail["RemoveTags"] = "cloudtrail:RemoveTags";
    CloudTrail["StartLogging"] = "cloudtrail:StartLogging";
    CloudTrail["StopLogging"] = "cloudtrail:StopLogging";
    CloudTrail["UpdateTrail"] = "cloudtrail:UpdateTrail";
})(CloudTrail = exports.CloudTrail || (exports.CloudTrail = {}));
/** Actions for AWS Code Signing for Amazon FreeRTOS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodesigningforamazonfreertos.html
  */
var Signer;
(function (Signer) {
    Signer["DescribeSigningJob"] = "signer:DescribeSigningJob";
    Signer["ListSigningJobs"] = "signer:ListSigningJobs";
    Signer["StartSigningJob"] = "signer:StartSigningJob";
})(Signer = exports.Signer || (exports.Signer = {}));
/** Actions for AWS CodeBuild
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodebuild.html
  */
var CodeBuild;
(function (CodeBuild) {
    CodeBuild["BatchDeleteBuilds"] = "codebuild:BatchDeleteBuilds";
    CodeBuild["BatchGetBuilds"] = "codebuild:BatchGetBuilds";
    CodeBuild["BatchGetProjects"] = "codebuild:BatchGetProjects";
    CodeBuild["CreateProject"] = "codebuild:CreateProject";
    CodeBuild["DeleteProject"] = "codebuild:DeleteProject";
    CodeBuild["ListBuilds"] = "codebuild:ListBuilds";
    CodeBuild["ListBuildsForProject"] = "codebuild:ListBuildsForProject";
    CodeBuild["ListConnectedOAuthAccounts"] = "codebuild:ListConnectedOAuthAccounts";
    CodeBuild["ListCuratedEnvironmentImages"] = "codebuild:ListCuratedEnvironmentImages";
    CodeBuild["ListProjects"] = "codebuild:ListProjects";
    CodeBuild["ListRepositories"] = "codebuild:ListRepositories";
    CodeBuild["PersistOAuthToken"] = "codebuild:PersistOAuthToken";
    CodeBuild["StartBuild"] = "codebuild:StartBuild";
    CodeBuild["StopBuild"] = "codebuild:StopBuild";
    CodeBuild["UpdateProject"] = "codebuild:UpdateProject";
})(CodeBuild = exports.CodeBuild || (exports.CodeBuild = {}));
/** Actions for AWS CodeCommit
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodecommit.html
  */
var CodeCommit;
(function (CodeCommit) {
    CodeCommit["BatchGetPullRequests"] = "codecommit:BatchGetPullRequests";
    CodeCommit["BatchGetRepositories"] = "codecommit:BatchGetRepositories";
    CodeCommit["CancelUploadArchive"] = "codecommit:CancelUploadArchive";
    CodeCommit["CreateBranch"] = "codecommit:CreateBranch";
    CodeCommit["CreatePullRequest"] = "codecommit:CreatePullRequest";
    CodeCommit["CreateRepository"] = "codecommit:CreateRepository";
    CodeCommit["DeleteBranch"] = "codecommit:DeleteBranch";
    CodeCommit["DeleteCommentContent"] = "codecommit:DeleteCommentContent";
    CodeCommit["DeleteRepository"] = "codecommit:DeleteRepository";
    CodeCommit["DescribePullRequestEvents"] = "codecommit:DescribePullRequestEvents";
    CodeCommit["GetBlob"] = "codecommit:GetBlob";
    CodeCommit["GetBranch"] = "codecommit:GetBranch";
    CodeCommit["GetComment"] = "codecommit:GetComment";
    CodeCommit["GetCommentsForComparedCommit"] = "codecommit:GetCommentsForComparedCommit";
    CodeCommit["GetCommentsForPullRequest"] = "codecommit:GetCommentsForPullRequest";
    CodeCommit["GetCommit"] = "codecommit:GetCommit";
    CodeCommit["GetCommitHistory"] = "codecommit:GetCommitHistory";
    CodeCommit["GetCommitsFromMergeBase"] = "codecommit:GetCommitsFromMergeBase";
    CodeCommit["GetDifferences"] = "codecommit:GetDifferences";
    CodeCommit["GetMergeConflicts"] = "codecommit:GetMergeConflicts";
    CodeCommit["GetObjectIdentifier"] = "codecommit:GetObjectIdentifier";
    CodeCommit["GetPullRequest"] = "codecommit:GetPullRequest";
    CodeCommit["GetReferences"] = "codecommit:GetReferences";
    CodeCommit["GetRepository"] = "codecommit:GetRepository";
    CodeCommit["GetRepositoryTriggers"] = "codecommit:GetRepositoryTriggers";
    CodeCommit["GetTree"] = "codecommit:GetTree";
    CodeCommit["GetUploadArchiveStatus"] = "codecommit:GetUploadArchiveStatus";
    CodeCommit["GitPull"] = "codecommit:GitPull";
    CodeCommit["GitPush"] = "codecommit:GitPush";
    CodeCommit["ListBranches"] = "codecommit:ListBranches";
    CodeCommit["ListPullRequests"] = "codecommit:ListPullRequests";
    CodeCommit["ListRepositories"] = "codecommit:ListRepositories";
    CodeCommit["MergePullRequestByFastForward"] = "codecommit:MergePullRequestByFastForward";
    CodeCommit["PostCommentForComparedCommit"] = "codecommit:PostCommentForComparedCommit";
    CodeCommit["PostCommentForPullRequest"] = "codecommit:PostCommentForPullRequest";
    CodeCommit["PostCommentReply"] = "codecommit:PostCommentReply";
    CodeCommit["PutFile"] = "codecommit:PutFile";
    CodeCommit["PutRepositoryTriggers"] = "codecommit:PutRepositoryTriggers";
    CodeCommit["TestRepositoryTriggers"] = "codecommit:TestRepositoryTriggers";
    CodeCommit["UpdateComment"] = "codecommit:UpdateComment";
    CodeCommit["UpdateDefaultBranch"] = "codecommit:UpdateDefaultBranch";
    CodeCommit["UpdatePullRequestDescription"] = "codecommit:UpdatePullRequestDescription";
    CodeCommit["UpdatePullRequestStatus"] = "codecommit:UpdatePullRequestStatus";
    CodeCommit["UpdatePullRequestTitle"] = "codecommit:UpdatePullRequestTitle";
    CodeCommit["UpdateRepositoryDescription"] = "codecommit:UpdateRepositoryDescription";
    CodeCommit["UpdateRepositoryName"] = "codecommit:UpdateRepositoryName";
    CodeCommit["UploadArchive"] = "codecommit:UploadArchive";
})(CodeCommit = exports.CodeCommit || (exports.CodeCommit = {}));
/** Actions for AWS CodeDeploy
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodedeploy.html
  */
var CodeDeploy;
(function (CodeDeploy) {
    CodeDeploy["AddTagsToOnPremisesInstances"] = "codedeploy:AddTagsToOnPremisesInstances";
    CodeDeploy["BatchGetApplicationRevisions"] = "codedeploy:BatchGetApplicationRevisions";
    CodeDeploy["BatchGetApplications"] = "codedeploy:BatchGetApplications";
    CodeDeploy["BatchGetDeploymentGroups"] = "codedeploy:BatchGetDeploymentGroups";
    CodeDeploy["BatchGetDeploymentInstances"] = "codedeploy:BatchGetDeploymentInstances";
    CodeDeploy["BatchGetDeployments"] = "codedeploy:BatchGetDeployments";
    CodeDeploy["BatchGetOnPremisesInstances"] = "codedeploy:BatchGetOnPremisesInstances";
    CodeDeploy["ContinueDeployment"] = "codedeploy:ContinueDeployment";
    CodeDeploy["CreateApplication"] = "codedeploy:CreateApplication";
    CodeDeploy["CreateDeployment"] = "codedeploy:CreateDeployment";
    CodeDeploy["CreateDeploymentConfig"] = "codedeploy:CreateDeploymentConfig";
    CodeDeploy["CreateDeploymentGroup"] = "codedeploy:CreateDeploymentGroup";
    CodeDeploy["DeleteApplication"] = "codedeploy:DeleteApplication";
    CodeDeploy["DeleteDeploymentConfig"] = "codedeploy:DeleteDeploymentConfig";
    CodeDeploy["DeleteDeploymentGroup"] = "codedeploy:DeleteDeploymentGroup";
    CodeDeploy["DeregisterOnPremisesInstance"] = "codedeploy:DeregisterOnPremisesInstance";
    CodeDeploy["GetApplication"] = "codedeploy:GetApplication";
    CodeDeploy["GetApplicationRevision"] = "codedeploy:GetApplicationRevision";
    CodeDeploy["GetDeployment"] = "codedeploy:GetDeployment";
    CodeDeploy["GetDeploymentConfig"] = "codedeploy:GetDeploymentConfig";
    CodeDeploy["GetDeploymentGroup"] = "codedeploy:GetDeploymentGroup";
    CodeDeploy["GetDeploymentInstance"] = "codedeploy:GetDeploymentInstance";
    CodeDeploy["GetOnPremisesInstance"] = "codedeploy:GetOnPremisesInstance";
    CodeDeploy["ListApplicationRevisions"] = "codedeploy:ListApplicationRevisions";
    CodeDeploy["ListApplications"] = "codedeploy:ListApplications";
    CodeDeploy["ListDeploymentConfigs"] = "codedeploy:ListDeploymentConfigs";
    CodeDeploy["ListDeploymentGroups"] = "codedeploy:ListDeploymentGroups";
    CodeDeploy["ListDeploymentInstances"] = "codedeploy:ListDeploymentInstances";
    CodeDeploy["ListDeployments"] = "codedeploy:ListDeployments";
    CodeDeploy["ListOnPremisesInstances"] = "codedeploy:ListOnPremisesInstances";
    CodeDeploy["RegisterApplicationRevision"] = "codedeploy:RegisterApplicationRevision";
    CodeDeploy["RegisterOnPremisesInstance"] = "codedeploy:RegisterOnPremisesInstance";
    CodeDeploy["RemoveTagsFromOnPremisesInstances"] = "codedeploy:RemoveTagsFromOnPremisesInstances";
    CodeDeploy["StopDeployment"] = "codedeploy:StopDeployment";
    CodeDeploy["UpdateApplication"] = "codedeploy:UpdateApplication";
    CodeDeploy["UpdateDeploymentGroup"] = "codedeploy:UpdateDeploymentGroup";
})(CodeDeploy = exports.CodeDeploy || (exports.CodeDeploy = {}));
/** Actions for AWS CodePipeline
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodepipeline.html
  */
var CodePipeline;
(function (CodePipeline) {
    CodePipeline["AcknowledgeJob"] = "codepipeline:AcknowledgeJob";
    CodePipeline["AcknowledgeThirdPartyJob"] = "codepipeline:AcknowledgeThirdPartyJob";
    CodePipeline["CreateCustomActionType"] = "codepipeline:CreateCustomActionType";
    CodePipeline["CreatePipeline"] = "codepipeline:CreatePipeline";
    CodePipeline["DeleteCustomActionType"] = "codepipeline:DeleteCustomActionType";
    CodePipeline["DeletePipeline"] = "codepipeline:DeletePipeline";
    CodePipeline["DisableStageTransition"] = "codepipeline:DisableStageTransition";
    CodePipeline["EnableStageTransition"] = "codepipeline:EnableStageTransition";
    CodePipeline["GetJobDetails"] = "codepipeline:GetJobDetails";
    CodePipeline["GetPipeline"] = "codepipeline:GetPipeline";
    CodePipeline["GetPipelineExecution"] = "codepipeline:GetPipelineExecution";
    CodePipeline["GetPipelineState"] = "codepipeline:GetPipelineState";
    CodePipeline["GetThirdPartyJobDetails"] = "codepipeline:GetThirdPartyJobDetails";
    CodePipeline["ListActionTypes"] = "codepipeline:ListActionTypes";
    CodePipeline["ListPipelineExecutions"] = "codepipeline:ListPipelineExecutions";
    CodePipeline["ListPipelines"] = "codepipeline:ListPipelines";
    CodePipeline["PollForJobs"] = "codepipeline:PollForJobs";
    CodePipeline["PollForThirdPartyJobs"] = "codepipeline:PollForThirdPartyJobs";
    CodePipeline["PutActionRevision"] = "codepipeline:PutActionRevision";
    CodePipeline["PutApprovalResult"] = "codepipeline:PutApprovalResult";
    CodePipeline["PutJobFailureResult"] = "codepipeline:PutJobFailureResult";
    CodePipeline["PutJobSuccessResult"] = "codepipeline:PutJobSuccessResult";
    CodePipeline["PutThirdPartyJobFailureResult"] = "codepipeline:PutThirdPartyJobFailureResult";
    CodePipeline["PutThirdPartyJobSuccessResult"] = "codepipeline:PutThirdPartyJobSuccessResult";
    CodePipeline["RetryStageExecution"] = "codepipeline:RetryStageExecution";
    CodePipeline["StartPipelineExecution"] = "codepipeline:StartPipelineExecution";
    CodePipeline["UpdatePipeline"] = "codepipeline:UpdatePipeline";
})(CodePipeline = exports.CodePipeline || (exports.CodePipeline = {}));
/** Actions for AWS CodeStar
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestar.html
  */
var CodeStar;
(function (CodeStar) {
    CodeStar["AssociateTeamMember"] = "codestar:AssociateTeamMember";
    CodeStar["CreateProject"] = "codestar:CreateProject";
    CodeStar["CreateUserProfile"] = "codestar:CreateUserProfile";
    CodeStar["DeleteExtendedAccess"] = "codestar:DeleteExtendedAccess";
    CodeStar["DeleteProject"] = "codestar:DeleteProject";
    CodeStar["DeleteUserProfile"] = "codestar:DeleteUserProfile";
    CodeStar["DescribeProject"] = "codestar:DescribeProject";
    CodeStar["DescribeUserProfile"] = "codestar:DescribeUserProfile";
    CodeStar["DisassociateTeamMember"] = "codestar:DisassociateTeamMember";
    CodeStar["GetExtendedAccess"] = "codestar:GetExtendedAccess";
    CodeStar["ListProjects"] = "codestar:ListProjects";
    CodeStar["ListResources"] = "codestar:ListResources";
    CodeStar["ListTeamMembers"] = "codestar:ListTeamMembers";
    CodeStar["ListUserProfiles"] = "codestar:ListUserProfiles";
    CodeStar["PutExtendedAccess"] = "codestar:PutExtendedAccess";
    CodeStar["UpdateProject"] = "codestar:UpdateProject";
    CodeStar["UpdateTeamMember"] = "codestar:UpdateTeamMember";
    CodeStar["UpdateUserProfile"] = "codestar:UpdateUserProfile";
    CodeStar["VerifyServiceRole"] = "codestar:VerifyServiceRole";
})(CodeStar = exports.CodeStar || (exports.CodeStar = {}));
/** Actions for AWS Config
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsconfig.html
  */
var Config;
(function (Config) {
    Config["DeleteConfigRule"] = "config:DeleteConfigRule";
    Config["DeleteConfigurationRecorder"] = "config:DeleteConfigurationRecorder";
    Config["DeleteDeliveryChannel"] = "config:DeleteDeliveryChannel";
    Config["DeleteEvaluationResults"] = "config:DeleteEvaluationResults";
    Config["DeliverConfigSnapshot"] = "config:DeliverConfigSnapshot";
    Config["DescribeComplianceByConfigRule"] = "config:DescribeComplianceByConfigRule";
    Config["DescribeComplianceByResource"] = "config:DescribeComplianceByResource";
    Config["DescribeConfigRuleEvaluationStatus"] = "config:DescribeConfigRuleEvaluationStatus";
    Config["DescribeConfigRules"] = "config:DescribeConfigRules";
    Config["DescribeConfigurationRecorderStatus"] = "config:DescribeConfigurationRecorderStatus";
    Config["DescribeConfigurationRecorders"] = "config:DescribeConfigurationRecorders";
    Config["DescribeDeliveryChannelStatus"] = "config:DescribeDeliveryChannelStatus";
    Config["DescribeDeliveryChannels"] = "config:DescribeDeliveryChannels";
    Config["GetComplianceDetailsByConfigRule"] = "config:GetComplianceDetailsByConfigRule";
    Config["GetComplianceDetailsByResource"] = "config:GetComplianceDetailsByResource";
    Config["GetComplianceSummaryByConfigRule"] = "config:GetComplianceSummaryByConfigRule";
    Config["GetComplianceSummaryByResourceType"] = "config:GetComplianceSummaryByResourceType";
    Config["GetResourceConfigHistory"] = "config:GetResourceConfigHistory";
    Config["GetResources"] = "config:GetResources";
    Config["GetTagKeys"] = "config:GetTagKeys";
    Config["ListDiscoveredResources"] = "config:ListDiscoveredResources";
    Config["PutConfigRule"] = "config:PutConfigRule";
    Config["PutConfigurationRecorder"] = "config:PutConfigurationRecorder";
    Config["PutDeliveryChannel"] = "config:PutDeliveryChannel";
    Config["PutEvaluations"] = "config:PutEvaluations";
    Config["StartConfigRulesEvaluation"] = "config:StartConfigRulesEvaluation";
    Config["StartConfigurationRecorder"] = "config:StartConfigurationRecorder";
    Config["StopConfigurationRecorder"] = "config:StopConfigurationRecorder";
})(Config = exports.Config || (exports.Config = {}));
/** Actions for AWS Cost Explorer Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscostexplorerservice.html
  */
var ce;
(function (ce) {
    ce["GetCostAndUsage"] = "ce:GetCostAndUsage";
    ce["GetDimensionValues"] = "ce:GetDimensionValues";
    ce["GetReservationUtilization"] = "ce:GetReservationUtilization";
    ce["GetTags"] = "ce:GetTags";
})(ce = exports.ce || (exports.ce = {}));
/** Actions for AWS Cost and Usage Report
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscostandusagereport.html
  */
var CUR;
(function (CUR) {
    CUR["DeleteReportDefinition"] = "cur:DeleteReportDefinition";
    CUR["DescribeReportDefinitions"] = "cur:DescribeReportDefinitions";
    CUR["PutReportDefinition"] = "cur:PutReportDefinition";
})(CUR = exports.CUR || (exports.CUR = {}));
/** Actions for AWS Database Migration Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdatabasemigrationservice.html
  */
var DMS;
(function (DMS) {
    DMS["AddTagsToResource"] = "dms:AddTagsToResource";
    DMS["CreateEndpoint"] = "dms:CreateEndpoint";
    DMS["CreateReplicationInstance"] = "dms:CreateReplicationInstance";
    DMS["CreateReplicationSubnetGroup"] = "dms:CreateReplicationSubnetGroup";
    DMS["CreateReplicationTask"] = "dms:CreateReplicationTask";
    DMS["DeleteEndpoint"] = "dms:DeleteEndpoint";
    DMS["DeleteEventSubscription"] = "dms:DeleteEventSubscription";
    DMS["DeleteReplicationInstance"] = "dms:DeleteReplicationInstance";
    DMS["DeleteReplicationSubnetGroup"] = "dms:DeleteReplicationSubnetGroup";
    DMS["DeleteReplicationTask"] = "dms:DeleteReplicationTask";
    DMS["DescribeAccountAttributes"] = "dms:DescribeAccountAttributes";
    DMS["DescribeCertificates"] = "dms:DescribeCertificates";
    DMS["DescribeConnections"] = "dms:DescribeConnections";
    DMS["DescribeEndpointTypes"] = "dms:DescribeEndpointTypes";
    DMS["DescribeEndpoints"] = "dms:DescribeEndpoints";
    DMS["DescribeEventCategories"] = "dms:DescribeEventCategories";
    DMS["DescribeEventSubscriptions"] = "dms:DescribeEventSubscriptions";
    DMS["DescribeEvents"] = "dms:DescribeEvents";
    DMS["DescribeOrderableReplicationInstances"] = "dms:DescribeOrderableReplicationInstances";
    DMS["DescribeRefreshSchemasStatus"] = "dms:DescribeRefreshSchemasStatus";
    DMS["DescribeReplicationInstances"] = "dms:DescribeReplicationInstances";
    DMS["DescribeReplicationSubnetGroups"] = "dms:DescribeReplicationSubnetGroups";
    DMS["DescribeReplicationTasks"] = "dms:DescribeReplicationTasks";
    DMS["DescribeSchemas"] = "dms:DescribeSchemas";
    DMS["DescribeTableStatistics"] = "dms:DescribeTableStatistics";
    DMS["ListTagsForResource"] = "dms:ListTagsForResource";
    DMS["ModifyEndpoint"] = "dms:ModifyEndpoint";
    DMS["ModifyEventSubscription"] = "dms:ModifyEventSubscription";
    DMS["ModifyReplicationInstance"] = "dms:ModifyReplicationInstance";
    DMS["ModifyReplicationSubnetGroup"] = "dms:ModifyReplicationSubnetGroup";
    DMS["ModifyReplicationTask"] = "dms:ModifyReplicationTask";
    DMS["RefreshSchemas"] = "dms:RefreshSchemas";
    DMS["RemoveTagsFromResource"] = "dms:RemoveTagsFromResource";
    DMS["StartReplicationTask"] = "dms:StartReplicationTask";
    DMS["StopReplicationTask"] = "dms:StopReplicationTask";
    DMS["TestConnection"] = "dms:TestConnection";
})(DMS = exports.DMS || (exports.DMS = {}));
/** Actions for AWS Device Farm
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdevicefarm.html
  */
var DeviceFarm;
(function (DeviceFarm) {
    DeviceFarm["CreateDevicePool"] = "devicefarm:CreateDevicePool";
    DeviceFarm["CreateNetworkProfile"] = "devicefarm:CreateNetworkProfile";
    DeviceFarm["CreateProject"] = "devicefarm:CreateProject";
    DeviceFarm["CreateRemoteAccessSession"] = "devicefarm:CreateRemoteAccessSession";
    DeviceFarm["CreateUpload"] = "devicefarm:CreateUpload";
    DeviceFarm["DeleteDevicePool"] = "devicefarm:DeleteDevicePool";
    DeviceFarm["DeleteNetworkProfile"] = "devicefarm:DeleteNetworkProfile";
    DeviceFarm["DeleteProject"] = "devicefarm:DeleteProject";
    DeviceFarm["DeleteRemoteAccessSession"] = "devicefarm:DeleteRemoteAccessSession";
    DeviceFarm["DeleteRun"] = "devicefarm:DeleteRun";
    DeviceFarm["DeleteUpload"] = "devicefarm:DeleteUpload";
    DeviceFarm["GetAccountSettings"] = "devicefarm:GetAccountSettings";
    DeviceFarm["GetDevice"] = "devicefarm:GetDevice";
    DeviceFarm["GetDevicePool"] = "devicefarm:GetDevicePool";
    DeviceFarm["GetDevicePoolCompatibility"] = "devicefarm:GetDevicePoolCompatibility";
    DeviceFarm["GetJob"] = "devicefarm:GetJob";
    DeviceFarm["GetNetworkProfile"] = "devicefarm:GetNetworkProfile";
    DeviceFarm["GetOfferingStatus"] = "devicefarm:GetOfferingStatus";
    DeviceFarm["GetProject"] = "devicefarm:GetProject";
    DeviceFarm["GetRemoteAccessSession"] = "devicefarm:GetRemoteAccessSession";
    DeviceFarm["GetRun"] = "devicefarm:GetRun";
    DeviceFarm["GetSuite"] = "devicefarm:GetSuite";
    DeviceFarm["GetTest"] = "devicefarm:GetTest";
    DeviceFarm["GetUpload"] = "devicefarm:GetUpload";
    DeviceFarm["InstallToRemoteAccessSession"] = "devicefarm:InstallToRemoteAccessSession";
    DeviceFarm["ListArtifacts"] = "devicefarm:ListArtifacts";
    DeviceFarm["ListDevicePools"] = "devicefarm:ListDevicePools";
    DeviceFarm["ListDevices"] = "devicefarm:ListDevices";
    DeviceFarm["ListJobs"] = "devicefarm:ListJobs";
    DeviceFarm["ListNetworkProfiles"] = "devicefarm:ListNetworkProfiles";
    DeviceFarm["ListOfferingTransactions"] = "devicefarm:ListOfferingTransactions";
    DeviceFarm["ListOfferings"] = "devicefarm:ListOfferings";
    DeviceFarm["ListProjects"] = "devicefarm:ListProjects";
    DeviceFarm["ListRemoteAccessSessions"] = "devicefarm:ListRemoteAccessSessions";
    DeviceFarm["ListRuns"] = "devicefarm:ListRuns";
    DeviceFarm["ListSamples"] = "devicefarm:ListSamples";
    DeviceFarm["ListSuites"] = "devicefarm:ListSuites";
    DeviceFarm["ListTests"] = "devicefarm:ListTests";
    DeviceFarm["ListUniqueProblems"] = "devicefarm:ListUniqueProblems";
    DeviceFarm["ListUploads"] = "devicefarm:ListUploads";
    DeviceFarm["PurchaseOffering"] = "devicefarm:PurchaseOffering";
    DeviceFarm["RenewOffering"] = "devicefarm:RenewOffering";
    DeviceFarm["ScheduleRun"] = "devicefarm:ScheduleRun";
    DeviceFarm["StopRemoteAccessSession"] = "devicefarm:StopRemoteAccessSession";
    DeviceFarm["StopRun"] = "devicefarm:StopRun";
    DeviceFarm["UpdateDevicePool"] = "devicefarm:UpdateDevicePool";
    DeviceFarm["UpdateNetworkProfile"] = "devicefarm:UpdateNetworkProfile";
    DeviceFarm["UpdateProject"] = "devicefarm:UpdateProject";
})(DeviceFarm = exports.DeviceFarm || (exports.DeviceFarm = {}));
/** Actions for AWS Direct Connect
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdirectconnect.html
  */
var DirectConnect;
(function (DirectConnect) {
    DirectConnect["AllocateConnectionOnInterconnect"] = "directconnect:AllocateConnectionOnInterconnect";
    DirectConnect["AllocatePrivateVirtualInterface"] = "directconnect:AllocatePrivateVirtualInterface";
    DirectConnect["AllocatePublicVirtualInterface"] = "directconnect:AllocatePublicVirtualInterface";
    DirectConnect["ConfirmConnection"] = "directconnect:ConfirmConnection";
    DirectConnect["ConfirmPrivateVirtualInterface"] = "directconnect:ConfirmPrivateVirtualInterface";
    DirectConnect["ConfirmPublicVirtualInterface"] = "directconnect:ConfirmPublicVirtualInterface";
    DirectConnect["CreateConnection"] = "directconnect:CreateConnection";
    DirectConnect["CreateInterconnect"] = "directconnect:CreateInterconnect";
    DirectConnect["CreatePrivateVirtualInterface"] = "directconnect:CreatePrivateVirtualInterface";
    DirectConnect["CreatePublicVirtualInterface"] = "directconnect:CreatePublicVirtualInterface";
    DirectConnect["DeleteConnection"] = "directconnect:DeleteConnection";
    DirectConnect["DeleteInterconnect"] = "directconnect:DeleteInterconnect";
    DirectConnect["DeleteVirtualInterface"] = "directconnect:DeleteVirtualInterface";
    DirectConnect["DescribeConnectionLoa"] = "directconnect:DescribeConnectionLoa";
    DirectConnect["DescribeConnections"] = "directconnect:DescribeConnections";
    DirectConnect["DescribeConnectionsOnInterconnect"] = "directconnect:DescribeConnectionsOnInterconnect";
    DirectConnect["DescribeInterconnectLoa"] = "directconnect:DescribeInterconnectLoa";
    DirectConnect["DescribeInterconnects"] = "directconnect:DescribeInterconnects";
    DirectConnect["DescribeLocations"] = "directconnect:DescribeLocations";
    DirectConnect["DescribeVirtualGateways"] = "directconnect:DescribeVirtualGateways";
    DirectConnect["DescribeVirtualInterfaces"] = "directconnect:DescribeVirtualInterfaces";
})(DirectConnect = exports.DirectConnect || (exports.DirectConnect = {}));
/** Actions for AWS Directory Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdirectoryservice.html
  */
var DS;
(function (DS) {
    DS["AddIpRoutes"] = "ds:AddIpRoutes";
    DS["AddTagsToResource"] = "ds:AddTagsToResource";
    DS["AuthorizeApplication"] = "ds:AuthorizeApplication";
    DS["CancelSchemaExtension"] = "ds:CancelSchemaExtension";
    DS["ConnectDirectory"] = "ds:ConnectDirectory";
    DS["CreateAlias"] = "ds:CreateAlias";
    DS["CreateComputer"] = "ds:CreateComputer";
    DS["CreateConditionalForwarder"] = "ds:CreateConditionalForwarder";
    DS["CreateDirectory"] = "ds:CreateDirectory";
    DS["CreateMicrosoftAD"] = "ds:CreateMicrosoftAD";
    DS["CreateSnapshot"] = "ds:CreateSnapshot";
    DS["CreateTrust"] = "ds:CreateTrust";
    DS["DeleteConditionalForwarder"] = "ds:DeleteConditionalForwarder";
    DS["DeleteDirectory"] = "ds:DeleteDirectory";
    DS["DeleteSnapshot"] = "ds:DeleteSnapshot";
    DS["DeleteTrust"] = "ds:DeleteTrust";
    DS["DeregisterEventTopic"] = "ds:DeregisterEventTopic";
    DS["DescribeConditionalForwarders"] = "ds:DescribeConditionalForwarders";
    DS["DescribeDirectories"] = "ds:DescribeDirectories";
    DS["DescribeEventTopics"] = "ds:DescribeEventTopics";
    DS["DescribeSnapshots"] = "ds:DescribeSnapshots";
    DS["DescribeTrusts"] = "ds:DescribeTrusts";
    DS["DisableRadius"] = "ds:DisableRadius";
    DS["DisableSso"] = "ds:DisableSso";
    DS["EnableRadius"] = "ds:EnableRadius";
    DS["EnableSso"] = "ds:EnableSso";
    DS["GetDirectoryLimits"] = "ds:GetDirectoryLimits";
    DS["GetSnapshotLimits"] = "ds:GetSnapshotLimits";
    DS["ListAuthorizedApplications"] = "ds:ListAuthorizedApplications";
    DS["ListIpRoutes"] = "ds:ListIpRoutes";
    DS["ListSchemaExtensions"] = "ds:ListSchemaExtensions";
    DS["ListTagsForResource"] = "ds:ListTagsForResource";
    DS["RegisterEventTopic"] = "ds:RegisterEventTopic";
    DS["RemoveIpRoutes"] = "ds:RemoveIpRoutes";
    DS["RemoveTagsFromResource"] = "ds:RemoveTagsFromResource";
    DS["RestoreFromSnapshot"] = "ds:RestoreFromSnapshot";
    DS["StartSchemaExtension"] = "ds:StartSchemaExtension";
    DS["UnauthorizeApplication"] = "ds:UnauthorizeApplication";
    DS["UpdateConditionalForwarder"] = "ds:UpdateConditionalForwarder";
    DS["UpdateRadius"] = "ds:UpdateRadius";
    DS["VerifyTrust"] = "ds:VerifyTrust";
})(DS = exports.DS || (exports.DS = {}));
/** Actions for AWS Elastic Beanstalk
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselasticbeanstalk.html
  */
var ElasticBeanstalk;
(function (ElasticBeanstalk) {
    ElasticBeanstalk["AbortEnvironmentUpdate"] = "elasticbeanstalk:AbortEnvironmentUpdate";
    ElasticBeanstalk["ApplyEnvironmentManagedAction"] = "elasticbeanstalk:ApplyEnvironmentManagedAction";
    ElasticBeanstalk["CheckDNSAvailability"] = "elasticbeanstalk:CheckDNSAvailability";
    ElasticBeanstalk["ComposeEnvironments"] = "elasticbeanstalk:ComposeEnvironments";
    ElasticBeanstalk["CreateApplication"] = "elasticbeanstalk:CreateApplication";
    ElasticBeanstalk["CreateApplicationVersion"] = "elasticbeanstalk:CreateApplicationVersion";
    ElasticBeanstalk["CreateConfigurationTemplate"] = "elasticbeanstalk:CreateConfigurationTemplate";
    ElasticBeanstalk["CreateEnvironment"] = "elasticbeanstalk:CreateEnvironment";
    ElasticBeanstalk["CreatePlatformVersion"] = "elasticbeanstalk:CreatePlatformVersion";
    ElasticBeanstalk["CreateStorageLocation"] = "elasticbeanstalk:CreateStorageLocation";
    ElasticBeanstalk["DeleteApplication"] = "elasticbeanstalk:DeleteApplication";
    ElasticBeanstalk["DeleteApplicationVersion"] = "elasticbeanstalk:DeleteApplicationVersion";
    ElasticBeanstalk["DeleteConfigurationTemplate"] = "elasticbeanstalk:DeleteConfigurationTemplate";
    ElasticBeanstalk["DeleteEnvironmentConfiguration"] = "elasticbeanstalk:DeleteEnvironmentConfiguration";
    ElasticBeanstalk["DeletePlatformVersion"] = "elasticbeanstalk:DeletePlatformVersion";
    ElasticBeanstalk["DescribeApplicationVersions"] = "elasticbeanstalk:DescribeApplicationVersions";
    ElasticBeanstalk["DescribeApplications"] = "elasticbeanstalk:DescribeApplications";
    ElasticBeanstalk["DescribeConfigurationOptions"] = "elasticbeanstalk:DescribeConfigurationOptions";
    ElasticBeanstalk["DescribeConfigurationSettings"] = "elasticbeanstalk:DescribeConfigurationSettings";
    ElasticBeanstalk["DescribeEnvironmentHealth"] = "elasticbeanstalk:DescribeEnvironmentHealth";
    ElasticBeanstalk["DescribeEnvironmentManagedActionHistory"] = "elasticbeanstalk:DescribeEnvironmentManagedActionHistory";
    ElasticBeanstalk["DescribeEnvironmentManagedActions"] = "elasticbeanstalk:DescribeEnvironmentManagedActions";
    ElasticBeanstalk["DescribeEnvironmentResources"] = "elasticbeanstalk:DescribeEnvironmentResources";
    ElasticBeanstalk["DescribeEnvironments"] = "elasticbeanstalk:DescribeEnvironments";
    ElasticBeanstalk["DescribeEvents"] = "elasticbeanstalk:DescribeEvents";
    ElasticBeanstalk["DescribeInstancesHealth"] = "elasticbeanstalk:DescribeInstancesHealth";
    ElasticBeanstalk["DescribePlatformVersion"] = "elasticbeanstalk:DescribePlatformVersion";
    ElasticBeanstalk["ListAvailableSolutionStacks"] = "elasticbeanstalk:ListAvailableSolutionStacks";
    ElasticBeanstalk["ListPlatformVersions"] = "elasticbeanstalk:ListPlatformVersions";
    ElasticBeanstalk["RebuildEnvironment"] = "elasticbeanstalk:RebuildEnvironment";
    ElasticBeanstalk["RequestEnvironmentInfo"] = "elasticbeanstalk:RequestEnvironmentInfo";
    ElasticBeanstalk["RestartAppServer"] = "elasticbeanstalk:RestartAppServer";
    ElasticBeanstalk["RetrieveEnvironmentInfo"] = "elasticbeanstalk:RetrieveEnvironmentInfo";
    ElasticBeanstalk["SwapEnvironmentCNAMEs"] = "elasticbeanstalk:SwapEnvironmentCNAMEs";
    ElasticBeanstalk["TerminateEnvironment"] = "elasticbeanstalk:TerminateEnvironment";
    ElasticBeanstalk["UpdateApplication"] = "elasticbeanstalk:UpdateApplication";
    ElasticBeanstalk["UpdateApplicationResourceLifecycle"] = "elasticbeanstalk:UpdateApplicationResourceLifecycle";
    ElasticBeanstalk["UpdateApplicationVersion"] = "elasticbeanstalk:UpdateApplicationVersion";
    ElasticBeanstalk["UpdateConfigurationTemplate"] = "elasticbeanstalk:UpdateConfigurationTemplate";
    ElasticBeanstalk["UpdateEnvironment"] = "elasticbeanstalk:UpdateEnvironment";
    ElasticBeanstalk["ValidateConfigurationSettings"] = "elasticbeanstalk:ValidateConfigurationSettings";
})(ElasticBeanstalk = exports.ElasticBeanstalk || (exports.ElasticBeanstalk = {}));
/** Actions for AWS Elemental MediaConvert
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediaconvert.html
  */
var MediaConvert;
(function (MediaConvert) {
    MediaConvert["CancelJob"] = "mediaconvert:CancelJob";
    MediaConvert["CreateJob"] = "mediaconvert:CreateJob";
    MediaConvert["CreateJobTemplate"] = "mediaconvert:CreateJobTemplate";
    MediaConvert["CreatePreset"] = "mediaconvert:CreatePreset";
    MediaConvert["CreateQueue"] = "mediaconvert:CreateQueue";
    MediaConvert["DeleteJobTemplate"] = "mediaconvert:DeleteJobTemplate";
    MediaConvert["DeletePreset"] = "mediaconvert:DeletePreset";
    MediaConvert["DeleteQueue"] = "mediaconvert:DeleteQueue";
    MediaConvert["DescribeEndpoint"] = "mediaconvert:DescribeEndpoint";
    MediaConvert["GetJob"] = "mediaconvert:GetJob";
    MediaConvert["GetJobTemplate"] = "mediaconvert:GetJobTemplate";
    MediaConvert["GetPreset"] = "mediaconvert:GetPreset";
    MediaConvert["GetQueue"] = "mediaconvert:GetQueue";
    MediaConvert["ListJobTemplates"] = "mediaconvert:ListJobTemplates";
    MediaConvert["ListJobs"] = "mediaconvert:ListJobs";
    MediaConvert["ListPresets"] = "mediaconvert:ListPresets";
    MediaConvert["ListQueues"] = "mediaconvert:ListQueues";
    MediaConvert["UpdateJobTemplate"] = "mediaconvert:UpdateJobTemplate";
    MediaConvert["UpdatePreset"] = "mediaconvert:UpdatePreset";
    MediaConvert["UpdateQueue"] = "mediaconvert:UpdateQueue";
})(MediaConvert = exports.MediaConvert || (exports.MediaConvert = {}));
/** Actions for AWS Elemental MediaLive
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmedialive.html
  */
var MediaLive;
(function (MediaLive) {
    MediaLive["CreateChannel"] = "medialive:CreateChannel";
    MediaLive["CreateInput"] = "medialive:CreateInput";
    MediaLive["CreateInputSecurityGroup"] = "medialive:CreateInputSecurityGroup";
    MediaLive["DeleteChannel"] = "medialive:DeleteChannel";
    MediaLive["DeleteInput"] = "medialive:DeleteInput";
    MediaLive["DeleteInputSecurityGroup"] = "medialive:DeleteInputSecurityGroup";
    MediaLive["DescribeChannel"] = "medialive:DescribeChannel";
    MediaLive["DescribeInput"] = "medialive:DescribeInput";
    MediaLive["DescribeInputSecurityGroup"] = "medialive:DescribeInputSecurityGroup";
    MediaLive["ListChannels"] = "medialive:ListChannels";
    MediaLive["ListInputSecurityGroups"] = "medialive:ListInputSecurityGroups";
    MediaLive["ListInputs"] = "medialive:ListInputs";
    MediaLive["StartChannel"] = "medialive:StartChannel";
    MediaLive["StopChannel"] = "medialive:StopChannel";
})(MediaLive = exports.MediaLive || (exports.MediaLive = {}));
/** Actions for AWS Elemental MediaPackage
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediapackage.html
  */
var MediaPackage;
(function (MediaPackage) {
    MediaPackage["CreateChannel"] = "mediapackage:CreateChannel";
    MediaPackage["CreateOriginEndpoint"] = "mediapackage:CreateOriginEndpoint";
    MediaPackage["DeleteChannel"] = "mediapackage:DeleteChannel";
    MediaPackage["DeleteOriginEndpoint"] = "mediapackage:DeleteOriginEndpoint";
    MediaPackage["DescribeChannel"] = "mediapackage:DescribeChannel";
    MediaPackage["DescribeOriginEndpoint"] = "mediapackage:DescribeOriginEndpoint";
    MediaPackage["ListChannels"] = "mediapackage:ListChannels";
    MediaPackage["ListOriginEndpoints"] = "mediapackage:ListOriginEndpoints";
    MediaPackage["UpdateChannel"] = "mediapackage:UpdateChannel";
    MediaPackage["UpdateOriginEndpoint"] = "mediapackage:UpdateOriginEndpoint";
})(MediaPackage = exports.MediaPackage || (exports.MediaPackage = {}));
/** Actions for AWS Elemental MediaStore
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediastore.html
  */
var MediaStore;
(function (MediaStore) {
    MediaStore["CreateContainer"] = "mediastore:CreateContainer";
    MediaStore["DeleteContainer"] = "mediastore:DeleteContainer";
    MediaStore["DeleteContainerPolicy"] = "mediastore:DeleteContainerPolicy";
    MediaStore["DeleteObject"] = "mediastore:DeleteObject";
    MediaStore["DescribeContainer"] = "mediastore:DescribeContainer";
    MediaStore["DescribeObject"] = "mediastore:DescribeObject";
    MediaStore["GetContainerPolicy"] = "mediastore:GetContainerPolicy";
    MediaStore["GetObject"] = "mediastore:GetObject";
    MediaStore["ListContainers"] = "mediastore:ListContainers";
    MediaStore["ListItems"] = "mediastore:ListItems";
    MediaStore["PutContainerPolicy"] = "mediastore:PutContainerPolicy";
    MediaStore["PutObject"] = "mediastore:PutObject";
})(MediaStore = exports.MediaStore || (exports.MediaStore = {}));
/** Actions for AWS Glue
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsglue.html
  */
var Glue;
(function (Glue) {
    Glue["BatchCreatePartition"] = "glue:BatchCreatePartition";
    Glue["BatchDeleteConnection"] = "glue:BatchDeleteConnection";
    Glue["BatchDeletePartition"] = "glue:BatchDeletePartition";
    Glue["BatchDeleteTable"] = "glue:BatchDeleteTable";
    Glue["BatchGetPartition"] = "glue:BatchGetPartition";
    Glue["CreateClassifier"] = "glue:CreateClassifier";
    Glue["CreateConnection"] = "glue:CreateConnection";
    Glue["CreateCrawler"] = "glue:CreateCrawler";
    Glue["CreateDatabase"] = "glue:CreateDatabase";
    Glue["CreateDevEndpoint"] = "glue:CreateDevEndpoint";
    Glue["CreateJob"] = "glue:CreateJob";
    Glue["CreatePartition"] = "glue:CreatePartition";
    Glue["CreateScript"] = "glue:CreateScript";
    Glue["CreateTable"] = "glue:CreateTable";
    Glue["CreateTrigger"] = "glue:CreateTrigger";
    Glue["CreateUserDefinedFunction"] = "glue:CreateUserDefinedFunction";
    Glue["DeleteClassifier"] = "glue:DeleteClassifier";
    Glue["DeleteConnection"] = "glue:DeleteConnection";
    Glue["DeleteCrawler"] = "glue:DeleteCrawler";
    Glue["DeleteDatabase"] = "glue:DeleteDatabase";
    Glue["DeleteDevEndpoint"] = "glue:DeleteDevEndpoint";
    Glue["DeleteJob"] = "glue:DeleteJob";
    Glue["DeletePartition"] = "glue:DeletePartition";
    Glue["DeleteTable"] = "glue:DeleteTable";
    Glue["DeleteTrigger"] = "glue:DeleteTrigger";
    Glue["DeleteUserDefinedFunction"] = "glue:DeleteUserDefinedFunction";
    Glue["GetCatalogImportStatus"] = "glue:GetCatalogImportStatus";
    Glue["GetClassifier"] = "glue:GetClassifier";
    Glue["GetClassifiers"] = "glue:GetClassifiers";
    Glue["GetConnection"] = "glue:GetConnection";
    Glue["GetConnections"] = "glue:GetConnections";
    Glue["GetCrawler"] = "glue:GetCrawler";
    Glue["GetCrawlerMetrics"] = "glue:GetCrawlerMetrics";
    Glue["GetCrawlers"] = "glue:GetCrawlers";
    Glue["GetDatabase"] = "glue:GetDatabase";
    Glue["GetDatabases"] = "glue:GetDatabases";
    Glue["GetDataflowGraph"] = "glue:GetDataflowGraph";
    Glue["GetDevEndpoint"] = "glue:GetDevEndpoint";
    Glue["GetDevEndpoints"] = "glue:GetDevEndpoints";
    Glue["GetJob"] = "glue:GetJob";
    Glue["GetJobRun"] = "glue:GetJobRun";
    Glue["GetJobRuns"] = "glue:GetJobRuns";
    Glue["GetJobs"] = "glue:GetJobs";
    Glue["GetMapping"] = "glue:GetMapping";
    Glue["GetPartition"] = "glue:GetPartition";
    Glue["GetPartitions"] = "glue:GetPartitions";
    Glue["GetPlan"] = "glue:GetPlan";
    Glue["GetTable"] = "glue:GetTable";
    Glue["GetTableVersions"] = "glue:GetTableVersions";
    Glue["GetTables"] = "glue:GetTables";
    Glue["GetTrigger"] = "glue:GetTrigger";
    Glue["GetTriggers"] = "glue:GetTriggers";
    Glue["GetUserDefinedFunction"] = "glue:GetUserDefinedFunction";
    Glue["GetUserDefinedFunctions"] = "glue:GetUserDefinedFunctions";
    Glue["ImportCatalogToGlue"] = "glue:ImportCatalogToGlue";
    Glue["ResetJobBookmark"] = "glue:ResetJobBookmark";
    Glue["StartCrawler"] = "glue:StartCrawler";
    Glue["StartCrawlerSchedule"] = "glue:StartCrawlerSchedule";
    Glue["StartJobRun"] = "glue:StartJobRun";
    Glue["StartTrigger"] = "glue:StartTrigger";
    Glue["StopCrawler"] = "glue:StopCrawler";
    Glue["StopCrawlerSchedule"] = "glue:StopCrawlerSchedule";
    Glue["StopTrigger"] = "glue:StopTrigger";
    Glue["UpdateClassifier"] = "glue:UpdateClassifier";
    Glue["UpdateConnection"] = "glue:UpdateConnection";
    Glue["UpdateCrawler"] = "glue:UpdateCrawler";
    Glue["UpdateDatabase"] = "glue:UpdateDatabase";
    Glue["UpdateDevEndpoint"] = "glue:UpdateDevEndpoint";
    Glue["UpdateJob"] = "glue:UpdateJob";
    Glue["UpdatePartition"] = "glue:UpdatePartition";
    Glue["UpdateTable"] = "glue:UpdateTable";
    Glue["UpdateTrigger"] = "glue:UpdateTrigger";
    Glue["UpdateUserDefinedFunction"] = "glue:UpdateUserDefinedFunction";
})(Glue = exports.Glue || (exports.Glue = {}));
/** Actions for AWS Greengrass
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsgreengrass.html
  */
var Greengrass;
(function (Greengrass) {
    Greengrass["AssociateRoleToGroup"] = "greengrass:AssociateRoleToGroup";
    Greengrass["AssociateServiceRoleToAccount"] = "greengrass:AssociateServiceRoleToAccount";
    Greengrass["CreateCoreDefinition"] = "greengrass:CreateCoreDefinition";
    Greengrass["CreateCoreDefinitionVersion"] = "greengrass:CreateCoreDefinitionVersion";
    Greengrass["CreateDeployment"] = "greengrass:CreateDeployment";
    Greengrass["CreateDeviceDefinition"] = "greengrass:CreateDeviceDefinition";
    Greengrass["CreateDeviceDefinitionVersion"] = "greengrass:CreateDeviceDefinitionVersion";
    Greengrass["CreateFunctionDefinition"] = "greengrass:CreateFunctionDefinition";
    Greengrass["CreateFunctionDefinitionVersion"] = "greengrass:CreateFunctionDefinitionVersion";
    Greengrass["CreateGroup"] = "greengrass:CreateGroup";
    Greengrass["CreateGroupCertificateAuthority"] = "greengrass:CreateGroupCertificateAuthority";
    Greengrass["CreateGroupVersion"] = "greengrass:CreateGroupVersion";
    Greengrass["CreateLoggerDefinition"] = "greengrass:CreateLoggerDefinition";
    Greengrass["CreateLoggerDefinitionVersion"] = "greengrass:CreateLoggerDefinitionVersion";
    Greengrass["CreateResourceDefinition"] = "greengrass:CreateResourceDefinition";
    Greengrass["CreateResourceDefinitionVersion"] = "greengrass:CreateResourceDefinitionVersion";
    Greengrass["CreateSoftwareUpdateJob"] = "greengrass:CreateSoftwareUpdateJob";
    Greengrass["CreateSubscriptionDefinition"] = "greengrass:CreateSubscriptionDefinition";
    Greengrass["CreateSubscriptionDefinitionVersion"] = "greengrass:CreateSubscriptionDefinitionVersion";
    Greengrass["DeleteCoreDefinition"] = "greengrass:DeleteCoreDefinition";
    Greengrass["DeleteDeviceDefinition"] = "greengrass:DeleteDeviceDefinition";
    Greengrass["DeleteFunctionDefinition"] = "greengrass:DeleteFunctionDefinition";
    Greengrass["DeleteGroup"] = "greengrass:DeleteGroup";
    Greengrass["DeleteLoggerDefinition"] = "greengrass:DeleteLoggerDefinition";
    Greengrass["DeleteResourceDefinition"] = "greengrass:DeleteResourceDefinition";
    Greengrass["DeleteSubscriptionDefinition"] = "greengrass:DeleteSubscriptionDefinition";
    Greengrass["DisassociateRoleFromGroup"] = "greengrass:DisassociateRoleFromGroup";
    Greengrass["DisassociateServiceRoleFromAccount"] = "greengrass:DisassociateServiceRoleFromAccount";
    Greengrass["GetAssociatedRole"] = "greengrass:GetAssociatedRole";
    Greengrass["GetConnectivityInfo"] = "greengrass:GetConnectivityInfo";
    Greengrass["GetCoreDefinition"] = "greengrass:GetCoreDefinition";
    Greengrass["GetCoreDefinitionVersion"] = "greengrass:GetCoreDefinitionVersion";
    Greengrass["GetDeploymentStatus"] = "greengrass:GetDeploymentStatus";
    Greengrass["GetDeviceDefinition"] = "greengrass:GetDeviceDefinition";
    Greengrass["GetDeviceDefinitionVersion"] = "greengrass:GetDeviceDefinitionVersion";
    Greengrass["GetFunctionDefinition"] = "greengrass:GetFunctionDefinition";
    Greengrass["GetFunctionDefinitionVersion"] = "greengrass:GetFunctionDefinitionVersion";
    Greengrass["GetGroup"] = "greengrass:GetGroup";
    Greengrass["GetGroupCertificateAuthority"] = "greengrass:GetGroupCertificateAuthority";
    Greengrass["GetGroupCertificateConfiguration"] = "greengrass:GetGroupCertificateConfiguration";
    Greengrass["GetGroupVersion"] = "greengrass:GetGroupVersion";
    Greengrass["GetLoggerDefinition"] = "greengrass:GetLoggerDefinition";
    Greengrass["GetLoggerDefinitionVersion"] = "greengrass:GetLoggerDefinitionVersion";
    Greengrass["GetResourceDefinition"] = "greengrass:GetResourceDefinition";
    Greengrass["GetResourceDefinitionVersion"] = "greengrass:GetResourceDefinitionVersion";
    Greengrass["GetServiceRoleForAccount"] = "greengrass:GetServiceRoleForAccount";
    Greengrass["GetSubscriptionDefinition"] = "greengrass:GetSubscriptionDefinition";
    Greengrass["GetSubscriptionDefinitionVersion"] = "greengrass:GetSubscriptionDefinitionVersion";
    Greengrass["ListCoreDefinitionVersions"] = "greengrass:ListCoreDefinitionVersions";
    Greengrass["ListCoreDefinitions"] = "greengrass:ListCoreDefinitions";
    Greengrass["ListDeployments"] = "greengrass:ListDeployments";
    Greengrass["ListDeviceDefinitionVersions"] = "greengrass:ListDeviceDefinitionVersions";
    Greengrass["ListDeviceDefinitions"] = "greengrass:ListDeviceDefinitions";
    Greengrass["ListFunctionDefinitionVersions"] = "greengrass:ListFunctionDefinitionVersions";
    Greengrass["ListFunctionDefinitions"] = "greengrass:ListFunctionDefinitions";
    Greengrass["ListGroupCertificateAuthorities"] = "greengrass:ListGroupCertificateAuthorities";
    Greengrass["ListGroupVersions"] = "greengrass:ListGroupVersions";
    Greengrass["ListGroups"] = "greengrass:ListGroups";
    Greengrass["ListLoggerDefinitionVersions"] = "greengrass:ListLoggerDefinitionVersions";
    Greengrass["ListLoggerDefinitions"] = "greengrass:ListLoggerDefinitions";
    Greengrass["ListResourceDefinitionVersions"] = "greengrass:ListResourceDefinitionVersions";
    Greengrass["ListResourceDefinitions"] = "greengrass:ListResourceDefinitions";
    Greengrass["ListSubscriptionDefinitionVersions"] = "greengrass:ListSubscriptionDefinitionVersions";
    Greengrass["ListSubscriptionDefinitions"] = "greengrass:ListSubscriptionDefinitions";
    Greengrass["ResetDeployments"] = "greengrass:ResetDeployments";
    Greengrass["UpdateConnectivityInfo"] = "greengrass:UpdateConnectivityInfo";
    Greengrass["UpdateCoreDefinition"] = "greengrass:UpdateCoreDefinition";
    Greengrass["UpdateDeviceDefinition"] = "greengrass:UpdateDeviceDefinition";
    Greengrass["UpdateFunctionDefinition"] = "greengrass:UpdateFunctionDefinition";
    Greengrass["UpdateGroup"] = "greengrass:UpdateGroup";
    Greengrass["UpdateGroupCertificateConfiguration"] = "greengrass:UpdateGroupCertificateConfiguration";
    Greengrass["UpdateLoggerDefinition"] = "greengrass:UpdateLoggerDefinition";
    Greengrass["UpdateResourceDefinition"] = "greengrass:UpdateResourceDefinition";
    Greengrass["UpdateSubscriptionDefinition"] = "greengrass:UpdateSubscriptionDefinition";
})(Greengrass = exports.Greengrass || (exports.Greengrass = {}));
/** Actions for AWS Health APIs and Notifications
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awshealthapisandnotifications.html
  */
var Health;
(function (Health) {
    Health["DescribeAffectedEntities"] = "health:DescribeAffectedEntities";
    Health["DescribeEntityAggregates"] = "health:DescribeEntityAggregates";
    Health["DescribeEventAggregates"] = "health:DescribeEventAggregates";
    Health["DescribeEventDetails"] = "health:DescribeEventDetails";
    Health["DescribeEventTypes"] = "health:DescribeEventTypes";
    Health["DescribeEvents"] = "health:DescribeEvents";
})(Health = exports.Health || (exports.Health = {}));
/** Actions for AWS Import Export Disk Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsimportexportdiskservice.html
  */
var ImportExport;
(function (ImportExport) {
    ImportExport["CancelJob"] = "importexport:CancelJob";
    ImportExport["CreateJob"] = "importexport:CreateJob";
    ImportExport["GetShippingLabel"] = "importexport:GetShippingLabel";
    ImportExport["GetStatus"] = "importexport:GetStatus";
    ImportExport["ListJobs"] = "importexport:ListJobs";
    ImportExport["UpdateJob"] = "importexport:UpdateJob";
})(ImportExport = exports.ImportExport || (exports.ImportExport = {}));
/** Actions for AWS IoT
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiot.html
  */
var IoT;
(function (IoT) {
    IoT["AcceptCertificateTransfer"] = "iot:AcceptCertificateTransfer";
    IoT["AssociateTargetsWithJob"] = "iot:AssociateTargetsWithJob";
    IoT["AttachPolicy"] = "iot:AttachPolicy";
    IoT["AttachPrincipalPolicy"] = "iot:AttachPrincipalPolicy";
    IoT["AttachThingPrincipal"] = "iot:AttachThingPrincipal";
    IoT["CancelCertificateTransfer"] = "iot:CancelCertificateTransfer";
    IoT["CancelJob"] = "iot:CancelJob";
    IoT["ClearDefaultAuthorizer"] = "iot:ClearDefaultAuthorizer";
    IoT["Connect"] = "iot:Connect";
    IoT["CreateAuthorizer"] = "iot:CreateAuthorizer";
    IoT["CreateCertificateFromCsr"] = "iot:CreateCertificateFromCsr";
    IoT["CreateJob"] = "iot:CreateJob";
    IoT["CreateKeysAndCertificate"] = "iot:CreateKeysAndCertificate";
    IoT["CreateOTAUpdateJob"] = "iot:CreateOTAUpdateJob";
    IoT["CreatePolicy"] = "iot:CreatePolicy";
    IoT["CreatePolicyVersion"] = "iot:CreatePolicyVersion";
    IoT["CreateRoleAlias"] = "iot:CreateRoleAlias";
    IoT["CreateStream"] = "iot:CreateStream";
    IoT["CreateThing"] = "iot:CreateThing";
    IoT["CreateThingType"] = "iot:CreateThingType";
    IoT["CreateTopicRule"] = "iot:CreateTopicRule";
    IoT["DeleteAuthorizer"] = "iot:DeleteAuthorizer";
    IoT["DeleteCACertificate"] = "iot:DeleteCACertificate";
    IoT["DeleteCertificate"] = "iot:DeleteCertificate";
    IoT["DeleteOTAUpdateJob"] = "iot:DeleteOTAUpdateJob";
    IoT["DeletePolicy"] = "iot:DeletePolicy";
    IoT["DeletePolicyVersion"] = "iot:DeletePolicyVersion";
    IoT["DeleteRegistrationCode"] = "iot:DeleteRegistrationCode";
    IoT["DeleteRoleAlias"] = "iot:DeleteRoleAlias";
    IoT["DeleteStream"] = "iot:DeleteStream";
    IoT["DeleteThing"] = "iot:DeleteThing";
    IoT["DeleteThingShadow"] = "iot:DeleteThingShadow";
    IoT["DeleteThingType"] = "iot:DeleteThingType";
    IoT["DeleteTopicRule"] = "iot:DeleteTopicRule";
    IoT["DeprecateThingType"] = "iot:DeprecateThingType";
    IoT["DescribeAuthorizer"] = "iot:DescribeAuthorizer";
    IoT["DescribeCACertificate"] = "iot:DescribeCACertificate";
    IoT["DescribeCertificate"] = "iot:DescribeCertificate";
    IoT["DescribeDefaultAuthorizer"] = "iot:DescribeDefaultAuthorizer";
    IoT["DescribeEndpoint"] = "iot:DescribeEndpoint";
    IoT["DescribeIndex"] = "iot:DescribeIndex";
    IoT["DescribeJob"] = "iot:DescribeJob";
    IoT["DescribeJobExecution"] = "iot:DescribeJobExecution";
    IoT["DescribeRoleAlias"] = "iot:DescribeRoleAlias";
    IoT["DescribeStream"] = "iot:DescribeStream";
    IoT["DescribeThing"] = "iot:DescribeThing";
    IoT["DescribeThingType"] = "iot:DescribeThingType";
    IoT["DetachPolicy"] = "iot:DetachPolicy";
    IoT["DetachPrincipalPolicy"] = "iot:DetachPrincipalPolicy";
    IoT["DetachThingPrincipal"] = "iot:DetachThingPrincipal";
    IoT["DisableTopicRule"] = "iot:DisableTopicRule";
    IoT["EnableTopicRule"] = "iot:EnableTopicRule";
    IoT["GetEffectivePolicies"] = "iot:GetEffectivePolicies";
    IoT["GetIndexingConfiguration"] = "iot:GetIndexingConfiguration";
    IoT["GetJobDocument"] = "iot:GetJobDocument";
    IoT["GetLoggingOptions"] = "iot:GetLoggingOptions";
    IoT["GetOTAUpdateJob"] = "iot:GetOTAUpdateJob";
    IoT["GetPolicy"] = "iot:GetPolicy";
    IoT["GetPolicyVersion"] = "iot:GetPolicyVersion";
    IoT["GetRegistrationCode"] = "iot:GetRegistrationCode";
    IoT["GetThingShadow"] = "iot:GetThingShadow";
    IoT["GetTopicRule"] = "iot:GetTopicRule";
    IoT["ListAttachedPolicies"] = "iot:ListAttachedPolicies";
    IoT["ListAuthorizers"] = "iot:ListAuthorizers";
    IoT["ListCACertificates"] = "iot:ListCACertificates";
    IoT["ListCertificates"] = "iot:ListCertificates";
    IoT["ListCertificatesByCA"] = "iot:ListCertificatesByCA";
    IoT["ListIndices"] = "iot:ListIndices";
    IoT["ListJobExecutionsForJob"] = "iot:ListJobExecutionsForJob";
    IoT["ListJobExecutionsForThing"] = "iot:ListJobExecutionsForThing";
    IoT["ListJobs"] = "iot:ListJobs";
    IoT["ListOTAUpdateJobs"] = "iot:ListOTAUpdateJobs";
    IoT["ListOutgoingCertificates"] = "iot:ListOutgoingCertificates";
    IoT["ListPolicies"] = "iot:ListPolicies";
    IoT["ListPolicyPrincipals"] = "iot:ListPolicyPrincipals";
    IoT["ListPolicyVersions"] = "iot:ListPolicyVersions";
    IoT["ListPrincipalPolicies"] = "iot:ListPrincipalPolicies";
    IoT["ListPrincipalThings"] = "iot:ListPrincipalThings";
    IoT["ListRoleAliases"] = "iot:ListRoleAliases";
    IoT["ListStreams"] = "iot:ListStreams";
    IoT["ListTargetsForPolicy"] = "iot:ListTargetsForPolicy";
    IoT["ListThingPrincipals"] = "iot:ListThingPrincipals";
    IoT["ListThingTypes"] = "iot:ListThingTypes";
    IoT["ListThings"] = "iot:ListThings";
    IoT["ListTopicRules"] = "iot:ListTopicRules";
    IoT["Publish"] = "iot:Publish";
    IoT["Receive"] = "iot:Receive";
    IoT["RegisterCACertificate"] = "iot:RegisterCACertificate";
    IoT["RegisterCertificate"] = "iot:RegisterCertificate";
    IoT["RejectCertificateTransfer"] = "iot:RejectCertificateTransfer";
    IoT["ReplaceTopicRule"] = "iot:ReplaceTopicRule";
    IoT["SearchIndex"] = "iot:SearchIndex";
    IoT["SetDefaultAuthorizer"] = "iot:SetDefaultAuthorizer";
    IoT["SetDefaultPolicyVersion"] = "iot:SetDefaultPolicyVersion";
    IoT["SetLoggingOptions"] = "iot:SetLoggingOptions";
    IoT["Subscribe"] = "iot:Subscribe";
    IoT["TestAuthorization"] = "iot:TestAuthorization";
    IoT["TestInvokeAuthorizer"] = "iot:TestInvokeAuthorizer";
    IoT["TransferCertificate"] = "iot:TransferCertificate";
    IoT["UpdateAuthorizer"] = "iot:UpdateAuthorizer";
    IoT["UpdateCACertificate"] = "iot:UpdateCACertificate";
    IoT["UpdateCertificate"] = "iot:UpdateCertificate";
    IoT["UpdateIndexingConfiguration"] = "iot:UpdateIndexingConfiguration";
    IoT["UpdateRoleAlias"] = "iot:UpdateRoleAlias";
    IoT["UpdateStream"] = "iot:UpdateStream";
    IoT["UpdateThing"] = "iot:UpdateThing";
    IoT["UpdateThingShadow"] = "iot:UpdateThingShadow";
})(IoT = exports.IoT || (exports.IoT = {}));
/** Actions for AWS IoT Analytics
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotanalytics.html
  */
var IoTAnalytics;
(function (IoTAnalytics) {
    IoTAnalytics["CreateChannel"] = "iotanalytics:CreateChannel";
    IoTAnalytics["CreateDataset"] = "iotanalytics:CreateDataset";
    IoTAnalytics["CreateDatasetContent"] = "iotanalytics:CreateDatasetContent";
    IoTAnalytics["CreateDatastore"] = "iotanalytics:CreateDatastore";
    IoTAnalytics["CreatePipeline"] = "iotanalytics:CreatePipeline";
    IoTAnalytics["DeleteChannel"] = "iotanalytics:DeleteChannel";
    IoTAnalytics["DeleteDataset"] = "iotanalytics:DeleteDataset";
    IoTAnalytics["DeleteDatasetContent"] = "iotanalytics:DeleteDatasetContent";
    IoTAnalytics["DeleteDatastore"] = "iotanalytics:DeleteDatastore";
    IoTAnalytics["DeletePipeline"] = "iotanalytics:DeletePipeline";
    IoTAnalytics["DescribeChannel"] = "iotanalytics:DescribeChannel";
    IoTAnalytics["DescribeDataset"] = "iotanalytics:DescribeDataset";
    IoTAnalytics["DescribeDatastore"] = "iotanalytics:DescribeDatastore";
    IoTAnalytics["DescribePipeline"] = "iotanalytics:DescribePipeline";
    IoTAnalytics["GetDatasetContent"] = "iotanalytics:GetDatasetContent";
    IoTAnalytics["ListChannels"] = "iotanalytics:ListChannels";
    IoTAnalytics["ListDatasets"] = "iotanalytics:ListDatasets";
    IoTAnalytics["ListDatastores"] = "iotanalytics:ListDatastores";
    IoTAnalytics["ListPipelines"] = "iotanalytics:ListPipelines";
    IoTAnalytics["UpdateDataset"] = "iotanalytics:UpdateDataset";
    IoTAnalytics["UpdatePipeline"] = "iotanalytics:UpdatePipeline";
})(IoTAnalytics = exports.IoTAnalytics || (exports.IoTAnalytics = {}));
/** Actions for AWS Key Management Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awskeymanagementservice.html
  */
var KMS;
(function (KMS) {
    KMS["CancelKeyDeletion"] = "kms:CancelKeyDeletion";
    KMS["CreateAlias"] = "kms:CreateAlias";
    KMS["CreateGrant"] = "kms:CreateGrant";
    KMS["CreateKey"] = "kms:CreateKey";
    KMS["Decrypt"] = "kms:Decrypt";
    KMS["DeleteAlias"] = "kms:DeleteAlias";
    KMS["DeleteImportedKeyMaterial"] = "kms:DeleteImportedKeyMaterial";
    KMS["DescribeKey"] = "kms:DescribeKey";
    KMS["DisableKey"] = "kms:DisableKey";
    KMS["DisableKeyRotation"] = "kms:DisableKeyRotation";
    KMS["EnableKey"] = "kms:EnableKey";
    KMS["EnableKeyRotation"] = "kms:EnableKeyRotation";
    KMS["Encrypt"] = "kms:Encrypt";
    KMS["GenerateDataKey"] = "kms:GenerateDataKey";
    KMS["GenerateDataKeyWithoutPlaintext"] = "kms:GenerateDataKeyWithoutPlaintext";
    KMS["GenerateRandom"] = "kms:GenerateRandom";
    KMS["GetKeyPolicy"] = "kms:GetKeyPolicy";
    KMS["GetKeyRotationStatus"] = "kms:GetKeyRotationStatus";
    KMS["GetParametersForImport"] = "kms:GetParametersForImport";
    KMS["ImportKeyMaterial"] = "kms:ImportKeyMaterial";
    KMS["ListAliases"] = "kms:ListAliases";
    KMS["ListGrants"] = "kms:ListGrants";
    KMS["ListKeyPolicies"] = "kms:ListKeyPolicies";
    KMS["ListKeys"] = "kms:ListKeys";
    KMS["ListResourceTags"] = "kms:ListResourceTags";
    KMS["ListRetirableGrants"] = "kms:ListRetirableGrants";
    KMS["PutKeyPolicy"] = "kms:PutKeyPolicy";
    KMS["ReEncryptFrom"] = "kms:ReEncryptFrom";
    KMS["ReEncryptTo"] = "kms:ReEncryptTo";
    KMS["RetireGrant"] = "kms:RetireGrant";
    KMS["RevokeGrant"] = "kms:RevokeGrant";
    KMS["ScheduleKeyDeletion"] = "kms:ScheduleKeyDeletion";
    KMS["TagResource"] = "kms:TagResource";
    KMS["UntagResource"] = "kms:UntagResource";
    KMS["UpdateAlias"] = "kms:UpdateAlias";
    KMS["UpdateKeyDescription"] = "kms:UpdateKeyDescription";
})(KMS = exports.KMS || (exports.KMS = {}));
/** Actions for AWS Lambda
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html
  */
var Lambda;
(function (Lambda) {
    Lambda["AddPermission"] = "lambda:AddPermission";
    Lambda["CreateAlias"] = "lambda:CreateAlias";
    Lambda["CreateEventSourceMapping"] = "lambda:CreateEventSourceMapping";
    Lambda["CreateFunction"] = "lambda:CreateFunction";
    Lambda["DeleteAlias"] = "lambda:DeleteAlias";
    Lambda["DeleteEventSourceMapping"] = "lambda:DeleteEventSourceMapping";
    Lambda["DeleteFunction"] = "lambda:DeleteFunction";
    Lambda["DeleteFunctionConcurrency"] = "lambda:DeleteFunctionConcurrency";
    Lambda["EnableReplication"] = "lambda:EnableReplication";
    Lambda["GetAccountSettings"] = "lambda:GetAccountSettings";
    Lambda["GetAlias"] = "lambda:GetAlias";
    Lambda["GetEventSourceMapping"] = "lambda:GetEventSourceMapping";
    Lambda["GetFunction"] = "lambda:GetFunction";
    Lambda["GetFunctionConfiguration"] = "lambda:GetFunctionConfiguration";
    Lambda["GetPolicy"] = "lambda:GetPolicy";
    Lambda["InvokeAsync"] = "lambda:InvokeAsync";
    Lambda["InvokeFunction"] = "lambda:InvokeFunction";
    Lambda["ListAliases"] = "lambda:ListAliases";
    Lambda["ListEventSourceMappings"] = "lambda:ListEventSourceMappings";
    Lambda["ListFunctions"] = "lambda:ListFunctions";
    Lambda["ListTags"] = "lambda:ListTags";
    Lambda["ListVersionsByFunction"] = "lambda:ListVersionsByFunction";
    Lambda["PublishVersion"] = "lambda:PublishVersion";
    Lambda["PutFunctionConcurrency"] = "lambda:PutFunctionConcurrency";
    Lambda["RemovePermission"] = "lambda:RemovePermission";
    Lambda["TagResource"] = "lambda:TagResource";
    Lambda["UntagResource"] = "lambda:UntagResource";
    Lambda["UpdateAlias"] = "lambda:UpdateAlias";
    Lambda["UpdateEventSourceMapping"] = "lambda:UpdateEventSourceMapping";
    Lambda["UpdateFunctionCode"] = "lambda:UpdateFunctionCode";
    Lambda["UpdateFunctionConfiguration"] = "lambda:UpdateFunctionConfiguration";
})(Lambda = exports.Lambda || (exports.Lambda = {}));
/** Actions for AWS Marketplace
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplace.html
  */
var AWSMarketplace;
(function (AWSMarketplace) {
    AWSMarketplace["Subscribe"] = "aws-marketplace:Subscribe";
    AWSMarketplace["Unsubscribe"] = "aws-marketplace:Unsubscribe";
    AWSMarketplace["ViewSubscriptions"] = "aws-marketplace:ViewSubscriptions";
})(AWSMarketplace = exports.AWSMarketplace || (exports.AWSMarketplace = {}));
/** Actions for AWS Marketplace Management Portal
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacemanagementportal.html
  */
var AWSMarketplaceManagement;
(function (AWSMarketplaceManagement) {
    AWSMarketplaceManagement["uploadFiles"] = "aws-marketplace-management:uploadFiles";
    AWSMarketplaceManagement["viewMarketing"] = "aws-marketplace-management:viewMarketing";
    AWSMarketplaceManagement["viewReports"] = "aws-marketplace-management:viewReports";
    AWSMarketplaceManagement["viewSupport"] = "aws-marketplace-management:viewSupport";
})(AWSMarketplaceManagement = exports.AWSMarketplaceManagement || (exports.AWSMarketplaceManagement = {}));
/** Actions for AWS Marketplace Metering Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacemeteringservice.html
  */
(function (AWSMarketplace) {
    AWSMarketplace["BatchMeterUsage"] = "aws-marketplace:BatchMeterUsage";
    AWSMarketplace["MeterUsage"] = "aws-marketplace:MeterUsage";
    AWSMarketplace["ResolveCustomer"] = "aws-marketplace:ResolveCustomer";
})(AWSMarketplace = exports.AWSMarketplace || (exports.AWSMarketplace = {}));
/** Actions for AWS Migration Hub
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmigrationhub.html
  */
var MGH;
(function (MGH) {
    MGH["AssociateCreatedArtifact"] = "mgh:AssociateCreatedArtifact";
    MGH["AssociateDiscoveredResource"] = "mgh:AssociateDiscoveredResource";
    MGH["CreateProgressUpdateStream"] = "mgh:CreateProgressUpdateStream";
    MGH["DeleteProgressUpdateStream"] = "mgh:DeleteProgressUpdateStream";
    MGH["DescribeApplicationState"] = "mgh:DescribeApplicationState";
    MGH["DescribeMigrationTask"] = "mgh:DescribeMigrationTask";
    MGH["DisassociateCreatedArtifact"] = "mgh:DisassociateCreatedArtifact";
    MGH["DisassociateDiscoveredResource"] = "mgh:DisassociateDiscoveredResource";
    MGH["ImportMigrationTask"] = "mgh:ImportMigrationTask";
    MGH["ListCreatedArtifacts"] = "mgh:ListCreatedArtifacts";
    MGH["ListDiscoveredResources"] = "mgh:ListDiscoveredResources";
    MGH["ListMigrationTasks"] = "mgh:ListMigrationTasks";
    MGH["ListProgressUpdateStreams"] = "mgh:ListProgressUpdateStreams";
    MGH["NotifyApplicationState"] = "mgh:NotifyApplicationState";
    MGH["NotifyMigrationTaskState"] = "mgh:NotifyMigrationTaskState";
    MGH["PutResourceAttributes"] = "mgh:PutResourceAttributes";
})(MGH = exports.MGH || (exports.MGH = {}));
/** Actions for AWS Mobile Hub
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmobilehub.html
  */
var MobileHub;
(function (MobileHub) {
    MobileHub["CreateProject"] = "mobilehub:CreateProject";
    MobileHub["CreateServiceRole"] = "mobilehub:CreateServiceRole";
    MobileHub["DeleteProject"] = "mobilehub:DeleteProject";
    MobileHub["DeployToStage"] = "mobilehub:DeployToStage";
    MobileHub["DescribeBundle"] = "mobilehub:DescribeBundle";
    MobileHub["ExportBundle"] = "mobilehub:ExportBundle";
    MobileHub["ExportProject"] = "mobilehub:ExportProject";
    MobileHub["GenerateProjectParameters"] = "mobilehub:GenerateProjectParameters";
    MobileHub["GetProject"] = "mobilehub:GetProject";
    MobileHub["GetProjectSnapshot"] = "mobilehub:GetProjectSnapshot";
    MobileHub["ImportProject"] = "mobilehub:ImportProject";
    MobileHub["ListAvailableConnectors"] = "mobilehub:ListAvailableConnectors";
    MobileHub["ListAvailableFeatures"] = "mobilehub:ListAvailableFeatures";
    MobileHub["ListAvailableRegions"] = "mobilehub:ListAvailableRegions";
    MobileHub["ListBundles"] = "mobilehub:ListBundles";
    MobileHub["ListProjects"] = "mobilehub:ListProjects";
    MobileHub["SynchronizeProject"] = "mobilehub:SynchronizeProject";
    MobileHub["UpdateProject"] = "mobilehub:UpdateProject";
    MobileHub["VerifyServiceRole"] = "mobilehub:VerifyServiceRole";
})(MobileHub = exports.MobileHub || (exports.MobileHub = {}));
/** Actions for AWS OpsWorks
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsopsworks.html
  */
var OpsWorks;
(function (OpsWorks) {
    OpsWorks["AssignInstance"] = "opsworks:AssignInstance";
    OpsWorks["AssignVolume"] = "opsworks:AssignVolume";
    OpsWorks["AssociateElasticIp"] = "opsworks:AssociateElasticIp";
    OpsWorks["AttachElasticLoadBalancer"] = "opsworks:AttachElasticLoadBalancer";
    OpsWorks["CloneStack"] = "opsworks:CloneStack";
    OpsWorks["CreateApp"] = "opsworks:CreateApp";
    OpsWorks["CreateDeployment"] = "opsworks:CreateDeployment";
    OpsWorks["CreateInstance"] = "opsworks:CreateInstance";
    OpsWorks["CreateLayer"] = "opsworks:CreateLayer";
    OpsWorks["CreateStack"] = "opsworks:CreateStack";
    OpsWorks["CreateUserProfile"] = "opsworks:CreateUserProfile";
    OpsWorks["DeleteApp"] = "opsworks:DeleteApp";
    OpsWorks["DeleteInstance"] = "opsworks:DeleteInstance";
    OpsWorks["DeleteLayer"] = "opsworks:DeleteLayer";
    OpsWorks["DeleteStack"] = "opsworks:DeleteStack";
    OpsWorks["DeleteUserProfile"] = "opsworks:DeleteUserProfile";
    OpsWorks["DeregisterEcsCluster"] = "opsworks:DeregisterEcsCluster";
    OpsWorks["DeregisterElasticIp"] = "opsworks:DeregisterElasticIp";
    OpsWorks["DeregisterInstance"] = "opsworks:DeregisterInstance";
    OpsWorks["DeregisterRdsDbInstance"] = "opsworks:DeregisterRdsDbInstance";
    OpsWorks["DeregisterVolume"] = "opsworks:DeregisterVolume";
    OpsWorks["DescribeAgentVersions"] = "opsworks:DescribeAgentVersions";
    OpsWorks["DescribeApps"] = "opsworks:DescribeApps";
    OpsWorks["DescribeCommands"] = "opsworks:DescribeCommands";
    OpsWorks["DescribeDeployments"] = "opsworks:DescribeDeployments";
    OpsWorks["DescribeEcsClusters"] = "opsworks:DescribeEcsClusters";
    OpsWorks["DescribeElasticIps"] = "opsworks:DescribeElasticIps";
    OpsWorks["DescribeElasticLoadBalancers"] = "opsworks:DescribeElasticLoadBalancers";
    OpsWorks["DescribeInstances"] = "opsworks:DescribeInstances";
    OpsWorks["DescribeLayers"] = "opsworks:DescribeLayers";
    OpsWorks["DescribeLoadBasedAutoScaling"] = "opsworks:DescribeLoadBasedAutoScaling";
    OpsWorks["DescribeMyUserProfile"] = "opsworks:DescribeMyUserProfile";
    OpsWorks["DescribePermissions"] = "opsworks:DescribePermissions";
    OpsWorks["DescribeRaidArrays"] = "opsworks:DescribeRaidArrays";
    OpsWorks["DescribeRdsDbInstances"] = "opsworks:DescribeRdsDbInstances";
    OpsWorks["DescribeServiceErrors"] = "opsworks:DescribeServiceErrors";
    OpsWorks["DescribeStackProvisioningParameters"] = "opsworks:DescribeStackProvisioningParameters";
    OpsWorks["DescribeStackSummary"] = "opsworks:DescribeStackSummary";
    OpsWorks["DescribeStacks"] = "opsworks:DescribeStacks";
    OpsWorks["DescribeTimeBasedAutoScaling"] = "opsworks:DescribeTimeBasedAutoScaling";
    OpsWorks["DescribeUserProfiles"] = "opsworks:DescribeUserProfiles";
    OpsWorks["DescribeVolumes"] = "opsworks:DescribeVolumes";
    OpsWorks["DetachElasticLoadBalancer"] = "opsworks:DetachElasticLoadBalancer";
    OpsWorks["DisassociateElasticIp"] = "opsworks:DisassociateElasticIp";
    OpsWorks["GetHostnameSuggestion"] = "opsworks:GetHostnameSuggestion";
    OpsWorks["GrantAccess"] = "opsworks:GrantAccess";
    OpsWorks["ListTags"] = "opsworks:ListTags";
    OpsWorks["RebootInstance"] = "opsworks:RebootInstance";
    OpsWorks["RegisterEcsCluster"] = "opsworks:RegisterEcsCluster";
    OpsWorks["RegisterElasticIp"] = "opsworks:RegisterElasticIp";
    OpsWorks["RegisterInstance"] = "opsworks:RegisterInstance";
    OpsWorks["RegisterRdsDbInstance"] = "opsworks:RegisterRdsDbInstance";
    OpsWorks["RegisterVolume"] = "opsworks:RegisterVolume";
    OpsWorks["SetLoadBasedAutoScaling"] = "opsworks:SetLoadBasedAutoScaling";
    OpsWorks["SetPermission"] = "opsworks:SetPermission";
    OpsWorks["SetTimeBasedAutoScaling"] = "opsworks:SetTimeBasedAutoScaling";
    OpsWorks["StartInstance"] = "opsworks:StartInstance";
    OpsWorks["StartStack"] = "opsworks:StartStack";
    OpsWorks["StopInstance"] = "opsworks:StopInstance";
    OpsWorks["StopStack"] = "opsworks:StopStack";
    OpsWorks["TagResource"] = "opsworks:TagResource";
    OpsWorks["UnassignInstance"] = "opsworks:UnassignInstance";
    OpsWorks["UnassignVolume"] = "opsworks:UnassignVolume";
    OpsWorks["UntagResource"] = "opsworks:UntagResource";
    OpsWorks["UpdateApp"] = "opsworks:UpdateApp";
    OpsWorks["UpdateElasticIp"] = "opsworks:UpdateElasticIp";
    OpsWorks["UpdateInstance"] = "opsworks:UpdateInstance";
    OpsWorks["UpdateLayer"] = "opsworks:UpdateLayer";
    OpsWorks["UpdateMyUserProfile"] = "opsworks:UpdateMyUserProfile";
    OpsWorks["UpdateRdsDbInstance"] = "opsworks:UpdateRdsDbInstance";
    OpsWorks["UpdateStack"] = "opsworks:UpdateStack";
    OpsWorks["UpdateUserProfile"] = "opsworks:UpdateUserProfile";
    OpsWorks["UpdateVolume"] = "opsworks:UpdateVolume";
})(OpsWorks = exports.OpsWorks || (exports.OpsWorks = {}));
/** Actions for AWS OpsWorks Configuration Management
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsopsworksconfigurationmanagement.html
  */
var OpsworksCM;
(function (OpsworksCM) {
    OpsworksCM["AssociateNode"] = "opsworks-cm:AssociateNode";
    OpsworksCM["CreateBackup"] = "opsworks-cm:CreateBackup";
    OpsworksCM["CreateServer"] = "opsworks-cm:CreateServer";
    OpsworksCM["DeleteBackup"] = "opsworks-cm:DeleteBackup";
    OpsworksCM["DeleteServer"] = "opsworks-cm:DeleteServer";
    OpsworksCM["DescribeAccountAttributes"] = "opsworks-cm:DescribeAccountAttributes";
    OpsworksCM["DescribeBackups"] = "opsworks-cm:DescribeBackups";
    OpsworksCM["DescribeEvents"] = "opsworks-cm:DescribeEvents";
    OpsworksCM["DescribeNodeAssociationStatus"] = "opsworks-cm:DescribeNodeAssociationStatus";
    OpsworksCM["DescribeServers"] = "opsworks-cm:DescribeServers";
    OpsworksCM["DisassociateNode"] = "opsworks-cm:DisassociateNode";
    OpsworksCM["RestoreServer"] = "opsworks-cm:RestoreServer";
    OpsworksCM["StartMaintenance"] = "opsworks-cm:StartMaintenance";
    OpsworksCM["UpdateServer"] = "opsworks-cm:UpdateServer";
    OpsworksCM["UpdateServerEngineAttributes"] = "opsworks-cm:UpdateServerEngineAttributes";
})(OpsworksCM = exports.OpsworksCM || (exports.OpsworksCM = {}));
/** Actions for AWS Organizations
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsorganizations.html
  */
var Organizations;
(function (Organizations) {
    Organizations["AcceptHandshake"] = "organizations:AcceptHandshake";
    Organizations["AttachPolicy"] = "organizations:AttachPolicy";
    Organizations["CancelHandshake"] = "organizations:CancelHandshake";
    Organizations["CreateAccount"] = "organizations:CreateAccount";
    Organizations["CreateOrganization"] = "organizations:CreateOrganization";
    Organizations["CreateOrganizationalUnit"] = "organizations:CreateOrganizationalUnit";
    Organizations["CreatePolicy"] = "organizations:CreatePolicy";
    Organizations["DeclineHandshake"] = "organizations:DeclineHandshake";
    Organizations["DeleteOrganization"] = "organizations:DeleteOrganization";
    Organizations["DeleteOrganizationalUnit"] = "organizations:DeleteOrganizationalUnit";
    Organizations["DeletePolicy"] = "organizations:DeletePolicy";
    Organizations["DescribeAccount"] = "organizations:DescribeAccount";
    Organizations["DescribeCreateAccountStatus"] = "organizations:DescribeCreateAccountStatus";
    Organizations["DescribeHandshake"] = "organizations:DescribeHandshake";
    Organizations["DescribeOrganization"] = "organizations:DescribeOrganization";
    Organizations["DescribeOrganizationalUnit"] = "organizations:DescribeOrganizationalUnit";
    Organizations["DescribePolicy"] = "organizations:DescribePolicy";
    Organizations["DetachPolicy"] = "organizations:DetachPolicy";
    Organizations["DisablePolicyType"] = "organizations:DisablePolicyType";
    Organizations["EnableAllFeatures"] = "organizations:EnableAllFeatures";
    Organizations["EnablePolicyType"] = "organizations:EnablePolicyType";
    Organizations["InviteAccountToOrganization"] = "organizations:InviteAccountToOrganization";
    Organizations["LeaveOrganization"] = "organizations:LeaveOrganization";
    Organizations["ListAccounts"] = "organizations:ListAccounts";
    Organizations["ListAccountsForParent"] = "organizations:ListAccountsForParent";
    Organizations["ListChildren"] = "organizations:ListChildren";
    Organizations["ListCreateAccountStatus"] = "organizations:ListCreateAccountStatus";
    Organizations["ListHandshakesForAccount"] = "organizations:ListHandshakesForAccount";
    Organizations["ListHandshakesForOrganization"] = "organizations:ListHandshakesForOrganization";
    Organizations["ListOrganizationalUnitsForParent"] = "organizations:ListOrganizationalUnitsForParent";
    Organizations["ListParents"] = "organizations:ListParents";
    Organizations["ListPolicies"] = "organizations:ListPolicies";
    Organizations["ListPoliciesForTarget"] = "organizations:ListPoliciesForTarget";
    Organizations["ListRoots"] = "organizations:ListRoots";
    Organizations["ListTargetsForPolicy"] = "organizations:ListTargetsForPolicy";
    Organizations["MoveAccount"] = "organizations:MoveAccount";
    Organizations["RemoveAccountFromOrganization"] = "organizations:RemoveAccountFromOrganization";
    Organizations["UpdateOrganizationalUnit"] = "organizations:UpdateOrganizationalUnit";
    Organizations["UpdatePolicy"] = "organizations:UpdatePolicy";
})(Organizations = exports.Organizations || (exports.Organizations = {}));
/** Actions for AWS Price List
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awspricelist.html
  */
var Pricing;
(function (Pricing) {
    Pricing["DescribeServices"] = "pricing:DescribeServices";
    Pricing["GetAttributeValues"] = "pricing:GetAttributeValues";
    Pricing["GetProducts"] = "pricing:GetProducts";
})(Pricing = exports.Pricing || (exports.Pricing = {}));
/** Actions for AWS Resource Groups
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsresourcegroups.html
  */
var ResourceGroups;
(function (ResourceGroups) {
    ResourceGroups["CreateGroup"] = "resource-groups:CreateGroup";
    ResourceGroups["DeleteGroup"] = "resource-groups:DeleteGroup";
    ResourceGroups["GetGroup"] = "resource-groups:GetGroup";
    ResourceGroups["GetGroupQuery"] = "resource-groups:GetGroupQuery";
    ResourceGroups["GetTags"] = "resource-groups:GetTags";
    ResourceGroups["ListGroupResources"] = "resource-groups:ListGroupResources";
    ResourceGroups["ListGroups"] = "resource-groups:ListGroups";
    ResourceGroups["SearchResources"] = "resource-groups:SearchResources";
    ResourceGroups["Tag"] = "resource-groups:Tag";
    ResourceGroups["Untag"] = "resource-groups:Untag";
    ResourceGroups["UpdateGroup"] = "resource-groups:UpdateGroup";
    ResourceGroups["UpdateGroupQuery"] = "resource-groups:UpdateGroupQuery";
})(ResourceGroups = exports.ResourceGroups || (exports.ResourceGroups = {}));
/** Actions for AWS Security Token Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecuritytokenservice.html
  */
var STS;
(function (STS) {
    STS["AssumeRole"] = "sts:AssumeRole";
    STS["AssumeRoleWithSAML"] = "sts:AssumeRoleWithSAML";
    STS["AssumeRoleWithWebIdentity"] = "sts:AssumeRoleWithWebIdentity";
    STS["DecodeAuthorizationMessage"] = "sts:DecodeAuthorizationMessage";
    STS["GetCallerIdentity"] = "sts:GetCallerIdentity";
    STS["GetFederationToken"] = "sts:GetFederationToken";
    STS["GetSessionToken"] = "sts:GetSessionToken";
})(STS = exports.STS || (exports.STS = {}));
/** Actions for AWS Serverless Application Repository
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsserverlessapplicationrepository.html
  */
var Serverlessrepo;
(function (Serverlessrepo) {
    Serverlessrepo["CreateApplication"] = "serverlessrepo:CreateApplication";
    Serverlessrepo["CreateApplicationVersion"] = "serverlessrepo:CreateApplicationVersion";
    Serverlessrepo["CreateCloudFormationChangeSet"] = "serverlessrepo:CreateCloudFormationChangeSet";
    Serverlessrepo["DeleteApplication"] = "serverlessrepo:DeleteApplication";
    Serverlessrepo["GetApplication"] = "serverlessrepo:GetApplication";
    Serverlessrepo["GetApplicationPolicy"] = "serverlessrepo:GetApplicationPolicy";
    Serverlessrepo["ListApplicationVersions"] = "serverlessrepo:ListApplicationVersions";
    Serverlessrepo["ListApplications"] = "serverlessrepo:ListApplications";
    Serverlessrepo["PutApplicationPolicy"] = "serverlessrepo:PutApplicationPolicy";
    Serverlessrepo["SearchApplications"] = "serverlessrepo:SearchApplications";
    Serverlessrepo["UpdateApplication"] = "serverlessrepo:UpdateApplication";
})(Serverlessrepo = exports.Serverlessrepo || (exports.Serverlessrepo = {}));
/** Actions for AWS Service Catalog
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsservicecatalog.html
  */
var ServiceCatalog;
(function (ServiceCatalog) {
    ServiceCatalog["AcceptPortfolioShare"] = "servicecatalog:AcceptPortfolioShare";
    ServiceCatalog["AssociatePrincipalWithPortfolio"] = "servicecatalog:AssociatePrincipalWithPortfolio";
    ServiceCatalog["AssociateProductWithPortfolio"] = "servicecatalog:AssociateProductWithPortfolio";
    ServiceCatalog["CreateConstraint"] = "servicecatalog:CreateConstraint";
    ServiceCatalog["CreatePortfolio"] = "servicecatalog:CreatePortfolio";
    ServiceCatalog["CreatePortfolioShare"] = "servicecatalog:CreatePortfolioShare";
    ServiceCatalog["CreateProduct"] = "servicecatalog:CreateProduct";
    ServiceCatalog["CreateProvisioningArtifact"] = "servicecatalog:CreateProvisioningArtifact";
    ServiceCatalog["DeleteConstraint"] = "servicecatalog:DeleteConstraint";
    ServiceCatalog["DeletePortfolio"] = "servicecatalog:DeletePortfolio";
    ServiceCatalog["DeletePortfolioShare"] = "servicecatalog:DeletePortfolioShare";
    ServiceCatalog["DeleteProduct"] = "servicecatalog:DeleteProduct";
    ServiceCatalog["DeleteProvisioningArtifact"] = "servicecatalog:DeleteProvisioningArtifact";
    ServiceCatalog["DescribeConstraint"] = "servicecatalog:DescribeConstraint";
    ServiceCatalog["DescribePortfolio"] = "servicecatalog:DescribePortfolio";
    ServiceCatalog["DescribeProduct"] = "servicecatalog:DescribeProduct";
    ServiceCatalog["DescribeProductAsAdmin"] = "servicecatalog:DescribeProductAsAdmin";
    ServiceCatalog["DescribeProductView"] = "servicecatalog:DescribeProductView";
    ServiceCatalog["DescribeProvisioningArtifact"] = "servicecatalog:DescribeProvisioningArtifact";
    ServiceCatalog["DescribeProvisioningParameters"] = "servicecatalog:DescribeProvisioningParameters";
    ServiceCatalog["DescribeRecord"] = "servicecatalog:DescribeRecord";
    ServiceCatalog["DisassociatePrincipalFromPortfolio"] = "servicecatalog:DisassociatePrincipalFromPortfolio";
    ServiceCatalog["DisassociateProductFromPortfolio"] = "servicecatalog:DisassociateProductFromPortfolio";
    ServiceCatalog["ListAcceptedPortfolioShares"] = "servicecatalog:ListAcceptedPortfolioShares";
    ServiceCatalog["ListConstraintsForPortfolio"] = "servicecatalog:ListConstraintsForPortfolio";
    ServiceCatalog["ListLaunchPaths"] = "servicecatalog:ListLaunchPaths";
    ServiceCatalog["ListPortfolioAccess"] = "servicecatalog:ListPortfolioAccess";
    ServiceCatalog["ListPortfolios"] = "servicecatalog:ListPortfolios";
    ServiceCatalog["ListPortfoliosForProduct"] = "servicecatalog:ListPortfoliosForProduct";
    ServiceCatalog["ListPrincipalsForPortfolio"] = "servicecatalog:ListPrincipalsForPortfolio";
    ServiceCatalog["ListProvisioningArtifacts"] = "servicecatalog:ListProvisioningArtifacts";
    ServiceCatalog["ListRecordHistory"] = "servicecatalog:ListRecordHistory";
    ServiceCatalog["ProvisionProduct"] = "servicecatalog:ProvisionProduct";
    ServiceCatalog["RejectPortfolioShare"] = "servicecatalog:RejectPortfolioShare";
    ServiceCatalog["ScanProvisionedProducts"] = "servicecatalog:ScanProvisionedProducts";
    ServiceCatalog["SearchProducts"] = "servicecatalog:SearchProducts";
    ServiceCatalog["SearchProductsAsAdmin"] = "servicecatalog:SearchProductsAsAdmin";
    ServiceCatalog["TerminateProvisionedProduct"] = "servicecatalog:TerminateProvisionedProduct";
    ServiceCatalog["UpdateConstraint"] = "servicecatalog:UpdateConstraint";
    ServiceCatalog["UpdatePortfolio"] = "servicecatalog:UpdatePortfolio";
    ServiceCatalog["UpdateProduct"] = "servicecatalog:UpdateProduct";
    ServiceCatalog["UpdateProvisionedProduct"] = "servicecatalog:UpdateProvisionedProduct";
    ServiceCatalog["UpdateProvisioningArtifact"] = "servicecatalog:UpdateProvisioningArtifact";
})(ServiceCatalog = exports.ServiceCatalog || (exports.ServiceCatalog = {}));
/** Actions for AWS Shield
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsshield.html
  */
var Shield;
(function (Shield) {
    Shield["CreateProtection"] = "shield:CreateProtection";
    Shield["CreateSubscription"] = "shield:CreateSubscription";
    Shield["DeleteProtection"] = "shield:DeleteProtection";
    Shield["DeleteSubscription"] = "shield:DeleteSubscription";
    Shield["DescribeAttack"] = "shield:DescribeAttack";
    Shield["DescribeProtection"] = "shield:DescribeProtection";
    Shield["DescribeSubscription"] = "shield:DescribeSubscription";
    Shield["ListAttacks"] = "shield:ListAttacks";
    Shield["ListProtections"] = "shield:ListProtections";
})(Shield = exports.Shield || (exports.Shield = {}));
/** Actions for AWS Snowball
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssnowball.html
  */
var Snowball;
(function (Snowball) {
    Snowball["CancelCluster"] = "snowball:CancelCluster";
    Snowball["CancelJob"] = "snowball:CancelJob";
    Snowball["CreateAddress"] = "snowball:CreateAddress";
    Snowball["CreateCluster"] = "snowball:CreateCluster";
    Snowball["CreateJob"] = "snowball:CreateJob";
    Snowball["DescribeAddress"] = "snowball:DescribeAddress";
    Snowball["DescribeAddresses"] = "snowball:DescribeAddresses";
    Snowball["DescribeCluster"] = "snowball:DescribeCluster";
    Snowball["DescribeJob"] = "snowball:DescribeJob";
    Snowball["GetJobManifest"] = "snowball:GetJobManifest";
    Snowball["GetJobUnlockCode"] = "snowball:GetJobUnlockCode";
    Snowball["GetSnowballUsage"] = "snowball:GetSnowballUsage";
    Snowball["ListClusterJobs"] = "snowball:ListClusterJobs";
    Snowball["ListClusters"] = "snowball:ListClusters";
    Snowball["ListJobs"] = "snowball:ListJobs";
    Snowball["UpdateCluster"] = "snowball:UpdateCluster";
    Snowball["UpdateJob"] = "snowball:UpdateJob";
})(Snowball = exports.Snowball || (exports.Snowball = {}));
/** Actions for AWS Step Functions
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsstepfunctions.html
  */
var States;
(function (States) {
    States["CreateActivity"] = "states:CreateActivity";
    States["CreateStateMachine"] = "states:CreateStateMachine";
    States["DeleteActivity"] = "states:DeleteActivity";
    States["DeleteStateMachine"] = "states:DeleteStateMachine";
    States["DescribeActivity"] = "states:DescribeActivity";
    States["DescribeExecution"] = "states:DescribeExecution";
    States["DescribeStateMachine"] = "states:DescribeStateMachine";
    States["DescribeStateMachineForExecution"] = "states:DescribeStateMachineForExecution";
    States["GetActivityTask"] = "states:GetActivityTask";
    States["GetExecutionHistory"] = "states:GetExecutionHistory";
    States["ListActivities"] = "states:ListActivities";
    States["ListExecutions"] = "states:ListExecutions";
    States["ListStateMachines"] = "states:ListStateMachines";
    States["SendTaskFailure"] = "states:SendTaskFailure";
    States["SendTaskHeartbeat"] = "states:SendTaskHeartbeat";
    States["SendTaskSuccess"] = "states:SendTaskSuccess";
    States["StartExecution"] = "states:StartExecution";
    States["StopExecution"] = "states:StopExecution";
    States["UpdateStateMachine"] = "states:UpdateStateMachine";
})(States = exports.States || (exports.States = {}));
/** Actions for AWS Support
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssupport.html
  */
var Support;
(function (Support) {
    Support["AddAttachmentsToSet"] = "support:AddAttachmentsToSet";
    Support["AddCommunicationToCase"] = "support:AddCommunicationToCase";
    Support["CreateCase"] = "support:CreateCase";
    Support["DescribeAttachment"] = "support:DescribeAttachment";
    Support["DescribeCases"] = "support:DescribeCases";
    Support["DescribeCommunications"] = "support:DescribeCommunications";
    Support["DescribeServices"] = "support:DescribeServices";
    Support["DescribeSeverityLevels"] = "support:DescribeSeverityLevels";
    Support["DescribeTrustedAdvisorCheckRefreshStatuses"] = "support:DescribeTrustedAdvisorCheckRefreshStatuses";
    Support["DescribeTrustedAdvisorCheckResult"] = "support:DescribeTrustedAdvisorCheckResult";
    Support["DescribeTrustedAdvisorCheckSummaries"] = "support:DescribeTrustedAdvisorCheckSummaries";
    Support["DescribeTrustedAdvisorChecks"] = "support:DescribeTrustedAdvisorChecks";
    Support["RefreshTrustedAdvisorCheck"] = "support:RefreshTrustedAdvisorCheck";
    Support["ResolveCase"] = "support:ResolveCase";
})(Support = exports.Support || (exports.Support = {}));
/** Actions for AWS Trusted Advisor
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstrustedadvisor.html
  */
var TrustedAdvisor;
(function (TrustedAdvisor) {
    TrustedAdvisor["DescribeCheckItems"] = "trustedadvisor:DescribeCheckItems";
    TrustedAdvisor["DescribeCheckRefreshStatuses"] = "trustedadvisor:DescribeCheckRefreshStatuses";
    TrustedAdvisor["DescribeCheckSummaries"] = "trustedadvisor:DescribeCheckSummaries";
    TrustedAdvisor["DescribeNotificationPreferences"] = "trustedadvisor:DescribeNotificationPreferences";
    TrustedAdvisor["ExcludeCheckItems"] = "trustedadvisor:ExcludeCheckItems";
    TrustedAdvisor["IncludeCheckItems"] = "trustedadvisor:IncludeCheckItems";
    TrustedAdvisor["RefreshCheck"] = "trustedadvisor:RefreshCheck";
    TrustedAdvisor["UpdateNotificationPreferences"] = "trustedadvisor:UpdateNotificationPreferences";
})(TrustedAdvisor = exports.TrustedAdvisor || (exports.TrustedAdvisor = {}));
/** Actions for AWS WAF
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswaf.html
  */
var WAF;
(function (WAF) {
    WAF["CreateByteMatchSet"] = "waf:CreateByteMatchSet";
    WAF["CreateGeoMatchSet"] = "waf:CreateGeoMatchSet";
    WAF["CreateIPSet"] = "waf:CreateIPSet";
    WAF["CreateRateBasedRule"] = "waf:CreateRateBasedRule";
    WAF["CreateRegexMatchSet"] = "waf:CreateRegexMatchSet";
    WAF["CreateRegexPatternSet"] = "waf:CreateRegexPatternSet";
    WAF["CreateRule"] = "waf:CreateRule";
    WAF["CreateSizeConstraintSet"] = "waf:CreateSizeConstraintSet";
    WAF["CreateSqlInjectionMatchSet"] = "waf:CreateSqlInjectionMatchSet";
    WAF["CreateWebACL"] = "waf:CreateWebACL";
    WAF["CreateXssMatchSet"] = "waf:CreateXssMatchSet";
    WAF["DeleteByteMatchSet"] = "waf:DeleteByteMatchSet";
    WAF["DeleteGeoMatchSet"] = "waf:DeleteGeoMatchSet";
    WAF["DeleteIPSet"] = "waf:DeleteIPSet";
    WAF["DeleteRateBasedRule"] = "waf:DeleteRateBasedRule";
    WAF["DeleteRegexMatchSet"] = "waf:DeleteRegexMatchSet";
    WAF["DeleteRegexPatternSet"] = "waf:DeleteRegexPatternSet";
    WAF["DeleteRule"] = "waf:DeleteRule";
    WAF["DeleteSizeConstraintSet"] = "waf:DeleteSizeConstraintSet";
    WAF["DeleteSqlInjectionMatchSet"] = "waf:DeleteSqlInjectionMatchSet";
    WAF["DeleteWebACL"] = "waf:DeleteWebACL";
    WAF["DeleteXssMatchSet"] = "waf:DeleteXssMatchSet";
    WAF["GetByteMatchSet"] = "waf:GetByteMatchSet";
    WAF["GetChangeToken"] = "waf:GetChangeToken";
    WAF["GetChangeTokenStatus"] = "waf:GetChangeTokenStatus";
    WAF["GetGeoMatchSet"] = "waf:GetGeoMatchSet";
    WAF["GetIPSet"] = "waf:GetIPSet";
    WAF["GetRateBasedRule"] = "waf:GetRateBasedRule";
    WAF["GetRateBasedRuleManagedKeys"] = "waf:GetRateBasedRuleManagedKeys";
    WAF["GetRegexMatchSet"] = "waf:GetRegexMatchSet";
    WAF["GetRegexPatternSet"] = "waf:GetRegexPatternSet";
    WAF["GetRule"] = "waf:GetRule";
    WAF["GetSampledRequests"] = "waf:GetSampledRequests";
    WAF["GetSizeConstraintSet"] = "waf:GetSizeConstraintSet";
    WAF["GetSqlInjectionMatchSet"] = "waf:GetSqlInjectionMatchSet";
    WAF["GetWebACL"] = "waf:GetWebACL";
    WAF["GetXssMatchSet"] = "waf:GetXssMatchSet";
    WAF["ListByteMatchSets"] = "waf:ListByteMatchSets";
    WAF["ListGeoMatchSets"] = "waf:ListGeoMatchSets";
    WAF["ListIPSets"] = "waf:ListIPSets";
    WAF["ListRateBasedRules"] = "waf:ListRateBasedRules";
    WAF["ListRegexMatchSets"] = "waf:ListRegexMatchSets";
    WAF["ListRegexPatternSets"] = "waf:ListRegexPatternSets";
    WAF["ListRules"] = "waf:ListRules";
    WAF["ListSizeConstraintSets"] = "waf:ListSizeConstraintSets";
    WAF["ListSqlInjectionMatchSets"] = "waf:ListSqlInjectionMatchSets";
    WAF["ListWebACLs"] = "waf:ListWebACLs";
    WAF["ListXssMatchSets"] = "waf:ListXssMatchSets";
    WAF["UpdateByteMatchSet"] = "waf:UpdateByteMatchSet";
    WAF["UpdateGeoMatchSet"] = "waf:UpdateGeoMatchSet";
    WAF["UpdateIPSet"] = "waf:UpdateIPSet";
    WAF["UpdateRateBasedRule"] = "waf:UpdateRateBasedRule";
    WAF["UpdateRegexMatchSet"] = "waf:UpdateRegexMatchSet";
    WAF["UpdateRegexPatternSet"] = "waf:UpdateRegexPatternSet";
    WAF["UpdateRule"] = "waf:UpdateRule";
    WAF["UpdateSizeConstraintSet"] = "waf:UpdateSizeConstraintSet";
    WAF["UpdateSqlInjectionMatchSet"] = "waf:UpdateSqlInjectionMatchSet";
    WAF["UpdateWebACL"] = "waf:UpdateWebACL";
    WAF["UpdateXssMatchSet"] = "waf:UpdateXssMatchSet";
})(WAF = exports.WAF || (exports.WAF = {}));
/** Actions for AWS WAF Regional
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswafregional.html
  */
var WAFRegional;
(function (WAFRegional) {
    WAFRegional["AssociateWebACL"] = "waf-regional:AssociateWebACL";
    WAFRegional["CreateByteMatchSet"] = "waf-regional:CreateByteMatchSet";
    WAFRegional["CreateGeoMatchSet"] = "waf-regional:CreateGeoMatchSet";
    WAFRegional["CreateIPSet"] = "waf-regional:CreateIPSet";
    WAFRegional["CreateRateBasedRule"] = "waf-regional:CreateRateBasedRule";
    WAFRegional["CreateRegexMatchSet"] = "waf-regional:CreateRegexMatchSet";
    WAFRegional["CreateRegexPatternSet"] = "waf-regional:CreateRegexPatternSet";
    WAFRegional["CreateRule"] = "waf-regional:CreateRule";
    WAFRegional["CreateSizeConstraintSet"] = "waf-regional:CreateSizeConstraintSet";
    WAFRegional["CreateSqlInjectionMatchSet"] = "waf-regional:CreateSqlInjectionMatchSet";
    WAFRegional["CreateWebACL"] = "waf-regional:CreateWebACL";
    WAFRegional["CreateXssMatchSet"] = "waf-regional:CreateXssMatchSet";
    WAFRegional["DeleteByteMatchSet"] = "waf-regional:DeleteByteMatchSet";
    WAFRegional["DeleteGeoMatchSet"] = "waf-regional:DeleteGeoMatchSet";
    WAFRegional["DeleteIPSet"] = "waf-regional:DeleteIPSet";
    WAFRegional["DeleteRateBasedRule"] = "waf-regional:DeleteRateBasedRule";
    WAFRegional["DeleteRegexMatchSet"] = "waf-regional:DeleteRegexMatchSet";
    WAFRegional["DeleteRegexPatternSet"] = "waf-regional:DeleteRegexPatternSet";
    WAFRegional["DeleteRule"] = "waf-regional:DeleteRule";
    WAFRegional["DeleteSizeConstraintSet"] = "waf-regional:DeleteSizeConstraintSet";
    WAFRegional["DeleteSqlInjectionMatchSet"] = "waf-regional:DeleteSqlInjectionMatchSet";
    WAFRegional["DeleteWebACL"] = "waf-regional:DeleteWebACL";
    WAFRegional["DeleteXssMatchSet"] = "waf-regional:DeleteXssMatchSet";
    WAFRegional["DisassociateWebACL"] = "waf-regional:DisassociateWebACL";
    WAFRegional["GetByteMatchSet"] = "waf-regional:GetByteMatchSet";
    WAFRegional["GetChangeToken"] = "waf-regional:GetChangeToken";
    WAFRegional["GetChangeTokenStatus"] = "waf-regional:GetChangeTokenStatus";
    WAFRegional["GetGeoMatchSet"] = "waf-regional:GetGeoMatchSet";
    WAFRegional["GetIPSet"] = "waf-regional:GetIPSet";
    WAFRegional["GetRateBasedRule"] = "waf-regional:GetRateBasedRule";
    WAFRegional["GetRateBasedRuleManagedKeys"] = "waf-regional:GetRateBasedRuleManagedKeys";
    WAFRegional["GetRegexMatchSet"] = "waf-regional:GetRegexMatchSet";
    WAFRegional["GetRegexPatternSet"] = "waf-regional:GetRegexPatternSet";
    WAFRegional["GetRule"] = "waf-regional:GetRule";
    WAFRegional["GetSampledRequests"] = "waf-regional:GetSampledRequests";
    WAFRegional["GetSizeConstraintSet"] = "waf-regional:GetSizeConstraintSet";
    WAFRegional["GetSqlInjectionMatchSet"] = "waf-regional:GetSqlInjectionMatchSet";
    WAFRegional["GetWebACL"] = "waf-regional:GetWebACL";
    WAFRegional["GetWebACLForResource"] = "waf-regional:GetWebACLForResource";
    WAFRegional["GetXssMatchSet"] = "waf-regional:GetXssMatchSet";
    WAFRegional["ListByteMatchSets"] = "waf-regional:ListByteMatchSets";
    WAFRegional["ListGeoMatchSets"] = "waf-regional:ListGeoMatchSets";
    WAFRegional["ListIPSets"] = "waf-regional:ListIPSets";
    WAFRegional["ListRateBasedRules"] = "waf-regional:ListRateBasedRules";
    WAFRegional["ListRegexMatchSets"] = "waf-regional:ListRegexMatchSets";
    WAFRegional["ListRegexPatternSets"] = "waf-regional:ListRegexPatternSets";
    WAFRegional["ListResourcesForWebACL"] = "waf-regional:ListResourcesForWebACL";
    WAFRegional["ListRules"] = "waf-regional:ListRules";
    WAFRegional["ListSizeConstraintSets"] = "waf-regional:ListSizeConstraintSets";
    WAFRegional["ListSqlInjectionMatchSets"] = "waf-regional:ListSqlInjectionMatchSets";
    WAFRegional["ListWebACLs"] = "waf-regional:ListWebACLs";
    WAFRegional["ListXssMatchSets"] = "waf-regional:ListXssMatchSets";
    WAFRegional["UpdateByteMatchSet"] = "waf-regional:UpdateByteMatchSet";
    WAFRegional["UpdateGeoMatchSet"] = "waf-regional:UpdateGeoMatchSet";
    WAFRegional["UpdateIPSet"] = "waf-regional:UpdateIPSet";
    WAFRegional["UpdateRateBasedRule"] = "waf-regional:UpdateRateBasedRule";
    WAFRegional["UpdateRegexMatchSet"] = "waf-regional:UpdateRegexMatchSet";
    WAFRegional["UpdateRegexPatternSet"] = "waf-regional:UpdateRegexPatternSet";
    WAFRegional["UpdateRule"] = "waf-regional:UpdateRule";
    WAFRegional["UpdateSizeConstraintSet"] = "waf-regional:UpdateSizeConstraintSet";
    WAFRegional["UpdateSqlInjectionMatchSet"] = "waf-regional:UpdateSqlInjectionMatchSet";
    WAFRegional["UpdateWebACL"] = "waf-regional:UpdateWebACL";
    WAFRegional["UpdateXssMatchSet"] = "waf-regional:UpdateXssMatchSet";
})(WAFRegional = exports.WAFRegional || (exports.WAFRegional = {}));
/** Actions for AWS XRay
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsxray.html
  */
var XRay;
(function (XRay) {
    XRay["BatchGetTraces"] = "xray:BatchGetTraces";
    XRay["GetServiceGraph"] = "xray:GetServiceGraph";
    XRay["GetTraceGraph"] = "xray:GetTraceGraph";
    XRay["GetTraceSummaries"] = "xray:GetTraceSummaries";
    XRay["PutTelemetryRecords"] = "xray:PutTelemetryRecords";
    XRay["PutTraceSegments"] = "xray:PutTraceSegments";
})(XRay = exports.XRay || (exports.XRay = {}));
/** Actions for Alexa for Business
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_alexaforbusiness.html
  */
var A4B;
(function (A4B) {
    A4B["AssociateDeviceWithRoom"] = "a4b:AssociateDeviceWithRoom";
    A4B["AssociateSkillGroupWithRoom"] = "a4b:AssociateSkillGroupWithRoom";
    A4B["CreateProfile"] = "a4b:CreateProfile";
    A4B["CreateRoom"] = "a4b:CreateRoom";
    A4B["CreateSkillGroup"] = "a4b:CreateSkillGroup";
    A4B["CreateUser"] = "a4b:CreateUser";
    A4B["DeleteProfile"] = "a4b:DeleteProfile";
    A4B["DeleteRoom"] = "a4b:DeleteRoom";
    A4B["DeleteRoomSkillParameter"] = "a4b:DeleteRoomSkillParameter";
    A4B["DeleteSkillGroup"] = "a4b:DeleteSkillGroup";
    A4B["DeleteUser"] = "a4b:DeleteUser";
    A4B["DisassociateDeviceFromRoom"] = "a4b:DisassociateDeviceFromRoom";
    A4B["DisassociateSkillGroupFromRoom"] = "a4b:DisassociateSkillGroupFromRoom";
    A4B["GetDevice"] = "a4b:GetDevice";
    A4B["GetProfile"] = "a4b:GetProfile";
    A4B["GetRoom"] = "a4b:GetRoom";
    A4B["GetRoomSkillParameter"] = "a4b:GetRoomSkillParameter";
    A4B["GetSkillGroup"] = "a4b:GetSkillGroup";
    A4B["ListSkills"] = "a4b:ListSkills";
    A4B["ListTags"] = "a4b:ListTags";
    A4B["PutRoomSkillParameter"] = "a4b:PutRoomSkillParameter";
    A4B["ResolveRoom"] = "a4b:ResolveRoom";
    A4B["RevokeInvitation"] = "a4b:RevokeInvitation";
    A4B["SearchDevices"] = "a4b:SearchDevices";
    A4B["SearchProfiles"] = "a4b:SearchProfiles";
    A4B["SearchRooms"] = "a4b:SearchRooms";
    A4B["SearchSkillGroups"] = "a4b:SearchSkillGroups";
    A4B["SearchUsers"] = "a4b:SearchUsers";
    A4B["SendInvitation"] = "a4b:SendInvitation";
    A4B["StartDeviceSync"] = "a4b:StartDeviceSync";
    A4B["TagResource"] = "a4b:TagResource";
    A4B["UntagResource"] = "a4b:UntagResource";
    A4B["UpdateDevice"] = "a4b:UpdateDevice";
    A4B["UpdateProfile"] = "a4b:UpdateProfile";
    A4B["UpdateRoom"] = "a4b:UpdateRoom";
    A4B["UpdateSkillGroup"] = "a4b:UpdateSkillGroup";
})(A4B = exports.A4B || (exports.A4B = {}));
/** Actions for Amazon API Gateway
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonapigateway.html
  */
var ExecuteAPI;
(function (ExecuteAPI) {
    ExecuteAPI["InvalidateCache"] = "execute-api:InvalidateCache";
    ExecuteAPI["Invoke"] = "execute-api:Invoke";
})(ExecuteAPI = exports.ExecuteAPI || (exports.ExecuteAPI = {}));
/** Actions for Amazon AWS Cloud Contact Center
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonawscloudcontactcenter.html
  */
var Connect;
(function (Connect) {
    Connect["CreateInstance"] = "connect:CreateInstance";
    Connect["DescribeInstance"] = "connect:DescribeInstance";
    Connect["DestroyInstance"] = "connect:DestroyInstance";
    Connect["GetFederationToken"] = "connect:GetFederationToken";
    Connect["GetFederationTokens"] = "connect:GetFederationTokens";
    Connect["ListInstances"] = "connect:ListInstances";
    Connect["ModifyInstance"] = "connect:ModifyInstance";
})(Connect = exports.Connect || (exports.Connect = {}));
/** Actions for Amazon AppStream
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappstream.html
  */
var AppStream;
(function (AppStream) {
    AppStream["AssociateFleet"] = "appstream:AssociateFleet";
    AppStream["CreateDirectoryConfig"] = "appstream:CreateDirectoryConfig";
    AppStream["CreateFleet"] = "appstream:CreateFleet";
    AppStream["CreateImageBuilder"] = "appstream:CreateImageBuilder";
    AppStream["CreateImageBuilderStreamingURL"] = "appstream:CreateImageBuilderStreamingURL";
    AppStream["CreateStack"] = "appstream:CreateStack";
    AppStream["CreateStreamingURL"] = "appstream:CreateStreamingURL";
    AppStream["DeleteDirectoryConfig"] = "appstream:DeleteDirectoryConfig";
    AppStream["DeleteFleet"] = "appstream:DeleteFleet";
    AppStream["DeleteImage"] = "appstream:DeleteImage";
    AppStream["DeleteImageBuilder"] = "appstream:DeleteImageBuilder";
    AppStream["DeleteStack"] = "appstream:DeleteStack";
    AppStream["DescribeDirectoryConfigs"] = "appstream:DescribeDirectoryConfigs";
    AppStream["DescribeFleets"] = "appstream:DescribeFleets";
    AppStream["DescribeImageBuilders"] = "appstream:DescribeImageBuilders";
    AppStream["DescribeImages"] = "appstream:DescribeImages";
    AppStream["DescribeSessions"] = "appstream:DescribeSessions";
    AppStream["DescribeStacks"] = "appstream:DescribeStacks";
    AppStream["DisassociateFleet"] = "appstream:DisassociateFleet";
    AppStream["ExpireSession"] = "appstream:ExpireSession";
    AppStream["ListAssociatedFleets"] = "appstream:ListAssociatedFleets";
    AppStream["ListAssociatedStacks"] = "appstream:ListAssociatedStacks";
    AppStream["ListTagsForResource"] = "appstream:ListTagsForResource";
    AppStream["StartFleet"] = "appstream:StartFleet";
    AppStream["StartImageBuilder"] = "appstream:StartImageBuilder";
    AppStream["StopFleet"] = "appstream:StopFleet";
    AppStream["StopImageBuilder"] = "appstream:StopImageBuilder";
    AppStream["Stream"] = "appstream:Stream";
    AppStream["TagResource"] = "appstream:TagResource";
    AppStream["UntagResource"] = "appstream:UntagResource";
    AppStream["UpdateDirectoryConfig"] = "appstream:UpdateDirectoryConfig";
    AppStream["UpdateFleet"] = "appstream:UpdateFleet";
    AppStream["UpdateStack"] = "appstream:UpdateStack";
})(AppStream = exports.AppStream || (exports.AppStream = {}));
/** Actions for Amazon Athena
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonathena.html
  */
var Athena;
(function (Athena) {
    Athena["BatchGetNamedQuery"] = "athena:BatchGetNamedQuery";
    Athena["BatchGetQueryExecution"] = "athena:BatchGetQueryExecution";
    Athena["CancelQueryExecution"] = "athena:CancelQueryExecution";
    Athena["CreateNamedQuery"] = "athena:CreateNamedQuery";
    Athena["DeleteNamedQuery"] = "athena:DeleteNamedQuery";
    Athena["GetCatalogs"] = "athena:GetCatalogs";
    Athena["GetExecutionEngine"] = "athena:GetExecutionEngine";
    Athena["GetExecutionEngines"] = "athena:GetExecutionEngines";
    Athena["GetNamedQuery"] = "athena:GetNamedQuery";
    Athena["GetNamespace"] = "athena:GetNamespace";
    Athena["GetNamespaces"] = "athena:GetNamespaces";
    Athena["GetQueryExecution"] = "athena:GetQueryExecution";
    Athena["GetQueryExecutions"] = "athena:GetQueryExecutions";
    Athena["GetQueryResults"] = "athena:GetQueryResults";
    Athena["GetTable"] = "athena:GetTable";
    Athena["GetTables"] = "athena:GetTables";
    Athena["ListNamedQueries"] = "athena:ListNamedQueries";
    Athena["ListQueryExecutions"] = "athena:ListQueryExecutions";
    Athena["RunQuery"] = "athena:RunQuery";
    Athena["StartQueryExecution"] = "athena:StartQueryExecution";
    Athena["StopQueryExecution"] = "athena:StopQueryExecution";
})(Athena = exports.Athena || (exports.Athena = {}));
/** Actions for Amazon Chime
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonchime.html
  */
var Chime;
(function (Chime) {
    Chime["AcceptDelegate"] = "chime:AcceptDelegate";
    Chime["ActivateUsers"] = "chime:ActivateUsers";
    Chime["AddDomain"] = "chime:AddDomain";
    Chime["AddOrUpdateGroups"] = "chime:AddOrUpdateGroups";
    Chime["AuthorizeDirectory"] = "chime:AuthorizeDirectory";
    Chime["ConnectDirectory"] = "chime:ConnectDirectory";
    Chime["CreateAccount"] = "chime:CreateAccount";
    Chime["CreateCDRBucket"] = "chime:CreateCDRBucket";
    Chime["DeleteAccount"] = "chime:DeleteAccount";
    Chime["DeleteCDRBucket"] = "chime:DeleteCDRBucket";
    Chime["DeleteDelegate"] = "chime:DeleteDelegate";
    Chime["DeleteDomain"] = "chime:DeleteDomain";
    Chime["DeleteGroups"] = "chime:DeleteGroups";
    Chime["DisconnectDirectory"] = "chime:DisconnectDirectory";
    Chime["GetAccount"] = "chime:GetAccount";
    Chime["GetAccountResource"] = "chime:GetAccountResource";
    Chime["GetAccountSettings"] = "chime:GetAccountSettings";
    Chime["GetCDRBucket"] = "chime:GetCDRBucket";
    Chime["GetDomain"] = "chime:GetDomain";
    Chime["GetUser"] = "chime:GetUser";
    Chime["GetUserByEmail"] = "chime:GetUserByEmail";
    Chime["InviteDelegate"] = "chime:InviteDelegate";
    Chime["InviteUsers"] = "chime:InviteUsers";
    Chime["ListAccounts"] = "chime:ListAccounts";
    Chime["ListCDRBucket"] = "chime:ListCDRBucket";
    Chime["ListDelegates"] = "chime:ListDelegates";
    Chime["ListDirectories"] = "chime:ListDirectories";
    Chime["ListDomains"] = "chime:ListDomains";
    Chime["ListGroups"] = "chime:ListGroups";
    Chime["ListUsers"] = "chime:ListUsers";
    Chime["LogoutUser"] = "chime:LogoutUser";
    Chime["RenameAccount"] = "chime:RenameAccount";
    Chime["RenewDelegate"] = "chime:RenewDelegate";
    Chime["ResetAccountResource"] = "chime:ResetAccountResource";
    Chime["ResetPersonalPin"] = "chime:ResetPersonalPin";
    Chime["SubmitSupportRequest"] = "chime:SubmitSupportRequest";
    Chime["SuspendUsers"] = "chime:SuspendUsers";
    Chime["UnauthorizeDirectory"] = "chime:UnauthorizeDirectory";
    Chime["UpdateAccountResource"] = "chime:UpdateAccountResource";
    Chime["UpdateAccountSettings"] = "chime:UpdateAccountSettings";
    Chime["UpdateCDRBucket"] = "chime:UpdateCDRBucket";
    Chime["UpdateSupportedLicenses"] = "chime:UpdateSupportedLicenses";
    Chime["UpdateUserLicenses"] = "chime:UpdateUserLicenses";
    Chime["ValidateAccountResource"] = "chime:ValidateAccountResource";
    Chime["ValidateDelegate"] = "chime:ValidateDelegate";
})(Chime = exports.Chime || (exports.Chime = {}));
/** Actions for Amazon Cloud Directory
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonclouddirectory.html
  */
var CloudDirectory;
(function (CloudDirectory) {
    CloudDirectory["AddFacetToObject"] = "clouddirectory:AddFacetToObject";
    CloudDirectory["ApplySchema"] = "clouddirectory:ApplySchema";
    CloudDirectory["AttachObject"] = "clouddirectory:AttachObject";
    CloudDirectory["AttachPolicy"] = "clouddirectory:AttachPolicy";
    CloudDirectory["AttachToIndex"] = "clouddirectory:AttachToIndex";
    CloudDirectory["AttachTypedLink"] = "clouddirectory:AttachTypedLink";
    CloudDirectory["BatchRead"] = "clouddirectory:BatchRead";
    CloudDirectory["BatchWrite"] = "clouddirectory:BatchWrite";
    CloudDirectory["CreateDirectory"] = "clouddirectory:CreateDirectory";
    CloudDirectory["CreateFacet"] = "clouddirectory:CreateFacet";
    CloudDirectory["CreateIndex"] = "clouddirectory:CreateIndex";
    CloudDirectory["CreateObject"] = "clouddirectory:CreateObject";
    CloudDirectory["CreateSchema"] = "clouddirectory:CreateSchema";
    CloudDirectory["CreateTypedLinkFacet"] = "clouddirectory:CreateTypedLinkFacet";
    CloudDirectory["DeleteDirectory"] = "clouddirectory:DeleteDirectory";
    CloudDirectory["DeleteFacet"] = "clouddirectory:DeleteFacet";
    CloudDirectory["DeleteObject"] = "clouddirectory:DeleteObject";
    CloudDirectory["DeleteSchema"] = "clouddirectory:DeleteSchema";
    CloudDirectory["DeleteTypedLinkFacet"] = "clouddirectory:DeleteTypedLinkFacet";
    CloudDirectory["DetachFromIndex"] = "clouddirectory:DetachFromIndex";
    CloudDirectory["DetachObject"] = "clouddirectory:DetachObject";
    CloudDirectory["DetachPolicy"] = "clouddirectory:DetachPolicy";
    CloudDirectory["DetachTypedLink"] = "clouddirectory:DetachTypedLink";
    CloudDirectory["DisableDirectory"] = "clouddirectory:DisableDirectory";
    CloudDirectory["EnableDirectory"] = "clouddirectory:EnableDirectory";
    CloudDirectory["GetDirectory"] = "clouddirectory:GetDirectory";
    CloudDirectory["GetFacet"] = "clouddirectory:GetFacet";
    CloudDirectory["GetObjectInformation"] = "clouddirectory:GetObjectInformation";
    CloudDirectory["GetSchemaAsJson"] = "clouddirectory:GetSchemaAsJson";
    CloudDirectory["GetTypedLinkFacetInformation"] = "clouddirectory:GetTypedLinkFacetInformation";
    CloudDirectory["ListAppliedSchemaArns"] = "clouddirectory:ListAppliedSchemaArns";
    CloudDirectory["ListAttachedIndices"] = "clouddirectory:ListAttachedIndices";
    CloudDirectory["ListDevelopmentSchemaArns"] = "clouddirectory:ListDevelopmentSchemaArns";
    CloudDirectory["ListDirectories"] = "clouddirectory:ListDirectories";
    CloudDirectory["ListFacetAttributes"] = "clouddirectory:ListFacetAttributes";
    CloudDirectory["ListFacetNames"] = "clouddirectory:ListFacetNames";
    CloudDirectory["ListIncomingTypedLinks"] = "clouddirectory:ListIncomingTypedLinks";
    CloudDirectory["ListIndex"] = "clouddirectory:ListIndex";
    CloudDirectory["ListObjectAttributes"] = "clouddirectory:ListObjectAttributes";
    CloudDirectory["ListObjectChildren"] = "clouddirectory:ListObjectChildren";
    CloudDirectory["ListObjectParentPaths"] = "clouddirectory:ListObjectParentPaths";
    CloudDirectory["ListObjectParents"] = "clouddirectory:ListObjectParents";
    CloudDirectory["ListObjectPolicies"] = "clouddirectory:ListObjectPolicies";
    CloudDirectory["ListOutgoingTypedLinks"] = "clouddirectory:ListOutgoingTypedLinks";
    CloudDirectory["ListPolicyAttachments"] = "clouddirectory:ListPolicyAttachments";
    CloudDirectory["ListPublishedSchemaArns"] = "clouddirectory:ListPublishedSchemaArns";
    CloudDirectory["ListTagsForResource"] = "clouddirectory:ListTagsForResource";
    CloudDirectory["ListTypedLinkFacetAttributes"] = "clouddirectory:ListTypedLinkFacetAttributes";
    CloudDirectory["ListTypedLinkFacetNames"] = "clouddirectory:ListTypedLinkFacetNames";
    CloudDirectory["LookupPolicy"] = "clouddirectory:LookupPolicy";
    CloudDirectory["PublishSchema"] = "clouddirectory:PublishSchema";
    CloudDirectory["PutSchemaFromJson"] = "clouddirectory:PutSchemaFromJson";
    CloudDirectory["RemoveFacetFromObject"] = "clouddirectory:RemoveFacetFromObject";
    CloudDirectory["TagResource"] = "clouddirectory:TagResource";
    CloudDirectory["UntagResource"] = "clouddirectory:UntagResource";
    CloudDirectory["UpdateFacet"] = "clouddirectory:UpdateFacet";
    CloudDirectory["UpdateObjectAttributes"] = "clouddirectory:UpdateObjectAttributes";
    CloudDirectory["UpdateSchema"] = "clouddirectory:UpdateSchema";
    CloudDirectory["UpdateTypedLinkFacet"] = "clouddirectory:UpdateTypedLinkFacet";
})(CloudDirectory = exports.CloudDirectory || (exports.CloudDirectory = {}));
/** Actions for Amazon CloudFront
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudfront.html
  */
var CloudFront;
(function (CloudFront) {
    CloudFront["CreateCloudFrontOriginAccessIdentity"] = "cloudfront:CreateCloudFrontOriginAccessIdentity";
    CloudFront["CreateDistribution"] = "cloudfront:CreateDistribution";
    CloudFront["CreateDistributionWithTags"] = "cloudfront:CreateDistributionWithTags";
    CloudFront["CreateInvalidation"] = "cloudfront:CreateInvalidation";
    CloudFront["CreateStreamingDistribution"] = "cloudfront:CreateStreamingDistribution";
    CloudFront["CreateStreamingDistributionWithTags"] = "cloudfront:CreateStreamingDistributionWithTags";
    CloudFront["DeleteCloudFrontOriginAccessIdentity"] = "cloudfront:DeleteCloudFrontOriginAccessIdentity";
    CloudFront["DeleteDistribution"] = "cloudfront:DeleteDistribution";
    CloudFront["DeleteStreamingDistribution"] = "cloudfront:DeleteStreamingDistribution";
    CloudFront["GetCloudFrontOriginAccessIdentity"] = "cloudfront:GetCloudFrontOriginAccessIdentity";
    CloudFront["GetCloudFrontOriginAccessIdentityConfig"] = "cloudfront:GetCloudFrontOriginAccessIdentityConfig";
    CloudFront["GetDistribution"] = "cloudfront:GetDistribution";
    CloudFront["GetDistributionConfig"] = "cloudfront:GetDistributionConfig";
    CloudFront["GetInvalidation"] = "cloudfront:GetInvalidation";
    CloudFront["GetStreamingDistribution"] = "cloudfront:GetStreamingDistribution";
    CloudFront["GetStreamingDistributionConfig"] = "cloudfront:GetStreamingDistributionConfig";
    CloudFront["ListCloudFrontOriginAccessIdentities"] = "cloudfront:ListCloudFrontOriginAccessIdentities";
    CloudFront["ListDistributions"] = "cloudfront:ListDistributions";
    CloudFront["ListDistributionsByWebACLId"] = "cloudfront:ListDistributionsByWebACLId";
    CloudFront["ListInvalidations"] = "cloudfront:ListInvalidations";
    CloudFront["ListStreamingDistributions"] = "cloudfront:ListStreamingDistributions";
    CloudFront["ListTagsForResource"] = "cloudfront:ListTagsForResource";
    CloudFront["TagResource"] = "cloudfront:TagResource";
    CloudFront["UntagResource"] = "cloudfront:UntagResource";
    CloudFront["UpdateCloudFrontOriginAccessIdentity"] = "cloudfront:UpdateCloudFrontOriginAccessIdentity";
    CloudFront["UpdateDistribution"] = "cloudfront:UpdateDistribution";
    CloudFront["UpdateStreamingDistribution"] = "cloudfront:UpdateStreamingDistribution";
})(CloudFront = exports.CloudFront || (exports.CloudFront = {}));
/** Actions for Amazon CloudSearch
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudsearch.html
  */
var CloudSearch;
(function (CloudSearch) {
    CloudSearch["AddTags"] = "cloudsearch:AddTags";
    CloudSearch["BuildSuggesters"] = "cloudsearch:BuildSuggesters";
    CloudSearch["CreateDomain"] = "cloudsearch:CreateDomain";
    CloudSearch["DefineAnalysisScheme"] = "cloudsearch:DefineAnalysisScheme";
    CloudSearch["DefineExpression"] = "cloudsearch:DefineExpression";
    CloudSearch["DefineIndexField"] = "cloudsearch:DefineIndexField";
    CloudSearch["DefineSuggester"] = "cloudsearch:DefineSuggester";
    CloudSearch["DeleteAnalysisScheme"] = "cloudsearch:DeleteAnalysisScheme";
    CloudSearch["DeleteDomain"] = "cloudsearch:DeleteDomain";
    CloudSearch["DeleteExpression"] = "cloudsearch:DeleteExpression";
    CloudSearch["DeleteIndexField"] = "cloudsearch:DeleteIndexField";
    CloudSearch["DeleteSuggester"] = "cloudsearch:DeleteSuggester";
    CloudSearch["DescribeAnalysisSchemes"] = "cloudsearch:DescribeAnalysisSchemes";
    CloudSearch["DescribeAvailabilityOptions"] = "cloudsearch:DescribeAvailabilityOptions";
    CloudSearch["DescribeDomains"] = "cloudsearch:DescribeDomains";
    CloudSearch["DescribeExpressions"] = "cloudsearch:DescribeExpressions";
    CloudSearch["DescribeIndexFields"] = "cloudsearch:DescribeIndexFields";
    CloudSearch["DescribeScalingParameters"] = "cloudsearch:DescribeScalingParameters";
    CloudSearch["DescribeServiceAccessPolicies"] = "cloudsearch:DescribeServiceAccessPolicies";
    CloudSearch["DescribeSuggesters"] = "cloudsearch:DescribeSuggesters";
    CloudSearch["IndexDocuments"] = "cloudsearch:IndexDocuments";
    CloudSearch["ListDomainNames"] = "cloudsearch:ListDomainNames";
    CloudSearch["ListTags"] = "cloudsearch:ListTags";
    CloudSearch["RemoveTags"] = "cloudsearch:RemoveTags";
    CloudSearch["UpdateAvailabilityOptions"] = "cloudsearch:UpdateAvailabilityOptions";
    CloudSearch["UpdateScalingParameters"] = "cloudsearch:UpdateScalingParameters";
    CloudSearch["UpdateServiceAccessPolicies"] = "cloudsearch:UpdateServiceAccessPolicies";
    CloudSearch["document"] = "cloudsearch:document";
    CloudSearch["search"] = "cloudsearch:search";
    CloudSearch["suggest"] = "cloudsearch:suggest";
})(CloudSearch = exports.CloudSearch || (exports.CloudSearch = {}));
/** Actions for Amazon CloudWatch
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html
  */
var CloudWatch;
(function (CloudWatch) {
    CloudWatch["DeleteAlarms"] = "cloudwatch:DeleteAlarms";
    CloudWatch["DeleteDashboards"] = "cloudwatch:DeleteDashboards";
    CloudWatch["DescribeAlarmHistory"] = "cloudwatch:DescribeAlarmHistory";
    CloudWatch["DescribeAlarms"] = "cloudwatch:DescribeAlarms";
    CloudWatch["DescribeAlarmsForMetric"] = "cloudwatch:DescribeAlarmsForMetric";
    CloudWatch["DisableAlarmActions"] = "cloudwatch:DisableAlarmActions";
    CloudWatch["EnableAlarmActions"] = "cloudwatch:EnableAlarmActions";
    CloudWatch["GetDashboard"] = "cloudwatch:GetDashboard";
    CloudWatch["GetMetricData"] = "cloudwatch:GetMetricData";
    CloudWatch["GetMetricStatistics"] = "cloudwatch:GetMetricStatistics";
    CloudWatch["ListDashboards"] = "cloudwatch:ListDashboards";
    CloudWatch["ListMetrics"] = "cloudwatch:ListMetrics";
    CloudWatch["PutDashboard"] = "cloudwatch:PutDashboard";
    CloudWatch["PutMetricAlarm"] = "cloudwatch:PutMetricAlarm";
    CloudWatch["PutMetricData"] = "cloudwatch:PutMetricData";
    CloudWatch["SetAlarmState"] = "cloudwatch:SetAlarmState";
})(CloudWatch = exports.CloudWatch || (exports.CloudWatch = {}));
/** Actions for Amazon CloudWatch Events
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchevents.html
  */
var Events;
(function (Events) {
    Events["DeleteRule"] = "events:DeleteRule";
    Events["DescribeRule"] = "events:DescribeRule";
    Events["DisableRule"] = "events:DisableRule";
    Events["EnableRule"] = "events:EnableRule";
    Events["ListRuleNamesByTarget"] = "events:ListRuleNamesByTarget";
    Events["ListRules"] = "events:ListRules";
    Events["ListTargetsByRule"] = "events:ListTargetsByRule";
    Events["PutEvents"] = "events:PutEvents";
    Events["PutRule"] = "events:PutRule";
    Events["PutTargets"] = "events:PutTargets";
    Events["RemoveTargets"] = "events:RemoveTargets";
    Events["TestEventPattern"] = "events:TestEventPattern";
})(Events = exports.Events || (exports.Events = {}));
/** Actions for Amazon CloudWatch Logs
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchlogs.html
  */
var Logs;
(function (Logs) {
    Logs["AssociateKmsKey"] = "logs:AssociateKmsKey";
    Logs["CancelExportTask"] = "logs:CancelExportTask";
    Logs["CreateExportTask"] = "logs:CreateExportTask";
    Logs["CreateLogGroup"] = "logs:CreateLogGroup";
    Logs["CreateLogStream"] = "logs:CreateLogStream";
    Logs["DeleteDestination"] = "logs:DeleteDestination";
    Logs["DeleteLogGroup"] = "logs:DeleteLogGroup";
    Logs["DeleteLogStream"] = "logs:DeleteLogStream";
    Logs["DeleteMetricFilter"] = "logs:DeleteMetricFilter";
    Logs["DeleteResourcePolicy"] = "logs:DeleteResourcePolicy";
    Logs["DeleteRetentionPolicy"] = "logs:DeleteRetentionPolicy";
    Logs["DeleteSubscriptionFilter"] = "logs:DeleteSubscriptionFilter";
    Logs["DescribeDestinations"] = "logs:DescribeDestinations";
    Logs["DescribeExportTasks"] = "logs:DescribeExportTasks";
    Logs["DescribeLogGroups"] = "logs:DescribeLogGroups";
    Logs["DescribeLogStreams"] = "logs:DescribeLogStreams";
    Logs["DescribeMetricFilters"] = "logs:DescribeMetricFilters";
    Logs["DescribeResourcePolicies"] = "logs:DescribeResourcePolicies";
    Logs["DescribeSubscriptionFilters"] = "logs:DescribeSubscriptionFilters";
    Logs["DisassociateKmsKey"] = "logs:DisassociateKmsKey";
    Logs["FilterLogEvents"] = "logs:FilterLogEvents";
    Logs["GetLogEvents"] = "logs:GetLogEvents";
    Logs["ListTagsLogGroup"] = "logs:ListTagsLogGroup";
    Logs["PutDestination"] = "logs:PutDestination";
    Logs["PutDestinationPolicy"] = "logs:PutDestinationPolicy";
    Logs["PutLogEvents"] = "logs:PutLogEvents";
    Logs["PutMetricFilter"] = "logs:PutMetricFilter";
    Logs["PutResourcePolicy"] = "logs:PutResourcePolicy";
    Logs["PutRetentionPolicy"] = "logs:PutRetentionPolicy";
    Logs["PutSubscriptionFilter"] = "logs:PutSubscriptionFilter";
    Logs["TagLogGroup"] = "logs:TagLogGroup";
    Logs["TestMetricFilter"] = "logs:TestMetricFilter";
    Logs["UntagLogGroup"] = "logs:UntagLogGroup";
})(Logs = exports.Logs || (exports.Logs = {}));
/** Actions for Amazon Cognito Identity
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitoidentity.html
  */
var CognitoIdentity;
(function (CognitoIdentity) {
    CognitoIdentity["CreateIdentityPool"] = "cognito-identity:CreateIdentityPool";
    CognitoIdentity["DeleteIdentities"] = "cognito-identity:DeleteIdentities";
    CognitoIdentity["DeleteIdentityPool"] = "cognito-identity:DeleteIdentityPool";
    CognitoIdentity["DescribeIdentity"] = "cognito-identity:DescribeIdentity";
    CognitoIdentity["DescribeIdentityPool"] = "cognito-identity:DescribeIdentityPool";
    CognitoIdentity["GetCredentialsForIdentity"] = "cognito-identity:GetCredentialsForIdentity";
    CognitoIdentity["GetId"] = "cognito-identity:GetId";
    CognitoIdentity["GetIdentityPoolRoles"] = "cognito-identity:GetIdentityPoolRoles";
    CognitoIdentity["GetOpenIdToken"] = "cognito-identity:GetOpenIdToken";
    CognitoIdentity["GetOpenIdTokenForDeveloperIdentity"] = "cognito-identity:GetOpenIdTokenForDeveloperIdentity";
    CognitoIdentity["ListIdentities"] = "cognito-identity:ListIdentities";
    CognitoIdentity["ListIdentityPools"] = "cognito-identity:ListIdentityPools";
    CognitoIdentity["LookupDeveloperIdentity"] = "cognito-identity:LookupDeveloperIdentity";
    CognitoIdentity["MergeDeveloperIdentities"] = "cognito-identity:MergeDeveloperIdentities";
    CognitoIdentity["SetIdentityPoolRoles"] = "cognito-identity:SetIdentityPoolRoles";
    CognitoIdentity["UnlinkDeveloperIdentity"] = "cognito-identity:UnlinkDeveloperIdentity";
    CognitoIdentity["UnlinkIdentity"] = "cognito-identity:UnlinkIdentity";
    CognitoIdentity["UpdateIdentityPool"] = "cognito-identity:UpdateIdentityPool";
})(CognitoIdentity = exports.CognitoIdentity || (exports.CognitoIdentity = {}));
/** Actions for Amazon Cognito Sync
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitosync.html
  */
var CognitoSync;
(function (CognitoSync) {
    CognitoSync["BulkPublish"] = "cognito-sync:BulkPublish";
    CognitoSync["DeleteDataset"] = "cognito-sync:DeleteDataset";
    CognitoSync["DescribeDataset"] = "cognito-sync:DescribeDataset";
    CognitoSync["DescribeIdentityPoolUsage"] = "cognito-sync:DescribeIdentityPoolUsage";
    CognitoSync["DescribeIdentityUsage"] = "cognito-sync:DescribeIdentityUsage";
    CognitoSync["GetBulkPublishDetails"] = "cognito-sync:GetBulkPublishDetails";
    CognitoSync["GetCognitoEvents"] = "cognito-sync:GetCognitoEvents";
    CognitoSync["GetIdentityPoolConfiguration"] = "cognito-sync:GetIdentityPoolConfiguration";
    CognitoSync["ListDatasets"] = "cognito-sync:ListDatasets";
    CognitoSync["ListIdentityPoolUsage"] = "cognito-sync:ListIdentityPoolUsage";
    CognitoSync["ListRecords"] = "cognito-sync:ListRecords";
    CognitoSync["QueryRecords"] = "cognito-sync:QueryRecords";
    CognitoSync["RegisterDevice"] = "cognito-sync:RegisterDevice";
    CognitoSync["SetCognitoEvents"] = "cognito-sync:SetCognitoEvents";
    CognitoSync["SetDatasetConfiguration"] = "cognito-sync:SetDatasetConfiguration";
    CognitoSync["SetIdentityPoolConfiguration"] = "cognito-sync:SetIdentityPoolConfiguration";
    CognitoSync["SubscribeToDataset"] = "cognito-sync:SubscribeToDataset";
    CognitoSync["UnsubscribeFromDataset"] = "cognito-sync:UnsubscribeFromDataset";
    CognitoSync["UpdateRecords"] = "cognito-sync:UpdateRecords";
})(CognitoSync = exports.CognitoSync || (exports.CognitoSync = {}));
/** Actions for Amazon Cognito User Pools
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitouserpools.html
  */
var CognitoIDP;
(function (CognitoIDP) {
    CognitoIDP["AddCustomAttributes"] = "cognito-idp:AddCustomAttributes";
    CognitoIDP["AdminAddUserToGroup"] = "cognito-idp:AdminAddUserToGroup";
    CognitoIDP["AdminConfirmSignUp"] = "cognito-idp:AdminConfirmSignUp";
    CognitoIDP["AdminCreateUser"] = "cognito-idp:AdminCreateUser";
    CognitoIDP["AdminDeleteUser"] = "cognito-idp:AdminDeleteUser";
    CognitoIDP["AdminDeleteUserAttributes"] = "cognito-idp:AdminDeleteUserAttributes";
    CognitoIDP["AdminDisableUser"] = "cognito-idp:AdminDisableUser";
    CognitoIDP["AdminEnableUser"] = "cognito-idp:AdminEnableUser";
    CognitoIDP["AdminForgetDevice"] = "cognito-idp:AdminForgetDevice";
    CognitoIDP["AdminGetDevice"] = "cognito-idp:AdminGetDevice";
    CognitoIDP["AdminGetUser"] = "cognito-idp:AdminGetUser";
    CognitoIDP["AdminInitiateAuth"] = "cognito-idp:AdminInitiateAuth";
    CognitoIDP["AdminListDevices"] = "cognito-idp:AdminListDevices";
    CognitoIDP["AdminListGroupsForUser"] = "cognito-idp:AdminListGroupsForUser";
    CognitoIDP["AdminListUserAuthEvents"] = "cognito-idp:AdminListUserAuthEvents";
    CognitoIDP["AdminRemoveUserFromGroup"] = "cognito-idp:AdminRemoveUserFromGroup";
    CognitoIDP["AdminResetUserPassword"] = "cognito-idp:AdminResetUserPassword";
    CognitoIDP["AdminRespondToAuthChallenge"] = "cognito-idp:AdminRespondToAuthChallenge";
    CognitoIDP["AdminSetUserMFAPreference"] = "cognito-idp:AdminSetUserMFAPreference";
    CognitoIDP["AdminSetUserSettings"] = "cognito-idp:AdminSetUserSettings";
    CognitoIDP["AdminUpdateAuthEventFeedback"] = "cognito-idp:AdminUpdateAuthEventFeedback";
    CognitoIDP["AdminUpdateDeviceStatus"] = "cognito-idp:AdminUpdateDeviceStatus";
    CognitoIDP["AdminUpdateUserAttributes"] = "cognito-idp:AdminUpdateUserAttributes";
    CognitoIDP["AdminUserGlobalSignOut"] = "cognito-idp:AdminUserGlobalSignOut";
    CognitoIDP["ChangePassword"] = "cognito-idp:ChangePassword";
    CognitoIDP["ConfirmDevice"] = "cognito-idp:ConfirmDevice";
    CognitoIDP["ConfirmForgotPassword"] = "cognito-idp:ConfirmForgotPassword";
    CognitoIDP["ConfirmSignUp"] = "cognito-idp:ConfirmSignUp";
    CognitoIDP["CreateGroup"] = "cognito-idp:CreateGroup";
    CognitoIDP["CreateUserImportJob"] = "cognito-idp:CreateUserImportJob";
    CognitoIDP["CreateUserPool"] = "cognito-idp:CreateUserPool";
    CognitoIDP["CreateUserPoolClient"] = "cognito-idp:CreateUserPoolClient";
    CognitoIDP["DeleteGroup"] = "cognito-idp:DeleteGroup";
    CognitoIDP["DeleteUser"] = "cognito-idp:DeleteUser";
    CognitoIDP["DeleteUserAttributes"] = "cognito-idp:DeleteUserAttributes";
    CognitoIDP["DeleteUserPool"] = "cognito-idp:DeleteUserPool";
    CognitoIDP["DeleteUserPoolClient"] = "cognito-idp:DeleteUserPoolClient";
    CognitoIDP["DescribeRiskConfiguration"] = "cognito-idp:DescribeRiskConfiguration";
    CognitoIDP["DescribeUserImportJob"] = "cognito-idp:DescribeUserImportJob";
    CognitoIDP["DescribeUserPool"] = "cognito-idp:DescribeUserPool";
    CognitoIDP["DescribeUserPoolClient"] = "cognito-idp:DescribeUserPoolClient";
    CognitoIDP["ForgetDevice"] = "cognito-idp:ForgetDevice";
    CognitoIDP["ForgotPassword"] = "cognito-idp:ForgotPassword";
    CognitoIDP["GetCSVHeader"] = "cognito-idp:GetCSVHeader";
    CognitoIDP["GetDevice"] = "cognito-idp:GetDevice";
    CognitoIDP["GetGroup"] = "cognito-idp:GetGroup";
    CognitoIDP["GetUser"] = "cognito-idp:GetUser";
    CognitoIDP["GetUserAttributeVerificationCode"] = "cognito-idp:GetUserAttributeVerificationCode";
    CognitoIDP["GetUserPoolMfaConfig"] = "cognito-idp:GetUserPoolMfaConfig";
    CognitoIDP["GlobalSignOut"] = "cognito-idp:GlobalSignOut";
    CognitoIDP["InitiateAuth"] = "cognito-idp:InitiateAuth";
    CognitoIDP["ListDevices"] = "cognito-idp:ListDevices";
    CognitoIDP["ListGroups"] = "cognito-idp:ListGroups";
    CognitoIDP["ListUserImportJobs"] = "cognito-idp:ListUserImportJobs";
    CognitoIDP["ListUserPoolClients"] = "cognito-idp:ListUserPoolClients";
    CognitoIDP["ListUsersInGroup"] = "cognito-idp:ListUsersInGroup";
    CognitoIDP["ResendConfirmationCode"] = "cognito-idp:ResendConfirmationCode";
    CognitoIDP["RespondToAuthChallenge"] = "cognito-idp:RespondToAuthChallenge";
    CognitoIDP["SetRiskConfiguration"] = "cognito-idp:SetRiskConfiguration";
    CognitoIDP["SetUserMFAPreference"] = "cognito-idp:SetUserMFAPreference";
    CognitoIDP["SetUserPoolMfaConfig"] = "cognito-idp:SetUserPoolMfaConfig";
    CognitoIDP["SetUserSettings"] = "cognito-idp:SetUserSettings";
    CognitoIDP["SignUp"] = "cognito-idp:SignUp";
    CognitoIDP["StartUserImportJob"] = "cognito-idp:StartUserImportJob";
    CognitoIDP["StopUserImportJob"] = "cognito-idp:StopUserImportJob";
    CognitoIDP["UpdateAuthEventFeedback"] = "cognito-idp:UpdateAuthEventFeedback";
    CognitoIDP["UpdateDeviceStatus"] = "cognito-idp:UpdateDeviceStatus";
    CognitoIDP["UpdateGroup"] = "cognito-idp:UpdateGroup";
    CognitoIDP["UpdateUserAttributes"] = "cognito-idp:UpdateUserAttributes";
    CognitoIDP["UpdateUserPool"] = "cognito-idp:UpdateUserPool";
    CognitoIDP["UpdateUserPoolClient"] = "cognito-idp:UpdateUserPoolClient";
    CognitoIDP["VerifyUserAttribute"] = "cognito-idp:VerifyUserAttribute";
})(CognitoIDP = exports.CognitoIDP || (exports.CognitoIDP = {}));
/** Actions for Amazon Comprehend
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html
  */
var Comprehend;
(function (Comprehend) {
    Comprehend["BatchDetectDominantLanguage"] = "comprehend:BatchDetectDominantLanguage";
    Comprehend["BatchDetectEntities"] = "comprehend:BatchDetectEntities";
    Comprehend["BatchDetectKeyPhrases"] = "comprehend:BatchDetectKeyPhrases";
    Comprehend["BatchDetectSentiment"] = "comprehend:BatchDetectSentiment";
    Comprehend["DescribeTopicsDetectionJob"] = "comprehend:DescribeTopicsDetectionJob";
    Comprehend["DetectDominantLanguage"] = "comprehend:DetectDominantLanguage";
    Comprehend["DetectEntities"] = "comprehend:DetectEntities";
    Comprehend["DetectKeyPhrases"] = "comprehend:DetectKeyPhrases";
    Comprehend["DetectSentiment"] = "comprehend:DetectSentiment";
    Comprehend["ListTopicsDetectionJobs"] = "comprehend:ListTopicsDetectionJobs";
    Comprehend["StartTopicsDetectionJob"] = "comprehend:StartTopicsDetectionJob";
})(Comprehend = exports.Comprehend || (exports.Comprehend = {}));
/** Actions for Amazon DynamoDB
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodb.html
  */
var DynamoDB;
(function (DynamoDB) {
    DynamoDB["BatchGetItem"] = "dynamodb:BatchGetItem";
    DynamoDB["BatchWriteItem"] = "dynamodb:BatchWriteItem";
    DynamoDB["CreateBackup"] = "dynamodb:CreateBackup";
    DynamoDB["CreateTable"] = "dynamodb:CreateTable";
    DynamoDB["DeleteBackup"] = "dynamodb:DeleteBackup";
    DynamoDB["DeleteItem"] = "dynamodb:DeleteItem";
    DynamoDB["DeleteTable"] = "dynamodb:DeleteTable";
    DynamoDB["DescribeBackup"] = "dynamodb:DescribeBackup";
    DynamoDB["DescribeContinuousBackups"] = "dynamodb:DescribeContinuousBackups";
    DynamoDB["DescribeLimits"] = "dynamodb:DescribeLimits";
    DynamoDB["DescribeReservedCapacity"] = "dynamodb:DescribeReservedCapacity";
    DynamoDB["DescribeReservedCapacityOfferings"] = "dynamodb:DescribeReservedCapacityOfferings";
    DynamoDB["DescribeStream"] = "dynamodb:DescribeStream";
    DynamoDB["DescribeTable"] = "dynamodb:DescribeTable";
    DynamoDB["DescribeTimeToLive"] = "dynamodb:DescribeTimeToLive";
    DynamoDB["GetItem"] = "dynamodb:GetItem";
    DynamoDB["GetRecords"] = "dynamodb:GetRecords";
    DynamoDB["GetShardIterator"] = "dynamodb:GetShardIterator";
    DynamoDB["ListBackups"] = "dynamodb:ListBackups";
    DynamoDB["ListStreams"] = "dynamodb:ListStreams";
    DynamoDB["ListTables"] = "dynamodb:ListTables";
    DynamoDB["ListTagsOfResource"] = "dynamodb:ListTagsOfResource";
    DynamoDB["PurchaseReservedCapacityOfferings"] = "dynamodb:PurchaseReservedCapacityOfferings";
    DynamoDB["PutItem"] = "dynamodb:PutItem";
    DynamoDB["Query"] = "dynamodb:Query";
    DynamoDB["RestoreTableFromBackup"] = "dynamodb:RestoreTableFromBackup";
    DynamoDB["RestoreTableToPointInTime"] = "dynamodb:RestoreTableToPointInTime";
    DynamoDB["Scan"] = "dynamodb:Scan";
    DynamoDB["TagResource"] = "dynamodb:TagResource";
    DynamoDB["UntagResource"] = "dynamodb:UntagResource";
    DynamoDB["UpdateContinuousBackups"] = "dynamodb:UpdateContinuousBackups";
    DynamoDB["UpdateItem"] = "dynamodb:UpdateItem";
    DynamoDB["UpdateTable"] = "dynamodb:UpdateTable";
    DynamoDB["UpdateTimeToLive"] = "dynamodb:UpdateTimeToLive";
})(DynamoDB = exports.DynamoDB || (exports.DynamoDB = {}));
/** Actions for Amazon DynamoDB Accelerator (DAX)
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodbaccelerator(dax).html
  */
var DAX;
(function (DAX) {
    DAX["BatchGetItem"] = "dax:BatchGetItem";
    DAX["BatchWriteItem"] = "dax:BatchWriteItem";
    DAX["CreateCluster"] = "dax:CreateCluster";
    DAX["CreateParameterGroup"] = "dax:CreateParameterGroup";
    DAX["CreateSubnetGroup"] = "dax:CreateSubnetGroup";
    DAX["DecreaseReplicationFactor"] = "dax:DecreaseReplicationFactor";
    DAX["DeleteCluster"] = "dax:DeleteCluster";
    DAX["DeleteItem"] = "dax:DeleteItem";
    DAX["DeleteParameterGroup"] = "dax:DeleteParameterGroup";
    DAX["DeleteSubnetGroup"] = "dax:DeleteSubnetGroup";
    DAX["DescribeClusters"] = "dax:DescribeClusters";
    DAX["DescribeDefaultParameters"] = "dax:DescribeDefaultParameters";
    DAX["DescribeEvents"] = "dax:DescribeEvents";
    DAX["DescribeParameterGroups"] = "dax:DescribeParameterGroups";
    DAX["DescribeParameters"] = "dax:DescribeParameters";
    DAX["DescribeSubnetGroups"] = "dax:DescribeSubnetGroups";
    DAX["DescribeTable"] = "dax:DescribeTable";
    DAX["GetItem"] = "dax:GetItem";
    DAX["IncreaseReplicationFactor"] = "dax:IncreaseReplicationFactor";
    DAX["ListTables"] = "dax:ListTables";
    DAX["ListTags"] = "dax:ListTags";
    DAX["PutItem"] = "dax:PutItem";
    DAX["Query"] = "dax:Query";
    DAX["RebootNode"] = "dax:RebootNode";
    DAX["Scan"] = "dax:Scan";
    DAX["TagResource"] = "dax:TagResource";
    DAX["UntagResource"] = "dax:UntagResource";
    DAX["UpdateCluster"] = "dax:UpdateCluster";
    DAX["UpdateItem"] = "dax:UpdateItem";
    DAX["UpdateParameterGroup"] = "dax:UpdateParameterGroup";
    DAX["UpdateSubnetGroup"] = "dax:UpdateSubnetGroup";
})(DAX = exports.DAX || (exports.DAX = {}));
/** Actions for Amazon EC2
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html
  */
var EC2;
(function (EC2) {
    EC2["AcceptReservedInstancesExchangeQuote"] = "ec2:AcceptReservedInstancesExchangeQuote";
    EC2["AcceptVpcEndpointConnections"] = "ec2:AcceptVpcEndpointConnections";
    EC2["AcceptVpcPeeringConnection"] = "ec2:AcceptVpcPeeringConnection";
    EC2["AllocateAddress"] = "ec2:AllocateAddress";
    EC2["AllocateHosts"] = "ec2:AllocateHosts";
    EC2["AssignIpv6Addresses"] = "ec2:AssignIpv6Addresses";
    EC2["AssignPrivateIpAddresses"] = "ec2:AssignPrivateIpAddresses";
    EC2["AssociateAddress"] = "ec2:AssociateAddress";
    EC2["AssociateDhcpOptions"] = "ec2:AssociateDhcpOptions";
    EC2["AssociateIamInstanceProfile"] = "ec2:AssociateIamInstanceProfile";
    EC2["AssociateRouteTable"] = "ec2:AssociateRouteTable";
    EC2["AssociateSubnetCidrBlock"] = "ec2:AssociateSubnetCidrBlock";
    EC2["AssociateVpcCidrBlock"] = "ec2:AssociateVpcCidrBlock";
    EC2["AttachClassicLinkVpc"] = "ec2:AttachClassicLinkVpc";
    EC2["AttachInternetGateway"] = "ec2:AttachInternetGateway";
    EC2["AttachNetworkInterface"] = "ec2:AttachNetworkInterface";
    EC2["AttachVolume"] = "ec2:AttachVolume";
    EC2["AttachVpnGateway"] = "ec2:AttachVpnGateway";
    EC2["AuthorizeSecurityGroupEgress"] = "ec2:AuthorizeSecurityGroupEgress";
    EC2["AuthorizeSecurityGroupIngress"] = "ec2:AuthorizeSecurityGroupIngress";
    EC2["BundleInstance"] = "ec2:BundleInstance";
    EC2["CancelBundleTask"] = "ec2:CancelBundleTask";
    EC2["CancelConversionTask"] = "ec2:CancelConversionTask";
    EC2["CancelExportTask"] = "ec2:CancelExportTask";
    EC2["CancelImportTask"] = "ec2:CancelImportTask";
    EC2["CancelReservedInstancesListing"] = "ec2:CancelReservedInstancesListing";
    EC2["CancelSpotFleetRequests"] = "ec2:CancelSpotFleetRequests";
    EC2["CancelSpotInstanceRequests"] = "ec2:CancelSpotInstanceRequests";
    EC2["ConfirmProductInstance"] = "ec2:ConfirmProductInstance";
    EC2["CopyFpgaImage"] = "ec2:CopyFpgaImage";
    EC2["CopyImage"] = "ec2:CopyImage";
    EC2["CopySnapshot"] = "ec2:CopySnapshot";
    EC2["CreateCustomerGateway"] = "ec2:CreateCustomerGateway";
    EC2["CreateDefaultSubnet"] = "ec2:CreateDefaultSubnet";
    EC2["CreateDefaultVpc"] = "ec2:CreateDefaultVpc";
    EC2["CreateDhcpOptions"] = "ec2:CreateDhcpOptions";
    EC2["CreateEgressOnlyInternetGateway"] = "ec2:CreateEgressOnlyInternetGateway";
    EC2["CreateFlowLogs"] = "ec2:CreateFlowLogs";
    EC2["CreateFpgaImage"] = "ec2:CreateFpgaImage";
    EC2["CreateImage"] = "ec2:CreateImage";
    EC2["CreateInstanceExportTask"] = "ec2:CreateInstanceExportTask";
    EC2["CreateInternetGateway"] = "ec2:CreateInternetGateway";
    EC2["CreateKeyPair"] = "ec2:CreateKeyPair";
    EC2["CreateLaunchTemplate"] = "ec2:CreateLaunchTemplate";
    EC2["CreateLaunchTemplateVersion"] = "ec2:CreateLaunchTemplateVersion";
    EC2["CreateNatGateway"] = "ec2:CreateNatGateway";
    EC2["CreateNetworkAcl"] = "ec2:CreateNetworkAcl";
    EC2["CreateNetworkAclEntry"] = "ec2:CreateNetworkAclEntry";
    EC2["CreateNetworkInterface"] = "ec2:CreateNetworkInterface";
    EC2["CreateNetworkInterfacePermission"] = "ec2:CreateNetworkInterfacePermission";
    EC2["CreatePlacementGroup"] = "ec2:CreatePlacementGroup";
    EC2["CreateReservedInstancesListing"] = "ec2:CreateReservedInstancesListing";
    EC2["CreateRoute"] = "ec2:CreateRoute";
    EC2["CreateRouteTable"] = "ec2:CreateRouteTable";
    EC2["CreateSecurityGroup"] = "ec2:CreateSecurityGroup";
    EC2["CreateSnapshot"] = "ec2:CreateSnapshot";
    EC2["CreateSpotDatafeedSubscription"] = "ec2:CreateSpotDatafeedSubscription";
    EC2["CreateSubnet"] = "ec2:CreateSubnet";
    EC2["CreateTags"] = "ec2:CreateTags";
    EC2["CreateVolume"] = "ec2:CreateVolume";
    EC2["CreateVpc"] = "ec2:CreateVpc";
    EC2["CreateVpcEndpoint"] = "ec2:CreateVpcEndpoint";
    EC2["CreateVpcEndpointConnectionNotification"] = "ec2:CreateVpcEndpointConnectionNotification";
    EC2["CreateVpcEndpointServiceConfiguration"] = "ec2:CreateVpcEndpointServiceConfiguration";
    EC2["CreateVpcPeeringConnection"] = "ec2:CreateVpcPeeringConnection";
    EC2["CreateVpnConnection"] = "ec2:CreateVpnConnection";
    EC2["CreateVpnConnectionRoute"] = "ec2:CreateVpnConnectionRoute";
    EC2["CreateVpnGateway"] = "ec2:CreateVpnGateway";
    EC2["DeleteCustomerGateway"] = "ec2:DeleteCustomerGateway";
    EC2["DeleteDhcpOptions"] = "ec2:DeleteDhcpOptions";
    EC2["DeleteEgressOnlyInternetGateway"] = "ec2:DeleteEgressOnlyInternetGateway";
    EC2["DeleteFlowLogs"] = "ec2:DeleteFlowLogs";
    EC2["DeleteFpgaImage"] = "ec2:DeleteFpgaImage";
    EC2["DeleteInternetGateway"] = "ec2:DeleteInternetGateway";
    EC2["DeleteKeyPair"] = "ec2:DeleteKeyPair";
    EC2["DeleteLaunchTemplate"] = "ec2:DeleteLaunchTemplate";
    EC2["DeleteLaunchTemplateVersions"] = "ec2:DeleteLaunchTemplateVersions";
    EC2["DeleteNatGateway"] = "ec2:DeleteNatGateway";
    EC2["DeleteNetworkAcl"] = "ec2:DeleteNetworkAcl";
    EC2["DeleteNetworkAclEntry"] = "ec2:DeleteNetworkAclEntry";
    EC2["DeleteNetworkInterface"] = "ec2:DeleteNetworkInterface";
    EC2["DeleteNetworkInterfacePermission"] = "ec2:DeleteNetworkInterfacePermission";
    EC2["DeletePlacementGroup"] = "ec2:DeletePlacementGroup";
    EC2["DeleteRoute"] = "ec2:DeleteRoute";
    EC2["DeleteRouteTable"] = "ec2:DeleteRouteTable";
    EC2["DeleteSecurityGroup"] = "ec2:DeleteSecurityGroup";
    EC2["DeleteSnapshot"] = "ec2:DeleteSnapshot";
    EC2["DeleteSpotDatafeedSubscription"] = "ec2:DeleteSpotDatafeedSubscription";
    EC2["DeleteSubnet"] = "ec2:DeleteSubnet";
    EC2["DeleteTags"] = "ec2:DeleteTags";
    EC2["DeleteVolume"] = "ec2:DeleteVolume";
    EC2["DeleteVpc"] = "ec2:DeleteVpc";
    EC2["DeleteVpcEndpointConnectionNotifications"] = "ec2:DeleteVpcEndpointConnectionNotifications";
    EC2["DeleteVpcEndpointServiceConfigurations"] = "ec2:DeleteVpcEndpointServiceConfigurations";
    EC2["DeleteVpcEndpoints"] = "ec2:DeleteVpcEndpoints";
    EC2["DeleteVpcPeeringConnection"] = "ec2:DeleteVpcPeeringConnection";
    EC2["DeleteVpnConnection"] = "ec2:DeleteVpnConnection";
    EC2["DeleteVpnConnectionRoute"] = "ec2:DeleteVpnConnectionRoute";
    EC2["DeleteVpnGateway"] = "ec2:DeleteVpnGateway";
    EC2["DeregisterImage"] = "ec2:DeregisterImage";
    EC2["DescribeAccountAttributes"] = "ec2:DescribeAccountAttributes";
    EC2["DescribeAddresses"] = "ec2:DescribeAddresses";
    EC2["DescribeAvailabilityZones"] = "ec2:DescribeAvailabilityZones";
    EC2["DescribeBundleTasks"] = "ec2:DescribeBundleTasks";
    EC2["DescribeClassicLinkInstances"] = "ec2:DescribeClassicLinkInstances";
    EC2["DescribeConversionTasks"] = "ec2:DescribeConversionTasks";
    EC2["DescribeCustomerGateways"] = "ec2:DescribeCustomerGateways";
    EC2["DescribeDhcpOptions"] = "ec2:DescribeDhcpOptions";
    EC2["DescribeEgressOnlyInternetGateways"] = "ec2:DescribeEgressOnlyInternetGateways";
    EC2["DescribeElasticGpus"] = "ec2:DescribeElasticGpus";
    EC2["DescribeExportTasks"] = "ec2:DescribeExportTasks";
    EC2["DescribeFlowLogs"] = "ec2:DescribeFlowLogs";
    EC2["DescribeFpgaImageAttribute"] = "ec2:DescribeFpgaImageAttribute";
    EC2["DescribeFpgaImages"] = "ec2:DescribeFpgaImages";
    EC2["DescribeHostReservationOfferings"] = "ec2:DescribeHostReservationOfferings";
    EC2["DescribeHostReservations"] = "ec2:DescribeHostReservations";
    EC2["DescribeHosts"] = "ec2:DescribeHosts";
    EC2["DescribeIamInstanceProfileAssociations"] = "ec2:DescribeIamInstanceProfileAssociations";
    EC2["DescribeIdFormat"] = "ec2:DescribeIdFormat";
    EC2["DescribeIdentityIdFormat"] = "ec2:DescribeIdentityIdFormat";
    EC2["DescribeImageAttribute"] = "ec2:DescribeImageAttribute";
    EC2["DescribeImages"] = "ec2:DescribeImages";
    EC2["DescribeImportImageTasks"] = "ec2:DescribeImportImageTasks";
    EC2["DescribeImportSnapshotTasks"] = "ec2:DescribeImportSnapshotTasks";
    EC2["DescribeInstanceAttribute"] = "ec2:DescribeInstanceAttribute";
    EC2["DescribeInstanceCreditSpecifications"] = "ec2:DescribeInstanceCreditSpecifications";
    EC2["DescribeInstanceStatus"] = "ec2:DescribeInstanceStatus";
    EC2["DescribeInstances"] = "ec2:DescribeInstances";
    EC2["DescribeInternetGateways"] = "ec2:DescribeInternetGateways";
    EC2["DescribeKeyPairs"] = "ec2:DescribeKeyPairs";
    EC2["DescribeLaunchTemplateVersions"] = "ec2:DescribeLaunchTemplateVersions";
    EC2["DescribeLaunchTemplates"] = "ec2:DescribeLaunchTemplates";
    EC2["DescribeMovingAddresses"] = "ec2:DescribeMovingAddresses";
    EC2["DescribeNatGateways"] = "ec2:DescribeNatGateways";
    EC2["DescribeNetworkAcls"] = "ec2:DescribeNetworkAcls";
    EC2["DescribeNetworkInterfaceAttribute"] = "ec2:DescribeNetworkInterfaceAttribute";
    EC2["DescribeNetworkInterfacePermissions"] = "ec2:DescribeNetworkInterfacePermissions";
    EC2["DescribeNetworkInterfaces"] = "ec2:DescribeNetworkInterfaces";
    EC2["DescribePlacementGroups"] = "ec2:DescribePlacementGroups";
    EC2["DescribePrefixLists"] = "ec2:DescribePrefixLists";
    EC2["DescribeRegions"] = "ec2:DescribeRegions";
    EC2["DescribeReservedInstances"] = "ec2:DescribeReservedInstances";
    EC2["DescribeReservedInstancesListings"] = "ec2:DescribeReservedInstancesListings";
    EC2["DescribeReservedInstancesModifications"] = "ec2:DescribeReservedInstancesModifications";
    EC2["DescribeReservedInstancesOfferings"] = "ec2:DescribeReservedInstancesOfferings";
    EC2["DescribeRouteTables"] = "ec2:DescribeRouteTables";
    EC2["DescribeScheduledInstanceAvailability"] = "ec2:DescribeScheduledInstanceAvailability";
    EC2["DescribeScheduledInstances"] = "ec2:DescribeScheduledInstances";
    EC2["DescribeSecurityGroupReferences"] = "ec2:DescribeSecurityGroupReferences";
    EC2["DescribeSecurityGroups"] = "ec2:DescribeSecurityGroups";
    EC2["DescribeSnapshotAttribute"] = "ec2:DescribeSnapshotAttribute";
    EC2["DescribeSnapshots"] = "ec2:DescribeSnapshots";
    EC2["DescribeSpotDatafeedSubscription"] = "ec2:DescribeSpotDatafeedSubscription";
    EC2["DescribeSpotFleetInstances"] = "ec2:DescribeSpotFleetInstances";
    EC2["DescribeSpotFleetRequestHistory"] = "ec2:DescribeSpotFleetRequestHistory";
    EC2["DescribeSpotFleetRequests"] = "ec2:DescribeSpotFleetRequests";
    EC2["DescribeSpotInstanceRequests"] = "ec2:DescribeSpotInstanceRequests";
    EC2["DescribeSpotPriceHistory"] = "ec2:DescribeSpotPriceHistory";
    EC2["DescribeStaleSecurityGroups"] = "ec2:DescribeStaleSecurityGroups";
    EC2["DescribeSubnets"] = "ec2:DescribeSubnets";
    EC2["DescribeTags"] = "ec2:DescribeTags";
    EC2["DescribeVolumeAttribute"] = "ec2:DescribeVolumeAttribute";
    EC2["DescribeVolumeStatus"] = "ec2:DescribeVolumeStatus";
    EC2["DescribeVolumes"] = "ec2:DescribeVolumes";
    EC2["DescribeVolumesModifications"] = "ec2:DescribeVolumesModifications";
    EC2["DescribeVpcAttribute"] = "ec2:DescribeVpcAttribute";
    EC2["DescribeVpcClassicLink"] = "ec2:DescribeVpcClassicLink";
    EC2["DescribeVpcClassicLinkDnsSupport"] = "ec2:DescribeVpcClassicLinkDnsSupport";
    EC2["DescribeVpcEndpointConnectionNotifications"] = "ec2:DescribeVpcEndpointConnectionNotifications";
    EC2["DescribeVpcEndpointConnections"] = "ec2:DescribeVpcEndpointConnections";
    EC2["DescribeVpcEndpointServiceConfigurations"] = "ec2:DescribeVpcEndpointServiceConfigurations";
    EC2["DescribeVpcEndpointServicePermissions"] = "ec2:DescribeVpcEndpointServicePermissions";
    EC2["DescribeVpcEndpointServices"] = "ec2:DescribeVpcEndpointServices";
    EC2["DescribeVpcEndpoints"] = "ec2:DescribeVpcEndpoints";
    EC2["DescribeVpcPeeringConnections"] = "ec2:DescribeVpcPeeringConnections";
    EC2["DescribeVpcs"] = "ec2:DescribeVpcs";
    EC2["DescribeVpnConnections"] = "ec2:DescribeVpnConnections";
    EC2["DescribeVpnGateways"] = "ec2:DescribeVpnGateways";
    EC2["DetachClassicLinkVpc"] = "ec2:DetachClassicLinkVpc";
    EC2["DetachInternetGateway"] = "ec2:DetachInternetGateway";
    EC2["DetachNetworkInterface"] = "ec2:DetachNetworkInterface";
    EC2["DetachVolume"] = "ec2:DetachVolume";
    EC2["DetachVpnGateway"] = "ec2:DetachVpnGateway";
    EC2["DisableVgwRoutePropagation"] = "ec2:DisableVgwRoutePropagation";
    EC2["DisableVpcClassicLink"] = "ec2:DisableVpcClassicLink";
    EC2["DisableVpcClassicLinkDnsSupport"] = "ec2:DisableVpcClassicLinkDnsSupport";
    EC2["DisassociateAddress"] = "ec2:DisassociateAddress";
    EC2["DisassociateIamInstanceProfile"] = "ec2:DisassociateIamInstanceProfile";
    EC2["DisassociateRouteTable"] = "ec2:DisassociateRouteTable";
    EC2["DisassociateSubnetCidrBlock"] = "ec2:DisassociateSubnetCidrBlock";
    EC2["DisassociateVpcCidrBlock"] = "ec2:DisassociateVpcCidrBlock";
    EC2["EnableVgwRoutePropagation"] = "ec2:EnableVgwRoutePropagation";
    EC2["EnableVolumeIO"] = "ec2:EnableVolumeIO";
    EC2["EnableVpcClassicLink"] = "ec2:EnableVpcClassicLink";
    EC2["EnableVpcClassicLinkDnsSupport"] = "ec2:EnableVpcClassicLinkDnsSupport";
    EC2["GetConsoleOutput"] = "ec2:GetConsoleOutput";
    EC2["GetConsoleScreenshot"] = "ec2:GetConsoleScreenshot";
    EC2["GetHostReservationPurchasePreview"] = "ec2:GetHostReservationPurchasePreview";
    EC2["GetLaunchTemplateData"] = "ec2:GetLaunchTemplateData";
    EC2["GetPasswordData"] = "ec2:GetPasswordData";
    EC2["GetReservedInstancesExchangeQuote"] = "ec2:GetReservedInstancesExchangeQuote";
    EC2["ImportImage"] = "ec2:ImportImage";
    EC2["ImportInstance"] = "ec2:ImportInstance";
    EC2["ImportKeyPair"] = "ec2:ImportKeyPair";
    EC2["ImportSnapshot"] = "ec2:ImportSnapshot";
    EC2["ImportVolume"] = "ec2:ImportVolume";
    EC2["ModifyFpgaImageAttribute"] = "ec2:ModifyFpgaImageAttribute";
    EC2["ModifyHosts"] = "ec2:ModifyHosts";
    EC2["ModifyIdFormat"] = "ec2:ModifyIdFormat";
    EC2["ModifyIdentityIdFormat"] = "ec2:ModifyIdentityIdFormat";
    EC2["ModifyImageAttribute"] = "ec2:ModifyImageAttribute";
    EC2["ModifyInstanceAttribute"] = "ec2:ModifyInstanceAttribute";
    EC2["ModifyInstanceCreditSpecification"] = "ec2:ModifyInstanceCreditSpecification";
    EC2["ModifyInstancePlacement"] = "ec2:ModifyInstancePlacement";
    EC2["ModifyLaunchTemplate"] = "ec2:ModifyLaunchTemplate";
    EC2["ModifyNetworkInterfaceAttribute"] = "ec2:ModifyNetworkInterfaceAttribute";
    EC2["ModifyReservedInstances"] = "ec2:ModifyReservedInstances";
    EC2["ModifySnapshotAttribute"] = "ec2:ModifySnapshotAttribute";
    EC2["ModifySpotFleetRequest"] = "ec2:ModifySpotFleetRequest";
    EC2["ModifySubnetAttribute"] = "ec2:ModifySubnetAttribute";
    EC2["ModifyVolume"] = "ec2:ModifyVolume";
    EC2["ModifyVolumeAttribute"] = "ec2:ModifyVolumeAttribute";
    EC2["ModifyVpcAttribute"] = "ec2:ModifyVpcAttribute";
    EC2["ModifyVpcEndpoint"] = "ec2:ModifyVpcEndpoint";
    EC2["ModifyVpcEndpointConnectionNotification"] = "ec2:ModifyVpcEndpointConnectionNotification";
    EC2["ModifyVpcEndpointServiceConfiguration"] = "ec2:ModifyVpcEndpointServiceConfiguration";
    EC2["ModifyVpcEndpointServicePermissions"] = "ec2:ModifyVpcEndpointServicePermissions";
    EC2["ModifyVpcPeeringConnectionOptions"] = "ec2:ModifyVpcPeeringConnectionOptions";
    EC2["ModifyVpcTenancy"] = "ec2:ModifyVpcTenancy";
    EC2["MonitorInstances"] = "ec2:MonitorInstances";
    EC2["MoveAddressToVpc"] = "ec2:MoveAddressToVpc";
    EC2["PurchaseHostReservation"] = "ec2:PurchaseHostReservation";
    EC2["PurchaseReservedInstancesOffering"] = "ec2:PurchaseReservedInstancesOffering";
    EC2["PurchaseScheduledInstances"] = "ec2:PurchaseScheduledInstances";
    EC2["RebootInstances"] = "ec2:RebootInstances";
    EC2["RegisterImage"] = "ec2:RegisterImage";
    EC2["RejectVpcEndpointConnections"] = "ec2:RejectVpcEndpointConnections";
    EC2["RejectVpcPeeringConnection"] = "ec2:RejectVpcPeeringConnection";
    EC2["ReleaseAddress"] = "ec2:ReleaseAddress";
    EC2["ReleaseHosts"] = "ec2:ReleaseHosts";
    EC2["ReplaceIamInstanceProfileAssociation"] = "ec2:ReplaceIamInstanceProfileAssociation";
    EC2["ReplaceNetworkAclAssociation"] = "ec2:ReplaceNetworkAclAssociation";
    EC2["ReplaceNetworkAclEntry"] = "ec2:ReplaceNetworkAclEntry";
    EC2["ReplaceRoute"] = "ec2:ReplaceRoute";
    EC2["ReplaceRouteTableAssociation"] = "ec2:ReplaceRouteTableAssociation";
    EC2["ReportInstanceStatus"] = "ec2:ReportInstanceStatus";
    EC2["RequestSpotFleet"] = "ec2:RequestSpotFleet";
    EC2["RequestSpotInstances"] = "ec2:RequestSpotInstances";
    EC2["ResetFpgaImageAttribute"] = "ec2:ResetFpgaImageAttribute";
    EC2["ResetImageAttribute"] = "ec2:ResetImageAttribute";
    EC2["ResetInstanceAttribute"] = "ec2:ResetInstanceAttribute";
    EC2["ResetNetworkInterfaceAttribute"] = "ec2:ResetNetworkInterfaceAttribute";
    EC2["ResetSnapshotAttribute"] = "ec2:ResetSnapshotAttribute";
    EC2["RestoreAddressToClassic"] = "ec2:RestoreAddressToClassic";
    EC2["RevokeSecurityGroupEgress"] = "ec2:RevokeSecurityGroupEgress";
    EC2["RevokeSecurityGroupIngress"] = "ec2:RevokeSecurityGroupIngress";
    EC2["RunInstances"] = "ec2:RunInstances";
    EC2["RunScheduledInstances"] = "ec2:RunScheduledInstances";
    EC2["StartInstances"] = "ec2:StartInstances";
    EC2["StopInstances"] = "ec2:StopInstances";
    EC2["TerminateInstances"] = "ec2:TerminateInstances";
    EC2["UnassignIpv6Addresses"] = "ec2:UnassignIpv6Addresses";
    EC2["UnassignPrivateIpAddresses"] = "ec2:UnassignPrivateIpAddresses";
    EC2["UnmonitorInstances"] = "ec2:UnmonitorInstances";
    EC2["UpdateSecurityGroupRuleDescriptionsEgress"] = "ec2:UpdateSecurityGroupRuleDescriptionsEgress";
    EC2["UpdateSecurityGroupRuleDescriptionsIngress"] = "ec2:UpdateSecurityGroupRuleDescriptionsIngress";
})(EC2 = exports.EC2 || (exports.EC2 = {}));
/** Actions for Amazon EC2 Container Registry
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2containerregistry.html
  */
var ECR;
(function (ECR) {
    ECR["BatchCheckLayerAvailability"] = "ecr:BatchCheckLayerAvailability";
    ECR["BatchDeleteImage"] = "ecr:BatchDeleteImage";
    ECR["BatchGetImage"] = "ecr:BatchGetImage";
    ECR["CompleteLayerUpload"] = "ecr:CompleteLayerUpload";
    ECR["CreateRepository"] = "ecr:CreateRepository";
    ECR["DeleteRepository"] = "ecr:DeleteRepository";
    ECR["DeleteRepositoryPolicy"] = "ecr:DeleteRepositoryPolicy";
    ECR["DescribeImages"] = "ecr:DescribeImages";
    ECR["DescribeRepositories"] = "ecr:DescribeRepositories";
    ECR["GetAuthorizationToken"] = "ecr:GetAuthorizationToken";
    ECR["GetDownloadUrlForLayer"] = "ecr:GetDownloadUrlForLayer";
    ECR["GetRepositoryPolicy"] = "ecr:GetRepositoryPolicy";
    ECR["InitiateLayerUpload"] = "ecr:InitiateLayerUpload";
    ECR["ListImages"] = "ecr:ListImages";
    ECR["PutImage"] = "ecr:PutImage";
    ECR["SetRepositoryPolicy"] = "ecr:SetRepositoryPolicy";
    ECR["UploadLayerPart"] = "ecr:UploadLayerPart";
})(ECR = exports.ECR || (exports.ECR = {}));
/** Actions for Amazon EC2 Container Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2containerservice.html
  */
var ECS;
(function (ECS) {
    ECS["CreateCluster"] = "ecs:CreateCluster";
    ECS["CreateService"] = "ecs:CreateService";
    ECS["DeleteCluster"] = "ecs:DeleteCluster";
    ECS["DeleteService"] = "ecs:DeleteService";
    ECS["DeregisterContainerInstance"] = "ecs:DeregisterContainerInstance";
    ECS["DeregisterTaskDefinition"] = "ecs:DeregisterTaskDefinition";
    ECS["DescribeClusters"] = "ecs:DescribeClusters";
    ECS["DescribeContainerInstances"] = "ecs:DescribeContainerInstances";
    ECS["DescribeServices"] = "ecs:DescribeServices";
    ECS["DescribeTaskDefinition"] = "ecs:DescribeTaskDefinition";
    ECS["DescribeTasks"] = "ecs:DescribeTasks";
    ECS["DiscoverPollEndpoint"] = "ecs:DiscoverPollEndpoint";
    ECS["ListClusters"] = "ecs:ListClusters";
    ECS["ListContainerInstances"] = "ecs:ListContainerInstances";
    ECS["ListServices"] = "ecs:ListServices";
    ECS["ListTaskDefinitionFamilies"] = "ecs:ListTaskDefinitionFamilies";
    ECS["ListTaskDefinitions"] = "ecs:ListTaskDefinitions";
    ECS["ListTasks"] = "ecs:ListTasks";
    ECS["Poll"] = "ecs:Poll";
    ECS["RegisterContainerInstance"] = "ecs:RegisterContainerInstance";
    ECS["RegisterTaskDefinition"] = "ecs:RegisterTaskDefinition";
    ECS["RunTask"] = "ecs:RunTask";
    ECS["StartTask"] = "ecs:StartTask";
    ECS["StartTelemetrySession"] = "ecs:StartTelemetrySession";
    ECS["StopTask"] = "ecs:StopTask";
    ECS["SubmitContainerStateChange"] = "ecs:SubmitContainerStateChange";
    ECS["SubmitTaskStateChange"] = "ecs:SubmitTaskStateChange";
    ECS["UpdateContainerAgent"] = "ecs:UpdateContainerAgent";
    ECS["UpdateContainerInstancesState"] = "ecs:UpdateContainerInstancesState";
    ECS["UpdateService"] = "ecs:UpdateService";
})(ECS = exports.ECS || (exports.ECS = {}));
/** Actions for Amazon ElastiCache
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticache.html
  */
var ElastiCache;
(function (ElastiCache) {
    ElastiCache["AddTagsToResource"] = "elasticache:AddTagsToResource";
    ElastiCache["AuthorizeCacheSecurityGroupIngress"] = "elasticache:AuthorizeCacheSecurityGroupIngress";
    ElastiCache["CopySnapshot"] = "elasticache:CopySnapshot";
    ElastiCache["CreateCacheCluster"] = "elasticache:CreateCacheCluster";
    ElastiCache["CreateCacheParameterGroup"] = "elasticache:CreateCacheParameterGroup";
    ElastiCache["CreateCacheSecurityGroup"] = "elasticache:CreateCacheSecurityGroup";
    ElastiCache["CreateCacheSubnetGroup"] = "elasticache:CreateCacheSubnetGroup";
    ElastiCache["CreateReplicationGroup"] = "elasticache:CreateReplicationGroup";
    ElastiCache["CreateSnapshot"] = "elasticache:CreateSnapshot";
    ElastiCache["DeleteCacheCluster"] = "elasticache:DeleteCacheCluster";
    ElastiCache["DeleteCacheParameterGroup"] = "elasticache:DeleteCacheParameterGroup";
    ElastiCache["DeleteCacheSecurityGroup"] = "elasticache:DeleteCacheSecurityGroup";
    ElastiCache["DeleteCacheSubnetGroup"] = "elasticache:DeleteCacheSubnetGroup";
    ElastiCache["DeleteReplicationGroup"] = "elasticache:DeleteReplicationGroup";
    ElastiCache["DeleteSnapshot"] = "elasticache:DeleteSnapshot";
    ElastiCache["DescribeCacheClusters"] = "elasticache:DescribeCacheClusters";
    ElastiCache["DescribeCacheEngineVersions"] = "elasticache:DescribeCacheEngineVersions";
    ElastiCache["DescribeCacheParameterGroups"] = "elasticache:DescribeCacheParameterGroups";
    ElastiCache["DescribeCacheParameters"] = "elasticache:DescribeCacheParameters";
    ElastiCache["DescribeCacheSecurityGroups"] = "elasticache:DescribeCacheSecurityGroups";
    ElastiCache["DescribeCacheSubnetGroups"] = "elasticache:DescribeCacheSubnetGroups";
    ElastiCache["DescribeEngineDefaultParameters"] = "elasticache:DescribeEngineDefaultParameters";
    ElastiCache["DescribeEvents"] = "elasticache:DescribeEvents";
    ElastiCache["DescribeReplicationGroups"] = "elasticache:DescribeReplicationGroups";
    ElastiCache["DescribeReservedCacheNodes"] = "elasticache:DescribeReservedCacheNodes";
    ElastiCache["DescribeReservedCacheNodesOfferings"] = "elasticache:DescribeReservedCacheNodesOfferings";
    ElastiCache["DescribeSnapshots"] = "elasticache:DescribeSnapshots";
    ElastiCache["ListAllowedNodeTypeModifications"] = "elasticache:ListAllowedNodeTypeModifications";
    ElastiCache["ListTagsForResource"] = "elasticache:ListTagsForResource";
    ElastiCache["ModifyCacheCluster"] = "elasticache:ModifyCacheCluster";
    ElastiCache["ModifyCacheParameterGroup"] = "elasticache:ModifyCacheParameterGroup";
    ElastiCache["ModifyCacheSubnetGroup"] = "elasticache:ModifyCacheSubnetGroup";
    ElastiCache["ModifyReplicationGroup"] = "elasticache:ModifyReplicationGroup";
    ElastiCache["PurchaseReservedCacheNodesOffering"] = "elasticache:PurchaseReservedCacheNodesOffering";
    ElastiCache["RebootCacheCluster"] = "elasticache:RebootCacheCluster";
    ElastiCache["RemoveTagsFromResource"] = "elasticache:RemoveTagsFromResource";
    ElastiCache["ResetCacheParameterGroup"] = "elasticache:ResetCacheParameterGroup";
    ElastiCache["RevokeCacheSecurityGroupIngress"] = "elasticache:RevokeCacheSecurityGroupIngress";
})(ElastiCache = exports.ElastiCache || (exports.ElastiCache = {}));
/** Actions for Amazon Elastic File System
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticfilesystem.html
  */
var ElasticFileSystem;
(function (ElasticFileSystem) {
    ElasticFileSystem["CreateFileSystem"] = "elasticfilesystem:CreateFileSystem";
    ElasticFileSystem["CreateMountTarget"] = "elasticfilesystem:CreateMountTarget";
    ElasticFileSystem["CreateTags"] = "elasticfilesystem:CreateTags";
    ElasticFileSystem["DeleteFileSystem"] = "elasticfilesystem:DeleteFileSystem";
    ElasticFileSystem["DeleteMountTarget"] = "elasticfilesystem:DeleteMountTarget";
    ElasticFileSystem["DeleteTags"] = "elasticfilesystem:DeleteTags";
    ElasticFileSystem["DescribeFileSystems"] = "elasticfilesystem:DescribeFileSystems";
    ElasticFileSystem["DescribeMountTargetSecurityGroups"] = "elasticfilesystem:DescribeMountTargetSecurityGroups";
    ElasticFileSystem["DescribeMountTargets"] = "elasticfilesystem:DescribeMountTargets";
    ElasticFileSystem["DescribeTags"] = "elasticfilesystem:DescribeTags";
    ElasticFileSystem["ModifyMountTargetSecurityGroups"] = "elasticfilesystem:ModifyMountTargetSecurityGroups";
})(ElasticFileSystem = exports.ElasticFileSystem || (exports.ElasticFileSystem = {}));
/** Actions for Amazon Elastic MapReduce
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticmapreduce.html
  */
var ElasticMapReduce;
(function (ElasticMapReduce) {
    ElasticMapReduce["AddInstanceGroups"] = "elasticmapreduce:AddInstanceGroups";
    ElasticMapReduce["AddJobFlowSteps"] = "elasticmapreduce:AddJobFlowSteps";
    ElasticMapReduce["AddTags"] = "elasticmapreduce:AddTags";
    ElasticMapReduce["CancelSteps"] = "elasticmapreduce:CancelSteps";
    ElasticMapReduce["CreateSecurityConfiguration"] = "elasticmapreduce:CreateSecurityConfiguration";
    ElasticMapReduce["DeleteSecurityConfiguration"] = "elasticmapreduce:DeleteSecurityConfiguration";
    ElasticMapReduce["DescribeCluster"] = "elasticmapreduce:DescribeCluster";
    ElasticMapReduce["DescribeJobFlows"] = "elasticmapreduce:DescribeJobFlows";
    ElasticMapReduce["DescribeSecurityConfiguration"] = "elasticmapreduce:DescribeSecurityConfiguration";
    ElasticMapReduce["DescribeStep"] = "elasticmapreduce:DescribeStep";
    ElasticMapReduce["ListBootstrapActions"] = "elasticmapreduce:ListBootstrapActions";
    ElasticMapReduce["ListClusters"] = "elasticmapreduce:ListClusters";
    ElasticMapReduce["ListInstanceGroups"] = "elasticmapreduce:ListInstanceGroups";
    ElasticMapReduce["ListInstances"] = "elasticmapreduce:ListInstances";
    ElasticMapReduce["ListSecurityConfigurations"] = "elasticmapreduce:ListSecurityConfigurations";
    ElasticMapReduce["ListSteps"] = "elasticmapreduce:ListSteps";
    ElasticMapReduce["ModifyInstanceGroups"] = "elasticmapreduce:ModifyInstanceGroups";
    ElasticMapReduce["PutAutoScalingPolicy"] = "elasticmapreduce:PutAutoScalingPolicy";
    ElasticMapReduce["RemoveAutoScalingPolicy"] = "elasticmapreduce:RemoveAutoScalingPolicy";
    ElasticMapReduce["RemoveTags"] = "elasticmapreduce:RemoveTags";
    ElasticMapReduce["RunJobFlow"] = "elasticmapreduce:RunJobFlow";
    ElasticMapReduce["SetTerminationProtection"] = "elasticmapreduce:SetTerminationProtection";
    ElasticMapReduce["SetVisibleToAllUsers"] = "elasticmapreduce:SetVisibleToAllUsers";
    ElasticMapReduce["TerminateJobFlows"] = "elasticmapreduce:TerminateJobFlows";
    ElasticMapReduce["ViewEventsFromAllClustersInConsole"] = "elasticmapreduce:ViewEventsFromAllClustersInConsole";
})(ElasticMapReduce = exports.ElasticMapReduce || (exports.ElasticMapReduce = {}));
/** Actions for Amazon Elastic Transcoder
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelastictranscoder.html
  */
var ElasticTranscoder;
(function (ElasticTranscoder) {
    ElasticTranscoder["CancelJob"] = "elastictranscoder:CancelJob";
    ElasticTranscoder["CreateJob"] = "elastictranscoder:CreateJob";
    ElasticTranscoder["CreatePipeline"] = "elastictranscoder:CreatePipeline";
    ElasticTranscoder["CreatePreset"] = "elastictranscoder:CreatePreset";
    ElasticTranscoder["DeletePipeline"] = "elastictranscoder:DeletePipeline";
    ElasticTranscoder["DeletePreset"] = "elastictranscoder:DeletePreset";
    ElasticTranscoder["ListJobsByPipeline"] = "elastictranscoder:ListJobsByPipeline";
    ElasticTranscoder["ListJobsByStatus"] = "elastictranscoder:ListJobsByStatus";
    ElasticTranscoder["ListPipelines"] = "elastictranscoder:ListPipelines";
    ElasticTranscoder["ListPresets"] = "elastictranscoder:ListPresets";
    ElasticTranscoder["ReadJob"] = "elastictranscoder:ReadJob";
    ElasticTranscoder["ReadPipeline"] = "elastictranscoder:ReadPipeline";
    ElasticTranscoder["ReadPreset"] = "elastictranscoder:ReadPreset";
    ElasticTranscoder["TestRole"] = "elastictranscoder:TestRole";
    ElasticTranscoder["UpdatePipeline"] = "elastictranscoder:UpdatePipeline";
    ElasticTranscoder["UpdatePipelineNotifications"] = "elastictranscoder:UpdatePipelineNotifications";
    ElasticTranscoder["UpdatePipelineStatus"] = "elastictranscoder:UpdatePipelineStatus";
})(ElasticTranscoder = exports.ElasticTranscoder || (exports.ElasticTranscoder = {}));
/** Actions for Amazon Elasticsearch Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticsearchservice.html
  */
var ES;
(function (ES) {
    ES["AddTags"] = "es:AddTags";
    ES["CreateElasticsearchDomain"] = "es:CreateElasticsearchDomain";
    ES["DeleteElasticsearchDomain"] = "es:DeleteElasticsearchDomain";
    ES["DescribeElasticsearchDomain"] = "es:DescribeElasticsearchDomain";
    ES["DescribeElasticsearchDomainConfig"] = "es:DescribeElasticsearchDomainConfig";
    ES["DescribeElasticsearchDomains"] = "es:DescribeElasticsearchDomains";
    ES["ESHttpDelete"] = "es:ESHttpDelete";
    ES["ESHttpGet"] = "es:ESHttpGet";
    ES["ESHttpHead"] = "es:ESHttpHead";
    ES["ESHttpPost"] = "es:ESHttpPost";
    ES["ESHttpPut"] = "es:ESHttpPut";
    ES["ListDomainNames"] = "es:ListDomainNames";
    ES["ListTags"] = "es:ListTags";
    ES["RemoveTags"] = "es:RemoveTags";
    ES["UpdateElasticsearchDomainConfig"] = "es:UpdateElasticsearchDomainConfig";
})(ES = exports.ES || (exports.ES = {}));
/** Actions for Amazon FreeRTOS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfreertos.html
  */
var FreeRTOS;
(function (FreeRTOS) {
    FreeRTOS["CreateSoftwareConfiguration"] = "freertos:CreateSoftwareConfiguration";
    FreeRTOS["DeleteSoftwareConfiguration"] = "freertos:DeleteSoftwareConfiguration";
    FreeRTOS["DescribeHardwarePlatform"] = "freertos:DescribeHardwarePlatform";
    FreeRTOS["DescribeSoftwareConfiguration"] = "freertos:DescribeSoftwareConfiguration";
    FreeRTOS["GetSoftwareURL"] = "freertos:GetSoftwareURL";
    FreeRTOS["GetSoftwareURLForConfiguration"] = "freertos:GetSoftwareURLForConfiguration";
    FreeRTOS["ListFreeRTOSVersions"] = "freertos:ListFreeRTOSVersions";
    FreeRTOS["ListHardwarePlatforms"] = "freertos:ListHardwarePlatforms";
    FreeRTOS["ListHardwareVendors"] = "freertos:ListHardwareVendors";
    FreeRTOS["ListSoftwareConfigurations"] = "freertos:ListSoftwareConfigurations";
    FreeRTOS["UpdateSoftwareConfiguration"] = "freertos:UpdateSoftwareConfiguration";
})(FreeRTOS = exports.FreeRTOS || (exports.FreeRTOS = {}));
/** Actions for Amazon GameLift
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazongamelift.html
  */
var GameLift;
(function (GameLift) {
    GameLift["CreateAlias"] = "gamelift:CreateAlias";
    GameLift["CreateBuild"] = "gamelift:CreateBuild";
    GameLift["CreateFleet"] = "gamelift:CreateFleet";
    GameLift["CreateGameSession"] = "gamelift:CreateGameSession";
    GameLift["CreatePlayerSession"] = "gamelift:CreatePlayerSession";
    GameLift["CreatePlayerSessions"] = "gamelift:CreatePlayerSessions";
    GameLift["DeleteAlias"] = "gamelift:DeleteAlias";
    GameLift["DeleteBuild"] = "gamelift:DeleteBuild";
    GameLift["DeleteFleet"] = "gamelift:DeleteFleet";
    GameLift["DeleteScalingPolicy"] = "gamelift:DeleteScalingPolicy";
    GameLift["DescribeAlias"] = "gamelift:DescribeAlias";
    GameLift["DescribeBuild"] = "gamelift:DescribeBuild";
    GameLift["DescribeEC2InstanceLimits"] = "gamelift:DescribeEC2InstanceLimits";
    GameLift["DescribeFleetAttributes"] = "gamelift:DescribeFleetAttributes";
    GameLift["DescribeFleetCapacity"] = "gamelift:DescribeFleetCapacity";
    GameLift["DescribeFleetEvents"] = "gamelift:DescribeFleetEvents";
    GameLift["DescribeFleetPortSettings"] = "gamelift:DescribeFleetPortSettings";
    GameLift["DescribeFleetUtilization"] = "gamelift:DescribeFleetUtilization";
    GameLift["DescribeGameSessionDetails"] = "gamelift:DescribeGameSessionDetails";
    GameLift["DescribeGameSessions"] = "gamelift:DescribeGameSessions";
    GameLift["DescribeInstances"] = "gamelift:DescribeInstances";
    GameLift["DescribePlayerSessions"] = "gamelift:DescribePlayerSessions";
    GameLift["DescribeRuntimeConfiguration"] = "gamelift:DescribeRuntimeConfiguration";
    GameLift["DescribeScalingPolicies"] = "gamelift:DescribeScalingPolicies";
    GameLift["GetGameSessionLogUrl"] = "gamelift:GetGameSessionLogUrl";
    GameLift["GetInstanceAccess"] = "gamelift:GetInstanceAccess";
    GameLift["ListAliases"] = "gamelift:ListAliases";
    GameLift["ListBuilds"] = "gamelift:ListBuilds";
    GameLift["ListFleets"] = "gamelift:ListFleets";
    GameLift["PutScalingPolicy"] = "gamelift:PutScalingPolicy";
    GameLift["RequestUploadCredentials"] = "gamelift:RequestUploadCredentials";
    GameLift["ResolveAlias"] = "gamelift:ResolveAlias";
    GameLift["SearchGameSessions"] = "gamelift:SearchGameSessions";
    GameLift["UpdateAlias"] = "gamelift:UpdateAlias";
    GameLift["UpdateBuild"] = "gamelift:UpdateBuild";
    GameLift["UpdateFleetAttributes"] = "gamelift:UpdateFleetAttributes";
    GameLift["UpdateFleetCapacity"] = "gamelift:UpdateFleetCapacity";
    GameLift["UpdateFleetPortSettings"] = "gamelift:UpdateFleetPortSettings";
    GameLift["UpdateGameSession"] = "gamelift:UpdateGameSession";
    GameLift["UpdateRuntimeConfiguration"] = "gamelift:UpdateRuntimeConfiguration";
})(GameLift = exports.GameLift || (exports.GameLift = {}));
/** Actions for Amazon Glacier
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonglacier.html
  */
var Glacier;
(function (Glacier) {
    Glacier["AbortMultipartUpload"] = "glacier:AbortMultipartUpload";
    Glacier["AbortVaultLock"] = "glacier:AbortVaultLock";
    Glacier["AddTagsToVault"] = "glacier:AddTagsToVault";
    Glacier["CompleteMultipartUpload"] = "glacier:CompleteMultipartUpload";
    Glacier["CompleteVaultLock"] = "glacier:CompleteVaultLock";
    Glacier["CreateVault"] = "glacier:CreateVault";
    Glacier["DeleteArchive"] = "glacier:DeleteArchive";
    Glacier["DeleteVault"] = "glacier:DeleteVault";
    Glacier["DeleteVaultAccessPolicy"] = "glacier:DeleteVaultAccessPolicy";
    Glacier["DeleteVaultNotifications"] = "glacier:DeleteVaultNotifications";
    Glacier["DescribeJob"] = "glacier:DescribeJob";
    Glacier["DescribeVault"] = "glacier:DescribeVault";
    Glacier["GetDataRetrievalPolicy"] = "glacier:GetDataRetrievalPolicy";
    Glacier["GetJobOutput"] = "glacier:GetJobOutput";
    Glacier["GetVaultAccessPolicy"] = "glacier:GetVaultAccessPolicy";
    Glacier["GetVaultLock"] = "glacier:GetVaultLock";
    Glacier["GetVaultNotifications"] = "glacier:GetVaultNotifications";
    Glacier["InitiateJob"] = "glacier:InitiateJob";
    Glacier["InitiateMultipartUpload"] = "glacier:InitiateMultipartUpload";
    Glacier["InitiateVaultLock"] = "glacier:InitiateVaultLock";
    Glacier["ListJobs"] = "glacier:ListJobs";
    Glacier["ListMultipartUploads"] = "glacier:ListMultipartUploads";
    Glacier["ListParts"] = "glacier:ListParts";
    Glacier["ListProvisionedCapacity"] = "glacier:ListProvisionedCapacity";
    Glacier["ListTagsForVault"] = "glacier:ListTagsForVault";
    Glacier["ListVaults"] = "glacier:ListVaults";
    Glacier["PurchaseProvisionedCapacity"] = "glacier:PurchaseProvisionedCapacity";
    Glacier["RemoveTagsFromVault"] = "glacier:RemoveTagsFromVault";
    Glacier["SetDataRetrievalPolicy"] = "glacier:SetDataRetrievalPolicy";
    Glacier["SetVaultAccessPolicy"] = "glacier:SetVaultAccessPolicy";
    Glacier["SetVaultNotifications"] = "glacier:SetVaultNotifications";
    Glacier["UploadArchive"] = "glacier:UploadArchive";
    Glacier["UploadMultipartPart"] = "glacier:UploadMultipartPart";
})(Glacier = exports.Glacier || (exports.Glacier = {}));
/** Actions for Amazon GuardDuty
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonguardduty.html
  */
var GuardDuty;
(function (GuardDuty) {
    GuardDuty["AcceptInvitation"] = "guardduty:AcceptInvitation";
    GuardDuty["ArchiveFindings"] = "guardduty:ArchiveFindings";
    GuardDuty["CreateDetector"] = "guardduty:CreateDetector";
    GuardDuty["CreateIPSet"] = "guardduty:CreateIPSet";
    GuardDuty["CreateMembers"] = "guardduty:CreateMembers";
    GuardDuty["CreateSampleFindings"] = "guardduty:CreateSampleFindings";
    GuardDuty["CreateThreatIntelSet"] = "guardduty:CreateThreatIntelSet";
    GuardDuty["DeclineInvitations"] = "guardduty:DeclineInvitations";
    GuardDuty["DeleteDetector"] = "guardduty:DeleteDetector";
    GuardDuty["DeleteIPSet"] = "guardduty:DeleteIPSet";
    GuardDuty["DeleteInvitations"] = "guardduty:DeleteInvitations";
    GuardDuty["DeleteMembers"] = "guardduty:DeleteMembers";
    GuardDuty["DeleteThreatIntelSet"] = "guardduty:DeleteThreatIntelSet";
    GuardDuty["DisassociateFromMasterAccount"] = "guardduty:DisassociateFromMasterAccount";
    GuardDuty["DisassociateMembers"] = "guardduty:DisassociateMembers";
    GuardDuty["GetDetector"] = "guardduty:GetDetector";
    GuardDuty["GetFindings"] = "guardduty:GetFindings";
    GuardDuty["GetFindingsStatistics"] = "guardduty:GetFindingsStatistics";
    GuardDuty["GetIPSet"] = "guardduty:GetIPSet";
    GuardDuty["GetInvitationsCount"] = "guardduty:GetInvitationsCount";
    GuardDuty["GetMasterAccount"] = "guardduty:GetMasterAccount";
    GuardDuty["GetMembers"] = "guardduty:GetMembers";
    GuardDuty["GetThreatIntelSet"] = "guardduty:GetThreatIntelSet";
    GuardDuty["InviteMembers"] = "guardduty:InviteMembers";
    GuardDuty["ListDetectors"] = "guardduty:ListDetectors";
    GuardDuty["ListFindings"] = "guardduty:ListFindings";
    GuardDuty["ListIPSets"] = "guardduty:ListIPSets";
    GuardDuty["ListInvitations"] = "guardduty:ListInvitations";
    GuardDuty["ListMembers"] = "guardduty:ListMembers";
    GuardDuty["ListThreatIntelSets"] = "guardduty:ListThreatIntelSets";
    GuardDuty["StartMonitoringMembers"] = "guardduty:StartMonitoringMembers";
    GuardDuty["StopMonitoringMembers"] = "guardduty:StopMonitoringMembers";
    GuardDuty["UnarchiveFindings"] = "guardduty:UnarchiveFindings";
    GuardDuty["UpdateDetector"] = "guardduty:UpdateDetector";
    GuardDuty["UpdateFindingsFeedback"] = "guardduty:UpdateFindingsFeedback";
    GuardDuty["UpdateIPSet"] = "guardduty:UpdateIPSet";
    GuardDuty["UpdateThreatIntelSet"] = "guardduty:UpdateThreatIntelSet";
})(GuardDuty = exports.GuardDuty || (exports.GuardDuty = {}));
/** Actions for Amazon Inspector
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoninspector.html
  */
var Inspector;
(function (Inspector) {
    Inspector["AddAttributesToFindings"] = "inspector:AddAttributesToFindings";
    Inspector["CreateAssessmentTarget"] = "inspector:CreateAssessmentTarget";
    Inspector["CreateAssessmentTemplate"] = "inspector:CreateAssessmentTemplate";
    Inspector["CreateResourceGroup"] = "inspector:CreateResourceGroup";
    Inspector["DeleteAssessmentRun"] = "inspector:DeleteAssessmentRun";
    Inspector["DeleteAssessmentTarget"] = "inspector:DeleteAssessmentTarget";
    Inspector["DeleteAssessmentTemplate"] = "inspector:DeleteAssessmentTemplate";
    Inspector["DescribeAssessmentRuns"] = "inspector:DescribeAssessmentRuns";
    Inspector["DescribeAssessmentTargets"] = "inspector:DescribeAssessmentTargets";
    Inspector["DescribeAssessmentTemplates"] = "inspector:DescribeAssessmentTemplates";
    Inspector["DescribeCrossAccountAccessRole"] = "inspector:DescribeCrossAccountAccessRole";
    Inspector["DescribeFindings"] = "inspector:DescribeFindings";
    Inspector["DescribeResourceGroups"] = "inspector:DescribeResourceGroups";
    Inspector["DescribeRulesPackages"] = "inspector:DescribeRulesPackages";
    Inspector["GetTelemetryMetadata"] = "inspector:GetTelemetryMetadata";
    Inspector["ListAssessmentRunAgents"] = "inspector:ListAssessmentRunAgents";
    Inspector["ListAssessmentRuns"] = "inspector:ListAssessmentRuns";
    Inspector["ListAssessmentTargets"] = "inspector:ListAssessmentTargets";
    Inspector["ListAssessmentTemplates"] = "inspector:ListAssessmentTemplates";
    Inspector["ListEventSubscriptions"] = "inspector:ListEventSubscriptions";
    Inspector["ListFindings"] = "inspector:ListFindings";
    Inspector["ListRulesPackages"] = "inspector:ListRulesPackages";
    Inspector["ListTagsForResource"] = "inspector:ListTagsForResource";
    Inspector["PreviewAgents"] = "inspector:PreviewAgents";
    Inspector["RegisterCrossAccountAccessRole"] = "inspector:RegisterCrossAccountAccessRole";
    Inspector["RemoveAttributesFromFindings"] = "inspector:RemoveAttributesFromFindings";
    Inspector["SetTagsForResource"] = "inspector:SetTagsForResource";
    Inspector["StartAssessmentRun"] = "inspector:StartAssessmentRun";
    Inspector["StopAssessmentRun"] = "inspector:StopAssessmentRun";
    Inspector["SubscribeToEvent"] = "inspector:SubscribeToEvent";
    Inspector["UnsubscribeFromEvent"] = "inspector:UnsubscribeFromEvent";
    Inspector["UpdateAssessmentTarget"] = "inspector:UpdateAssessmentTarget";
})(Inspector = exports.Inspector || (exports.Inspector = {}));
/** Actions for Amazon Kinesis
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesis.html
  */
var Kinesis;
(function (Kinesis) {
    Kinesis["AddTagsToStream"] = "kinesis:AddTagsToStream";
    Kinesis["CreateStream"] = "kinesis:CreateStream";
    Kinesis["DecreaseStreamRetentionPeriod"] = "kinesis:DecreaseStreamRetentionPeriod";
    Kinesis["DeleteStream"] = "kinesis:DeleteStream";
    Kinesis["DescribeLimits"] = "kinesis:DescribeLimits";
    Kinesis["DescribeStream"] = "kinesis:DescribeStream";
    Kinesis["DisableEnhancedMonitoring"] = "kinesis:DisableEnhancedMonitoring";
    Kinesis["EnableEnhancedMonitoring"] = "kinesis:EnableEnhancedMonitoring";
    Kinesis["GetRecords"] = "kinesis:GetRecords";
    Kinesis["GetShardIterator"] = "kinesis:GetShardIterator";
    Kinesis["IncreaseStreamRetentionPeriod"] = "kinesis:IncreaseStreamRetentionPeriod";
    Kinesis["ListStreams"] = "kinesis:ListStreams";
    Kinesis["ListTagsForStream"] = "kinesis:ListTagsForStream";
    Kinesis["MergeShards"] = "kinesis:MergeShards";
    Kinesis["PutRecord"] = "kinesis:PutRecord";
    Kinesis["PutRecords"] = "kinesis:PutRecords";
    Kinesis["RemoveTagsFromStream"] = "kinesis:RemoveTagsFromStream";
    Kinesis["SplitShard"] = "kinesis:SplitShard";
    Kinesis["UpdateShardCount"] = "kinesis:UpdateShardCount";
})(Kinesis = exports.Kinesis || (exports.Kinesis = {}));
/** Actions for Amazon Kinesis Analytics
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisanalytics.html
  */
var KinesisAnalytics;
(function (KinesisAnalytics) {
    KinesisAnalytics["AddApplicationInput"] = "kinesisanalytics:AddApplicationInput";
    KinesisAnalytics["AddApplicationOutput"] = "kinesisanalytics:AddApplicationOutput";
    KinesisAnalytics["AddApplicationReferenceDataSource"] = "kinesisanalytics:AddApplicationReferenceDataSource";
    KinesisAnalytics["CreateApplication"] = "kinesisanalytics:CreateApplication";
    KinesisAnalytics["DeleteApplication"] = "kinesisanalytics:DeleteApplication";
    KinesisAnalytics["DeleteApplicationOutput"] = "kinesisanalytics:DeleteApplicationOutput";
    KinesisAnalytics["DeleteApplicationReferenceDataSource"] = "kinesisanalytics:DeleteApplicationReferenceDataSource";
    KinesisAnalytics["DescribeApplication"] = "kinesisanalytics:DescribeApplication";
    KinesisAnalytics["DiscoverInputSchema"] = "kinesisanalytics:DiscoverInputSchema";
    KinesisAnalytics["ListApplications"] = "kinesisanalytics:ListApplications";
    KinesisAnalytics["StartApplication"] = "kinesisanalytics:StartApplication";
    KinesisAnalytics["StopApplication"] = "kinesisanalytics:StopApplication";
    KinesisAnalytics["UpdateApplication"] = "kinesisanalytics:UpdateApplication";
})(KinesisAnalytics = exports.KinesisAnalytics || (exports.KinesisAnalytics = {}));
/** Actions for Amazon Kinesis Firehose
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisfirehose.html
  */
var Firehose;
(function (Firehose) {
    Firehose["CreateDeliveryStream"] = "firehose:CreateDeliveryStream";
    Firehose["DeleteDeliveryStream"] = "firehose:DeleteDeliveryStream";
    Firehose["DescribeDeliveryStream"] = "firehose:DescribeDeliveryStream";
    Firehose["ListDeliveryStreams"] = "firehose:ListDeliveryStreams";
    Firehose["PutRecord"] = "firehose:PutRecord";
    Firehose["PutRecordBatch"] = "firehose:PutRecordBatch";
    Firehose["UpdateDestination"] = "firehose:UpdateDestination";
})(Firehose = exports.Firehose || (exports.Firehose = {}));
/** Actions for Amazon Kinesis Video Streams
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisvideostreams.html
  */
var KinesisVideo;
(function (KinesisVideo) {
    KinesisVideo["CreateStream"] = "kinesisvideo:CreateStream";
    KinesisVideo["DeleteStream"] = "kinesisvideo:DeleteStream";
    KinesisVideo["DescribeStream"] = "kinesisvideo:DescribeStream";
    KinesisVideo["GetDataEndpoint"] = "kinesisvideo:GetDataEndpoint";
    KinesisVideo["GetMedia"] = "kinesisvideo:GetMedia";
    KinesisVideo["GetMediaForFragmentList"] = "kinesisvideo:GetMediaForFragmentList";
    KinesisVideo["ListFragments"] = "kinesisvideo:ListFragments";
    KinesisVideo["ListStreams"] = "kinesisvideo:ListStreams";
    KinesisVideo["ListTagsForStream"] = "kinesisvideo:ListTagsForStream";
    KinesisVideo["PutMedia"] = "kinesisvideo:PutMedia";
    KinesisVideo["TagStream"] = "kinesisvideo:TagStream";
    KinesisVideo["UntagStream"] = "kinesisvideo:UntagStream";
    KinesisVideo["UpdateDataRetention"] = "kinesisvideo:UpdateDataRetention";
    KinesisVideo["UpdateStream"] = "kinesisvideo:UpdateStream";
})(KinesisVideo = exports.KinesisVideo || (exports.KinesisVideo = {}));
/** Actions for Amazon Lex
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlex.html
  */
var Lex;
(function (Lex) {
    Lex["CreateBotVersion"] = "lex:CreateBotVersion";
    Lex["CreateIntentVersion"] = "lex:CreateIntentVersion";
    Lex["CreateSlotTypeVersion"] = "lex:CreateSlotTypeVersion";
    Lex["DeleteBot"] = "lex:DeleteBot";
    Lex["DeleteBotAlias"] = "lex:DeleteBotAlias";
    Lex["DeleteBotChannelAssociation"] = "lex:DeleteBotChannelAssociation";
    Lex["DeleteBotVersion"] = "lex:DeleteBotVersion";
    Lex["DeleteIntent"] = "lex:DeleteIntent";
    Lex["DeleteIntentVersion"] = "lex:DeleteIntentVersion";
    Lex["DeleteSlotType"] = "lex:DeleteSlotType";
    Lex["DeleteSlotTypeVersion"] = "lex:DeleteSlotTypeVersion";
    Lex["DeleteUtterances"] = "lex:DeleteUtterances";
    Lex["GetBot"] = "lex:GetBot";
    Lex["GetBotAlias"] = "lex:GetBotAlias";
    Lex["GetBotAliases"] = "lex:GetBotAliases";
    Lex["GetBotChannelAssociation"] = "lex:GetBotChannelAssociation";
    Lex["GetBotChannelAssociations"] = "lex:GetBotChannelAssociations";
    Lex["GetBotVersions"] = "lex:GetBotVersions";
    Lex["GetBots"] = "lex:GetBots";
    Lex["GetBuiltinIntent"] = "lex:GetBuiltinIntent";
    Lex["GetBuiltinIntents"] = "lex:GetBuiltinIntents";
    Lex["GetBuiltinSlotTypes"] = "lex:GetBuiltinSlotTypes";
    Lex["GetIntent"] = "lex:GetIntent";
    Lex["GetIntentVersions"] = "lex:GetIntentVersions";
    Lex["GetIntents"] = "lex:GetIntents";
    Lex["GetSlotType"] = "lex:GetSlotType";
    Lex["GetSlotTypeVersions"] = "lex:GetSlotTypeVersions";
    Lex["GetSlotTypes"] = "lex:GetSlotTypes";
    Lex["GetUtterancesView"] = "lex:GetUtterancesView";
    Lex["PostContent"] = "lex:PostContent";
    Lex["PostText"] = "lex:PostText";
    Lex["PutBot"] = "lex:PutBot";
    Lex["PutBotAlias"] = "lex:PutBotAlias";
    Lex["PutIntent"] = "lex:PutIntent";
    Lex["PutSlotType"] = "lex:PutSlotType";
})(Lex = exports.Lex || (exports.Lex = {}));
/** Actions for Amazon Lightsail
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlightsail.html
  */
var Lightsail;
(function (Lightsail) {
    Lightsail["AllocateStaticIp"] = "lightsail:AllocateStaticIp";
    Lightsail["AttachStaticIp"] = "lightsail:AttachStaticIp";
    Lightsail["CloseInstancePublicPorts"] = "lightsail:CloseInstancePublicPorts";
    Lightsail["CreateDomain"] = "lightsail:CreateDomain";
    Lightsail["CreateDomainEntry"] = "lightsail:CreateDomainEntry";
    Lightsail["CreateInstanceSnapshot"] = "lightsail:CreateInstanceSnapshot";
    Lightsail["CreateInstances"] = "lightsail:CreateInstances";
    Lightsail["CreateInstancesFromSnapshot"] = "lightsail:CreateInstancesFromSnapshot";
    Lightsail["CreateKeyPair"] = "lightsail:CreateKeyPair";
    Lightsail["DeleteDomain"] = "lightsail:DeleteDomain";
    Lightsail["DeleteDomainEntry"] = "lightsail:DeleteDomainEntry";
    Lightsail["DeleteInstance"] = "lightsail:DeleteInstance";
    Lightsail["DeleteInstanceSnapshot"] = "lightsail:DeleteInstanceSnapshot";
    Lightsail["DeleteKeyPair"] = "lightsail:DeleteKeyPair";
    Lightsail["DetachStaticIp"] = "lightsail:DetachStaticIp";
    Lightsail["DownloadDefaultKeyPair"] = "lightsail:DownloadDefaultKeyPair";
    Lightsail["GetActiveNames"] = "lightsail:GetActiveNames";
    Lightsail["GetBlueprints"] = "lightsail:GetBlueprints";
    Lightsail["GetBundles"] = "lightsail:GetBundles";
    Lightsail["GetDomain"] = "lightsail:GetDomain";
    Lightsail["GetDomains"] = "lightsail:GetDomains";
    Lightsail["GetInstance"] = "lightsail:GetInstance";
    Lightsail["GetInstanceAccessDetails"] = "lightsail:GetInstanceAccessDetails";
    Lightsail["GetInstanceMetricData"] = "lightsail:GetInstanceMetricData";
    Lightsail["GetInstancePortStates"] = "lightsail:GetInstancePortStates";
    Lightsail["GetInstanceSnapshot"] = "lightsail:GetInstanceSnapshot";
    Lightsail["GetInstanceSnapshots"] = "lightsail:GetInstanceSnapshots";
    Lightsail["GetInstanceState"] = "lightsail:GetInstanceState";
    Lightsail["GetInstances"] = "lightsail:GetInstances";
    Lightsail["GetKeyPair"] = "lightsail:GetKeyPair";
    Lightsail["GetKeyPairs"] = "lightsail:GetKeyPairs";
    Lightsail["GetOperation"] = "lightsail:GetOperation";
    Lightsail["GetOperations"] = "lightsail:GetOperations";
    Lightsail["GetOperationsForResource"] = "lightsail:GetOperationsForResource";
    Lightsail["GetRegions"] = "lightsail:GetRegions";
    Lightsail["GetStaticIp"] = "lightsail:GetStaticIp";
    Lightsail["GetStaticIps"] = "lightsail:GetStaticIps";
    Lightsail["ImportKeyPair"] = "lightsail:ImportKeyPair";
    Lightsail["IsVpcPeered"] = "lightsail:IsVpcPeered";
    Lightsail["OpenInstancePublicPorts"] = "lightsail:OpenInstancePublicPorts";
    Lightsail["PeerVpc"] = "lightsail:PeerVpc";
    Lightsail["RebootInstance"] = "lightsail:RebootInstance";
    Lightsail["ReleaseStaticIp"] = "lightsail:ReleaseStaticIp";
    Lightsail["StartInstance"] = "lightsail:StartInstance";
    Lightsail["StopInstance"] = "lightsail:StopInstance";
    Lightsail["UnpeerVpc"] = "lightsail:UnpeerVpc";
    Lightsail["UpdateDomainEntry"] = "lightsail:UpdateDomainEntry";
})(Lightsail = exports.Lightsail || (exports.Lightsail = {}));
/** Actions for Amazon MQ
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmq.html
  */
var MQ;
(function (MQ) {
    MQ["CreateBroker"] = "mq:CreateBroker";
    MQ["CreateConfiguration"] = "mq:CreateConfiguration";
    MQ["CreateUser"] = "mq:CreateUser";
    MQ["DeleteBroker"] = "mq:DeleteBroker";
    MQ["DeleteUser"] = "mq:DeleteUser";
    MQ["DescribeBroker"] = "mq:DescribeBroker";
    MQ["DescribeConfiguration"] = "mq:DescribeConfiguration";
    MQ["DescribeConfigurationRevision"] = "mq:DescribeConfigurationRevision";
    MQ["DescribeUser"] = "mq:DescribeUser";
    MQ["ListBrokers"] = "mq:ListBrokers";
    MQ["ListConfigurationRevisions"] = "mq:ListConfigurationRevisions";
    MQ["ListConfigurations"] = "mq:ListConfigurations";
    MQ["ListUsers"] = "mq:ListUsers";
    MQ["RebootBroker"] = "mq:RebootBroker";
    MQ["UpdateBroker"] = "mq:UpdateBroker";
    MQ["UpdateConfiguration"] = "mq:UpdateConfiguration";
    MQ["UpdateUser"] = "mq:UpdateUser";
})(MQ = exports.MQ || (exports.MQ = {}));
/** Actions for Amazon Machine Learning
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmachinelearning.html
  */
var MachineLearning;
(function (MachineLearning) {
    MachineLearning["AddTags"] = "machinelearning:AddTags";
    MachineLearning["CreateBatchPrediction"] = "machinelearning:CreateBatchPrediction";
    MachineLearning["CreateDataSourceFromRDS"] = "machinelearning:CreateDataSourceFromRDS";
    MachineLearning["CreateDataSourceFromRedshift"] = "machinelearning:CreateDataSourceFromRedshift";
    MachineLearning["CreateDataSourceFromS3"] = "machinelearning:CreateDataSourceFromS3";
    MachineLearning["CreateEvaluation"] = "machinelearning:CreateEvaluation";
    MachineLearning["CreateMLModel"] = "machinelearning:CreateMLModel";
    MachineLearning["CreateRealtimeEndpoint"] = "machinelearning:CreateRealtimeEndpoint";
    MachineLearning["DeleteBatchPrediction"] = "machinelearning:DeleteBatchPrediction";
    MachineLearning["DeleteDataSource"] = "machinelearning:DeleteDataSource";
    MachineLearning["DeleteEvaluation"] = "machinelearning:DeleteEvaluation";
    MachineLearning["DeleteMLModel"] = "machinelearning:DeleteMLModel";
    MachineLearning["DeleteRealtimeEndpoint"] = "machinelearning:DeleteRealtimeEndpoint";
    MachineLearning["DeleteTags"] = "machinelearning:DeleteTags";
    MachineLearning["DescribeBatchPredictions"] = "machinelearning:DescribeBatchPredictions";
    MachineLearning["DescribeDataSources"] = "machinelearning:DescribeDataSources";
    MachineLearning["DescribeEvaluations"] = "machinelearning:DescribeEvaluations";
    MachineLearning["DescribeMLModels"] = "machinelearning:DescribeMLModels";
    MachineLearning["DescribeTags"] = "machinelearning:DescribeTags";
    MachineLearning["GetBatchPrediction"] = "machinelearning:GetBatchPrediction";
    MachineLearning["GetDataSource"] = "machinelearning:GetDataSource";
    MachineLearning["GetEvaluation"] = "machinelearning:GetEvaluation";
    MachineLearning["GetMLModel"] = "machinelearning:GetMLModel";
    MachineLearning["Predict"] = "machinelearning:Predict";
    MachineLearning["UpdateBatchPrediction"] = "machinelearning:UpdateBatchPrediction";
    MachineLearning["UpdateDataSource"] = "machinelearning:UpdateDataSource";
    MachineLearning["UpdateEvaluation"] = "machinelearning:UpdateEvaluation";
    MachineLearning["UpdateMLModel"] = "machinelearning:UpdateMLModel";
})(MachineLearning = exports.MachineLearning || (exports.MachineLearning = {}));
/** Actions for Amazon Mechanical Turk
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmechanicalturk.html
  */
var MechanicalTurk;
(function (MechanicalTurk) {
    MechanicalTurk["ApproveAssignment"] = "mechanicalturk:ApproveAssignment";
    MechanicalTurk["ApproveRejectedAssignment"] = "mechanicalturk:ApproveRejectedAssignment";
    MechanicalTurk["AssignQualification"] = "mechanicalturk:AssignQualification";
    MechanicalTurk["BlockWorker"] = "mechanicalturk:BlockWorker";
    MechanicalTurk["ChangeHITTypeOfHIT"] = "mechanicalturk:ChangeHITTypeOfHIT";
    MechanicalTurk["CreateHIT"] = "mechanicalturk:CreateHIT";
    MechanicalTurk["CreateQualificationType"] = "mechanicalturk:CreateQualificationType";
    MechanicalTurk["DisableHIT"] = "mechanicalturk:DisableHIT";
    MechanicalTurk["DisposeHIT"] = "mechanicalturk:DisposeHIT";
    MechanicalTurk["DisposeQualificationType"] = "mechanicalturk:DisposeQualificationType";
    MechanicalTurk["ExtendHIT"] = "mechanicalturk:ExtendHIT";
    MechanicalTurk["ForceExpireHIT"] = "mechanicalturk:ForceExpireHIT";
    MechanicalTurk["GetAccountBalance"] = "mechanicalturk:GetAccountBalance";
    MechanicalTurk["GetAssignment"] = "mechanicalturk:GetAssignment";
    MechanicalTurk["GetAssignmentsForHIT"] = "mechanicalturk:GetAssignmentsForHIT";
    MechanicalTurk["GetBlockedWorkers"] = "mechanicalturk:GetBlockedWorkers";
    MechanicalTurk["GetBonusPayments"] = "mechanicalturk:GetBonusPayments";
    MechanicalTurk["GetFileUploadURL"] = "mechanicalturk:GetFileUploadURL";
    MechanicalTurk["GetHIT"] = "mechanicalturk:GetHIT";
    MechanicalTurk["GetHITsForQualificationType"] = "mechanicalturk:GetHITsForQualificationType";
    MechanicalTurk["GetQualificationRequests"] = "mechanicalturk:GetQualificationRequests";
    MechanicalTurk["GetQualificationScore"] = "mechanicalturk:GetQualificationScore";
    MechanicalTurk["GetQualificationType"] = "mechanicalturk:GetQualificationType";
    MechanicalTurk["GetQualificationsForQualificationType"] = "mechanicalturk:GetQualificationsForQualificationType";
    MechanicalTurk["GetRequesterStatistic"] = "mechanicalturk:GetRequesterStatistic";
    MechanicalTurk["GetRequesterWorkerStatistic"] = "mechanicalturk:GetRequesterWorkerStatistic";
    MechanicalTurk["GetReviewResultsForHIT"] = "mechanicalturk:GetReviewResultsForHIT";
    MechanicalTurk["GetReviewableHITs"] = "mechanicalturk:GetReviewableHITs";
    MechanicalTurk["GrantBonus"] = "mechanicalturk:GrantBonus";
    MechanicalTurk["GrantQualification"] = "mechanicalturk:GrantQualification";
    MechanicalTurk["NotifyWorkers"] = "mechanicalturk:NotifyWorkers";
    MechanicalTurk["RegisterHITType"] = "mechanicalturk:RegisterHITType";
    MechanicalTurk["RejectAssignment"] = "mechanicalturk:RejectAssignment";
    MechanicalTurk["RejectQualificationRequest"] = "mechanicalturk:RejectQualificationRequest";
    MechanicalTurk["RevokeQualification"] = "mechanicalturk:RevokeQualification";
    MechanicalTurk["SearchHITs"] = "mechanicalturk:SearchHITs";
    MechanicalTurk["SearchQualificationTypes"] = "mechanicalturk:SearchQualificationTypes";
    MechanicalTurk["SendTestEventNotification"] = "mechanicalturk:SendTestEventNotification";
    MechanicalTurk["SetHITAsReviewing"] = "mechanicalturk:SetHITAsReviewing";
    MechanicalTurk["SetHITTypeNotification"] = "mechanicalturk:SetHITTypeNotification";
    MechanicalTurk["UnblockWorker"] = "mechanicalturk:UnblockWorker";
    MechanicalTurk["UpdateQualificationScore"] = "mechanicalturk:UpdateQualificationScore";
    MechanicalTurk["UpdateQualificationType"] = "mechanicalturk:UpdateQualificationType";
})(MechanicalTurk = exports.MechanicalTurk || (exports.MechanicalTurk = {}));
/** Actions for Amazon Mechanical Turk Crowd
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmechanicalturkcrowd.html
  */
var Crowd;
(function (Crowd) {
    Crowd["GetTask"] = "crowd:GetTask";
    Crowd["PutTask"] = "crowd:PutTask";
})(Crowd = exports.Crowd || (exports.Crowd = {}));
/** Actions for Amazon Message Delivery Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmessagedeliveryservice.html
  */
var Ec2messages;
(function (Ec2messages) {
    Ec2messages["AcknowledgeMessage"] = "ec2messages:AcknowledgeMessage";
    Ec2messages["DeleteMessage"] = "ec2messages:DeleteMessage";
    Ec2messages["FailMessage"] = "ec2messages:FailMessage";
    Ec2messages["GetEndpoint"] = "ec2messages:GetEndpoint";
    Ec2messages["GetMessages"] = "ec2messages:GetMessages";
    Ec2messages["SendReply"] = "ec2messages:SendReply";
})(Ec2messages = exports.Ec2messages || (exports.Ec2messages = {}));
/** Actions for Amazon Mobile Analytics
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmobileanalytics.html
  */
var MobileAnalytics;
(function (MobileAnalytics) {
    MobileAnalytics["GetFinancialReports"] = "mobileanalytics:GetFinancialReports";
    MobileAnalytics["GetReports"] = "mobileanalytics:GetReports";
    MobileAnalytics["PutEvents"] = "mobileanalytics:PutEvents";
})(MobileAnalytics = exports.MobileAnalytics || (exports.MobileAnalytics = {}));
/** Actions for Amazon Pinpoint
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpoint.html
  */
var Mobiletargeting;
(function (Mobiletargeting) {
    Mobiletargeting["CreateCampaign"] = "mobiletargeting:CreateCampaign";
    Mobiletargeting["CreateImportJob"] = "mobiletargeting:CreateImportJob";
    Mobiletargeting["CreateSegment"] = "mobiletargeting:CreateSegment";
    Mobiletargeting["DeleteApnsChannel"] = "mobiletargeting:DeleteApnsChannel";
    Mobiletargeting["DeleteCampaign"] = "mobiletargeting:DeleteCampaign";
    Mobiletargeting["DeleteGcmChannel"] = "mobiletargeting:DeleteGcmChannel";
    Mobiletargeting["DeleteSegment"] = "mobiletargeting:DeleteSegment";
    Mobiletargeting["GetApnsChannel"] = "mobiletargeting:GetApnsChannel";
    Mobiletargeting["GetApplicationSettings"] = "mobiletargeting:GetApplicationSettings";
    Mobiletargeting["GetCampaign"] = "mobiletargeting:GetCampaign";
    Mobiletargeting["GetCampaignActivities"] = "mobiletargeting:GetCampaignActivities";
    Mobiletargeting["GetCampaignVersion"] = "mobiletargeting:GetCampaignVersion";
    Mobiletargeting["GetCampaignVersions"] = "mobiletargeting:GetCampaignVersions";
    Mobiletargeting["GetCampaigns"] = "mobiletargeting:GetCampaigns";
    Mobiletargeting["GetEndpoint"] = "mobiletargeting:GetEndpoint";
    Mobiletargeting["GetGcmChannel"] = "mobiletargeting:GetGcmChannel";
    Mobiletargeting["GetImportJob"] = "mobiletargeting:GetImportJob";
    Mobiletargeting["GetImportJobs"] = "mobiletargeting:GetImportJobs";
    Mobiletargeting["GetReports"] = "mobiletargeting:GetReports";
    Mobiletargeting["GetSegment"] = "mobiletargeting:GetSegment";
    Mobiletargeting["GetSegmentImportJobs"] = "mobiletargeting:GetSegmentImportJobs";
    Mobiletargeting["GetSegmentVersion"] = "mobiletargeting:GetSegmentVersion";
    Mobiletargeting["GetSegmentVersions"] = "mobiletargeting:GetSegmentVersions";
    Mobiletargeting["GetSegments"] = "mobiletargeting:GetSegments";
    Mobiletargeting["UpdateApnsChannel"] = "mobiletargeting:UpdateApnsChannel";
    Mobiletargeting["UpdateApplicationSettings"] = "mobiletargeting:UpdateApplicationSettings";
    Mobiletargeting["UpdateCampaign"] = "mobiletargeting:UpdateCampaign";
    Mobiletargeting["UpdateEndpoint"] = "mobiletargeting:UpdateEndpoint";
    Mobiletargeting["UpdateEndpointsBatch"] = "mobiletargeting:UpdateEndpointsBatch";
    Mobiletargeting["UpdateGcmChannel"] = "mobiletargeting:UpdateGcmChannel";
    Mobiletargeting["UpdateSegment"] = "mobiletargeting:UpdateSegment";
})(Mobiletargeting = exports.Mobiletargeting || (exports.Mobiletargeting = {}));
/** Actions for Amazon Polly
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpolly.html
  */
var Polly;
(function (Polly) {
    Polly["DeleteLexicon"] = "polly:DeleteLexicon";
    Polly["DescribeVoices"] = "polly:DescribeVoices";
    Polly["GetLexicon"] = "polly:GetLexicon";
    Polly["ListLexicons"] = "polly:ListLexicons";
    Polly["PutLexicon"] = "polly:PutLexicon";
    Polly["SynthesizeSpeech"] = "polly:SynthesizeSpeech";
})(Polly = exports.Polly || (exports.Polly = {}));
/** Actions for Amazon RDS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrds.html
  */
var RDS;
(function (RDS) {
    RDS["AddRoleToDBCluster"] = "rds:AddRoleToDBCluster";
    RDS["AddSourceIdentifierToSubscription"] = "rds:AddSourceIdentifierToSubscription";
    RDS["AddTagsToResource"] = "rds:AddTagsToResource";
    RDS["ApplyPendingMaintenanceAction"] = "rds:ApplyPendingMaintenanceAction";
    RDS["AuthorizeDBSecurityGroupIngress"] = "rds:AuthorizeDBSecurityGroupIngress";
    RDS["CopyDBClusterSnapshot"] = "rds:CopyDBClusterSnapshot";
    RDS["CopyDBParameterGroup"] = "rds:CopyDBParameterGroup";
    RDS["CopyDBSnapshot"] = "rds:CopyDBSnapshot";
    RDS["CopyOptionGroup"] = "rds:CopyOptionGroup";
    RDS["CreateDBCluster"] = "rds:CreateDBCluster";
    RDS["CreateDBClusterParameterGroup"] = "rds:CreateDBClusterParameterGroup";
    RDS["CreateDBClusterSnapshot"] = "rds:CreateDBClusterSnapshot";
    RDS["CreateDBInstance"] = "rds:CreateDBInstance";
    RDS["CreateDBInstanceReadReplica"] = "rds:CreateDBInstanceReadReplica";
    RDS["CreateDBParameterGroup"] = "rds:CreateDBParameterGroup";
    RDS["CreateDBSecurityGroup"] = "rds:CreateDBSecurityGroup";
    RDS["CreateDBSnapshot"] = "rds:CreateDBSnapshot";
    RDS["CreateDBSubnetGroup"] = "rds:CreateDBSubnetGroup";
    RDS["CreateEventSubscription"] = "rds:CreateEventSubscription";
    RDS["CreateOptionGroup"] = "rds:CreateOptionGroup";
    RDS["DeleteDBCluster"] = "rds:DeleteDBCluster";
    RDS["DeleteDBClusterParameterGroup"] = "rds:DeleteDBClusterParameterGroup";
    RDS["DeleteDBClusterSnapshot"] = "rds:DeleteDBClusterSnapshot";
    RDS["DeleteDBInstance"] = "rds:DeleteDBInstance";
    RDS["DeleteDBParameterGroup"] = "rds:DeleteDBParameterGroup";
    RDS["DeleteDBSecurityGroup"] = "rds:DeleteDBSecurityGroup";
    RDS["DeleteDBSnapshot"] = "rds:DeleteDBSnapshot";
    RDS["DeleteDBSubnetGroup"] = "rds:DeleteDBSubnetGroup";
    RDS["DeleteEventSubscription"] = "rds:DeleteEventSubscription";
    RDS["DeleteOptionGroup"] = "rds:DeleteOptionGroup";
    RDS["DescribeAccountAttributes"] = "rds:DescribeAccountAttributes";
    RDS["DescribeCertificates"] = "rds:DescribeCertificates";
    RDS["DescribeDBClusterParameterGroups"] = "rds:DescribeDBClusterParameterGroups";
    RDS["DescribeDBClusterParameters"] = "rds:DescribeDBClusterParameters";
    RDS["DescribeDBClusterSnapshotAttributes"] = "rds:DescribeDBClusterSnapshotAttributes";
    RDS["DescribeDBClusterSnapshots"] = "rds:DescribeDBClusterSnapshots";
    RDS["DescribeDBClusters"] = "rds:DescribeDBClusters";
    RDS["DescribeDBEngineVersions"] = "rds:DescribeDBEngineVersions";
    RDS["DescribeDBInstances"] = "rds:DescribeDBInstances";
    RDS["DescribeDBLogFiles"] = "rds:DescribeDBLogFiles";
    RDS["DescribeDBParameterGroups"] = "rds:DescribeDBParameterGroups";
    RDS["DescribeDBParameters"] = "rds:DescribeDBParameters";
    RDS["DescribeDBSecurityGroups"] = "rds:DescribeDBSecurityGroups";
    RDS["DescribeDBSnapshotAttributes"] = "rds:DescribeDBSnapshotAttributes";
    RDS["DescribeDBSnapshots"] = "rds:DescribeDBSnapshots";
    RDS["DescribeDBSubnetGroups"] = "rds:DescribeDBSubnetGroups";
    RDS["DescribeEngineDefaultClusterParameters"] = "rds:DescribeEngineDefaultClusterParameters";
    RDS["DescribeEngineDefaultParameters"] = "rds:DescribeEngineDefaultParameters";
    RDS["DescribeEventCategories"] = "rds:DescribeEventCategories";
    RDS["DescribeEventSubscriptions"] = "rds:DescribeEventSubscriptions";
    RDS["DescribeEvents"] = "rds:DescribeEvents";
    RDS["DescribeOptionGroupOptions"] = "rds:DescribeOptionGroupOptions";
    RDS["DescribeOptionGroups"] = "rds:DescribeOptionGroups";
    RDS["DescribeOrderableDBInstanceOptions"] = "rds:DescribeOrderableDBInstanceOptions";
    RDS["DescribePendingMaintenanceActions"] = "rds:DescribePendingMaintenanceActions";
    RDS["DescribeReservedDBInstances"] = "rds:DescribeReservedDBInstances";
    RDS["DescribeReservedDBInstancesOfferings"] = "rds:DescribeReservedDBInstancesOfferings";
    RDS["DownloadCompleteDBLogFile"] = "rds:DownloadCompleteDBLogFile";
    RDS["DownloadDBLogFilePortion"] = "rds:DownloadDBLogFilePortion";
    RDS["FailoverDBCluster"] = "rds:FailoverDBCluster";
    RDS["ListTagsForResource"] = "rds:ListTagsForResource";
    RDS["ModifyDBCluster"] = "rds:ModifyDBCluster";
    RDS["ModifyDBClusterParameterGroup"] = "rds:ModifyDBClusterParameterGroup";
    RDS["ModifyDBClusterSnapshotAttribute"] = "rds:ModifyDBClusterSnapshotAttribute";
    RDS["ModifyDBInstance"] = "rds:ModifyDBInstance";
    RDS["ModifyDBParameterGroup"] = "rds:ModifyDBParameterGroup";
    RDS["ModifyDBSnapshotAttribute"] = "rds:ModifyDBSnapshotAttribute";
    RDS["ModifyDBSubnetGroup"] = "rds:ModifyDBSubnetGroup";
    RDS["ModifyEventSubscription"] = "rds:ModifyEventSubscription";
    RDS["ModifyOptionGroup"] = "rds:ModifyOptionGroup";
    RDS["PromoteReadReplica"] = "rds:PromoteReadReplica";
    RDS["PurchaseReservedDBInstancesOffering"] = "rds:PurchaseReservedDBInstancesOffering";
    RDS["RebootDBInstance"] = "rds:RebootDBInstance";
    RDS["RemoveSourceIdentifierFromSubscription"] = "rds:RemoveSourceIdentifierFromSubscription";
    RDS["RemoveTagsFromResource"] = "rds:RemoveTagsFromResource";
    RDS["ResetDBClusterParameterGroup"] = "rds:ResetDBClusterParameterGroup";
    RDS["ResetDBParameterGroup"] = "rds:ResetDBParameterGroup";
    RDS["RestoreDBClusterFromSnapshot"] = "rds:RestoreDBClusterFromSnapshot";
    RDS["RestoreDBClusterToPointInTime"] = "rds:RestoreDBClusterToPointInTime";
    RDS["RestoreDBInstanceFromDBSnapshot"] = "rds:RestoreDBInstanceFromDBSnapshot";
    RDS["RestoreDBInstanceToPointInTime"] = "rds:RestoreDBInstanceToPointInTime";
    RDS["RevokeDBSecurityGroupIngress"] = "rds:RevokeDBSecurityGroupIngress";
    RDS["StartDBInstance"] = "rds:StartDBInstance";
    RDS["StopDBInstance"] = "rds:StopDBInstance";
})(RDS = exports.RDS || (exports.RDS = {}));
/** Actions for Amazon Redshift
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonredshift.html
  */
var Redshift;
(function (Redshift) {
    Redshift["AuthorizeClusterSecurityGroupIngress"] = "redshift:AuthorizeClusterSecurityGroupIngress";
    Redshift["AuthorizeSnapshotAccess"] = "redshift:AuthorizeSnapshotAccess";
    Redshift["CancelQuerySession"] = "redshift:CancelQuerySession";
    Redshift["CopyClusterSnapshot"] = "redshift:CopyClusterSnapshot";
    Redshift["CreateCluster"] = "redshift:CreateCluster";
    Redshift["CreateClusterParameterGroup"] = "redshift:CreateClusterParameterGroup";
    Redshift["CreateClusterSecurityGroup"] = "redshift:CreateClusterSecurityGroup";
    Redshift["CreateClusterSnapshot"] = "redshift:CreateClusterSnapshot";
    Redshift["CreateClusterSubnetGroup"] = "redshift:CreateClusterSubnetGroup";
    Redshift["CreateClusterUser"] = "redshift:CreateClusterUser";
    Redshift["CreateEventSubscription"] = "redshift:CreateEventSubscription";
    Redshift["CreateHsmClientCertificate"] = "redshift:CreateHsmClientCertificate";
    Redshift["CreateHsmConfiguration"] = "redshift:CreateHsmConfiguration";
    Redshift["CreateSnapshotCopyGrant"] = "redshift:CreateSnapshotCopyGrant";
    Redshift["CreateTags"] = "redshift:CreateTags";
    Redshift["DeleteCluster"] = "redshift:DeleteCluster";
    Redshift["DeleteClusterParameterGroup"] = "redshift:DeleteClusterParameterGroup";
    Redshift["DeleteClusterSecurityGroup"] = "redshift:DeleteClusterSecurityGroup";
    Redshift["DeleteClusterSnapshot"] = "redshift:DeleteClusterSnapshot";
    Redshift["DeleteClusterSubnetGroup"] = "redshift:DeleteClusterSubnetGroup";
    Redshift["DeleteEventSubscription"] = "redshift:DeleteEventSubscription";
    Redshift["DeleteHsmClientCertificate"] = "redshift:DeleteHsmClientCertificate";
    Redshift["DeleteHsmConfiguration"] = "redshift:DeleteHsmConfiguration";
    Redshift["DeleteSnapshotCopyGrant"] = "redshift:DeleteSnapshotCopyGrant";
    Redshift["DeleteTags"] = "redshift:DeleteTags";
    Redshift["DescribeClusterParameterGroups"] = "redshift:DescribeClusterParameterGroups";
    Redshift["DescribeClusterParameters"] = "redshift:DescribeClusterParameters";
    Redshift["DescribeClusterSecurityGroups"] = "redshift:DescribeClusterSecurityGroups";
    Redshift["DescribeClusterSnapshots"] = "redshift:DescribeClusterSnapshots";
    Redshift["DescribeClusterSubnetGroups"] = "redshift:DescribeClusterSubnetGroups";
    Redshift["DescribeClusterVersions"] = "redshift:DescribeClusterVersions";
    Redshift["DescribeClusters"] = "redshift:DescribeClusters";
    Redshift["DescribeDefaultClusterParameters"] = "redshift:DescribeDefaultClusterParameters";
    Redshift["DescribeEventCategories"] = "redshift:DescribeEventCategories";
    Redshift["DescribeEventSubscriptions"] = "redshift:DescribeEventSubscriptions";
    Redshift["DescribeEvents"] = "redshift:DescribeEvents";
    Redshift["DescribeHsmClientCertificates"] = "redshift:DescribeHsmClientCertificates";
    Redshift["DescribeHsmConfigurations"] = "redshift:DescribeHsmConfigurations";
    Redshift["DescribeLoggingStatus"] = "redshift:DescribeLoggingStatus";
    Redshift["DescribeOrderableClusterOptions"] = "redshift:DescribeOrderableClusterOptions";
    Redshift["DescribeReservedNodeOfferings"] = "redshift:DescribeReservedNodeOfferings";
    Redshift["DescribeReservedNodes"] = "redshift:DescribeReservedNodes";
    Redshift["DescribeResize"] = "redshift:DescribeResize";
    Redshift["DescribeSnapshotCopyGrants"] = "redshift:DescribeSnapshotCopyGrants";
    Redshift["DescribeTableRestoreStatus"] = "redshift:DescribeTableRestoreStatus";
    Redshift["DescribeTags"] = "redshift:DescribeTags";
    Redshift["DisableLogging"] = "redshift:DisableLogging";
    Redshift["DisableSnapshotCopy"] = "redshift:DisableSnapshotCopy";
    Redshift["EnableLogging"] = "redshift:EnableLogging";
    Redshift["EnableSnapshotCopy"] = "redshift:EnableSnapshotCopy";
    Redshift["GetClusterCredentials"] = "redshift:GetClusterCredentials";
    Redshift["JoinGroup"] = "redshift:JoinGroup";
    Redshift["ModifyCluster"] = "redshift:ModifyCluster";
    Redshift["ModifyClusterIamRoles"] = "redshift:ModifyClusterIamRoles";
    Redshift["ModifyClusterParameterGroup"] = "redshift:ModifyClusterParameterGroup";
    Redshift["ModifyClusterSubnetGroup"] = "redshift:ModifyClusterSubnetGroup";
    Redshift["ModifyEventSubscription"] = "redshift:ModifyEventSubscription";
    Redshift["ModifySnapshotCopyRetentionPeriod"] = "redshift:ModifySnapshotCopyRetentionPeriod";
    Redshift["PurchaseReservedNodeOffering"] = "redshift:PurchaseReservedNodeOffering";
    Redshift["RebootCluster"] = "redshift:RebootCluster";
    Redshift["ResetClusterParameterGroup"] = "redshift:ResetClusterParameterGroup";
    Redshift["RestoreFromClusterSnapshot"] = "redshift:RestoreFromClusterSnapshot";
    Redshift["RestoreTableFromClusterSnapshot"] = "redshift:RestoreTableFromClusterSnapshot";
    Redshift["RevokeClusterSecurityGroupIngress"] = "redshift:RevokeClusterSecurityGroupIngress";
    Redshift["RevokeSnapshotAccess"] = "redshift:RevokeSnapshotAccess";
    Redshift["RotateEncryptionKey"] = "redshift:RotateEncryptionKey";
    Redshift["ViewQueriesInConsole"] = "redshift:ViewQueriesInConsole";
})(Redshift = exports.Redshift || (exports.Redshift = {}));
/** Actions for Amazon Rekognition
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrekognition.html
  */
var Rekognition;
(function (Rekognition) {
    Rekognition["CompareFaces"] = "rekognition:CompareFaces";
    Rekognition["CreateCollection"] = "rekognition:CreateCollection";
    Rekognition["CreateStreamProcessor"] = "rekognition:CreateStreamProcessor";
    Rekognition["DeleteCollection"] = "rekognition:DeleteCollection";
    Rekognition["DeleteFaces"] = "rekognition:DeleteFaces";
    Rekognition["DeleteStreamProcessor"] = "rekognition:DeleteStreamProcessor";
    Rekognition["DescribeStreamProcessor"] = "rekognition:DescribeStreamProcessor";
    Rekognition["DetectFaces"] = "rekognition:DetectFaces";
    Rekognition["DetectLabels"] = "rekognition:DetectLabels";
    Rekognition["DetectModerationLabels"] = "rekognition:DetectModerationLabels";
    Rekognition["DetectText"] = "rekognition:DetectText";
    Rekognition["GetCelebrityInfo"] = "rekognition:GetCelebrityInfo";
    Rekognition["GetCelebrityRecognition"] = "rekognition:GetCelebrityRecognition";
    Rekognition["GetContentModeration"] = "rekognition:GetContentModeration";
    Rekognition["GetFaceDetection"] = "rekognition:GetFaceDetection";
    Rekognition["GetFaceSearch"] = "rekognition:GetFaceSearch";
    Rekognition["GetLabelDetection"] = "rekognition:GetLabelDetection";
    Rekognition["GetPersonTracking"] = "rekognition:GetPersonTracking";
    Rekognition["IndexFaces"] = "rekognition:IndexFaces";
    Rekognition["ListCollections"] = "rekognition:ListCollections";
    Rekognition["ListFaces"] = "rekognition:ListFaces";
    Rekognition["ListStreamProcessors"] = "rekognition:ListStreamProcessors";
    Rekognition["RecognizeCelebrities"] = "rekognition:RecognizeCelebrities";
    Rekognition["SearchFaces"] = "rekognition:SearchFaces";
    Rekognition["SearchFacesByImage"] = "rekognition:SearchFacesByImage";
    Rekognition["StartCelebrityRecognition"] = "rekognition:StartCelebrityRecognition";
    Rekognition["StartContentModeration"] = "rekognition:StartContentModeration";
    Rekognition["StartFaceDetection"] = "rekognition:StartFaceDetection";
    Rekognition["StartFaceSearch"] = "rekognition:StartFaceSearch";
    Rekognition["StartLabelDetection"] = "rekognition:StartLabelDetection";
    Rekognition["StartPersonTracking"] = "rekognition:StartPersonTracking";
    Rekognition["StartStreamProcessor"] = "rekognition:StartStreamProcessor";
    Rekognition["StopStreamProcessor"] = "rekognition:StopStreamProcessor";
})(Rekognition = exports.Rekognition || (exports.Rekognition = {}));
/** Actions for Amazon Resource Group Tagging API
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonresourcegrouptaggingapi.html
  */
var Tag;
(function (Tag) {
    Tag["GetResources"] = "tag:GetResources";
    Tag["GetTagKeys"] = "tag:GetTagKeys";
    Tag["GetTagValues"] = "tag:GetTagValues";
    Tag["TagResources"] = "tag:TagResources";
    Tag["UntagResources"] = "tag:UntagResources";
})(Tag = exports.Tag || (exports.Tag = {}));
/** Actions for Amazon Route 53
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53.html
  */
var Route53;
(function (Route53) {
    Route53["AssociateVPCWithHostedZone"] = "route53:AssociateVPCWithHostedZone";
    Route53["ChangeResourceRecordSets"] = "route53:ChangeResourceRecordSets";
    Route53["ChangeTagsForResource"] = "route53:ChangeTagsForResource";
    Route53["CreateHealthCheck"] = "route53:CreateHealthCheck";
    Route53["CreateHostedZone"] = "route53:CreateHostedZone";
    Route53["CreateReusableDelegationSet"] = "route53:CreateReusableDelegationSet";
    Route53["CreateTrafficPolicy"] = "route53:CreateTrafficPolicy";
    Route53["CreateTrafficPolicyInstance"] = "route53:CreateTrafficPolicyInstance";
    Route53["CreateTrafficPolicyVersion"] = "route53:CreateTrafficPolicyVersion";
    Route53["DeleteHealthCheck"] = "route53:DeleteHealthCheck";
    Route53["DeleteHostedZone"] = "route53:DeleteHostedZone";
    Route53["DeleteReusableDelegationSet"] = "route53:DeleteReusableDelegationSet";
    Route53["DeleteTrafficPolicy"] = "route53:DeleteTrafficPolicy";
    Route53["DeleteTrafficPolicyInstance"] = "route53:DeleteTrafficPolicyInstance";
    Route53["DisableDomainAutoRenew"] = "route53:DisableDomainAutoRenew";
    Route53["DisassociateVPCFromHostedZone"] = "route53:DisassociateVPCFromHostedZone";
    Route53["EnableDomainAutoRenew"] = "route53:EnableDomainAutoRenew";
    Route53["GetChange"] = "route53:GetChange";
    Route53["GetCheckerIpRanges"] = "route53:GetCheckerIpRanges";
    Route53["GetGeoLocation"] = "route53:GetGeoLocation";
    Route53["GetHealthCheck"] = "route53:GetHealthCheck";
    Route53["GetHealthCheckCount"] = "route53:GetHealthCheckCount";
    Route53["GetHealthCheckLastFailureReason"] = "route53:GetHealthCheckLastFailureReason";
    Route53["GetHealthCheckStatus"] = "route53:GetHealthCheckStatus";
    Route53["GetHostedZone"] = "route53:GetHostedZone";
    Route53["GetHostedZoneCount"] = "route53:GetHostedZoneCount";
    Route53["GetReusableDelegationSet"] = "route53:GetReusableDelegationSet";
    Route53["GetTrafficPolicy"] = "route53:GetTrafficPolicy";
    Route53["GetTrafficPolicyInstance"] = "route53:GetTrafficPolicyInstance";
    Route53["GetTrafficPolicyInstanceCount"] = "route53:GetTrafficPolicyInstanceCount";
    Route53["ListGeoLocations"] = "route53:ListGeoLocations";
    Route53["ListHealthChecks"] = "route53:ListHealthChecks";
    Route53["ListHostedZones"] = "route53:ListHostedZones";
    Route53["ListHostedZonesByName"] = "route53:ListHostedZonesByName";
    Route53["ListResourceRecordSets"] = "route53:ListResourceRecordSets";
    Route53["ListReusableDelegationSets"] = "route53:ListReusableDelegationSets";
    Route53["ListTagsForResource"] = "route53:ListTagsForResource";
    Route53["ListTagsForResources"] = "route53:ListTagsForResources";
    Route53["ListTrafficPolicies"] = "route53:ListTrafficPolicies";
    Route53["ListTrafficPolicyInstances"] = "route53:ListTrafficPolicyInstances";
    Route53["ListTrafficPolicyInstancesByHostedZone"] = "route53:ListTrafficPolicyInstancesByHostedZone";
    Route53["ListTrafficPolicyInstancesByPolicy"] = "route53:ListTrafficPolicyInstancesByPolicy";
    Route53["ListTrafficPolicyVersions"] = "route53:ListTrafficPolicyVersions";
    Route53["TestDNSAnswer"] = "route53:TestDNSAnswer";
    Route53["UpdateHealthCheck"] = "route53:UpdateHealthCheck";
    Route53["UpdateHostedZoneComment"] = "route53:UpdateHostedZoneComment";
    Route53["UpdateTrafficPolicyComment"] = "route53:UpdateTrafficPolicyComment";
    Route53["UpdateTrafficPolicyInstance"] = "route53:UpdateTrafficPolicyInstance";
})(Route53 = exports.Route53 || (exports.Route53 = {}));
/** Actions for Amazon Route 53 Auto Naming
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53autonaming.html
  */
var Servicediscovery;
(function (Servicediscovery) {
    Servicediscovery["CreatePrivateDnsNamespace"] = "servicediscovery:CreatePrivateDnsNamespace";
    Servicediscovery["CreatePublicDnsNamespace"] = "servicediscovery:CreatePublicDnsNamespace";
    Servicediscovery["CreateService"] = "servicediscovery:CreateService";
    Servicediscovery["DeleteNamespace"] = "servicediscovery:DeleteNamespace";
    Servicediscovery["DeleteService"] = "servicediscovery:DeleteService";
    Servicediscovery["DeregisterInstance"] = "servicediscovery:DeregisterInstance";
    Servicediscovery["GetInstance"] = "servicediscovery:GetInstance";
    Servicediscovery["GetInstancesHealthStatus"] = "servicediscovery:GetInstancesHealthStatus";
    Servicediscovery["GetNamespace"] = "servicediscovery:GetNamespace";
    Servicediscovery["GetOperation"] = "servicediscovery:GetOperation";
    Servicediscovery["GetService"] = "servicediscovery:GetService";
    Servicediscovery["ListInstances"] = "servicediscovery:ListInstances";
    Servicediscovery["ListNamespaces"] = "servicediscovery:ListNamespaces";
    Servicediscovery["ListOperations"] = "servicediscovery:ListOperations";
    Servicediscovery["ListServices"] = "servicediscovery:ListServices";
    Servicediscovery["RegisterInstance"] = "servicediscovery:RegisterInstance";
    Servicediscovery["UpdateInstanceHeartbeatStatus"] = "servicediscovery:UpdateInstanceHeartbeatStatus";
    Servicediscovery["UpdateService"] = "servicediscovery:UpdateService";
})(Servicediscovery = exports.Servicediscovery || (exports.Servicediscovery = {}));
/** Actions for Amazon Route53 Domains
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53domains.html
  */
var Route53Domains;
(function (Route53Domains) {
    Route53Domains["CheckDomainAvailability"] = "route53domains:CheckDomainAvailability";
    Route53Domains["DeleteTagsForDomain"] = "route53domains:DeleteTagsForDomain";
    Route53Domains["DisableDomainAutoRenew"] = "route53domains:DisableDomainAutoRenew";
    Route53Domains["DisableDomainTransferLock"] = "route53domains:DisableDomainTransferLock";
    Route53Domains["EnableDomainAutoRenew"] = "route53domains:EnableDomainAutoRenew";
    Route53Domains["EnableDomainTransferLock"] = "route53domains:EnableDomainTransferLock";
    Route53Domains["GetContactReachabilityStatus"] = "route53domains:GetContactReachabilityStatus";
    Route53Domains["GetDomainDetail"] = "route53domains:GetDomainDetail";
    Route53Domains["GetDomainSuggestions"] = "route53domains:GetDomainSuggestions";
    Route53Domains["GetOperationDetail"] = "route53domains:GetOperationDetail";
    Route53Domains["ListDomains"] = "route53domains:ListDomains";
    Route53Domains["ListOperations"] = "route53domains:ListOperations";
    Route53Domains["ListTagsForDomain"] = "route53domains:ListTagsForDomain";
    Route53Domains["RegisterDomain"] = "route53domains:RegisterDomain";
    Route53Domains["RenewDomain"] = "route53domains:RenewDomain";
    Route53Domains["ResendContactReachabilityEmail"] = "route53domains:ResendContactReachabilityEmail";
    Route53Domains["RetrieveDomainAuthCode"] = "route53domains:RetrieveDomainAuthCode";
    Route53Domains["TransferDomain"] = "route53domains:TransferDomain";
    Route53Domains["UpdateDomainContact"] = "route53domains:UpdateDomainContact";
    Route53Domains["UpdateDomainContactPrivacy"] = "route53domains:UpdateDomainContactPrivacy";
    Route53Domains["UpdateDomainNameservers"] = "route53domains:UpdateDomainNameservers";
    Route53Domains["UpdateTagsForDomain"] = "route53domains:UpdateTagsForDomain";
    Route53Domains["ViewBilling"] = "route53domains:ViewBilling";
})(Route53Domains = exports.Route53Domains || (exports.Route53Domains = {}));
/** Actions for Amazon S3
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html
  */
var S3;
(function (S3) {
    S3["AbortMultipartUpload"] = "s3:AbortMultipartUpload";
    S3["CreateBucket"] = "s3:CreateBucket";
    S3["DeleteBucket"] = "s3:DeleteBucket";
    S3["DeleteBucketPolicy"] = "s3:DeleteBucketPolicy";
    S3["DeleteBucketWebsite"] = "s3:DeleteBucketWebsite";
    S3["DeleteObject"] = "s3:DeleteObject";
    S3["DeleteObjectTagging"] = "s3:DeleteObjectTagging";
    S3["DeleteObjectVersion"] = "s3:DeleteObjectVersion";
    S3["DeleteObjectVersionTagging"] = "s3:DeleteObjectVersionTagging";
    S3["GetAccelerateConfiguration"] = "s3:GetAccelerateConfiguration";
    S3["GetAnalyticsConfiguration"] = "s3:GetAnalyticsConfiguration";
    S3["GetBucketAcl"] = "s3:GetBucketAcl";
    S3["GetBucketCORS"] = "s3:GetBucketCORS";
    S3["GetBucketLocation"] = "s3:GetBucketLocation";
    S3["GetBucketLogging"] = "s3:GetBucketLogging";
    S3["GetBucketNotification"] = "s3:GetBucketNotification";
    S3["GetBucketPolicy"] = "s3:GetBucketPolicy";
    S3["GetBucketRequestPayment"] = "s3:GetBucketRequestPayment";
    S3["GetBucketTagging"] = "s3:GetBucketTagging";
    S3["GetBucketVersioning"] = "s3:GetBucketVersioning";
    S3["GetBucketWebsite"] = "s3:GetBucketWebsite";
    S3["GetInventoryConfiguration"] = "s3:GetInventoryConfiguration";
    S3["GetIpConfiguration"] = "s3:GetIpConfiguration";
    S3["GetLifecycleConfiguration"] = "s3:GetLifecycleConfiguration";
    S3["GetMetricsConfiguration"] = "s3:GetMetricsConfiguration";
    S3["GetObject"] = "s3:GetObject";
    S3["GetObjectAcl"] = "s3:GetObjectAcl";
    S3["GetObjectTagging"] = "s3:GetObjectTagging";
    S3["GetObjectTorrent"] = "s3:GetObjectTorrent";
    S3["GetObjectVersion"] = "s3:GetObjectVersion";
    S3["GetObjectVersionAcl"] = "s3:GetObjectVersionAcl";
    S3["GetObjectVersionForReplication"] = "s3:GetObjectVersionForReplication";
    S3["GetObjectVersionTagging"] = "s3:GetObjectVersionTagging";
    S3["GetObjectVersionTorrent"] = "s3:GetObjectVersionTorrent";
    S3["GetReplicationConfiguration"] = "s3:GetReplicationConfiguration";
    S3["HeadBucket"] = "s3:HeadBucket";
    S3["ListAllMyBuckets"] = "s3:ListAllMyBuckets";
    S3["ListBucket"] = "s3:ListBucket";
    S3["ListBucketByTags"] = "s3:ListBucketByTags";
    S3["ListBucketMultipartUploads"] = "s3:ListBucketMultipartUploads";
    S3["ListBucketVersions"] = "s3:ListBucketVersions";
    S3["ListMultipartUploadParts"] = "s3:ListMultipartUploadParts";
    S3["ListObjects"] = "s3:ListObjects";
    S3["ObjectOwnerOverrideToBucketOwner"] = "s3:ObjectOwnerOverrideToBucketOwner";
    S3["PutAccelerateConfiguration"] = "s3:PutAccelerateConfiguration";
    S3["PutAnalyticsConfiguration"] = "s3:PutAnalyticsConfiguration";
    S3["PutBucketAcl"] = "s3:PutBucketAcl";
    S3["PutBucketCORS"] = "s3:PutBucketCORS";
    S3["PutBucketLogging"] = "s3:PutBucketLogging";
    S3["PutBucketNotification"] = "s3:PutBucketNotification";
    S3["PutBucketPolicy"] = "s3:PutBucketPolicy";
    S3["PutBucketRequestPayment"] = "s3:PutBucketRequestPayment";
    S3["PutBucketTagging"] = "s3:PutBucketTagging";
    S3["PutBucketVersioning"] = "s3:PutBucketVersioning";
    S3["PutBucketWebsite"] = "s3:PutBucketWebsite";
    S3["PutInventoryConfiguration"] = "s3:PutInventoryConfiguration";
    S3["PutIpConfiguration"] = "s3:PutIpConfiguration";
    S3["PutLifecycleConfiguration"] = "s3:PutLifecycleConfiguration";
    S3["PutMetricsConfiguration"] = "s3:PutMetricsConfiguration";
    S3["PutObject"] = "s3:PutObject";
    S3["PutObjectAcl"] = "s3:PutObjectAcl";
    S3["PutObjectTagging"] = "s3:PutObjectTagging";
    S3["PutObjectVersionAcl"] = "s3:PutObjectVersionAcl";
    S3["PutObjectVersionTagging"] = "s3:PutObjectVersionTagging";
    S3["PutReplicationConfiguration"] = "s3:PutReplicationConfiguration";
    S3["ReplicateDelete"] = "s3:ReplicateDelete";
    S3["ReplicateObject"] = "s3:ReplicateObject";
    S3["ReplicateTags"] = "s3:ReplicateTags";
    S3["RestoreObject"] = "s3:RestoreObject";
})(S3 = exports.S3 || (exports.S3 = {}));
/** Actions for Amazon SES
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html
  */
var SES;
(function (SES) {
    SES["CloneReceiptRuleSet"] = "ses:CloneReceiptRuleSet";
    SES["CreateConfigurationSet"] = "ses:CreateConfigurationSet";
    SES["CreateConfigurationSetEventDestination"] = "ses:CreateConfigurationSetEventDestination";
    SES["CreateConfigurationSetTrackingOptions"] = "ses:CreateConfigurationSetTrackingOptions";
    SES["CreateCustomVerificationEmailTemplate"] = "ses:CreateCustomVerificationEmailTemplate";
    SES["CreateReceiptFilter"] = "ses:CreateReceiptFilter";
    SES["CreateReceiptRule"] = "ses:CreateReceiptRule";
    SES["CreateReceiptRuleSet"] = "ses:CreateReceiptRuleSet";
    SES["CreateTemplate"] = "ses:CreateTemplate";
    SES["DeleteConfigurationSet"] = "ses:DeleteConfigurationSet";
    SES["DeleteConfigurationSetEventDestination"] = "ses:DeleteConfigurationSetEventDestination";
    SES["DeleteConfigurationSetTrackingOptions"] = "ses:DeleteConfigurationSetTrackingOptions";
    SES["DeleteCustomVerificationEmailTemplate"] = "ses:DeleteCustomVerificationEmailTemplate";
    SES["DeleteIdentity"] = "ses:DeleteIdentity";
    SES["DeleteIdentityPolicy"] = "ses:DeleteIdentityPolicy";
    SES["DeleteReceiptFilter"] = "ses:DeleteReceiptFilter";
    SES["DeleteReceiptRule"] = "ses:DeleteReceiptRule";
    SES["DeleteReceiptRuleSet"] = "ses:DeleteReceiptRuleSet";
    SES["DeleteTemplate"] = "ses:DeleteTemplate";
    SES["DeleteVerifiedEmailAddress"] = "ses:DeleteVerifiedEmailAddress";
    SES["DescribeActiveReceiptRuleSet"] = "ses:DescribeActiveReceiptRuleSet";
    SES["DescribeConfigurationSet"] = "ses:DescribeConfigurationSet";
    SES["DescribeReceiptRule"] = "ses:DescribeReceiptRule";
    SES["DescribeReceiptRuleSet"] = "ses:DescribeReceiptRuleSet";
    SES["GetAccountSendingEnabled"] = "ses:GetAccountSendingEnabled";
    SES["GetCustomVerificationEmailTemplate"] = "ses:GetCustomVerificationEmailTemplate";
    SES["GetIdentityDkimAttributes"] = "ses:GetIdentityDkimAttributes";
    SES["GetIdentityMailFromDomainAttributes"] = "ses:GetIdentityMailFromDomainAttributes";
    SES["GetIdentityNotificationAttributes"] = "ses:GetIdentityNotificationAttributes";
    SES["GetIdentityPolicies"] = "ses:GetIdentityPolicies";
    SES["GetIdentityVerificationAttributes"] = "ses:GetIdentityVerificationAttributes";
    SES["GetSendQuota"] = "ses:GetSendQuota";
    SES["GetSendStatistics"] = "ses:GetSendStatistics";
    SES["GetTemplate"] = "ses:GetTemplate";
    SES["ListConfigurationSets"] = "ses:ListConfigurationSets";
    SES["ListCustomVerificationEmailTemplates"] = "ses:ListCustomVerificationEmailTemplates";
    SES["ListIdentities"] = "ses:ListIdentities";
    SES["ListIdentityPolicies"] = "ses:ListIdentityPolicies";
    SES["ListReceiptFilters"] = "ses:ListReceiptFilters";
    SES["ListReceiptRuleSets"] = "ses:ListReceiptRuleSets";
    SES["ListTemplates"] = "ses:ListTemplates";
    SES["ListVerifiedEmailAddresses"] = "ses:ListVerifiedEmailAddresses";
    SES["PutIdentityPolicy"] = "ses:PutIdentityPolicy";
    SES["ReorderReceiptRuleSet"] = "ses:ReorderReceiptRuleSet";
    SES["SendBounce"] = "ses:SendBounce";
    SES["SendBulkTemplatedEmail"] = "ses:SendBulkTemplatedEmail";
    SES["SendCustomVerificationEmail"] = "ses:SendCustomVerificationEmail";
    SES["SendEmail"] = "ses:SendEmail";
    SES["SendRawEmail"] = "ses:SendRawEmail";
    SES["SendTemplatedEmail"] = "ses:SendTemplatedEmail";
    SES["SetActiveReceiptRuleSet"] = "ses:SetActiveReceiptRuleSet";
    SES["SetIdentityDkimEnabled"] = "ses:SetIdentityDkimEnabled";
    SES["SetIdentityFeedbackForwardingEnabled"] = "ses:SetIdentityFeedbackForwardingEnabled";
    SES["SetIdentityHeadersInNotificationsEnabled"] = "ses:SetIdentityHeadersInNotificationsEnabled";
    SES["SetIdentityMailFromDomain"] = "ses:SetIdentityMailFromDomain";
    SES["SetIdentityNotificationTopic"] = "ses:SetIdentityNotificationTopic";
    SES["SetReceiptRulePosition"] = "ses:SetReceiptRulePosition";
    SES["TestRenderTemplate"] = "ses:TestRenderTemplate";
    SES["UpdateAccountSendingEnabled"] = "ses:UpdateAccountSendingEnabled";
    SES["UpdateConfigurationSetEventDestination"] = "ses:UpdateConfigurationSetEventDestination";
    SES["UpdateConfigurationSetReputationMetricsEnabled"] = "ses:UpdateConfigurationSetReputationMetricsEnabled";
    SES["UpdateConfigurationSetSendingEnabled"] = "ses:UpdateConfigurationSetSendingEnabled";
    SES["UpdateConfigurationSetTrackingOptions"] = "ses:UpdateConfigurationSetTrackingOptions";
    SES["UpdateCustomVerificationEmailTemplate"] = "ses:UpdateCustomVerificationEmailTemplate";
    SES["UpdateReceiptRule"] = "ses:UpdateReceiptRule";
    SES["UpdateTemplate"] = "ses:UpdateTemplate";
    SES["VerifyDomainDkim"] = "ses:VerifyDomainDkim";
    SES["VerifyDomainIdentity"] = "ses:VerifyDomainIdentity";
    SES["VerifyEmailAddress"] = "ses:VerifyEmailAddress";
    SES["VerifyEmailIdentity"] = "ses:VerifyEmailIdentity";
})(SES = exports.SES || (exports.SES = {}));
/** Actions for Amazon SNS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsns.html
  */
var SNS;
(function (SNS) {
    SNS["AddPermission"] = "sns:AddPermission";
    SNS["CheckIfPhoneNumberIsOptedOut"] = "sns:CheckIfPhoneNumberIsOptedOut";
    SNS["ConfirmSubscription"] = "sns:ConfirmSubscription";
    SNS["CreatePlatformApplication"] = "sns:CreatePlatformApplication";
    SNS["CreatePlatformEndpoint"] = "sns:CreatePlatformEndpoint";
    SNS["CreateTopic"] = "sns:CreateTopic";
    SNS["DeleteEndpoint"] = "sns:DeleteEndpoint";
    SNS["DeletePlatformApplication"] = "sns:DeletePlatformApplication";
    SNS["DeleteTopic"] = "sns:DeleteTopic";
    SNS["GetEndpointAttributes"] = "sns:GetEndpointAttributes";
    SNS["GetPlatformApplicationAttributes"] = "sns:GetPlatformApplicationAttributes";
    SNS["GetSMSAttributes"] = "sns:GetSMSAttributes";
    SNS["GetSubscriptionAttributes"] = "sns:GetSubscriptionAttributes";
    SNS["GetTopicAttributes"] = "sns:GetTopicAttributes";
    SNS["ListEndpointsByPlatformApplication"] = "sns:ListEndpointsByPlatformApplication";
    SNS["ListPhoneNumbersOptedOut"] = "sns:ListPhoneNumbersOptedOut";
    SNS["ListPlatformApplications"] = "sns:ListPlatformApplications";
    SNS["ListSubscriptions"] = "sns:ListSubscriptions";
    SNS["ListSubscriptionsByTopic"] = "sns:ListSubscriptionsByTopic";
    SNS["ListTopics"] = "sns:ListTopics";
    SNS["OptInPhoneNumber"] = "sns:OptInPhoneNumber";
    SNS["Publish"] = "sns:Publish";
    SNS["RemovePermission"] = "sns:RemovePermission";
    SNS["SetEndpointAttributes"] = "sns:SetEndpointAttributes";
    SNS["SetPlatformApplicationAttributes"] = "sns:SetPlatformApplicationAttributes";
    SNS["SetSMSAttributes"] = "sns:SetSMSAttributes";
    SNS["SetSubscriptionAttributes"] = "sns:SetSubscriptionAttributes";
    SNS["SetTopicAttributes"] = "sns:SetTopicAttributes";
    SNS["Subscribe"] = "sns:Subscribe";
    SNS["Unsubscribe"] = "sns:Unsubscribe";
})(SNS = exports.SNS || (exports.SNS = {}));
/** Actions for Amazon SQS
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsqs.html
  */
var SQS;
(function (SQS) {
    SQS["AddPermission"] = "sqs:AddPermission";
    SQS["ChangeMessageVisibility"] = "sqs:ChangeMessageVisibility";
    SQS["ChangeMessageVisibilityBatch"] = "sqs:ChangeMessageVisibilityBatch";
    SQS["CreateQueue"] = "sqs:CreateQueue";
    SQS["DeleteMessage"] = "sqs:DeleteMessage";
    SQS["DeleteMessageBatch"] = "sqs:DeleteMessageBatch";
    SQS["DeleteQueue"] = "sqs:DeleteQueue";
    SQS["GetQueueAttributes"] = "sqs:GetQueueAttributes";
    SQS["GetQueueUrl"] = "sqs:GetQueueUrl";
    SQS["ListDeadLetterSourceQueues"] = "sqs:ListDeadLetterSourceQueues";
    SQS["ListQueueTags"] = "sqs:ListQueueTags";
    SQS["ListQueues"] = "sqs:ListQueues";
    SQS["PurgeQueue"] = "sqs:PurgeQueue";
    SQS["ReceiveMessage"] = "sqs:ReceiveMessage";
    SQS["RemovePermission"] = "sqs:RemovePermission";
    SQS["SendMessage"] = "sqs:SendMessage";
    SQS["SendMessageBatch"] = "sqs:SendMessageBatch";
    SQS["SetQueueAttributes"] = "sqs:SetQueueAttributes";
    SQS["TagQueue"] = "sqs:TagQueue";
    SQS["UntagQueue"] = "sqs:UntagQueue";
})(SQS = exports.SQS || (exports.SQS = {}));
/** Actions for Amazon SageMaker
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html
  */
var SageMaker;
(function (SageMaker) {
    SageMaker["AddTags"] = "sagemaker:AddTags";
    SageMaker["CreateEndpoint"] = "sagemaker:CreateEndpoint";
    SageMaker["CreateEndpointConfig"] = "sagemaker:CreateEndpointConfig";
    SageMaker["CreateModel"] = "sagemaker:CreateModel";
    SageMaker["CreateNotebookInstance"] = "sagemaker:CreateNotebookInstance";
    SageMaker["CreatePresignedNotebookInstanceUrl"] = "sagemaker:CreatePresignedNotebookInstanceUrl";
    SageMaker["CreateTrainingJob"] = "sagemaker:CreateTrainingJob";
    SageMaker["DeleteEndpoint"] = "sagemaker:DeleteEndpoint";
    SageMaker["DeleteEndpointConfig"] = "sagemaker:DeleteEndpointConfig";
    SageMaker["DeleteModel"] = "sagemaker:DeleteModel";
    SageMaker["DeleteNotebookInstance"] = "sagemaker:DeleteNotebookInstance";
    SageMaker["DeleteTags"] = "sagemaker:DeleteTags";
    SageMaker["DescribeEndpoint"] = "sagemaker:DescribeEndpoint";
    SageMaker["DescribeEndpointConfig"] = "sagemaker:DescribeEndpointConfig";
    SageMaker["DescribeModel"] = "sagemaker:DescribeModel";
    SageMaker["DescribeNotebookInstance"] = "sagemaker:DescribeNotebookInstance";
    SageMaker["DescribeTrainingJob"] = "sagemaker:DescribeTrainingJob";
    SageMaker["InvokeEndpoint"] = "sagemaker:InvokeEndpoint";
    SageMaker["ListEndpointConfigs"] = "sagemaker:ListEndpointConfigs";
    SageMaker["ListEndpoints"] = "sagemaker:ListEndpoints";
    SageMaker["ListModels"] = "sagemaker:ListModels";
    SageMaker["ListNotebookInstances"] = "sagemaker:ListNotebookInstances";
    SageMaker["ListTags"] = "sagemaker:ListTags";
    SageMaker["ListTrainingJobs"] = "sagemaker:ListTrainingJobs";
    SageMaker["StartNotebookInstance"] = "sagemaker:StartNotebookInstance";
    SageMaker["StopNotebookInstance"] = "sagemaker:StopNotebookInstance";
    SageMaker["StopTrainingJob"] = "sagemaker:StopTrainingJob";
    SageMaker["UpdateEndpoint"] = "sagemaker:UpdateEndpoint";
    SageMaker["UpdateEndpointWeightsAndCapacities"] = "sagemaker:UpdateEndpointWeightsAndCapacities";
    SageMaker["UpdateNotebookInstance"] = "sagemaker:UpdateNotebookInstance";
})(SageMaker = exports.SageMaker || (exports.SageMaker = {}));
/** Actions for Amazon Simple Systems Manager
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimplesystemsmanager.html
  */
var SSM;
(function (SSM) {
    SSM["AddTagsToResource"] = "ssm:AddTagsToResource";
    SSM["CancelCommand"] = "ssm:CancelCommand";
    SSM["CreateActivation"] = "ssm:CreateActivation";
    SSM["CreateAssociation"] = "ssm:CreateAssociation";
    SSM["CreateAssociationBatch"] = "ssm:CreateAssociationBatch";
    SSM["CreateDocument"] = "ssm:CreateDocument";
    SSM["CreateMaintenanceWindow"] = "ssm:CreateMaintenanceWindow";
    SSM["CreatePatchBaseline"] = "ssm:CreatePatchBaseline";
    SSM["CreateResourceDataSync"] = "ssm:CreateResourceDataSync";
    SSM["DeleteActivation"] = "ssm:DeleteActivation";
    SSM["DeleteAssociation"] = "ssm:DeleteAssociation";
    SSM["DeleteDocument"] = "ssm:DeleteDocument";
    SSM["DeleteMaintenanceWindow"] = "ssm:DeleteMaintenanceWindow";
    SSM["DeleteParameter"] = "ssm:DeleteParameter";
    SSM["DeleteParameters"] = "ssm:DeleteParameters";
    SSM["DeletePatchBaseline"] = "ssm:DeletePatchBaseline";
    SSM["DeleteResourceDataSync"] = "ssm:DeleteResourceDataSync";
    SSM["DeregisterManagedInstance"] = "ssm:DeregisterManagedInstance";
    SSM["DeregisterPatchBaselineForPatchGroup"] = "ssm:DeregisterPatchBaselineForPatchGroup";
    SSM["DeregisterTargetFromMaintenanceWindow"] = "ssm:DeregisterTargetFromMaintenanceWindow";
    SSM["DeregisterTaskFromMaintenanceWindow"] = "ssm:DeregisterTaskFromMaintenanceWindow";
    SSM["DescribeActivations"] = "ssm:DescribeActivations";
    SSM["DescribeAssociation"] = "ssm:DescribeAssociation";
    SSM["DescribeAutomationExecutions"] = "ssm:DescribeAutomationExecutions";
    SSM["DescribeAutomationStepExecutions"] = "ssm:DescribeAutomationStepExecutions";
    SSM["DescribeAvailablePatches"] = "ssm:DescribeAvailablePatches";
    SSM["DescribeDocument"] = "ssm:DescribeDocument";
    SSM["DescribeDocumentParameters"] = "ssm:DescribeDocumentParameters";
    SSM["DescribeDocumentPermission"] = "ssm:DescribeDocumentPermission";
    SSM["DescribeEffectiveInstanceAssociations"] = "ssm:DescribeEffectiveInstanceAssociations";
    SSM["DescribeEffectivePatchesForPatchBaseline"] = "ssm:DescribeEffectivePatchesForPatchBaseline";
    SSM["DescribeInstanceAssociationsStatus"] = "ssm:DescribeInstanceAssociationsStatus";
    SSM["DescribeInstanceInformation"] = "ssm:DescribeInstanceInformation";
    SSM["DescribeInstancePatchStates"] = "ssm:DescribeInstancePatchStates";
    SSM["DescribeInstancePatchStatesForPatchGroup"] = "ssm:DescribeInstancePatchStatesForPatchGroup";
    SSM["DescribeInstancePatches"] = "ssm:DescribeInstancePatches";
    SSM["DescribeInstanceProperties"] = "ssm:DescribeInstanceProperties";
    SSM["DescribeMaintenanceWindowExecutionTaskInvocations"] = "ssm:DescribeMaintenanceWindowExecutionTaskInvocations";
    SSM["DescribeMaintenanceWindowExecutionTasks"] = "ssm:DescribeMaintenanceWindowExecutionTasks";
    SSM["DescribeMaintenanceWindowExecutions"] = "ssm:DescribeMaintenanceWindowExecutions";
    SSM["DescribeMaintenanceWindowTargets"] = "ssm:DescribeMaintenanceWindowTargets";
    SSM["DescribeMaintenanceWindowTasks"] = "ssm:DescribeMaintenanceWindowTasks";
    SSM["DescribeMaintenanceWindows"] = "ssm:DescribeMaintenanceWindows";
    SSM["DescribeParameters"] = "ssm:DescribeParameters";
    SSM["DescribePatchBaselines"] = "ssm:DescribePatchBaselines";
    SSM["DescribePatchGroupState"] = "ssm:DescribePatchGroupState";
    SSM["DescribePatchGroups"] = "ssm:DescribePatchGroups";
    SSM["GetAutomationExecution"] = "ssm:GetAutomationExecution";
    SSM["GetCommandInvocation"] = "ssm:GetCommandInvocation";
    SSM["GetDefaultPatchBaseline"] = "ssm:GetDefaultPatchBaseline";
    SSM["GetDeployablePatchSnapshotForInstance"] = "ssm:GetDeployablePatchSnapshotForInstance";
    SSM["GetDocument"] = "ssm:GetDocument";
    SSM["GetInventory"] = "ssm:GetInventory";
    SSM["GetInventorySchema"] = "ssm:GetInventorySchema";
    SSM["GetMaintenanceWindow"] = "ssm:GetMaintenanceWindow";
    SSM["GetMaintenanceWindowExecution"] = "ssm:GetMaintenanceWindowExecution";
    SSM["GetMaintenanceWindowExecutionTask"] = "ssm:GetMaintenanceWindowExecutionTask";
    SSM["GetMaintenanceWindowExecutionTaskInvocation"] = "ssm:GetMaintenanceWindowExecutionTaskInvocation";
    SSM["GetMaintenanceWindowTask"] = "ssm:GetMaintenanceWindowTask";
    SSM["GetManifest"] = "ssm:GetManifest";
    SSM["GetParameter"] = "ssm:GetParameter";
    SSM["GetParameterHistory"] = "ssm:GetParameterHistory";
    SSM["GetParameters"] = "ssm:GetParameters";
    SSM["GetParametersByPath"] = "ssm:GetParametersByPath";
    SSM["GetPatchBaseline"] = "ssm:GetPatchBaseline";
    SSM["GetPatchBaselineForPatchGroup"] = "ssm:GetPatchBaselineForPatchGroup";
    SSM["ListAssociationVersions"] = "ssm:ListAssociationVersions";
    SSM["ListAssociations"] = "ssm:ListAssociations";
    SSM["ListCommandInvocations"] = "ssm:ListCommandInvocations";
    SSM["ListCommands"] = "ssm:ListCommands";
    SSM["ListDocumentVersions"] = "ssm:ListDocumentVersions";
    SSM["ListDocuments"] = "ssm:ListDocuments";
    SSM["ListInstanceAssociations"] = "ssm:ListInstanceAssociations";
    SSM["ListInventoryEntries"] = "ssm:ListInventoryEntries";
    SSM["ListResourceDataSync"] = "ssm:ListResourceDataSync";
    SSM["ListTagsForResource"] = "ssm:ListTagsForResource";
    SSM["ModifyDocumentPermission"] = "ssm:ModifyDocumentPermission";
    SSM["PutComplianceItems"] = "ssm:PutComplianceItems";
    SSM["PutConfigurePackageResult"] = "ssm:PutConfigurePackageResult";
    SSM["PutInventory"] = "ssm:PutInventory";
    SSM["PutParameter"] = "ssm:PutParameter";
    SSM["RegisterDefaultPatchBaseline"] = "ssm:RegisterDefaultPatchBaseline";
    SSM["RegisterPatchBaselineForPatchGroup"] = "ssm:RegisterPatchBaselineForPatchGroup";
    SSM["RegisterTargetWithMaintenanceWindow"] = "ssm:RegisterTargetWithMaintenanceWindow";
    SSM["RegisterTaskWithMaintenanceWindow"] = "ssm:RegisterTaskWithMaintenanceWindow";
    SSM["RemoveTagsFromResource"] = "ssm:RemoveTagsFromResource";
    SSM["SendAutomationSignal"] = "ssm:SendAutomationSignal";
    SSM["SendCommand"] = "ssm:SendCommand";
    SSM["StartAssociationsOnce"] = "ssm:StartAssociationsOnce";
    SSM["StartAutomationExecution"] = "ssm:StartAutomationExecution";
    SSM["StopAutomationExecution"] = "ssm:StopAutomationExecution";
    SSM["UpdateAssociation"] = "ssm:UpdateAssociation";
    SSM["UpdateAssociationStatus"] = "ssm:UpdateAssociationStatus";
    SSM["UpdateDocument"] = "ssm:UpdateDocument";
    SSM["UpdateDocumentDefaultVersion"] = "ssm:UpdateDocumentDefaultVersion";
    SSM["UpdateInstanceAssociationStatus"] = "ssm:UpdateInstanceAssociationStatus";
    SSM["UpdateInstanceInformation"] = "ssm:UpdateInstanceInformation";
    SSM["UpdateMaintenanceWindow"] = "ssm:UpdateMaintenanceWindow";
    SSM["UpdateMaintenanceWindowTarget"] = "ssm:UpdateMaintenanceWindowTarget";
    SSM["UpdateMaintenanceWindowTask"] = "ssm:UpdateMaintenanceWindowTask";
    SSM["UpdateManagedInstanceRole"] = "ssm:UpdateManagedInstanceRole";
    SSM["UpdatePatchBaseline"] = "ssm:UpdatePatchBaseline";
})(SSM = exports.SSM || (exports.SSM = {}));
/** Actions for Amazon Simple Workflow Service
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpleworkflowservice.html
  */
var SWF;
(function (SWF) {
    SWF["CancelTimer"] = "swf:CancelTimer";
    SWF["CancelWorkflowExecution"] = "swf:CancelWorkflowExecution";
    SWF["CompleteWorkflowExecution"] = "swf:CompleteWorkflowExecution";
    SWF["ContinueAsNewWorkflowExecution"] = "swf:ContinueAsNewWorkflowExecution";
    SWF["CountClosedWorkflowExecutions"] = "swf:CountClosedWorkflowExecutions";
    SWF["CountOpenWorkflowExecutions"] = "swf:CountOpenWorkflowExecutions";
    SWF["CountPendingActivityTasks"] = "swf:CountPendingActivityTasks";
    SWF["CountPendingDecisionTasks"] = "swf:CountPendingDecisionTasks";
    SWF["DeprecateActivityType"] = "swf:DeprecateActivityType";
    SWF["DeprecateDomain"] = "swf:DeprecateDomain";
    SWF["DeprecateWorkflowType"] = "swf:DeprecateWorkflowType";
    SWF["DescribeActivityType"] = "swf:DescribeActivityType";
    SWF["DescribeDomain"] = "swf:DescribeDomain";
    SWF["DescribeWorkflowExecution"] = "swf:DescribeWorkflowExecution";
    SWF["DescribeWorkflowType"] = "swf:DescribeWorkflowType";
    SWF["FailWorkflowExecution"] = "swf:FailWorkflowExecution";
    SWF["GetWorkflowExecutionHistory"] = "swf:GetWorkflowExecutionHistory";
    SWF["ListActivityTypes"] = "swf:ListActivityTypes";
    SWF["ListClosedWorkflowExecutions"] = "swf:ListClosedWorkflowExecutions";
    SWF["ListDomains"] = "swf:ListDomains";
    SWF["ListOpenWorkflowExecutions"] = "swf:ListOpenWorkflowExecutions";
    SWF["ListWorkflowTypes"] = "swf:ListWorkflowTypes";
    SWF["PollForActivityTask"] = "swf:PollForActivityTask";
    SWF["PollForDecisionTask"] = "swf:PollForDecisionTask";
    SWF["RecordActivityTaskHeartbeat"] = "swf:RecordActivityTaskHeartbeat";
    SWF["RecordMarker"] = "swf:RecordMarker";
    SWF["RegisterActivityType"] = "swf:RegisterActivityType";
    SWF["RegisterDomain"] = "swf:RegisterDomain";
    SWF["RegisterWorkflowType"] = "swf:RegisterWorkflowType";
    SWF["RequestCancelActivityTask"] = "swf:RequestCancelActivityTask";
    SWF["RequestCancelExternalWorkflowExecution"] = "swf:RequestCancelExternalWorkflowExecution";
    SWF["RequestCancelWorkflowExecution"] = "swf:RequestCancelWorkflowExecution";
    SWF["RespondActivityTaskCanceled"] = "swf:RespondActivityTaskCanceled";
    SWF["RespondActivityTaskCompleted"] = "swf:RespondActivityTaskCompleted";
    SWF["RespondActivityTaskFailed"] = "swf:RespondActivityTaskFailed";
    SWF["RespondDecisionTaskCompleted"] = "swf:RespondDecisionTaskCompleted";
    SWF["ScheduleActivityTask"] = "swf:ScheduleActivityTask";
    SWF["SignalExternalWorkflowExecution"] = "swf:SignalExternalWorkflowExecution";
    SWF["SignalWorkflowExecution"] = "swf:SignalWorkflowExecution";
    SWF["StartChildWorkflowExecution"] = "swf:StartChildWorkflowExecution";
    SWF["StartTimer"] = "swf:StartTimer";
    SWF["StartWorkflowExecution"] = "swf:StartWorkflowExecution";
    SWF["TerminateWorkflowExecution"] = "swf:TerminateWorkflowExecution";
})(SWF = exports.SWF || (exports.SWF = {}));
/** Actions for Amazon SimpleDB
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpledb.html
  */
var SDB;
(function (SDB) {
    SDB["BatchDeleteAttributes"] = "sdb:BatchDeleteAttributes";
    SDB["BatchPutAttributes"] = "sdb:BatchPutAttributes";
    SDB["CreateDomain"] = "sdb:CreateDomain";
    SDB["DeleteAttributes"] = "sdb:DeleteAttributes";
    SDB["DeleteDomain"] = "sdb:DeleteDomain";
    SDB["DomainMetadata"] = "sdb:DomainMetadata";
    SDB["GetAttributes"] = "sdb:GetAttributes";
    SDB["ListDomains"] = "sdb:ListDomains";
    SDB["PutAttributes"] = "sdb:PutAttributes";
    SDB["Select"] = "sdb:Select";
})(SDB = exports.SDB || (exports.SDB = {}));
/** Actions for Amazon Storage Gateway
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonstoragegateway.html
  */
var StorageGateway;
(function (StorageGateway) {
    StorageGateway["ActivateGateway"] = "storagegateway:ActivateGateway";
    StorageGateway["AddCache"] = "storagegateway:AddCache";
    StorageGateway["AddTagsToResource"] = "storagegateway:AddTagsToResource";
    StorageGateway["AddUploadBuffer"] = "storagegateway:AddUploadBuffer";
    StorageGateway["AddWorkingStorage"] = "storagegateway:AddWorkingStorage";
    StorageGateway["CancelArchival"] = "storagegateway:CancelArchival";
    StorageGateway["CancelRetrieval"] = "storagegateway:CancelRetrieval";
    StorageGateway["CreateCachediSCSIVolume"] = "storagegateway:CreateCachediSCSIVolume";
    StorageGateway["CreateNFSFileShare"] = "storagegateway:CreateNFSFileShare";
    StorageGateway["CreateSnapshot"] = "storagegateway:CreateSnapshot";
    StorageGateway["CreateSnapshotFromVolumeRecoveryPoint"] = "storagegateway:CreateSnapshotFromVolumeRecoveryPoint";
    StorageGateway["CreateStorediSCSIVolume"] = "storagegateway:CreateStorediSCSIVolume";
    StorageGateway["CreateTapeWithBarcode"] = "storagegateway:CreateTapeWithBarcode";
    StorageGateway["CreateTapes"] = "storagegateway:CreateTapes";
    StorageGateway["DeleteBandwidthRateLimit"] = "storagegateway:DeleteBandwidthRateLimit";
    StorageGateway["DeleteChapCredentials"] = "storagegateway:DeleteChapCredentials";
    StorageGateway["DeleteFileShare"] = "storagegateway:DeleteFileShare";
    StorageGateway["DeleteGateway"] = "storagegateway:DeleteGateway";
    StorageGateway["DeleteSnapshotSchedule"] = "storagegateway:DeleteSnapshotSchedule";
    StorageGateway["DeleteTape"] = "storagegateway:DeleteTape";
    StorageGateway["DeleteTapeArchive"] = "storagegateway:DeleteTapeArchive";
    StorageGateway["DeleteVolume"] = "storagegateway:DeleteVolume";
    StorageGateway["DescribeBandwidthRateLimit"] = "storagegateway:DescribeBandwidthRateLimit";
    StorageGateway["DescribeCache"] = "storagegateway:DescribeCache";
    StorageGateway["DescribeCachediSCSIVolumes"] = "storagegateway:DescribeCachediSCSIVolumes";
    StorageGateway["DescribeChapCredentials"] = "storagegateway:DescribeChapCredentials";
    StorageGateway["DescribeGatewayInformation"] = "storagegateway:DescribeGatewayInformation";
    StorageGateway["DescribeMaintenanceStartTime"] = "storagegateway:DescribeMaintenanceStartTime";
    StorageGateway["DescribeNFSFileShares"] = "storagegateway:DescribeNFSFileShares";
    StorageGateway["DescribeSnapshotSchedule"] = "storagegateway:DescribeSnapshotSchedule";
    StorageGateway["DescribeStorediSCSIVolumes"] = "storagegateway:DescribeStorediSCSIVolumes";
    StorageGateway["DescribeTapeArchives"] = "storagegateway:DescribeTapeArchives";
    StorageGateway["DescribeTapeRecoveryPoints"] = "storagegateway:DescribeTapeRecoveryPoints";
    StorageGateway["DescribeTapes"] = "storagegateway:DescribeTapes";
    StorageGateway["DescribeUploadBuffer"] = "storagegateway:DescribeUploadBuffer";
    StorageGateway["DescribeVTLDevices"] = "storagegateway:DescribeVTLDevices";
    StorageGateway["DescribeWorkingStorage"] = "storagegateway:DescribeWorkingStorage";
    StorageGateway["DisableGateway"] = "storagegateway:DisableGateway";
    StorageGateway["ListFileShares"] = "storagegateway:ListFileShares";
    StorageGateway["ListGateways"] = "storagegateway:ListGateways";
    StorageGateway["ListLocalDisks"] = "storagegateway:ListLocalDisks";
    StorageGateway["ListTagsForResource"] = "storagegateway:ListTagsForResource";
    StorageGateway["ListTapes"] = "storagegateway:ListTapes";
    StorageGateway["ListVolumeInitiators"] = "storagegateway:ListVolumeInitiators";
    StorageGateway["ListVolumeRecoveryPoints"] = "storagegateway:ListVolumeRecoveryPoints";
    StorageGateway["ListVolumes"] = "storagegateway:ListVolumes";
    StorageGateway["RefreshCache"] = "storagegateway:RefreshCache";
    StorageGateway["RemoveTagsFromResource"] = "storagegateway:RemoveTagsFromResource";
    StorageGateway["ResetCache"] = "storagegateway:ResetCache";
    StorageGateway["RetrieveTapeArchive"] = "storagegateway:RetrieveTapeArchive";
    StorageGateway["RetrieveTapeRecoveryPoint"] = "storagegateway:RetrieveTapeRecoveryPoint";
    StorageGateway["SetLocalConsolePassword"] = "storagegateway:SetLocalConsolePassword";
    StorageGateway["ShutdownGateway"] = "storagegateway:ShutdownGateway";
    StorageGateway["StartGateway"] = "storagegateway:StartGateway";
    StorageGateway["UpdateBandwidthRateLimit"] = "storagegateway:UpdateBandwidthRateLimit";
    StorageGateway["UpdateChapCredentials"] = "storagegateway:UpdateChapCredentials";
    StorageGateway["UpdateGatewayInformation"] = "storagegateway:UpdateGatewayInformation";
    StorageGateway["UpdateGatewaySoftwareNow"] = "storagegateway:UpdateGatewaySoftwareNow";
    StorageGateway["UpdateMaintenanceStartTime"] = "storagegateway:UpdateMaintenanceStartTime";
    StorageGateway["UpdateNFSFileShare"] = "storagegateway:UpdateNFSFileShare";
    StorageGateway["UpdateSnapshotSchedule"] = "storagegateway:UpdateSnapshotSchedule";
    StorageGateway["UpdateVTLDeviceType"] = "storagegateway:UpdateVTLDeviceType";
})(StorageGateway = exports.StorageGateway || (exports.StorageGateway = {}));
/** Actions for Amazon Transcribe
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranscribe.html
  */
var Transcribe;
(function (Transcribe) {
    Transcribe["GetTranscriptionJob"] = "transcribe:GetTranscriptionJob";
    Transcribe["ListTranscriptionJobs"] = "transcribe:ListTranscriptionJobs";
    Transcribe["StartTranscriptionJob"] = "transcribe:StartTranscriptionJob";
})(Transcribe = exports.Transcribe || (exports.Transcribe = {}));
/** Actions for Amazon Translate
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranslate.html
  */
var Translate;
(function (Translate) {
    Translate["TranslateText"] = "translate:TranslateText";
})(Translate = exports.Translate || (exports.Translate = {}));
/** Actions for Amazon WorkDocs
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkdocs.html
  */
var WorkDocs;
(function (WorkDocs) {
    WorkDocs["AbortDocumentVersionUpload"] = "workdocs:AbortDocumentVersionUpload";
    WorkDocs["ActivateUser"] = "workdocs:ActivateUser";
    WorkDocs["AddResourcePermissions"] = "workdocs:AddResourcePermissions";
    WorkDocs["AddUserToGroup"] = "workdocs:AddUserToGroup";
    WorkDocs["CheckAlias"] = "workdocs:CheckAlias";
    WorkDocs["CreateFolder"] = "workdocs:CreateFolder";
    WorkDocs["CreateInstance"] = "workdocs:CreateInstance";
    WorkDocs["CreateNotificationSubscription"] = "workdocs:CreateNotificationSubscription";
    WorkDocs["CreateUser"] = "workdocs:CreateUser";
    WorkDocs["DeactivateUser"] = "workdocs:DeactivateUser";
    WorkDocs["DeleteDocument"] = "workdocs:DeleteDocument";
    WorkDocs["DeleteFolder"] = "workdocs:DeleteFolder";
    WorkDocs["DeleteFolderContents"] = "workdocs:DeleteFolderContents";
    WorkDocs["DeleteInstance"] = "workdocs:DeleteInstance";
    WorkDocs["DeleteNotificationSubscription"] = "workdocs:DeleteNotificationSubscription";
    WorkDocs["DeleteUser"] = "workdocs:DeleteUser";
    WorkDocs["DeregisterDirectory"] = "workdocs:DeregisterDirectory";
    WorkDocs["DescribeAvailableDirectories"] = "workdocs:DescribeAvailableDirectories";
    WorkDocs["DescribeDocumentVersions"] = "workdocs:DescribeDocumentVersions";
    WorkDocs["DescribeFolderContents"] = "workdocs:DescribeFolderContents";
    WorkDocs["DescribeInstances"] = "workdocs:DescribeInstances";
    WorkDocs["DescribeNotificationSubscriptions"] = "workdocs:DescribeNotificationSubscriptions";
    WorkDocs["DescribeResourcePermissions"] = "workdocs:DescribeResourcePermissions";
    WorkDocs["DescribeUsers"] = "workdocs:DescribeUsers";
    WorkDocs["GetDocument"] = "workdocs:GetDocument";
    WorkDocs["GetDocumentPath"] = "workdocs:GetDocumentPath";
    WorkDocs["GetDocumentVersion"] = "workdocs:GetDocumentVersion";
    WorkDocs["GetFolder"] = "workdocs:GetFolder";
    WorkDocs["GetFolderPath"] = "workdocs:GetFolderPath";
    WorkDocs["InitiateDocumentVersionUpload"] = "workdocs:InitiateDocumentVersionUpload";
    WorkDocs["RegisterDirectory"] = "workdocs:RegisterDirectory";
    WorkDocs["RemoveAllResourcePermissions"] = "workdocs:RemoveAllResourcePermissions";
    WorkDocs["RemoveResourcePermission"] = "workdocs:RemoveResourcePermission";
    WorkDocs["RemoveUserFromGroup"] = "workdocs:RemoveUserFromGroup";
    WorkDocs["UpdateDocument"] = "workdocs:UpdateDocument";
    WorkDocs["UpdateDocumentVersion"] = "workdocs:UpdateDocumentVersion";
    WorkDocs["UpdateFolder"] = "workdocs:UpdateFolder";
    WorkDocs["UpdateInstanceAlias"] = "workdocs:UpdateInstanceAlias";
    WorkDocs["UpdateUser"] = "workdocs:UpdateUser";
})(WorkDocs = exports.WorkDocs || (exports.WorkDocs = {}));
/** Actions for Amazon WorkMail
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkmail.html
  */
var WorkMail;
(function (WorkMail) {
    WorkMail["AddMembersToGroup"] = "workmail:AddMembersToGroup";
    WorkMail["CreateGroup"] = "workmail:CreateGroup";
    WorkMail["CreateMailDomain"] = "workmail:CreateMailDomain";
    WorkMail["CreateMailUser"] = "workmail:CreateMailUser";
    WorkMail["CreateOrganization"] = "workmail:CreateOrganization";
    WorkMail["CreateResource"] = "workmail:CreateResource";
    WorkMail["DeleteMailDomain"] = "workmail:DeleteMailDomain";
    WorkMail["DeleteMobileDevice"] = "workmail:DeleteMobileDevice";
    WorkMail["DeleteOrganization"] = "workmail:DeleteOrganization";
    WorkMail["DescribeDirectories"] = "workmail:DescribeDirectories";
    WorkMail["DescribeKmsKeys"] = "workmail:DescribeKmsKeys";
    WorkMail["DescribeMailDomains"] = "workmail:DescribeMailDomains";
    WorkMail["DescribeMailGroups"] = "workmail:DescribeMailGroups";
    WorkMail["DescribeMailUsers"] = "workmail:DescribeMailUsers";
    WorkMail["DescribeOrganizations"] = "workmail:DescribeOrganizations";
    WorkMail["DisableMailGroups"] = "workmail:DisableMailGroups";
    WorkMail["DisableMailUsers"] = "workmail:DisableMailUsers";
    WorkMail["EnableMailDomain"] = "workmail:EnableMailDomain";
    WorkMail["EnableMailGroups"] = "workmail:EnableMailGroups";
    WorkMail["EnableMailUsers"] = "workmail:EnableMailUsers";
    WorkMail["GetMailDomainDetails"] = "workmail:GetMailDomainDetails";
    WorkMail["GetMailGroupDetails"] = "workmail:GetMailGroupDetails";
    WorkMail["GetMailUserDetails"] = "workmail:GetMailUserDetails";
    WorkMail["GetMobileDeviceDetails"] = "workmail:GetMobileDeviceDetails";
    WorkMail["GetMobileDevicesForUser"] = "workmail:GetMobileDevicesForUser";
    WorkMail["GetMobilePolicyDetails"] = "workmail:GetMobilePolicyDetails";
    WorkMail["ListMembersInMailGroup"] = "workmail:ListMembersInMailGroup";
    WorkMail["RemoveMembersFromGroup"] = "workmail:RemoveMembersFromGroup";
    WorkMail["ResetUserPassword"] = "workmail:ResetUserPassword";
    WorkMail["SearchMembers"] = "workmail:SearchMembers";
    WorkMail["SetAdmin"] = "workmail:SetAdmin";
    WorkMail["SetDefaultMailDomain"] = "workmail:SetDefaultMailDomain";
    WorkMail["SetMailGroupDetails"] = "workmail:SetMailGroupDetails";
    WorkMail["SetMailUserDetails"] = "workmail:SetMailUserDetails";
    WorkMail["SetMobilePolicyDetails"] = "workmail:SetMobilePolicyDetails";
    WorkMail["WipeMobileDevice"] = "workmail:WipeMobileDevice";
})(WorkMail = exports.WorkMail || (exports.WorkMail = {}));
/** Actions for Amazon WorkSpaces
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspaces.html
  */
var WorkSpaces;
(function (WorkSpaces) {
    WorkSpaces["CreateTags"] = "workspaces:CreateTags";
    WorkSpaces["CreateWorkspaces"] = "workspaces:CreateWorkspaces";
    WorkSpaces["DeleteTags"] = "workspaces:DeleteTags";
    WorkSpaces["DescribeTags"] = "workspaces:DescribeTags";
    WorkSpaces["DescribeWorkspaceBundles"] = "workspaces:DescribeWorkspaceBundles";
    WorkSpaces["DescribeWorkspaceDirectories"] = "workspaces:DescribeWorkspaceDirectories";
    WorkSpaces["DescribeWorkspaces"] = "workspaces:DescribeWorkspaces";
    WorkSpaces["DescribeWorkspacesConnectionStatus"] = "workspaces:DescribeWorkspacesConnectionStatus";
    WorkSpaces["ModifyWorkspaceProperties"] = "workspaces:ModifyWorkspaceProperties";
    WorkSpaces["RebootWorkspaces"] = "workspaces:RebootWorkspaces";
    WorkSpaces["RebuildWorkspaces"] = "workspaces:RebuildWorkspaces";
    WorkSpaces["StartWorkspaces"] = "workspaces:StartWorkspaces";
    WorkSpaces["StopWorkspaces"] = "workspaces:StopWorkspaces";
    WorkSpaces["TerminateWorkspaces"] = "workspaces:TerminateWorkspaces";
})(WorkSpaces = exports.WorkSpaces || (exports.WorkSpaces = {}));
/** Actions for Amazon WorkSpaces Application Manager
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspacesapplicationmanager.html
  */
var WAM;
(function (WAM) {
    WAM["AuthenticatePackager"] = "wam:AuthenticatePackager";
})(WAM = exports.WAM || (exports.WAM = {}));
/** Actions for Application Auto Scaling
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationautoscaling.html
  */
var ApplicationAutoScaling;
(function (ApplicationAutoScaling) {
    ApplicationAutoScaling["DeleteScalingPolicy"] = "application-autoscaling:DeleteScalingPolicy";
    ApplicationAutoScaling["DeleteScheduledAction"] = "application-autoscaling:DeleteScheduledAction";
    ApplicationAutoScaling["DeregisterScalableTarget"] = "application-autoscaling:DeregisterScalableTarget";
    ApplicationAutoScaling["DescribeScalableTargets"] = "application-autoscaling:DescribeScalableTargets";
    ApplicationAutoScaling["DescribeScalingActivities"] = "application-autoscaling:DescribeScalingActivities";
    ApplicationAutoScaling["DescribeScalingPolicies"] = "application-autoscaling:DescribeScalingPolicies";
    ApplicationAutoScaling["DescribeScheduledActions"] = "application-autoscaling:DescribeScheduledActions";
    ApplicationAutoScaling["PutScalingPolicy"] = "application-autoscaling:PutScalingPolicy";
    ApplicationAutoScaling["PutScheduledAction"] = "application-autoscaling:PutScheduledAction";
    ApplicationAutoScaling["RegisterScalableTarget"] = "application-autoscaling:RegisterScalableTarget";
})(ApplicationAutoScaling = exports.ApplicationAutoScaling || (exports.ApplicationAutoScaling = {}));
/** Actions for Application Discovery
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationdiscovery.html
  */
var Discovery;
(function (Discovery) {
    Discovery["AssociateConfigurationItemsToApplication"] = "discovery:AssociateConfigurationItemsToApplication";
    Discovery["CreateApplication"] = "discovery:CreateApplication";
    Discovery["CreateTags"] = "discovery:CreateTags";
    Discovery["DeleteApplications"] = "discovery:DeleteApplications";
    Discovery["DeleteTags"] = "discovery:DeleteTags";
    Discovery["DescribeAgents"] = "discovery:DescribeAgents";
    Discovery["DescribeConfigurations"] = "discovery:DescribeConfigurations";
    Discovery["DescribeExportConfigurations"] = "discovery:DescribeExportConfigurations";
    Discovery["DescribeTags"] = "discovery:DescribeTags";
    Discovery["DisassociateConfigurationItemsFromApplication"] = "discovery:DisassociateConfigurationItemsFromApplication";
    Discovery["ExportConfigurations"] = "discovery:ExportConfigurations";
    Discovery["GetDiscoverySummary"] = "discovery:GetDiscoverySummary";
    Discovery["ListConfigurations"] = "discovery:ListConfigurations";
    Discovery["ListServerNeighbors"] = "discovery:ListServerNeighbors";
    Discovery["StartDataCollectionByAgentIds"] = "discovery:StartDataCollectionByAgentIds";
    Discovery["StartExportTask"] = "discovery:StartExportTask";
    Discovery["StopDataCollectionByAgentIds"] = "discovery:StopDataCollectionByAgentIds";
    Discovery["UpdateApplication"] = "discovery:UpdateApplication";
})(Discovery = exports.Discovery || (exports.Discovery = {}));
/** Actions for Auto Scaling
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_autoscaling.html
  */
var AutoScaling;
(function (AutoScaling) {
    AutoScaling["AttachInstances"] = "autoscaling:AttachInstances";
    AutoScaling["AttachLoadBalancerTargetGroups"] = "autoscaling:AttachLoadBalancerTargetGroups";
    AutoScaling["AttachLoadBalancers"] = "autoscaling:AttachLoadBalancers";
    AutoScaling["CompleteLifecycleAction"] = "autoscaling:CompleteLifecycleAction";
    AutoScaling["CreateAutoScalingGroup"] = "autoscaling:CreateAutoScalingGroup";
    AutoScaling["CreateLaunchConfiguration"] = "autoscaling:CreateLaunchConfiguration";
    AutoScaling["CreateOrUpdateTags"] = "autoscaling:CreateOrUpdateTags";
    AutoScaling["DeleteAutoScalingGroup"] = "autoscaling:DeleteAutoScalingGroup";
    AutoScaling["DeleteLaunchConfiguration"] = "autoscaling:DeleteLaunchConfiguration";
    AutoScaling["DeleteLifecycleHook"] = "autoscaling:DeleteLifecycleHook";
    AutoScaling["DeleteNotificationConfiguration"] = "autoscaling:DeleteNotificationConfiguration";
    AutoScaling["DeletePolicy"] = "autoscaling:DeletePolicy";
    AutoScaling["DeleteScheduledAction"] = "autoscaling:DeleteScheduledAction";
    AutoScaling["DeleteTags"] = "autoscaling:DeleteTags";
    AutoScaling["DescribeAccountLimits"] = "autoscaling:DescribeAccountLimits";
    AutoScaling["DescribeAdjustmentTypes"] = "autoscaling:DescribeAdjustmentTypes";
    AutoScaling["DescribeAutoScalingGroups"] = "autoscaling:DescribeAutoScalingGroups";
    AutoScaling["DescribeAutoScalingInstances"] = "autoscaling:DescribeAutoScalingInstances";
    AutoScaling["DescribeAutoScalingNotificationTypes"] = "autoscaling:DescribeAutoScalingNotificationTypes";
    AutoScaling["DescribeLaunchConfigurations"] = "autoscaling:DescribeLaunchConfigurations";
    AutoScaling["DescribeLifecycleHookTypes"] = "autoscaling:DescribeLifecycleHookTypes";
    AutoScaling["DescribeLifecycleHooks"] = "autoscaling:DescribeLifecycleHooks";
    AutoScaling["DescribeLoadBalancerTargetGroups"] = "autoscaling:DescribeLoadBalancerTargetGroups";
    AutoScaling["DescribeLoadBalancers"] = "autoscaling:DescribeLoadBalancers";
    AutoScaling["DescribeMetricCollectionTypes"] = "autoscaling:DescribeMetricCollectionTypes";
    AutoScaling["DescribeNotificationConfigurations"] = "autoscaling:DescribeNotificationConfigurations";
    AutoScaling["DescribePolicies"] = "autoscaling:DescribePolicies";
    AutoScaling["DescribeScalingActivities"] = "autoscaling:DescribeScalingActivities";
    AutoScaling["DescribeScalingProcessTypes"] = "autoscaling:DescribeScalingProcessTypes";
    AutoScaling["DescribeScheduledActions"] = "autoscaling:DescribeScheduledActions";
    AutoScaling["DescribeTags"] = "autoscaling:DescribeTags";
    AutoScaling["DescribeTerminationPolicyTypes"] = "autoscaling:DescribeTerminationPolicyTypes";
    AutoScaling["DetachInstances"] = "autoscaling:DetachInstances";
    AutoScaling["DetachLoadBalancerTargetGroups"] = "autoscaling:DetachLoadBalancerTargetGroups";
    AutoScaling["DetachLoadBalancers"] = "autoscaling:DetachLoadBalancers";
    AutoScaling["DisableMetricsCollection"] = "autoscaling:DisableMetricsCollection";
    AutoScaling["EnableMetricsCollection"] = "autoscaling:EnableMetricsCollection";
    AutoScaling["EnterStandby"] = "autoscaling:EnterStandby";
    AutoScaling["ExecutePolicy"] = "autoscaling:ExecutePolicy";
    AutoScaling["ExitStandby"] = "autoscaling:ExitStandby";
    AutoScaling["PutLifecycleHook"] = "autoscaling:PutLifecycleHook";
    AutoScaling["PutNotificationConfiguration"] = "autoscaling:PutNotificationConfiguration";
    AutoScaling["PutScalingPolicy"] = "autoscaling:PutScalingPolicy";
    AutoScaling["PutScheduledUpdateGroupAction"] = "autoscaling:PutScheduledUpdateGroupAction";
    AutoScaling["RecordLifecycleActionHeartbeat"] = "autoscaling:RecordLifecycleActionHeartbeat";
    AutoScaling["ResumeProcesses"] = "autoscaling:ResumeProcesses";
    AutoScaling["SetDesiredCapacity"] = "autoscaling:SetDesiredCapacity";
    AutoScaling["SetInstanceHealth"] = "autoscaling:SetInstanceHealth";
    AutoScaling["SetInstanceProtection"] = "autoscaling:SetInstanceProtection";
    AutoScaling["SuspendProcesses"] = "autoscaling:SuspendProcesses";
    AutoScaling["TerminateInstanceInAutoScalingGroup"] = "autoscaling:TerminateInstanceInAutoScalingGroup";
    AutoScaling["UpdateAutoScalingGroup"] = "autoscaling:UpdateAutoScalingGroup";
})(AutoScaling = exports.AutoScaling || (exports.AutoScaling = {}));
/** Actions for Auto Scaling Plans
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_autoscalingplans.html
  */
var AutoScalingPlans;
(function (AutoScalingPlans) {
    AutoScalingPlans["CreateScalingPlan"] = "autoscaling-plans:CreateScalingPlan";
    AutoScalingPlans["DeleteScalingPlan"] = "autoscaling-plans:DeleteScalingPlan";
    AutoScalingPlans["DescribeScalingPlanResources"] = "autoscaling-plans:DescribeScalingPlanResources";
    AutoScalingPlans["DescribeScalingPlans"] = "autoscaling-plans:DescribeScalingPlans";
})(AutoScalingPlans = exports.AutoScalingPlans || (exports.AutoScalingPlans = {}));
/** Actions for Data Pipeline
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_datapipeline.html
  */
var DataPipeline;
(function (DataPipeline) {
    DataPipeline["ActivatePipeline"] = "datapipeline:ActivatePipeline";
    DataPipeline["AddTags"] = "datapipeline:AddTags";
    DataPipeline["CreatePipeline"] = "datapipeline:CreatePipeline";
    DataPipeline["DeactivatePipeline"] = "datapipeline:DeactivatePipeline";
    DataPipeline["DeletePipeline"] = "datapipeline:DeletePipeline";
    DataPipeline["DescribeObjects"] = "datapipeline:DescribeObjects";
    DataPipeline["DescribePipelines"] = "datapipeline:DescribePipelines";
    DataPipeline["EvaluateExpression"] = "datapipeline:EvaluateExpression";
    DataPipeline["GetAccountLimits"] = "datapipeline:GetAccountLimits";
    DataPipeline["GetPipelineDefinition"] = "datapipeline:GetPipelineDefinition";
    DataPipeline["ListPipelines"] = "datapipeline:ListPipelines";
    DataPipeline["PollForTask"] = "datapipeline:PollForTask";
    DataPipeline["PutAccountLimits"] = "datapipeline:PutAccountLimits";
    DataPipeline["PutPipelineDefinition"] = "datapipeline:PutPipelineDefinition";
    DataPipeline["QueryObjects"] = "datapipeline:QueryObjects";
    DataPipeline["RemoveTags"] = "datapipeline:RemoveTags";
    DataPipeline["ReportTaskProgress"] = "datapipeline:ReportTaskProgress";
    DataPipeline["ReportTaskRunnerHeartbeat"] = "datapipeline:ReportTaskRunnerHeartbeat";
    DataPipeline["SetStatus"] = "datapipeline:SetStatus";
    DataPipeline["SetTaskStatus"] = "datapipeline:SetTaskStatus";
    DataPipeline["ValidatePipelineDefinition"] = "datapipeline:ValidatePipelineDefinition";
})(DataPipeline = exports.DataPipeline || (exports.DataPipeline = {}));
/** Actions for Elastic Load Balancing
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancing.html
  */
var ElasticLoadBalancing;
(function (ElasticLoadBalancing) {
    ElasticLoadBalancing["AddTags"] = "elasticloadbalancing:AddTags";
    ElasticLoadBalancing["ApplySecurityGroupsToLoadBalancer"] = "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer";
    ElasticLoadBalancing["AttachLoadBalancerToSubnets"] = "elasticloadbalancing:AttachLoadBalancerToSubnets";
    ElasticLoadBalancing["ConfigureHealthCheck"] = "elasticloadbalancing:ConfigureHealthCheck";
    ElasticLoadBalancing["CreateAppCookieStickinessPolicy"] = "elasticloadbalancing:CreateAppCookieStickinessPolicy";
    ElasticLoadBalancing["CreateLBCookieStickinessPolicy"] = "elasticloadbalancing:CreateLBCookieStickinessPolicy";
    ElasticLoadBalancing["CreateLoadBalancer"] = "elasticloadbalancing:CreateLoadBalancer";
    ElasticLoadBalancing["CreateLoadBalancerListeners"] = "elasticloadbalancing:CreateLoadBalancerListeners";
    ElasticLoadBalancing["CreateLoadBalancerPolicy"] = "elasticloadbalancing:CreateLoadBalancerPolicy";
    ElasticLoadBalancing["DeleteLoadBalancer"] = "elasticloadbalancing:DeleteLoadBalancer";
    ElasticLoadBalancing["DeleteLoadBalancerListeners"] = "elasticloadbalancing:DeleteLoadBalancerListeners";
    ElasticLoadBalancing["DeleteLoadBalancerPolicy"] = "elasticloadbalancing:DeleteLoadBalancerPolicy";
    ElasticLoadBalancing["DeregisterInstancesFromLoadBalancer"] = "elasticloadbalancing:DeregisterInstancesFromLoadBalancer";
    ElasticLoadBalancing["DescribeInstanceHealth"] = "elasticloadbalancing:DescribeInstanceHealth";
    ElasticLoadBalancing["DescribeLoadBalancerAttributes"] = "elasticloadbalancing:DescribeLoadBalancerAttributes";
    ElasticLoadBalancing["DescribeLoadBalancerPolicies"] = "elasticloadbalancing:DescribeLoadBalancerPolicies";
    ElasticLoadBalancing["DescribeLoadBalancerPolicyTypes"] = "elasticloadbalancing:DescribeLoadBalancerPolicyTypes";
    ElasticLoadBalancing["DescribeLoadBalancers"] = "elasticloadbalancing:DescribeLoadBalancers";
    ElasticLoadBalancing["DescribeTags"] = "elasticloadbalancing:DescribeTags";
    ElasticLoadBalancing["DetachLoadBalancerFromSubnets"] = "elasticloadbalancing:DetachLoadBalancerFromSubnets";
    ElasticLoadBalancing["DisableAvailabilityZonesForLoadBalancer"] = "elasticloadbalancing:DisableAvailabilityZonesForLoadBalancer";
    ElasticLoadBalancing["EnableAvailabilityZonesForLoadBalancer"] = "elasticloadbalancing:EnableAvailabilityZonesForLoadBalancer";
    ElasticLoadBalancing["ModifyLoadBalancerAttributes"] = "elasticloadbalancing:ModifyLoadBalancerAttributes";
    ElasticLoadBalancing["RegisterInstancesWithLoadBalancer"] = "elasticloadbalancing:RegisterInstancesWithLoadBalancer";
    ElasticLoadBalancing["RemoveTags"] = "elasticloadbalancing:RemoveTags";
    ElasticLoadBalancing["SetLoadBalancerListenerSSLCertificate"] = "elasticloadbalancing:SetLoadBalancerListenerSSLCertificate";
    ElasticLoadBalancing["SetLoadBalancerPoliciesForBackendServer"] = "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer";
    ElasticLoadBalancing["SetLoadBalancerPoliciesOfListener"] = "elasticloadbalancing:SetLoadBalancerPoliciesOfListener";
})(ElasticLoadBalancing = exports.ElasticLoadBalancing || (exports.ElasticLoadBalancing = {}));
/** Actions for Elastic Load Balancing V2
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancingv2.html
  */
var ElasticLoadBalancingV2;
(function (ElasticLoadBalancingV2) {
    ElasticLoadBalancingV2["AddTags"] = "elasticloadbalancing:AddTags";
    ElasticLoadBalancingV2["CreateListener"] = "elasticloadbalancing:CreateListener";
    ElasticLoadBalancingV2["CreateLoadBalancer"] = "elasticloadbalancing:CreateLoadBalancer";
    ElasticLoadBalancingV2["CreateRule"] = "elasticloadbalancing:CreateRule";
    ElasticLoadBalancingV2["CreateTargetGroup"] = "elasticloadbalancing:CreateTargetGroup";
    ElasticLoadBalancingV2["DeleteListener"] = "elasticloadbalancing:DeleteListener";
    ElasticLoadBalancingV2["DeleteLoadBalancer"] = "elasticloadbalancing:DeleteLoadBalancer";
    ElasticLoadBalancingV2["DeleteRule"] = "elasticloadbalancing:DeleteRule";
    ElasticLoadBalancingV2["DeleteTargetGroup"] = "elasticloadbalancing:DeleteTargetGroup";
    ElasticLoadBalancingV2["DeregisterTargets"] = "elasticloadbalancing:DeregisterTargets";
    ElasticLoadBalancingV2["DescribeListeners"] = "elasticloadbalancing:DescribeListeners";
    ElasticLoadBalancingV2["DescribeLoadBalancerAttributes"] = "elasticloadbalancing:DescribeLoadBalancerAttributes";
    ElasticLoadBalancingV2["DescribeLoadBalancers"] = "elasticloadbalancing:DescribeLoadBalancers";
    ElasticLoadBalancingV2["DescribeRules"] = "elasticloadbalancing:DescribeRules";
    ElasticLoadBalancingV2["DescribeSSLPolicies"] = "elasticloadbalancing:DescribeSSLPolicies";
    ElasticLoadBalancingV2["DescribeTags"] = "elasticloadbalancing:DescribeTags";
    ElasticLoadBalancingV2["DescribeTargetGroupAttributes"] = "elasticloadbalancing:DescribeTargetGroupAttributes";
    ElasticLoadBalancingV2["DescribeTargetGroups"] = "elasticloadbalancing:DescribeTargetGroups";
    ElasticLoadBalancingV2["DescribeTargetHealth"] = "elasticloadbalancing:DescribeTargetHealth";
    ElasticLoadBalancingV2["ModifyListener"] = "elasticloadbalancing:ModifyListener";
    ElasticLoadBalancingV2["ModifyLoadBalancerAttributes"] = "elasticloadbalancing:ModifyLoadBalancerAttributes";
    ElasticLoadBalancingV2["ModifyRule"] = "elasticloadbalancing:ModifyRule";
    ElasticLoadBalancingV2["ModifyTargetGroup"] = "elasticloadbalancing:ModifyTargetGroup";
    ElasticLoadBalancingV2["ModifyTargetGroupAttributes"] = "elasticloadbalancing:ModifyTargetGroupAttributes";
    ElasticLoadBalancingV2["RegisterTargets"] = "elasticloadbalancing:RegisterTargets";
    ElasticLoadBalancingV2["RemoveTags"] = "elasticloadbalancing:RemoveTags";
    ElasticLoadBalancingV2["SetIpAddressType"] = "elasticloadbalancing:SetIpAddressType";
    ElasticLoadBalancingV2["SetRulePriorities"] = "elasticloadbalancing:SetRulePriorities";
    ElasticLoadBalancingV2["SetSecurityGroups"] = "elasticloadbalancing:SetSecurityGroups";
    ElasticLoadBalancingV2["SetSubnets"] = "elasticloadbalancing:SetSubnets";
})(ElasticLoadBalancingV2 = exports.ElasticLoadBalancingV2 || (exports.ElasticLoadBalancingV2 = {}));
/** Actions for Identity And Access Management
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_identityandaccessmanagement.html
  */
var IAM;
(function (IAM) {
    IAM["AddClientIDToOpenIDConnectProvider"] = "iam:AddClientIDToOpenIDConnectProvider";
    IAM["AddRoleToInstanceProfile"] = "iam:AddRoleToInstanceProfile";
    IAM["AddUserToGroup"] = "iam:AddUserToGroup";
    IAM["AttachGroupPolicy"] = "iam:AttachGroupPolicy";
    IAM["AttachRolePolicy"] = "iam:AttachRolePolicy";
    IAM["AttachUserPolicy"] = "iam:AttachUserPolicy";
    IAM["ChangePassword"] = "iam:ChangePassword";
    IAM["CreateAccessKey"] = "iam:CreateAccessKey";
    IAM["CreateAccountAlias"] = "iam:CreateAccountAlias";
    IAM["CreateGroup"] = "iam:CreateGroup";
    IAM["CreateInstanceProfile"] = "iam:CreateInstanceProfile";
    IAM["CreateLoginProfile"] = "iam:CreateLoginProfile";
    IAM["CreateOpenIDConnectProvider"] = "iam:CreateOpenIDConnectProvider";
    IAM["CreatePolicy"] = "iam:CreatePolicy";
    IAM["CreatePolicyVersion"] = "iam:CreatePolicyVersion";
    IAM["CreateRole"] = "iam:CreateRole";
    IAM["CreateSAMLProvider"] = "iam:CreateSAMLProvider";
    IAM["CreateServiceLinkedRole"] = "iam:CreateServiceLinkedRole";
    IAM["CreateServiceSpecificCredential"] = "iam:CreateServiceSpecificCredential";
    IAM["CreateUser"] = "iam:CreateUser";
    IAM["CreateVirtualMFADevice"] = "iam:CreateVirtualMFADevice";
    IAM["DeactivateMFADevice"] = "iam:DeactivateMFADevice";
    IAM["DeleteAccessKey"] = "iam:DeleteAccessKey";
    IAM["DeleteAccountAlias"] = "iam:DeleteAccountAlias";
    IAM["DeleteAccountPasswordPolicy"] = "iam:DeleteAccountPasswordPolicy";
    IAM["DeleteGroup"] = "iam:DeleteGroup";
    IAM["DeleteGroupPolicy"] = "iam:DeleteGroupPolicy";
    IAM["DeleteInstanceProfile"] = "iam:DeleteInstanceProfile";
    IAM["DeleteLoginProfile"] = "iam:DeleteLoginProfile";
    IAM["DeleteOpenIDConnectProvider"] = "iam:DeleteOpenIDConnectProvider";
    IAM["DeletePolicy"] = "iam:DeletePolicy";
    IAM["DeletePolicyVersion"] = "iam:DeletePolicyVersion";
    IAM["DeleteRole"] = "iam:DeleteRole";
    IAM["DeleteRolePolicy"] = "iam:DeleteRolePolicy";
    IAM["DeleteSAMLProvider"] = "iam:DeleteSAMLProvider";
    IAM["DeleteSSHPublicKey"] = "iam:DeleteSSHPublicKey";
    IAM["DeleteServerCertificate"] = "iam:DeleteServerCertificate";
    IAM["DeleteServiceLinkedRole"] = "iam:DeleteServiceLinkedRole";
    IAM["DeleteServiceSpecificCredential"] = "iam:DeleteServiceSpecificCredential";
    IAM["DeleteSigningCertificate"] = "iam:DeleteSigningCertificate";
    IAM["DeleteUser"] = "iam:DeleteUser";
    IAM["DeleteUserPolicy"] = "iam:DeleteUserPolicy";
    IAM["DeleteVirtualMFADevice"] = "iam:DeleteVirtualMFADevice";
    IAM["DetachGroupPolicy"] = "iam:DetachGroupPolicy";
    IAM["DetachRolePolicy"] = "iam:DetachRolePolicy";
    IAM["DetachUserPolicy"] = "iam:DetachUserPolicy";
    IAM["EnableMFADevice"] = "iam:EnableMFADevice";
    IAM["GenerateCredentialReport"] = "iam:GenerateCredentialReport";
    IAM["GenerateServiceLastAccessedDetails"] = "iam:GenerateServiceLastAccessedDetails";
    IAM["GetAccessKeyLastUsed"] = "iam:GetAccessKeyLastUsed";
    IAM["GetAccountAuthorizationDetails"] = "iam:GetAccountAuthorizationDetails";
    IAM["GetAccountPasswordPolicy"] = "iam:GetAccountPasswordPolicy";
    IAM["GetAccountSummary"] = "iam:GetAccountSummary";
    IAM["GetContextKeysForCustomPolicy"] = "iam:GetContextKeysForCustomPolicy";
    IAM["GetContextKeysForPrincipalPolicy"] = "iam:GetContextKeysForPrincipalPolicy";
    IAM["GetCredentialReport"] = "iam:GetCredentialReport";
    IAM["GetGroup"] = "iam:GetGroup";
    IAM["GetGroupPolicy"] = "iam:GetGroupPolicy";
    IAM["GetInstanceProfile"] = "iam:GetInstanceProfile";
    IAM["GetLoginProfile"] = "iam:GetLoginProfile";
    IAM["GetOpenIDConnectProvider"] = "iam:GetOpenIDConnectProvider";
    IAM["GetPolicy"] = "iam:GetPolicy";
    IAM["GetPolicyVersion"] = "iam:GetPolicyVersion";
    IAM["GetRole"] = "iam:GetRole";
    IAM["GetRolePolicy"] = "iam:GetRolePolicy";
    IAM["GetSAMLProvider"] = "iam:GetSAMLProvider";
    IAM["GetSSHPublicKey"] = "iam:GetSSHPublicKey";
    IAM["GetServerCertificate"] = "iam:GetServerCertificate";
    IAM["GetServiceLastAccessedDetails"] = "iam:GetServiceLastAccessedDetails";
    IAM["GetServiceLastAccessedDetailsWithEntities"] = "iam:GetServiceLastAccessedDetailsWithEntities";
    IAM["GetServiceLinkedRoleDeletionStatus"] = "iam:GetServiceLinkedRoleDeletionStatus";
    IAM["GetUser"] = "iam:GetUser";
    IAM["GetUserPolicy"] = "iam:GetUserPolicy";
    IAM["ListAccessKeys"] = "iam:ListAccessKeys";
    IAM["ListAccountAliases"] = "iam:ListAccountAliases";
    IAM["ListAttachedGroupPolicies"] = "iam:ListAttachedGroupPolicies";
    IAM["ListAttachedRolePolicies"] = "iam:ListAttachedRolePolicies";
    IAM["ListAttachedUserPolicies"] = "iam:ListAttachedUserPolicies";
    IAM["ListEntitiesForPolicy"] = "iam:ListEntitiesForPolicy";
    IAM["ListGroupPolicies"] = "iam:ListGroupPolicies";
    IAM["ListGroups"] = "iam:ListGroups";
    IAM["ListGroupsForUser"] = "iam:ListGroupsForUser";
    IAM["ListInstanceProfiles"] = "iam:ListInstanceProfiles";
    IAM["ListInstanceProfilesForRole"] = "iam:ListInstanceProfilesForRole";
    IAM["ListMFADevices"] = "iam:ListMFADevices";
    IAM["ListOpenIDConnectProviders"] = "iam:ListOpenIDConnectProviders";
    IAM["ListPolicies"] = "iam:ListPolicies";
    IAM["ListPoliciesGrantingServiceAccess"] = "iam:ListPoliciesGrantingServiceAccess";
    IAM["ListPolicyVersions"] = "iam:ListPolicyVersions";
    IAM["ListRolePolicies"] = "iam:ListRolePolicies";
    IAM["ListRoles"] = "iam:ListRoles";
    IAM["ListSAMLProviders"] = "iam:ListSAMLProviders";
    IAM["ListSSHPublicKeys"] = "iam:ListSSHPublicKeys";
    IAM["ListServerCertificates"] = "iam:ListServerCertificates";
    IAM["ListServiceSpecificCredentials"] = "iam:ListServiceSpecificCredentials";
    IAM["ListSigningCertificates"] = "iam:ListSigningCertificates";
    IAM["ListUserPolicies"] = "iam:ListUserPolicies";
    IAM["ListUsers"] = "iam:ListUsers";
    IAM["ListVirtualMFADevices"] = "iam:ListVirtualMFADevices";
    IAM["PassRole"] = "iam:PassRole";
    IAM["PutGroupPolicy"] = "iam:PutGroupPolicy";
    IAM["PutRolePolicy"] = "iam:PutRolePolicy";
    IAM["PutUserPolicy"] = "iam:PutUserPolicy";
    IAM["RemoveClientIDFromOpenIDConnectProvider"] = "iam:RemoveClientIDFromOpenIDConnectProvider";
    IAM["RemoveRoleFromInstanceProfile"] = "iam:RemoveRoleFromInstanceProfile";
    IAM["RemoveUserFromGroup"] = "iam:RemoveUserFromGroup";
    IAM["ResetServiceSpecificCredential"] = "iam:ResetServiceSpecificCredential";
    IAM["ResyncMFADevice"] = "iam:ResyncMFADevice";
    IAM["SetDefaultPolicyVersion"] = "iam:SetDefaultPolicyVersion";
    IAM["SimulateCustomPolicy"] = "iam:SimulateCustomPolicy";
    IAM["SimulatePrincipalPolicy"] = "iam:SimulatePrincipalPolicy";
    IAM["UpdateAccessKey"] = "iam:UpdateAccessKey";
    IAM["UpdateAccountPasswordPolicy"] = "iam:UpdateAccountPasswordPolicy";
    IAM["UpdateAssumeRolePolicy"] = "iam:UpdateAssumeRolePolicy";
    IAM["UpdateGroup"] = "iam:UpdateGroup";
    IAM["UpdateLoginProfile"] = "iam:UpdateLoginProfile";
    IAM["UpdateOpenIDConnectProviderThumbprint"] = "iam:UpdateOpenIDConnectProviderThumbprint";
    IAM["UpdateRoleDescription"] = "iam:UpdateRoleDescription";
    IAM["UpdateSAMLProvider"] = "iam:UpdateSAMLProvider";
    IAM["UpdateSSHPublicKey"] = "iam:UpdateSSHPublicKey";
    IAM["UpdateServerCertificate"] = "iam:UpdateServerCertificate";
    IAM["UpdateServiceSpecificCredential"] = "iam:UpdateServiceSpecificCredential";
    IAM["UpdateSigningCertificate"] = "iam:UpdateSigningCertificate";
    IAM["UpdateUser"] = "iam:UpdateUser";
    IAM["UploadSSHPublicKey"] = "iam:UploadSSHPublicKey";
    IAM["UploadServerCertificate"] = "iam:UploadServerCertificate";
    IAM["UploadSigningCertificate"] = "iam:UploadSigningCertificate";
})(IAM = exports.IAM || (exports.IAM = {}));
/** Actions for Manage Amazon API Gateway
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_manageamazonapigateway.html
  */
var APIGateway;
(function (APIGateway) {
    APIGateway["DELETE"] = "apigateway:DELETE";
    APIGateway["GET"] = "apigateway:GET";
    APIGateway["HEAD"] = "apigateway:HEAD";
    APIGateway["OPTIONS"] = "apigateway:OPTIONS";
    APIGateway["PATCH"] = "apigateway:PATCH";
    APIGateway["POST"] = "apigateway:POST";
    APIGateway["PUT"] = "apigateway:PUT";
})(APIGateway = exports.APIGateway || (exports.APIGateway = {}));
/** Actions for Single Sign-On
  * See: https://docs.aws.amazon.com/IAM/latest/UserGuide/list_singlesignon.html
  */
var SSO;
(function (SSO) {
    SSO["AssociateDirectory"] = "sso:AssociateDirectory";
    SSO["AssociateProfile"] = "sso:AssociateProfile";
    SSO["CreateApplicationInstance"] = "sso:CreateApplicationInstance";
    SSO["CreateApplicationInstanceCertificate"] = "sso:CreateApplicationInstanceCertificate";
    SSO["CreatePermissionSet"] = "sso:CreatePermissionSet";
    SSO["CreateProfile"] = "sso:CreateProfile";
    SSO["CreateTrust"] = "sso:CreateTrust";
    SSO["DeleteApplicationInstance"] = "sso:DeleteApplicationInstance";
    SSO["DeleteApplicationInstanceCertificate"] = "sso:DeleteApplicationInstanceCertificate";
    SSO["DeletePermissionSet"] = "sso:DeletePermissionSet";
    SSO["DeletePermissionsPolicy"] = "sso:DeletePermissionsPolicy";
    SSO["DeleteProfile"] = "sso:DeleteProfile";
    SSO["DescribePermissionsPolicies"] = "sso:DescribePermissionsPolicies";
    SSO["DisassociateDirectory"] = "sso:DisassociateDirectory";
    SSO["DisassociateProfile"] = "sso:DisassociateProfile";
    SSO["GetApplicationInstance"] = "sso:GetApplicationInstance";
    SSO["GetApplicationTemplate"] = "sso:GetApplicationTemplate";
    SSO["GetPermissionSet"] = "sso:GetPermissionSet";
    SSO["GetProfile"] = "sso:GetProfile";
    SSO["GetSSOStatus"] = "sso:GetSSOStatus";
    SSO["GetTrust"] = "sso:GetTrust";
    SSO["ImportApplicationInstanceServiceProviderMetadata"] = "sso:ImportApplicationInstanceServiceProviderMetadata";
    SSO["ListApplicationInstanceCertificates"] = "sso:ListApplicationInstanceCertificates";
    SSO["ListApplicationInstances"] = "sso:ListApplicationInstances";
    SSO["ListApplicationTemplates"] = "sso:ListApplicationTemplates";
    SSO["ListDirectoryAssociations"] = "sso:ListDirectoryAssociations";
    SSO["ListPermissionSets"] = "sso:ListPermissionSets";
    SSO["ListProfileAssociations"] = "sso:ListProfileAssociations";
    SSO["ListProfiles"] = "sso:ListProfiles";
    SSO["PutPermissionsPolicy"] = "sso:PutPermissionsPolicy";
    SSO["StartSSO"] = "sso:StartSSO";
    SSO["UpdateApplicationInstanceActiveCertificate"] = "sso:UpdateApplicationInstanceActiveCertificate";
    SSO["UpdateApplicationInstanceDisplayData"] = "sso:UpdateApplicationInstanceDisplayData";
    SSO["UpdateApplicationInstanceResponseConfiguration"] = "sso:UpdateApplicationInstanceResponseConfiguration";
    SSO["UpdateApplicationInstanceResponseSchemaConfiguration"] = "sso:UpdateApplicationInstanceResponseSchemaConfiguration";
    SSO["UpdateApplicationInstanceSecurityConfiguration"] = "sso:UpdateApplicationInstanceSecurityConfiguration";
    SSO["UpdateApplicationInstanceServiceProviderConfiguration"] = "sso:UpdateApplicationInstanceServiceProviderConfiguration";
    SSO["UpdateApplicationInstanceStatus"] = "sso:UpdateApplicationInstanceStatus";
    SSO["UpdateDirectoryAssociation"] = "sso:UpdateDirectoryAssociation";
    SSO["UpdateProfile"] = "sso:UpdateProfile";
    SSO["UpdateTrust"] = "sso:UpdateTrust";
})(SSO = exports.SSO || (exports.SSO = {}));
