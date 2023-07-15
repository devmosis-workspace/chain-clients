import { timeInForceFromJSON } from "./market";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgAddLimitOrder, MsgAddMarketOrder, MsgCancelOrder, MsgCancelReplaceLimitOrder, MsgCancelReplaceMarketOrder } from "./tx";
export interface MsgAddLimitOrderAminoType extends AminoMsg {
  type: "/em.market.v1.MsgAddLimitOrder";
  value: {
    owner: string;
    client_order_id: string;
    time_in_force: number;
    source: {
      denom: string;
      amount: string;
    };
    destination: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgAddMarketOrderAminoType extends AminoMsg {
  type: "/em.market.v1.MsgAddMarketOrder";
  value: {
    owner: string;
    client_order_id: string;
    time_in_force: number;
    source: string;
    destination: {
      denom: string;
      amount: string;
    };
    maximum_slippage: string;
  };
}
export interface MsgCancelOrderAminoType extends AminoMsg {
  type: "/em.market.v1.MsgCancelOrder";
  value: {
    owner: string;
    client_order_id: string;
  };
}
export interface MsgCancelReplaceLimitOrderAminoType extends AminoMsg {
  type: "/em.market.v1.MsgCancelReplaceLimitOrder";
  value: {
    owner: string;
    original_client_order_id: string;
    new_client_order_id: string;
    time_in_force: number;
    source: {
      denom: string;
      amount: string;
    };
    destination: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgCancelReplaceMarketOrderAminoType extends AminoMsg {
  type: "/em.market.v1.MsgCancelReplaceMarketOrder";
  value: {
    owner: string;
    original_client_order_id: string;
    new_client_order_id: string;
    time_in_force: number;
    source: string;
    destination: {
      denom: string;
      amount: string;
    };
    maximum_slippage: string;
  };
}
export const AminoConverter = {
  "/em.market.v1.MsgAddLimitOrder": {
    aminoType: "/em.market.v1.MsgAddLimitOrder",
    toAmino: ({
      owner,
      clientOrderId,
      timeInForce,
      source,
      destination
    }: MsgAddLimitOrder): MsgAddLimitOrderAminoType["value"] => {
      return {
        owner,
        client_order_id: clientOrderId,
        time_in_force: timeInForce,
        source: {
          denom: source.denom,
          amount: Long.fromValue(source.amount).toString()
        },
        destination: {
          denom: destination.denom,
          amount: Long.fromValue(destination.amount).toString()
        }
      };
    },
    fromAmino: ({
      owner,
      client_order_id,
      time_in_force,
      source,
      destination
    }: MsgAddLimitOrderAminoType["value"]): MsgAddLimitOrder => {
      return {
        owner,
        clientOrderId: client_order_id,
        timeInForce: timeInForceFromJSON(time_in_force),
        source: {
          denom: source.denom,
          amount: source.amount
        },
        destination: {
          denom: destination.denom,
          amount: destination.amount
        }
      };
    }
  },
  "/em.market.v1.MsgAddMarketOrder": {
    aminoType: "/em.market.v1.MsgAddMarketOrder",
    toAmino: ({
      owner,
      clientOrderId,
      timeInForce,
      source,
      destination,
      maximumSlippage
    }: MsgAddMarketOrder): MsgAddMarketOrderAminoType["value"] => {
      return {
        owner,
        client_order_id: clientOrderId,
        time_in_force: timeInForce,
        source,
        destination: {
          denom: destination.denom,
          amount: Long.fromValue(destination.amount).toString()
        },
        maximum_slippage: maximumSlippage
      };
    },
    fromAmino: ({
      owner,
      client_order_id,
      time_in_force,
      source,
      destination,
      maximum_slippage
    }: MsgAddMarketOrderAminoType["value"]): MsgAddMarketOrder => {
      return {
        owner,
        clientOrderId: client_order_id,
        timeInForce: timeInForceFromJSON(time_in_force),
        source,
        destination: {
          denom: destination.denom,
          amount: destination.amount
        },
        maximumSlippage: maximum_slippage
      };
    }
  },
  "/em.market.v1.MsgCancelOrder": {
    aminoType: "/em.market.v1.MsgCancelOrder",
    toAmino: ({
      owner,
      clientOrderId
    }: MsgCancelOrder): MsgCancelOrderAminoType["value"] => {
      return {
        owner,
        client_order_id: clientOrderId
      };
    },
    fromAmino: ({
      owner,
      client_order_id
    }: MsgCancelOrderAminoType["value"]): MsgCancelOrder => {
      return {
        owner,
        clientOrderId: client_order_id
      };
    }
  },
  "/em.market.v1.MsgCancelReplaceLimitOrder": {
    aminoType: "/em.market.v1.MsgCancelReplaceLimitOrder",
    toAmino: ({
      owner,
      originalClientOrderId,
      newClientOrderId,
      timeInForce,
      source,
      destination
    }: MsgCancelReplaceLimitOrder): MsgCancelReplaceLimitOrderAminoType["value"] => {
      return {
        owner,
        original_client_order_id: originalClientOrderId,
        new_client_order_id: newClientOrderId,
        time_in_force: timeInForce,
        source: {
          denom: source.denom,
          amount: Long.fromValue(source.amount).toString()
        },
        destination: {
          denom: destination.denom,
          amount: Long.fromValue(destination.amount).toString()
        }
      };
    },
    fromAmino: ({
      owner,
      original_client_order_id,
      new_client_order_id,
      time_in_force,
      source,
      destination
    }: MsgCancelReplaceLimitOrderAminoType["value"]): MsgCancelReplaceLimitOrder => {
      return {
        owner,
        originalClientOrderId: original_client_order_id,
        newClientOrderId: new_client_order_id,
        timeInForce: timeInForceFromJSON(time_in_force),
        source: {
          denom: source.denom,
          amount: source.amount
        },
        destination: {
          denom: destination.denom,
          amount: destination.amount
        }
      };
    }
  },
  "/em.market.v1.MsgCancelReplaceMarketOrder": {
    aminoType: "/em.market.v1.MsgCancelReplaceMarketOrder",
    toAmino: ({
      owner,
      originalClientOrderId,
      newClientOrderId,
      timeInForce,
      source,
      destination,
      maximumSlippage
    }: MsgCancelReplaceMarketOrder): MsgCancelReplaceMarketOrderAminoType["value"] => {
      return {
        owner,
        original_client_order_id: originalClientOrderId,
        new_client_order_id: newClientOrderId,
        time_in_force: timeInForce,
        source,
        destination: {
          denom: destination.denom,
          amount: Long.fromValue(destination.amount).toString()
        },
        maximum_slippage: maximumSlippage
      };
    },
    fromAmino: ({
      owner,
      original_client_order_id,
      new_client_order_id,
      time_in_force,
      source,
      destination,
      maximum_slippage
    }: MsgCancelReplaceMarketOrderAminoType["value"]): MsgCancelReplaceMarketOrder => {
      return {
        owner,
        originalClientOrderId: original_client_order_id,
        newClientOrderId: new_client_order_id,
        timeInForce: timeInForceFromJSON(time_in_force),
        source,
        destination: {
          denom: destination.denom,
          amount: destination.amount
        },
        maximumSlippage: maximum_slippage
      };
    }
  }
};