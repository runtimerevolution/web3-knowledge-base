// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

contract Counter {
    uint public count;

    function increment() public {
        count += 1;
    }

    function decrement() public {
        require(count > 0);
        count -= 1;
    }
}
