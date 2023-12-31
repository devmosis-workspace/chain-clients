import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgLiquidStake, MsgLiquidStakeResponse, MsgRedeemStake, MsgRedeemStakeResponse, MsgRegisterHostZone, MsgRegisterHostZoneResponse, MsgClaimUndelegatedTokens, MsgClaimUndelegatedTokensResponse, MsgRebalanceValidators, MsgRebalanceValidatorsResponse, MsgAddValidators, MsgAddValidatorsResponse, MsgChangeValidatorWeight, MsgChangeValidatorWeightResponse, MsgDeleteValidator, MsgDeleteValidatorResponse, MsgRestoreInterchainAccount, MsgRestoreInterchainAccountResponse, MsgUpdateValidatorSharesExchRate, MsgUpdateValidatorSharesExchRateResponse, MsgClearBalance, MsgClearBalanceResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
  redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponse>;
  registerHostZone(request: MsgRegisterHostZone): Promise<MsgRegisterHostZoneResponse>;
  claimUndelegatedTokens(request: MsgClaimUndelegatedTokens): Promise<MsgClaimUndelegatedTokensResponse>;
  rebalanceValidators(request: MsgRebalanceValidators): Promise<MsgRebalanceValidatorsResponse>;
  addValidators(request: MsgAddValidators): Promise<MsgAddValidatorsResponse>;
  changeValidatorWeight(request: MsgChangeValidatorWeight): Promise<MsgChangeValidatorWeightResponse>;
  deleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponse>;
  restoreInterchainAccount(request: MsgRestoreInterchainAccount): Promise<MsgRestoreInterchainAccountResponse>;
  updateValidatorSharesExchRate(request: MsgUpdateValidatorSharesExchRate): Promise<MsgUpdateValidatorSharesExchRateResponse>;
  clearBalance(request: MsgClearBalance): Promise<MsgClearBalanceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.liquidStake = this.liquidStake.bind(this);
    this.redeemStake = this.redeemStake.bind(this);
    this.registerHostZone = this.registerHostZone.bind(this);
    this.claimUndelegatedTokens = this.claimUndelegatedTokens.bind(this);
    this.rebalanceValidators = this.rebalanceValidators.bind(this);
    this.addValidators = this.addValidators.bind(this);
    this.changeValidatorWeight = this.changeValidatorWeight.bind(this);
    this.deleteValidator = this.deleteValidator.bind(this);
    this.restoreInterchainAccount = this.restoreInterchainAccount.bind(this);
    this.updateValidatorSharesExchRate = this.updateValidatorSharesExchRate.bind(this);
    this.clearBalance = this.clearBalance.bind(this);
  }
  liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse> {
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "LiquidStake", data);
    return promise.then(data => MsgLiquidStakeResponse.decode(new BinaryReader(data)));
  }
  redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponse> {
    const data = MsgRedeemStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RedeemStake", data);
    return promise.then(data => MsgRedeemStakeResponse.decode(new BinaryReader(data)));
  }
  registerHostZone(request: MsgRegisterHostZone): Promise<MsgRegisterHostZoneResponse> {
    const data = MsgRegisterHostZone.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RegisterHostZone", data);
    return promise.then(data => MsgRegisterHostZoneResponse.decode(new BinaryReader(data)));
  }
  claimUndelegatedTokens(request: MsgClaimUndelegatedTokens): Promise<MsgClaimUndelegatedTokensResponse> {
    const data = MsgClaimUndelegatedTokens.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ClaimUndelegatedTokens", data);
    return promise.then(data => MsgClaimUndelegatedTokensResponse.decode(new BinaryReader(data)));
  }
  rebalanceValidators(request: MsgRebalanceValidators): Promise<MsgRebalanceValidatorsResponse> {
    const data = MsgRebalanceValidators.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RebalanceValidators", data);
    return promise.then(data => MsgRebalanceValidatorsResponse.decode(new BinaryReader(data)));
  }
  addValidators(request: MsgAddValidators): Promise<MsgAddValidatorsResponse> {
    const data = MsgAddValidators.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "AddValidators", data);
    return promise.then(data => MsgAddValidatorsResponse.decode(new BinaryReader(data)));
  }
  changeValidatorWeight(request: MsgChangeValidatorWeight): Promise<MsgChangeValidatorWeightResponse> {
    const data = MsgChangeValidatorWeight.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ChangeValidatorWeight", data);
    return promise.then(data => MsgChangeValidatorWeightResponse.decode(new BinaryReader(data)));
  }
  deleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponse> {
    const data = MsgDeleteValidator.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "DeleteValidator", data);
    return promise.then(data => MsgDeleteValidatorResponse.decode(new BinaryReader(data)));
  }
  restoreInterchainAccount(request: MsgRestoreInterchainAccount): Promise<MsgRestoreInterchainAccountResponse> {
    const data = MsgRestoreInterchainAccount.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RestoreInterchainAccount", data);
    return promise.then(data => MsgRestoreInterchainAccountResponse.decode(new BinaryReader(data)));
  }
  updateValidatorSharesExchRate(request: MsgUpdateValidatorSharesExchRate): Promise<MsgUpdateValidatorSharesExchRateResponse> {
    const data = MsgUpdateValidatorSharesExchRate.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "UpdateValidatorSharesExchRate", data);
    return promise.then(data => MsgUpdateValidatorSharesExchRateResponse.decode(new BinaryReader(data)));
  }
  clearBalance(request: MsgClearBalance): Promise<MsgClearBalanceResponse> {
    const data = MsgClearBalance.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ClearBalance", data);
    return promise.then(data => MsgClearBalanceResponse.decode(new BinaryReader(data)));
  }
}