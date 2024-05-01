import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BatchIssuance, BatchIssuanceAmino, BatchIssuanceSDKType, OriginTx, OriginTxAmino, OriginTxSDKType, Credits, CreditsAmino, CreditsSDKType } from "./types";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { CreditType, CreditTypeAmino, CreditTypeSDKType } from "./state";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/**
 * MsgAddCreditType is the Msg/AddCreditType request type.
 * 
 * Since Revision 2
 */
export interface MsgAddCreditType {
  /** authority is the address of the governance account. */
  authority: string;
  /** credit_type defines a credit type to add to the credit types parameter. */
  creditType?: CreditType;
}
export interface MsgAddCreditTypeProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgAddCreditType";
  value: Uint8Array;
}
/**
 * MsgAddCreditType is the Msg/AddCreditType request type.
 * 
 * Since Revision 2
 */
export interface MsgAddCreditTypeAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** credit_type defines a credit type to add to the credit types parameter. */
  credit_type?: CreditTypeAmino;
}
export interface MsgAddCreditTypeAminoMsg {
  type: "/regen.ecocredit.v1.MsgAddCreditType";
  value: MsgAddCreditTypeAmino;
}
/**
 * MsgAddCreditType is the Msg/AddCreditType request type.
 * 
 * Since Revision 2
 */
export interface MsgAddCreditTypeSDKType {
  authority: string;
  credit_type?: CreditTypeSDKType;
}
/**
 * MsgAddCreditTypeResponse is the Msg/AddCreditType response type.
 * 
 * Since Revision 2
 */
export interface MsgAddCreditTypeResponse {}
export interface MsgAddCreditTypeResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgAddCreditTypeResponse";
  value: Uint8Array;
}
/**
 * MsgAddCreditTypeResponse is the Msg/AddCreditType response type.
 * 
 * Since Revision 2
 */
export interface MsgAddCreditTypeResponseAmino {}
export interface MsgAddCreditTypeResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgAddCreditTypeResponse";
  value: MsgAddCreditTypeResponseAmino;
}
/**
 * MsgAddCreditTypeResponse is the Msg/AddCreditType response type.
 * 
 * Since Revision 2
 */
export interface MsgAddCreditTypeResponseSDKType {}
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClass {
  /**
   * admin is the address of the account creating the credit class that will
   * become the admin of the credit class upon creation. The admin will have
   * permissions within the credit class to update the credit class including
   * the list of approved issuers. If Params.allowlist_enabled is set to true,
   * this address must be included in Params.allowed_class_creators.
   */
  admin: string;
  /**
   * issuers are the addresses of the accounts that will have permissions within
   * the credit class to create projects and issue credits.
   */
  issuers: string[];
  /**
   * metadata is any arbitrary string with a maximum length of 256 characters
   * that includes or references metadata to attach to the credit class.
   */
  metadata: string;
  /**
   * credit_type_abbrev is the abbreviation of the credit type under which the
   * credit class will be created (e.g. "C", "BIO").
   */
  creditTypeAbbrev: string;
  /**
   * fee is the credit class creation fee. An equal fee is required if the class
   * creation fee parameter is set. The provided fee can be greater than the
   * parameter, but only the amount in the parameter will be charged.
   */
  fee?: Coin;
}
export interface MsgCreateClassProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgCreateClass";
  value: Uint8Array;
}
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClassAmino {
  /**
   * admin is the address of the account creating the credit class that will
   * become the admin of the credit class upon creation. The admin will have
   * permissions within the credit class to update the credit class including
   * the list of approved issuers. If Params.allowlist_enabled is set to true,
   * this address must be included in Params.allowed_class_creators.
   */
  admin?: string;
  /**
   * issuers are the addresses of the accounts that will have permissions within
   * the credit class to create projects and issue credits.
   */
  issuers?: string[];
  /**
   * metadata is any arbitrary string with a maximum length of 256 characters
   * that includes or references metadata to attach to the credit class.
   */
  metadata?: string;
  /**
   * credit_type_abbrev is the abbreviation of the credit type under which the
   * credit class will be created (e.g. "C", "BIO").
   */
  credit_type_abbrev?: string;
  /**
   * fee is the credit class creation fee. An equal fee is required if the class
   * creation fee parameter is set. The provided fee can be greater than the
   * parameter, but only the amount in the parameter will be charged.
   */
  fee?: CoinAmino;
}
export interface MsgCreateClassAminoMsg {
  type: "/regen.ecocredit.v1.MsgCreateClass";
  value: MsgCreateClassAmino;
}
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClassSDKType {
  admin: string;
  issuers: string[];
  metadata: string;
  credit_type_abbrev: string;
  fee?: CoinSDKType;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponse {
  /** class_id is the unique identifier of the credit class. */
  classId: string;
}
export interface MsgCreateClassResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgCreateClassResponse";
  value: Uint8Array;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponseAmino {
  /** class_id is the unique identifier of the credit class. */
  class_id?: string;
}
export interface MsgCreateClassResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgCreateClassResponse";
  value: MsgCreateClassResponseAmino;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponseSDKType {
  class_id: string;
}
/** MsgCreateProjectResponse is the Msg/CreateProject request type. */
export interface MsgCreateProject {
  /**
   * admin is the address of the account creating the project that will become
   * the admin of the project upon creation. The creator of the project must be
   * an approved issuer within the credit class under which the project is being
   * created. The admin will have permissions to update the project including
   * the ability to reassign the admin role to another account.
   */
  admin: string;
  /**
   * class_id is the unique identifier of the credit class under which the
   * project will be created.
   */
  classId: string;
  /**
   * metadata is any arbitrary string with a maximum length of 256 characters
   * that includes or references metadata to attach to the project.
   */
  metadata: string;
  /**
   * jurisdiction is the jurisdiction of the project. A jurisdiction has with
   * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
   * The country-code must be 2 alphabetic characters, the sub-national-code
   * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
   * alphanumeric characters. Only the country-code is required, while the
   * sub-national-code and postal-code are optional and can be added for
   * increased precision.
   */
  jurisdiction: string;
  /**
   * reference_id is any arbitrary string used to reference the project with a
   * maximum length of 32 characters.
   */
  referenceId: string;
}
export interface MsgCreateProjectProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgCreateProject";
  value: Uint8Array;
}
/** MsgCreateProjectResponse is the Msg/CreateProject request type. */
export interface MsgCreateProjectAmino {
  /**
   * admin is the address of the account creating the project that will become
   * the admin of the project upon creation. The creator of the project must be
   * an approved issuer within the credit class under which the project is being
   * created. The admin will have permissions to update the project including
   * the ability to reassign the admin role to another account.
   */
  admin?: string;
  /**
   * class_id is the unique identifier of the credit class under which the
   * project will be created.
   */
  class_id?: string;
  /**
   * metadata is any arbitrary string with a maximum length of 256 characters
   * that includes or references metadata to attach to the project.
   */
  metadata?: string;
  /**
   * jurisdiction is the jurisdiction of the project. A jurisdiction has with
   * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
   * The country-code must be 2 alphabetic characters, the sub-national-code
   * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
   * alphanumeric characters. Only the country-code is required, while the
   * sub-national-code and postal-code are optional and can be added for
   * increased precision.
   */
  jurisdiction?: string;
  /**
   * reference_id is any arbitrary string used to reference the project with a
   * maximum length of 32 characters.
   */
  reference_id?: string;
}
export interface MsgCreateProjectAminoMsg {
  type: "/regen.ecocredit.v1.MsgCreateProject";
  value: MsgCreateProjectAmino;
}
/** MsgCreateProjectResponse is the Msg/CreateProject request type. */
export interface MsgCreateProjectSDKType {
  admin: string;
  class_id: string;
  metadata: string;
  jurisdiction: string;
  reference_id: string;
}
/** MsgCreateProjectResponse is the Msg/CreateProject response type. */
export interface MsgCreateProjectResponse {
  /** project_id is the unique identifier of the project. */
  projectId: string;
}
export interface MsgCreateProjectResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgCreateProjectResponse";
  value: Uint8Array;
}
/** MsgCreateProjectResponse is the Msg/CreateProject response type. */
export interface MsgCreateProjectResponseAmino {
  /** project_id is the unique identifier of the project. */
  project_id?: string;
}
export interface MsgCreateProjectResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgCreateProjectResponse";
  value: MsgCreateProjectResponseAmino;
}
/** MsgCreateProjectResponse is the Msg/CreateProject response type. */
export interface MsgCreateProjectResponseSDKType {
  project_id: string;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatch {
  /**
   * issuer is the address of the account issuing the credits and must be an
   * approved issuer within the credit class of the project.
   */
  issuer: string;
  /**
   * project_id is the unique identifier of the project under which the credit
   * batch will be created.
   */
  projectId: string;
  /**
   * issuance specifies the amount of tradable and retired credits that will be
   * issued to each recipient and the jurisdiction in which the credits will be
   * retired if credits are to be retired upon receipt.
   */
  issuance: BatchIssuance[];
  /**
   * metadata is any arbitrary string with a maximum length of 256 characters
   * that includes or references metadata to attach to the credit batch.
   */
  metadata: string;
  /**
   * start_date is the beginning of the period during which this credit batch
   * was quantified and verified.
   */
  startDate?: Timestamp;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */
  endDate?: Timestamp;
  /**
   * open determines whether or not the credits can be dynamically minted to the
   * credit batch following the creation of the credit batch. This field should
   * only be set to true when bridging credits from another chain or registry as
   * a result of a bridge operation and is not intended for native issuance.
   */
  open: boolean;
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the creation of the credit batch. This field can be ignored when natively
   * issuing credits and should only be set when bridging assets from another
   * chain or registry as a result of a bridge operation.
   */
  originTx?: OriginTx;
}
export interface MsgCreateBatchProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgCreateBatch";
  value: Uint8Array;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatchAmino {
  /**
   * issuer is the address of the account issuing the credits and must be an
   * approved issuer within the credit class of the project.
   */
  issuer?: string;
  /**
   * project_id is the unique identifier of the project under which the credit
   * batch will be created.
   */
  project_id?: string;
  /**
   * issuance specifies the amount of tradable and retired credits that will be
   * issued to each recipient and the jurisdiction in which the credits will be
   * retired if credits are to be retired upon receipt.
   */
  issuance?: BatchIssuanceAmino[];
  /**
   * metadata is any arbitrary string with a maximum length of 256 characters
   * that includes or references metadata to attach to the credit batch.
   */
  metadata?: string;
  /**
   * start_date is the beginning of the period during which this credit batch
   * was quantified and verified.
   */
  start_date?: string;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */
  end_date?: string;
  /**
   * open determines whether or not the credits can be dynamically minted to the
   * credit batch following the creation of the credit batch. This field should
   * only be set to true when bridging credits from another chain or registry as
   * a result of a bridge operation and is not intended for native issuance.
   */
  open?: boolean;
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the creation of the credit batch. This field can be ignored when natively
   * issuing credits and should only be set when bridging assets from another
   * chain or registry as a result of a bridge operation.
   */
  origin_tx?: OriginTxAmino;
}
export interface MsgCreateBatchAminoMsg {
  type: "/regen.ecocredit.v1.MsgCreateBatch";
  value: MsgCreateBatchAmino;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatchSDKType {
  issuer: string;
  project_id: string;
  issuance: BatchIssuanceSDKType[];
  metadata: string;
  start_date?: TimestampSDKType;
  end_date?: TimestampSDKType;
  open: boolean;
  origin_tx?: OriginTxSDKType;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponse {
  /** batch_denom is the unique identifier of the credit batch. */
  batchDenom: string;
}
export interface MsgCreateBatchResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgCreateBatchResponse";
  value: Uint8Array;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponseAmino {
  /** batch_denom is the unique identifier of the credit batch. */
  batch_denom?: string;
}
export interface MsgCreateBatchResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgCreateBatchResponse";
  value: MsgCreateBatchResponseAmino;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponseSDKType {
  batch_denom: string;
}
/** MsgMintBatchCredits is the Msg/MintBatchCredits request type. */
export interface MsgMintBatchCredits {
  /**
   * issuer is the address of the account minting the credits and must be the
   * same issuer who created the credit batch.
   */
  issuer: string;
  /** batch_denom is the unique identifier of the credit batch. */
  batchDenom: string;
  /**
   * issuance specifies the amount of tradable and retired credits that will be
   * issued to each recipient and the jurisdiction in which the credits will be
   * retired if credits are to be retired upon receipt.
   */
  issuance: BatchIssuance[];
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the minting of credits.
   */
  originTx?: OriginTx;
}
export interface MsgMintBatchCreditsProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits";
  value: Uint8Array;
}
/** MsgMintBatchCredits is the Msg/MintBatchCredits request type. */
export interface MsgMintBatchCreditsAmino {
  /**
   * issuer is the address of the account minting the credits and must be the
   * same issuer who created the credit batch.
   */
  issuer?: string;
  /** batch_denom is the unique identifier of the credit batch. */
  batch_denom?: string;
  /**
   * issuance specifies the amount of tradable and retired credits that will be
   * issued to each recipient and the jurisdiction in which the credits will be
   * retired if credits are to be retired upon receipt.
   */
  issuance?: BatchIssuanceAmino[];
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the minting of credits.
   */
  origin_tx?: OriginTxAmino;
}
export interface MsgMintBatchCreditsAminoMsg {
  type: "/regen.ecocredit.v1.MsgMintBatchCredits";
  value: MsgMintBatchCreditsAmino;
}
/** MsgMintBatchCredits is the Msg/MintBatchCredits request type. */
export interface MsgMintBatchCreditsSDKType {
  issuer: string;
  batch_denom: string;
  issuance: BatchIssuanceSDKType[];
  origin_tx?: OriginTxSDKType;
}
/** MsgMintBatchCreditsResponse is the Msg/MintBatchCredits response type. */
export interface MsgMintBatchCreditsResponse {}
export interface MsgMintBatchCreditsResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse";
  value: Uint8Array;
}
/** MsgMintBatchCreditsResponse is the Msg/MintBatchCredits response type. */
export interface MsgMintBatchCreditsResponseAmino {}
export interface MsgMintBatchCreditsResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse";
  value: MsgMintBatchCreditsResponseAmino;
}
/** MsgMintBatchCreditsResponse is the Msg/MintBatchCredits response type. */
export interface MsgMintBatchCreditsResponseSDKType {}
/** MsgSealBatch is the Msg/MintBatchCredits request type. */
export interface MsgSealBatch {
  /**
   * issuer is the address of the account that created the credit batch and the
   * only account with permissions to seal the credit batch.
   */
  issuer: string;
  /** batch_denom is the unique identifier of the credit batch. */
  batchDenom: string;
}
export interface MsgSealBatchProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgSealBatch";
  value: Uint8Array;
}
/** MsgSealBatch is the Msg/MintBatchCredits request type. */
export interface MsgSealBatchAmino {
  /**
   * issuer is the address of the account that created the credit batch and the
   * only account with permissions to seal the credit batch.
   */
  issuer?: string;
  /** batch_denom is the unique identifier of the credit batch. */
  batch_denom?: string;
}
export interface MsgSealBatchAminoMsg {
  type: "/regen.ecocredit.v1.MsgSealBatch";
  value: MsgSealBatchAmino;
}
/** MsgSealBatch is the Msg/MintBatchCredits request type. */
export interface MsgSealBatchSDKType {
  issuer: string;
  batch_denom: string;
}
/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponse {}
export interface MsgSealBatchResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgSealBatchResponse";
  value: Uint8Array;
}
/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponseAmino {}
export interface MsgSealBatchResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgSealBatchResponse";
  value: MsgSealBatchResponseAmino;
}
/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponseSDKType {}
/** MsgSend is the Msg/Send request type. */
export interface MsgSend {
  /** sender is the address of the account sending credits. */
  sender: string;
  /** recipient is the address of the account receiving credits. */
  recipient: string;
  /** credits are the credits being sent to the recipient. */
  credits: MsgSend_SendCredits[];
}
export interface MsgSendProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgSend";
  value: Uint8Array;
}
/** MsgSend is the Msg/Send request type. */
export interface MsgSendAmino {
  /** sender is the address of the account sending credits. */
  sender?: string;
  /** recipient is the address of the account receiving credits. */
  recipient?: string;
  /** credits are the credits being sent to the recipient. */
  credits?: MsgSend_SendCreditsAmino[];
}
export interface MsgSendAminoMsg {
  type: "/regen.ecocredit.v1.MsgSend";
  value: MsgSendAmino;
}
/** MsgSend is the Msg/Send request type. */
export interface MsgSendSDKType {
  sender: string;
  recipient: string;
  credits: MsgSend_SendCreditsSDKType[];
}
/**
 * SendCredits specifies the amount of tradable and retired credits of a
 * credit batch that will be sent to the recipient and the jurisdiction in
 * which the credits will be retired upon receipt.
 */
