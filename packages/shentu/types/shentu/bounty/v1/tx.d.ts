import { SeverityLevel } from "./bounty";
import { BinaryWriter } from "../../../binary";
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
export interface MsgCreateProgramResponse {
}
export interface MsgCreateProgramResponseProtoMsg {
    typeUrl: "/shentu.bounty.v1.MsgCreateProgramResponse";
    value: Uint8Array;
}
/** MsgCreateProgramResponse defines the Msg/CreateProgram response type. */
export interface MsgCreateProgramResponseAmino {
}
export interface MsgCreateProgramResponseAminoMsg {
    type: "/shentu.bounty.v1.MsgCreateProgramResponse";
    value: MsgCreateProgramResponseAmino;
}
/** MsgCreateProgramResponse defines the Msg/CreateProgram response type. */
export interface MsgCreateProgramResponseSDKType {
}
/** MsgModifyProgramResponse defines the Msg/ModifyProgram response type. */
export interface MsgEditProgramResponse {
}
export interface MsgEditProgramResponseProtoMsg {
    typeUrl: "/shentu.bounty.v1.MsgEditProgramResponse";
    value: Uint8Array;
}
/** MsgModifyProgramResponse defines the Msg/ModifyProgram response type. */
export interface MsgEditProgramResponseAmino {
}
export interface MsgEditProgramResponseAminoMsg {
    type: "/shentu.bounty.v1.MsgEditProgramResponse";
    value: MsgEditProgramResponseAmino;
}
/** MsgModifyProgramResponse defines the Msg/ModifyProgram response type. */
export interface MsgEditProgramResponseSDKType {
}
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
export interface MsgActivateProgramResponse {
}
export interface MsgActivateProgramResponseProtoMsg {
    typeUrl: "/shentu.bounty.v1.MsgActivateProgramResponse";
    value: Uint8Array;
}
export interface MsgActivateProgramResponseAmino {
}
export interface MsgActivateProgramResponseAminoMsg {
    type: "/shentu.bounty.v1.MsgActivateProgramResponse";
    value: MsgActivateProgramResponseAmino;
}
export interface MsgActivateProgramResponseSDKType {
}
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
export interface MsgCloseProgramResponse {
}
export interface MsgCloseProgramResponseProtoMsg {
    typeUrl: "/shentu.bounty.v1.MsgCloseProgramResponse";
    value: Uint8Array;
}
export interface MsgCloseProgramResponseAmino {
}
export interface MsgCloseProgramResponseAminoMsg {
    type: "/shentu.bounty.v1.MsgCloseProgramResponse";
    value: MsgCloseProgramResponseAmino;
}
export interface MsgCloseProgramResponseSDKType {
}
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
export interface MsgSubmitFindingResponse {
}
export interface MsgSubmitFindingResponseProtoMsg {
    typeUrl: "/shentu.bounty.v1.MsgSubmitFindingResponse";
    value: Uint8Array;
}
/** MsgSubmitFindingResponse defines the MsgSubmitFinding response type. */
export interface MsgSubmitFindingResponseAmino {
}
export interface MsgSubmitFindingResponseAminoMsg {
    type: "/shentu.bounty.v1.MsgSubmitFindingResponse";
    value: MsgSubmitFindingResponseAmino;
}
/** MsgSubmitFindingResponse defines the MsgSubmitFinding response type. */
export interface MsgSubmitFindingResponseSDKType {
}
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
export interface MsgEditFindingResponse {
}
export interface MsgEditFindingResponseProtoMsg {
    typeUrl: "/shentu.bounty.v1.MsgEditFindingResponse";
    value: Uint8Array;
}
/** MsgEditFindingResponse defines the MsgEditFinding response type. */
export interface MsgEditFindingResponseAmino {
}
export interface MsgEditFindingResponseAminoMsg {
    type: "/shentu.bounty.v1.MsgEditFindingResponse";
    value: MsgEditFindingResponseAmino;
}
/** MsgEditFindingResponse defines the MsgEditFinding response type. */
export interface MsgEditFindingResponseSDKType {
}
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
export interface MsgConfirmFindingResponse {
}
export interface MsgConfirmFindingResponseProtoMsg {
    typeUrl: "/shentu.bounty.v1.MsgConfirmFindingResponse";
    value: Uint8Array;
}
/** MsgConfirmFindingResponse defines the Msg/AcceptFinding response type. */
export interface MsgConfirmFindingResponseAmino {
}
export interface MsgConfirmFindingResponseAminoMsg {
    type: "/shentu.bounty.v1.MsgConfirmFindingResponse";
    value: MsgConfirmFindingResponseAmino;
}
/** MsgConfirmFindingResponse defines the Msg/AcceptFinding response type. */
export interface MsgConfirmFindingResponseSDKType {
}
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
export interface MsgActivateFindingResponse {
}
export interface MsgActivateFindingResponseProtoMsg {
    typeUrl: "/shentu.bounty.v1.MsgActivateFindingResponse";
    value: Uint8Array;
}
/** MsgActivateFindingResponse defines the Msg/AcceptFinding response type. */
export interface MsgActivateFindingResponseAmino {
}
export interface MsgActivateFindingResponseAminoMsg {
    type: "/shentu.bounty.v1.MsgActivateFindingResponse";
    value: MsgActivateFindingResponseAmino;
}
/** MsgActivateFindingResponse defines the Msg/AcceptFinding response type. */
export interface MsgActivateFindingResponseSDKType {
}
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
export interface MsgConfirmFindingPaidResponse {
}
export interface MsgConfirmFindingPaidResponseProtoMsg {
    typeUrl: "/shentu.bounty.v1.MsgConfirmFindingPaidResponse";
    value: Uint8Array;
}
/** MsgCloseFindingResponse defines the Msg/CloseFinding response type. */
export interface MsgConfirmFindingPaidResponseAmino {
}
export interface MsgConfirmFindingPaidResponseAminoMsg {
    type: "/shentu.bounty.v1.MsgConfirmFindingPaidResponse";
    value: MsgConfirmFindingPaidResponseAmino;
}
/** MsgCloseFindingResponse defines the Msg/CloseFinding response type. */
export interface MsgConfirmFindingPaidResponseSDKType {
}
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
export interface MsgCloseFindingResponse {
}
export interface MsgCloseFindingResponseProtoMsg {
    typeUrl: "/shentu.bounty.v1.MsgCloseFindingResponse";
    value: Uint8Array;
}
/** MsgCloseFindingResponse defines the Msg/CloseFinding response type. */
export interface MsgCloseFindingResponseAmino {
}
export interface MsgCloseFindingResponseAminoMsg {
    type: "/shentu.bounty.v1.MsgCloseFindingResponse";
    value: MsgCloseFindingResponseAmino;
}
/** MsgCloseFindingResponse defines the Msg/CloseFinding response type. */
export interface MsgCloseFindingResponseSDKType {
}
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
export interface MsgPublishFindingResponse {
}
export interface MsgPublishFindingResponseProtoMsg {
    typeUrl: "/shentu.bounty.v1.MsgPublishFindingResponse";
    value: Uint8Array;
}
/** MsgPublishFindingResponse defines the MsgPublishFinding response type. */
export interface MsgPublishFindingResponseAmino {
}
export interface MsgPublishFindingResponseAminoMsg {
    type: "/shentu.bounty.v1.MsgPublishFindingResponse";
    value: MsgPublishFindingResponseAmino;
}
/** MsgPublishFindingResponse defines the MsgPublishFinding response type. */
export interface MsgPublishFindingResponseSDKType {
}
export declare const MsgCreateProgram: {
    typeUrl: string;
    encode(message: MsgCreateProgram, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateProgram;
    fromPartial(object: Partial<MsgCreateProgram>): MsgCreateProgram;
    fromAmino(object: MsgCreateProgramAmino): MsgCreateProgram;
    toAmino(message: MsgCreateProgram): MsgCreateProgramAmino;
    fromAminoMsg(object: MsgCreateProgramAminoMsg): MsgCreateProgram;
    fromProtoMsg(message: MsgCreateProgramProtoMsg): MsgCreateProgram;
    toProto(message: MsgCreateProgram): Uint8Array;
    toProtoMsg(message: MsgCreateProgram): MsgCreateProgramProtoMsg;
};
export declare const MsgEditProgram: {
    typeUrl: string;
    encode(message: MsgEditProgram, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgEditProgram;
    fromPartial(object: Partial<MsgEditProgram>): MsgEditProgram;
    fromAmino(object: MsgEditProgramAmino): MsgEditProgram;
    toAmino(message: MsgEditProgram): MsgEditProgramAmino;
    fromAminoMsg(object: MsgEditProgramAminoMsg): MsgEditProgram;
    fromProtoMsg(message: MsgEditProgramProtoMsg): MsgEditProgram;
    toProto(message: MsgEditProgram): Uint8Array;
    toProtoMsg(message: MsgEditProgram): MsgEditProgramProtoMsg;
};
export declare const MsgCreateProgramResponse: {
    typeUrl: string;
    encode(_: MsgCreateProgramResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateProgramResponse;
    fromPartial(_: Partial<MsgCreateProgramResponse>): MsgCreateProgramResponse;
    fromAmino(_: MsgCreateProgramResponseAmino): MsgCreateProgramResponse;
    toAmino(_: MsgCreateProgramResponse): MsgCreateProgramResponseAmino;
    fromAminoMsg(object: MsgCreateProgramResponseAminoMsg): MsgCreateProgramResponse;
    fromProtoMsg(message: MsgCreateProgramResponseProtoMsg): MsgCreateProgramResponse;
    toProto(message: MsgCreateProgramResponse): Uint8Array;
    toProtoMsg(message: MsgCreateProgramResponse): MsgCreateProgramResponseProtoMsg;
};
export declare const MsgEditProgramResponse: {
    typeUrl: string;
    encode(_: MsgEditProgramResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgEditProgramResponse;
    fromPartial(_: Partial<MsgEditProgramResponse>): MsgEditProgramResponse;
    fromAmino(_: MsgEditProgramResponseAmino): MsgEditProgramResponse;
    toAmino(_: MsgEditProgramResponse): MsgEditProgramResponseAmino;
    fromAminoMsg(object: MsgEditProgramResponseAminoMsg): MsgEditProgramResponse;
    fromProtoMsg(message: MsgEditProgramResponseProtoMsg): MsgEditProgramResponse;
    toProto(message: MsgEditProgramResponse): Uint8Array;
    toProtoMsg(message: MsgEditProgramResponse): MsgEditProgramResponseProtoMsg;
};
export declare const MsgActivateProgram: {
    typeUrl: string;
    encode(message: MsgActivateProgram, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgActivateProgram;
    fromPartial(object: Partial<MsgActivateProgram>): MsgActivateProgram;
    fromAmino(object: MsgActivateProgramAmino): MsgActivateProgram;
    toAmino(message: MsgActivateProgram): MsgActivateProgramAmino;
    fromAminoMsg(object: MsgActivateProgramAminoMsg): MsgActivateProgram;
    fromProtoMsg(message: MsgActivateProgramProtoMsg): MsgActivateProgram;
    toProto(message: MsgActivateProgram): Uint8Array;
    toProtoMsg(message: MsgActivateProgram): MsgActivateProgramProtoMsg;
};
export declare const MsgActivateProgramResponse: {
    typeUrl: string;
    encode(_: MsgActivateProgramResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgActivateProgramResponse;
    fromPartial(_: Partial<MsgActivateProgramResponse>): MsgActivateProgramResponse;
    fromAmino(_: MsgActivateProgramResponseAmino): MsgActivateProgramResponse;
    toAmino(_: MsgActivateProgramResponse): MsgActivateProgramResponseAmino;
    fromAminoMsg(object: MsgActivateProgramResponseAminoMsg): MsgActivateProgramResponse;
    fromProtoMsg(message: MsgActivateProgramResponseProtoMsg): MsgActivateProgramResponse;
    toProto(message: MsgActivateProgramResponse): Uint8Array;
    toProtoMsg(message: MsgActivateProgramResponse): MsgActivateProgramResponseProtoMsg;
};
export declare const MsgCloseProgram: {
    typeUrl: string;
    encode(message: MsgCloseProgram, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCloseProgram;
    fromPartial(object: Partial<MsgCloseProgram>): MsgCloseProgram;
    fromAmino(object: MsgCloseProgramAmino): MsgCloseProgram;
    toAmino(message: MsgCloseProgram): MsgCloseProgramAmino;
    fromAminoMsg(object: MsgCloseProgramAminoMsg): MsgCloseProgram;
    fromProtoMsg(message: MsgCloseProgramProtoMsg): MsgCloseProgram;
    toProto(message: MsgCloseProgram): Uint8Array;
    toProtoMsg(message: MsgCloseProgram): MsgCloseProgramProtoMsg;
};
export declare const MsgCloseProgramResponse: {
    typeUrl: string;
    encode(_: MsgCloseProgramResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCloseProgramResponse;
    fromPartial(_: Partial<MsgCloseProgramResponse>): MsgCloseProgramResponse;
    fromAmino(_: MsgCloseProgramResponseAmino): MsgCloseProgramResponse;
    toAmino(_: MsgCloseProgramResponse): MsgCloseProgramResponseAmino;
    fromAminoMsg(object: MsgCloseProgramResponseAminoMsg): MsgCloseProgramResponse;
    fromProtoMsg(message: MsgCloseProgramResponseProtoMsg): MsgCloseProgramResponse;
    toProto(message: MsgCloseProgramResponse): Uint8Array;
    toProtoMsg(message: MsgCloseProgramResponse): MsgCloseProgramResponseProtoMsg;
};
export declare const MsgSubmitFinding: {
    typeUrl: string;
    encode(message: MsgSubmitFinding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubmitFinding;
    fromPartial(object: Partial<MsgSubmitFinding>): MsgSubmitFinding;
    fromAmino(object: MsgSubmitFindingAmino): MsgSubmitFinding;
    toAmino(message: MsgSubmitFinding): MsgSubmitFindingAmino;
    fromAminoMsg(object: MsgSubmitFindingAminoMsg): MsgSubmitFinding;
    fromProtoMsg(message: MsgSubmitFindingProtoMsg): MsgSubmitFinding;
    toProto(message: MsgSubmitFinding): Uint8Array;
    toProtoMsg(message: MsgSubmitFinding): MsgSubmitFindingProtoMsg;
};
export declare const MsgSubmitFindingResponse: {
    typeUrl: string;
    encode(_: MsgSubmitFindingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSubmitFindingResponse;
    fromPartial(_: Partial<MsgSubmitFindingResponse>): MsgSubmitFindingResponse;
    fromAmino(_: MsgSubmitFindingResponseAmino): MsgSubmitFindingResponse;
    toAmino(_: MsgSubmitFindingResponse): MsgSubmitFindingResponseAmino;
    fromAminoMsg(object: MsgSubmitFindingResponseAminoMsg): MsgSubmitFindingResponse;
    fromProtoMsg(message: MsgSubmitFindingResponseProtoMsg): MsgSubmitFindingResponse;
    toProto(message: MsgSubmitFindingResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitFindingResponse): MsgSubmitFindingResponseProtoMsg;
};
export declare const MsgEditFinding: {
    typeUrl: string;
    encode(message: MsgEditFinding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgEditFinding;
    fromPartial(object: Partial<MsgEditFinding>): MsgEditFinding;
    fromAmino(object: MsgEditFindingAmino): MsgEditFinding;
    toAmino(message: MsgEditFinding): MsgEditFindingAmino;
    fromAminoMsg(object: MsgEditFindingAminoMsg): MsgEditFinding;
    fromProtoMsg(message: MsgEditFindingProtoMsg): MsgEditFinding;
    toProto(message: MsgEditFinding): Uint8Array;
    toProtoMsg(message: MsgEditFinding): MsgEditFindingProtoMsg;
};
export declare const MsgEditFindingResponse: {
    typeUrl: string;
    encode(_: MsgEditFindingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgEditFindingResponse;
    fromPartial(_: Partial<MsgEditFindingResponse>): MsgEditFindingResponse;
    fromAmino(_: MsgEditFindingResponseAmino): MsgEditFindingResponse;
    toAmino(_: MsgEditFindingResponse): MsgEditFindingResponseAmino;
    fromAminoMsg(object: MsgEditFindingResponseAminoMsg): MsgEditFindingResponse;
    fromProtoMsg(message: MsgEditFindingResponseProtoMsg): MsgEditFindingResponse;
    toProto(message: MsgEditFindingResponse): Uint8Array;
    toProtoMsg(message: MsgEditFindingResponse): MsgEditFindingResponseProtoMsg;
};
export declare const MsgConfirmFinding: {
    typeUrl: string;
    encode(message: MsgConfirmFinding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgConfirmFinding;
    fromPartial(object: Partial<MsgConfirmFinding>): MsgConfirmFinding;
    fromAmino(object: MsgConfirmFindingAmino): MsgConfirmFinding;
    toAmino(message: MsgConfirmFinding): MsgConfirmFindingAmino;
    fromAminoMsg(object: MsgConfirmFindingAminoMsg): MsgConfirmFinding;
    fromProtoMsg(message: MsgConfirmFindingProtoMsg): MsgConfirmFinding;
    toProto(message: MsgConfirmFinding): Uint8Array;
    toProtoMsg(message: MsgConfirmFinding): MsgConfirmFindingProtoMsg;
};
export declare const MsgConfirmFindingResponse: {
    typeUrl: string;
    encode(_: MsgConfirmFindingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgConfirmFindingResponse;
    fromPartial(_: Partial<MsgConfirmFindingResponse>): MsgConfirmFindingResponse;
    fromAmino(_: MsgConfirmFindingResponseAmino): MsgConfirmFindingResponse;
    toAmino(_: MsgConfirmFindingResponse): MsgConfirmFindingResponseAmino;
    fromAminoMsg(object: MsgConfirmFindingResponseAminoMsg): MsgConfirmFindingResponse;
    fromProtoMsg(message: MsgConfirmFindingResponseProtoMsg): MsgConfirmFindingResponse;
    toProto(message: MsgConfirmFindingResponse): Uint8Array;
    toProtoMsg(message: MsgConfirmFindingResponse): MsgConfirmFindingResponseProtoMsg;
};
export declare const MsgActivateFinding: {
    typeUrl: string;
    encode(message: MsgActivateFinding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgActivateFinding;
    fromPartial(object: Partial<MsgActivateFinding>): MsgActivateFinding;
    fromAmino(object: MsgActivateFindingAmino): MsgActivateFinding;
    toAmino(message: MsgActivateFinding): MsgActivateFindingAmino;
    fromAminoMsg(object: MsgActivateFindingAminoMsg): MsgActivateFinding;
    fromProtoMsg(message: MsgActivateFindingProtoMsg): MsgActivateFinding;
    toProto(message: MsgActivateFinding): Uint8Array;
    toProtoMsg(message: MsgActivateFinding): MsgActivateFindingProtoMsg;
};
export declare const MsgActivateFindingResponse: {
    typeUrl: string;
    encode(_: MsgActivateFindingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgActivateFindingResponse;
    fromPartial(_: Partial<MsgActivateFindingResponse>): MsgActivateFindingResponse;
    fromAmino(_: MsgActivateFindingResponseAmino): MsgActivateFindingResponse;
    toAmino(_: MsgActivateFindingResponse): MsgActivateFindingResponseAmino;
    fromAminoMsg(object: MsgActivateFindingResponseAminoMsg): MsgActivateFindingResponse;
    fromProtoMsg(message: MsgActivateFindingResponseProtoMsg): MsgActivateFindingResponse;
    toProto(message: MsgActivateFindingResponse): Uint8Array;
    toProtoMsg(message: MsgActivateFindingResponse): MsgActivateFindingResponseProtoMsg;
};
export declare const MsgConfirmFindingPaid: {
    typeUrl: string;
    encode(message: MsgConfirmFindingPaid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgConfirmFindingPaid;
    fromPartial(object: Partial<MsgConfirmFindingPaid>): MsgConfirmFindingPaid;
    fromAmino(object: MsgConfirmFindingPaidAmino): MsgConfirmFindingPaid;
    toAmino(message: MsgConfirmFindingPaid): MsgConfirmFindingPaidAmino;
    fromAminoMsg(object: MsgConfirmFindingPaidAminoMsg): MsgConfirmFindingPaid;
    fromProtoMsg(message: MsgConfirmFindingPaidProtoMsg): MsgConfirmFindingPaid;
    toProto(message: MsgConfirmFindingPaid): Uint8Array;
    toProtoMsg(message: MsgConfirmFindingPaid): MsgConfirmFindingPaidProtoMsg;
};
export declare const MsgConfirmFindingPaidResponse: {
    typeUrl: string;
    encode(_: MsgConfirmFindingPaidResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgConfirmFindingPaidResponse;
    fromPartial(_: Partial<MsgConfirmFindingPaidResponse>): MsgConfirmFindingPaidResponse;
    fromAmino(_: MsgConfirmFindingPaidResponseAmino): MsgConfirmFindingPaidResponse;
    toAmino(_: MsgConfirmFindingPaidResponse): MsgConfirmFindingPaidResponseAmino;
    fromAminoMsg(object: MsgConfirmFindingPaidResponseAminoMsg): MsgConfirmFindingPaidResponse;
    fromProtoMsg(message: MsgConfirmFindingPaidResponseProtoMsg): MsgConfirmFindingPaidResponse;
    toProto(message: MsgConfirmFindingPaidResponse): Uint8Array;
    toProtoMsg(message: MsgConfirmFindingPaidResponse): MsgConfirmFindingPaidResponseProtoMsg;
};
export declare const MsgCloseFinding: {
    typeUrl: string;
    encode(message: MsgCloseFinding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCloseFinding;
    fromPartial(object: Partial<MsgCloseFinding>): MsgCloseFinding;
    fromAmino(object: MsgCloseFindingAmino): MsgCloseFinding;
    toAmino(message: MsgCloseFinding): MsgCloseFindingAmino;
    fromAminoMsg(object: MsgCloseFindingAminoMsg): MsgCloseFinding;
    fromProtoMsg(message: MsgCloseFindingProtoMsg): MsgCloseFinding;
    toProto(message: MsgCloseFinding): Uint8Array;
    toProtoMsg(message: MsgCloseFinding): MsgCloseFindingProtoMsg;
};
export declare const MsgCloseFindingResponse: {
    typeUrl: string;
    encode(_: MsgCloseFindingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCloseFindingResponse;
    fromPartial(_: Partial<MsgCloseFindingResponse>): MsgCloseFindingResponse;
    fromAmino(_: MsgCloseFindingResponseAmino): MsgCloseFindingResponse;
    toAmino(_: MsgCloseFindingResponse): MsgCloseFindingResponseAmino;
    fromAminoMsg(object: MsgCloseFindingResponseAminoMsg): MsgCloseFindingResponse;
    fromProtoMsg(message: MsgCloseFindingResponseProtoMsg): MsgCloseFindingResponse;
    toProto(message: MsgCloseFindingResponse): Uint8Array;
    toProtoMsg(message: MsgCloseFindingResponse): MsgCloseFindingResponseProtoMsg;
};
export declare const MsgPublishFinding: {
    typeUrl: string;
    encode(message: MsgPublishFinding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPublishFinding;
    fromPartial(object: Partial<MsgPublishFinding>): MsgPublishFinding;
    fromAmino(object: MsgPublishFindingAmino): MsgPublishFinding;
    toAmino(message: MsgPublishFinding): MsgPublishFindingAmino;
    fromAminoMsg(object: MsgPublishFindingAminoMsg): MsgPublishFinding;
    fromProtoMsg(message: MsgPublishFindingProtoMsg): MsgPublishFinding;
    toProto(message: MsgPublishFinding): Uint8Array;
    toProtoMsg(message: MsgPublishFinding): MsgPublishFindingProtoMsg;
};
export declare const MsgPublishFindingResponse: {
    typeUrl: string;
    encode(_: MsgPublishFindingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgPublishFindingResponse;
    fromPartial(_: Partial<MsgPublishFindingResponse>): MsgPublishFindingResponse;
    fromAmino(_: MsgPublishFindingResponseAmino): MsgPublishFindingResponse;
    toAmino(_: MsgPublishFindingResponse): MsgPublishFindingResponseAmino;
    fromAminoMsg(object: MsgPublishFindingResponseAminoMsg): MsgPublishFindingResponse;
    fromProtoMsg(message: MsgPublishFindingResponseProtoMsg): MsgPublishFindingResponse;
    toProto(message: MsgPublishFindingResponse): Uint8Array;
    toProtoMsg(message: MsgPublishFindingResponse): MsgPublishFindingResponseProtoMsg;
};
