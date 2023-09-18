import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.claim = this.claim.bind(this);
    this.bond = this.bond.bind(this);
    this.beginUnbonding = this.beginUnbonding.bind(this);
    this.emergencyUnbond = this.emergencyUnbond.bind(this);
    this.sponsor = this.sponsor.bind(this);
    this.govSetParams = this.govSetParams.bind(this);
    this.govCreatePrograms = this.govCreatePrograms.bind(this);
  }
  claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Msg", "Claim", data);
    return promise.then(data => MsgClaimResponse.decode(new BinaryReader(data)));
  }
  bond(request: MsgBond): Promise<MsgBondResponse> {
    const data = MsgBond.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Msg", "Bond", data);
    return promise.then(data => MsgBondResponse.decode(new BinaryReader(data)));
  }
  beginUnbonding(request: MsgBeginUnbonding): Promise<MsgBeginUnbondingResponse> {
    const data = MsgBeginUnbonding.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Msg", "BeginUnbonding", data);
    return promise.then(data => MsgBeginUnbondingResponse.decode(new BinaryReader(data)));
  }
  emergencyUnbond(request: MsgEmergencyUnbond): Promise<MsgEmergencyUnbondResponse> {
    const data = MsgEmergencyUnbond.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Msg", "EmergencyUnbond", data);
    return promise.then(data => MsgEmergencyUnbondResponse.decode(new BinaryReader(data)));
  }
  sponsor(request: MsgSponsor): Promise<MsgSponsorResponse> {
    const data = MsgSponsor.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Msg", "Sponsor", data);
    return promise.then(data => MsgSponsorResponse.decode(new BinaryReader(data)));
  }
  govSetParams(request: MsgGovSetParams): Promise<MsgGovSetParamsResponse> {
    const data = MsgGovSetParams.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Msg", "GovSetParams", data);
    return promise.then(data => MsgGovSetParamsResponse.decode(new BinaryReader(data)));
  }
  govCreatePrograms(request: MsgGovCreatePrograms): Promise<MsgGovCreateProgramsResponse> {
    const data = MsgGovCreatePrograms.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Msg", "GovCreatePrograms", data);
    return promise.then(data => MsgGovCreateProgramsResponse.decode(new BinaryReader(data)));
  }
}