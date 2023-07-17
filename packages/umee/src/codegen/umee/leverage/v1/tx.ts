import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Token, TokenSDKType } from "./leverage";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgSupply represents a user's request to supply assets to the module. */
export interface MsgSupply {
  /** Supplier is the account address supplying assets and the signer of the message. */
  supplier: string;
  asset?: Coin;
}
/** MsgSupply represents a user's request to supply assets to the module. */
export interface MsgSupplySDKType {
  supplier: string;
  asset?: CoinSDKType;
}
/**
 * MsgWithdraw represents a user's request to withdraw supplied assets.
 * Asset must be a uToken.
 */
export interface MsgWithdraw {
  /** Supplier is the account address withdrawing assets and the signer of the message. */
  supplier: string;
  asset?: Coin;
}
/**
 * MsgWithdraw represents a user's request to withdraw supplied assets.
 * Asset must be a uToken.
 */
export interface MsgWithdrawSDKType {
  supplier: string;
  asset?: CoinSDKType;
}
/** MsgMaxWithdraw represents a user's request to withdraw the maximum valid amount of supplied assets. */
export interface MsgMaxWithdraw {
  /** Supplier is the account address withdrawing assets and the signer of the message. */
  supplier: string;
  /** Denom is base token denom to withdraw */
  denom: string;
}
/** MsgMaxWithdraw represents a user's request to withdraw the maximum valid amount of supplied assets. */
export interface MsgMaxWithdrawSDKType {
  supplier: string;
  denom: string;
}
/**
 * MsgCollateralize represents a user's request to enable selected
 * uTokens as collateral.
 */
export interface MsgCollateralize {
  /** Borrower is the account address adding collateral and the signer of the message. */
  borrower: string;
  asset?: Coin;
}
/**
 * MsgCollateralize represents a user's request to enable selected
 * uTokens as collateral.
 */
export interface MsgCollateralizeSDKType {
  borrower: string;
  asset?: CoinSDKType;
}
/**
 * MsgDecollateralize represents a user's request to disable selected
 * uTokens as collateral.
 */
export interface MsgDecollateralize {
  /** Borrower is the account address removing collateral and the signer of the message. */
  borrower: string;
  asset?: Coin;
}
/**
 * MsgDecollateralize represents a user's request to disable selected
 * uTokens as collateral.
 */
export interface MsgDecollateralizeSDKType {
  borrower: string;
  asset?: CoinSDKType;
}
/**
 * MsgBorrow represents a user's request to borrow a base asset type
 * from the module.
 */
export interface MsgBorrow {
  /**
   * Borrower is the account address taking a loan and the signer
   * of the message.
   */
  borrower: string;
  asset?: Coin;
}
/**
 * MsgBorrow represents a user's request to borrow a base asset type
 * from the module.
 */
export interface MsgBorrowSDKType {
  borrower: string;
  asset?: CoinSDKType;
}
/**
 * MsgMaxBorrow represents a user's request to borrow a base asset type
 * from the module, using the maximum available amount.
 */
export interface MsgMaxBorrow {
  /**
   * Borrower is the account address taking a loan and the signer
   * of the message.
   */
  borrower: string;
  denom: string;
}
/**
 * MsgMaxBorrow represents a user's request to borrow a base asset type
 * from the module, using the maximum available amount.
 */
export interface MsgMaxBorrowSDKType {
  borrower: string;
  denom: string;
}
/**
 * MsgRepay represents a user's request to repay a borrowed base asset
 * type to the module.
 */
export interface MsgRepay {
  /**
   * Borrower is the account address repaying a loan and the signer
   * of the message.
   */
  borrower: string;
  asset?: Coin;
}
/**
 * MsgRepay represents a user's request to repay a borrowed base asset
 * type to the module.
 */