export interface MsgSend_SendCredits {
  /** batch_denom is the unique identifier of the credit batch. */
  batchDenom: string;
  /**
   * tradable_amount is the amount of credits in this transfer that can be
   * traded by the recipient. The number of decimal places must be less than
   * or equal to the credit type precision.
   */
  tradableAmount: string;
  /**
   * retired_amount is the amount of credits in this transfer that are retired
   * upon receipt. The number of decimal places must be less than or equal to
   * the credit type precision.
   */
  retiredAmount: string;
  /**
   * retirement_jurisdiction is the jurisdiction of the recipient and is only
   * required if retired_amount is positive. A jurisdiction has the format:
   * <country-code>[-<sub-national-code>[ <postal-code>]]
   * The country-code and sub-national-code must conform to ISO 3166-2 and the
   * postal-code can be up to 64 alphanumeric characters. Only the
   * country-code is required, while the sub-national-code and postal-code are
   * optional and can be added for increased precision.
   */
  retirementJurisdiction: string;
  /**
   * retirement_reason is any arbitrary string that specifies the reason for
   * retiring credits. This field is only required if retired_amount is
   * positive.
   * 
   * Since Revision 2
   */
  retirementReason: string;
}
export interface MsgSend_SendCreditsProtoMsg {
  typeUrl: "/regen.ecocredit.v1.SendCredits";
  value: Uint8Array;
}
/**
 * SendCredits specifies the amount of tradable and retired credits of a
 * credit batch that will be sent to the recipient and the jurisdiction in
 * which the credits will be retired upon receipt.
 */
export interface MsgSend_SendCreditsAmino {
  /** batch_denom is the unique identifier of the credit batch. */
  batch_denom?: string;
  /**
   * tradable_amount is the amount of credits in this transfer that can be
   * traded by the recipient. The number of decimal places must be less than
   * or equal to the credit type precision.
   */
  tradable_amount?: string;
  /**
   * retired_amount is the amount of credits in this transfer that are retired
   * upon receipt. The number of decimal places must be less than or equal to
   * the credit type precision.
   */
  retired_amount?: string;
  /**
   * retirement_jurisdiction is the jurisdiction of the recipient and is only
   * required if retired_amount is positive. A jurisdiction has the format:
   * <country-code>[-<sub-national-code>[ <postal-code>]]
   * The country-code and sub-national-code must conform to ISO 3166-2 and the
   * postal-code can be up to 64 alphanumeric characters. Only the
   * country-code is required, while the sub-national-code and postal-code are
   * optional and can be added for increased precision.
   */
  retirement_jurisdiction?: string;
  /**
   * retirement_reason is any arbitrary string that specifies the reason for
   * retiring credits. This field is only required if retired_amount is
   * positive.
   * 
   * Since Revision 2
   */
  retirement_reason?: string;
}
export interface MsgSend_SendCreditsAminoMsg {
  type: "/regen.ecocredit.v1.SendCredits";
  value: MsgSend_SendCreditsAmino;
}
/**
 * SendCredits specifies the amount of tradable and retired credits of a
 * credit batch that will be sent to the recipient and the jurisdiction in
 * which the credits will be retired upon receipt.
 */
export interface MsgSend_SendCreditsSDKType {
  batch_denom: string;
  tradable_amount: string;
  retired_amount: string;
  retirement_jurisdiction: string;
  retirement_reason: string;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponse {}
export interface MsgSendResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgSendResponse";
  value: Uint8Array;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponseAmino {}
export interface MsgSendResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgSendResponse";
  value: MsgSendResponseAmino;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponseSDKType {}
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetire {
  /** owner is the address of the account that owns the credits being retired. */
  owner: string;
  /** credits specifies a credit batch and the number of credits being retired. */
  credits: Credits[];
  /**
   * jurisdiction is the jurisdiction of the credit owner. A jurisdiction has
   * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
   * The country-code must be 2 alphabetic characters, the sub-national-code
   * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
   * alphanumeric characters. Only the country-code is required, while the
   * sub-national-code and postal-code are optional and can be added for
   * increased precision.
   */
  jurisdiction: string;
  /**
   * reason is any arbitrary string that specifies the reason for retiring
   * credits.
   * 
   * Since Revision 2
   */
  reason: string;
}
export interface MsgRetireProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgRetire";
  value: Uint8Array;
}
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetireAmino {
  /** owner is the address of the account that owns the credits being retired. */
  owner?: string;
  /** credits specifies a credit batch and the number of credits being retired. */
  credits?: CreditsAmino[];
  /**
   * jurisdiction is the jurisdiction of the credit owner. A jurisdiction has
   * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
   * The country-code must be 2 alphabetic characters, the sub-national-code
   * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
   * alphanumeric characters. Only the country-code is required, while the
   * sub-national-code and postal-code are optional and can be added for
   * increased precision.
   */
  jurisdiction?: string;
  /**
   * reason is any arbitrary string that specifies the reason for retiring
   * credits.
   * 
   * Since Revision 2
   */
  reason?: string;
}
export interface MsgRetireAminoMsg {
  type: "/regen.ecocredit.v1.MsgRetire";
  value: MsgRetireAmino;
}
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetireSDKType {
  owner: string;
  credits: CreditsSDKType[];
  jurisdiction: string;
  reason: string;
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponse {}
export interface MsgRetireResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgRetireResponse";
  value: Uint8Array;
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponseAmino {}
export interface MsgRetireResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgRetireResponse";
  value: MsgRetireResponseAmino;
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponseSDKType {}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancel {
  /** owner is the address of the account that owns the credits being cancelled. */
  owner: string;
  /** credits specifies a credit batch and the number of credits being cancelled. */
  credits: Credits[];
  /**
   * reason is any arbitrary string that specifies the reason for cancelling
   * credits.
   */
  reason: string;
}
export interface MsgCancelProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgCancel";
  value: Uint8Array;
}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancelAmino {
  /** owner is the address of the account that owns the credits being cancelled. */
  owner?: string;
  /** credits specifies a credit batch and the number of credits being cancelled. */
  credits?: CreditsAmino[];
  /**
   * reason is any arbitrary string that specifies the reason for cancelling
   * credits.
   */
  reason?: string;
}
export interface MsgCancelAminoMsg {
  type: "/regen.ecocredit.v1.MsgCancel";
  value: MsgCancelAmino;
}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancelSDKType {
  owner: string;
  credits: CreditsSDKType[];
  reason: string;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponse {}
export interface MsgCancelResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgCancelResponse";
  value: Uint8Array;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponseAmino {}
export interface MsgCancelResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgCancelResponse";
  value: MsgCancelResponseAmino;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponseSDKType {}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdmin {
  /**
   * admin is the address of the account that is currently the admin of the
   * credit class.
   */
  admin: string;
  /** class_id is the unique identifier of the credit class. */
  classId: string;
  /**
   * new_admin is the address of the account that will become the new admin of
   * the credit class.
   */
  newAdmin: string;
}
export interface MsgUpdateClassAdminProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin";
  value: Uint8Array;
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdminAmino {
  /**
   * admin is the address of the account that is currently the admin of the
   * credit class.
   */
  admin?: string;
  /** class_id is the unique identifier of the credit class. */
  class_id?: string;
  /**
   * new_admin is the address of the account that will become the new admin of
   * the credit class.
   */
  new_admin?: string;
}
export interface MsgUpdateClassAdminAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateClassAdmin";
  value: MsgUpdateClassAdminAmino;
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdminSDKType {
  admin: string;
  class_id: string;
  new_admin: string;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponse {}
export interface MsgUpdateClassAdminResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponseAmino {}
export interface MsgUpdateClassAdminResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse";
  value: MsgUpdateClassAdminResponseAmino;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponseSDKType {}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuers {
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique identifier of the credit class. */
  classId: string;
  /**
   * add_issuers are the addresses of the accounts that will be added to the
   * list of approved credit class issuers.
   */
  addIssuers: string[];
  /**
   * remove_issuers are the addresses of the accounts that will be removed from
   * the list of approved credit class issuers.
   */
  removeIssuers: string[];
}
export interface MsgUpdateClassIssuersProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers";
  value: Uint8Array;
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuersAmino {
  /** admin is the address of the account that is the admin of the credit class. */
  admin?: string;
  /** class_id is the unique identifier of the credit class. */
  class_id?: string;
  /**
   * add_issuers are the addresses of the accounts that will be added to the
   * list of approved credit class issuers.
   */
  add_issuers?: string[];
  /**
   * remove_issuers are the addresses of the accounts that will be removed from
   * the list of approved credit class issuers.
   */
  remove_issuers?: string[];
}
export interface MsgUpdateClassIssuersAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateClassIssuers";
  value: MsgUpdateClassIssuersAmino;
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuersSDKType {
  admin: string;
  class_id: string;
  add_issuers: string[];
  remove_issuers: string[];
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponse {}
export interface MsgUpdateClassIssuersResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse";
  value: Uint8Array;
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponseAmino {}
export interface MsgUpdateClassIssuersResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse";
  value: MsgUpdateClassIssuersResponseAmino;
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponseSDKType {}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadata {
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique identifier of the credit class. */
  classId: string;
  /**
   * new_metadata is new metadata that will replace the existing metadata. It
   * can be any arbitrary string with a maximum length of 256 characters that
   * includes or references the metadata to attach to the credit class.
   */
  newMetadata: string;
}
export interface MsgUpdateClassMetadataProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata";
  value: Uint8Array;
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadataAmino {
  /** admin is the address of the account that is the admin of the credit class. */
  admin?: string;
  /** class_id is the unique identifier of the credit class. */
  class_id?: string;
  /**
   * new_metadata is new metadata that will replace the existing metadata. It
   * can be any arbitrary string with a maximum length of 256 characters that
   * includes or references the metadata to attach to the credit class.
   */
  new_metadata?: string;
}
export interface MsgUpdateClassMetadataAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateClassMetadata";
  value: MsgUpdateClassMetadataAmino;
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadataSDKType {
  admin: string;
  class_id: string;
  new_metadata: string;
}
/** MsgUpdateClassMetadataResponse is the Msg/UpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponse {}
export interface MsgUpdateClassMetadataResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse";
  value: Uint8Array;
}
/** MsgUpdateClassMetadataResponse is the Msg/UpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponseAmino {}
export interface MsgUpdateClassMetadataResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse";
  value: MsgUpdateClassMetadataResponseAmino;
}
/** MsgUpdateClassMetadataResponse is the Msg/UpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponseSDKType {}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin request type. */
export interface MsgUpdateProjectAdmin {
  /**
   * admin is the address of the account that is the currently the admin of the
   * project.
   */
  admin: string;
  /** project_id is the unique identifier of the project. */
  projectId: string;
  /**
   * new_admin is the address of the account that will become the new admin of
   * the project.
   */
  newAdmin: string;
}
export interface MsgUpdateProjectAdminProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin";
  value: Uint8Array;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin request type. */
export interface MsgUpdateProjectAdminAmino {
  /**
   * admin is the address of the account that is the currently the admin of the
   * project.
   */
  admin?: string;
  /** project_id is the unique identifier of the project. */
  project_id?: string;
  /**
   * new_admin is the address of the account that will become the new admin of
   * the project.
   */
  new_admin?: string;
}
export interface MsgUpdateProjectAdminAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateProjectAdmin";
  value: MsgUpdateProjectAdminAmino;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin request type. */
export interface MsgUpdateProjectAdminSDKType {
  admin: string;
  project_id: string;
  new_admin: string;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin response type. */
export interface MsgUpdateProjectAdminResponse {}
export interface MsgUpdateProjectAdminResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin response type. */
export interface MsgUpdateProjectAdminResponseAmino {}
export interface MsgUpdateProjectAdminResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse";
  value: MsgUpdateProjectAdminResponseAmino;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin response type. */
export interface MsgUpdateProjectAdminResponseSDKType {}
/** MsgUpdateProjectMetadata is the Msg/UpdateProjectMetadata request type. */
export interface MsgUpdateProjectMetadata {
  /** admin is the address of the account that is the admin of the project. */
  admin: string;
  /** project_id is the unique identifier of the project. */
  projectId: string;
  /**
   * new_metadata is new metadata that will replace the existing metadata. It
   * can be any arbitrary string with a maximum length of 256 characters that
   * includes or references the metadata to attach to the project.
   */
  newMetadata: string;
}
export interface MsgUpdateProjectMetadataProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata";
  value: Uint8Array;
}
/** MsgUpdateProjectMetadata is the Msg/UpdateProjectMetadata request type. */
export interface MsgUpdateProjectMetadataAmino {
  /** admin is the address of the account that is the admin of the project. */
  admin?: string;
  /** project_id is the unique identifier of the project. */
  project_id?: string;
  /**
   * new_metadata is new metadata that will replace the existing metadata. It
   * can be any arbitrary string with a maximum length of 256 characters that
   * includes or references the metadata to attach to the project.
   */
  new_metadata?: string;
}
export interface MsgUpdateProjectMetadataAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateProjectMetadata";
  value: MsgUpdateProjectMetadataAmino;
}
/** MsgUpdateProjectMetadata is the Msg/UpdateProjectMetadata request type. */
export interface MsgUpdateProjectMetadataSDKType {
  admin: string;
  project_id: string;
  new_metadata: string;
}
/**
 * MsgUpdateProjectMetadataResponse is the Msg/UpdateProjectMetadataResponse
 * response type.
 */
export interface MsgUpdateProjectMetadataResponse {}
export interface MsgUpdateProjectMetadataResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateProjectMetadataResponse is the Msg/UpdateProjectMetadataResponse
 * response type.
 */
export interface MsgUpdateProjectMetadataResponseAmino {}
export interface MsgUpdateProjectMetadataResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse";
  value: MsgUpdateProjectMetadataResponseAmino;
}
/**
 * MsgUpdateProjectMetadataResponse is the Msg/UpdateProjectMetadataResponse
 * response type.
 */
export interface MsgUpdateProjectMetadataResponseSDKType {}
/** MsgBridge is the Msg/Bridge request type. */
export interface MsgBridge {
  /** owner is the address of the account that owns the credits being bridged. */
  owner: string;
  /** target is the name of the target chain or registry. */
  target: string;
  /** recipient is the address of the account receiving the bridged credits. */
  recipient: string;
  /** credits specifies a credit batch and the number of credits being bridged. */
  credits: Credits[];
}
export interface MsgBridgeProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgBridge";
  value: Uint8Array;
}
/** MsgBridge is the Msg/Bridge request type. */
export interface MsgBridgeAmino {
  /** owner is the address of the account that owns the credits being bridged. */
  owner?: string;
  /** target is the name of the target chain or registry. */
  target?: string;
  /** recipient is the address of the account receiving the bridged credits. */
  recipient?: string;
  /** credits specifies a credit batch and the number of credits being bridged. */
  credits?: CreditsAmino[];
}
export interface MsgBridgeAminoMsg {
  type: "/regen.ecocredit.v1.MsgBridge";
  value: MsgBridgeAmino;
}
/** MsgBridge is the Msg/Bridge request type. */
export interface MsgBridgeSDKType {
  owner: string;
  target: string;
  recipient: string;
  credits: CreditsSDKType[];
}
/**
 * MsgUpdateBatchMetadata is the Msg/UpdateBatchMetadata request type.
 * 
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadata {
  /** issuer is the address of the account that is the issuer of the batch. */
  issuer: string;
  /** batch_denom is the unique identifier of the batch. */
  batchDenom: string;
  /**
   * new_metadata is new metadata that will replace the existing metadata. It
   * can be any arbitrary string with a maximum length of 256 characters that
   * includes or references the metadata to attach to the batch.
   */
  newMetadata: string;
}
export interface MsgUpdateBatchMetadataProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadata";
  value: Uint8Array;
}
/**
 * MsgUpdateBatchMetadata is the Msg/UpdateBatchMetadata request type.
 * 
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadataAmino {
  /** issuer is the address of the account that is the issuer of the batch. */
  issuer?: string;
  /** batch_denom is the unique identifier of the batch. */
  batch_denom?: string;
  /**
   * new_metadata is new metadata that will replace the existing metadata. It
   * can be any arbitrary string with a maximum length of 256 characters that
   * includes or references the metadata to attach to the batch.
   */
  new_metadata?: string;
}
export interface MsgUpdateBatchMetadataAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateBatchMetadata";
  value: MsgUpdateBatchMetadataAmino;
}
/**
 * MsgUpdateBatchMetadata is the Msg/UpdateBatchMetadata request type.
 * 
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadataSDKType {
  issuer: string;
  batch_denom: string;
  new_metadata: string;
}
/**
 * MsgUpdateBatchMetadataResponse is the Msg/UpdateBatchMetadataResponse
 * response type.
 * 
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadataResponse {}
export interface MsgUpdateBatchMetadataResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadataResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateBatchMetadataResponse is the Msg/UpdateBatchMetadataResponse
 * response type.
 * 
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadataResponseAmino {}
export interface MsgUpdateBatchMetadataResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateBatchMetadataResponse";
  value: MsgUpdateBatchMetadataResponseAmino;
}
/**
 * MsgUpdateBatchMetadataResponse is the Msg/UpdateBatchMetadataResponse
 * response type.
 * 
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadataResponseSDKType {}
/** MsgBridgeResponse is the Msg/Bridge response type. */
export interface MsgBridgeResponse {}
export interface MsgBridgeResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgBridgeResponse";
  value: Uint8Array;
}
/** MsgBridgeResponse is the Msg/Bridge response type. */
export interface MsgBridgeResponseAmino {}
export interface MsgBridgeResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgBridgeResponse";
  value: MsgBridgeResponseAmino;
}
/** MsgBridgeResponse is the Msg/Bridge response type. */
export interface MsgBridgeResponseSDKType {}
/** MsgBridgeReceive is the Msg/BridgeReceive request type. */
export interface MsgBridgeReceive {
  /** issuer is the account address of the service bridging the credits. */
  issuer: string;
  /**
   * class_id is the unique identifier of the credit class within which the
   * project and credit batch already exist or will be created.
   */
  classId: string;
  /** project defines the project information for the bridged credits. */
  project?: MsgBridgeReceive_Project;
  /** batch defines the credit batch information for the bridged credits. */
  batch?: MsgBridgeReceive_Batch;
  /**
   * origin_tx is a reference to a transaction which caused the transfer from
   * another chain or registry.
   */
  originTx?: OriginTx;
}
export interface MsgBridgeReceiveProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgBridgeReceive";
  value: Uint8Array;
}
/** MsgBridgeReceive is the Msg/BridgeReceive request type. */
export interface MsgBridgeReceiveAmino {
  /** issuer is the account address of the service bridging the credits. */
  issuer?: string;
  /**
   * class_id is the unique identifier of the credit class within which the
   * project and credit batch already exist or will be created.
   */
  class_id?: string;
  /** project defines the project information for the bridged credits. */
  project?: MsgBridgeReceive_ProjectAmino;
  /** batch defines the credit batch information for the bridged credits. */
  batch?: MsgBridgeReceive_BatchAmino;
  /**
   * origin_tx is a reference to a transaction which caused the transfer from
   * another chain or registry.
   */
  origin_tx?: OriginTxAmino;
}
export interface MsgBridgeReceiveAminoMsg {
  type: "/regen.ecocredit.v1.MsgBridgeReceive";
  value: MsgBridgeReceiveAmino;
}
/** MsgBridgeReceive is the Msg/BridgeReceive request type. */
export interface MsgBridgeReceiveSDKType {
  issuer: string;
  class_id: string;
  project?: MsgBridgeReceive_ProjectSDKType;
  batch?: MsgBridgeReceive_BatchSDKType;
  origin_tx?: OriginTxSDKType;
}
/**
 * Batch defines the credit batch information for the bridged credits. This
 * information will be used to create a credit batch or to dynamically mint
 * credits to an existing credit batch.
 */
