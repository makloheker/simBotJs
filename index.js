// js = juragan sempak
// yahaha gak bisa baca
// sok keras sih ngatain php mulu.

const _0x5a2ecd = _0x1b64;
function _0x1b64(_0x9b60f1, _0x5a73ce) {
	const _0x54c721 = _0x54c7();
	return (
		(_0x1b64 = function (_0x1b6475, _0x5e2cba) {
			_0x1b6475 = _0x1b6475 - 0xed;
			let _0x10b3e0 = _0x54c721[_0x1b6475];
			return _0x10b3e0;
		}),
		_0x1b64(_0x9b60f1, _0x5a73ce)
	);
}
(function (_0x47bb12, _0x1fafee) {
	const _0x3da136 = _0x1b64,
		_0x4000a3 = _0x47bb12();
	while (!![]) {
		try {
			const _0x20dbcc =
				(parseInt(_0x3da136(0x105)) / 0x1) * (-parseInt(_0x3da136(0xf7)) / 0x2) +
				-parseInt(_0x3da136(0xf1)) / 0x3 +
				-parseInt(_0x3da136(0xfd)) / 0x4 +
				-parseInt(_0x3da136(0xfc)) / 0x5 +
				parseInt(_0x3da136(0x10b)) / 0x6 +
				-parseInt(_0x3da136(0xed)) / 0x7 +
				(-parseInt(_0x3da136(0x104)) / 0x8) * (-parseInt(_0x3da136(0xfa)) / 0x9);
			if (_0x20dbcc === _0x1fafee) break;
			else _0x4000a3["push"](_0x4000a3["shift"]());
		} catch (_0x5f24d0) {
			_0x4000a3["push"](_0x4000a3["shift"]());
		}
	}
})(_0x54c7, 0xd59b7);
const axios = require("axios"),
	readline = require(_0x5a2ecd(0x107)),
	rl = readline[_0x5a2ecd(0xee)]({ input: process[_0x5a2ecd(0x108)], output: process["stdout"] });
async function sendRequest(_0x40bff7) {
	const _0x535d9e = _0x5a2ecd;
	try {
		const _0x35c6e7 = await axios[_0x535d9e(0xf4)](_0x535d9e(0x103), { text: _0x40bff7, lc: "id" }, { headers: { "Content-Type": _0x535d9e(0xf3) } });
		return _0x35c6e7[_0x535d9e(0xef)][_0x535d9e(0xf6)] || _0x535d9e(0x10a);
	} catch (_0x8d1cbb) {
		return _0x535d9e(0x109) + (_0x8d1cbb[_0x535d9e(0xfb)] ? _0x8d1cbb[_0x535d9e(0xfb)][_0x535d9e(0xf2)] : _0x8d1cbb[_0x535d9e(0xf6)]);
	}
}
async function chat() {
	const _0x56dd56 = _0x5a2ecd;
	while (!![]) {
		const _0xacb198 = await new Promise((_0x4e273f) => rl[_0x56dd56(0xfe)](_0x56dd56(0xf5), _0x4e273f));
		if ([_0x56dd56(0xf9), _0x56dd56(0xff), _0x56dd56(0x106), _0x56dd56(0x101)][_0x56dd56(0xf0)](_0xacb198["toLowerCase"]())) {
			console["log"](_0x56dd56(0xf8)), rl["close"]();
			break;
		}
		const _0x11767a = await sendRequest(_0xacb198);
		console[_0x56dd56(0x100)](_0x56dd56(0x102) + _0x11767a);
	}
}
chat();
function _0x54c7() {
	const _0x3014b0 = [
		"4742972ocfGoi",
		"question",
		"quit",
		"log",
		"murtad",
		"bot>:\x20",
		"https://api.simsimi.vn/v1/simtalk",
		"24aedQlE",
		"465797EUoYOP",
		"keluar",
		"readline",
		"stdin",
		"Error:\x20",
		"error\x20bang",
		"4092534Rimqph",
		"11439869oljpNB",
		"createInterface",
		"data",
		"includes",
		"4744515wKxWyW",
		"status",
		"application/x-www-form-urlencoded",
		"post",
		"you>:\x20",
		"message",
		"2kbYpyd",
		"bye\x20bye\x20juragan...",
		"exit",
		"15581754EJGNmm",
		"response",
		"668800sKtqmr",
	];
	_0x54c7 = function () {
		return _0x3014b0;
	};
	return _0x54c7();
}
