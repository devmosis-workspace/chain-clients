import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryWriter } from "../../../binary";
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface Plan {
    /**
     * Sets the name for the upgrade. This name will be used by the upgraded
     * version of the software to apply any special "on-upgrade" commands during
     * the first BeginBlock method after the upgrade is applied. It is also used
     * to detect whether a software version can handle a given upgrade. If no
     * upgrade handler with this name has been set in the software, it will be
     * assumed that the software is out-of-date when the upgrade Time or Height is
     * reached and the software will exit.
     */
    name: string;
    /**
     * The time after which the upgrade must be performed.
     * Leave set to its zero value to use a pre-defined Height instead.
     */
    time: Timestamp;
    /**
     * The height at which the upgrade must be performed.
     * Only used if Time is not set.
     */
    height: bigint;
    /**
     * Any application specific upgrade info to be included on-chain
     * such as a git commit that validators could automatically upgrade to
     */
    info: string;
    /**
     * IBC-enabled chains can opt-in to including the upgraded client state in its upgrade plan
     * This will make the chain commit to the correct upgraded (self) client state before the upgrade occurs,
     * so that connecting chains can verify that the new upgraded client is valid by verifying a proof on the
     * previous version of the chain.
     * This will allow IBC connections to persist smoothly across planned chain upgrades
     */
    upgradedClientState: Any;
}
export interface PlanProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.Plan";
    value: Uint8Array;
}
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface PlanAmino {
    /**
     * Sets the name for the upgrade. This name will be used by the upgraded
     * version of the software to apply any special "on-upgrade" commands during
     * the first BeginBlock method after the upgrade is applied. It is also used
     * to detect whether a software version can handle a given upgrade. If no
     * upgrade handler with this name has been set in the software, it will be
     * assumed that the software is out-of-date when the upgrade Time or Height is
     * reached and the software will exit.
     */
    name: string;
    /**
     * The time after which the upgrade must be performed.
     * Leave set to its zero value to use a pre-defined Height instead.
     */
    time?: TimestampAmino;
    /**
     * The height at which the upgrade must be performed.
     * Only used if Time is not set.
     */
    height: string;
    /**
     * Any application specific upgrade info to be included on-chain
     * such as a git commit that validators could automatically upgrade to
     */
    info: string;
    /**
     * IBC-enabled chains can opt-in to including the upgraded client state in its upgrade plan
     * This will make the chain commit to the correct upgraded (self) client state before the upgrade occurs,
     * so that connecting chains can verify that the new upgraded client is valid by verifying a proof on the
     * previous version of the chain.
     * This will allow IBC connections to persist smoothly across planned chain upgrades
     */
    upgraded_client_state?: AnyAmino;
}
export interface PlanAminoMsg {
    type: "cosmos-sdk/Plan";
    value: PlanAmino;
}
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface PlanSDKType {
    name: string;
    time: TimestampSDKType;
    height: bigint;
    info: string;
    upgraded_client_state: AnySDKType;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 */
export interface SoftwareUpgradeProposal {
    title: string;
    description: string;
    plan: Plan;
}
export interface SoftwareUpgradeProposalProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
    value: Uint8Array;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 */
export interface SoftwareUpgradeProposalAmino {
    title: string;
    description: string;
    plan?: PlanAmino;
}
export interface SoftwareUpgradeProposalAminoMsg {
    type: "cosmos-sdk/SoftwareUpgradeProposal";
    value: SoftwareUpgradeProposalAmino;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 */
export interface SoftwareUpgradeProposalSDKType {
    title: string;
    description: string;
    plan: PlanSDKType;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 */
export interface CancelSoftwareUpgradeProposal {
    title: string;
    description: string;
}
export interface CancelSoftwareUpgradeProposalProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
    value: Uint8Array;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 */
export interface CancelSoftwareUpgradeProposalAmino {
    title: string;
    description: string;
}
export interface CancelSoftwareUpgradeProposalAminoMsg {
    type: "cosmos-sdk/CancelSoftwareUpgradeProposal";
    value: CancelSoftwareUpgradeProposalAmino;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 */
export interface CancelSoftwareUpgradeProposalSDKType {
    title: string;
    description: string;
}
export declare const Plan: {
    typeUrl: string;
    encode(message: Plan, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Plan;
    fromPartial(object: Partial<Plan>): Plan;
    fromAmino(object: PlanAmino): Plan;
    toAmino(message: Plan): PlanAmino;
    fromAminoMsg(object: PlanAminoMsg): Plan;
    toAminoMsg(message: Plan): PlanAminoMsg;
    fromProtoMsg(message: PlanProtoMsg): Plan;
    toProto(message: Plan): Uint8Array;
    toProtoMsg(message: Plan): PlanProtoMsg;
};
export declare const SoftwareUpgradeProposal: {
    typeUrl: string;
    encode(message: SoftwareUpgradeProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SoftwareUpgradeProposal;
    fromPartial(object: Partial<SoftwareUpgradeProposal>): SoftwareUpgradeProposal;
    fromAmino(object: SoftwareUpgradeProposalAmino): SoftwareUpgradeProposal;
    toAmino(message: SoftwareUpgradeProposal): SoftwareUpgradeProposalAmino;
    fromAminoMsg(object: SoftwareUpgradeProposalAminoMsg): SoftwareUpgradeProposal;
    toAminoMsg(message: SoftwareUpgradeProposal): SoftwareUpgradeProposalAminoMsg;
    fromProtoMsg(message: SoftwareUpgradeProposalProtoMsg): SoftwareUpgradeProposal;
    toProto(message: SoftwareUpgradeProposal): Uint8Array;
    toProtoMsg(message: SoftwareUpgradeProposal): SoftwareUpgradeProposalProtoMsg;
};
export declare const CancelSoftwareUpgradeProposal: {
    typeUrl: string;
    encode(message: CancelSoftwareUpgradeProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CancelSoftwareUpgradeProposal;
    fromPartial(object: Partial<CancelSoftwareUpgradeProposal>): CancelSoftwareUpgradeProposal;
    fromAmino(object: CancelSoftwareUpgradeProposalAmino): CancelSoftwareUpgradeProposal;
    toAmino(message: CancelSoftwareUpgradeProposal): CancelSoftwareUpgradeProposalAmino;
    fromAminoMsg(object: CancelSoftwareUpgradeProposalAminoMsg): CancelSoftwareUpgradeProposal;
    toAminoMsg(message: CancelSoftwareUpgradeProposal): CancelSoftwareUpgradeProposalAminoMsg;
    fromProtoMsg(message: CancelSoftwareUpgradeProposalProtoMsg): CancelSoftwareUpgradeProposal;
    toProto(message: CancelSoftwareUpgradeProposal): Uint8Array;
    toProtoMsg(message: CancelSoftwareUpgradeProposal): CancelSoftwareUpgradeProposalProtoMsg;
};