export interface MsgBridgeReceive_Batch {
  /** recipient is the recipient of the bridged credits. */
  recipient: string;
  /** amount is the amount of credits being bridged. */
  amount: string;
  /**
   * start_date is the beginning of the period during which this credit batch
   * was quantified and verified.
   */
  startDate?: Timestamp;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */
  endDate?: Timestamp;
  /** metadata is the metadata for the credit batch. */
  metadata: string;
}
export interface MsgBridgeReceive_BatchProtoMsg {
  typeUrl: "/regen.ecocredit.v1.Batch";
  value: Uint8Array;
}
/**
 * Batch defines the credit batch information for the bridged credits. This
 * information will be used to create a credit batch or to dynamically mint
 * credits to an existing credit batch.
 */
export interface MsgBridgeReceive_BatchAmino {
  /** recipient is the recipient of the bridged credits. */
  recipient?: string;
  /** amount is the amount of credits being bridged. */
  amount?: string;
  /**
   * start_date is the beginning of the period during which this credit batch
   * was quantified and verified.
   */
  start_date?: string;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */
  end_date?: string;
  /** metadata is the metadata for the credit batch. */
  metadata?: string;
}
export interface MsgBridgeReceive_BatchAminoMsg {
  type: "/regen.ecocredit.v1.Batch";
  value: MsgBridgeReceive_BatchAmino;
}
/**
 * Batch defines the credit batch information for the bridged credits. This
 * information will be used to create a credit batch or to dynamically mint
 * credits to an existing credit batch.
 */
export interface MsgBridgeReceive_BatchSDKType {
  recipient: string;
  amount: string;
  start_date?: TimestampSDKType;
  end_date?: TimestampSDKType;
  metadata: string;
}
/**
 * Project defines the project information for the bridged credits. This
 * information will be used to find an existing project or to create a new
 * project if a project with the same reference id does not already exist.
 */
export interface MsgBridgeReceive_Project {
  /** reference_id is the reference id of the project. */
  referenceId: string;
  /** jurisdiction is the project jurisdiction. */
  jurisdiction: string;
  /** metadata is the metadata for the project. */
  metadata: string;
}
export interface MsgBridgeReceive_ProjectProtoMsg {
  typeUrl: "/regen.ecocredit.v1.Project";
  value: Uint8Array;
}
/**
 * Project defines the project information for the bridged credits. This
 * information will be used to find an existing project or to create a new
 * project if a project with the same reference id does not already exist.
 */
export interface MsgBridgeReceive_ProjectAmino {
  /** reference_id is the reference id of the project. */
  reference_id?: string;
  /** jurisdiction is the project jurisdiction. */
  jurisdiction?: string;
  /** metadata is the metadata for the project. */
  metadata?: string;
}
export interface MsgBridgeReceive_ProjectAminoMsg {
  type: "/regen.ecocredit.v1.Project";
  value: MsgBridgeReceive_ProjectAmino;
}
/**
 * Project defines the project information for the bridged credits. This
 * information will be used to find an existing project or to create a new
 * project if a project with the same reference id does not already exist.
 */
export interface MsgBridgeReceive_ProjectSDKType {
  reference_id: string;
  jurisdiction: string;
  metadata: string;
}
/** MsgBridgeReceiveResponse is the Msg/BridgeReceive response type. */
export interface MsgBridgeReceiveResponse {
  /**
   * batch_denom is the unique identifier of the credit batch either created
   * or within which the credits were dynamically minted.
   */
  batchDenom: string;
  /**
   * project_id is the unique identifier of the project that was either created
   * or the existing project within which the credit batch exists.
   */
  projectId: string;
}
export interface MsgBridgeReceiveResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgBridgeReceiveResponse";
  value: Uint8Array;
}
/** MsgBridgeReceiveResponse is the Msg/BridgeReceive response type. */
export interface MsgBridgeReceiveResponseAmino {
  /**
   * batch_denom is the unique identifier of the credit batch either created
   * or within which the credits were dynamically minted.
   */
  batch_denom?: string;
  /**
   * project_id is the unique identifier of the project that was either created
   * or the existing project within which the credit batch exists.
   */
  project_id?: string;
}
export interface MsgBridgeReceiveResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgBridgeReceiveResponse";
  value: MsgBridgeReceiveResponseAmino;
}
/** MsgBridgeReceiveResponse is the Msg/BridgeReceive response type. */
export interface MsgBridgeReceiveResponseSDKType {
  batch_denom: string;
  project_id: string;
}
/**
 * MsgAddClassCreator is the Msg/AddClassCreator request type.
 * 
 * Since Revision 2
 */
export interface MsgAddClassCreator {
  /** authority is the address of the governance account. */
  authority: string;
  /** creator is the address to add to the class creator list. */
  creator: string;
}
export interface MsgAddClassCreatorProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgAddClassCreator";
  value: Uint8Array;
}
/**
 * MsgAddClassCreator is the Msg/AddClassCreator request type.
 * 
 * Since Revision 2
 */
export interface MsgAddClassCreatorAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** creator is the address to add to the class creator list. */
  creator?: string;
}
export interface MsgAddClassCreatorAminoMsg {
  type: "/regen.ecocredit.v1.MsgAddClassCreator";
  value: MsgAddClassCreatorAmino;
}
/**
 * MsgAddClassCreator is the Msg/AddClassCreator request type.
 * 
 * Since Revision 2
 */
export interface MsgAddClassCreatorSDKType {
  authority: string;
  creator: string;
}
/**
 * MsgAddClassCreatorResponse is the Msg/AddClassCreator response type.
 * 
 * Since Revision 2
 */
export interface MsgAddClassCreatorResponse {}
export interface MsgAddClassCreatorResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgAddClassCreatorResponse";
  value: Uint8Array;
}
/**
 * MsgAddClassCreatorResponse is the Msg/AddClassCreator response type.
 * 
 * Since Revision 2
 */
export interface MsgAddClassCreatorResponseAmino {}
export interface MsgAddClassCreatorResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgAddClassCreatorResponse";
  value: MsgAddClassCreatorResponseAmino;
}
/**
 * MsgAddClassCreatorResponse is the Msg/AddClassCreator response type.
 * 
 * Since Revision 2
 */
export interface MsgAddClassCreatorResponseSDKType {}
/**
 * MsgSetClassCreatorAllowlist is the Msg/SetClassCreatorAllowlist request
 * type.
 * 
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlist {
  /** authority is the address of the governance account. */
  authority: string;
  /** enabled defines the boolean value to set the allowlist on or off. */
  enabled: boolean;
}
export interface MsgSetClassCreatorAllowlistProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist";
  value: Uint8Array;
}
/**
 * MsgSetClassCreatorAllowlist is the Msg/SetClassCreatorAllowlist request
 * type.
 * 
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlistAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** enabled defines the boolean value to set the allowlist on or off. */
  enabled?: boolean;
}
export interface MsgSetClassCreatorAllowlistAminoMsg {
  type: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist";
  value: MsgSetClassCreatorAllowlistAmino;
}
/**
 * MsgSetClassCreatorAllowlist is the Msg/SetClassCreatorAllowlist request
 * type.
 * 
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlistSDKType {
  authority: string;
  enabled: boolean;
}
/**
 * MsgSetClassCreatorAllowlistResponse is the Msg/SetClassCreatorAllowlist
 * response type.
 * 
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlistResponse {}
export interface MsgSetClassCreatorAllowlistResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlistResponse";
  value: Uint8Array;
}
/**
 * MsgSetClassCreatorAllowlistResponse is the Msg/SetClassCreatorAllowlist
 * response type.
 * 
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlistResponseAmino {}
export interface MsgSetClassCreatorAllowlistResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlistResponse";
  value: MsgSetClassCreatorAllowlistResponseAmino;
}
/**
 * MsgSetClassCreatorAllowlistResponse is the Msg/SetClassCreatorAllowlist
 * response type.
 * 
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlistResponseSDKType {}
/**
 * MsgRemoveClassCreator is the Msg/RemoveClassCreator request type.
 * 
 * Since Revision 2
 */
