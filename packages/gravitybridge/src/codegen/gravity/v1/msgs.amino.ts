import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgConfirmLogicCall, MsgSendToCosmosClaim, MsgExecuteIbcAutoForwards, MsgBatchSendToEthClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgLogicCallExecutedClaim, MsgSetOrchestratorAddress, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence } from "./msgs";
export interface MsgValsetConfirmAminoType extends AminoMsg {
  type: "/gravity.v1.MsgValsetConfirm";
  value: {
    nonce: string;
    orchestrator: string;
    eth_address: string;
    signature: string;
  };
}
export interface MsgSendToEthAminoType extends AminoMsg {
  type: "/gravity.v1.MsgSendToEth";
  value: {
    sender: string;
    eth_dest: string;
    amount: {
      denom: string;
      amount: string;
    };
    bridge_fee: {
      denom: string;
      amount: string;
    };
    chain_fee: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgRequestBatchAminoType extends AminoMsg {
  type: "/gravity.v1.MsgRequestBatch";
  value: {
    sender: string;
    denom: string;
  };
}
export interface MsgConfirmBatchAminoType extends AminoMsg {
  type: "/gravity.v1.MsgConfirmBatch";
  value: {
    nonce: string;
    token_contract: string;
    eth_signer: string;
    orchestrator: string;
    signature: string;
  };
}
export interface MsgConfirmLogicCallAminoType extends AminoMsg {
  type: "/gravity.v1.MsgConfirmLogicCall";
  value: {
    invalidation_id: string;
    invalidation_nonce: string;
    eth_signer: string;
    orchestrator: string;
    signature: string;
  };
}
export interface MsgSendToCosmosClaimAminoType extends AminoMsg {
  type: "/gravity.v1.MsgSendToCosmosClaim";
  value: {
    event_nonce: string;
    eth_block_height: string;
    token_contract: string;
    amount: string;
    ethereum_sender: string;
    cosmos_receiver: string;
    orchestrator: string;
  };
}
export interface MsgExecuteIbcAutoForwardsAminoType extends AminoMsg {
  type: "/gravity.v1.MsgExecuteIbcAutoForwards";
  value: {
    forwards_to_clear: string;
    executor: string;
  };
}
export interface MsgBatchSendToEthClaimAminoType extends AminoMsg {
  type: "/gravity.v1.MsgBatchSendToEthClaim";
  value: {
    event_nonce: string;
    eth_block_height: string;
    batch_nonce: string;
    token_contract: string;
    orchestrator: string;
  };
}
export interface MsgValsetUpdatedClaimAminoType extends AminoMsg {
  type: "/gravity.v1.MsgValsetUpdatedClaim";
  value: {
    event_nonce: string;
    valset_nonce: string;
    eth_block_height: string;
    members: {
      power: string;
      ethereum_address: string;
    }[];
    reward_amount: string;
    reward_token: string;
    orchestrator: string;
  };
}
export interface MsgERC20DeployedClaimAminoType extends AminoMsg {
  type: "/gravity.v1.MsgERC20DeployedClaim";
  value: {
    event_nonce: string;
    eth_block_height: string;
    cosmos_denom: string;
    token_contract: string;
    name: string;
    symbol: string;
    decimals: string;
    orchestrator: string;
  };
}
export interface MsgLogicCallExecutedClaimAminoType extends AminoMsg {
  type: "/gravity.v1.MsgLogicCallExecutedClaim";
  value: {
    event_nonce: string;
    eth_block_height: string;
    invalidation_id: Uint8Array;
    invalidation_nonce: string;
    orchestrator: string;
  };
}
export interface MsgSetOrchestratorAddressAminoType extends AminoMsg {
  type: "/gravity.v1.MsgSetOrchestratorAddress";
  value: {
    validator: string;
    orchestrator: string;
    eth_address: string;
  };
}
export interface MsgCancelSendToEthAminoType extends AminoMsg {
  type: "/gravity.v1.MsgCancelSendToEth";
  value: {
    transaction_id: string;
    sender: string;
  };
}
export interface MsgSubmitBadSignatureEvidenceAminoType extends AminoMsg {
  type: "/gravity.v1.MsgSubmitBadSignatureEvidence";
  value: {
    subject: {
      type_url: string;
      value: Uint8Array;
    };
    signature: string;
    sender: string;
  };
}
export const AminoConverter = {
  "/gravity.v1.MsgValsetConfirm": {
    aminoType: "/gravity.v1.MsgValsetConfirm",
    toAmino: ({
      nonce,
      orchestrator,
      ethAddress,
      signature
    }: MsgValsetConfirm): MsgValsetConfirmAminoType["value"] => {
      return {
        nonce: nonce.toString(),
        orchestrator,
        eth_address: ethAddress,
        signature
      };
    },
    fromAmino: ({
      nonce,
      orchestrator,
      eth_address,
      signature
    }: MsgValsetConfirmAminoType["value"]): MsgValsetConfirm => {
      return {
        nonce: Long.fromString(nonce),
        orchestrator,
        ethAddress: eth_address,
        signature
      };
    }
  },
  "/gravity.v1.MsgSendToEth": {
    aminoType: "/gravity.v1.MsgSendToEth",
    toAmino: ({
      sender,
      ethDest,
      amount,
      bridgeFee,
      chainFee
    }: MsgSendToEth): MsgSendToEthAminoType["value"] => {
      return {
        sender,
        eth_dest: ethDest,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        bridge_fee: {
          denom: bridgeFee.denom,
          amount: Long.fromValue(bridgeFee.amount).toString()
        },
        chain_fee: {
          denom: chainFee.denom,
          amount: Long.fromValue(chainFee.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      eth_dest,
      amount,
      bridge_fee,
      chain_fee
    }: MsgSendToEthAminoType["value"]): MsgSendToEth => {
      return {
        sender,
        ethDest: eth_dest,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        bridgeFee: {
          denom: bridge_fee.denom,
          amount: bridge_fee.amount
        },
        chainFee: {
          denom: chain_fee.denom,
          amount: chain_fee.amount
        }
      };
    }
  },
  "/gravity.v1.MsgRequestBatch": {
    aminoType: "/gravity.v1.MsgRequestBatch",
    toAmino: ({
      sender,
      denom
    }: MsgRequestBatch): MsgRequestBatchAminoType["value"] => {
      return {
        sender,
        denom
      };
    },
    fromAmino: ({
      sender,
      denom
    }: MsgRequestBatchAminoType["value"]): MsgRequestBatch => {
      return {
        sender,
        denom
      };
    }
  },
  "/gravity.v1.MsgConfirmBatch": {
    aminoType: "/gravity.v1.MsgConfirmBatch",
    toAmino: ({
      nonce,
      tokenContract,
      ethSigner,
      orchestrator,
      signature
    }: MsgConfirmBatch): MsgConfirmBatchAminoType["value"] => {
      return {
        nonce: nonce.toString(),
        token_contract: tokenContract,
        eth_signer: ethSigner,
        orchestrator,
        signature
      };
    },
    fromAmino: ({
      nonce,
      token_contract,
      eth_signer,
      orchestrator,
      signature
    }: MsgConfirmBatchAminoType["value"]): MsgConfirmBatch => {
      return {
        nonce: Long.fromString(nonce),
        tokenContract: token_contract,
        ethSigner: eth_signer,
        orchestrator,
        signature
      };
    }
  },
  "/gravity.v1.MsgConfirmLogicCall": {
    aminoType: "/gravity.v1.MsgConfirmLogicCall",
    toAmino: ({
      invalidationId,
      invalidationNonce,
      ethSigner,
      orchestrator,
      signature
    }: MsgConfirmLogicCall): MsgConfirmLogicCallAminoType["value"] => {
      return {
        invalidation_id: invalidationId,
        invalidation_nonce: invalidationNonce.toString(),
        eth_signer: ethSigner,
        orchestrator,
        signature
      };
    },
    fromAmino: ({
      invalidation_id,
      invalidation_nonce,
      eth_signer,
      orchestrator,
      signature
    }: MsgConfirmLogicCallAminoType["value"]): MsgConfirmLogicCall => {
      return {
        invalidationId: invalidation_id,
        invalidationNonce: Long.fromString(invalidation_nonce),
        ethSigner: eth_signer,
        orchestrator,
        signature
      };
    }
  },
  "/gravity.v1.MsgSendToCosmosClaim": {
    aminoType: "/gravity.v1.MsgSendToCosmosClaim",
    toAmino: ({
      eventNonce,
      ethBlockHeight,
      tokenContract,
      amount,
      ethereumSender,
      cosmosReceiver,
      orchestrator
    }: MsgSendToCosmosClaim): MsgSendToCosmosClaimAminoType["value"] => {
      return {
        event_nonce: eventNonce.toString(),
        eth_block_height: ethBlockHeight.toString(),
        token_contract: tokenContract,
        amount,
        ethereum_sender: ethereumSender,
        cosmos_receiver: cosmosReceiver,
        orchestrator
      };
    },
    fromAmino: ({
      event_nonce,
      eth_block_height,
      token_contract,
      amount,
      ethereum_sender,
      cosmos_receiver,
      orchestrator
    }: MsgSendToCosmosClaimAminoType["value"]): MsgSendToCosmosClaim => {
      return {
        eventNonce: Long.fromString(event_nonce),
        ethBlockHeight: Long.fromString(eth_block_height),
        tokenContract: token_contract,
        amount,
        ethereumSender: ethereum_sender,
        cosmosReceiver: cosmos_receiver,
        orchestrator
      };
    }
  },
  "/gravity.v1.MsgExecuteIbcAutoForwards": {
    aminoType: "/gravity.v1.MsgExecuteIbcAutoForwards",
    toAmino: ({
      forwardsToClear,
      executor
    }: MsgExecuteIbcAutoForwards): MsgExecuteIbcAutoForwardsAminoType["value"] => {
      return {
        forwards_to_clear: forwardsToClear.toString(),
        executor
      };
    },
    fromAmino: ({
      forwards_to_clear,
      executor
    }: MsgExecuteIbcAutoForwardsAminoType["value"]): MsgExecuteIbcAutoForwards => {
      return {
        forwardsToClear: Long.fromString(forwards_to_clear),
        executor
      };
    }
  },
  "/gravity.v1.MsgBatchSendToEthClaim": {
    aminoType: "/gravity.v1.MsgBatchSendToEthClaim",
    toAmino: ({
      eventNonce,
      ethBlockHeight,
      batchNonce,
      tokenContract,
      orchestrator
    }: MsgBatchSendToEthClaim): MsgBatchSendToEthClaimAminoType["value"] => {
      return {
        event_nonce: eventNonce.toString(),
        eth_block_height: ethBlockHeight.toString(),
        batch_nonce: batchNonce.toString(),
        token_contract: tokenContract,
        orchestrator
      };
    },
    fromAmino: ({
      event_nonce,
      eth_block_height,
      batch_nonce,
      token_contract,
      orchestrator
    }: MsgBatchSendToEthClaimAminoType["value"]): MsgBatchSendToEthClaim => {
      return {
        eventNonce: Long.fromString(event_nonce),
        ethBlockHeight: Long.fromString(eth_block_height),
        batchNonce: Long.fromString(batch_nonce),
        tokenContract: token_contract,
        orchestrator
      };
    }
  },
  "/gravity.v1.MsgValsetUpdatedClaim": {
    aminoType: "/gravity.v1.MsgValsetUpdatedClaim",
    toAmino: ({
      eventNonce,
      valsetNonce,
      ethBlockHeight,
      members,
      rewardAmount,
      rewardToken,
      orchestrator
    }: MsgValsetUpdatedClaim): MsgValsetUpdatedClaimAminoType["value"] => {
      return {
        event_nonce: eventNonce.toString(),
        valset_nonce: valsetNonce.toString(),
        eth_block_height: ethBlockHeight.toString(),
        members: members.map(el0 => ({
          power: el0.power.toString(),
          ethereum_address: el0.ethereumAddress
        })),
        reward_amount: rewardAmount,
        reward_token: rewardToken,
        orchestrator
      };
    },
    fromAmino: ({
      event_nonce,
      valset_nonce,
      eth_block_height,
      members,
      reward_amount,
      reward_token,
      orchestrator
    }: MsgValsetUpdatedClaimAminoType["value"]): MsgValsetUpdatedClaim => {
      return {
        eventNonce: Long.fromString(event_nonce),
        valsetNonce: Long.fromString(valset_nonce),
        ethBlockHeight: Long.fromString(eth_block_height),
        members: members.map(el0 => ({
          power: Long.fromString(el0.power),
          ethereumAddress: el0.ethereum_address
        })),
        rewardAmount: reward_amount,
        rewardToken: reward_token,
        orchestrator
      };
    }
  },
  "/gravity.v1.MsgERC20DeployedClaim": {
    aminoType: "/gravity.v1.MsgERC20DeployedClaim",
    toAmino: ({
      eventNonce,
      ethBlockHeight,
      cosmosDenom,
      tokenContract,
      name,
      symbol,
      decimals,
      orchestrator
    }: MsgERC20DeployedClaim): MsgERC20DeployedClaimAminoType["value"] => {
      return {
        event_nonce: eventNonce.toString(),
        eth_block_height: ethBlockHeight.toString(),
        cosmos_denom: cosmosDenom,
        token_contract: tokenContract,
        name,
        symbol,
        decimals: decimals.toString(),
        orchestrator
      };
    },
    fromAmino: ({
      event_nonce,
      eth_block_height,
      cosmos_denom,
      token_contract,
      name,
      symbol,
      decimals,
      orchestrator
    }: MsgERC20DeployedClaimAminoType["value"]): MsgERC20DeployedClaim => {
      return {
        eventNonce: Long.fromString(event_nonce),
        ethBlockHeight: Long.fromString(eth_block_height),
        cosmosDenom: cosmos_denom,
        tokenContract: token_contract,
        name,
        symbol,
        decimals: Long.fromString(decimals),
        orchestrator
      };
    }
  },
  "/gravity.v1.MsgLogicCallExecutedClaim": {
    aminoType: "/gravity.v1.MsgLogicCallExecutedClaim",
    toAmino: ({
      eventNonce,
      ethBlockHeight,
      invalidationId,
      invalidationNonce,
      orchestrator
    }: MsgLogicCallExecutedClaim): MsgLogicCallExecutedClaimAminoType["value"] => {
      return {
        event_nonce: eventNonce.toString(),
        eth_block_height: ethBlockHeight.toString(),
        invalidation_id: invalidationId,
        invalidation_nonce: invalidationNonce.toString(),
        orchestrator
      };
    },
    fromAmino: ({
      event_nonce,
      eth_block_height,
      invalidation_id,
      invalidation_nonce,
      orchestrator
    }: MsgLogicCallExecutedClaimAminoType["value"]): MsgLogicCallExecutedClaim => {
      return {
        eventNonce: Long.fromString(event_nonce),
        ethBlockHeight: Long.fromString(eth_block_height),
        invalidationId: invalidation_id,
        invalidationNonce: Long.fromString(invalidation_nonce),
        orchestrator
      };
    }
  },
  "/gravity.v1.MsgSetOrchestratorAddress": {
    aminoType: "/gravity.v1.MsgSetOrchestratorAddress",
    toAmino: ({
      validator,
      orchestrator,
      ethAddress
    }: MsgSetOrchestratorAddress): MsgSetOrchestratorAddressAminoType["value"] => {
      return {
        validator,
        orchestrator,
        eth_address: ethAddress
      };
    },
    fromAmino: ({
      validator,
      orchestrator,
      eth_address
    }: MsgSetOrchestratorAddressAminoType["value"]): MsgSetOrchestratorAddress => {
      return {
        validator,
        orchestrator,
        ethAddress: eth_address
      };
    }
  },
  "/gravity.v1.MsgCancelSendToEth": {
    aminoType: "/gravity.v1.MsgCancelSendToEth",
    toAmino: ({
      transactionId,
      sender
    }: MsgCancelSendToEth): MsgCancelSendToEthAminoType["value"] => {
      return {
        transaction_id: transactionId.toString(),
        sender
      };
    },
    fromAmino: ({
      transaction_id,
      sender
    }: MsgCancelSendToEthAminoType["value"]): MsgCancelSendToEth => {
      return {
        transactionId: Long.fromString(transaction_id),
        sender
      };
    }
  },
  "/gravity.v1.MsgSubmitBadSignatureEvidence": {
    aminoType: "/gravity.v1.MsgSubmitBadSignatureEvidence",
    toAmino: ({
      subject,
      signature,
      sender
    }: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidenceAminoType["value"] => {
      return {
        subject: {
          type_url: subject.typeUrl,
          value: subject.value
        },
        signature,
        sender
      };
    },
    fromAmino: ({
      subject,
      signature,
      sender
    }: MsgSubmitBadSignatureEvidenceAminoType["value"]): MsgSubmitBadSignatureEvidence => {
      return {
        subject: {
          typeUrl: subject.type_url,
          value: subject.value
        },
        signature,
        sender
      };
    }
  }
};