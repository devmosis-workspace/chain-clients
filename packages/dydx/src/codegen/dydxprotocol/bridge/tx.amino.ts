import { AminoMsg } from "@cosmjs/amino";
import { MsgAcknowledgeBridges, MsgCompleteBridge, MsgUpdateEventParams, MsgUpdateProposeParams, MsgUpdateSafetyParams } from "./tx";
export interface MsgAcknowledgeBridgesAminoType extends AminoMsg {
  type: "/dydxprotocol.bridge.MsgAcknowledgeBridges";
  value: {
    events: {
      id: number;
      coin: {
        denom: string;
        amount: string;
      };
      address: string;
      eth_block_height: string;
    }[];
  };
}
export interface MsgCompleteBridgeAminoType extends AminoMsg {
  type: "/dydxprotocol.bridge.MsgCompleteBridge";
  value: {
    authority: string;
    event: {
      id: number;
      coin: {
        denom: string;
        amount: string;
      };
      address: string;
      eth_block_height: string;
    };
  };
}
export interface MsgUpdateEventParamsAminoType extends AminoMsg {
  type: "/dydxprotocol.bridge.MsgUpdateEventParams";
  value: {
    authority: string;
    params: {
      denom: string;
      eth_chain_id: string;
      eth_address: string;
    };
  };
}
export interface MsgUpdateProposeParamsAminoType extends AminoMsg {
  type: "/dydxprotocol.bridge.MsgUpdateProposeParams";
  value: {
    authority: string;
    params: {
      max_bridges_per_block: number;
      propose_delay_duration: {
        seconds: string;
        nanos: number;
      };
      skip_rate_ppm: number;
      skip_if_block_delayed_by_duration: {
        seconds: string;
        nanos: number;
      };
    };
  };
}
export interface MsgUpdateSafetyParamsAminoType extends AminoMsg {
  type: "/dydxprotocol.bridge.MsgUpdateSafetyParams";
  value: {
    authority: string;
    params: {
      is_disabled: boolean;
      delay_blocks: number;
    };
  };
}
export const AminoConverter = {
  "/dydxprotocol.bridge.MsgAcknowledgeBridges": {
    aminoType: "/dydxprotocol.bridge.MsgAcknowledgeBridges",
    toAmino: ({
      events
    }: MsgAcknowledgeBridges): MsgAcknowledgeBridgesAminoType["value"] => {
      return {
        events: events.map(el0 => ({
          id: el0.id,
          coin: {
            denom: el0.coin.denom,
            amount: el0.coin.amount
          },
          address: el0.address,
          eth_block_height: el0.ethBlockHeight.toString()
        }))
      };
    },
    fromAmino: ({
      events
    }: MsgAcknowledgeBridgesAminoType["value"]): MsgAcknowledgeBridges => {
      return {
        events: events.map(el0 => ({
          id: el0.id,
          coin: {
            denom: el0.coin.denom,
            amount: el0.coin.amount
          },
          address: el0.address,
          ethBlockHeight: BigInt(el0.eth_block_height)
        }))
      };
    }
  },
  "/dydxprotocol.bridge.MsgCompleteBridge": {
    aminoType: "/dydxprotocol.bridge.MsgCompleteBridge",
    toAmino: ({
      authority,
      event
    }: MsgCompleteBridge): MsgCompleteBridgeAminoType["value"] => {
      return {
        authority,
        event: {
          id: event.id,
          coin: {
            denom: event.coin.denom,
            amount: event.coin.amount
          },
          address: event.address,
          eth_block_height: event.ethBlockHeight.toString()
        }
      };
    },
    fromAmino: ({
      authority,
      event
    }: MsgCompleteBridgeAminoType["value"]): MsgCompleteBridge => {
      return {
        authority,
        event: {
          id: event.id,
          coin: {
            denom: event.coin.denom,
            amount: event.coin.amount
          },
          address: event.address,
          ethBlockHeight: BigInt(event.eth_block_height)
        }
      };
    }
  },
  "/dydxprotocol.bridge.MsgUpdateEventParams": {
    aminoType: "/dydxprotocol.bridge.MsgUpdateEventParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateEventParams): MsgUpdateEventParamsAminoType["value"] => {
      return {
        authority,
        params: {
          denom: params.denom,
          eth_chain_id: params.ethChainId.toString(),
          eth_address: params.ethAddress
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateEventParamsAminoType["value"]): MsgUpdateEventParams => {
      return {
        authority,
        params: {
          denom: params.denom,
          ethChainId: BigInt(params.eth_chain_id),
          ethAddress: params.eth_address
        }
      };
    }
  },
  "/dydxprotocol.bridge.MsgUpdateProposeParams": {
    aminoType: "/dydxprotocol.bridge.MsgUpdateProposeParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateProposeParams): MsgUpdateProposeParamsAminoType["value"] => {
      return {
        authority,
        params: {
          max_bridges_per_block: params.maxBridgesPerBlock,
          propose_delay_duration: (params.proposeDelayDuration * 1_000_000_000).toString(),
          skip_rate_ppm: params.skipRatePpm,
          skip_if_block_delayed_by_duration: (params.skipIfBlockDelayedByDuration * 1_000_000_000).toString()
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateProposeParamsAminoType["value"]): MsgUpdateProposeParams => {
      return {
        authority,
        params: {
          maxBridgesPerBlock: params.max_bridges_per_block,
          proposeDelayDuration: {
            seconds: BigInt(Math.floor(parseInt(params.propose_delay_duration) / 1_000_000_000)),
            nanos: parseInt(params.propose_delay_duration) % 1_000_000_000
          },
          skipRatePpm: params.skip_rate_ppm,
          skipIfBlockDelayedByDuration: {
            seconds: BigInt(Math.floor(parseInt(params.skip_if_block_delayed_by_duration) / 1_000_000_000)),
            nanos: parseInt(params.skip_if_block_delayed_by_duration) % 1_000_000_000
          }
        }
      };
    }
  },
  "/dydxprotocol.bridge.MsgUpdateSafetyParams": {
    aminoType: "/dydxprotocol.bridge.MsgUpdateSafetyParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateSafetyParams): MsgUpdateSafetyParamsAminoType["value"] => {
      return {
        authority,
        params: {
          is_disabled: params.isDisabled,
          delay_blocks: params.delayBlocks
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateSafetyParamsAminoType["value"]): MsgUpdateSafetyParams => {
      return {
        authority,
        params: {
          isDisabled: params.is_disabled,
          delayBlocks: params.delay_blocks
        }
      };
    }
  }
};