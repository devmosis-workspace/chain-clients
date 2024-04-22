import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as axelarPermissionV1beta1ServiceRegistry from "./permission/v1beta1/service.registry";
import * as axelarPermissionV1beta1ServiceAmino from "./permission/v1beta1/service.amino";
export const axelarAminoConverters = {
    ...axelarPermissionV1beta1ServiceAmino.AminoConverter
};
export const axelarProtoRegistry = [...axelarPermissionV1beta1ServiceRegistry.registry];
export const getSigningAxelarClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...axelarProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...axelarAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningAxelarClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningAxelarClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
//# sourceMappingURL=client.js.map