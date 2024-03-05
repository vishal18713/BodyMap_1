pragma solidity ^0.8.19;

contract BodyMap{

    bytes32 private passwordHash;
    string public basicBodyMap;
    string public tailorBodyMap;
    constructor (string memory passwordClearText){
        passwordHash = keccak256(abi.encodePacked(passwordClearText));
    }
}