export interface MsgRepaySDKType {
  borrower: string;
  asset?: CoinSDKType;
}
/** MsgLiquidate is the request structure for the Liquidate RPC. */
export interface MsgLiquidate {
  /**
   * Liquidator is the account address performing a liquidation and the signer
   * of the message.
   */
  liquidator: string;
  /**
   * Borrower is the account whose borrow is being repaid, and collateral consumed,
   * by the liquidation. It does not sign the message.
   */
  borrower: string;
  /**
   * Repayment is the maximum amount of base tokens that the liquidator is willing
   * to repay.
   */
  repayment?: Coin;
  /**
   * RewardDenom is the denom that the liquidator will receive as a liquidation reward.
   * If it is a uToken, the liquidator will receive uTokens from the borrower's
   * collateral. If it is a base token, the uTokens will be redeemed directly at
   * a reduced Liquidation Incentive, and the liquidator will receive base tokens.
   */
  rewardDenom: string;
}
/** MsgLiquidate is the request structure for the Liquidate RPC. */
export interface MsgLiquidateSDKType {
  liquidator: string;
  borrower: string;
  repayment?: CoinSDKType;
  reward_denom: string;
}
/** MsgLeveragedLiquidate is the request structure for the LeveragedLiquidate RPC. */
export interface MsgLeveragedLiquidate {
  /**
   * Liquidator is the account address performing a liquidation and the signer
   * of the message.
   */
  liquidator: string;
  /**
   * Borrower is the account whose borrow is being repaid, and collateral consumed,
   * by the liquidation. It does not sign the message.
   */
  borrower: string;
  /**
   * RepayDenom is the base token that the liquidator will borrow in order to repay on behalf of
   * the borrower.
   */
  repayDenom: string;
  /**
   * RewardDenom is the uToken denom that the liquidator will receive as a liquidation reward
   * and immediately collateralize.
   */
  rewardDenom: string;
}
/** MsgLeveragedLiquidate is the request structure for the LeveragedLiquidate RPC. */
export interface MsgLeveragedLiquidateSDKType {
  liquidator: string;
  borrower: string;
  repay_denom: string;
  reward_denom: string;
}
/** MsgSupplyCollateral represents a user's request to supply and collateralize assets to the module. */
export interface MsgSupplyCollateral {
  /** Supplier is the account address supplying assets and the signer of the message. */
  supplier: string;
  asset?: Coin;
}
/** MsgSupplyCollateral represents a user's request to supply and collateralize assets to the module. */
export interface MsgSupplyCollateralSDKType {
  supplier: string;
  asset?: CoinSDKType;
}
/** MsgSupplyResponse defines the Msg/Supply response type. */
export interface MsgSupplyResponse {
  /** Received is the amount of uTokens received. */
  received?: Coin;
}
/** MsgSupplyResponse defines the Msg/Supply response type. */
export interface MsgSupplyResponseSDKType {
  received?: CoinSDKType;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
  /** Received is the amount of base tokens received. */
  received?: Coin;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
  received?: CoinSDKType;
}
/** MsgMaxWithdrawResponse defines the Msg/MaxWithdraw response type. */
export interface MsgMaxWithdrawResponse {
  /** Withdrawn is the amount of uTokens withdrawn. */
  withdrawn?: Coin;
  /** Received is the amount of base tokens received. */
  received?: Coin;
}
/** MsgMaxWithdrawResponse defines the Msg/MaxWithdraw response type. */
export interface MsgMaxWithdrawResponseSDKType {
  withdrawn?: CoinSDKType;
  received?: CoinSDKType;
}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponse {}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponseSDKType {}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponse {}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponseSDKType {}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponse {}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponseSDKType {}
/** MsgMaxBorrowResponse defines the Msg/MaxBorrow response type. */
export interface MsgMaxBorrowResponse {
  /** Borrowed is the amount of tokens borrowed. */
  borrowed?: Coin;
}
/** MsgMaxBorrowResponse defines the Msg/MaxBorrow response type. */
export interface MsgMaxBorrowResponseSDKType {
  borrowed?: CoinSDKType;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponse {
  /** Repaid is the amount of base tokens repaid to the module. */
  repaid?: Coin;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponseSDKType {
  repaid?: CoinSDKType;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponse {
  /**
   * Repaid is the amount of borrowed base tokens that the liquidator repaid
   * to the module on behalf of the borrower.
   */
  repaid?: Coin;
  /**
   * Collateral is the amount of the borrower's uToken collateral that
   * was liquidated.
   */
  collateral?: Coin;
  /**
   * Reward is the amount of base tokens that the liquidator received from
   * the module as reward for the liquidation.
   */
  reward?: Coin;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseSDKType {
  repaid?: CoinSDKType;
  collateral?: CoinSDKType;
  reward?: CoinSDKType;
}
/** MsgLeveragedLiquidateResponse defines the Msg/LeveragedLiquidate response type. */
export interface MsgLeveragedLiquidateResponse {
  /**
   * Repaid is the amount of base tokens that the liquidator borrowed and repaid
   * to the module on behalf of the borrower.
   */
  repaid?: Coin;
  /**
   * Reward is the amount of collateral that the liquidator gained
   * as reward for the liquidation.
   */
  reward?: Coin;
}
/** MsgLeveragedLiquidateResponse defines the Msg/LeveragedLiquidate response type. */
export interface MsgLeveragedLiquidateResponseSDKType {
  repaid?: CoinSDKType;
  reward?: CoinSDKType;
}
/** MsgSupplyCollateralResponse defines the Msg/SupplyCollateral response type. */
export interface MsgSupplyCollateralResponse {
  /** Collateralized is the amount of uTokens collateralized. */
  collateralized?: Coin;
}
/** MsgSupplyCollateralResponse defines the Msg/SupplyCollateral response type. */
export interface MsgSupplyCollateralResponseSDKType {
  collateralized?: CoinSDKType;
}
/** MsgGovUpdateRegistry defines the Msg/GovUpdateRegistry request type. */
export interface MsgGovUpdateRegistry {
  /** authority is the address of the governance account. */
  authority: string;
  title: string;
  description: string;
  /** add_tokens defines new token settings. */
  addTokens: Token[];
  /** update_tokens defines the new settings for existed tokens. */
  updateTokens: Token[];
}
/** MsgGovUpdateRegistry defines the Msg/GovUpdateRegistry request type. */
export interface MsgGovUpdateRegistrySDKType {
  authority: string;
  title: string;
  description: string;
  add_tokens: TokenSDKType[];
  update_tokens: TokenSDKType[];
}
/** MsgGovUpdateRegistryResponse defines the Msg/GovUpdateRegistry response type. */
export interface MsgGovUpdateRegistryResponse {}
/** MsgGovUpdateRegistryResponse defines the Msg/GovUpdateRegistry response type. */
export interface MsgGovUpdateRegistryResponseSDKType {}
function createBaseMsgSupply(): MsgSupply {
  return {
    supplier: "",
    asset: undefined
  };
}
export const MsgSupply = {
  encode(message: MsgSupply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSupply {
    return {
      supplier: isSet(object.supplier) ? String(object.supplier) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MsgSupply>): MsgSupply {
    const message = createBaseMsgSupply();
    message.supplier = object.supplier ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    supplier: "",
    asset: undefined
  };
}
export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdraw {
    return {
      supplier: isSet(object.supplier) ? String(object.supplier) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.supplier = object.supplier ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseMsgMaxWithdraw(): MsgMaxWithdraw {
  return {
    supplier: "",
    denom: ""
  };
}
export const MsgMaxWithdraw = {
  encode(message: MsgMaxWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): MsgMaxWithdraw {
    return {
      supplier: isSet(object.supplier) ? String(object.supplier) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<MsgMaxWithdraw>): MsgMaxWithdraw {
    const message = createBaseMsgMaxWithdraw();
    message.supplier = object.supplier ?? "";
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseMsgCollateralize(): MsgCollateralize {
  return {
    borrower: "",
    asset: undefined
  };
}
export const MsgCollateralize = {
  encode(message: MsgCollateralize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCollateralize {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MsgCollateralize>): MsgCollateralize {
    const message = createBaseMsgCollateralize();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseMsgDecollateralize(): MsgDecollateralize {
  return {
    borrower: "",
    asset: undefined
  };
}
export const MsgDecollateralize = {
  encode(message: MsgDecollateralize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgDecollateralize {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MsgDecollateralize>): MsgDecollateralize {
    const message = createBaseMsgDecollateralize();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseMsgBorrow(): MsgBorrow {
  return {
    borrower: "",
    asset: undefined
  };
}
export const MsgBorrow = {
  encode(message: MsgBorrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBorrow {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MsgBorrow>): MsgBorrow {
    const message = createBaseMsgBorrow();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseMsgMaxBorrow(): MsgMaxBorrow {
  return {
    borrower: "",
    denom: ""
  };
}
export const MsgMaxBorrow = {
  encode(message: MsgMaxBorrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): MsgMaxBorrow {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<MsgMaxBorrow>): MsgMaxBorrow {
    const message = createBaseMsgMaxBorrow();
    message.borrower = object.borrower ?? "";
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseMsgRepay(): MsgRepay {
  return {
    borrower: "",
    asset: undefined
  };
}
export const MsgRepay = {
  encode(message: MsgRepay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRepay {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MsgRepay>): MsgRepay {
    const message = createBaseMsgRepay();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseMsgLiquidate(): MsgLiquidate {
  return {
    liquidator: "",
    borrower: "",
    repayment: undefined,
    rewardDenom: ""
  };
}
export const MsgLiquidate = {
  encode(message: MsgLiquidate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidator !== "") {
      writer.uint32(10).string(message.liquidator);
    }
    if (message.borrower !== "") {
      writer.uint32(18).string(message.borrower);
    }
    if (message.repayment !== undefined) {
      Coin.encode(message.repayment, writer.uint32(26).fork()).ldelim();
    }
    if (message.rewardDenom !== "") {
      writer.uint32(34).string(message.rewardDenom);
    }
    return writer;
  },
  fromJSON(object: any): MsgLiquidate {
    return {
      liquidator: isSet(object.liquidator) ? String(object.liquidator) : "",
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      repayment: isSet(object.repayment) ? Coin.fromJSON(object.repayment) : undefined,
      rewardDenom: isSet(object.rewardDenom) ? String(object.rewardDenom) : ""
    };
  },
  fromPartial(object: Partial<MsgLiquidate>): MsgLiquidate {
    const message = createBaseMsgLiquidate();
    message.liquidator = object.liquidator ?? "";
    message.borrower = object.borrower ?? "";
    message.repayment = object.repayment !== undefined && object.repayment !== null ? Coin.fromPartial(object.repayment) : undefined;
    message.rewardDenom = object.rewardDenom ?? "";
    return message;
  }
};
function createBaseMsgLeveragedLiquidate(): MsgLeveragedLiquidate {
  return {
    liquidator: "",
    borrower: "",
    repayDenom: "",
    rewardDenom: ""
  };
}
export const MsgLeveragedLiquidate = {
  encode(message: MsgLeveragedLiquidate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidator !== "") {
      writer.uint32(10).string(message.liquidator);
    }
    if (message.borrower !== "") {
      writer.uint32(18).string(message.borrower);
    }
    if (message.repayDenom !== "") {
      writer.uint32(26).string(message.repayDenom);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(34).string(message.rewardDenom);
    }
    return writer;
  },
  fromJSON(object: any): MsgLeveragedLiquidate {
    return {
      liquidator: isSet(object.liquidator) ? String(object.liquidator) : "",
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      repayDenom: isSet(object.repayDenom) ? String(object.repayDenom) : "",
      rewardDenom: isSet(object.rewardDenom) ? String(object.rewardDenom) : ""
    };
  },
  fromPartial(object: Partial<MsgLeveragedLiquidate>): MsgLeveragedLiquidate {
    const message = createBaseMsgLeveragedLiquidate();
    message.liquidator = object.liquidator ?? "";
    message.borrower = object.borrower ?? "";
    message.repayDenom = object.repayDenom ?? "";
    message.rewardDenom = object.rewardDenom ?? "";
    return message;
  }
};
function createBaseMsgSupplyCollateral(): MsgSupplyCollateral {
  return {
    supplier: "",
    asset: undefined
  };
}
export const MsgSupplyCollateral = {
  encode(message: MsgSupplyCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSupplyCollateral {
    return {
      supplier: isSet(object.supplier) ? String(object.supplier) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MsgSupplyCollateral>): MsgSupplyCollateral {
    const message = createBaseMsgSupplyCollateral();
    message.supplier = object.supplier ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseMsgSupplyResponse(): MsgSupplyResponse {
  return {
    received: undefined
  };
}
export const MsgSupplyResponse = {
  encode(message: MsgSupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.received !== undefined) {
      Coin.encode(message.received, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSupplyResponse {
    return {
      received: isSet(object.received) ? Coin.fromJSON(object.received) : undefined
    };
  },
  fromPartial(object: Partial<MsgSupplyResponse>): MsgSupplyResponse {
    const message = createBaseMsgSupplyResponse();
    message.received = object.received !== undefined && object.received !== null ? Coin.fromPartial(object.received) : undefined;
    return message;
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {
    received: undefined
  };
}
export const MsgWithdrawResponse = {
  encode(message: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.received !== undefined) {
      Coin.encode(message.received, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawResponse {
    return {
      received: isSet(object.received) ? Coin.fromJSON(object.received) : undefined
    };
  },
  fromPartial(object: Partial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    message.received = object.received !== undefined && object.received !== null ? Coin.fromPartial(object.received) : undefined;
    return message;
  }
};
function createBaseMsgMaxWithdrawResponse(): MsgMaxWithdrawResponse {
  return {
    withdrawn: undefined,
    received: undefined
  };
}
export const MsgMaxWithdrawResponse = {
  encode(message: MsgMaxWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawn !== undefined) {
      Coin.encode(message.withdrawn, writer.uint32(10).fork()).ldelim();
    }
    if (message.received !== undefined) {
      Coin.encode(message.received, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMaxWithdrawResponse {
    return {
      withdrawn: isSet(object.withdrawn) ? Coin.fromJSON(object.withdrawn) : undefined,
      received: isSet(object.received) ? Coin.fromJSON(object.received) : undefined
    };
  },
  fromPartial(object: Partial<MsgMaxWithdrawResponse>): MsgMaxWithdrawResponse {
    const message = createBaseMsgMaxWithdrawResponse();
    message.withdrawn = object.withdrawn !== undefined && object.withdrawn !== null ? Coin.fromPartial(object.withdrawn) : undefined;
    message.received = object.received !== undefined && object.received !== null ? Coin.fromPartial(object.received) : undefined;
    return message;
  }
};
function createBaseMsgCollateralizeResponse(): MsgCollateralizeResponse {
  return {};
}
export const MsgCollateralizeResponse = {
  encode(_: MsgCollateralizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCollateralizeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCollateralizeResponse>): MsgCollateralizeResponse {
    const message = createBaseMsgCollateralizeResponse();
    return message;
  }
};
function createBaseMsgDecollateralizeResponse(): MsgDecollateralizeResponse {
  return {};
}
export const MsgDecollateralizeResponse = {
  encode(_: MsgDecollateralizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDecollateralizeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDecollateralizeResponse>): MsgDecollateralizeResponse {
    const message = createBaseMsgDecollateralizeResponse();
    return message;
  }
};
function createBaseMsgBorrowResponse(): MsgBorrowResponse {
  return {};
}
export const MsgBorrowResponse = {
  encode(_: MsgBorrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgBorrowResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBorrowResponse>): MsgBorrowResponse {
    const message = createBaseMsgBorrowResponse();
    return message;
  }
};
function createBaseMsgMaxBorrowResponse(): MsgMaxBorrowResponse {
  return {
    borrowed: undefined
  };
}
export const MsgMaxBorrowResponse = {
  encode(message: MsgMaxBorrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrowed !== undefined) {
      Coin.encode(message.borrowed, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMaxBorrowResponse {
    return {
      borrowed: isSet(object.borrowed) ? Coin.fromJSON(object.borrowed) : undefined
    };
  },
  fromPartial(object: Partial<MsgMaxBorrowResponse>): MsgMaxBorrowResponse {
    const message = createBaseMsgMaxBorrowResponse();
    message.borrowed = object.borrowed !== undefined && object.borrowed !== null ? Coin.fromPartial(object.borrowed) : undefined;
    return message;
  }
};
function createBaseMsgRepayResponse(): MsgRepayResponse {
  return {
    repaid: undefined
  };
}
export const MsgRepayResponse = {
  encode(message: MsgRepayResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.repaid !== undefined) {
      Coin.encode(message.repaid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRepayResponse {
    return {
      repaid: isSet(object.repaid) ? Coin.fromJSON(object.repaid) : undefined
    };
  },
  fromPartial(object: Partial<MsgRepayResponse>): MsgRepayResponse {
    const message = createBaseMsgRepayResponse();
    message.repaid = object.repaid !== undefined && object.repaid !== null ? Coin.fromPartial(object.repaid) : undefined;
    return message;
  }
};
function createBaseMsgLiquidateResponse(): MsgLiquidateResponse {
  return {
    repaid: undefined,
    collateral: undefined,
    reward: undefined
  };
}
export const MsgLiquidateResponse = {
  encode(message: MsgLiquidateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.repaid !== undefined) {
      Coin.encode(message.repaid, writer.uint32(10).fork()).ldelim();
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgLiquidateResponse {
    return {
      repaid: isSet(object.repaid) ? Coin.fromJSON(object.repaid) : undefined,
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined
    };
  },
  fromPartial(object: Partial<MsgLiquidateResponse>): MsgLiquidateResponse {
    const message = createBaseMsgLiquidateResponse();
    message.repaid = object.repaid !== undefined && object.repaid !== null ? Coin.fromPartial(object.repaid) : undefined;
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.reward = object.reward !== undefined && object.reward !== null ? Coin.fromPartial(object.reward) : undefined;
    return message;
  }
};
function createBaseMsgLeveragedLiquidateResponse(): MsgLeveragedLiquidateResponse {
  return {
    repaid: undefined,
    reward: undefined
  };
}
export const MsgLeveragedLiquidateResponse = {
  encode(message: MsgLeveragedLiquidateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.repaid !== undefined) {
      Coin.encode(message.repaid, writer.uint32(10).fork()).ldelim();
    }
    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgLeveragedLiquidateResponse {
    return {
      repaid: isSet(object.repaid) ? Coin.fromJSON(object.repaid) : undefined,
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined
    };
  },
  fromPartial(object: Partial<MsgLeveragedLiquidateResponse>): MsgLeveragedLiquidateResponse {
    const message = createBaseMsgLeveragedLiquidateResponse();
    message.repaid = object.repaid !== undefined && object.repaid !== null ? Coin.fromPartial(object.repaid) : undefined;
    message.reward = object.reward !== undefined && object.reward !== null ? Coin.fromPartial(object.reward) : undefined;
    return message;
  }
};
function createBaseMsgSupplyCollateralResponse(): MsgSupplyCollateralResponse {
  return {
    collateralized: undefined
  };
}
export const MsgSupplyCollateralResponse = {
  encode(message: MsgSupplyCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralized !== undefined) {
      Coin.encode(message.collateralized, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSupplyCollateralResponse {
    return {
      collateralized: isSet(object.collateralized) ? Coin.fromJSON(object.collateralized) : undefined
    };
  },
  fromPartial(object: Partial<MsgSupplyCollateralResponse>): MsgSupplyCollateralResponse {
    const message = createBaseMsgSupplyCollateralResponse();
    message.collateralized = object.collateralized !== undefined && object.collateralized !== null ? Coin.fromPartial(object.collateralized) : undefined;
    return message;
  }
};
function createBaseMsgGovUpdateRegistry(): MsgGovUpdateRegistry {
  return {
    authority: "",
    title: "",
    description: "",
    addTokens: [],
    updateTokens: []
  };
}
export const MsgGovUpdateRegistry = {
  encode(message: MsgGovUpdateRegistry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.addTokens) {
      Token.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.updateTokens) {
      Token.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgGovUpdateRegistry {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      addTokens: Array.isArray(object?.addTokens) ? object.addTokens.map((e: any) => Token.fromJSON(e)) : [],
      updateTokens: Array.isArray(object?.updateTokens) ? object.updateTokens.map((e: any) => Token.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgGovUpdateRegistry>): MsgGovUpdateRegistry {
    const message = createBaseMsgGovUpdateRegistry();
    message.authority = object.authority ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.addTokens = object.addTokens?.map(e => Token.fromPartial(e)) || [];
    message.updateTokens = object.updateTokens?.map(e => Token.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgGovUpdateRegistryResponse(): MsgGovUpdateRegistryResponse {
  return {};
}
export const MsgGovUpdateRegistryResponse = {
  encode(_: MsgGovUpdateRegistryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgGovUpdateRegistryResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovUpdateRegistryResponse>): MsgGovUpdateRegistryResponse {
    const message = createBaseMsgGovUpdateRegistryResponse();
    return message;
  }
};