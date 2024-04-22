import { Params } from "./params";
import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import { GovAccount } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        governanceKey: undefined,
        govAccounts: []
    };
}
export const GenesisState = {
    typeUrl: "/axelar.permission.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.governanceKey !== undefined) {
            LegacyAminoPubKey.encode(message.governanceKey, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.govAccounts) {
            GovAccount.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            governanceKey: isSet(object.governanceKey) ? LegacyAminoPubKey.fromJSON(object.governanceKey) : undefined,
            govAccounts: Array.isArray(object?.govAccounts) ? object.govAccounts.map((e) => GovAccount.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.governanceKey = object.governanceKey !== undefined && object.governanceKey !== null ? LegacyAminoPubKey.fromPartial(object.governanceKey) : undefined;
        message.govAccounts = object.govAccounts?.map(e => GovAccount.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        if (object.governance_key !== undefined && object.governance_key !== null) {
            message.governanceKey = LegacyAminoPubKey.fromAmino(object.governance_key);
        }
        message.govAccounts = object.gov_accounts?.map(e => GovAccount.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.governance_key = message.governanceKey ? LegacyAminoPubKey.toAmino(message.governanceKey) : undefined;
        if (message.govAccounts) {
            obj.gov_accounts = message.govAccounts.map(e => e ? GovAccount.toAmino(e) : undefined);
        }
        else {
            obj.gov_accounts = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.permission.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map