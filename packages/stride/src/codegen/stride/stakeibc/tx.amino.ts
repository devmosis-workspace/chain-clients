import { iCAAccountTypeFromJSON } from "./ica_account";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeight, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgClearBalance } from "./tx";
export interface MsgLiquidStakeAminoType extends AminoMsg {
  type: "/stride.stakeibc.MsgLiquidStake";
  value: {
    creator: string;
    amount: string;
    host_denom: string;
  };
}
export interface MsgRedeemStakeAminoType extends AminoMsg {
  type: "/stride.stakeibc.MsgRedeemStake";
  value: {
    creator: string;
    amount: string;
    host_zone: string;
    receiver: string;
  };
}
export interface MsgRegisterHostZoneAminoType extends AminoMsg {
  type: "/stride.stakeibc.MsgRegisterHostZone";
  value: {
    connection_id: string;
    bech32prefix: string;
    host_denom: string;
    ibc_denom: string;
    creator: string;
    transfer_channel_id: string;
    unbonding_frequency: string;
    min_redemption_rate: string;
    max_redemption_rate: string;
  };
}
export interface MsgClaimUndelegatedTokensAminoType extends AminoMsg {
  type: "/stride.stakeibc.MsgClaimUndelegatedTokens";
  value: {
    creator: string;
    host_zone_id: string;
    epoch: string;
    sender: string;
  };
}
export interface MsgRebalanceValidatorsAminoType extends AminoMsg {
  type: "/stride.stakeibc.MsgRebalanceValidators";
  value: {
    creator: string;
    host_zone: string;
    num_rebalance: string;
  };
}
export interface MsgAddValidatorsAminoType extends AminoMsg {
  type: "/stride.stakeibc.MsgAddValidators";
  value: {
    creator: string;
    host_zone: string;
    validators: {
      name: string;
      address: string;
      delegation_amt: string;
      weight: string;
      internal_exchange_rate: {
        internal_tokens_to_shares_rate: string;
        epoch_number: string;
      };
    }[];
  };
}
export interface MsgChangeValidatorWeightAminoType extends AminoMsg {
  type: "/stride.stakeibc.MsgChangeValidatorWeight";
  value: {
    creator: string;
    host_zone: string;
    val_addr: string;
    weight: string;
  };
}
export interface MsgDeleteValidatorAminoType extends AminoMsg {
  type: "/stride.stakeibc.MsgDeleteValidator";
  value: {
    creator: string;
    host_zone: string;
    val_addr: string;
  };
}
export interface MsgRestoreInterchainAccountAminoType extends AminoMsg {
  type: "/stride.stakeibc.MsgRestoreInterchainAccount";
  value: {
    creator: string;
    chain_id: string;
    account_type: number;
  };
}
export interface MsgUpdateValidatorSharesExchRateAminoType extends AminoMsg {
  type: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate";
  value: {
    creator: string;
    chain_id: string;
    valoper: string;
  };
}
export interface MsgClearBalanceAminoType extends AminoMsg {
  type: "/stride.stakeibc.MsgClearBalance";
  value: {
    creator: string;
    chain_id: string;
    amount: string;
    channel: string;
  };
}
export const AminoConverter = {
  "/stride.stakeibc.MsgLiquidStake": {
    aminoType: "/stride.stakeibc.MsgLiquidStake",
    toAmino: ({
      creator,
      amount,
      hostDenom
    }: MsgLiquidStake): MsgLiquidStakeAminoType["value"] => {
      return {
        creator,
        amount,
        host_denom: hostDenom
      };
    },
    fromAmino: ({
      creator,
      amount,
      host_denom
    }: MsgLiquidStakeAminoType["value"]): MsgLiquidStake => {
      return {
        creator,
        amount,
        hostDenom: host_denom
      };
    }
  },
  "/stride.stakeibc.MsgRedeemStake": {
    aminoType: "/stride.stakeibc.MsgRedeemStake",
    toAmino: ({
      creator,
      amount,
      hostZone,
      receiver
    }: MsgRedeemStake): MsgRedeemStakeAminoType["value"] => {
      return {
        creator,
        amount,
        host_zone: hostZone,
        receiver
      };
    },
    fromAmino: ({
      creator,
      amount,
      host_zone,
      receiver
    }: MsgRedeemStakeAminoType["value"]): MsgRedeemStake => {
      return {
        creator,
        amount,
        hostZone: host_zone,
        receiver
      };
    }
  },
  "/stride.stakeibc.MsgRegisterHostZone": {
    aminoType: "/stride.stakeibc.MsgRegisterHostZone",
    toAmino: ({
      connectionId,
      bech32prefix,
      hostDenom,
      ibcDenom,
      creator,
      transferChannelId,
      unbondingFrequency,
      minRedemptionRate,
      maxRedemptionRate
    }: MsgRegisterHostZone): MsgRegisterHostZoneAminoType["value"] => {
      return {
        connection_id: connectionId,
        bech32prefix,
        host_denom: hostDenom,
        ibc_denom: ibcDenom,
        creator,
        transfer_channel_id: transferChannelId,
        unbonding_frequency: unbondingFrequency.toString(),
        min_redemption_rate: minRedemptionRate,
        max_redemption_rate: maxRedemptionRate
      };
    },
    fromAmino: ({
      connection_id,
      bech32prefix,
      host_denom,
      ibc_denom,
      creator,
      transfer_channel_id,
      unbonding_frequency,
      min_redemption_rate,
      max_redemption_rate
    }: MsgRegisterHostZoneAminoType["value"]): MsgRegisterHostZone => {
      return {
        connectionId: connection_id,
        bech32prefix,
        hostDenom: host_denom,
        ibcDenom: ibc_denom,
        creator,
        transferChannelId: transfer_channel_id,
        unbondingFrequency: Long.fromString(unbonding_frequency),
        minRedemptionRate: min_redemption_rate,
        maxRedemptionRate: max_redemption_rate
      };
    }
  },
  "/stride.stakeibc.MsgClaimUndelegatedTokens": {
    aminoType: "/stride.stakeibc.MsgClaimUndelegatedTokens",
    toAmino: ({
      creator,
      hostZoneId,
      epoch,
      sender
    }: MsgClaimUndelegatedTokens): MsgClaimUndelegatedTokensAminoType["value"] => {
      return {
        creator,
        host_zone_id: hostZoneId,
        epoch: epoch.toString(),
        sender
      };
    },
    fromAmino: ({
      creator,
      host_zone_id,
      epoch,
      sender
    }: MsgClaimUndelegatedTokensAminoType["value"]): MsgClaimUndelegatedTokens => {
      return {
        creator,
        hostZoneId: host_zone_id,
        epoch: Long.fromString(epoch),
        sender
      };
    }
  },
  "/stride.stakeibc.MsgRebalanceValidators": {
    aminoType: "/stride.stakeibc.MsgRebalanceValidators",
    toAmino: ({
      creator,
      hostZone,
      numRebalance
    }: MsgRebalanceValidators): MsgRebalanceValidatorsAminoType["value"] => {
      return {
        creator,
        host_zone: hostZone,
        num_rebalance: numRebalance.toString()
      };
    },
    fromAmino: ({
      creator,
      host_zone,
      num_rebalance
    }: MsgRebalanceValidatorsAminoType["value"]): MsgRebalanceValidators => {
      return {
        creator,
        hostZone: host_zone,
        numRebalance: Long.fromString(num_rebalance)
      };
    }
  },
  "/stride.stakeibc.MsgAddValidators": {
    aminoType: "/stride.stakeibc.MsgAddValidators",
    toAmino: ({
      creator,
      hostZone,
      validators
    }: MsgAddValidators): MsgAddValidatorsAminoType["value"] => {
      return {
        creator,
        host_zone: hostZone,
        validators: validators.map(el0 => ({
          name: el0.name,
          address: el0.address,
          delegation_amt: el0.delegationAmt,
          weight: el0.weight.toString(),
          internal_exchange_rate: {
            internal_tokens_to_shares_rate: el0.internalExchangeRate.internalTokensToSharesRate,
            epoch_number: el0.internalExchangeRate.epochNumber.toString()
          }
        }))
      };
    },
    fromAmino: ({
      creator,
      host_zone,
      validators
    }: MsgAddValidatorsAminoType["value"]): MsgAddValidators => {
      return {
        creator,
        hostZone: host_zone,
        validators: validators.map(el0 => ({
          name: el0.name,
          address: el0.address,
          delegationAmt: el0.delegation_amt,
          weight: Long.fromString(el0.weight),
          internalExchangeRate: {
            internalTokensToSharesRate: el0.internal_exchange_rate.internal_tokens_to_shares_rate,
            epochNumber: Long.fromString(el0.internal_exchange_rate.epoch_number)
          }
        }))
      };
    }
  },
  "/stride.stakeibc.MsgChangeValidatorWeight": {
    aminoType: "/stride.stakeibc.MsgChangeValidatorWeight",
    toAmino: ({
      creator,
      hostZone,
      valAddr,
      weight
    }: MsgChangeValidatorWeight): MsgChangeValidatorWeightAminoType["value"] => {
      return {
        creator,
        host_zone: hostZone,
        val_addr: valAddr,
        weight: weight.toString()
      };
    },
    fromAmino: ({
      creator,
      host_zone,
      val_addr,
      weight
    }: MsgChangeValidatorWeightAminoType["value"]): MsgChangeValidatorWeight => {
      return {
        creator,
        hostZone: host_zone,
        valAddr: val_addr,
        weight: Long.fromString(weight)
      };
    }
  },
  "/stride.stakeibc.MsgDeleteValidator": {
    aminoType: "/stride.stakeibc.MsgDeleteValidator",
    toAmino: ({
      creator,
      hostZone,
      valAddr
    }: MsgDeleteValidator): MsgDeleteValidatorAminoType["value"] => {
      return {
        creator,
        host_zone: hostZone,
        val_addr: valAddr
      };
    },
    fromAmino: ({
      creator,
      host_zone,
      val_addr
    }: MsgDeleteValidatorAminoType["value"]): MsgDeleteValidator => {
      return {
        creator,
        hostZone: host_zone,
        valAddr: val_addr
      };
    }
  },
  "/stride.stakeibc.MsgRestoreInterchainAccount": {
    aminoType: "/stride.stakeibc.MsgRestoreInterchainAccount",
    toAmino: ({
      creator,
      chainId,
      accountType
    }: MsgRestoreInterchainAccount): MsgRestoreInterchainAccountAminoType["value"] => {
      return {
        creator,
        chain_id: chainId,
        account_type: accountType
      };
    },
    fromAmino: ({
      creator,
      chain_id,
      account_type
    }: MsgRestoreInterchainAccountAminoType["value"]): MsgRestoreInterchainAccount => {
      return {
        creator,
        chainId: chain_id,
        accountType: iCAAccountTypeFromJSON(account_type)
      };
    }
  },
  "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
    aminoType: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
    toAmino: ({
      creator,
      chainId,
      valoper
    }: MsgUpdateValidatorSharesExchRate): MsgUpdateValidatorSharesExchRateAminoType["value"] => {
      return {
        creator,
        chain_id: chainId,
        valoper
      };
    },
    fromAmino: ({
      creator,
      chain_id,
      valoper
    }: MsgUpdateValidatorSharesExchRateAminoType["value"]): MsgUpdateValidatorSharesExchRate => {
      return {
        creator,
        chainId: chain_id,
        valoper
      };
    }
  },
  "/stride.stakeibc.MsgClearBalance": {
    aminoType: "/stride.stakeibc.MsgClearBalance",
    toAmino: ({
      creator,
      chainId,
      amount,
      channel
    }: MsgClearBalance): MsgClearBalanceAminoType["value"] => {
      return {
        creator,
        chain_id: chainId,
        amount,
        channel
      };
    },
    fromAmino: ({
      creator,
      chain_id,
      amount,
      channel
    }: MsgClearBalanceAminoType["value"]): MsgClearBalance => {
      return {
        creator,
        chainId: chain_id,
        amount,
        channel
      };
    }
  }
};