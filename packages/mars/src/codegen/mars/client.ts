import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as marsIncentivesV1beta1TxRegistry from "./incentives/v1beta1/tx.registry";
import * as marsSafetyV1beta1TxRegistry from "./safety/v1beta1/tx.registry";
import * as marsIncentivesV1beta1TxAmino from "./incentives/v1beta1/tx.amino";
import * as marsSafetyV1beta1TxAmino from "./safety/v1beta1/tx.amino";
export const marsAminoConverters = {
  ...marsIncentivesV1beta1TxAmino.AminoConverter,
  ...marsSafetyV1beta1TxAmino.AminoConverter
};
export const marsProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...marsIncentivesV1beta1TxRegistry.registry, ...marsSafetyV1beta1TxRegistry.registry];
export const getSigningMarsClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...marsProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...marsAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningMarsClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningMarsClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};