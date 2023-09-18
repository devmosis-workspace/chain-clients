import { BalancerToConcentratedPoolLink, BalancerToConcentratedPoolLinkAmino, BalancerToConcentratedPoolLinkSDKType } from "./shared";
import { BinaryWriter } from "../../../binary";
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLink[];
}
export interface ReplaceMigrationRecordsProposalProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal";
    value: Uint8Array;
}
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposalAmino {
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLinkAmino[];
}
export interface ReplaceMigrationRecordsProposalAminoMsg {
    type: "osmosis/ReplaceMigrationRecordsProposal";
    value: ReplaceMigrationRecordsProposalAmino;
}
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLinkSDKType[];
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLink[];
}
export interface UpdateMigrationRecordsProposalProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal";
    value: Uint8Array;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposalAmino {
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLinkAmino[];
}
export interface UpdateMigrationRecordsProposalAminoMsg {
    type: "osmosis/UpdateMigrationRecordsProposal";
    value: UpdateMigrationRecordsProposalAmino;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLinkSDKType[];
}
export interface PoolRecordWithCFMMLink {
    denom0: string;
    denom1: string;
    tickSpacing: bigint;
    exponentAtPriceOne: string;
    spreadFactor: string;
    balancerPoolId: bigint;
}
export interface PoolRecordWithCFMMLinkProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.PoolRecordWithCFMMLink";
    value: Uint8Array;
}
export interface PoolRecordWithCFMMLinkAmino {
    denom0: string;
    denom1: string;
    tick_spacing: string;
    exponent_at_price_one: string;
    spread_factor: string;
    balancer_pool_id: string;
}
export interface PoolRecordWithCFMMLinkAminoMsg {
    type: "osmosis/gamm/pool-record-with-cfmm-link";
    value: PoolRecordWithCFMMLinkAmino;
}
export interface PoolRecordWithCFMMLinkSDKType {
    denom0: string;
    denom1: string;
    tick_spacing: bigint;
    exponent_at_price_one: string;
    spread_factor: string;
    balancer_pool_id: bigint;
}
/**
 * CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal is a gov Content type
 * for creating concentrated liquidity pools and linking it to a CFMM pool.
 */
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    poolRecordsWithCfmmLink: PoolRecordWithCFMMLink[];
}
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal";
    value: Uint8Array;
}
/**
 * CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal is a gov Content type
 * for creating concentrated liquidity pools and linking it to a CFMM pool.
 */
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino {
    title: string;
    description: string;
    pool_records_with_cfmm_link: PoolRecordWithCFMMLinkAmino[];
}
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAminoMsg {
    type: "osmosis/CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal";
    value: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino;
}
/**
 * CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal is a gov Content type
 * for creating concentrated liquidity pools and linking it to a CFMM pool.
 */
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    pool_records_with_cfmm_link: PoolRecordWithCFMMLinkSDKType[];
}
/**
 * SetScalingFactorControllerProposal is a gov Content type for updating the
 * scaling factor controller address of a stableswap pool
 */
export interface SetScalingFactorControllerProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    poolId: bigint;
    controllerAddress: string;
}
export interface SetScalingFactorControllerProposalProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal";
    value: Uint8Array;
}
/**
 * SetScalingFactorControllerProposal is a gov Content type for updating the
 * scaling factor controller address of a stableswap pool
 */
export interface SetScalingFactorControllerProposalAmino {
    title: string;
    description: string;
    pool_id: string;
    controller_address: string;
}
export interface SetScalingFactorControllerProposalAminoMsg {
    type: "osmosis/SetScalingFactorControllerProposal";
    value: SetScalingFactorControllerProposalAmino;
}
/**
 * SetScalingFactorControllerProposal is a gov Content type for updating the
 * scaling factor controller address of a stableswap pool
 */
