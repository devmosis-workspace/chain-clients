import { Rpc } from "../../../helpers";
import { MsgClaimUnlocked, MsgClaimUnlockedResponse, MsgClawback, MsgClawbackResponse, MsgCreateTeamVestingAccount, MsgCreateTeamVestingAccountResponse, MsgClaimAuthorityRewards, MsgClaimAuthorityRewardsResponse, MsgClaimAccountRewards, MsgClaimAccountRewardsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** ClaimUnlocked ... */
    claimUnlocked(request: MsgClaimUnlocked): Promise<MsgClaimUnlockedResponse>;
    /** Clawback ... */
    clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
    /** CreateTeamVestingAccount ... */
    createTeamVestingAccount(request: MsgCreateTeamVestingAccount): Promise<MsgCreateTeamVestingAccountResponse>;
    /** ClaimAuthorityRewards ... */
    claimAuthorityRewards(request: MsgClaimAuthorityRewards): Promise<MsgClaimAuthorityRewardsResponse>;
    /** ClaimInflationRewards ... */
    claimAccountRewards(request: MsgClaimAccountRewards): Promise<MsgClaimAccountRewardsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    claimUnlocked(request: MsgClaimUnlocked): Promise<MsgClaimUnlockedResponse>;
    clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
    createTeamVestingAccount(request: MsgCreateTeamVestingAccount): Promise<MsgCreateTeamVestingAccountResponse>;
    claimAuthorityRewards(request: MsgClaimAuthorityRewards): Promise<MsgClaimAuthorityRewardsResponse>;
    claimAccountRewards(request: MsgClaimAccountRewards): Promise<MsgClaimAccountRewardsResponse>;
}
