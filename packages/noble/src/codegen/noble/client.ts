import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as fiattokenfactoryTxRegistry from "../fiattokenfactory/tx.registry";
import * as tokenfactoryTxRegistry from "../tokenfactory/tx.registry";
import * as fiattokenfactoryTxAmino from "../fiattokenfactory/tx.amino";
import * as tokenfactoryTxAmino from "../tokenfactory/tx.amino";
export const nobleAminoConverters = {
  ...fiattokenfactoryTxAmino.AminoConverter,
  ...tokenfactoryTxAmino.AminoConverter
};
export const nobleProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...fiattokenfactoryTxRegistry.registry, ...tokenfactoryTxRegistry.registry];
export const getSigningNobleClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...nobleProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...nobleAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningNobleClient = async ({
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
  } = getSigningNobleClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};