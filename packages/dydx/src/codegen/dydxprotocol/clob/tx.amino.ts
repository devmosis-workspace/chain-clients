import { order_SideFromJSON, order_TimeInForceFromJSON, order_ConditionTypeFromJSON } from "./order";
import { clobPair_StatusFromJSON } from "./clob_pair";
import { orderRemoval_RemovalReasonFromJSON } from "./order_removals";
import { AminoMsg } from "@cosmjs/amino";
import { MsgProposedOperations, MsgPlaceOrder, MsgCancelOrder, MsgCreateClobPair, MsgUpdateClobPair, MsgUpdateEquityTierLimitConfiguration, MsgUpdateBlockRateLimitConfiguration, MsgUpdateLiquidationsConfig } from "./tx";
export interface MsgProposedOperationsAminoType extends AminoMsg {
  type: "/dydxprotocol.clob.MsgProposedOperations";
  value: {
    operations_queue: {
      match: {
        match_orders: {
          taker_order_id: {
            subaccount_id: {
              owner: string;
              number: number;
            };
            client_id: number;
            order_flags: number;
            clob_pair_id: number;
          };
          fills: {
            fill_amount: string;
            maker_order_id: {
              subaccount_id: {
                owner: string;
                number: number;
              };
              client_id: number;
              order_flags: number;
              clob_pair_id: number;
            };
          }[];
        };
        match_perpetual_liquidation: {
          liquidated: {
            owner: string;
            number: number;
          };
          clob_pair_id: number;
          perpetual_id: number;
          total_size: string;
          is_buy: boolean;
          fills: {
            fill_amount: string;
            maker_order_id: {
              subaccount_id: {
                owner: string;
                number: number;
              };
              client_id: number;
              order_flags: number;
              clob_pair_id: number;
            };
          }[];
        };
        match_perpetual_deleveraging: {
          liquidated: {
            owner: string;
            number: number;
          };
          perpetual_id: number;
          fills: {
            offsetting_subaccount_id: {
              owner: string;
              number: number;
            };
            fill_amount: string;
          }[];
        };
      };
      short_term_order_placement: Uint8Array;
      order_removal: {
        order_id: {
          subaccount_id: {
            owner: string;
            number: number;
          };
          client_id: number;
          order_flags: number;
          clob_pair_id: number;
        };
        removal_reason: number;
      };
    }[];
  };
}
export interface MsgPlaceOrderAminoType extends AminoMsg {
  type: "/dydxprotocol.clob.MsgPlaceOrder";
  value: {
    order: {
      order_id: {
        subaccount_id: {
          owner: string;
          number: number;
        };
        client_id: number;
        order_flags: number;
        clob_pair_id: number;
      };
      side: number;
      quantums: string;
      subticks: string;
      good_til_block: number;
      good_til_block_time: number;
      time_in_force: number;
      reduce_only: boolean;
      client_metadata: number;
      condition_type: number;
      conditional_order_trigger_subticks: string;
    };
  };
}
export interface MsgCancelOrderAminoType extends AminoMsg {
  type: "/dydxprotocol.clob.MsgCancelOrder";
  value: {
    order_id: {
      subaccount_id: {
        owner: string;
        number: number;
      };
      client_id: number;
      order_flags: number;
      clob_pair_id: number;
    };
    good_til_block: number;
    good_til_block_time: number;
  };
}
export interface MsgCreateClobPairAminoType extends AminoMsg {
  type: "/dydxprotocol.clob.MsgCreateClobPair";
  value: {
    authority: string;
    clob_pair: {
      id: number;
      perpetual_clob_metadata: {
        perpetual_id: number;
      };
      spot_clob_metadata: {
        base_asset_id: number;
        quote_asset_id: number;
      };
      step_base_quantums: string;
      subticks_per_tick: number;
      quantum_conversion_exponent: number;
      status: number;
    };
  };
}
export interface MsgUpdateClobPairAminoType extends AminoMsg {
  type: "/dydxprotocol.clob.MsgUpdateClobPair";
  value: {
    authority: string;
    clob_pair: {
      id: number;
      perpetual_clob_metadata: {
        perpetual_id: number;
      };
      spot_clob_metadata: {
        base_asset_id: number;
        quote_asset_id: number;
      };
      step_base_quantums: string;
      subticks_per_tick: number;
      quantum_conversion_exponent: number;
      status: number;
    };
  };
}
export interface MsgUpdateEquityTierLimitConfigurationAminoType extends AminoMsg {
  type: "/dydxprotocol.clob.MsgUpdateEquityTierLimitConfiguration";
  value: {
    authority: string;
    equity_tier_limit_config: {
      short_term_order_equity_tiers: {
        usd_tnc_required: Uint8Array;
        limit: number;
      }[];
      stateful_order_equity_tiers: {
        usd_tnc_required: Uint8Array;
        limit: number;
      }[];
    };
  };
}
export interface MsgUpdateBlockRateLimitConfigurationAminoType extends AminoMsg {
  type: "/dydxprotocol.clob.MsgUpdateBlockRateLimitConfiguration";
  value: {
    authority: string;
    block_rate_limit_config: {
      max_short_term_orders_per_n_blocks: {
        num_blocks: number;
        limit: number;
      }[];
      max_stateful_orders_per_n_blocks: {
        num_blocks: number;
        limit: number;
      }[];
      max_short_term_order_cancellations_per_n_blocks: {
        num_blocks: number;
        limit: number;
      }[];
    };
  };
}
export interface MsgUpdateLiquidationsConfigAminoType extends AminoMsg {
  type: "/dydxprotocol.clob.MsgUpdateLiquidationsConfig";
  value: {
    authority: string;
    liquidations_config: {
      max_liquidation_fee_ppm: number;
      position_block_limits: {
        min_position_notional_liquidated: string;
        max_position_portion_liquidated_ppm: number;
      };
      subaccount_block_limits: {
        max_notional_liquidated: string;
        max_quantums_insurance_lost: string;
      };
      fillable_price_config: {
        bankruptcy_adjustment_ppm: number;
        spread_to_maintenance_margin_ratio_ppm: number;
      };
    };
  };
}
export const AminoConverter = {
  "/dydxprotocol.clob.MsgProposedOperations": {
    aminoType: "/dydxprotocol.clob.MsgProposedOperations",
    toAmino: ({
      operationsQueue
    }: MsgProposedOperations): MsgProposedOperationsAminoType["value"] => {
      return {
        operations_queue: operationsQueue.map(el0 => ({
          match: {
            match_orders: {
              taker_order_id: {
                subaccount_id: {
                  owner: el0.match.matchOrders.takerOrderId.subaccountId.owner,
                  number: el0.match.matchOrders.takerOrderId.subaccountId.number
                },
                client_id: el0.match.matchOrders.takerOrderId.clientId,
                order_flags: el0.match.matchOrders.takerOrderId.orderFlags,
                clob_pair_id: el0.match.matchOrders.takerOrderId.clobPairId
              },
              fills: el0.match.matchOrders.fills.map(el1 => ({
                fill_amount: el1.fillAmount.toString(),
                maker_order_id: {
                  subaccount_id: {
                    owner: el1.makerOrderId.subaccountId.owner,
                    number: el1.makerOrderId.subaccountId.number
                  },
                  client_id: el1.makerOrderId.clientId,
                  order_flags: el1.makerOrderId.orderFlags,
                  clob_pair_id: el1.makerOrderId.clobPairId
                }
              }))
            },
            match_perpetual_liquidation: {
              liquidated: {
                owner: el0.match.matchPerpetualLiquidation.liquidated.owner,
                number: el0.match.matchPerpetualLiquidation.liquidated.number
              },
              clob_pair_id: el0.match.matchPerpetualLiquidation.clobPairId,
              perpetual_id: el0.match.matchPerpetualLiquidation.perpetualId,
              total_size: el0.match.matchPerpetualLiquidation.totalSize.toString(),
              is_buy: el0.match.matchPerpetualLiquidation.isBuy,
              fills: el0.match.matchPerpetualLiquidation.fills.map(el1 => ({
                fill_amount: el1.fillAmount.toString(),
                maker_order_id: {
                  subaccount_id: {
                    owner: el1.makerOrderId.subaccountId.owner,
                    number: el1.makerOrderId.subaccountId.number
                  },
                  client_id: el1.makerOrderId.clientId,
                  order_flags: el1.makerOrderId.orderFlags,
                  clob_pair_id: el1.makerOrderId.clobPairId
                }
              }))
            },
            match_perpetual_deleveraging: {
              liquidated: {
                owner: el0.match.matchPerpetualDeleveraging.liquidated.owner,
                number: el0.match.matchPerpetualDeleveraging.liquidated.number
              },
              perpetual_id: el0.match.matchPerpetualDeleveraging.perpetualId,
              fills: el0.match.matchPerpetualDeleveraging.fills.map(el1 => ({
                offsetting_subaccount_id: {
                  owner: el1.offsettingSubaccountId.owner,
                  number: el1.offsettingSubaccountId.number
                },
                fill_amount: el1.fillAmount.toString()
              }))
            }
          },
          short_term_order_placement: el0.shortTermOrderPlacement,
          order_removal: {
            order_id: {
              subaccount_id: {
                owner: el0.orderRemoval.orderId.subaccountId.owner,
                number: el0.orderRemoval.orderId.subaccountId.number
              },
              client_id: el0.orderRemoval.orderId.clientId,
              order_flags: el0.orderRemoval.orderId.orderFlags,
              clob_pair_id: el0.orderRemoval.orderId.clobPairId
            },
            removal_reason: el0.orderRemoval.removalReason
          }
        }))
      };
    },
    fromAmino: ({
      operations_queue
    }: MsgProposedOperationsAminoType["value"]): MsgProposedOperations => {
      return {
        operationsQueue: operations_queue.map(el0 => ({
          match: {
            matchOrders: {
              takerOrderId: {
                subaccountId: {
                  owner: el0.match.match_orders.taker_order_id.subaccount_id.owner,
                  number: el0.match.match_orders.taker_order_id.subaccount_id.number
                },
                clientId: el0.match.match_orders.taker_order_id.client_id,
                orderFlags: el0.match.match_orders.taker_order_id.order_flags,
                clobPairId: el0.match.match_orders.taker_order_id.clob_pair_id
              },
              fills: el0.match.match_orders.fills.map(el3 => ({
                fillAmount: BigInt(el3.fill_amount),
                makerOrderId: {
                  subaccountId: {
                    owner: el3.maker_order_id.subaccount_id.owner,
                    number: el3.maker_order_id.subaccount_id.number
                  },
                  clientId: el3.maker_order_id.client_id,
                  orderFlags: el3.maker_order_id.order_flags,
                  clobPairId: el3.maker_order_id.clob_pair_id
                }
              }))
            },
            matchPerpetualLiquidation: {
              liquidated: {
                owner: el0.match.match_perpetual_liquidation.liquidated.owner,
                number: el0.match.match_perpetual_liquidation.liquidated.number
              },
              clobPairId: el0.match.match_perpetual_liquidation.clob_pair_id,
              perpetualId: el0.match.match_perpetual_liquidation.perpetual_id,
              totalSize: BigInt(el0.match.match_perpetual_liquidation.total_size),
              isBuy: el0.match.match_perpetual_liquidation.is_buy,
              fills: el0.match.match_perpetual_liquidation.fills.map(el3 => ({
                fillAmount: BigInt(el3.fill_amount),
                makerOrderId: {
                  subaccountId: {
                    owner: el3.maker_order_id.subaccount_id.owner,
                    number: el3.maker_order_id.subaccount_id.number
                  },
                  clientId: el3.maker_order_id.client_id,
                  orderFlags: el3.maker_order_id.order_flags,
                  clobPairId: el3.maker_order_id.clob_pair_id
                }
              }))
            },
            matchPerpetualDeleveraging: {
              liquidated: {
                owner: el0.match.match_perpetual_deleveraging.liquidated.owner,
                number: el0.match.match_perpetual_deleveraging.liquidated.number
              },
              perpetualId: el0.match.match_perpetual_deleveraging.perpetual_id,
              fills: el0.match.match_perpetual_deleveraging.fills.map(el3 => ({
                offsettingSubaccountId: {
                  owner: el3.offsetting_subaccount_id.owner,
                  number: el3.offsetting_subaccount_id.number
                },
                fillAmount: BigInt(el3.fill_amount)
              }))
            }
          },
          shortTermOrderPlacement: el0.short_term_order_placement,
          orderRemoval: {
            orderId: {
              subaccountId: {
                owner: el0.order_removal.order_id.subaccount_id.owner,
                number: el0.order_removal.order_id.subaccount_id.number
              },
              clientId: el0.order_removal.order_id.client_id,
              orderFlags: el0.order_removal.order_id.order_flags,
              clobPairId: el0.order_removal.order_id.clob_pair_id
            },
            removalReason: orderRemoval_RemovalReasonFromJSON(el0.order_removal.removal_reason)
          }
        }))
      };
    }
  },
  "/dydxprotocol.clob.MsgPlaceOrder": {
    aminoType: "/dydxprotocol.clob.MsgPlaceOrder",
    toAmino: ({
      order
    }: MsgPlaceOrder): MsgPlaceOrderAminoType["value"] => {
      return {
        order: {
          order_id: {
            subaccount_id: {
              owner: order.orderId.subaccountId.owner,
              number: order.orderId.subaccountId.number
            },
            client_id: order.orderId.clientId,
            order_flags: order.orderId.orderFlags,
            clob_pair_id: order.orderId.clobPairId
          },
          side: order.side,
          quantums: order.quantums.toString(),
          subticks: order.subticks.toString(),
          good_til_block: order.goodTilBlock,
          good_til_block_time: order.goodTilBlockTime,
          time_in_force: order.timeInForce,
          reduce_only: order.reduceOnly,
          client_metadata: order.clientMetadata,
          condition_type: order.conditionType,
          conditional_order_trigger_subticks: order.conditionalOrderTriggerSubticks.toString()
        }
      };
    },
    fromAmino: ({
      order
    }: MsgPlaceOrderAminoType["value"]): MsgPlaceOrder => {
      return {
        order: {
          orderId: {
            subaccountId: {
              owner: order.order_id.subaccount_id.owner,
              number: order.order_id.subaccount_id.number
            },
            clientId: order.order_id.client_id,
            orderFlags: order.order_id.order_flags,
            clobPairId: order.order_id.clob_pair_id
          },
          side: order_SideFromJSON(order.side),
          quantums: BigInt(order.quantums),
          subticks: BigInt(order.subticks),
          goodTilBlock: order.good_til_block,
          goodTilBlockTime: order.good_til_block_time,
          timeInForce: order_TimeInForceFromJSON(order.time_in_force),
          reduceOnly: order.reduce_only,
          clientMetadata: order.client_metadata,
          conditionType: order_ConditionTypeFromJSON(order.condition_type),
          conditionalOrderTriggerSubticks: BigInt(order.conditional_order_trigger_subticks)
        }
      };
    }
  },
  "/dydxprotocol.clob.MsgCancelOrder": {
    aminoType: "/dydxprotocol.clob.MsgCancelOrder",
    toAmino: ({
      orderId,
      goodTilBlock,
      goodTilBlockTime
    }: MsgCancelOrder): MsgCancelOrderAminoType["value"] => {
      return {
        order_id: {
          subaccount_id: {
            owner: orderId.subaccountId.owner,
            number: orderId.subaccountId.number
          },
          client_id: orderId.clientId,
          order_flags: orderId.orderFlags,
          clob_pair_id: orderId.clobPairId
        },
        good_til_block: goodTilBlock,
        good_til_block_time: goodTilBlockTime
      };
    },
    fromAmino: ({
      order_id,
      good_til_block,
      good_til_block_time
    }: MsgCancelOrderAminoType["value"]): MsgCancelOrder => {
      return {
        orderId: {
          subaccountId: {
            owner: order_id.subaccount_id.owner,
            number: order_id.subaccount_id.number
          },
          clientId: order_id.client_id,
          orderFlags: order_id.order_flags,
          clobPairId: order_id.clob_pair_id
        },
        goodTilBlock: good_til_block,
        goodTilBlockTime: good_til_block_time
      };
    }
  },
  "/dydxprotocol.clob.MsgCreateClobPair": {
    aminoType: "/dydxprotocol.clob.MsgCreateClobPair",
    toAmino: ({
      authority,
      clobPair
    }: MsgCreateClobPair): MsgCreateClobPairAminoType["value"] => {
      return {
        authority,
        clob_pair: {
          id: clobPair.id,
          perpetual_clob_metadata: {
            perpetual_id: clobPair.perpetualClobMetadata.perpetualId
          },
          spot_clob_metadata: {
            base_asset_id: clobPair.spotClobMetadata.baseAssetId,
            quote_asset_id: clobPair.spotClobMetadata.quoteAssetId
          },
          step_base_quantums: clobPair.stepBaseQuantums.toString(),
          subticks_per_tick: clobPair.subticksPerTick,
          quantum_conversion_exponent: clobPair.quantumConversionExponent,
          status: clobPair.status
        }
      };
    },
    fromAmino: ({
      authority,
      clob_pair
    }: MsgCreateClobPairAminoType["value"]): MsgCreateClobPair => {
      return {
        authority,
        clobPair: {
          id: clob_pair.id,
          perpetualClobMetadata: {
            perpetualId: clob_pair.perpetual_clob_metadata.perpetual_id
          },
          spotClobMetadata: {
            baseAssetId: clob_pair.spot_clob_metadata.base_asset_id,
            quoteAssetId: clob_pair.spot_clob_metadata.quote_asset_id
          },
          stepBaseQuantums: BigInt(clob_pair.step_base_quantums),
          subticksPerTick: clob_pair.subticks_per_tick,
          quantumConversionExponent: clob_pair.quantum_conversion_exponent,
          status: clobPair_StatusFromJSON(clob_pair.status)
        }
      };
    }
  },
  "/dydxprotocol.clob.MsgUpdateClobPair": {
    aminoType: "/dydxprotocol.clob.MsgUpdateClobPair",
    toAmino: ({
      authority,
      clobPair
    }: MsgUpdateClobPair): MsgUpdateClobPairAminoType["value"] => {
      return {
        authority,
        clob_pair: {
          id: clobPair.id,
          perpetual_clob_metadata: {
            perpetual_id: clobPair.perpetualClobMetadata.perpetualId
          },
          spot_clob_metadata: {
            base_asset_id: clobPair.spotClobMetadata.baseAssetId,
            quote_asset_id: clobPair.spotClobMetadata.quoteAssetId
          },
          step_base_quantums: clobPair.stepBaseQuantums.toString(),
          subticks_per_tick: clobPair.subticksPerTick,
          quantum_conversion_exponent: clobPair.quantumConversionExponent,
          status: clobPair.status
        }
      };
    },
    fromAmino: ({
      authority,
      clob_pair
    }: MsgUpdateClobPairAminoType["value"]): MsgUpdateClobPair => {
      return {
        authority,
        clobPair: {
          id: clob_pair.id,
          perpetualClobMetadata: {
            perpetualId: clob_pair.perpetual_clob_metadata.perpetual_id
          },
          spotClobMetadata: {
            baseAssetId: clob_pair.spot_clob_metadata.base_asset_id,
            quoteAssetId: clob_pair.spot_clob_metadata.quote_asset_id
          },
          stepBaseQuantums: BigInt(clob_pair.step_base_quantums),
          subticksPerTick: clob_pair.subticks_per_tick,
          quantumConversionExponent: clob_pair.quantum_conversion_exponent,
          status: clobPair_StatusFromJSON(clob_pair.status)
        }
      };
    }
  },
  "/dydxprotocol.clob.MsgUpdateEquityTierLimitConfiguration": {
    aminoType: "/dydxprotocol.clob.MsgUpdateEquityTierLimitConfiguration",
    toAmino: ({
      authority,
      equityTierLimitConfig
    }: MsgUpdateEquityTierLimitConfiguration): MsgUpdateEquityTierLimitConfigurationAminoType["value"] => {
      return {
        authority,
        equity_tier_limit_config: {
          short_term_order_equity_tiers: equityTierLimitConfig.shortTermOrderEquityTiers.map(el0 => ({
            usd_tnc_required: el0.usdTncRequired,
            limit: el0.limit
          })),
          stateful_order_equity_tiers: equityTierLimitConfig.statefulOrderEquityTiers.map(el0 => ({
            usd_tnc_required: el0.usdTncRequired,
            limit: el0.limit
          }))
        }
      };
    },
    fromAmino: ({
      authority,
      equity_tier_limit_config
    }: MsgUpdateEquityTierLimitConfigurationAminoType["value"]): MsgUpdateEquityTierLimitConfiguration => {
      return {
        authority,
        equityTierLimitConfig: {
          shortTermOrderEquityTiers: equity_tier_limit_config.short_term_order_equity_tiers.map(el1 => ({
            usdTncRequired: el1.usd_tnc_required,
            limit: el1.limit
          })),
          statefulOrderEquityTiers: equity_tier_limit_config.stateful_order_equity_tiers.map(el1 => ({
            usdTncRequired: el1.usd_tnc_required,
            limit: el1.limit
          }))
        }
      };
    }
  },
  "/dydxprotocol.clob.MsgUpdateBlockRateLimitConfiguration": {
    aminoType: "/dydxprotocol.clob.MsgUpdateBlockRateLimitConfiguration",
    toAmino: ({
      authority,
      blockRateLimitConfig
    }: MsgUpdateBlockRateLimitConfiguration): MsgUpdateBlockRateLimitConfigurationAminoType["value"] => {
      return {
        authority,
        block_rate_limit_config: {
          max_short_term_orders_per_n_blocks: blockRateLimitConfig.maxShortTermOrdersPerNBlocks.map(el0 => ({
            num_blocks: el0.numBlocks,
            limit: el0.limit
          })),
          max_stateful_orders_per_n_blocks: blockRateLimitConfig.maxStatefulOrdersPerNBlocks.map(el0 => ({
            num_blocks: el0.numBlocks,
            limit: el0.limit
          })),
          max_short_term_order_cancellations_per_n_blocks: blockRateLimitConfig.maxShortTermOrderCancellationsPerNBlocks.map(el0 => ({
            num_blocks: el0.numBlocks,
            limit: el0.limit
          }))
        }
      };
    },
    fromAmino: ({
      authority,
      block_rate_limit_config
    }: MsgUpdateBlockRateLimitConfigurationAminoType["value"]): MsgUpdateBlockRateLimitConfiguration => {
      return {
        authority,
        blockRateLimitConfig: {
          maxShortTermOrdersPerNBlocks: block_rate_limit_config.max_short_term_orders_per_n_blocks.map(el1 => ({
            numBlocks: el1.num_blocks,
            limit: el1.limit
          })),
          maxStatefulOrdersPerNBlocks: block_rate_limit_config.max_stateful_orders_per_n_blocks.map(el1 => ({
            numBlocks: el1.num_blocks,
            limit: el1.limit
          })),
          maxShortTermOrderCancellationsPerNBlocks: block_rate_limit_config.max_short_term_order_cancellations_per_n_blocks.map(el1 => ({
            numBlocks: el1.num_blocks,
            limit: el1.limit
          }))
        }
      };
    }
  },
  "/dydxprotocol.clob.MsgUpdateLiquidationsConfig": {
    aminoType: "/dydxprotocol.clob.MsgUpdateLiquidationsConfig",
    toAmino: ({
      authority,
      liquidationsConfig
    }: MsgUpdateLiquidationsConfig): MsgUpdateLiquidationsConfigAminoType["value"] => {
      return {
        authority,
        liquidations_config: {
          max_liquidation_fee_ppm: liquidationsConfig.maxLiquidationFeePpm,
          position_block_limits: {
            min_position_notional_liquidated: liquidationsConfig.positionBlockLimits.minPositionNotionalLiquidated.toString(),
            max_position_portion_liquidated_ppm: liquidationsConfig.positionBlockLimits.maxPositionPortionLiquidatedPpm
          },
          subaccount_block_limits: {
            max_notional_liquidated: liquidationsConfig.subaccountBlockLimits.maxNotionalLiquidated.toString(),
            max_quantums_insurance_lost: liquidationsConfig.subaccountBlockLimits.maxQuantumsInsuranceLost.toString()
          },
          fillable_price_config: {
            bankruptcy_adjustment_ppm: liquidationsConfig.fillablePriceConfig.bankruptcyAdjustmentPpm,
            spread_to_maintenance_margin_ratio_ppm: liquidationsConfig.fillablePriceConfig.spreadToMaintenanceMarginRatioPpm
          }
        }
      };
    },
    fromAmino: ({
      authority,
      liquidations_config
    }: MsgUpdateLiquidationsConfigAminoType["value"]): MsgUpdateLiquidationsConfig => {
      return {
        authority,
        liquidationsConfig: {
          maxLiquidationFeePpm: liquidations_config.max_liquidation_fee_ppm,
          positionBlockLimits: {
            minPositionNotionalLiquidated: BigInt(liquidations_config.position_block_limits.min_position_notional_liquidated),
            maxPositionPortionLiquidatedPpm: liquidations_config.position_block_limits.max_position_portion_liquidated_ppm
          },
          subaccountBlockLimits: {
            maxNotionalLiquidated: BigInt(liquidations_config.subaccount_block_limits.max_notional_liquidated),
            maxQuantumsInsuranceLost: BigInt(liquidations_config.subaccount_block_limits.max_quantums_insurance_lost)
          },
          fillablePriceConfig: {
            bankruptcyAdjustmentPpm: liquidations_config.fillable_price_config.bankruptcy_adjustment_ppm,
            spreadToMaintenanceMarginRatioPpm: liquidations_config.fillable_price_config.spread_to_maintenance_margin_ratio_ppm
          }
        }
      };
    }
  }
};