export interface MsgRemoveClassCreator {
  /** authority is the address of the governance account. */
  authority: string;
  /** creator is the address to remove from the class creator list. */
  creator: string;
}
export interface MsgRemoveClassCreatorProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreator";
  value: Uint8Array;
}
/**
 * MsgRemoveClassCreator is the Msg/RemoveClassCreator request type.
 * 
 * Since Revision 2
 */
export interface MsgRemoveClassCreatorAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** creator is the address to remove from the class creator list. */
  creator?: string;
}
export interface MsgRemoveClassCreatorAminoMsg {
  type: "/regen.ecocredit.v1.MsgRemoveClassCreator";
  value: MsgRemoveClassCreatorAmino;
}
/**
 * MsgRemoveClassCreator is the Msg/RemoveClassCreator request type.
 * 
 * Since Revision 2
 */
export interface MsgRemoveClassCreatorSDKType {
  authority: string;
  creator: string;
}
/**
 * MsgRemoveClassCreatorResponse is the Msg/RemoveClasssCreator response type.
 * 
 * Since Revision 2
 */
export interface MsgRemoveClassCreatorResponse {}
export interface MsgRemoveClassCreatorResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreatorResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveClassCreatorResponse is the Msg/RemoveClasssCreator response type.
 * 
 * Since Revision 2
 */
export interface MsgRemoveClassCreatorResponseAmino {}
export interface MsgRemoveClassCreatorResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgRemoveClassCreatorResponse";
  value: MsgRemoveClassCreatorResponseAmino;
}
/**
 * MsgRemoveClassCreatorResponse is the Msg/RemoveClasssCreator response type.
 * 
 * Since Revision 2
 */
export interface MsgRemoveClassCreatorResponseSDKType {}
/**
 * MsgUpdateClassFee is the Msg/UpdateClassFee request type.
 * 
 * Since Revision 2
 */
export interface MsgUpdateClassFee {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * fee is the credit class creation fee. If not set, the credit class creation
   * fee will be removed and no fee will be required to create a credit class.
   */
  fee?: Coin;
}
export interface MsgUpdateClassFeeProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFee";
  value: Uint8Array;
}
/**
 * MsgUpdateClassFee is the Msg/UpdateClassFee request type.
 * 
 * Since Revision 2
 */
export interface MsgUpdateClassFeeAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * fee is the credit class creation fee. If not set, the credit class creation
   * fee will be removed and no fee will be required to create a credit class.
   */
  fee?: CoinAmino;
}
export interface MsgUpdateClassFeeAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateClassFee";
  value: MsgUpdateClassFeeAmino;
}
/**
 * MsgUpdateClassFee is the Msg/UpdateClassFee request type.
 * 
 * Since Revision 2
 */
export interface MsgUpdateClassFeeSDKType {
  authority: string;
  fee?: CoinSDKType;
}
/**
 * MsgUpdateClassFeeResponse is the Msg/UpdateClassFee response type.
 * 
 * Since Revision 2
 */
export interface MsgUpdateClassFeeResponse {}
export interface MsgUpdateClassFeeResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFeeResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateClassFeeResponse is the Msg/UpdateClassFee response type.
 * 
 * Since Revision 2
 */
export interface MsgUpdateClassFeeResponseAmino {}
export interface MsgUpdateClassFeeResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateClassFeeResponse";
  value: MsgUpdateClassFeeResponseAmino;
}
/**
 * MsgUpdateClassFeeResponse is the Msg/UpdateClassFee response type.
 * 
 * Since Revision 2
 */
