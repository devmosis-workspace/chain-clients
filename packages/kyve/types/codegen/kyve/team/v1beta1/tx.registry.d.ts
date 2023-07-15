import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaimUnlocked, MsgClawback, MsgCreateTeamVestingAccount, MsgClaimAuthorityRewards, MsgClaimAccountRewards } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        claimUnlocked(value: MsgClaimUnlocked): {
            typeUrl: string;
            value: Uint8Array;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: Uint8Array;
        };
        createTeamVestingAccount(value: MsgCreateTeamVestingAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimAuthorityRewards(value: MsgClaimAuthorityRewards): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimAccountRewards(value: MsgClaimAccountRewards): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        claimUnlocked(value: MsgClaimUnlocked): {
            typeUrl: string;
            value: MsgClaimUnlocked;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: MsgClawback;
        };
        createTeamVestingAccount(value: MsgCreateTeamVestingAccount): {
            typeUrl: string;
            value: MsgCreateTeamVestingAccount;
        };
        claimAuthorityRewards(value: MsgClaimAuthorityRewards): {
            typeUrl: string;
            value: MsgClaimAuthorityRewards;
        };
        claimAccountRewards(value: MsgClaimAccountRewards): {
            typeUrl: string;
            value: MsgClaimAccountRewards;
        };
    };
    fromJSON: {
        claimUnlocked(value: any): {
            typeUrl: string;
            value: MsgClaimUnlocked;
        };
        clawback(value: any): {
            typeUrl: string;
            value: MsgClawback;
        };
        createTeamVestingAccount(value: any): {
            typeUrl: string;
            value: MsgCreateTeamVestingAccount;
        };
        claimAuthorityRewards(value: any): {
            typeUrl: string;
            value: MsgClaimAuthorityRewards;
        };
        claimAccountRewards(value: any): {
            typeUrl: string;
            value: MsgClaimAccountRewards;
        };
    };
    fromPartial: {
        claimUnlocked(value: MsgClaimUnlocked): {
            typeUrl: string;
            value: MsgClaimUnlocked;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: MsgClawback;
        };
        createTeamVestingAccount(value: MsgCreateTeamVestingAccount): {
            typeUrl: string;
            value: MsgCreateTeamVestingAccount;
        };
        claimAuthorityRewards(value: MsgClaimAuthorityRewards): {
            typeUrl: string;
            value: MsgClaimAuthorityRewards;
        };
        claimAccountRewards(value: MsgClaimAccountRewards): {
            typeUrl: string;
            value: MsgClaimAccountRewards;
        };
    };
};
