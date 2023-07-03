# git submodule update --remote --init --recursive
PROTO_PATH=afscommon/protos

GEN_PATH=protos

mkdir -p $GEN_PATH

 protoc -I=$PROTO_PATH $(find $PROTO_PATH -iname "*.proto") --js_out=import_style=commonjs:$GEN_PATH --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$GEN_PATH
 #protoc -I=afscommon/protos  auth.proto auth_service.proto --js_out=import_style=commonjs:protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:protos



  #protoc -I=afscommon/protos common.proto auth.proto auth_service.proto order.proto order_service.proto  admin.proto admin_service.proto subscription.proto subscription_service.proto scheduler.proto media.proto media_Service.proto --grpc-web_out=import_style=commonjs,mode=grpcweb:protos 

# // JAVA script // old
  #protoc -I=afscommon/protos  afscommon/protos/*.proto --js_out=import_style=commonjs:protos  --grpc-web_out=import_style=commonjs,mode=grpcweb:protos 

# // TYPESCRIPT
# protoc -I=afscommon/protos  afscommon/protos/*.proto --js_out=import_style=commonjs:protos --grpc-web_out=import_style=typescript,mode=grpcweb:protos 

 