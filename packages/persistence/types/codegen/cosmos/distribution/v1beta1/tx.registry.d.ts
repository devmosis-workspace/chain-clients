import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordReward } from "./tx";
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
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        communityPoolSpend(value: MsgCommunityPoolSpend): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawTokenizeShareRecordReward(value: MsgWithdrawTokenizeShareRecordReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawAllTokenizeShareRecordReward(value: MsgWithdrawAllTokenizeShareRecordReward): {
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
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        communityPoolSpend(value: MsgCommunityPoolSpend): {
            typeUrl: string;
            value: MsgCommunityPoolSpend;
        };
        withdrawTokenizeShareRecordReward(value: MsgWithdrawTokenizeShareRecordReward): {
            typeUrl: string;
            value: MsgWithdrawTokenizeShareRecordReward;
        };
        withdrawAllTokenizeShareRecordReward(value: MsgWithdrawAllTokenizeShareRecordReward): {
            typeUrl: string;
            value: MsgWithdrawAllTokenizeShareRecordReward;
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
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        communityPoolSpend(value: any): {
            typeUrl: string;
            value: MsgCommunityPoolSpend;
        };
        withdrawTokenizeShareRecordReward(value: any): {
            typeUrl: string;
            value: MsgWithdrawTokenizeShareRecordReward;
        };
        withdrawAllTokenizeShareRecordReward(value: any): {
            typeUrl: string;
            value: MsgWithdrawAllTokenizeShareRecordReward;
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
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        communityPoolSpend(value: MsgCommunityPoolSpend): {
            typeUrl: string;
            value: MsgCommunityPoolSpend;
        };
        withdrawTokenizeShareRecordReward(value: MsgWithdrawTokenizeShareRecordReward): {
            typeUrl: string;
            value: MsgWithdrawTokenizeShareRecordReward;
        };
        withdrawAllTokenizeShareRecordReward(value: MsgWithdrawAllTokenizeShareRecordReward): {
            typeUrl: string;
            value: MsgWithdrawAllTokenizeShareRecordReward;
        };
    };
};