export interface SetScalingFactorControllerProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    pool_id: bigint;
    controller_address: string;
}
export declare const ReplaceMigrationRecordsProposal: {
    typeUrl: string;
    encode(message: ReplaceMigrationRecordsProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ReplaceMigrationRecordsProposal;
    fromPartial(object: Partial<ReplaceMigrationRecordsProposal>): ReplaceMigrationRecordsProposal;
    fromAmino(object: ReplaceMigrationRecordsProposalAmino): ReplaceMigrationRecordsProposal;
    toAmino(message: ReplaceMigrationRecordsProposal): ReplaceMigrationRecordsProposalAmino;
    fromAminoMsg(object: ReplaceMigrationRecordsProposalAminoMsg): ReplaceMigrationRecordsProposal;
    toAminoMsg(message: ReplaceMigrationRecordsProposal): ReplaceMigrationRecordsProposalAminoMsg;
    fromProtoMsg(message: ReplaceMigrationRecordsProposalProtoMsg): ReplaceMigrationRecordsProposal;
    toProto(message: ReplaceMigrationRecordsProposal): Uint8Array;
    toProtoMsg(message: ReplaceMigrationRecordsProposal): ReplaceMigrationRecordsProposalProtoMsg;
};
export declare const UpdateMigrationRecordsProposal: {
    typeUrl: string;
    encode(message: UpdateMigrationRecordsProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpdateMigrationRecordsProposal;
    fromPartial(object: Partial<UpdateMigrationRecordsProposal>): UpdateMigrationRecordsProposal;
    fromAmino(object: UpdateMigrationRecordsProposalAmino): UpdateMigrationRecordsProposal;
    toAmino(message: UpdateMigrationRecordsProposal): UpdateMigrationRecordsProposalAmino;
    fromAminoMsg(object: UpdateMigrationRecordsProposalAminoMsg): UpdateMigrationRecordsProposal;
    toAminoMsg(message: UpdateMigrationRecordsProposal): UpdateMigrationRecordsProposalAminoMsg;
    fromProtoMsg(message: UpdateMigrationRecordsProposalProtoMsg): UpdateMigrationRecordsProposal;
    toProto(message: UpdateMigrationRecordsProposal): Uint8Array;
    toProtoMsg(message: UpdateMigrationRecordsProposal): UpdateMigrationRecordsProposalProtoMsg;
};
export declare const PoolRecordWithCFMMLink: {
    typeUrl: string;
    encode(message: PoolRecordWithCFMMLink, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolRecordWithCFMMLink;
    fromPartial(object: Partial<PoolRecordWithCFMMLink>): PoolRecordWithCFMMLink;
    fromAmino(object: PoolRecordWithCFMMLinkAmino): PoolRecordWithCFMMLink;
    toAmino(message: PoolRecordWithCFMMLink): PoolRecordWithCFMMLinkAmino;
    fromAminoMsg(object: PoolRecordWithCFMMLinkAminoMsg): PoolRecordWithCFMMLink;
    toAminoMsg(message: PoolRecordWithCFMMLink): PoolRecordWithCFMMLinkAminoMsg;
    fromProtoMsg(message: PoolRecordWithCFMMLinkProtoMsg): PoolRecordWithCFMMLink;
    toProto(message: PoolRecordWithCFMMLink): Uint8Array;
    toProtoMsg(message: PoolRecordWithCFMMLink): PoolRecordWithCFMMLinkProtoMsg;
};
export declare const CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal: {
    typeUrl: string;
    encode(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
    fromPartial(object: Partial<CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal>): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
    fromAmino(object: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
    toAmino(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino;
    fromAminoMsg(object: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAminoMsg): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
    toAminoMsg(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAminoMsg;
    fromProtoMsg(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalProtoMsg): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
    toProto(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): Uint8Array;
    toProtoMsg(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalProtoMsg;
};
export declare const SetScalingFactorControllerProposal: {
    typeUrl: string;
    encode(message: SetScalingFactorControllerProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetScalingFactorControllerProposal;
    fromPartial(object: Partial<SetScalingFactorControllerProposal>): SetScalingFactorControllerProposal;
    fromAmino(object: SetScalingFactorControllerProposalAmino): SetScalingFactorControllerProposal;
    toAmino(message: SetScalingFactorControllerProposal): SetScalingFactorControllerProposalAmino;
    fromAminoMsg(object: SetScalingFactorControllerProposalAminoMsg): SetScalingFactorControllerProposal;
    toAminoMsg(message: SetScalingFactorControllerProposal): SetScalingFactorControllerProposalAminoMsg;
    fromProtoMsg(message: SetScalingFactorControllerProposalProtoMsg): SetScalingFactorControllerProposal;
    toProto(message: SetScalingFactorControllerProposal): Uint8Array;
    toProtoMsg(message: SetScalingFactorControllerProposal): SetScalingFactorControllerProposalProtoMsg;
};