export interface MsgUpdateClassFeeResponseSDKType {}
/**
 * MsgAddAllowedBridgeChain is the Msg/AddAllowedBridgeChain request type.
 * 
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChain {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * chain_name is the name of the chain to allow bridging of ecocredits to
   * (i.e. polygon, ethereum, celo).
   */
  chainName: string;
}
export interface MsgAddAllowedBridgeChainProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChain";
  value: Uint8Array;
}
/**
 * MsgAddAllowedBridgeChain is the Msg/AddAllowedBridgeChain request type.
 * 
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChainAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * chain_name is the name of the chain to allow bridging of ecocredits to
   * (i.e. polygon, ethereum, celo).
   */
  chain_name?: string;
}
export interface MsgAddAllowedBridgeChainAminoMsg {
  type: "/regen.ecocredit.v1.MsgAddAllowedBridgeChain";
  value: MsgAddAllowedBridgeChainAmino;
}
/**
 * MsgAddAllowedBridgeChain is the Msg/AddAllowedBridgeChain request type.
 * 
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChainSDKType {
  authority: string;
  chain_name: string;
}
/**
 * MsgAddAllowedBridgeChainResponse is the Msg/AddAllowedBridgeChain response
 * type.
 * 
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChainResponse {}
export interface MsgAddAllowedBridgeChainResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChainResponse";
  value: Uint8Array;
}
/**
 * MsgAddAllowedBridgeChainResponse is the Msg/AddAllowedBridgeChain response
 * type.
 * 
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChainResponseAmino {}
export interface MsgAddAllowedBridgeChainResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgAddAllowedBridgeChainResponse";
  value: MsgAddAllowedBridgeChainResponseAmino;
}
/**
 * MsgAddAllowedBridgeChainResponse is the Msg/AddAllowedBridgeChain response
 * type.
 * 
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChainResponseSDKType {}
/**
 * MsgRemoveAllowedBridgeChain is the Msg/RemoveAllowedBridgeChain request type.
 * 
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChain {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * chain_name is the name of the chain to remove from the list of allowed
   * chains to bridge ecocredits to (i.e. polygon, ethereum, celo).
   */
  chainName: string;
}
export interface MsgRemoveAllowedBridgeChainProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain";
  value: Uint8Array;
}
/**
 * MsgRemoveAllowedBridgeChain is the Msg/RemoveAllowedBridgeChain request type.
 * 
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChainAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * chain_name is the name of the chain to remove from the list of allowed
   * chains to bridge ecocredits to (i.e. polygon, ethereum, celo).
   */
  chain_name?: string;
}
export interface MsgRemoveAllowedBridgeChainAminoMsg {
  type: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain";
  value: MsgRemoveAllowedBridgeChainAmino;
}
/**
 * MsgRemoveAllowedBridgeChain is the Msg/RemoveAllowedBridgeChain request type.
 * 
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChainSDKType {
  authority: string;
  chain_name: string;
}
/**
 * MsgRemoveAllowedBridgeChainResponse is the Msg/RemoveAllowedBridgeChain
 * response type.
 * 
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChainResponse {}
export interface MsgRemoveAllowedBridgeChainResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChainResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveAllowedBridgeChainResponse is the Msg/RemoveAllowedBridgeChain
 * response type.
 * 
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChainResponseAmino {}
export interface MsgRemoveAllowedBridgeChainResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChainResponse";
  value: MsgRemoveAllowedBridgeChainResponseAmino;
}
/**
 * MsgRemoveAllowedBridgeChainResponse is the Msg/RemoveAllowedBridgeChain
 * response type.
 * 
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChainResponseSDKType {}
function createBaseMsgAddCreditType(): MsgAddCreditType {
  return {
    authority: "",
    creditType: undefined
  };
}
export const MsgAddCreditType = {
  typeUrl: "/regen.ecocredit.v1.MsgAddCreditType",
  encode(message: MsgAddCreditType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.creditType !== undefined) {
      CreditType.encode(message.creditType, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgAddCreditType {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      creditType: isSet(object.creditType) ? CreditType.fromJSON(object.creditType) : undefined
    };
  },
  fromPartial(object: Partial<MsgAddCreditType>): MsgAddCreditType {
    const message = createBaseMsgAddCreditType();
    message.authority = object.authority ?? "";
    message.creditType = object.creditType !== undefined && object.creditType !== null ? CreditType.fromPartial(object.creditType) : undefined;
    return message;
  },
  fromAmino(object: MsgAddCreditTypeAmino): MsgAddCreditType {
    const message = createBaseMsgAddCreditType();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.credit_type !== undefined && object.credit_type !== null) {
      message.creditType = CreditType.fromAmino(object.credit_type);
    }
    return message;
  },
  toAmino(message: MsgAddCreditType): MsgAddCreditTypeAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.credit_type = message.creditType ? CreditType.toAmino(message.creditType) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddCreditTypeAminoMsg): MsgAddCreditType {
    return MsgAddCreditType.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddCreditTypeProtoMsg): MsgAddCreditType {
    return MsgAddCreditType.decode(message.value);
  },
  toProto(message: MsgAddCreditType): Uint8Array {
    return MsgAddCreditType.encode(message).finish();
  },
  toProtoMsg(message: MsgAddCreditType): MsgAddCreditTypeProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgAddCreditType",
      value: MsgAddCreditType.encode(message).finish()
    };
  }
};
function createBaseMsgAddCreditTypeResponse(): MsgAddCreditTypeResponse {
  return {};
}
export const MsgAddCreditTypeResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgAddCreditTypeResponse",
  encode(_: MsgAddCreditTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddCreditTypeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddCreditTypeResponse>): MsgAddCreditTypeResponse {
    const message = createBaseMsgAddCreditTypeResponse();
    return message;
  },
  fromAmino(_: MsgAddCreditTypeResponseAmino): MsgAddCreditTypeResponse {
    const message = createBaseMsgAddCreditTypeResponse();
    return message;
  },
  toAmino(_: MsgAddCreditTypeResponse): MsgAddCreditTypeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddCreditTypeResponseAminoMsg): MsgAddCreditTypeResponse {
    return MsgAddCreditTypeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddCreditTypeResponseProtoMsg): MsgAddCreditTypeResponse {
    return MsgAddCreditTypeResponse.decode(message.value);
  },
  toProto(message: MsgAddCreditTypeResponse): Uint8Array {
    return MsgAddCreditTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddCreditTypeResponse): MsgAddCreditTypeResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgAddCreditTypeResponse",
      value: MsgAddCreditTypeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateClass(): MsgCreateClass {
  return {
    admin: "",
    issuers: [],
    metadata: "",
    creditTypeAbbrev: "",
    fee: undefined
  };
}
export const MsgCreateClass = {
  typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
  encode(message: MsgCreateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.issuers) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.creditTypeAbbrev !== "") {
      writer.uint32(34).string(message.creditTypeAbbrev);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateClass {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => String(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : "",
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateClass>): MsgCreateClass {
    const message = createBaseMsgCreateClass();
    message.admin = object.admin ?? "";
    message.issuers = object.issuers?.map(e => e) || [];
    message.metadata = object.metadata ?? "";
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateClassAmino): MsgCreateClass {
    const message = createBaseMsgCreateClass();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    message.issuers = object.issuers?.map(e => e) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
      message.creditTypeAbbrev = object.credit_type_abbrev;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgCreateClass): MsgCreateClassAmino {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = [];
    }
    obj.metadata = message.metadata;
    obj.credit_type_abbrev = message.creditTypeAbbrev;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClassAminoMsg): MsgCreateClass {
    return MsgCreateClass.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateClassProtoMsg): MsgCreateClass {
    return MsgCreateClass.decode(message.value);
  },
  toProto(message: MsgCreateClass): Uint8Array {
    return MsgCreateClass.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClass): MsgCreateClassProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
      value: MsgCreateClass.encode(message).finish()
    };
  }
};
function createBaseMsgCreateClassResponse(): MsgCreateClassResponse {
  return {
    classId: ""
  };
}
export const MsgCreateClassResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgCreateClassResponse",
  encode(message: MsgCreateClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateClassResponse {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateClassResponse>): MsgCreateClassResponse {
    const message = createBaseMsgCreateClassResponse();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: MsgCreateClassResponseAmino): MsgCreateClassResponse {
    const message = createBaseMsgCreateClassResponse();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: MsgCreateClassResponse): MsgCreateClassResponseAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClassResponseAminoMsg): MsgCreateClassResponse {
    return MsgCreateClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateClassResponseProtoMsg): MsgCreateClassResponse {
    return MsgCreateClassResponse.decode(message.value);
  },
  toProto(message: MsgCreateClassResponse): Uint8Array {
    return MsgCreateClassResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClassResponse): MsgCreateClassResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCreateClassResponse",
      value: MsgCreateClassResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateProject(): MsgCreateProject {
  return {
    admin: "",
    classId: "",
    metadata: "",
    jurisdiction: "",
    referenceId: ""
  };
}
export const MsgCreateProject = {
  typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
  encode(message: MsgCreateProject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.jurisdiction !== "") {
      writer.uint32(34).string(message.jurisdiction);
    }
    if (message.referenceId !== "") {
      writer.uint32(42).string(message.referenceId);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateProject {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateProject>): MsgCreateProject {
    const message = createBaseMsgCreateProject();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.metadata = object.metadata ?? "";
    message.jurisdiction = object.jurisdiction ?? "";
    message.referenceId = object.referenceId ?? "";
    return message;
  },
  fromAmino(object: MsgCreateProjectAmino): MsgCreateProject {
    const message = createBaseMsgCreateProject();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
      message.jurisdiction = object.jurisdiction;
    }
    if (object.reference_id !== undefined && object.reference_id !== null) {
      message.referenceId = object.reference_id;
    }
    return message;
  },
  toAmino(message: MsgCreateProject): MsgCreateProjectAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.class_id = message.classId;
    obj.metadata = message.metadata;
    obj.jurisdiction = message.jurisdiction;
    obj.reference_id = message.referenceId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateProjectAminoMsg): MsgCreateProject {
    return MsgCreateProject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProjectProtoMsg): MsgCreateProject {
    return MsgCreateProject.decode(message.value);
  },
  toProto(message: MsgCreateProject): Uint8Array {
    return MsgCreateProject.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProject): MsgCreateProjectProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
      value: MsgCreateProject.encode(message).finish()
    };
  }
};
function createBaseMsgCreateProjectResponse(): MsgCreateProjectResponse {
  return {
    projectId: ""
  };
}
export const MsgCreateProjectResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgCreateProjectResponse",
  encode(message: MsgCreateProjectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateProjectResponse {
    return {
      projectId: isSet(object.projectId) ? String(object.projectId) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateProjectResponse>): MsgCreateProjectResponse {
    const message = createBaseMsgCreateProjectResponse();
    message.projectId = object.projectId ?? "";
    return message;
  },
  fromAmino(object: MsgCreateProjectResponseAmino): MsgCreateProjectResponse {
    const message = createBaseMsgCreateProjectResponse();
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    return message;
  },
  toAmino(message: MsgCreateProjectResponse): MsgCreateProjectResponseAmino {
    const obj: any = {};
    obj.project_id = message.projectId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateProjectResponseAminoMsg): MsgCreateProjectResponse {
    return MsgCreateProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProjectResponseProtoMsg): MsgCreateProjectResponse {
    return MsgCreateProjectResponse.decode(message.value);
  },
  toProto(message: MsgCreateProjectResponse): Uint8Array {
    return MsgCreateProjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProjectResponse): MsgCreateProjectResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCreateProjectResponse",
      value: MsgCreateProjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBatch(): MsgCreateBatch {
  return {
    issuer: "",
    projectId: "",
    issuance: [],
    metadata: "",
    startDate: undefined,
    endDate: undefined,
    open: false,
    originTx: undefined
  };
}
export const MsgCreateBatch = {
  typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
  encode(message: MsgCreateBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    for (const v of message.issuance) {
      BatchIssuance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(message.startDate, writer.uint32(42).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(message.endDate, writer.uint32(50).fork()).ldelim();
    }
    if (message.open === true) {
      writer.uint32(56).bool(message.open);
    }
    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateBatch {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      issuance: Array.isArray(object?.issuance) ? object.issuance.map((e: any) => BatchIssuance.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      open: isSet(object.open) ? Boolean(object.open) : false,
      originTx: isSet(object.originTx) ? OriginTx.fromJSON(object.originTx) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateBatch>): MsgCreateBatch {
    const message = createBaseMsgCreateBatch();
    message.issuer = object.issuer ?? "";
    message.projectId = object.projectId ?? "";
    message.issuance = object.issuance?.map(e => BatchIssuance.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    message.startDate = object.startDate !== undefined && object.startDate !== null ? Timestamp.fromPartial(object.startDate) : undefined;
    message.endDate = object.endDate !== undefined && object.endDate !== null ? Timestamp.fromPartial(object.endDate) : undefined;
    message.open = object.open ?? false;
    message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateBatchAmino): MsgCreateBatch {
    const message = createBaseMsgCreateBatch();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    message.issuance = object.issuance?.map(e => BatchIssuance.fromAmino(e)) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.start_date !== undefined && object.start_date !== null) {
      message.startDate = Timestamp.fromAmino(object.start_date);
    }
    if (object.end_date !== undefined && object.end_date !== null) {
      message.endDate = Timestamp.fromAmino(object.end_date);
    }
    if (object.open !== undefined && object.open !== null) {
      message.open = object.open;
    }
    if (object.origin_tx !== undefined && object.origin_tx !== null) {
      message.originTx = OriginTx.fromAmino(object.origin_tx);
    }
    return message;
  },
  toAmino(message: MsgCreateBatch): MsgCreateBatchAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.project_id = message.projectId;
    if (message.issuance) {
      obj.issuance = message.issuance.map(e => e ? BatchIssuance.toAmino(e) : undefined);
    } else {
      obj.issuance = [];
    }
    obj.metadata = message.metadata;
    obj.start_date = message.startDate ? Timestamp.toAmino(message.startDate) : undefined;
    obj.end_date = message.endDate ? Timestamp.toAmino(message.endDate) : undefined;
    obj.open = message.open;
    obj.origin_tx = message.originTx ? OriginTx.toAmino(message.originTx) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBatchAminoMsg): MsgCreateBatch {
    return MsgCreateBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBatchProtoMsg): MsgCreateBatch {
    return MsgCreateBatch.decode(message.value);
  },
  toProto(message: MsgCreateBatch): Uint8Array {
    return MsgCreateBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBatch): MsgCreateBatchProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
      value: MsgCreateBatch.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBatchResponse(): MsgCreateBatchResponse {
  return {
    batchDenom: ""
  };
}
export const MsgCreateBatchResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgCreateBatchResponse",
  encode(message: MsgCreateBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateBatchResponse {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateBatchResponse>): MsgCreateBatchResponse {
    const message = createBaseMsgCreateBatchResponse();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
  fromAmino(object: MsgCreateBatchResponseAmino): MsgCreateBatchResponse {
    const message = createBaseMsgCreateBatchResponse();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: MsgCreateBatchResponse): MsgCreateBatchResponseAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBatchResponseAminoMsg): MsgCreateBatchResponse {
    return MsgCreateBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBatchResponseProtoMsg): MsgCreateBatchResponse {
    return MsgCreateBatchResponse.decode(message.value);
  },
  toProto(message: MsgCreateBatchResponse): Uint8Array {
    return MsgCreateBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBatchResponse): MsgCreateBatchResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCreateBatchResponse",
      value: MsgCreateBatchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMintBatchCredits(): MsgMintBatchCredits {
  return {
    issuer: "",
    batchDenom: "",
    issuance: [],
    originTx: undefined
  };
}
export const MsgMintBatchCredits = {
  typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
  encode(message: MsgMintBatchCredits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    for (const v of message.issuance) {
      BatchIssuance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMintBatchCredits {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      issuance: Array.isArray(object?.issuance) ? object.issuance.map((e: any) => BatchIssuance.fromJSON(e)) : [],
      originTx: isSet(object.originTx) ? OriginTx.fromJSON(object.originTx) : undefined
    };
  },
  fromPartial(object: Partial<MsgMintBatchCredits>): MsgMintBatchCredits {
    const message = createBaseMsgMintBatchCredits();
    message.issuer = object.issuer ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.issuance = object.issuance?.map(e => BatchIssuance.fromPartial(e)) || [];
    message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
    return message;
  },
  fromAmino(object: MsgMintBatchCreditsAmino): MsgMintBatchCredits {
    const message = createBaseMsgMintBatchCredits();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    message.issuance = object.issuance?.map(e => BatchIssuance.fromAmino(e)) || [];
    if (object.origin_tx !== undefined && object.origin_tx !== null) {
      message.originTx = OriginTx.fromAmino(object.origin_tx);
    }
    return message;
  },
  toAmino(message: MsgMintBatchCredits): MsgMintBatchCreditsAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.batch_denom = message.batchDenom;
    if (message.issuance) {
      obj.issuance = message.issuance.map(e => e ? BatchIssuance.toAmino(e) : undefined);
    } else {
      obj.issuance = [];
    }
    obj.origin_tx = message.originTx ? OriginTx.toAmino(message.originTx) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMintBatchCreditsAminoMsg): MsgMintBatchCredits {
    return MsgMintBatchCredits.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintBatchCreditsProtoMsg): MsgMintBatchCredits {
    return MsgMintBatchCredits.decode(message.value);
  },
  toProto(message: MsgMintBatchCredits): Uint8Array {
    return MsgMintBatchCredits.encode(message).finish();
  },
  toProtoMsg(message: MsgMintBatchCredits): MsgMintBatchCreditsProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
      value: MsgMintBatchCredits.encode(message).finish()
    };
  }
};
function createBaseMsgMintBatchCreditsResponse(): MsgMintBatchCreditsResponse {
  return {};
}
export const MsgMintBatchCreditsResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse",
  encode(_: MsgMintBatchCreditsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgMintBatchCreditsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgMintBatchCreditsResponse>): MsgMintBatchCreditsResponse {
    const message = createBaseMsgMintBatchCreditsResponse();
    return message;
  },
  fromAmino(_: MsgMintBatchCreditsResponseAmino): MsgMintBatchCreditsResponse {
    const message = createBaseMsgMintBatchCreditsResponse();
    return message;
  },
  toAmino(_: MsgMintBatchCreditsResponse): MsgMintBatchCreditsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintBatchCreditsResponseAminoMsg): MsgMintBatchCreditsResponse {
    return MsgMintBatchCreditsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintBatchCreditsResponseProtoMsg): MsgMintBatchCreditsResponse {
    return MsgMintBatchCreditsResponse.decode(message.value);
  },
  toProto(message: MsgMintBatchCreditsResponse): Uint8Array {
    return MsgMintBatchCreditsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintBatchCreditsResponse): MsgMintBatchCreditsResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse",
      value: MsgMintBatchCreditsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSealBatch(): MsgSealBatch {
  return {
    issuer: "",
    batchDenom: ""
  };
}
export const MsgSealBatch = {
  typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
  encode(message: MsgSealBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    return writer;
  },
  fromJSON(object: any): MsgSealBatch {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },
  fromPartial(object: Partial<MsgSealBatch>): MsgSealBatch {
    const message = createBaseMsgSealBatch();
    message.issuer = object.issuer ?? "";
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
  fromAmino(object: MsgSealBatchAmino): MsgSealBatch {
    const message = createBaseMsgSealBatch();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: MsgSealBatch): MsgSealBatchAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.batch_denom = message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: MsgSealBatchAminoMsg): MsgSealBatch {
    return MsgSealBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSealBatchProtoMsg): MsgSealBatch {
    return MsgSealBatch.decode(message.value);
  },
  toProto(message: MsgSealBatch): Uint8Array {
    return MsgSealBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgSealBatch): MsgSealBatchProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
      value: MsgSealBatch.encode(message).finish()
    };
  }
};
function createBaseMsgSealBatchResponse(): MsgSealBatchResponse {
  return {};
}
export const MsgSealBatchResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgSealBatchResponse",
  encode(_: MsgSealBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSealBatchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSealBatchResponse>): MsgSealBatchResponse {
    const message = createBaseMsgSealBatchResponse();
    return message;
  },
  fromAmino(_: MsgSealBatchResponseAmino): MsgSealBatchResponse {
    const message = createBaseMsgSealBatchResponse();
    return message;
  },
  toAmino(_: MsgSealBatchResponse): MsgSealBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSealBatchResponseAminoMsg): MsgSealBatchResponse {
    return MsgSealBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSealBatchResponseProtoMsg): MsgSealBatchResponse {
    return MsgSealBatchResponse.decode(message.value);
  },
  toProto(message: MsgSealBatchResponse): Uint8Array {
    return MsgSealBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSealBatchResponse): MsgSealBatchResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgSealBatchResponse",
      value: MsgSealBatchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSend(): MsgSend {
  return {
    sender: "",
    recipient: "",
    credits: []
  };
}
export const MsgSend = {
  typeUrl: "/regen.ecocredit.v1.MsgSend",
  encode(message: MsgSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.credits) {
      MsgSend_SendCredits.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSend {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => MsgSend_SendCredits.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgSend>): MsgSend {
    const message = createBaseMsgSend();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.credits = object.credits?.map(e => MsgSend_SendCredits.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSendAmino): MsgSend {
    const message = createBaseMsgSend();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.credits = object.credits?.map(e => MsgSend_SendCredits.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSend): MsgSendAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.recipient = message.recipient;
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgSend_SendCredits.toAmino(e) : undefined);
    } else {
      obj.credits = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSendAminoMsg): MsgSend {
    return MsgSend.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendProtoMsg): MsgSend {
    return MsgSend.decode(message.value);
  },
  toProto(message: MsgSend): Uint8Array {
    return MsgSend.encode(message).finish();
  },
  toProtoMsg(message: MsgSend): MsgSendProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgSend",
      value: MsgSend.encode(message).finish()
    };
  }
};
function createBaseMsgSend_SendCredits(): MsgSend_SendCredits {
  return {
    batchDenom: "",
    tradableAmount: "",
    retiredAmount: "",
    retirementJurisdiction: "",
    retirementReason: ""
  };
}
export const MsgSend_SendCredits = {
  typeUrl: "/regen.ecocredit.v1.SendCredits",
  encode(message: MsgSend_SendCredits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.tradableAmount !== "") {
      writer.uint32(18).string(message.tradableAmount);
    }
    if (message.retiredAmount !== "") {
      writer.uint32(26).string(message.retiredAmount);
    }
    if (message.retirementJurisdiction !== "") {
      writer.uint32(34).string(message.retirementJurisdiction);
    }
    if (message.retirementReason !== "") {
      writer.uint32(42).string(message.retirementReason);
    }
    return writer;
  },
  fromJSON(object: any): MsgSend_SendCredits {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : "",
      retirementJurisdiction: isSet(object.retirementJurisdiction) ? String(object.retirementJurisdiction) : "",
      retirementReason: isSet(object.retirementReason) ? String(object.retirementReason) : ""
    };
  },
  fromPartial(object: Partial<MsgSend_SendCredits>): MsgSend_SendCredits {
    const message = createBaseMsgSend_SendCredits();
    message.batchDenom = object.batchDenom ?? "";
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    message.retirementJurisdiction = object.retirementJurisdiction ?? "";
    message.retirementReason = object.retirementReason ?? "";
    return message;
  },
  fromAmino(object: MsgSend_SendCreditsAmino): MsgSend_SendCredits {
    const message = createBaseMsgSend_SendCredits();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
      message.tradableAmount = object.tradable_amount;
    }
    if (object.retired_amount !== undefined && object.retired_amount !== null) {
      message.retiredAmount = object.retired_amount;
    }
    if (object.retirement_jurisdiction !== undefined && object.retirement_jurisdiction !== null) {
      message.retirementJurisdiction = object.retirement_jurisdiction;
    }
    if (object.retirement_reason !== undefined && object.retirement_reason !== null) {
      message.retirementReason = object.retirement_reason;
    }
    return message;
  },
  toAmino(message: MsgSend_SendCredits): MsgSend_SendCreditsAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    obj.tradable_amount = message.tradableAmount;
    obj.retired_amount = message.retiredAmount;
    obj.retirement_jurisdiction = message.retirementJurisdiction;
    obj.retirement_reason = message.retirementReason;
    return obj;
  },
  fromAminoMsg(object: MsgSend_SendCreditsAminoMsg): MsgSend_SendCredits {
    return MsgSend_SendCredits.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSend_SendCreditsProtoMsg): MsgSend_SendCredits {
    return MsgSend_SendCredits.decode(message.value);
  },
  toProto(message: MsgSend_SendCredits): Uint8Array {
    return MsgSend_SendCredits.encode(message).finish();
  },
  toProtoMsg(message: MsgSend_SendCredits): MsgSend_SendCreditsProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.SendCredits",
      value: MsgSend_SendCredits.encode(message).finish()
    };
  }
};
function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}
export const MsgSendResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgSendResponse",
  encode(_: MsgSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSendResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSendResponse>): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
  fromAmino(_: MsgSendResponseAmino): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
  toAmino(_: MsgSendResponse): MsgSendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSendResponseAminoMsg): MsgSendResponse {
    return MsgSendResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendResponseProtoMsg): MsgSendResponse {
    return MsgSendResponse.decode(message.value);
  },
  toProto(message: MsgSendResponse): Uint8Array {
    return MsgSendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendResponse): MsgSendResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgSendResponse",
      value: MsgSendResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRetire(): MsgRetire {
  return {
    owner: "",
    credits: [],
    jurisdiction: "",
    reason: ""
  };
}
export const MsgRetire = {
  typeUrl: "/regen.ecocredit.v1.MsgRetire",
  encode(message: MsgRetire, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.credits) {
      Credits.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.jurisdiction !== "") {
      writer.uint32(26).string(message.jurisdiction);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  fromJSON(object: any): MsgRetire {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => Credits.fromJSON(e)) : [],
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },
  fromPartial(object: Partial<MsgRetire>): MsgRetire {
    const message = createBaseMsgRetire();
    message.owner = object.owner ?? "";
    message.credits = object.credits?.map(e => Credits.fromPartial(e)) || [];
    message.jurisdiction = object.jurisdiction ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgRetireAmino): MsgRetire {
    const message = createBaseMsgRetire();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    message.credits = object.credits?.map(e => Credits.fromAmino(e)) || [];
    if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
      message.jurisdiction = object.jurisdiction;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgRetire): MsgRetireAmino {
    const obj: any = {};
    obj.owner = message.owner;
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? Credits.toAmino(e) : undefined);
    } else {
      obj.credits = [];
    }
    obj.jurisdiction = message.jurisdiction;
    obj.reason = message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgRetireAminoMsg): MsgRetire {
    return MsgRetire.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRetireProtoMsg): MsgRetire {
    return MsgRetire.decode(message.value);
  },
  toProto(message: MsgRetire): Uint8Array {
    return MsgRetire.encode(message).finish();
  },
  toProtoMsg(message: MsgRetire): MsgRetireProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgRetire",
      value: MsgRetire.encode(message).finish()
    };
  }
};
function createBaseMsgRetireResponse(): MsgRetireResponse {
  return {};
}
export const MsgRetireResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgRetireResponse",
  encode(_: MsgRetireResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRetireResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRetireResponse>): MsgRetireResponse {
    const message = createBaseMsgRetireResponse();
    return message;
  },
  fromAmino(_: MsgRetireResponseAmino): MsgRetireResponse {
    const message = createBaseMsgRetireResponse();
    return message;
  },
  toAmino(_: MsgRetireResponse): MsgRetireResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRetireResponseAminoMsg): MsgRetireResponse {
    return MsgRetireResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRetireResponseProtoMsg): MsgRetireResponse {
    return MsgRetireResponse.decode(message.value);
  },
  toProto(message: MsgRetireResponse): Uint8Array {
    return MsgRetireResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRetireResponse): MsgRetireResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgRetireResponse",
      value: MsgRetireResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancel(): MsgCancel {
  return {
    owner: "",
    credits: [],
    reason: ""
  };
}
export const MsgCancel = {
  typeUrl: "/regen.ecocredit.v1.MsgCancel",
  encode(message: MsgCancel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.credits) {
      Credits.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancel {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => Credits.fromJSON(e)) : [],
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },
  fromPartial(object: Partial<MsgCancel>): MsgCancel {
    const message = createBaseMsgCancel();
    message.owner = object.owner ?? "";
    message.credits = object.credits?.map(e => Credits.fromPartial(e)) || [];
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgCancelAmino): MsgCancel {
    const message = createBaseMsgCancel();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    message.credits = object.credits?.map(e => Credits.fromAmino(e)) || [];
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgCancel): MsgCancelAmino {
    const obj: any = {};
    obj.owner = message.owner;
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? Credits.toAmino(e) : undefined);
    } else {
      obj.credits = [];
    }
    obj.reason = message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgCancelAminoMsg): MsgCancel {
    return MsgCancel.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelProtoMsg): MsgCancel {
    return MsgCancel.decode(message.value);
  },
  toProto(message: MsgCancel): Uint8Array {
    return MsgCancel.encode(message).finish();
  },
  toProtoMsg(message: MsgCancel): MsgCancelProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCancel",
      value: MsgCancel.encode(message).finish()
    };
  }
};
function createBaseMsgCancelResponse(): MsgCancelResponse {
  return {};
}
export const MsgCancelResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgCancelResponse",
  encode(_: MsgCancelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelResponse>): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  },
  fromAmino(_: MsgCancelResponseAmino): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  },
  toAmino(_: MsgCancelResponse): MsgCancelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelResponseAminoMsg): MsgCancelResponse {
    return MsgCancelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelResponseProtoMsg): MsgCancelResponse {
    return MsgCancelResponse.decode(message.value);
  },
  toProto(message: MsgCancelResponse): Uint8Array {
    return MsgCancelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelResponse): MsgCancelResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCancelResponse",
      value: MsgCancelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassAdmin(): MsgUpdateClassAdmin {
  return {
    admin: "",
    classId: "",
    newAdmin: ""
  };
}
export const MsgUpdateClassAdmin = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
  encode(message: MsgUpdateClassAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateClassAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateClassAdmin>): MsgUpdateClassAdmin {
    const message = createBaseMsgUpdateClassAdmin();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateClassAdminAmino): MsgUpdateClassAdmin {
    const message = createBaseMsgUpdateClassAdmin();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message: MsgUpdateClassAdmin): MsgUpdateClassAdminAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.class_id = message.classId;
    obj.new_admin = message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassAdminAminoMsg): MsgUpdateClassAdmin {
    return MsgUpdateClassAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassAdminProtoMsg): MsgUpdateClassAdmin {
    return MsgUpdateClassAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateClassAdmin): Uint8Array {
    return MsgUpdateClassAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassAdmin): MsgUpdateClassAdminProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
      value: MsgUpdateClassAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassAdminResponse(): MsgUpdateClassAdminResponse {
  return {};
}
export const MsgUpdateClassAdminResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse",
  encode(_: MsgUpdateClassAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateClassAdminResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateClassAdminResponse>): MsgUpdateClassAdminResponse {
    const message = createBaseMsgUpdateClassAdminResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClassAdminResponseAmino): MsgUpdateClassAdminResponse {
    const message = createBaseMsgUpdateClassAdminResponse();
    return message;
  },
  toAmino(_: MsgUpdateClassAdminResponse): MsgUpdateClassAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassAdminResponseAminoMsg): MsgUpdateClassAdminResponse {
    return MsgUpdateClassAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassAdminResponseProtoMsg): MsgUpdateClassAdminResponse {
    return MsgUpdateClassAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClassAdminResponse): Uint8Array {
    return MsgUpdateClassAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassAdminResponse): MsgUpdateClassAdminResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse",
      value: MsgUpdateClassAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassIssuers(): MsgUpdateClassIssuers {
  return {
    admin: "",
    classId: "",
    addIssuers: [],
    removeIssuers: []
  };
}
export const MsgUpdateClassIssuers = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
  encode(message: MsgUpdateClassIssuers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    for (const v of message.addIssuers) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.removeIssuers) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateClassIssuers {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      addIssuers: Array.isArray(object?.addIssuers) ? object.addIssuers.map((e: any) => String(e)) : [],
      removeIssuers: Array.isArray(object?.removeIssuers) ? object.removeIssuers.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgUpdateClassIssuers>): MsgUpdateClassIssuers {
    const message = createBaseMsgUpdateClassIssuers();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.addIssuers = object.addIssuers?.map(e => e) || [];
    message.removeIssuers = object.removeIssuers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgUpdateClassIssuersAmino): MsgUpdateClassIssuers {
    const message = createBaseMsgUpdateClassIssuers();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    message.addIssuers = object.add_issuers?.map(e => e) || [];
    message.removeIssuers = object.remove_issuers?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgUpdateClassIssuers): MsgUpdateClassIssuersAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.class_id = message.classId;
    if (message.addIssuers) {
      obj.add_issuers = message.addIssuers.map(e => e);
    } else {
      obj.add_issuers = [];
    }
    if (message.removeIssuers) {
      obj.remove_issuers = message.removeIssuers.map(e => e);
    } else {
      obj.remove_issuers = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassIssuersAminoMsg): MsgUpdateClassIssuers {
    return MsgUpdateClassIssuers.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassIssuersProtoMsg): MsgUpdateClassIssuers {
    return MsgUpdateClassIssuers.decode(message.value);
  },
  toProto(message: MsgUpdateClassIssuers): Uint8Array {
    return MsgUpdateClassIssuers.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassIssuers): MsgUpdateClassIssuersProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
      value: MsgUpdateClassIssuers.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassIssuersResponse(): MsgUpdateClassIssuersResponse {
  return {};
}
export const MsgUpdateClassIssuersResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse",
  encode(_: MsgUpdateClassIssuersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateClassIssuersResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateClassIssuersResponse>): MsgUpdateClassIssuersResponse {
    const message = createBaseMsgUpdateClassIssuersResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClassIssuersResponseAmino): MsgUpdateClassIssuersResponse {
    const message = createBaseMsgUpdateClassIssuersResponse();
    return message;
  },
  toAmino(_: MsgUpdateClassIssuersResponse): MsgUpdateClassIssuersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassIssuersResponseAminoMsg): MsgUpdateClassIssuersResponse {
    return MsgUpdateClassIssuersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassIssuersResponseProtoMsg): MsgUpdateClassIssuersResponse {
    return MsgUpdateClassIssuersResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClassIssuersResponse): Uint8Array {
    return MsgUpdateClassIssuersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassIssuersResponse): MsgUpdateClassIssuersResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse",
      value: MsgUpdateClassIssuersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassMetadata(): MsgUpdateClassMetadata {
  return {
    admin: "",
    classId: "",
    newMetadata: ""
  };
}
export const MsgUpdateClassMetadata = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
  encode(message: MsgUpdateClassMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.newMetadata !== "") {
      writer.uint32(26).string(message.newMetadata);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateClassMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      newMetadata: isSet(object.newMetadata) ? String(object.newMetadata) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateClassMetadata>): MsgUpdateClassMetadata {
    const message = createBaseMsgUpdateClassMetadata();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.newMetadata = object.newMetadata ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateClassMetadataAmino): MsgUpdateClassMetadata {
    const message = createBaseMsgUpdateClassMetadata();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.new_metadata !== undefined && object.new_metadata !== null) {
      message.newMetadata = object.new_metadata;
    }
    return message;
  },
  toAmino(message: MsgUpdateClassMetadata): MsgUpdateClassMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.class_id = message.classId;
    obj.new_metadata = message.newMetadata;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassMetadataAminoMsg): MsgUpdateClassMetadata {
    return MsgUpdateClassMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassMetadataProtoMsg): MsgUpdateClassMetadata {
    return MsgUpdateClassMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateClassMetadata): Uint8Array {
    return MsgUpdateClassMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassMetadata): MsgUpdateClassMetadataProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
      value: MsgUpdateClassMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassMetadataResponse(): MsgUpdateClassMetadataResponse {
  return {};
}
export const MsgUpdateClassMetadataResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse",
  encode(_: MsgUpdateClassMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateClassMetadataResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateClassMetadataResponse>): MsgUpdateClassMetadataResponse {
    const message = createBaseMsgUpdateClassMetadataResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClassMetadataResponseAmino): MsgUpdateClassMetadataResponse {
    const message = createBaseMsgUpdateClassMetadataResponse();
    return message;
  },
  toAmino(_: MsgUpdateClassMetadataResponse): MsgUpdateClassMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassMetadataResponseAminoMsg): MsgUpdateClassMetadataResponse {
    return MsgUpdateClassMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassMetadataResponseProtoMsg): MsgUpdateClassMetadataResponse {
    return MsgUpdateClassMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClassMetadataResponse): Uint8Array {
    return MsgUpdateClassMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassMetadataResponse): MsgUpdateClassMetadataResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse",
      value: MsgUpdateClassMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProjectAdmin(): MsgUpdateProjectAdmin {
  return {
    admin: "",
    projectId: "",
    newAdmin: ""
  };
}
export const MsgUpdateProjectAdmin = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
  encode(message: MsgUpdateProjectAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateProjectAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateProjectAdmin>): MsgUpdateProjectAdmin {
    const message = createBaseMsgUpdateProjectAdmin();
    message.admin = object.admin ?? "";
    message.projectId = object.projectId ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateProjectAdminAmino): MsgUpdateProjectAdmin {
    const message = createBaseMsgUpdateProjectAdmin();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message: MsgUpdateProjectAdmin): MsgUpdateProjectAdminAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.project_id = message.projectId;
    obj.new_admin = message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProjectAdminAminoMsg): MsgUpdateProjectAdmin {
    return MsgUpdateProjectAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProjectAdminProtoMsg): MsgUpdateProjectAdmin {
    return MsgUpdateProjectAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateProjectAdmin): Uint8Array {
    return MsgUpdateProjectAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProjectAdmin): MsgUpdateProjectAdminProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
      value: MsgUpdateProjectAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProjectAdminResponse(): MsgUpdateProjectAdminResponse {
  return {};
}
export const MsgUpdateProjectAdminResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse",
  encode(_: MsgUpdateProjectAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateProjectAdminResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateProjectAdminResponse>): MsgUpdateProjectAdminResponse {
    const message = createBaseMsgUpdateProjectAdminResponse();
    return message;
  },
  fromAmino(_: MsgUpdateProjectAdminResponseAmino): MsgUpdateProjectAdminResponse {
    const message = createBaseMsgUpdateProjectAdminResponse();
    return message;
  },
  toAmino(_: MsgUpdateProjectAdminResponse): MsgUpdateProjectAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProjectAdminResponseAminoMsg): MsgUpdateProjectAdminResponse {
    return MsgUpdateProjectAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProjectAdminResponseProtoMsg): MsgUpdateProjectAdminResponse {
    return MsgUpdateProjectAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateProjectAdminResponse): Uint8Array {
    return MsgUpdateProjectAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProjectAdminResponse): MsgUpdateProjectAdminResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse",
      value: MsgUpdateProjectAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProjectMetadata(): MsgUpdateProjectMetadata {
  return {
    admin: "",
    projectId: "",
    newMetadata: ""
  };
}
export const MsgUpdateProjectMetadata = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
  encode(message: MsgUpdateProjectMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.newMetadata !== "") {
      writer.uint32(26).string(message.newMetadata);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateProjectMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      newMetadata: isSet(object.newMetadata) ? String(object.newMetadata) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateProjectMetadata>): MsgUpdateProjectMetadata {
    const message = createBaseMsgUpdateProjectMetadata();
    message.admin = object.admin ?? "";
    message.projectId = object.projectId ?? "";
    message.newMetadata = object.newMetadata ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateProjectMetadataAmino): MsgUpdateProjectMetadata {
    const message = createBaseMsgUpdateProjectMetadata();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    if (object.new_metadata !== undefined && object.new_metadata !== null) {
      message.newMetadata = object.new_metadata;
    }
    return message;
  },
  toAmino(message: MsgUpdateProjectMetadata): MsgUpdateProjectMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.project_id = message.projectId;
    obj.new_metadata = message.newMetadata;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProjectMetadataAminoMsg): MsgUpdateProjectMetadata {
    return MsgUpdateProjectMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProjectMetadataProtoMsg): MsgUpdateProjectMetadata {
    return MsgUpdateProjectMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateProjectMetadata): Uint8Array {
    return MsgUpdateProjectMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProjectMetadata): MsgUpdateProjectMetadataProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
      value: MsgUpdateProjectMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProjectMetadataResponse(): MsgUpdateProjectMetadataResponse {
  return {};
}
export const MsgUpdateProjectMetadataResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse",
  encode(_: MsgUpdateProjectMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateProjectMetadataResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateProjectMetadataResponse>): MsgUpdateProjectMetadataResponse {
    const message = createBaseMsgUpdateProjectMetadataResponse();
    return message;
  },
  fromAmino(_: MsgUpdateProjectMetadataResponseAmino): MsgUpdateProjectMetadataResponse {
    const message = createBaseMsgUpdateProjectMetadataResponse();
    return message;
  },
  toAmino(_: MsgUpdateProjectMetadataResponse): MsgUpdateProjectMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProjectMetadataResponseAminoMsg): MsgUpdateProjectMetadataResponse {
    return MsgUpdateProjectMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProjectMetadataResponseProtoMsg): MsgUpdateProjectMetadataResponse {
    return MsgUpdateProjectMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateProjectMetadataResponse): Uint8Array {
    return MsgUpdateProjectMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProjectMetadataResponse): MsgUpdateProjectMetadataResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse",
      value: MsgUpdateProjectMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBridge(): MsgBridge {
  return {
    owner: "",
    target: "",
    recipient: "",
    credits: []
  };
}
export const MsgBridge = {
  typeUrl: "/regen.ecocredit.v1.MsgBridge",
  encode(message: MsgBridge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.target !== "") {
      writer.uint32(18).string(message.target);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    for (const v of message.credits) {
      Credits.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBridge {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      target: isSet(object.target) ? String(object.target) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => Credits.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBridge>): MsgBridge {
    const message = createBaseMsgBridge();
    message.owner = object.owner ?? "";
    message.target = object.target ?? "";
    message.recipient = object.recipient ?? "";
    message.credits = object.credits?.map(e => Credits.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBridgeAmino): MsgBridge {
    const message = createBaseMsgBridge();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.credits = object.credits?.map(e => Credits.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBridge): MsgBridgeAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.target = message.target;
    obj.recipient = message.recipient;
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? Credits.toAmino(e) : undefined);
    } else {
      obj.credits = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBridgeAminoMsg): MsgBridge {
    return MsgBridge.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBridgeProtoMsg): MsgBridge {
    return MsgBridge.decode(message.value);
  },
  toProto(message: MsgBridge): Uint8Array {
    return MsgBridge.encode(message).finish();
  },
  toProtoMsg(message: MsgBridge): MsgBridgeProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgBridge",
      value: MsgBridge.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBatchMetadata(): MsgUpdateBatchMetadata {
  return {
    issuer: "",
    batchDenom: "",
    newMetadata: ""
  };
}
export const MsgUpdateBatchMetadata = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadata",
  encode(message: MsgUpdateBatchMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    if (message.newMetadata !== "") {
      writer.uint32(26).string(message.newMetadata);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateBatchMetadata {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      newMetadata: isSet(object.newMetadata) ? String(object.newMetadata) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateBatchMetadata>): MsgUpdateBatchMetadata {
    const message = createBaseMsgUpdateBatchMetadata();
    message.issuer = object.issuer ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.newMetadata = object.newMetadata ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateBatchMetadataAmino): MsgUpdateBatchMetadata {
    const message = createBaseMsgUpdateBatchMetadata();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.new_metadata !== undefined && object.new_metadata !== null) {
      message.newMetadata = object.new_metadata;
    }
    return message;
  },
  toAmino(message: MsgUpdateBatchMetadata): MsgUpdateBatchMetadataAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.batch_denom = message.batchDenom;
    obj.new_metadata = message.newMetadata;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBatchMetadataAminoMsg): MsgUpdateBatchMetadata {
    return MsgUpdateBatchMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBatchMetadataProtoMsg): MsgUpdateBatchMetadata {
    return MsgUpdateBatchMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateBatchMetadata): Uint8Array {
    return MsgUpdateBatchMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBatchMetadata): MsgUpdateBatchMetadataProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadata",
      value: MsgUpdateBatchMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBatchMetadataResponse(): MsgUpdateBatchMetadataResponse {
  return {};
}
export const MsgUpdateBatchMetadataResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadataResponse",
  encode(_: MsgUpdateBatchMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateBatchMetadataResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateBatchMetadataResponse>): MsgUpdateBatchMetadataResponse {
    const message = createBaseMsgUpdateBatchMetadataResponse();
    return message;
  },
  fromAmino(_: MsgUpdateBatchMetadataResponseAmino): MsgUpdateBatchMetadataResponse {
    const message = createBaseMsgUpdateBatchMetadataResponse();
    return message;
  },
  toAmino(_: MsgUpdateBatchMetadataResponse): MsgUpdateBatchMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBatchMetadataResponseAminoMsg): MsgUpdateBatchMetadataResponse {
    return MsgUpdateBatchMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBatchMetadataResponseProtoMsg): MsgUpdateBatchMetadataResponse {
    return MsgUpdateBatchMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateBatchMetadataResponse): Uint8Array {
    return MsgUpdateBatchMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBatchMetadataResponse): MsgUpdateBatchMetadataResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadataResponse",
      value: MsgUpdateBatchMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBridgeResponse(): MsgBridgeResponse {
  return {};
}
export const MsgBridgeResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgBridgeResponse",
  encode(_: MsgBridgeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBridgeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBridgeResponse>): MsgBridgeResponse {
    const message = createBaseMsgBridgeResponse();
    return message;
  },
  fromAmino(_: MsgBridgeResponseAmino): MsgBridgeResponse {
    const message = createBaseMsgBridgeResponse();
    return message;
  },
  toAmino(_: MsgBridgeResponse): MsgBridgeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBridgeResponseAminoMsg): MsgBridgeResponse {
    return MsgBridgeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBridgeResponseProtoMsg): MsgBridgeResponse {
    return MsgBridgeResponse.decode(message.value);
  },
  toProto(message: MsgBridgeResponse): Uint8Array {
    return MsgBridgeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBridgeResponse): MsgBridgeResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgBridgeResponse",
      value: MsgBridgeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBridgeReceive(): MsgBridgeReceive {
  return {
    issuer: "",
    classId: "",
    project: undefined,
    batch: undefined,
    originTx: undefined
  };
}
export const MsgBridgeReceive = {
  typeUrl: "/regen.ecocredit.v1.MsgBridgeReceive",
  encode(message: MsgBridgeReceive, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.project !== undefined) {
      MsgBridgeReceive_Project.encode(message.project, writer.uint32(26).fork()).ldelim();
    }
    if (message.batch !== undefined) {
      MsgBridgeReceive_Batch.encode(message.batch, writer.uint32(34).fork()).ldelim();
    }
    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBridgeReceive {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      project: isSet(object.project) ? MsgBridgeReceive_Project.fromJSON(object.project) : undefined,
      batch: isSet(object.batch) ? MsgBridgeReceive_Batch.fromJSON(object.batch) : undefined,
      originTx: isSet(object.originTx) ? OriginTx.fromJSON(object.originTx) : undefined
    };
  },
  fromPartial(object: Partial<MsgBridgeReceive>): MsgBridgeReceive {
    const message = createBaseMsgBridgeReceive();
    message.issuer = object.issuer ?? "";
    message.classId = object.classId ?? "";
    message.project = object.project !== undefined && object.project !== null ? MsgBridgeReceive_Project.fromPartial(object.project) : undefined;
    message.batch = object.batch !== undefined && object.batch !== null ? MsgBridgeReceive_Batch.fromPartial(object.batch) : undefined;
    message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
    return message;
  },
  fromAmino(object: MsgBridgeReceiveAmino): MsgBridgeReceive {
    const message = createBaseMsgBridgeReceive();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.project !== undefined && object.project !== null) {
      message.project = MsgBridgeReceive_Project.fromAmino(object.project);
    }
    if (object.batch !== undefined && object.batch !== null) {
      message.batch = MsgBridgeReceive_Batch.fromAmino(object.batch);
    }
    if (object.origin_tx !== undefined && object.origin_tx !== null) {
      message.originTx = OriginTx.fromAmino(object.origin_tx);
    }
    return message;
  },
  toAmino(message: MsgBridgeReceive): MsgBridgeReceiveAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.class_id = message.classId;
    obj.project = message.project ? MsgBridgeReceive_Project.toAmino(message.project) : undefined;
    obj.batch = message.batch ? MsgBridgeReceive_Batch.toAmino(message.batch) : undefined;
    obj.origin_tx = message.originTx ? OriginTx.toAmino(message.originTx) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBridgeReceiveAminoMsg): MsgBridgeReceive {
    return MsgBridgeReceive.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBridgeReceiveProtoMsg): MsgBridgeReceive {
    return MsgBridgeReceive.decode(message.value);
  },
  toProto(message: MsgBridgeReceive): Uint8Array {
    return MsgBridgeReceive.encode(message).finish();
  },
  toProtoMsg(message: MsgBridgeReceive): MsgBridgeReceiveProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgBridgeReceive",
      value: MsgBridgeReceive.encode(message).finish()
    };
  }
};
function createBaseMsgBridgeReceive_Batch(): MsgBridgeReceive_Batch {
  return {
    recipient: "",
    amount: "",
    startDate: undefined,
    endDate: undefined,
    metadata: ""
  };
}
export const MsgBridgeReceive_Batch = {
  typeUrl: "/regen.ecocredit.v1.Batch",
  encode(message: MsgBridgeReceive_Batch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(message.startDate, writer.uint32(26).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(message.endDate, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    return writer;
  },
  fromJSON(object: any): MsgBridgeReceive_Batch {
    return {
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  fromPartial(object: Partial<MsgBridgeReceive_Batch>): MsgBridgeReceive_Batch {
    const message = createBaseMsgBridgeReceive_Batch();
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.startDate = object.startDate !== undefined && object.startDate !== null ? Timestamp.fromPartial(object.startDate) : undefined;
    message.endDate = object.endDate !== undefined && object.endDate !== null ? Timestamp.fromPartial(object.endDate) : undefined;
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgBridgeReceive_BatchAmino): MsgBridgeReceive_Batch {
    const message = createBaseMsgBridgeReceive_Batch();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.start_date !== undefined && object.start_date !== null) {
      message.startDate = Timestamp.fromAmino(object.start_date);
    }
    if (object.end_date !== undefined && object.end_date !== null) {
      message.endDate = Timestamp.fromAmino(object.end_date);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: MsgBridgeReceive_Batch): MsgBridgeReceive_BatchAmino {
    const obj: any = {};
    obj.recipient = message.recipient;
    obj.amount = message.amount;
    obj.start_date = message.startDate ? Timestamp.toAmino(message.startDate) : undefined;
    obj.end_date = message.endDate ? Timestamp.toAmino(message.endDate) : undefined;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgBridgeReceive_BatchAminoMsg): MsgBridgeReceive_Batch {
    return MsgBridgeReceive_Batch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBridgeReceive_BatchProtoMsg): MsgBridgeReceive_Batch {
    return MsgBridgeReceive_Batch.decode(message.value);
  },
  toProto(message: MsgBridgeReceive_Batch): Uint8Array {
    return MsgBridgeReceive_Batch.encode(message).finish();
  },
  toProtoMsg(message: MsgBridgeReceive_Batch): MsgBridgeReceive_BatchProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.Batch",
      value: MsgBridgeReceive_Batch.encode(message).finish()
    };
  }
};
function createBaseMsgBridgeReceive_Project(): MsgBridgeReceive_Project {
  return {
    referenceId: "",
    jurisdiction: "",
    metadata: ""
  };
}
export const MsgBridgeReceive_Project = {
  typeUrl: "/regen.ecocredit.v1.Project",
  encode(message: MsgBridgeReceive_Project, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.referenceId !== "") {
      writer.uint32(10).string(message.referenceId);
    }
    if (message.jurisdiction !== "") {
      writer.uint32(18).string(message.jurisdiction);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  fromJSON(object: any): MsgBridgeReceive_Project {
    return {
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : "",
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  fromPartial(object: Partial<MsgBridgeReceive_Project>): MsgBridgeReceive_Project {
    const message = createBaseMsgBridgeReceive_Project();
    message.referenceId = object.referenceId ?? "";
    message.jurisdiction = object.jurisdiction ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgBridgeReceive_ProjectAmino): MsgBridgeReceive_Project {
    const message = createBaseMsgBridgeReceive_Project();
    if (object.reference_id !== undefined && object.reference_id !== null) {
      message.referenceId = object.reference_id;
    }
    if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
      message.jurisdiction = object.jurisdiction;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: MsgBridgeReceive_Project): MsgBridgeReceive_ProjectAmino {
    const obj: any = {};
    obj.reference_id = message.referenceId;
    obj.jurisdiction = message.jurisdiction;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgBridgeReceive_ProjectAminoMsg): MsgBridgeReceive_Project {
    return MsgBridgeReceive_Project.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBridgeReceive_ProjectProtoMsg): MsgBridgeReceive_Project {
    return MsgBridgeReceive_Project.decode(message.value);
  },
  toProto(message: MsgBridgeReceive_Project): Uint8Array {
    return MsgBridgeReceive_Project.encode(message).finish();
  },
  toProtoMsg(message: MsgBridgeReceive_Project): MsgBridgeReceive_ProjectProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.Project",
      value: MsgBridgeReceive_Project.encode(message).finish()
    };
  }
};
function createBaseMsgBridgeReceiveResponse(): MsgBridgeReceiveResponse {
  return {
    batchDenom: "",
    projectId: ""
  };
}
export const MsgBridgeReceiveResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgBridgeReceiveResponse",
  encode(message: MsgBridgeReceiveResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },
  fromJSON(object: any): MsgBridgeReceiveResponse {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : ""
    };
  },
  fromPartial(object: Partial<MsgBridgeReceiveResponse>): MsgBridgeReceiveResponse {
    const message = createBaseMsgBridgeReceiveResponse();
    message.batchDenom = object.batchDenom ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
  fromAmino(object: MsgBridgeReceiveResponseAmino): MsgBridgeReceiveResponse {
    const message = createBaseMsgBridgeReceiveResponse();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    return message;
  },
  toAmino(message: MsgBridgeReceiveResponse): MsgBridgeReceiveResponseAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    obj.project_id = message.projectId;
    return obj;
  },
  fromAminoMsg(object: MsgBridgeReceiveResponseAminoMsg): MsgBridgeReceiveResponse {
    return MsgBridgeReceiveResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBridgeReceiveResponseProtoMsg): MsgBridgeReceiveResponse {
    return MsgBridgeReceiveResponse.decode(message.value);
  },
  toProto(message: MsgBridgeReceiveResponse): Uint8Array {
    return MsgBridgeReceiveResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBridgeReceiveResponse): MsgBridgeReceiveResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgBridgeReceiveResponse",
      value: MsgBridgeReceiveResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddClassCreator(): MsgAddClassCreator {
  return {
    authority: "",
    creator: ""
  };
}
export const MsgAddClassCreator = {
  typeUrl: "/regen.ecocredit.v1.MsgAddClassCreator",
  encode(message: MsgAddClassCreator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddClassCreator {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  fromPartial(object: Partial<MsgAddClassCreator>): MsgAddClassCreator {
    const message = createBaseMsgAddClassCreator();
    message.authority = object.authority ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgAddClassCreatorAmino): MsgAddClassCreator {
    const message = createBaseMsgAddClassCreator();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgAddClassCreator): MsgAddClassCreatorAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.creator = message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgAddClassCreatorAminoMsg): MsgAddClassCreator {
    return MsgAddClassCreator.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddClassCreatorProtoMsg): MsgAddClassCreator {
    return MsgAddClassCreator.decode(message.value);
  },
  toProto(message: MsgAddClassCreator): Uint8Array {
    return MsgAddClassCreator.encode(message).finish();
  },
  toProtoMsg(message: MsgAddClassCreator): MsgAddClassCreatorProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgAddClassCreator",
      value: MsgAddClassCreator.encode(message).finish()
    };
  }
};
function createBaseMsgAddClassCreatorResponse(): MsgAddClassCreatorResponse {
  return {};
}
export const MsgAddClassCreatorResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgAddClassCreatorResponse",
  encode(_: MsgAddClassCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddClassCreatorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddClassCreatorResponse>): MsgAddClassCreatorResponse {
    const message = createBaseMsgAddClassCreatorResponse();
    return message;
  },
  fromAmino(_: MsgAddClassCreatorResponseAmino): MsgAddClassCreatorResponse {
    const message = createBaseMsgAddClassCreatorResponse();
    return message;
  },
  toAmino(_: MsgAddClassCreatorResponse): MsgAddClassCreatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddClassCreatorResponseAminoMsg): MsgAddClassCreatorResponse {
    return MsgAddClassCreatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddClassCreatorResponseProtoMsg): MsgAddClassCreatorResponse {
    return MsgAddClassCreatorResponse.decode(message.value);
  },
  toProto(message: MsgAddClassCreatorResponse): Uint8Array {
    return MsgAddClassCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddClassCreatorResponse): MsgAddClassCreatorResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgAddClassCreatorResponse",
      value: MsgAddClassCreatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetClassCreatorAllowlist(): MsgSetClassCreatorAllowlist {
  return {
    authority: "",
    enabled: false
  };
}
export const MsgSetClassCreatorAllowlist = {
  typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist",
  encode(message: MsgSetClassCreatorAllowlist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetClassCreatorAllowlist {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  fromPartial(object: Partial<MsgSetClassCreatorAllowlist>): MsgSetClassCreatorAllowlist {
    const message = createBaseMsgSetClassCreatorAllowlist();
    message.authority = object.authority ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromAmino(object: MsgSetClassCreatorAllowlistAmino): MsgSetClassCreatorAllowlist {
    const message = createBaseMsgSetClassCreatorAllowlist();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message: MsgSetClassCreatorAllowlist): MsgSetClassCreatorAllowlistAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.enabled = message.enabled;
    return obj;
  },
  fromAminoMsg(object: MsgSetClassCreatorAllowlistAminoMsg): MsgSetClassCreatorAllowlist {
    return MsgSetClassCreatorAllowlist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetClassCreatorAllowlistProtoMsg): MsgSetClassCreatorAllowlist {
    return MsgSetClassCreatorAllowlist.decode(message.value);
  },
  toProto(message: MsgSetClassCreatorAllowlist): Uint8Array {
    return MsgSetClassCreatorAllowlist.encode(message).finish();
  },
  toProtoMsg(message: MsgSetClassCreatorAllowlist): MsgSetClassCreatorAllowlistProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist",
      value: MsgSetClassCreatorAllowlist.encode(message).finish()
    };
  }
};
function createBaseMsgSetClassCreatorAllowlistResponse(): MsgSetClassCreatorAllowlistResponse {
  return {};
}
export const MsgSetClassCreatorAllowlistResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlistResponse",
  encode(_: MsgSetClassCreatorAllowlistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetClassCreatorAllowlistResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetClassCreatorAllowlistResponse>): MsgSetClassCreatorAllowlistResponse {
    const message = createBaseMsgSetClassCreatorAllowlistResponse();
    return message;
  },
  fromAmino(_: MsgSetClassCreatorAllowlistResponseAmino): MsgSetClassCreatorAllowlistResponse {
    const message = createBaseMsgSetClassCreatorAllowlistResponse();
    return message;
  },
  toAmino(_: MsgSetClassCreatorAllowlistResponse): MsgSetClassCreatorAllowlistResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetClassCreatorAllowlistResponseAminoMsg): MsgSetClassCreatorAllowlistResponse {
    return MsgSetClassCreatorAllowlistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetClassCreatorAllowlistResponseProtoMsg): MsgSetClassCreatorAllowlistResponse {
    return MsgSetClassCreatorAllowlistResponse.decode(message.value);
  },
  toProto(message: MsgSetClassCreatorAllowlistResponse): Uint8Array {
    return MsgSetClassCreatorAllowlistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetClassCreatorAllowlistResponse): MsgSetClassCreatorAllowlistResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlistResponse",
      value: MsgSetClassCreatorAllowlistResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveClassCreator(): MsgRemoveClassCreator {
  return {
    authority: "",
    creator: ""
  };
}
export const MsgRemoveClassCreator = {
  typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreator",
  encode(message: MsgRemoveClassCreator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveClassCreator {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveClassCreator>): MsgRemoveClassCreator {
    const message = createBaseMsgRemoveClassCreator();
    message.authority = object.authority ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveClassCreatorAmino): MsgRemoveClassCreator {
    const message = createBaseMsgRemoveClassCreator();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgRemoveClassCreator): MsgRemoveClassCreatorAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.creator = message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveClassCreatorAminoMsg): MsgRemoveClassCreator {
    return MsgRemoveClassCreator.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveClassCreatorProtoMsg): MsgRemoveClassCreator {
    return MsgRemoveClassCreator.decode(message.value);
  },
  toProto(message: MsgRemoveClassCreator): Uint8Array {
    return MsgRemoveClassCreator.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveClassCreator): MsgRemoveClassCreatorProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreator",
      value: MsgRemoveClassCreator.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveClassCreatorResponse(): MsgRemoveClassCreatorResponse {
  return {};
}
export const MsgRemoveClassCreatorResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreatorResponse",
  encode(_: MsgRemoveClassCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveClassCreatorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveClassCreatorResponse>): MsgRemoveClassCreatorResponse {
    const message = createBaseMsgRemoveClassCreatorResponse();
    return message;
  },
  fromAmino(_: MsgRemoveClassCreatorResponseAmino): MsgRemoveClassCreatorResponse {
    const message = createBaseMsgRemoveClassCreatorResponse();
    return message;
  },
  toAmino(_: MsgRemoveClassCreatorResponse): MsgRemoveClassCreatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveClassCreatorResponseAminoMsg): MsgRemoveClassCreatorResponse {
    return MsgRemoveClassCreatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveClassCreatorResponseProtoMsg): MsgRemoveClassCreatorResponse {
    return MsgRemoveClassCreatorResponse.decode(message.value);
  },
  toProto(message: MsgRemoveClassCreatorResponse): Uint8Array {
    return MsgRemoveClassCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveClassCreatorResponse): MsgRemoveClassCreatorResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreatorResponse",
      value: MsgRemoveClassCreatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassFee(): MsgUpdateClassFee {
  return {
    authority: "",
    fee: undefined
  };
}
export const MsgUpdateClassFee = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFee",
  encode(message: MsgUpdateClassFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateClassFee {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateClassFee>): MsgUpdateClassFee {
    const message = createBaseMsgUpdateClassFee();
    message.authority = object.authority ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateClassFeeAmino): MsgUpdateClassFee {
    const message = createBaseMsgUpdateClassFee();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgUpdateClassFee): MsgUpdateClassFeeAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassFeeAminoMsg): MsgUpdateClassFee {
    return MsgUpdateClassFee.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassFeeProtoMsg): MsgUpdateClassFee {
    return MsgUpdateClassFee.decode(message.value);
  },
  toProto(message: MsgUpdateClassFee): Uint8Array {
    return MsgUpdateClassFee.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassFee): MsgUpdateClassFeeProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFee",
      value: MsgUpdateClassFee.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassFeeResponse(): MsgUpdateClassFeeResponse {
  return {};
}
export const MsgUpdateClassFeeResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFeeResponse",
  encode(_: MsgUpdateClassFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateClassFeeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateClassFeeResponse>): MsgUpdateClassFeeResponse {
    const message = createBaseMsgUpdateClassFeeResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClassFeeResponseAmino): MsgUpdateClassFeeResponse {
    const message = createBaseMsgUpdateClassFeeResponse();
    return message;
  },
  toAmino(_: MsgUpdateClassFeeResponse): MsgUpdateClassFeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassFeeResponseAminoMsg): MsgUpdateClassFeeResponse {
    return MsgUpdateClassFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassFeeResponseProtoMsg): MsgUpdateClassFeeResponse {
    return MsgUpdateClassFeeResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClassFeeResponse): Uint8Array {
    return MsgUpdateClassFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassFeeResponse): MsgUpdateClassFeeResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFeeResponse",
      value: MsgUpdateClassFeeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddAllowedBridgeChain(): MsgAddAllowedBridgeChain {
  return {
    authority: "",
    chainName: ""
  };
}
export const MsgAddAllowedBridgeChain = {
  typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChain",
  encode(message: MsgAddAllowedBridgeChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.chainName !== "") {
      writer.uint32(18).string(message.chainName);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddAllowedBridgeChain {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : ""
    };
  },
  fromPartial(object: Partial<MsgAddAllowedBridgeChain>): MsgAddAllowedBridgeChain {
    const message = createBaseMsgAddAllowedBridgeChain();
    message.authority = object.authority ?? "";
    message.chainName = object.chainName ?? "";
    return message;
  },
  fromAmino(object: MsgAddAllowedBridgeChainAmino): MsgAddAllowedBridgeChain {
    const message = createBaseMsgAddAllowedBridgeChain();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.chain_name !== undefined && object.chain_name !== null) {
      message.chainName = object.chain_name;
    }
    return message;
  },
  toAmino(message: MsgAddAllowedBridgeChain): MsgAddAllowedBridgeChainAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.chain_name = message.chainName;
    return obj;
  },
  fromAminoMsg(object: MsgAddAllowedBridgeChainAminoMsg): MsgAddAllowedBridgeChain {
    return MsgAddAllowedBridgeChain.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAllowedBridgeChainProtoMsg): MsgAddAllowedBridgeChain {
    return MsgAddAllowedBridgeChain.decode(message.value);
  },
  toProto(message: MsgAddAllowedBridgeChain): Uint8Array {
    return MsgAddAllowedBridgeChain.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAllowedBridgeChain): MsgAddAllowedBridgeChainProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChain",
      value: MsgAddAllowedBridgeChain.encode(message).finish()
    };
  }
};
function createBaseMsgAddAllowedBridgeChainResponse(): MsgAddAllowedBridgeChainResponse {
  return {};
}
export const MsgAddAllowedBridgeChainResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChainResponse",
  encode(_: MsgAddAllowedBridgeChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddAllowedBridgeChainResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddAllowedBridgeChainResponse>): MsgAddAllowedBridgeChainResponse {
    const message = createBaseMsgAddAllowedBridgeChainResponse();
    return message;
  },
  fromAmino(_: MsgAddAllowedBridgeChainResponseAmino): MsgAddAllowedBridgeChainResponse {
    const message = createBaseMsgAddAllowedBridgeChainResponse();
    return message;
  },
  toAmino(_: MsgAddAllowedBridgeChainResponse): MsgAddAllowedBridgeChainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddAllowedBridgeChainResponseAminoMsg): MsgAddAllowedBridgeChainResponse {
    return MsgAddAllowedBridgeChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAllowedBridgeChainResponseProtoMsg): MsgAddAllowedBridgeChainResponse {
    return MsgAddAllowedBridgeChainResponse.decode(message.value);
  },
  toProto(message: MsgAddAllowedBridgeChainResponse): Uint8Array {
    return MsgAddAllowedBridgeChainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAllowedBridgeChainResponse): MsgAddAllowedBridgeChainResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChainResponse",
      value: MsgAddAllowedBridgeChainResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveAllowedBridgeChain(): MsgRemoveAllowedBridgeChain {
  return {
    authority: "",
    chainName: ""
  };
}
export const MsgRemoveAllowedBridgeChain = {
  typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain",
  encode(message: MsgRemoveAllowedBridgeChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.chainName !== "") {
      writer.uint32(18).string(message.chainName);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveAllowedBridgeChain {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveAllowedBridgeChain>): MsgRemoveAllowedBridgeChain {
    const message = createBaseMsgRemoveAllowedBridgeChain();
    message.authority = object.authority ?? "";
    message.chainName = object.chainName ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveAllowedBridgeChainAmino): MsgRemoveAllowedBridgeChain {
    const message = createBaseMsgRemoveAllowedBridgeChain();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.chain_name !== undefined && object.chain_name !== null) {
      message.chainName = object.chain_name;
    }
    return message;
  },
  toAmino(message: MsgRemoveAllowedBridgeChain): MsgRemoveAllowedBridgeChainAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.chain_name = message.chainName;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAllowedBridgeChainAminoMsg): MsgRemoveAllowedBridgeChain {
    return MsgRemoveAllowedBridgeChain.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveAllowedBridgeChainProtoMsg): MsgRemoveAllowedBridgeChain {
    return MsgRemoveAllowedBridgeChain.decode(message.value);
  },
  toProto(message: MsgRemoveAllowedBridgeChain): Uint8Array {
    return MsgRemoveAllowedBridgeChain.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAllowedBridgeChain): MsgRemoveAllowedBridgeChainProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain",
      value: MsgRemoveAllowedBridgeChain.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveAllowedBridgeChainResponse(): MsgRemoveAllowedBridgeChainResponse {
  return {};
}
export const MsgRemoveAllowedBridgeChainResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChainResponse",
  encode(_: MsgRemoveAllowedBridgeChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveAllowedBridgeChainResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveAllowedBridgeChainResponse>): MsgRemoveAllowedBridgeChainResponse {
    const message = createBaseMsgRemoveAllowedBridgeChainResponse();
    return message;
  },
  fromAmino(_: MsgRemoveAllowedBridgeChainResponseAmino): MsgRemoveAllowedBridgeChainResponse {
    const message = createBaseMsgRemoveAllowedBridgeChainResponse();
    return message;
  },
  toAmino(_: MsgRemoveAllowedBridgeChainResponse): MsgRemoveAllowedBridgeChainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAllowedBridgeChainResponseAminoMsg): MsgRemoveAllowedBridgeChainResponse {
    return MsgRemoveAllowedBridgeChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveAllowedBridgeChainResponseProtoMsg): MsgRemoveAllowedBridgeChainResponse {
    return MsgRemoveAllowedBridgeChainResponse.decode(message.value);
  },
  toProto(message: MsgRemoveAllowedBridgeChainResponse): Uint8Array {
    return MsgRemoveAllowedBridgeChainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAllowedBridgeChainResponse): MsgRemoveAllowedBridgeChainResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChainResponse",
      value: MsgRemoveAllowedBridgeChainResponse.encode(message).finish()
    };
  }
};