import { Rpc } from "../../../helpers";
import { MsgSafetyFundSpend, MsgSafetyFundSpendResponse } from "./tx";
/** Msg defines the safety module's Msg service */
export interface Msg {
    /**
     * SafetyFundSpend is a governance operation for sending tokens from the
     * safety fund module account to the designated recipient.
     *
     * NOTE: For now, this is just a copy of the distribution module's
     * `CommunityFundSpend` method. The recipient is expected to be a multisig
     * consisting of trusted community members who are respondible for using the
     * funds appropriately to cover any bad debt.
     *
     * In the long term, the goal is that the module
     * is able to detect bad debts incurred in the outposts via interchain query,
     * and automatically dispense the appropriate amount of funds, without having
     * to go through the governance process.
     */
    safetyFundSpend(request: MsgSafetyFundSpend): Promise<MsgSafetyFundSpendResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    safetyFundSpend(request: MsgSafetyFundSpend): Promise<MsgSafetyFundSpendResponse>;
}
