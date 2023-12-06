﻿using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace SteffBeckers.CRM;

[DependsOn(
    typeof(AbpVirtualFileSystemModule)
    )]
public class CRMInstallerModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<CRMInstallerModule>();
        });
    }
}
