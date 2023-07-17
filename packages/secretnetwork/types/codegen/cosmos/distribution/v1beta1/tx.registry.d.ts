import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgSetAutoRestake } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        setWithdrawAddress(value: MsgSetWithdrawAddress): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawValidatorCommission(value: MsgWithdrawValidatorCommission): {
            typeUrl: string;
            value: Uint8Array;
        };
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: Uint8Array;
        };
        setAutoRestake(value: MsgSetAutoRestake): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        setWithdrawAddress(value: MsgSetWithdrawAddress): {
            typeUrl: string;
            value: MsgSetWithdrawAddress;
        };
        withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
            typeUrl: string;
            value: MsgWithdrawDelegatorReward;
        };
        withdrawValidatorCommission(value: MsgWithdrawValidatorCommission): {
            typeUrl: string;
            value: MsgWithdrawValidatorCommission;
        };
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
        setAutoRestake(value: MsgSetAutoRestake): {
            typeUrl: string;
            value: MsgSetAutoRestake;
        };
    };
    fromJSON: {
        setWithdrawAddress(value: any): {
            typeUrl: string;
            value: MsgSetWithdrawAddress;
        };
        withdrawDelegatorReward(value: any): {
            typeUrl: string;
            value: MsgWithdrawDelegatorReward;
        };
        withdrawValidatorCommission(value: any): {
            typeUrl: string;
            value: MsgWithdrawValidatorCommission;
        };
        fundCommunityPool(value: any): {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
        setAutoRestake(value: any): {
            typeUrl: string;
            value: MsgSetAutoRestake;
        };
    };
    fromPartial: {
        setWithdrawAddress(value: MsgSetWithdrawAddress): {
            typeUrl: string;
            value: MsgSetWithdrawAddress;
        };
        withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
            typeUrl: string;
            value: MsgWithdrawDelegatorReward;
        };
        withdrawValidatorCommission(value: MsgWithdrawValidatorCommission): {
            typeUrl: string;
            value: MsgWithdrawValidatorCommission;
        };
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
        setAutoRestake(value: MsgSetAutoRestake): {
            typeUrl: string;
            value: MsgSetAutoRestake;
        };
    };
};
