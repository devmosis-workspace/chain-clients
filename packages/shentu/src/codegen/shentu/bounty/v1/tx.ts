import { SeverityLevel, severityLevelFromJSON } from "./bounty";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgCreateProgram defines a SDK message for creating a new program. */
export interface MsgCreateProgram {
  programId: string;
  name: string;
  detail: string;
  operatorAddress: string;
}
export interface MsgCreateProgramProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgCreateProgram";
  value: Uint8Array;
}
/** MsgCreateProgram defines a SDK message for creating a new program. */
export interface MsgCreateProgramAmino {
  program_id?: string;
  name?: string;
  detail?: string;
  operator_address?: string;
}
export interface MsgCreateProgramAminoMsg {
  type: "/shentu.bounty.v1.MsgCreateProgram";
  value: MsgCreateProgramAmino;
}
/** MsgCreateProgram defines a SDK message for creating a new program. */
export interface MsgCreateProgramSDKType {
  program_id: string;
  name: string;
  detail: string;
  operator_address: string;
}
/** MsgEditProgram defines a SDK message for editing a program. */
export interface MsgEditProgram {
  programId: string;
  name: string;
  detail: string;
  operatorAddress: string;
}
export interface MsgEditProgramProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgEditProgram";
  value: Uint8Array;
}
/** MsgEditProgram defines a SDK message for editing a program. */
export interface MsgEditProgramAmino {
  program_id?: string;
  name?: string;
  detail?: string;
  operator_address?: string;
}
export interface MsgEditProgramAminoMsg {
  type: "/shentu.bounty.v1.MsgEditProgram";
  value: MsgEditProgramAmino;
}
/** MsgEditProgram defines a SDK message for editing a program. */
export interface MsgEditProgramSDKType {
  program_id: string;
  name: string;
  detail: string;
  operator_address: string;
}
/** MsgCreateProgramResponse defines the Msg/CreateProgram response type. */
export interface MsgCreateProgramResponse {}
export interface MsgCreateProgramResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgCreateProgramResponse";
  value: Uint8Array;
}
/** MsgCreateProgramResponse defines the Msg/CreateProgram response type. */
export interface MsgCreateProgramResponseAmino {}
export interface MsgCreateProgramResponseAminoMsg {
  type: "/shentu.bounty.v1.MsgCreateProgramResponse";
  value: MsgCreateProgramResponseAmino;
}
/** MsgCreateProgramResponse defines the Msg/CreateProgram response type. */
export interface MsgCreateProgramResponseSDKType {}
/** MsgModifyProgramResponse defines the Msg/ModifyProgram response type. */
export interface MsgEditProgramResponse {}
export interface MsgEditProgramResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgEditProgramResponse";
  value: Uint8Array;
}
/** MsgModifyProgramResponse defines the Msg/ModifyProgram response type. */
export interface MsgEditProgramResponseAmino {}
export interface MsgEditProgramResponseAminoMsg {
  type: "/shentu.bounty.v1.MsgEditProgramResponse";
  value: MsgEditProgramResponseAmino;
}
/** MsgModifyProgramResponse defines the Msg/ModifyProgram response type. */
export interface MsgEditProgramResponseSDKType {}
export interface MsgActivateProgram {
  programId: string;
  operatorAddress: string;
}
export interface MsgActivateProgramProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgActivateProgram";
  value: Uint8Array;
}
export interface MsgActivateProgramAmino {
  program_id?: string;
  operator_address?: string;
}
export interface MsgActivateProgramAminoMsg {
  type: "/shentu.bounty.v1.MsgActivateProgram";
  value: MsgActivateProgramAmino;
}
export interface MsgActivateProgramSDKType {
  program_id: string;
  operator_address: string;
}
export interface MsgActivateProgramResponse {}
export interface MsgActivateProgramResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgActivateProgramResponse";
  value: Uint8Array;
}
export interface MsgActivateProgramResponseAmino {}
export interface MsgActivateProgramResponseAminoMsg {
  type: "/shentu.bounty.v1.MsgActivateProgramResponse";
  value: MsgActivateProgramResponseAmino;
}
export interface MsgActivateProgramResponseSDKType {}
export interface MsgCloseProgram {
  programId: string;
  operatorAddress: string;
}
export interface MsgCloseProgramProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgCloseProgram";
  value: Uint8Array;
}
export interface MsgCloseProgramAmino {
  program_id?: string;
  operator_address?: string;
}
export interface MsgCloseProgramAminoMsg {
  type: "/shentu.bounty.v1.MsgCloseProgram";
  value: MsgCloseProgramAmino;
}
export interface MsgCloseProgramSDKType {
  program_id: string;
  operator_address: string;
}
export interface MsgCloseProgramResponse {}
export interface MsgCloseProgramResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgCloseProgramResponse";
  value: Uint8Array;
}
export interface MsgCloseProgramResponseAmino {}
export interface MsgCloseProgramResponseAminoMsg {
  type: "/shentu.bounty.v1.MsgCloseProgramResponse";
  value: MsgCloseProgramResponseAmino;
}
export interface MsgCloseProgramResponseSDKType {}
/** MsgSubmitFinding defines a message to submit a finding. */
export interface MsgSubmitFinding {
  programId: string;
  findingId: string;
  title: string;
  findingHash: string;
  operatorAddress: string;
  severityLevel: SeverityLevel;
  detail: string;
}
export interface MsgSubmitFindingProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgSubmitFinding";
  value: Uint8Array;
}
/** MsgSubmitFinding defines a message to submit a finding. */
export interface MsgSubmitFindingAmino {
  program_id?: string;
  finding_id?: string;
  title?: string;
  finding_hash?: string;
  operator_address?: string;
  severity_level?: SeverityLevel;
  detail?: string;
}
export interface MsgSubmitFindingAminoMsg {
  type: "/shentu.bounty.v1.MsgSubmitFinding";
  value: MsgSubmitFindingAmino;
}
/** MsgSubmitFinding defines a message to submit a finding. */
export interface MsgSubmitFindingSDKType {
  program_id: string;
  finding_id: string;
  title: string;
  finding_hash: string;
  operator_address: string;
  severity_level: SeverityLevel;
  detail: string;
}
/** MsgSubmitFindingResponse defines the MsgSubmitFinding response type. */
export interface MsgSubmitFindingResponse {}
export interface MsgSubmitFindingResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgSubmitFindingResponse";
  value: Uint8Array;
}
/** MsgSubmitFindingResponse defines the MsgSubmitFinding response type. */
export interface MsgSubmitFindingResponseAmino {}
export interface MsgSubmitFindingResponseAminoMsg {
  type: "/shentu.bounty.v1.MsgSubmitFindingResponse";
  value: MsgSubmitFindingResponseAmino;
}
/** MsgSubmitFindingResponse defines the MsgSubmitFinding response type. */
export interface MsgSubmitFindingResponseSDKType {}
/** MsgEditFinding defines a message to edit a finding. */
export interface MsgEditFinding {
  findingId: string;
  title: string;
  findingHash: string;
  operatorAddress: string;
  severityLevel: SeverityLevel;
  detail: string;
  paymentHash: string;
}
export interface MsgEditFindingProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgEditFinding";
  value: Uint8Array;
}
/** MsgEditFinding defines a message to edit a finding. */
export interface MsgEditFindingAmino {
  finding_id?: string;
  title?: string;
  finding_hash?: string;
  operator_address?: string;
  severity_level?: SeverityLevel;
  detail?: string;
  payment_hash?: string;
}
export interface MsgEditFindingAminoMsg {
  type: "/shentu.bounty.v1.MsgEditFinding";
  value: MsgEditFindingAmino;
}
/** MsgEditFinding defines a message to edit a finding. */
export interface MsgEditFindingSDKType {
  finding_id: string;
  title: string;
  finding_hash: string;
  operator_address: string;
  severity_level: SeverityLevel;
  detail: string;
  payment_hash: string;
}
/** MsgEditFindingResponse defines the MsgEditFinding response type. */
export interface MsgEditFindingResponse {}
export interface MsgEditFindingResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgEditFindingResponse";
  value: Uint8Array;
}
/** MsgEditFindingResponse defines the MsgEditFinding response type. */
export interface MsgEditFindingResponseAmino {}
export interface MsgEditFindingResponseAminoMsg {
  type: "/shentu.bounty.v1.MsgEditFindingResponse";
  value: MsgEditFindingResponseAmino;
}
/** MsgEditFindingResponse defines the MsgEditFinding response type. */
export interface MsgEditFindingResponseSDKType {}
/** MsgConfirmFinding defines a message to confirm a finding to an existing finding. */
export interface MsgConfirmFinding {
  findingId: string;
  operatorAddress: string;
  fingerprint: string;
}
export interface MsgConfirmFindingProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgConfirmFinding";
  value: Uint8Array;
}
/** MsgConfirmFinding defines a message to confirm a finding to an existing finding. */
export interface MsgConfirmFindingAmino {
  finding_id?: string;
  operator_address?: string;
  fingerprint?: string;
}
export interface MsgConfirmFindingAminoMsg {
  type: "/shentu.bounty.v1.MsgConfirmFinding";
  value: MsgConfirmFindingAmino;
}
/** MsgConfirmFinding defines a message to confirm a finding to an existing finding. */
export interface MsgConfirmFindingSDKType {
  finding_id: string;
  operator_address: string;
  fingerprint: string;
}
/** MsgConfirmFindingResponse defines the Msg/AcceptFinding response type. */
export interface MsgConfirmFindingResponse {}
export interface MsgConfirmFindingResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgConfirmFindingResponse";
  value: Uint8Array;
}
/** MsgConfirmFindingResponse defines the Msg/AcceptFinding response type. */
export interface MsgConfirmFindingResponseAmino {}
export interface MsgConfirmFindingResponseAminoMsg {
  type: "/shentu.bounty.v1.MsgConfirmFindingResponse";
  value: MsgConfirmFindingResponseAmino;
}
/** MsgConfirmFindingResponse defines the Msg/AcceptFinding response type. */
export interface MsgConfirmFindingResponseSDKType {}
/** MsgActivateFinding defines a message to activate a finding to an existing finding. */
export interface MsgActivateFinding {
  findingId: string;
  operatorAddress: string;
}
export interface MsgActivateFindingProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgActivateFinding";
  value: Uint8Array;
}
/** MsgActivateFinding defines a message to activate a finding to an existing finding. */
export interface MsgActivateFindingAmino {
  finding_id?: string;
  operator_address?: string;
}
export interface MsgActivateFindingAminoMsg {
  type: "/shentu.bounty.v1.MsgActivateFinding";
  value: MsgActivateFindingAmino;
}
/** MsgActivateFinding defines a message to activate a finding to an existing finding. */
export interface MsgActivateFindingSDKType {
  finding_id: string;
  operator_address: string;
}
/** MsgActivateFindingResponse defines the Msg/AcceptFinding response type. */
export interface MsgActivateFindingResponse {}
export interface MsgActivateFindingResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgActivateFindingResponse";
  value: Uint8Array;
}
/** MsgActivateFindingResponse defines the Msg/AcceptFinding response type. */
export interface MsgActivateFindingResponseAmino {}
export interface MsgActivateFindingResponseAminoMsg {
  type: "/shentu.bounty.v1.MsgActivateFindingResponse";
  value: MsgActivateFindingResponseAmino;
}
/** MsgActivateFindingResponse defines the Msg/AcceptFinding response type. */
export interface MsgActivateFindingResponseSDKType {}
/** MsgConfirmFindingPaid defines a message to close a finding to an existing finding. */
export interface MsgConfirmFindingPaid {
  findingId: string;
  operatorAddress: string;
}
export interface MsgConfirmFindingPaidProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgConfirmFindingPaid";
  value: Uint8Array;
}
/** MsgConfirmFindingPaid defines a message to close a finding to an existing finding. */
export interface MsgConfirmFindingPaidAmino {
  finding_id?: string;
  operator_address?: string;
}
export interface MsgConfirmFindingPaidAminoMsg {
  type: "/shentu.bounty.v1.MsgConfirmFindingPaid";
  value: MsgConfirmFindingPaidAmino;
}
/** MsgConfirmFindingPaid defines a message to close a finding to an existing finding. */
export interface MsgConfirmFindingPaidSDKType {
  finding_id: string;
  operator_address: string;
}
/** MsgCloseFindingResponse defines the Msg/CloseFinding response type. */
export interface MsgConfirmFindingPaidResponse {}
export interface MsgConfirmFindingPaidResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgConfirmFindingPaidResponse";
  value: Uint8Array;
}
/** MsgCloseFindingResponse defines the Msg/CloseFinding response type. */
export interface MsgConfirmFindingPaidResponseAmino {}
export interface MsgConfirmFindingPaidResponseAminoMsg {
  type: "/shentu.bounty.v1.MsgConfirmFindingPaidResponse";
  value: MsgConfirmFindingPaidResponseAmino;
}
/** MsgCloseFindingResponse defines the Msg/CloseFinding response type. */
export interface MsgConfirmFindingPaidResponseSDKType {}
/** MsgCloseFinding defines a message to close a finding to an existing finding. */
export interface MsgCloseFinding {
  findingId: string;
  operatorAddress: string;
}
export interface MsgCloseFindingProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgCloseFinding";
  value: Uint8Array;
}
/** MsgCloseFinding defines a message to close a finding to an existing finding. */
export interface MsgCloseFindingAmino {
  finding_id?: string;
  operator_address?: string;
}
export interface MsgCloseFindingAminoMsg {
  type: "/shentu.bounty.v1.MsgCloseFinding";
  value: MsgCloseFindingAmino;
}
/** MsgCloseFinding defines a message to close a finding to an existing finding. */
export interface MsgCloseFindingSDKType {
  finding_id: string;
  operator_address: string;
}
/** MsgCloseFindingResponse defines the Msg/CloseFinding response type. */
export interface MsgCloseFindingResponse {}
export interface MsgCloseFindingResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgCloseFindingResponse";
  value: Uint8Array;
}
/** MsgCloseFindingResponse defines the Msg/CloseFinding response type. */
export interface MsgCloseFindingResponseAmino {}
export interface MsgCloseFindingResponseAminoMsg {
  type: "/shentu.bounty.v1.MsgCloseFindingResponse";
  value: MsgCloseFindingResponseAmino;
}
/** MsgCloseFindingResponse defines the Msg/CloseFinding response type. */
export interface MsgCloseFindingResponseSDKType {}
/** MsgPublishFinding defines a message to publish a finding. */
export interface MsgPublishFinding {
  findingId: string;
  description: string;
  proofOfConcept: string;
  operatorAddress: string;
}
export interface MsgPublishFindingProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgPublishFinding";
  value: Uint8Array;
}
/** MsgPublishFinding defines a message to publish a finding. */
export interface MsgPublishFindingAmino {
  finding_id?: string;
  description?: string;
  proof_of_concept?: string;
  operator_address?: string;
}
export interface MsgPublishFindingAminoMsg {
  type: "/shentu.bounty.v1.MsgPublishFinding";
  value: MsgPublishFindingAmino;
}
/** MsgPublishFinding defines a message to publish a finding. */
export interface MsgPublishFindingSDKType {
  finding_id: string;
  description: string;
  proof_of_concept: string;
  operator_address: string;
}
/** MsgPublishFindingResponse defines the MsgPublishFinding response type. */
export interface MsgPublishFindingResponse {}
export interface MsgPublishFindingResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.MsgPublishFindingResponse";
  value: Uint8Array;
}
/** MsgPublishFindingResponse defines the MsgPublishFinding response type. */
export interface MsgPublishFindingResponseAmino {}
export interface MsgPublishFindingResponseAminoMsg {
  type: "/shentu.bounty.v1.MsgPublishFindingResponse";
  value: MsgPublishFindingResponseAmino;
}
/** MsgPublishFindingResponse defines the MsgPublishFinding response type. */
export interface MsgPublishFindingResponseSDKType {}
function createBaseMsgCreateProgram(): MsgCreateProgram {
  return {
    programId: "",
    name: "",
    detail: "",
    operatorAddress: ""
  };
}
export const MsgCreateProgram = {
  typeUrl: "/shentu.bounty.v1.MsgCreateProgram",
  encode(message: MsgCreateProgram, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.detail !== "") {
      writer.uint32(26).string(message.detail);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(34).string(message.operatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateProgram {
    return {
      programId: isSet(object.programId) ? String(object.programId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      detail: isSet(object.detail) ? String(object.detail) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateProgram>): MsgCreateProgram {
    const message = createBaseMsgCreateProgram();
    message.programId = object.programId ?? "";
    message.name = object.name ?? "";
    message.detail = object.detail ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgCreateProgramAmino): MsgCreateProgram {
    const message = createBaseMsgCreateProgram();
    if (object.program_id !== undefined && object.program_id !== null) {
      message.programId = object.program_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.detail !== undefined && object.detail !== null) {
      message.detail = object.detail;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    return message;
  },
  toAmino(message: MsgCreateProgram): MsgCreateProgramAmino {
    const obj: any = {};
    obj.program_id = message.programId === "" ? undefined : message.programId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.detail = message.detail === "" ? undefined : message.detail;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCreateProgramAminoMsg): MsgCreateProgram {
    return MsgCreateProgram.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProgramProtoMsg): MsgCreateProgram {
    return MsgCreateProgram.decode(message.value);
  },
  toProto(message: MsgCreateProgram): Uint8Array {
    return MsgCreateProgram.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProgram): MsgCreateProgramProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgCreateProgram",
      value: MsgCreateProgram.encode(message).finish()
    };
  }
};
function createBaseMsgEditProgram(): MsgEditProgram {
  return {
    programId: "",
    name: "",
    detail: "",
    operatorAddress: ""
  };
}
export const MsgEditProgram = {
  typeUrl: "/shentu.bounty.v1.MsgEditProgram",
  encode(message: MsgEditProgram, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.detail !== "") {
      writer.uint32(26).string(message.detail);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(34).string(message.operatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgEditProgram {
    return {
      programId: isSet(object.programId) ? String(object.programId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      detail: isSet(object.detail) ? String(object.detail) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgEditProgram>): MsgEditProgram {
    const message = createBaseMsgEditProgram();
    message.programId = object.programId ?? "";
    message.name = object.name ?? "";
    message.detail = object.detail ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgEditProgramAmino): MsgEditProgram {
    const message = createBaseMsgEditProgram();
    if (object.program_id !== undefined && object.program_id !== null) {
      message.programId = object.program_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.detail !== undefined && object.detail !== null) {
      message.detail = object.detail;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    return message;
  },
  toAmino(message: MsgEditProgram): MsgEditProgramAmino {
    const obj: any = {};
    obj.program_id = message.programId === "" ? undefined : message.programId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.detail = message.detail === "" ? undefined : message.detail;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgEditProgramAminoMsg): MsgEditProgram {
    return MsgEditProgram.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditProgramProtoMsg): MsgEditProgram {
    return MsgEditProgram.decode(message.value);
  },
  toProto(message: MsgEditProgram): Uint8Array {
    return MsgEditProgram.encode(message).finish();
  },
  toProtoMsg(message: MsgEditProgram): MsgEditProgramProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgEditProgram",
      value: MsgEditProgram.encode(message).finish()
    };
  }
};
function createBaseMsgCreateProgramResponse(): MsgCreateProgramResponse {
  return {};
}
export const MsgCreateProgramResponse = {
  typeUrl: "/shentu.bounty.v1.MsgCreateProgramResponse",
  encode(_: MsgCreateProgramResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateProgramResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateProgramResponse>): MsgCreateProgramResponse {
    const message = createBaseMsgCreateProgramResponse();
    return message;
  },
  fromAmino(_: MsgCreateProgramResponseAmino): MsgCreateProgramResponse {
    const message = createBaseMsgCreateProgramResponse();
    return message;
  },
  toAmino(_: MsgCreateProgramResponse): MsgCreateProgramResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateProgramResponseAminoMsg): MsgCreateProgramResponse {
    return MsgCreateProgramResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProgramResponseProtoMsg): MsgCreateProgramResponse {
    return MsgCreateProgramResponse.decode(message.value);
  },
  toProto(message: MsgCreateProgramResponse): Uint8Array {
    return MsgCreateProgramResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProgramResponse): MsgCreateProgramResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgCreateProgramResponse",
      value: MsgCreateProgramResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEditProgramResponse(): MsgEditProgramResponse {
  return {};
}
export const MsgEditProgramResponse = {
  typeUrl: "/shentu.bounty.v1.MsgEditProgramResponse",
  encode(_: MsgEditProgramResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgEditProgramResponse {
    return {};
  },
  fromPartial(_: Partial<MsgEditProgramResponse>): MsgEditProgramResponse {
    const message = createBaseMsgEditProgramResponse();
    return message;
  },
  fromAmino(_: MsgEditProgramResponseAmino): MsgEditProgramResponse {
    const message = createBaseMsgEditProgramResponse();
    return message;
  },
  toAmino(_: MsgEditProgramResponse): MsgEditProgramResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditProgramResponseAminoMsg): MsgEditProgramResponse {
    return MsgEditProgramResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditProgramResponseProtoMsg): MsgEditProgramResponse {
    return MsgEditProgramResponse.decode(message.value);
  },
  toProto(message: MsgEditProgramResponse): Uint8Array {
    return MsgEditProgramResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditProgramResponse): MsgEditProgramResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgEditProgramResponse",
      value: MsgEditProgramResponse.encode(message).finish()
    };
  }
};
function createBaseMsgActivateProgram(): MsgActivateProgram {
  return {
    programId: "",
    operatorAddress: ""
  };
}
export const MsgActivateProgram = {
  typeUrl: "/shentu.bounty.v1.MsgActivateProgram",
  encode(message: MsgActivateProgram, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgActivateProgram {
    return {
      programId: isSet(object.programId) ? String(object.programId) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgActivateProgram>): MsgActivateProgram {
    const message = createBaseMsgActivateProgram();
    message.programId = object.programId ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgActivateProgramAmino): MsgActivateProgram {
    const message = createBaseMsgActivateProgram();
    if (object.program_id !== undefined && object.program_id !== null) {
      message.programId = object.program_id;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    return message;
  },
  toAmino(message: MsgActivateProgram): MsgActivateProgramAmino {
    const obj: any = {};
    obj.program_id = message.programId === "" ? undefined : message.programId;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgActivateProgramAminoMsg): MsgActivateProgram {
    return MsgActivateProgram.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateProgramProtoMsg): MsgActivateProgram {
    return MsgActivateProgram.decode(message.value);
  },
  toProto(message: MsgActivateProgram): Uint8Array {
    return MsgActivateProgram.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateProgram): MsgActivateProgramProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgActivateProgram",
      value: MsgActivateProgram.encode(message).finish()
    };
  }
};
function createBaseMsgActivateProgramResponse(): MsgActivateProgramResponse {
  return {};
}
export const MsgActivateProgramResponse = {
  typeUrl: "/shentu.bounty.v1.MsgActivateProgramResponse",
  encode(_: MsgActivateProgramResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgActivateProgramResponse {
    return {};
  },
  fromPartial(_: Partial<MsgActivateProgramResponse>): MsgActivateProgramResponse {
    const message = createBaseMsgActivateProgramResponse();
    return message;
  },
  fromAmino(_: MsgActivateProgramResponseAmino): MsgActivateProgramResponse {
    const message = createBaseMsgActivateProgramResponse();
    return message;
  },
  toAmino(_: MsgActivateProgramResponse): MsgActivateProgramResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgActivateProgramResponseAminoMsg): MsgActivateProgramResponse {
    return MsgActivateProgramResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateProgramResponseProtoMsg): MsgActivateProgramResponse {
    return MsgActivateProgramResponse.decode(message.value);
  },
  toProto(message: MsgActivateProgramResponse): Uint8Array {
    return MsgActivateProgramResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateProgramResponse): MsgActivateProgramResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgActivateProgramResponse",
      value: MsgActivateProgramResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCloseProgram(): MsgCloseProgram {
  return {
    programId: "",
    operatorAddress: ""
  };
}
export const MsgCloseProgram = {
  typeUrl: "/shentu.bounty.v1.MsgCloseProgram",
  encode(message: MsgCloseProgram, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgCloseProgram {
    return {
      programId: isSet(object.programId) ? String(object.programId) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgCloseProgram>): MsgCloseProgram {
    const message = createBaseMsgCloseProgram();
    message.programId = object.programId ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgCloseProgramAmino): MsgCloseProgram {
    const message = createBaseMsgCloseProgram();
    if (object.program_id !== undefined && object.program_id !== null) {
      message.programId = object.program_id;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    return message;
  },
  toAmino(message: MsgCloseProgram): MsgCloseProgramAmino {
    const obj: any = {};
    obj.program_id = message.programId === "" ? undefined : message.programId;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCloseProgramAminoMsg): MsgCloseProgram {
    return MsgCloseProgram.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseProgramProtoMsg): MsgCloseProgram {
    return MsgCloseProgram.decode(message.value);
  },
  toProto(message: MsgCloseProgram): Uint8Array {
    return MsgCloseProgram.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseProgram): MsgCloseProgramProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgCloseProgram",
      value: MsgCloseProgram.encode(message).finish()
    };
  }
};
function createBaseMsgCloseProgramResponse(): MsgCloseProgramResponse {
  return {};
}
export const MsgCloseProgramResponse = {
  typeUrl: "/shentu.bounty.v1.MsgCloseProgramResponse",
  encode(_: MsgCloseProgramResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCloseProgramResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCloseProgramResponse>): MsgCloseProgramResponse {
    const message = createBaseMsgCloseProgramResponse();
    return message;
  },
  fromAmino(_: MsgCloseProgramResponseAmino): MsgCloseProgramResponse {
    const message = createBaseMsgCloseProgramResponse();
    return message;
  },
  toAmino(_: MsgCloseProgramResponse): MsgCloseProgramResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseProgramResponseAminoMsg): MsgCloseProgramResponse {
    return MsgCloseProgramResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseProgramResponseProtoMsg): MsgCloseProgramResponse {
    return MsgCloseProgramResponse.decode(message.value);
  },
  toProto(message: MsgCloseProgramResponse): Uint8Array {
    return MsgCloseProgramResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseProgramResponse): MsgCloseProgramResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgCloseProgramResponse",
      value: MsgCloseProgramResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitFinding(): MsgSubmitFinding {
  return {
    programId: "",
    findingId: "",
    title: "",
    findingHash: "",
    operatorAddress: "",
    severityLevel: 0,
    detail: ""
  };
}
export const MsgSubmitFinding = {
  typeUrl: "/shentu.bounty.v1.MsgSubmitFinding",
  encode(message: MsgSubmitFinding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    if (message.findingId !== "") {
      writer.uint32(18).string(message.findingId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.findingHash !== "") {
      writer.uint32(34).string(message.findingHash);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(42).string(message.operatorAddress);
    }
    if (message.severityLevel !== 0) {
      writer.uint32(48).int32(message.severityLevel);
    }
    if (message.detail !== "") {
      writer.uint32(58).string(message.detail);
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitFinding {
    return {
      programId: isSet(object.programId) ? String(object.programId) : "",
      findingId: isSet(object.findingId) ? String(object.findingId) : "",
      title: isSet(object.title) ? String(object.title) : "",
      findingHash: isSet(object.findingHash) ? String(object.findingHash) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      severityLevel: isSet(object.severityLevel) ? severityLevelFromJSON(object.severityLevel) : -1,
      detail: isSet(object.detail) ? String(object.detail) : ""
    };
  },
  fromPartial(object: Partial<MsgSubmitFinding>): MsgSubmitFinding {
    const message = createBaseMsgSubmitFinding();
    message.programId = object.programId ?? "";
    message.findingId = object.findingId ?? "";
    message.title = object.title ?? "";
    message.findingHash = object.findingHash ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    message.severityLevel = object.severityLevel ?? 0;
    message.detail = object.detail ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitFindingAmino): MsgSubmitFinding {
    const message = createBaseMsgSubmitFinding();
    if (object.program_id !== undefined && object.program_id !== null) {
      message.programId = object.program_id;
    }
    if (object.finding_id !== undefined && object.finding_id !== null) {
      message.findingId = object.finding_id;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.finding_hash !== undefined && object.finding_hash !== null) {
      message.findingHash = object.finding_hash;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.severity_level !== undefined && object.severity_level !== null) {
      message.severityLevel = object.severity_level;
    }
    if (object.detail !== undefined && object.detail !== null) {
      message.detail = object.detail;
    }
    return message;
  },
  toAmino(message: MsgSubmitFinding): MsgSubmitFindingAmino {
    const obj: any = {};
    obj.program_id = message.programId === "" ? undefined : message.programId;
    obj.finding_id = message.findingId === "" ? undefined : message.findingId;
    obj.title = message.title === "" ? undefined : message.title;
    obj.finding_hash = message.findingHash === "" ? undefined : message.findingHash;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.severity_level = message.severityLevel === 0 ? undefined : message.severityLevel;
    obj.detail = message.detail === "" ? undefined : message.detail;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitFindingAminoMsg): MsgSubmitFinding {
    return MsgSubmitFinding.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitFindingProtoMsg): MsgSubmitFinding {
    return MsgSubmitFinding.decode(message.value);
  },
  toProto(message: MsgSubmitFinding): Uint8Array {
    return MsgSubmitFinding.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitFinding): MsgSubmitFindingProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgSubmitFinding",
      value: MsgSubmitFinding.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitFindingResponse(): MsgSubmitFindingResponse {
  return {};
}
export const MsgSubmitFindingResponse = {
  typeUrl: "/shentu.bounty.v1.MsgSubmitFindingResponse",
  encode(_: MsgSubmitFindingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSubmitFindingResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubmitFindingResponse>): MsgSubmitFindingResponse {
    const message = createBaseMsgSubmitFindingResponse();
    return message;
  },
  fromAmino(_: MsgSubmitFindingResponseAmino): MsgSubmitFindingResponse {
    const message = createBaseMsgSubmitFindingResponse();
    return message;
  },
  toAmino(_: MsgSubmitFindingResponse): MsgSubmitFindingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitFindingResponseAminoMsg): MsgSubmitFindingResponse {
    return MsgSubmitFindingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitFindingResponseProtoMsg): MsgSubmitFindingResponse {
    return MsgSubmitFindingResponse.decode(message.value);
  },
  toProto(message: MsgSubmitFindingResponse): Uint8Array {
    return MsgSubmitFindingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitFindingResponse): MsgSubmitFindingResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgSubmitFindingResponse",
      value: MsgSubmitFindingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEditFinding(): MsgEditFinding {
  return {
    findingId: "",
    title: "",
    findingHash: "",
    operatorAddress: "",
    severityLevel: 0,
    detail: "",
    paymentHash: ""
  };
}
export const MsgEditFinding = {
  typeUrl: "/shentu.bounty.v1.MsgEditFinding",
  encode(message: MsgEditFinding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.findingId !== "") {
      writer.uint32(10).string(message.findingId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.findingHash !== "") {
      writer.uint32(26).string(message.findingHash);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(34).string(message.operatorAddress);
    }
    if (message.severityLevel !== 0) {
      writer.uint32(40).int32(message.severityLevel);
    }
    if (message.detail !== "") {
      writer.uint32(50).string(message.detail);
    }
    if (message.paymentHash !== "") {
      writer.uint32(58).string(message.paymentHash);
    }
    return writer;
  },
  fromJSON(object: any): MsgEditFinding {
    return {
      findingId: isSet(object.findingId) ? String(object.findingId) : "",
      title: isSet(object.title) ? String(object.title) : "",
      findingHash: isSet(object.findingHash) ? String(object.findingHash) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      severityLevel: isSet(object.severityLevel) ? severityLevelFromJSON(object.severityLevel) : -1,
      detail: isSet(object.detail) ? String(object.detail) : "",
      paymentHash: isSet(object.paymentHash) ? String(object.paymentHash) : ""
    };
  },
  fromPartial(object: Partial<MsgEditFinding>): MsgEditFinding {
    const message = createBaseMsgEditFinding();
    message.findingId = object.findingId ?? "";
    message.title = object.title ?? "";
    message.findingHash = object.findingHash ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    message.severityLevel = object.severityLevel ?? 0;
    message.detail = object.detail ?? "";
    message.paymentHash = object.paymentHash ?? "";
    return message;
  },
  fromAmino(object: MsgEditFindingAmino): MsgEditFinding {
    const message = createBaseMsgEditFinding();
    if (object.finding_id !== undefined && object.finding_id !== null) {
      message.findingId = object.finding_id;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.finding_hash !== undefined && object.finding_hash !== null) {
      message.findingHash = object.finding_hash;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.severity_level !== undefined && object.severity_level !== null) {
      message.severityLevel = object.severity_level;
    }
    if (object.detail !== undefined && object.detail !== null) {
      message.detail = object.detail;
    }
    if (object.payment_hash !== undefined && object.payment_hash !== null) {
      message.paymentHash = object.payment_hash;
    }
    return message;
  },
  toAmino(message: MsgEditFinding): MsgEditFindingAmino {
    const obj: any = {};
    obj.finding_id = message.findingId === "" ? undefined : message.findingId;
    obj.title = message.title === "" ? undefined : message.title;
    obj.finding_hash = message.findingHash === "" ? undefined : message.findingHash;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.severity_level = message.severityLevel === 0 ? undefined : message.severityLevel;
    obj.detail = message.detail === "" ? undefined : message.detail;
    obj.payment_hash = message.paymentHash === "" ? undefined : message.paymentHash;
    return obj;
  },
  fromAminoMsg(object: MsgEditFindingAminoMsg): MsgEditFinding {
    return MsgEditFinding.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditFindingProtoMsg): MsgEditFinding {
    return MsgEditFinding.decode(message.value);
  },
  toProto(message: MsgEditFinding): Uint8Array {
    return MsgEditFinding.encode(message).finish();
  },
  toProtoMsg(message: MsgEditFinding): MsgEditFindingProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgEditFinding",
      value: MsgEditFinding.encode(message).finish()
    };
  }
};
function createBaseMsgEditFindingResponse(): MsgEditFindingResponse {
  return {};
}
export const MsgEditFindingResponse = {
  typeUrl: "/shentu.bounty.v1.MsgEditFindingResponse",
  encode(_: MsgEditFindingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgEditFindingResponse {
    return {};
  },
  fromPartial(_: Partial<MsgEditFindingResponse>): MsgEditFindingResponse {
    const message = createBaseMsgEditFindingResponse();
    return message;
  },
  fromAmino(_: MsgEditFindingResponseAmino): MsgEditFindingResponse {
    const message = createBaseMsgEditFindingResponse();
    return message;
  },
  toAmino(_: MsgEditFindingResponse): MsgEditFindingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditFindingResponseAminoMsg): MsgEditFindingResponse {
    return MsgEditFindingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditFindingResponseProtoMsg): MsgEditFindingResponse {
    return MsgEditFindingResponse.decode(message.value);
  },
  toProto(message: MsgEditFindingResponse): Uint8Array {
    return MsgEditFindingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditFindingResponse): MsgEditFindingResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgEditFindingResponse",
      value: MsgEditFindingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmFinding(): MsgConfirmFinding {
  return {
    findingId: "",
    operatorAddress: "",
    fingerprint: ""
  };
}
export const MsgConfirmFinding = {
  typeUrl: "/shentu.bounty.v1.MsgConfirmFinding",
  encode(message: MsgConfirmFinding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.findingId !== "") {
      writer.uint32(10).string(message.findingId);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    if (message.fingerprint !== "") {
      writer.uint32(26).string(message.fingerprint);
    }
    return writer;
  },
  fromJSON(object: any): MsgConfirmFinding {
    return {
      findingId: isSet(object.findingId) ? String(object.findingId) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      fingerprint: isSet(object.fingerprint) ? String(object.fingerprint) : ""
    };
  },
  fromPartial(object: Partial<MsgConfirmFinding>): MsgConfirmFinding {
    const message = createBaseMsgConfirmFinding();
    message.findingId = object.findingId ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmFindingAmino): MsgConfirmFinding {
    const message = createBaseMsgConfirmFinding();
    if (object.finding_id !== undefined && object.finding_id !== null) {
      message.findingId = object.finding_id;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.fingerprint !== undefined && object.fingerprint !== null) {
      message.fingerprint = object.fingerprint;
    }
    return message;
  },
  toAmino(message: MsgConfirmFinding): MsgConfirmFindingAmino {
    const obj: any = {};
    obj.finding_id = message.findingId === "" ? undefined : message.findingId;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.fingerprint = message.fingerprint === "" ? undefined : message.fingerprint;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmFindingAminoMsg): MsgConfirmFinding {
    return MsgConfirmFinding.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmFindingProtoMsg): MsgConfirmFinding {
    return MsgConfirmFinding.decode(message.value);
  },
  toProto(message: MsgConfirmFinding): Uint8Array {
    return MsgConfirmFinding.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmFinding): MsgConfirmFindingProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgConfirmFinding",
      value: MsgConfirmFinding.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmFindingResponse(): MsgConfirmFindingResponse {
  return {};
}
export const MsgConfirmFindingResponse = {
  typeUrl: "/shentu.bounty.v1.MsgConfirmFindingResponse",
  encode(_: MsgConfirmFindingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgConfirmFindingResponse {
    return {};
  },
  fromPartial(_: Partial<MsgConfirmFindingResponse>): MsgConfirmFindingResponse {
    const message = createBaseMsgConfirmFindingResponse();
    return message;
  },
  fromAmino(_: MsgConfirmFindingResponseAmino): MsgConfirmFindingResponse {
    const message = createBaseMsgConfirmFindingResponse();
    return message;
  },
  toAmino(_: MsgConfirmFindingResponse): MsgConfirmFindingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmFindingResponseAminoMsg): MsgConfirmFindingResponse {
    return MsgConfirmFindingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmFindingResponseProtoMsg): MsgConfirmFindingResponse {
    return MsgConfirmFindingResponse.decode(message.value);
  },
  toProto(message: MsgConfirmFindingResponse): Uint8Array {
    return MsgConfirmFindingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmFindingResponse): MsgConfirmFindingResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgConfirmFindingResponse",
      value: MsgConfirmFindingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgActivateFinding(): MsgActivateFinding {
  return {
    findingId: "",
    operatorAddress: ""
  };
}
export const MsgActivateFinding = {
  typeUrl: "/shentu.bounty.v1.MsgActivateFinding",
  encode(message: MsgActivateFinding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.findingId !== "") {
      writer.uint32(10).string(message.findingId);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgActivateFinding {
    return {
      findingId: isSet(object.findingId) ? String(object.findingId) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgActivateFinding>): MsgActivateFinding {
    const message = createBaseMsgActivateFinding();
    message.findingId = object.findingId ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgActivateFindingAmino): MsgActivateFinding {
    const message = createBaseMsgActivateFinding();
    if (object.finding_id !== undefined && object.finding_id !== null) {
      message.findingId = object.finding_id;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    return message;
  },
  toAmino(message: MsgActivateFinding): MsgActivateFindingAmino {
    const obj: any = {};
    obj.finding_id = message.findingId === "" ? undefined : message.findingId;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgActivateFindingAminoMsg): MsgActivateFinding {
    return MsgActivateFinding.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateFindingProtoMsg): MsgActivateFinding {
    return MsgActivateFinding.decode(message.value);
  },
  toProto(message: MsgActivateFinding): Uint8Array {
    return MsgActivateFinding.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateFinding): MsgActivateFindingProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgActivateFinding",
      value: MsgActivateFinding.encode(message).finish()
    };
  }
};
function createBaseMsgActivateFindingResponse(): MsgActivateFindingResponse {
  return {};
}
export const MsgActivateFindingResponse = {
  typeUrl: "/shentu.bounty.v1.MsgActivateFindingResponse",
  encode(_: MsgActivateFindingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgActivateFindingResponse {
    return {};
  },
  fromPartial(_: Partial<MsgActivateFindingResponse>): MsgActivateFindingResponse {
    const message = createBaseMsgActivateFindingResponse();
    return message;
  },
  fromAmino(_: MsgActivateFindingResponseAmino): MsgActivateFindingResponse {
    const message = createBaseMsgActivateFindingResponse();
    return message;
  },
  toAmino(_: MsgActivateFindingResponse): MsgActivateFindingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgActivateFindingResponseAminoMsg): MsgActivateFindingResponse {
    return MsgActivateFindingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateFindingResponseProtoMsg): MsgActivateFindingResponse {
    return MsgActivateFindingResponse.decode(message.value);
  },
  toProto(message: MsgActivateFindingResponse): Uint8Array {
    return MsgActivateFindingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateFindingResponse): MsgActivateFindingResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgActivateFindingResponse",
      value: MsgActivateFindingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmFindingPaid(): MsgConfirmFindingPaid {
  return {
    findingId: "",
    operatorAddress: ""
  };
}
export const MsgConfirmFindingPaid = {
  typeUrl: "/shentu.bounty.v1.MsgConfirmFindingPaid",
  encode(message: MsgConfirmFindingPaid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.findingId !== "") {
      writer.uint32(10).string(message.findingId);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgConfirmFindingPaid {
    return {
      findingId: isSet(object.findingId) ? String(object.findingId) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgConfirmFindingPaid>): MsgConfirmFindingPaid {
    const message = createBaseMsgConfirmFindingPaid();
    message.findingId = object.findingId ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmFindingPaidAmino): MsgConfirmFindingPaid {
    const message = createBaseMsgConfirmFindingPaid();
    if (object.finding_id !== undefined && object.finding_id !== null) {
      message.findingId = object.finding_id;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    return message;
  },
  toAmino(message: MsgConfirmFindingPaid): MsgConfirmFindingPaidAmino {
    const obj: any = {};
    obj.finding_id = message.findingId === "" ? undefined : message.findingId;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmFindingPaidAminoMsg): MsgConfirmFindingPaid {
    return MsgConfirmFindingPaid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmFindingPaidProtoMsg): MsgConfirmFindingPaid {
    return MsgConfirmFindingPaid.decode(message.value);
  },
  toProto(message: MsgConfirmFindingPaid): Uint8Array {
    return MsgConfirmFindingPaid.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmFindingPaid): MsgConfirmFindingPaidProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgConfirmFindingPaid",
      value: MsgConfirmFindingPaid.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmFindingPaidResponse(): MsgConfirmFindingPaidResponse {
  return {};
}
export const MsgConfirmFindingPaidResponse = {
  typeUrl: "/shentu.bounty.v1.MsgConfirmFindingPaidResponse",
  encode(_: MsgConfirmFindingPaidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgConfirmFindingPaidResponse {
    return {};
  },
  fromPartial(_: Partial<MsgConfirmFindingPaidResponse>): MsgConfirmFindingPaidResponse {
    const message = createBaseMsgConfirmFindingPaidResponse();
    return message;
  },
  fromAmino(_: MsgConfirmFindingPaidResponseAmino): MsgConfirmFindingPaidResponse {
    const message = createBaseMsgConfirmFindingPaidResponse();
    return message;
  },
  toAmino(_: MsgConfirmFindingPaidResponse): MsgConfirmFindingPaidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmFindingPaidResponseAminoMsg): MsgConfirmFindingPaidResponse {
    return MsgConfirmFindingPaidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmFindingPaidResponseProtoMsg): MsgConfirmFindingPaidResponse {
    return MsgConfirmFindingPaidResponse.decode(message.value);
  },
  toProto(message: MsgConfirmFindingPaidResponse): Uint8Array {
    return MsgConfirmFindingPaidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmFindingPaidResponse): MsgConfirmFindingPaidResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgConfirmFindingPaidResponse",
      value: MsgConfirmFindingPaidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCloseFinding(): MsgCloseFinding {
  return {
    findingId: "",
    operatorAddress: ""
  };
}
export const MsgCloseFinding = {
  typeUrl: "/shentu.bounty.v1.MsgCloseFinding",
  encode(message: MsgCloseFinding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.findingId !== "") {
      writer.uint32(10).string(message.findingId);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgCloseFinding {
    return {
      findingId: isSet(object.findingId) ? String(object.findingId) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgCloseFinding>): MsgCloseFinding {
    const message = createBaseMsgCloseFinding();
    message.findingId = object.findingId ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgCloseFindingAmino): MsgCloseFinding {
    const message = createBaseMsgCloseFinding();
    if (object.finding_id !== undefined && object.finding_id !== null) {
      message.findingId = object.finding_id;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    return message;
  },
  toAmino(message: MsgCloseFinding): MsgCloseFindingAmino {
    const obj: any = {};
    obj.finding_id = message.findingId === "" ? undefined : message.findingId;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCloseFindingAminoMsg): MsgCloseFinding {
    return MsgCloseFinding.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseFindingProtoMsg): MsgCloseFinding {
    return MsgCloseFinding.decode(message.value);
  },
  toProto(message: MsgCloseFinding): Uint8Array {
    return MsgCloseFinding.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseFinding): MsgCloseFindingProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgCloseFinding",
      value: MsgCloseFinding.encode(message).finish()
    };
  }
};
function createBaseMsgCloseFindingResponse(): MsgCloseFindingResponse {
  return {};
}
export const MsgCloseFindingResponse = {
  typeUrl: "/shentu.bounty.v1.MsgCloseFindingResponse",
  encode(_: MsgCloseFindingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCloseFindingResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCloseFindingResponse>): MsgCloseFindingResponse {
    const message = createBaseMsgCloseFindingResponse();
    return message;
  },
  fromAmino(_: MsgCloseFindingResponseAmino): MsgCloseFindingResponse {
    const message = createBaseMsgCloseFindingResponse();
    return message;
  },
  toAmino(_: MsgCloseFindingResponse): MsgCloseFindingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseFindingResponseAminoMsg): MsgCloseFindingResponse {
    return MsgCloseFindingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseFindingResponseProtoMsg): MsgCloseFindingResponse {
    return MsgCloseFindingResponse.decode(message.value);
  },
  toProto(message: MsgCloseFindingResponse): Uint8Array {
    return MsgCloseFindingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseFindingResponse): MsgCloseFindingResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgCloseFindingResponse",
      value: MsgCloseFindingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPublishFinding(): MsgPublishFinding {
  return {
    findingId: "",
    description: "",
    proofOfConcept: "",
    operatorAddress: ""
  };
}
export const MsgPublishFinding = {
  typeUrl: "/shentu.bounty.v1.MsgPublishFinding",
  encode(message: MsgPublishFinding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.findingId !== "") {
      writer.uint32(10).string(message.findingId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.proofOfConcept !== "") {
      writer.uint32(26).string(message.proofOfConcept);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(34).string(message.operatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgPublishFinding {
    return {
      findingId: isSet(object.findingId) ? String(object.findingId) : "",
      description: isSet(object.description) ? String(object.description) : "",
      proofOfConcept: isSet(object.proofOfConcept) ? String(object.proofOfConcept) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgPublishFinding>): MsgPublishFinding {
    const message = createBaseMsgPublishFinding();
    message.findingId = object.findingId ?? "";
    message.description = object.description ?? "";
    message.proofOfConcept = object.proofOfConcept ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgPublishFindingAmino): MsgPublishFinding {
    const message = createBaseMsgPublishFinding();
    if (object.finding_id !== undefined && object.finding_id !== null) {
      message.findingId = object.finding_id;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.proof_of_concept !== undefined && object.proof_of_concept !== null) {
      message.proofOfConcept = object.proof_of_concept;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    return message;
  },
  toAmino(message: MsgPublishFinding): MsgPublishFindingAmino {
    const obj: any = {};
    obj.finding_id = message.findingId === "" ? undefined : message.findingId;
    obj.description = message.description === "" ? undefined : message.description;
    obj.proof_of_concept = message.proofOfConcept === "" ? undefined : message.proofOfConcept;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgPublishFindingAminoMsg): MsgPublishFinding {
    return MsgPublishFinding.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPublishFindingProtoMsg): MsgPublishFinding {
    return MsgPublishFinding.decode(message.value);
  },
  toProto(message: MsgPublishFinding): Uint8Array {
    return MsgPublishFinding.encode(message).finish();
  },
  toProtoMsg(message: MsgPublishFinding): MsgPublishFindingProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgPublishFinding",
      value: MsgPublishFinding.encode(message).finish()
    };
  }
};
function createBaseMsgPublishFindingResponse(): MsgPublishFindingResponse {
  return {};
}
export const MsgPublishFindingResponse = {
  typeUrl: "/shentu.bounty.v1.MsgPublishFindingResponse",
  encode(_: MsgPublishFindingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgPublishFindingResponse {
    return {};
  },
  fromPartial(_: Partial<MsgPublishFindingResponse>): MsgPublishFindingResponse {
    const message = createBaseMsgPublishFindingResponse();
    return message;
  },
  fromAmino(_: MsgPublishFindingResponseAmino): MsgPublishFindingResponse {
    const message = createBaseMsgPublishFindingResponse();
    return message;
  },
  toAmino(_: MsgPublishFindingResponse): MsgPublishFindingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPublishFindingResponseAminoMsg): MsgPublishFindingResponse {
    return MsgPublishFindingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPublishFindingResponseProtoMsg): MsgPublishFindingResponse {
    return MsgPublishFindingResponse.decode(message.value);
  },
  toProto(message: MsgPublishFindingResponse): Uint8Array {
    return MsgPublishFindingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPublishFindingResponse): MsgPublishFindingResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.MsgPublishFindingResponse",
      value: MsgPublishFindingResponse.encode(message).finish()
    };
  }
};