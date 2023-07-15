import { AminoMsg } from "@cosmjs/amino";
import { MsgSetHotRoutes, MsgSetDeveloperAccount, MsgSetMaxPoolPointsPerTx, MsgSetMaxPoolPointsPerBlock, MsgSetPoolWeights, MsgSetBaseDenoms } from "./tx";
export interface MsgSetHotRoutesAminoType extends AminoMsg {
    type: "osmosis/MsgSetHotRoutes";
    value: {
        admin: string;
        hot_routes: {
            arb_routes: {
                trades: {
                    pool: string;
                    token_in: string;
                    token_out: string;
                }[];
                step_size: string;
            }[];
            token_in: string;
            token_out: string;
        }[];
    };
}
export interface MsgSetDeveloperAccountAminoType extends AminoMsg {
    type: "osmosis/MsgSetDeveloperAccount";
    value: {
        admin: string;
        developer_account: string;
    };
}
export interface MsgSetMaxPoolPointsPerTxAminoType extends AminoMsg {
    type: "osmosis/protorev/set-max-pool-points-per-tx";
    value: {
        admin: string;
        max_pool_points_per_tx: string;
    };
}
export interface MsgSetMaxPoolPointsPerBlockAminoType extends AminoMsg {
    type: "osmosis/protorev/set-max-pool-points-per-block";
    value: {
        admin: string;
        max_pool_points_per_block: string;
    };
}
export interface MsgSetPoolWeightsAminoType extends AminoMsg {
    type: "osmosis/protorev/set-pool-weights";
    value: {
        admin: string;
        pool_weights: {
            stable_weight: string;
            balancer_weight: string;
            concentrated_weight: string;
        };
    };
}
export interface MsgSetBaseDenomsAminoType extends AminoMsg {
    type: "osmosis/protorev/set-base-denoms";
    value: {
        admin: string;
        base_denoms: {
            denom: string;
            step_size: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
        aminoType: string;
        toAmino: ({ admin, hotRoutes }: MsgSetHotRoutes) => MsgSetHotRoutesAminoType["value"];
        fromAmino: ({ admin, hot_routes }: MsgSetHotRoutesAminoType["value"]) => MsgSetHotRoutes;
    };
    "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
        aminoType: string;
        toAmino: ({ admin, developerAccount }: MsgSetDeveloperAccount) => MsgSetDeveloperAccountAminoType["value"];
        fromAmino: ({ admin, developer_account }: MsgSetDeveloperAccountAminoType["value"]) => MsgSetDeveloperAccount;
    };
    "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
        aminoType: string;
        toAmino: ({ admin, maxPoolPointsPerTx }: MsgSetMaxPoolPointsPerTx) => MsgSetMaxPoolPointsPerTxAminoType["value"];
        fromAmino: ({ admin, max_pool_points_per_tx }: MsgSetMaxPoolPointsPerTxAminoType["value"]) => MsgSetMaxPoolPointsPerTx;
    };
    "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
        aminoType: string;
        toAmino: ({ admin, maxPoolPointsPerBlock }: MsgSetMaxPoolPointsPerBlock) => MsgSetMaxPoolPointsPerBlockAminoType["value"];
        fromAmino: ({ admin, max_pool_points_per_block }: MsgSetMaxPoolPointsPerBlockAminoType["value"]) => MsgSetMaxPoolPointsPerBlock;
    };
    "/osmosis.protorev.v1beta1.MsgSetPoolWeights": {
        aminoType: string;
        toAmino: ({ admin, poolWeights }: MsgSetPoolWeights) => MsgSetPoolWeightsAminoType["value"];
        fromAmino: ({ admin, pool_weights }: MsgSetPoolWeightsAminoType["value"]) => MsgSetPoolWeights;
    };
    "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
        aminoType: string;
        toAmino: ({ admin, baseDenoms }: MsgSetBaseDenoms) => MsgSetBaseDenomsAminoType["value"];
        fromAmino: ({ admin, base_denoms }: MsgSetBaseDenomsAminoType["value"]) => MsgSetBaseDenoms;
    };
};
