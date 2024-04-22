import { Params, Metadata } from "./bank";
import { Coin } from "../../base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        balances: [],
        supply: [],
        denomMetadata: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.bank.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.balances) {
            Balance.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.supply) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.denomMetadata) {
            Metadata.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            balances: Array.isArray(object?.balances) ? object.balances.map((e) => Balance.fromJSON(e)) : [],
            supply: Array.isArray(object?.supply) ? object.supply.map((e) => Coin.fromJSON(e)) : [],
            denomMetadata: Array.isArray(object?.denomMetadata) ? object.denomMetadata.map((e) => Metadata.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
        message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
        message.denomMetadata = object.denomMetadata?.map(e => Metadata.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.balances = object.balances?.map(e => Balance.fromAmino(e)) || [];
        message.supply = object.supply?.map(e => Coin.fromAmino(e)) || [];
        message.denomMetadata = object.denom_metadata?.map(e => Metadata.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? Balance.toAmino(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        if (message.supply) {
            obj.supply = message.supply.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.supply = [];
        }
        if (message.denomMetadata) {
            obj.denom_metadata = message.denomMetadata.map(e => e ? Metadata.toAmino(e) : undefined);
        }
        else {
            obj.denom_metadata = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseBalance() {
    return {
        address: "",
        coins: []
    };
}
export const Balance = {
    typeUrl: "/cosmos.bank.v1beta1.Balance",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseBalance();
        message.address = object.address ?? "";
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBalance();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Balance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Balance",
            value: Balance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Balance.decode(message.value);
    },
    toProto(message) {
        return Balance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Balance",
            value: Balance.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map