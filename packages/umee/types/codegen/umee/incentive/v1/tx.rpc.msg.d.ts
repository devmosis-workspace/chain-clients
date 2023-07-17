import { Rpc } from "../../../helpers";
import { MsgClaim, MsgClaimResponse, MsgBond, MsgBondResponse, MsgBeginUnbonding, MsgBeginUnbondingResponse, MsgEmergencyUnbond, MsgEmergencyUnbondResponse, MsgSponsor, MsgSponsorResponse, MsgGovSetParams, MsgGovSetParamsResponse, MsgGovCreatePrograms, MsgGovCreateProgramsResponse } from "./tx";
/** Msg defines the x/incentive module's Msg service. */
export interface Msg {
    /** Claim defines a method for claiming any pending incentive rewards. */
    claim(request: MsgClaim): Promise<MsgClaimResponse>;
    /** Bond defines a method for bonding uToken collateral. */
    bond(request: MsgBond): Promise<MsgBondResponse>;
    /**
     * BeginUnbonding defines a method for starting to unbond uToken collateral.
     * Only max_unbondings unbondings can be active at per user, per denom, at once.
     */
    beginUnbonding(request: MsgBeginUnbonding): Promise<MsgBeginUnbondingResponse>;
    /**
     * EmergencyUnbond defines a method for instantly unbonding uToken collateral in exchange for a fee.
     * This can finish existing unbondings or unbond bonded tokens, and is not restricted by max_unbondings.
     */
    emergencyUnbond(request: MsgEmergencyUnbond): Promise<MsgEmergencyUnbondResponse>;
    /**
     * Sponsor defines a permissionless method for sponsoring an upcoming, not yet funded incentive program.
     * The sponsor must be a single account and the MsgSponsor must fully cover the expected program rewards.
     */
    sponsor(request: MsgSponsor): Promise<MsgSponsorResponse>;
    /** GovSetParams is used by governance proposals to update parameters. */
    govSetParams(request: MsgGovSetParams): Promise<MsgGovSetParamsResponse>;
    /** GovCreatePrograms is used by governance proposals to create and optionally fund incentive programs. */
    govCreatePrograms(request: MsgGovCreatePrograms): Promise<MsgGovCreateProgramsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    claim(request: MsgClaim): Promise<MsgClaimResponse>;
    bond(request: MsgBond): Promise<MsgBondResponse>;
    beginUnbonding(request: MsgBeginUnbonding): Promise<MsgBeginUnbondingResponse>;
    emergencyUnbond(request: MsgEmergencyUnbond): Promise<MsgEmergencyUnbondResponse>;
    sponsor(request: MsgSponsor): Promise<MsgSponsorResponse>;
    govSetParams(request: MsgGovSetParams): Promise<MsgGovSetParamsResponse>;
    govCreatePrograms(request: MsgGovCreatePrograms): Promise<MsgGovCreateProgramsResponse>;
}
