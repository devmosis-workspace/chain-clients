import * as _m0 from "protobufjs/minimal";
/** Params defines the set of params for the distribution module. */
export interface Params {
    /** share is % of tx fees or rewards allocated to distribution_entities */
    share: string;
    /**
     * % of tx fees or rewards allocated to a set of global distribution entities
     * these shares must add up to 1
     */
    distributionEntities: DistributionEntity[];
    transferFeeBps: string;
    transferFeeMax: string;
    transferFeeDenom: string;
}
/** Params defines the set of params for the distribution module. */
export interface ParamsSDKType {
    share: string;
    distribution_entities: DistributionEntitySDKType[];
    transfer_fee_bps: string;
    transfer_fee_max: string;
    transfer_fee_denom: string;
}
/** DistributionEntity defines a distribution entity */
export interface DistributionEntity {
    address: string;
    share: string;
}
/** DistributionEntity defines a distribution entity */
export interface DistributionEntitySDKType {
    address: string;
    share: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const DistributionEntity: {
    encode(message: DistributionEntity, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DistributionEntity;
    fromPartial(object: Partial<DistributionEntity>): DistributionEntity;
};
