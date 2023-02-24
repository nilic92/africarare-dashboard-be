enum Permissions {
	// PRODUCTS_READ = 'read:products',
	// PRODUCTS_WRITE = 'write:products',
	// PRODUCTS_UPDATE = 'update:products',
	// PRODUCTS_DELETE = 'delete:products',

	// PARTNERS_READ = 'read:partners',
	// PARTNERS_WRITE = 'write:partners',
	// PARTNERS_UPDATE = 'update:partners',
	// PARTNERS_DELETE = 'delete:partners',

	// PROCUREMENTS_READ = 'read:procurements',
	// PROCUREMENTS_WRITE = 'write:procurements',
	// PROCUREMENTS_UPDATE = 'update:procurements',
	// PROCUREMENTS_DELETE = 'delete:procurements',

	// PROCESSING_READ = 'read:processing',
	// PROCESSING_WRITE = 'write:processing',
	// PROCESSING_UPDATE = 'update:processing',
	// PROCESSING_DELETE = 'delete:processing',

	// DISTILLATION_READ = 'read:distillation',
	// DISTILLATION_WRITE = 'write:distillation',
	// DISTILLATION_UPDATE = 'update:distillation',
	// DISTILLATION_DELETE = 'delete:distillation',

	// BOTTLING_READ = 'read:bottling',
	// BOTTLING_WRITE = 'write:bottling',
	// BOTTLING_UPDATE = 'update:bottling',
	// BOTTLING_DELETE = 'delete:bottling',

	// PACKAGING_READ = 'read:packaging',
	// PACKAGING_WRITE = 'write:packaging',
	// PACKAGING_UPDATE = 'update:packaging',
	// PACKAGING_DELETE = 'delete:packaging',

	// WASTES_READ = 'read:wastes',
	// WASTES_WRITE = 'write:wastes',
	// WASTES_UPDATE = 'update:wastes',
	// WASTES_DELETE = 'delete:wastes',

	// SALES_READ = 'read:sales',
	// SALES_WRITE = 'write:sales',
	// SALES_UPDATE = 'update:sales',
	// SALES_DELETE = 'delete:sales',

	USERS_READ = 'read:users',
	USERS_WRITE = 'write:users',
	USERS_UPDATE = 'update:users',
	USERS_DELETE = 'delete:users',

	// INVOICES_READ = 'read:invoices',
	// INVOICES_WRITE = 'write:invoices',
	// INVOICES_UPDATE = 'update:invoices',
	// INVOICES_DELETE = 'delete:invoices',

	// FINANCE_READ = 'read:finance',
	// FINANCE_WRITE = 'write:finance',
	// FINANCE_UPDATE = 'update:finance',
	// FINANCE_DELETE = 'delete:finance',

	ORGANISATIONS_READ = 'read:organisations',
	ORGANISATIONS_WRITE = 'write:organisations',
	ORGANISATIONS_UPDATE = 'update:organisations',
	ORGANISATIONS_DELETE = 'delete:organisations',
}

export type PermissionsType = `${Permissions}`;

// ADMIN PERMISSIONS
export const adminPermissions = Object.values(Permissions);
