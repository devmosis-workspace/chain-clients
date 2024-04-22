import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization1 } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorizationProtoMsg as DepositDeploymentAuthorization1ProtoMsg } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorizationSDKType as DepositDeploymentAuthorization1SDKType } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization2 } from "../../../akash/deployment/v1beta2/authz";
import { DepositDeploymentAuthorizationProtoMsg as DepositDeploymentAuthorization2ProtoMsg } from "../../../akash/deployment/v1beta2/authz";
import { DepositDeploymentAuthorizationSDKType as DepositDeploymentAuthorization2SDKType } from "../../../akash/deployment/v1beta2/authz";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization3 } from "../../../akash/deployment/v1beta3/authz";
import { DepositDeploymentAuthorizationProtoMsg as DepositDeploymentAuthorization3ProtoMsg } from "../../../akash/deployment/v1beta3/authz";
import { DepositDeploymentAuthorizationSDKType as DepositDeploymentAuthorization3SDKType } from "../../../akash/deployment/v1beta3/authz";
import { SendAuthorization, SendAuthorizationProtoMsg, SendAuthorizationSDKType } from "../../bank/v1beta1/authz";
import { StakeAuthorization, StakeAuthorizationProtoMsg, StakeAuthorizationSDKType } from "../../staking/v1beta1/authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
    $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
    /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
    msg: string;
}
export interface GenericAuthorizationProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization";
    value: Uint8Array;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationAmino {
    /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
    msg?: string;
}
export interface GenericAuthorizationAminoMsg {
    type: "cosmos-sdk/GenericAuthorization";
    value: GenericAuthorizationAmino;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationSDKType {
    $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
    msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
    authorization?: (GenericAuthorization & DepositDeploymentAuthorization1 & DepositDeploymentAuthorization2 & DepositDeploymentAuthorization3 & SendAuthorization & StakeAuthorization & Any) | undefined;
    expiration: Timestamp;
}
export interface GrantProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.Grant";
    value: Uint8Array;
}
export type GrantEncoded = Omit<Grant, "authorization"> & {
    authorization?: GenericAuthorizationProtoMsg | DepositDeploymentAuthorization1ProtoMsg | DepositDeploymentAuthorization2ProtoMsg | DepositDeploymentAuthorization3ProtoMsg | SendAuthorizationProtoMsg | StakeAuthorizationProtoMsg | AnyProtoMsg | undefined;
};
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantAmino {
    authorization?: AnyAmino;
    expiration?: string;
}
export interface GrantAminoMsg {
    type: "cosmos-sdk/Grant";
    value: GrantAmino;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantSDKType {
    authorization?: GenericAuthorizationSDKType | DepositDeploymentAuthorization1SDKType | DepositDeploymentAuthorization2SDKType | DepositDeploymentAuthorization3SDKType | SendAuthorizationSDKType | StakeAuthorizationSDKType | AnySDKType | undefined;
    expiration: TimestampSDKType;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GrantAuthorization {
    granter: string;
    grantee: string;
    authorization?: (GenericAuthorization & DepositDeploymentAuthorization1 & DepositDeploymentAuthorization2 & DepositDeploymentAuthorization3 & SendAuthorization & StakeAuthorization & Any) | undefined;
    expiration: Timestamp;
}
export interface GrantAuthorizationProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization";
    value: Uint8Array;
}
export type GrantAuthorizationEncoded = Omit<GrantAuthorization, "authorization"> & {
    authorization?: GenericAuthorizationProtoMsg | DepositDeploymentAuthorization1ProtoMsg | DepositDeploymentAuthorization2ProtoMsg | DepositDeploymentAuthorization3ProtoMsg | SendAuthorizationProtoMsg | StakeAuthorizationProtoMsg | AnyProtoMsg | undefined;
};
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GrantAuthorizationAmino {
    granter?: string;
    grantee?: string;
    authorization?: AnyAmino;
    expiration?: string;
}
export interface GrantAuthorizationAminoMsg {
    type: "cosmos-sdk/GrantAuthorization";
    value: GrantAuthorizationAmino;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GrantAuthorizationSDKType {
    granter: string;
    grantee: string;
    authorization?: GenericAuthorizationSDKType | DepositDeploymentAuthorization1SDKType | DepositDeploymentAuthorization2SDKType | DepositDeploymentAuthorization3SDKType | SendAuthorizationSDKType | StakeAuthorizationSDKType | AnySDKType | undefined;
    expiration: TimestampSDKType;
}
export declare const GenericAuthorization: {
    typeUrl: string;
    encode(message: GenericAuthorization, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenericAuthorization;
    fromPartial(object: Partial<GenericAuthorization>): GenericAuthorization;
    fromAmino(object: GenericAuthorizationAmino): GenericAuthorization;
    toAmino(message: GenericAuthorization): GenericAuthorizationAmino;
    fromAminoMsg(object: GenericAuthorizationAminoMsg): GenericAuthorization;
    toAminoMsg(message: GenericAuthorization): GenericAuthorizationAminoMsg;
    fromProtoMsg(message: GenericAuthorizationProtoMsg): GenericAuthorization;
    toProto(message: GenericAuthorization): Uint8Array;
    toProtoMsg(message: GenericAuthorization): GenericAuthorizationProtoMsg;
};
export declare const Grant: {
    typeUrl: string;
    encode(message: Grant, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Grant;
    fromPartial(object: Partial<Grant>): Grant;
    fromAmino(object: GrantAmino): Grant;
    toAmino(message: Grant): GrantAmino;
    fromAminoMsg(object: GrantAminoMsg): Grant;
    toAminoMsg(message: Grant): GrantAminoMsg;
    fromProtoMsg(message: GrantProtoMsg): Grant;
    toProto(message: Grant): Uint8Array;
    toProtoMsg(message: Grant): GrantProtoMsg;
};
export declare const GrantAuthorization: {
    typeUrl: string;
    encode(message: GrantAuthorization, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GrantAuthorization;
    fromPartial(object: Partial<GrantAuthorization>): GrantAuthorization;
    fromAmino(object: GrantAuthorizationAmino): GrantAuthorization;
    toAmino(message: GrantAuthorization): GrantAuthorizationAmino;
    fromAminoMsg(object: GrantAuthorizationAminoMsg): GrantAuthorization;
    toAminoMsg(message: GrantAuthorization): GrantAuthorizationAminoMsg;
    fromProtoMsg(message: GrantAuthorizationProtoMsg): GrantAuthorization;
    toProto(message: GrantAuthorization): Uint8Array;
    toProtoMsg(message: GrantAuthorization): GrantAuthorizationProtoMsg;
};
export declare const Authorization_InterfaceDecoder: (input: BinaryReader | Uint8Array) => DepositDeploymentAuthorization1 | DepositDeploymentAuthorization2 | DepositDeploymentAuthorization3 | GenericAuthorization | SendAuthorization | StakeAuthorization | Any;
export declare const Authorization_FromAmino: (content: AnyAmino) => Any;
export declare const Authorization_ToAmino: (content: Any) => AnyAmino;
