import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export declare enum Action {
    ActionInitialClaim = 0,
    ActionBidNFT = 1,
    ActionMintNFT = 2,
    ActionVote = 3,
    ActionDelegateStake = 4,
    UNRECOGNIZED = -1
}
export declare const ActionSDKType: typeof Action;
export declare function actionFromJSON(object: any): Action;
export declare function actionToJSON(object: Action): string;
export interface ClaimRecord {
    /** address of claim user */
    address: string;
    /** total initial claimable amount for the user */
    initialClaimableAmount: Coin[];
    /**
     * true if action is completed
     * index of bool in array refers to action enum #
     */
    actionCompleted: boolean[];
}
export interface ClaimRecordSDKType {
    address: string;
    initial_claimable_amount: CoinSDKType[];
    action_completed: boolean[];
}
export declare const ClaimRecord: {
    encode(message: ClaimRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClaimRecord;
    fromPartial(object: Partial<ClaimRecord>): ClaimRecord;
};
