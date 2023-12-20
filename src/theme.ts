
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const theme: CustomThemeConfig = {
    name: 'theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #c059f7 
		"--color-primary-50": "246 230 254", // #f6e6fe
		"--color-primary-100": "242 222 253", // #f2defd
		"--color-primary-200": "239 214 253", // #efd6fd
		"--color-primary-300": "230 189 252", // #e6bdfc
		"--color-primary-400": "211 139 249", // #d38bf9
		"--color-primary-500": "192 89 247", // #c059f7
		"--color-primary-600": "173 80 222", // #ad50de
		"--color-primary-700": "144 67 185", // #9043b9
		"--color-primary-800": "115 53 148", // #733594
		"--color-primary-900": "94 44 121", // #5e2c79
		// secondary | #9c62ac 
		"--color-secondary-50": "240 231 243", // #f0e7f3
		"--color-secondary-100": "235 224 238", // #ebe0ee
		"--color-secondary-200": "230 216 234", // #e6d8ea
		"--color-secondary-300": "215 192 222", // #d7c0de
		"--color-secondary-400": "186 145 197", // #ba91c5
		"--color-secondary-500": "156 98 172", // #9c62ac
		"--color-secondary-600": "140 88 155", // #8c589b
		"--color-secondary-700": "117 74 129", // #754a81
		"--color-secondary-800": "94 59 103", // #5e3b67
		"--color-secondary-900": "76 48 84", // #4c3054
		// tertiary | #70539d 
		"--color-tertiary-50": "234 229 240", // #eae5f0
		"--color-tertiary-100": "226 221 235", // #e2ddeb
		"--color-tertiary-200": "219 212 231", // #dbd4e7
		"--color-tertiary-300": "198 186 216", // #c6bad8
		"--color-tertiary-400": "155 135 186", // #9b87ba
		"--color-tertiary-500": "112 83 157", // #70539d
		"--color-tertiary-600": "101 75 141", // #654b8d
		"--color-tertiary-700": "84 62 118", // #543e76
		"--color-tertiary-800": "67 50 94", // #43325e
		"--color-tertiary-900": "55 41 77", // #37294d
		// success | #f04ea4 
		"--color-success-50": "253 228 241", // #fde4f1
		"--color-success-100": "252 220 237", // #fcdced
		"--color-success-200": "251 211 232", // #fbd3e8
		"--color-success-300": "249 184 219", // #f9b8db
		"--color-success-400": "245 131 191", // #f583bf
		"--color-success-500": "240 78 164", // #f04ea4
		"--color-success-600": "216 70 148", // #d84694
		"--color-success-700": "180 59 123", // #b43b7b
		"--color-success-800": "144 47 98", // #902f62
		"--color-success-900": "118 38 80", // #762650
		// warning | #787f3d 
		"--color-warning-50": "235 236 226", // #ebece2
		"--color-warning-100": "228 229 216", // #e4e5d8
		"--color-warning-200": "221 223 207", // #dddfcf
		"--color-warning-300": "201 204 177", // #c9ccb1
		"--color-warning-400": "161 165 119", // #a1a577
		"--color-warning-500": "120 127 61", // #787f3d
		"--color-warning-600": "108 114 55", // #6c7237
		"--color-warning-700": "90 95 46", // #5a5f2e
		"--color-warning-800": "72 76 37", // #484c25
		"--color-warning-900": "59 62 30", // #3b3e1e
		// error | #f8e96d 
		"--color-error-50": "254 252 233", // #fefce9
		"--color-error-100": "254 251 226", // #fefbe2
		"--color-error-200": "253 250 219", // #fdfadb
		"--color-error-300": "252 246 197", // #fcf6c5
		"--color-error-400": "250 240 153", // #faf099
		"--color-error-500": "248 233 109", // #f8e96d
		"--color-error-600": "223 210 98", // #dfd262
		"--color-error-700": "186 175 82", // #baaf52
		"--color-error-800": "149 140 65", // #958c41
		"--color-error-900": "122 114 53", // #7a7235
		// surface | #c85ec9 
		"--color-surface-50": "247 231 247", // #f7e7f7
		"--color-surface-100": "244 223 244", // #f4dff4
		"--color-surface-200": "241 215 242", // #f1d7f2
		"--color-surface-300": "233 191 233", // #e9bfe9
		"--color-surface-400": "217 142 217", // #d98ed9
		"--color-surface-500": "200 94 201", // #c85ec9
		"--color-surface-600": "180 85 181", // #b455b5
		"--color-surface-700": "150 71 151", // #964797
		"--color-surface-800": "120 56 121", // #783879
		"--color-surface-900": "98 46 98", // #622e62
		
	}
}